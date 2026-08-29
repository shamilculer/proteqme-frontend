import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { getPayload } from "payload";
import configPromise from "@payload-config";

import { formatBookingForBrevo } from "@/lib/leads/buildLeadPayload";
import { getRescheduleLink } from "@/lib/leads/serviceContent";
import { updateBrevoContactAttributes } from "@/lib/brevo";

/**
 * Cal.com triggers we care about → the bookingStatus value they resolve to.
 * BOOKING_CREATED is intentionally excluded — that's already captured
 * client-side (bookingSuccessfulV2) at form-submission time.
 */
const STATUS_BY_TRIGGER = {
  BOOKING_RESCHEDULED: "booked", // resync to the new date, same as a fresh booking
  BOOKING_CANCELLED: "cancelled",
  MEETING_ENDED: "completed",
};

const DEMO_STATUS_LABELS = {
  booked: "Booked",
  cancelled: "Cancelled",
  completed: "Completed",
  no_show: "No-show",
};

function verifySignature(rawBody, signature) {
  const secret = process.env.CALCOM_WEBHOOK_SECRET?.trim();
  if (!secret) return true; // not configured — allow (local/dev)
  if (!signature) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, "hex"),
      Buffer.from(signature, "hex"),
    );
  } catch {
    return false;
  }
}

/**
 * On BOOKING_RESCHEDULED, Cal.com's `uid` is the NEW booking's id and
 * `rescheduleUid` is the OLD one — the id we actually have stored on the
 * lead. Every other trigger just carries the booking's current uid.
 */
function extractLookupUid(triggerEvent, payload = {}) {
  if (triggerEvent === "BOOKING_RESCHEDULED") {
    return payload.rescheduleUid || payload.uid || payload.bookingUid || null;
  }
  return payload.uid || payload.bookingUid || payload.booking?.uid || null;
}

function extractCurrentUid(triggerEvent, payload = {}) {
  if (triggerEvent === "BOOKING_RESCHEDULED") {
    return payload.uid || payload.bookingUid || null;
  }
  return payload.uid || payload.bookingUid || payload.booking?.uid || null;
}

function extractNoShow(payload = {}) {
  if (typeof payload.noShow === "boolean") return payload.noShow;
  const attendee = Array.isArray(payload.attendees) ? payload.attendees[0] : null;
  if (attendee && typeof attendee.noShow === "boolean") return attendee.noShow;
  return null;
}

export async function POST(request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-cal-signature-256");

  if (!verifySignature(rawBody, signature)) {
    console.warn("[Cal.com webhook] Invalid signature");
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const triggerEvent = body?.triggerEvent;
  const eventPayload = body?.payload || {};
  const lookupUid = extractLookupUid(triggerEvent, eventPayload);
  const currentUid = extractCurrentUid(triggerEvent, eventPayload) || lookupUid;

  if (!lookupUid) {
    return NextResponse.json({ success: true, skipped: "no_booking_uid" });
  }

  let status = STATUS_BY_TRIGGER[triggerEvent];
  if (triggerEvent === "BOOKING_NO_SHOW_UPDATED") {
    const noShow = extractNoShow(eventPayload);
    status = noShow === false ? "completed" : "no_show";
  }

  if (!status) {
    // Not an event we track (e.g. BOOKING_CREATED, BOOKING_REQUESTED, ...)
    return NextResponse.json({ success: true, skipped: "untracked_trigger" });
  }

  try {
    const payloadClient = await getPayload({ config: configPromise });
    const { docs } = await payloadClient.find({
      collection: "leads",
      where: { "booking.uid": { equals: lookupUid } },
      limit: 1,
      overrideAccess: true,
    });

    const lead = docs?.[0];
    if (!lead) {
      console.warn("[Cal.com webhook] No lead found for booking uid", lookupUid);
      return NextResponse.json({ success: true, skipped: "lead_not_found" });
    }

    const startTime = eventPayload.startTime || lead.booking?.startTime || "";
    const endTime = eventPayload.endTime || lead.booking?.endTime || "";
    const bookingFormats = formatBookingForBrevo(startTime, endTime);

    await payloadClient.update({
      collection: "leads",
      id: lead.id,
      overrideAccess: true,
      data: {
        bookingStatus: status,
        booking: {
          ...lead.booking,
          uid: currentUid,
          startTime,
          endTime,
          status: triggerEvent,
        },
      },
    });

    if (lead.email) {
      await updateBrevoContactAttributes(lead.email, {
        DEMO_STATUS: DEMO_STATUS_LABELS[status] || "",
        BOOKING_STATUS: status,
        RESCHEDULE_LINK: getRescheduleLink(currentUid),
        ...bookingFormats,
      });
    }

    return NextResponse.json({ success: true, leadId: lead.id, status });
  } catch (error) {
    console.error("[Cal.com webhook] Failed to process event", error);
    return NextResponse.json({ message: "Webhook processing failed" }, { status: 500 });
  }
}
