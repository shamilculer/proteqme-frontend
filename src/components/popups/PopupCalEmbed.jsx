"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

import {
  buildCalPrefill,
  getCalPrefillKey,
  resolveCalLink,
} from "@/lib/calcom";
import { cn } from "@/lib/utils";

const BOOKING_EVENTS = new Set([
  "bookingSuccessfulV2",
  "bookingSuccessful",
]);

const EMBED_JS_URL = "https://app.cal.com/embed/embed.js";

function extractBookingFromEvent(event) {
  const raw = event?.detail?.data ?? event?.data ?? null;
  if (!raw || typeof raw !== "object") return null;

  // Deprecated `bookingSuccessful` nests details under `.booking`
  if (raw.booking && typeof raw.booking === "object") {
    return {
      ...raw.booking,
      startTime:
        raw.booking.startTime ||
        raw.booking.start ||
        raw.date ||
        null,
      endTime: raw.booking.endTime || raw.booking.end || null,
      title: raw.booking.title || raw.eventType?.title || null,
      videoCallUrl:
        raw.booking.videoCallUrl ||
        raw.booking.metadata?.videoCallUrl ||
        null,
      duration: raw.duration,
      organizer: raw.organizer,
      confirmed: raw.confirmed,
    };
  }

  return raw;
}

function appendPrefillToCalLink(calLink, config = {}) {
  const [path, existingQuery = ""] = calLink.split("?");
  const params = new URLSearchParams(existingQuery);

  Object.entries(config).forEach(([key, value]) => {
    if (!value || typeof value !== "string") return;
    if (key === "location" || key.startsWith("ui.")) return;
    params.set(key, value);
  });

  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

async function pushPrefillToEmbed(config) {
  if (!config || Object.keys(config).length === 0) return;

  const cal = await getCalApi({ embedJsUrl: EMBED_JS_URL });
  const instance = cal?.instance;

  if (instance?.doInIframe) {
    instance.doInIframe({ method: "connect", arg: config });
  }
}

export default function PopupCalEmbed({
  calLink,
  formValues,
  popupSlug = "",
  onBookingSuccessful,
  className,
}) {
  const resolvedLink = resolveCalLink(calLink);
  const onSuccessRef = useRef(onBookingSuccessful);
  const handledRef = useRef(false);
  const prefillRef = useRef({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const calConfig = useMemo(
    () => buildCalPrefill(formValues, { popupSlug }),
    [formValues, popupSlug],
  );

  const calMountKey = useMemo(
    () => getCalPrefillKey(formValues, popupSlug),
    [formValues, popupSlug],
  );

  const calLinkWithPrefill = useMemo(
    () => appendPrefillToCalLink(resolvedLink, calConfig),
    [resolvedLink, calConfig],
  );

  prefillRef.current = calConfig;

  const applyPrefill = useCallback(async () => {
    await pushPrefillToEmbed(prefillRef.current);
  }, []);

  useEffect(() => {
    onSuccessRef.current = onBookingSuccessful;
  }, [onBookingSuccessful]);

  useEffect(() => {
    handledRef.current = false;
    setBookingConfirmed(false);
  }, [resolvedLink, calMountKey]);

  useEffect(() => {
    if (!resolvedLink) return undefined;

    let cancelled = false;

    const handleBooking = (event) => {
      if (cancelled || handledRef.current) return;

      const eventType = event?.detail?.type;
      if (eventType && !BOOKING_EVENTS.has(eventType)) return;

      handledRef.current = true;
      setBookingConfirmed(true);

      const booking = extractBookingFromEvent(event);
      onSuccessRef.current?.(booking);
    };

    const handlePrefillMoment = () => {
      if (!cancelled) {
        void applyPrefill();
      }
    };

    (async () => {
      const cal = await getCalApi({ embedJsUrl: EMBED_JS_URL });
      if (cancelled) return;

      cal("on", {
        action: "linkReady",
        callback: handlePrefillMoment,
      });

      cal("on", {
        action: "navigatedToBooker",
        callback: handlePrefillMoment,
      });

      cal("on", {
        action: "bookingSuccessfulV2",
        callback: handleBooking,
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: handleBooking,
      });

      cal("on", {
        action: "*",
        callback: (event) => {
          const eventType = event?.detail?.type;
          if (eventType && BOOKING_EVENTS.has(eventType)) {
            handleBooking(event);
          }
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [resolvedLink, calMountKey, applyPrefill]);

  if (!resolvedLink) {
    return (
      <div
        className={cn(
          "rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500",
          className,
        )}
      >
        Calendar booking is not configured yet. Set{" "}
        <code className="text-xs">NEXT_PUBLIC_CALCOM_LINK</code> or a Cal link on
        this popup in the CMS.
      </div>
    );
  }

  if (bookingConfirmed) {
    return (
      <div
        className={cn(
          "flex min-h-[220px] flex-col items-center justify-center rounded-xl bg-zinc-50 px-6 py-10 text-center",
          className,
        )}
      >
        <div className="mb-3 size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm font-medium text-zinc-800">Booking confirmed</p>
        <p className="mt-1 text-xs text-zinc-500">Just a moment…</p>
      </div>
    );
  }

  return (
    <div className={cn("min-h-[520px] w-full overflow-hidden rounded-xl", className)}>
      <Cal
        key={calMountKey}
        embedJsUrl={EMBED_JS_URL}
        calLink={calLinkWithPrefill}
        config={calConfig}
      />
    </div>
  );
}
