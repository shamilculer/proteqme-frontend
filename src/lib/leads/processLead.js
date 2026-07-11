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

  // Only set calendar flag when this lead actually involved the calendar step
  if (payload.booking || payload.calendarSkipped) {
    attributes.CALENDAR_SKIPPED = Boolean(payload.calendarSkipped);
  }

  return attributes;
}

/**
 * Validates input, builds the lead payload, and syncs to Brevo.
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

  const brevoResult = await upsertBrevoContact({
    email,
    attributes,
    tags: payload.brevo.tags,
  });

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
  };
}
