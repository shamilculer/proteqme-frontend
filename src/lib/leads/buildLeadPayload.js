/**
 * Normalises Cal.com embed bookingSuccessfulV2 / bookingSuccessful payloads.
 */
import { resolvePhoneValue, toE164Phone } from "@/lib/phone";
import {
  getCalBookingLink,
  getQuoteRequestLink,
  getRescheduleLink,
  getResponseSlaHours,
  getServicePageLinks,
  resolveCrmLifecycleStage,
} from "@/lib/leads/serviceContent";

function pickFirst(...values) {
  for (const value of values) {
    if (value === null || value === undefined) continue;
    if (typeof value === "string" && value.trim() === "") continue;
    return value;
  }
  return null;
}

export function normalizeCalBooking(booking) {
  if (!booking || typeof booking !== "object") return null;

  // Deprecated bookingSuccessful nests the real booking under `.booking`
  const root =
    booking.booking && typeof booking.booking === "object"
      ? { ...booking.booking, ...booking }
      : booking;

  const attendee =
    root.attendees?.[0] ||
    root.attendee ||
    root.responses ||
    booking.attendees?.[0] ||
    null;

  const attendeeEmail =
    (attendee != null &&
      typeof attendee === "object" &&
      (attendee.email || attendee.Email)) ||
    root.email ||
    null;

  const attendeeName =
    (attendee != null &&
      typeof attendee === "object" &&
      (attendee.name || attendee.Name || attendee.fullName)) ||
    null;

  const startTime = pickFirst(
    root.startTime,
    root.start,
    root.startsAt,
    root.date,
    booking.startTime,
    booking.date,
  );

  const endTime = pickFirst(
    root.endTime,
    root.end,
    root.endsAt,
    booking.endTime,
  );

  const videoCallUrl = pickFirst(
    root.videoCallUrl,
    root.metadata?.videoCallUrl,
    root.location,
    booking.videoCallUrl,
  );

  // No usable booking payload
  if (!startTime && !root.uid && !booking.uid) {
    return null;
  }

  return {
    uid: pickFirst(root.uid, booking.uid),
    title: pickFirst(root.title, root.eventType?.title, booking.title),
    startTime,
    endTime,
    status: pickFirst(root.status, booking.status),
    eventTypeId: pickFirst(root.eventTypeId, booking.eventTypeId),
    videoCallUrl,
    attendeeEmail,
    attendeeName,
  };
}

/**
 * Human-readable booking date/time for Brevo attributes and email templates.
 */
export function formatBookingForBrevo(startTime, endTime) {
  if (!startTime) {
    return {
      BOOKING_START_ISO: "",
      BOOKING_END_ISO: "",
      BOOKING_DATE: "",
      BOOKING_TIME: "",
      BOOKING_DATETIME: "",
      BOOKING_TIMEZONE: "",
      BOOKING_DURATION_MINUTES: "",
      DEMO_DATE_ISO: "",
    };
  }

  const start = new Date(startTime);
  const end = endTime ? new Date(endTime) : null;

  if (Number.isNaN(start.getTime())) {
    return {
      BOOKING_START_ISO: startTime,
      BOOKING_END_ISO: endTime || "",
      BOOKING_DATE: "",
      BOOKING_TIME: "",
      BOOKING_DATETIME: "",
      BOOKING_TIMEZONE: "",
      BOOKING_DURATION_MINUTES: "",
      DEMO_DATE_ISO: "",
    };
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  });

  const timezoneFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZoneName: "short",
    timeZone,
  });

  const date = dateFormatter.format(start);
  const startClock = timeFormatter.format(start);
  const endClock = end && !Number.isNaN(end.getTime()) ? timeFormatter.format(end) : "";
  const timeRange = endClock ? `${startClock} – ${endClock}` : startClock;
  const timezone =
    timezoneFormatter
      .formatToParts(start)
      .find((part) => part.type === "timeZoneName")?.value || timeZone;

  const durationMinutes =
    end && !Number.isNaN(end.getTime())
      ? String(Math.round((end.getTime() - start.getTime()) / 60000))
      : "";

  return {
    BOOKING_START_ISO: startTime,
    BOOKING_END_ISO: endTime || "",
    BOOKING_DATE: date,
    BOOKING_TIME: timeRange,
    BOOKING_DATETIME: `${date} at ${startClock} (${timezone})`,
    BOOKING_TIMEZONE: timezone,
    BOOKING_DURATION_MINUTES: durationMinutes,
    // Machine-readable date (YYYY-MM-DD) for Brevo's date-attribute automation
    // triggers (e.g. "send 24h before this date") — BOOKING_DATE above is a
    // formatted string and can't be used for that.
    DEMO_DATE_ISO: start.toISOString().slice(0, 10),
  };
}

function splitName(data = {}, booking = null) {
  const full =
    data.name ||
    data.fullName ||
    data["full-name"] ||
    data.firstName ||
    booking?.attendeeName ||
    "";

  const parts = String(full).trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || "";

  return { firstName, lastName, fullName: full };
}

/**
 * Maps funnel type + LEAD_TYPE to Brevo tags.
 */
export function getBrevoTags({ type, popupSlug, data }) {
  const tagMap = {
    demo: "Demo Requested",
    contact: "Contact Enquiry",
    partner: "Partner Application",
    newsletter: "Newsletter",
    "webinar-gate": "Webinar Viewer",
    resource: "Resource Download",
  };

  const tag = tagMap[type] || "Contact Enquiry";
  const enquiry = resolveLeadType({ type, popupSlug, data });
  const subTag = enquiry.label || enquiry.value || popupSlug || "";

  return { tag, subTag: String(subTag) };
}

/** Home popup "I'm interested in" values → LEAD_TYPE labels. */
export const SERVICE_LEAD_LABELS = {
  advisory: "Consultancy & Advisory",
  learning: "Proteq Learning",
  systems: "RegTech Systems",
  "ai-investments": "AI Investments",
  aurum: "AI Investments",
  general: "General Enquiry",
};

/**
 * Service-specific popup slugs → LEAD_TYPE.
 * Home `consultation` uses the form `service` field instead.
 */
export const POPUP_LEAD_LABELS = {
  "learning-enquiry": "Proteq Learning",
  learning: "Proteq Learning",
  advisory: "Consultancy & Advisory",
  consultancy: "Consultancy & Advisory",
  "consultancy-advisory": "Consultancy & Advisory",
  "advisory-enquiry": "Consultancy & Advisory",
  systems: "RegTech Systems",
  "systems-enquiry": "RegTech Systems",
  "ai-investments": "AI Investments",
  "ai-investments-enquiry": "AI Investments",
  aurum: "AI Investments",
};

function humanizeSlug(value) {
  return String(value)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function leadTypeFromServiceValue(raw) {
  if (!raw) return null;
  const value = String(raw).trim();
  if (!value) return null;
  return {
    value,
    label: SERVICE_LEAD_LABELS[value] || humanizeSlug(value),
  };
}

function leadTypeFromPopupSlug(popupSlug = "") {
  const slug = String(popupSlug || "").toLowerCase().trim();
  if (!slug || slug === "consultation") return null;

  if (POPUP_LEAD_LABELS[slug]) {
    return { value: slug, label: POPUP_LEAD_LABELS[slug] };
  }

  // Allow CMS slugs that contain the service key
  if (slug.includes("learning") || slug.includes("training")) {
    return { value: "learning", label: "Proteq Learning" };
  }
  if (slug.includes("system") || slug.includes("regtech")) {
    return { value: "systems", label: "RegTech Systems" };
  }
  if (slug.includes("ai-invest") || slug.includes("aurum")) {
    return { value: "ai-investments", label: "AI Investments" };
  }
  if (
    slug.includes("advisor") ||
    slug.includes("advisory") ||
    slug.includes("consultanc")
  ) {
    return { value: "advisory", label: "Consultancy & Advisory" };
  }

  return null;
}

/**
 * LEAD_TYPE rules:
 * 1. Home popup (`consultation` / service select) → selected service label
 * 2. Service popups → that service label
 * 3. Contact form → "Contact Enquiry"
 * 4. Partner form → "Partner"
 *
 * Funnel type (demo/contact) is separate — stored as LEAD_FUNNEL.
 */
export function resolveLeadType({ type = "", popupSlug = "", data = {} } = {}) {
  if (type === "partner") {
    return { value: "partner", label: "Partner", popupSlug };
  }

  if (type === "newsletter") {
    return { value: "newsletter", label: "Newsletter", popupSlug };
  }

  // Home popup / any form that asks which service
  const fromService = leadTypeFromServiceValue(data.service);
  if (fromService) {
    return { ...fromService, popupSlug };
  }

  // Dedicated service popups (not the home consultation picker)
  const fromPopup = leadTypeFromPopupSlug(popupSlug);
  if (fromPopup) {
    return { ...fromPopup, popupSlug };
  }

  // Standalone contact page form
  if (type === "contact" && !popupSlug) {
    return { value: "contact", label: "Contact Enquiry", popupSlug };
  }

  if (type === "contact") {
    return { value: "contact", label: "Contact Enquiry", popupSlug };
  }

  return { value: "", label: "", popupSlug };
}

/** @deprecated Use resolveLeadType — kept for callers that still pass (data, slug, source). */
export function resolveEnquiryInterest(data = {}, popupSlug = "", _source = "") {
  return resolveLeadType({ data, popupSlug, type: "" });
}

function resolveFunnelType({ typeOverride, popup }) {
  if (typeOverride) return typeOverride;
  if (popup?.calendarStep?.enabled) {
    return popup.calendarStep.leadType || "demo";
  }
  return "contact";
}

/**
 * Single lead object used for console logging now and POST /api/leads → Brevo later.
 */
export function buildLeadPayload({
  popup,
  data = {},
  booking = null,
  calendarSkipped = false,
  type: typeOverride = null,
  source: sourceOverride = null,
}) {
  // Funnel type drives Brevo tags (Demo Requested, Contact Enquiry, …)
  const funnelType = resolveFunnelType({ typeOverride, popup });

  const source =
    sourceOverride ||
    (typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : "");

  // LEAD_TYPE = service selected / service popup / contact / partner — never "demo"
  const enquiry = resolveLeadType({
    type: funnelType,
    popupSlug: popup?.slug,
    data,
  });
  const leadTypeLabel = enquiry.label || enquiry.value || "Contact Enquiry";

  const normalizedBooking = normalizeCalBooking(booking);
  const bookingFormats = formatBookingForBrevo(
    normalizedBooking?.startTime,
    normalizedBooking?.endTime,
  );

  const { firstName, lastName, fullName } = splitName(data, normalizedBooking);
  const email = data.email || normalizedBooking?.attendeeEmail || "";
  const phone = toE164Phone(resolvePhoneValue(data));
  const company = data.company || data.companyName || "";

  const { tag, subTag } = getBrevoTags({
    type: funnelType,
    popupSlug: popup?.slug,
    data,
  });

  const calBookingLink = getCalBookingLink();

  // Enquiry auto-responder fields (Sequence 2) — only meaningful for the
  // general contact/enquiry funnel.
  const enquiryAttributes =
    funnelType === "contact"
      ? {
          ENQUIRY_SERVICE_INTEREST: enquiry.label || "",
          ...getServicePageLinks(data.service || enquiry.value),
          RESPONSE_SLA_HOURS: getResponseSlaHours(),
          QUOTE_REQUEST_LINK: getQuoteRequestLink(),
        }
      : {};

  const hasBooking = Boolean(normalizedBooking?.startTime || normalizedBooking?.uid);
  const bookingStatus = hasBooking
    ? "booked"
    : calendarSkipped
      ? "skipped"
      : "no_calendar";

  /** Only attach booking attrs when we have real calendar data or an explicit skip. */
  const bookingAttributes = hasBooking
    ? {
        BOOKING_UID: normalizedBooking?.uid || "",
        BOOKING_TITLE: normalizedBooking?.title || "",
        BOOKING_VIDEO_URL: normalizedBooking?.videoCallUrl || "",
        BOOKING_STATUS: bookingStatus,
        CALENDAR_SKIPPED: false,
        // Exact-value status for Brevo automation branching (unlike
        // BOOKING_STATUS, which accumulates history on repeat submits).
        ...(funnelType === "demo" ? { DEMO_STATUS: "Booked" } : {}),
        RESCHEDULE_LINK: getRescheduleLink(normalizedBooking?.uid),
        ...bookingFormats,
      }
    : calendarSkipped
      ? {
          BOOKING_STATUS: "skipped",
          CALENDAR_SKIPPED: true,
        }
      : {
          BOOKING_STATUS: "no_calendar",
        };

  return {
    type: funnelType,
    popup: popup?.slug,
    source,
    submittedAt: new Date().toISOString(),
    calendarSkipped,
    booking: normalizedBooking
      ? { ...normalizedBooking, formatted: bookingFormats }
      : null,
    bookingStatus,
    form: data,
    brevo: {
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        PHONE: phone,
        SMS: phone,
        LANDLINE_NUMBER: phone,
        COMPANY: company,
        LEAD_SOURCE: source,
        LEAD_TYPE: leadTypeLabel,
        LEAD_FUNNEL: funnelType,
        POPUP_SLUG: popup?.slug || "",
        CRM_LIFECYCLE_STAGE: resolveCrmLifecycleStage({ funnelType, hasBooking }),
        ...(calBookingLink
          ? { SALES_REP_CALENDAR_LINK: calBookingLink, CONSULTATION_LINK: calBookingLink }
          : {}),
        ...enquiryAttributes,
        ...bookingAttributes,
      },
      tags: [tag, subTag].filter(Boolean),
    },
  };
}

import { postLead } from "@/lib/leads/postLead";

/**
 * Submit lead to /api/leads → Brevo.
 */
export async function submitLead(payload) {
  if (process.env.NODE_ENV === "development") {
    console.group("[Proteq Lead]");
    console.log("Submitting:", payload);
    console.groupEnd();
  }

  return postLead({
    type: payload.type,
    source: payload.source,
    popup: payload.popup,
    form: payload.form,
    booking: payload.booking,
    calendarSkipped: payload.calendarSkipped,
  });
}
