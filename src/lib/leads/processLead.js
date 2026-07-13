import { getPayload } from "payload";
import configPromise from "@payload-config";

import { resolvePhoneValue, toE164Phone } from "@/lib/phone";
import { upsertBrevoContact, sendBrevoTransactional } from "@/lib/brevo";
import {
  buildLeadPayload,
  resolveLeadType,
} from "@/lib/leads/buildLeadPayload";

function normalizeFormData(form = {}) {
  const data = { ...form };

  if (!data.name && data.fullName) data.name = data.fullName;
  if (!data.name && data["full-name"]) data.name = data["full-name"];
  if (!data.company && data.companyName) data.company = data.companyName;

  const phone = toE164Phone(resolvePhoneValue(data));
  if (phone) data.phone = phone;

  return data;
}

function buildPopupStub(popupSlug, type) {
  if (!popupSlug) return null;

  return {
    slug: popupSlug,
    calendarStep: {
      enabled: type === "demo",
      leadType: type === "demo" ? "demo" : "contact",
    },
  };
}

function enrichBrevoAttributes(payload) {
  const form = payload.form || {};
  const attributes = { ...payload.brevo.attributes };

  const message =
    form.message ||
    form.partnershipDescription ||
    form.bioOrLinkedin ||
    "";

  if (message) {
    attributes.MESSAGE = message;
  }

  const formJson = JSON.stringify(form);
  if (formJson && formJson !== "{}") {
    attributes.LEAD_FORM_JSON = formJson;
  }

  if (payload.type) {
    attributes.LEAD_FUNNEL = payload.type;
  }

  const enquiry = resolveLeadType({
    type: payload.type,
    popupSlug: payload.popup,
    data: form,
  });
  attributes.LEAD_TYPE =
    enquiry.label || enquiry.value || attributes.LEAD_TYPE || "Contact Enquiry";

  if (payload.bookingStatus) {
    attributes.BOOKING_STATUS = payload.bookingStatus;
  }

  if (payload.booking || payload.calendarSkipped) {
    attributes.CALENDAR_SKIPPED = Boolean(payload.calendarSkipped);
  }

  return attributes;
}

function formatFormFieldValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item : JSON.stringify(item)))
      .filter(Boolean)
      .join(", ");
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

function humanizeFieldName(key) {
  return String(key)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildFormFields(form = {}) {
  return Object.entries(form)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([field, value]) => ({
      field: humanizeFieldName(field),
      value: formatFormFieldValue(value),
    }));
}

function buildLeadDocument({ payload, attributes, partial = false, brevoSync }) {
  const form = payload.form || {};
  const booking = payload.booking || null;
  const enquiry = resolveLeadType({
    type: payload.type,
    popupSlug: payload.popup,
    data: form,
  });

  return {
    email: payload.brevo?.email || "",
    phone: attributes.PHONE || form.phone || "",
    fullName:
      form.name ||
      form.fullName ||
      form["full-name"] ||
      [attributes.FIRSTNAME, attributes.LASTNAME].filter(Boolean).join(" ") ||
      "",
    firstName: attributes.FIRSTNAME || "",
    lastName: attributes.LASTNAME || "",
    company: attributes.COMPANY || form.company || form.companyName || "",
    funnel: payload.type || "contact",
    leadType:
      enquiry.label ||
      attributes.LEAD_TYPE ||
      enquiry.value ||
      "Contact Enquiry",
    source: payload.source || attributes.LEAD_SOURCE || "",
    popupSlug: payload.popup || "",
    message:
      form.message ||
      form.partnershipDescription ||
      form.bioOrLinkedin ||
      "",
    formFields: buildFormFields(form),
    bookingStatus: payload.bookingStatus || "no_calendar",
    calendarSkipped: Boolean(payload.calendarSkipped),
    booking: booking
      ? {
          uid: booking.uid || "",
          title: booking.title || "",
          startTime: booking.startTime || "",
          endTime: booking.endTime || "",
          status: booking.status || "",
          videoCallUrl: booking.videoCallUrl || "",
          attendeeEmail: booking.attendeeEmail || "",
          attendeeName: booking.attendeeName || "",
        }
      : undefined,
    form,
    brevoTags: payload.brevo?.tags || [],
    brevoAttributes: attributes,
    payloadSnapshot: payload,
    submittedAt: payload.submittedAt || new Date().toISOString(),
    partial: Boolean(partial),
    brevoSync: {
      success: Boolean(brevoSync?.success),
      syncedAt: brevoSync?.success ? new Date().toISOString() : undefined,
      error: brevoSync?.error || "",
    },
  };
}

async function persistLeadDocument(data) {
  try {
    const payload = await getPayload({ config: configPromise });
    const doc = await payload.create({
      collection: "leads",
      data,
      overrideAccess: true,
      depth: 0,
    });
    return { success: true, id: doc.id };
  } catch (error) {
    console.error("[Leads] Failed to persist submission:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unable to save lead",
    };
  }
}

/**
 * Builds the lead payload, stores it in Payload, and syncs to Brevo.
 */
export async function processLeadSubmission(input) {
  const form = normalizeFormData(input.form);
  const popup = buildPopupStub(input.popup, input.type);

  const payload = buildLeadPayload({
    popup,
    data: form,
    booking: input.booking ?? null,
    calendarSkipped: input.calendarSkipped ?? false,
    type: input.type,
    source: input.source || "",
  });

  if (input.source) {
    payload.source = input.source;
    payload.brevo.attributes.LEAD_SOURCE = input.source;
  }

  const email = payload.brevo?.email;
  if (!email) {
    throw new Error("A valid email address is required");
  }

  const attributes = enrichBrevoAttributes(payload);

  let brevoResult = { success: false };
  try {
    brevoResult = await upsertBrevoContact({
      email,
      attributes,
      tags: payload.brevo.tags,
    });
  } catch (error) {
    console.error("[Brevo] Contact sync failed:", error);
    brevoResult = {
      success: false,
      error: error instanceof Error ? error.message : "Brevo sync failed",
    };
  }

  const leadDocument = buildLeadDocument({
    payload,
    attributes,
    partial: Boolean(input.partial),
    brevoSync: brevoResult,
  });

  const persistResult = await persistLeadDocument(leadDocument);
  if (!persistResult.success) {
    throw new Error(persistResult.error || "Unable to save lead in admin");
  }

  let emailResult = { skipped: true };
  try {
    emailResult = await sendBrevoTransactional({
      type: payload.type,
      email,
      params: {
        firstName: attributes.FIRSTNAME || "",
        lastName: attributes.LASTNAME || "",
        source: payload.source || "",
      },
    });
  } catch (error) {
    console.error("[Brevo] Transactional email failed:", error);
  }

  return {
    ...payload,
    brevoSync: brevoResult,
    emailSync: emailResult,
    leadId: persistResult.id || null,
    leadPersisted: Boolean(persistResult.success),
  };
}
