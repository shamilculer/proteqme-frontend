import { toE164Phone } from "@/lib/phone";

const BREVO_API_URL = "https://api.brevo.com/v3";

/**
 * Custom contact attributes this app sends.
 * Brevo silently drops values for attributes that do not exist yet.
 */
export const BREVO_CUSTOM_ATTRIBUTES = [
  { name: "PHONE", type: "text" },
  { name: "COMPANY", type: "text" },
  { name: "MESSAGE", type: "text" },
  { name: "LEAD_SOURCE", type: "text" },
  { name: "LEAD_TYPE", type: "text" },
  { name: "LEAD_FUNNEL", type: "text" },
  { name: "LEAD_FORM_JSON", type: "text" },
  { name: "POPUP_SLUG", type: "text" },
  { name: "BOOKING_STATUS", type: "text" },
  { name: "BOOKING_UID", type: "text" },
  { name: "BOOKING_TITLE", type: "text" },
  { name: "BOOKING_VIDEO_URL", type: "text" },
  { name: "BOOKING_START_ISO", type: "text" },
  { name: "BOOKING_END_ISO", type: "text" },
  { name: "BOOKING_DATE", type: "text" },
  { name: "BOOKING_TIME", type: "text" },
  { name: "BOOKING_DATETIME", type: "text" },
  { name: "BOOKING_TIMEZONE", type: "text" },
  { name: "BOOKING_DURATION_MINUTES", type: "text" },
  { name: "CALENDAR_SKIPPED", type: "boolean" },
  { name: "DEMO_STATUS", type: "text" },
  { name: "DEMO_DATE_ISO", type: "date" },
  { name: "DEMO_RECAP_NOTES", type: "text" },
  { name: "RESCHEDULE_LINK", type: "text" },
  { name: "SALES_REP_CALENDAR_LINK", type: "text" },
  { name: "CONSULTATION_LINK", type: "text" },
  { name: "QUOTE_REQUEST_LINK", type: "text" },
  { name: "CRM_LIFECYCLE_STAGE", type: "text" },
  { name: "ENQUIRY_REFERENCE_NUMBER", type: "text" },
  { name: "ENQUIRY_SERVICE_INTEREST", type: "text" },
  { name: "SERVICE_PAGE_LINK_1", type: "text" },
  { name: "SERVICE_PAGE_LINK_2", type: "text" },
  { name: "RESPONSE_SLA_HOURS", type: "text" },
];

/** Profile fields — never overwrite once set on an existing contact. */
const PRESERVE_IF_SET = new Set([
  "FIRSTNAME",
  "LASTNAME",
  "SMS",
  "PHONE",
  "LANDLINE_NUMBER",
  "COMPANY",
  "EXT_ID",
  "CONTACT_TIMEZONE",
]);

/** Activity fields — append on repeat submissions instead of replacing. */
const APPENDABLE = new Set([
  "MESSAGE",
  "LEAD_FORM_JSON",
  "LEAD_SOURCE",
  "LEAD_FUNNEL",
  "POPUP_SLUG",
  "BOOKING_STATUS",
]);

let attributesEnsurePromise = null;

function getApiKey() {
  return process.env.BREVO_API_KEY?.trim() || "";
}

function getListId() {
  const raw = process.env.BREVO_LIST_ID?.trim();
  if (!raw) return null;
  const id = Number(raw);
  return Number.isFinite(id) ? id : null;
}

/**
 * Brevo SMS attribute only accepts international numbers
 * e.g. +447911123456 / 00447911123456 / 447911123456
 */
function normalizeBrevoSms(phone) {
  const e164 = toE164Phone(phone);
  if (!e164) return null;

  const digits = e164.slice(1);
  if (digits.length < 8 || digits.length > 15) return null;
  return e164;
}

function hasValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "boolean") return true;
  if (typeof value === "number") return Number.isFinite(value);
  return String(value).trim() !== "";
}

function sanitizeAttributes(attributes = {}) {
  const cleaned = {};
  const phone =
    attributes.PHONE ||
    attributes.SMS ||
    attributes.phone ||
    attributes.Phone ||
    "";

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "SMS" || key === "PHONE" || key === "LANDLINE_NUMBER") return;
    if (!hasValue(value)) return;

    if (typeof value === "boolean") {
      cleaned[key] = value;
      return;
    }

    if (typeof value === "number" && Number.isFinite(value)) {
      cleaned[key] = value;
      return;
    }

    cleaned[key] = String(value);
  });

  if (phone) {
    const e164 = toE164Phone(phone);
    const asText = e164 || String(phone).trim();

    if (asText) cleaned.PHONE = asText;

    const sms = normalizeBrevoSms(asText);
    if (sms) {
      cleaned.SMS = sms;
      cleaned.LANDLINE_NUMBER = sms;
    }
  }

  return cleaned;
}

function appendAttribute(key, existing, incoming) {
  const prev = String(existing).trim();
  const next = String(incoming).trim();
  if (!next) return prev;
  if (!prev) return next;
  if (prev.includes(next)) return prev;

  if (key === "LEAD_FORM_JSON") {
    try {
      const prevParsed = JSON.parse(prev);
      const nextParsed = JSON.parse(next);
      const history = Array.isArray(prevParsed)
        ? prevParsed
        : [prevParsed];
      history.push({
        submittedAt: new Date().toISOString(),
        form: nextParsed,
      });
      return JSON.stringify(history);
    } catch {
      // fall through to plain join
    }
  }

  return `${prev}\n---\n${next}`;
}

/**
 * Keep existing profile data; only fill blanks / append lead history.
 */
export function mergeBrevoAttributes(existing = {}, incoming = {}) {
  const merged = {};

  for (const [key, value] of Object.entries(incoming)) {
    if (!hasValue(value)) continue;

    const current = existing[key];
    const alreadySet = hasValue(current);

    if (APPENDABLE.has(key) && alreadySet) {
      merged[key] = appendAttribute(key, current, value);
      continue;
    }

    if (PRESERVE_IF_SET.has(key) && alreadySet) {
      continue;
    }

    if (!alreadySet) {
      merged[key] = value;
      continue;
    }

    // Non-preserved keys already set: leave them alone on repeat submits
    // so a second form does not wipe the first lead's details.
  }

  return merged;
}

async function brevoRequest(path, options = {}) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return { skipped: true, reason: "BREVO_API_KEY not configured" };
  }

  const response = await fetch(`${BREVO_API_URL}${path}`, {
    ...options,
    headers: {
      "api-key": apiKey,
      accept: "application/json",
      "content-type": "application/json",
      ...options.headers,
    },
  });

  if (response.ok) {
    if (response.status === 204) return { success: true };
    return response.json().catch(() => ({ success: true }));
  }

  const errorBody = await response.text().catch(() => "");
  const error = new Error(
    `Brevo API ${response.status}: ${errorBody || response.statusText}`,
  );
  error.status = response.status;
  error.body = errorBody;
  throw error;
}

/**
 * Create any missing custom attributes in Brevo (idempotent).
 * Safe to call on every lead — results are cached per process.
 */
export async function ensureBrevoAttributes() {
  if (!getApiKey()) {
    return { skipped: true, reason: "missing_api_key", created: [], existing: [] };
  }

  if (!attributesEnsurePromise) {
    attributesEnsurePromise = (async () => {
      const created = [];
      const existing = [];
      const failed = [];

      for (const attr of BREVO_CUSTOM_ATTRIBUTES) {
        try {
          await brevoRequest(`/contacts/attributes/normal/${attr.name}`, {
            method: "POST",
            body: JSON.stringify({ type: attr.type }),
          });
          created.push(attr.name);
        } catch (error) {
          const body = String(error.body || error.message || "");
          // Already exists
          if (
            error.status === 400 &&
            (body.includes("already exists") ||
              body.includes("duplicate") ||
              body.includes("Attribute name must be unique"))
          ) {
            existing.push(attr.name);
            continue;
          }
          failed.push({ name: attr.name, error: body || error.message });
        }
      }

      if (created.length) {
        console.info("[Brevo] Created contact attributes:", created.join(", "));
      }
      if (failed.length) {
        console.warn("[Brevo] Failed to create attributes:", failed);
      }

      return { success: true, created, existing, failed };
    })().catch((error) => {
      attributesEnsurePromise = null;
      throw error;
    });
  }

  return attributesEnsurePromise;
}

async function getBrevoContact(email) {
  try {
    const encoded = encodeURIComponent(email);
    return await brevoRequest(`/contacts/${encoded}`, { method: "GET" });
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
}

function isDuplicatePhoneError(error) {
  if (!error || error.status !== 400) return false;
  const body = String(error.body || error.message || "");
  return (
    body.includes("duplicate_parameter") &&
    (body.includes("SMS") || body.includes("LANDLINE_NUMBER"))
  );
}

function withoutUniquePhoneFields(attributes = {}) {
  const next = { ...attributes };
  delete next.SMS;
  delete next.LANDLINE_NUMBER;
  return next;
}

async function createOrUpdateContact(body) {
  await brevoRequest("/contacts", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * Force-write attributes via PUT — more reliable than relying on create alone.
 */
async function putContactAttributes(email, attributes) {
  if (!attributes || Object.keys(attributes).length === 0) return;

  const encoded = encodeURIComponent(email);
  await brevoRequest(`/contacts/${encoded}`, {
    method: "PUT",
    body: JSON.stringify({ attributes }),
  });
}

/**
 * List Brevo contact attributes (for setup/debug).
 */
export async function listBrevoAttributes() {
  const data = await brevoRequest("/contacts/attributes", { method: "GET" });
  if (data?.skipped) return data;

  const normal = (data?.attributes || []).filter(
    (attr) => attr.category === "normal" || !attr.category,
  );

  return {
    success: true,
    names: normal.map((attr) => attr.name),
    attributes: normal,
  };
}

/**
 * Inspect what Brevo actually stored for an email (for debugging).
 */
export async function inspectBrevoContact(email) {
  const contact = await getBrevoContact(email);
  if (!contact) {
    return { success: false, found: false, email };
  }

  return {
    success: true,
    found: true,
    email: contact.email,
    listIds: contact.listIds || [],
    attributes: contact.attributes || {},
    attributeKeys: Object.keys(contact.attributes || {}).sort(),
  };
}

/**
 * Create a Brevo contact, or update without overwriting existing profile fields.
 * If SMS/LANDLINE is already used on another contact, retry without those fields
 * so the lead still lands in CRM (PHONE text is kept).
 */
export async function upsertBrevoContact({
  email,
  attributes = {},
  tags = [],
}) {
  if (!email) {
    throw new Error("Email is required for Brevo contact sync");
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("[Brevo] BREVO_API_KEY not set — lead logged but not synced");
    return { skipped: true, reason: "missing_api_key" };
  }

  // Ensure custom fields exist so Brevo does not silently drop them.
  try {
    await ensureBrevoAttributes();
  } catch (error) {
    console.warn("[Brevo] Attribute ensure failed (continuing):", error);
  }

  const incoming = sanitizeAttributes(attributes);
  const existing = await getBrevoContact(email);
  const existingAttributes = existing?.attributes || {};

  const mergedAttributes = existing
    ? mergeBrevoAttributes(existingAttributes, incoming)
    : { ...incoming };

  // Lead metadata should always land, even on repeat emails.
  // Always refresh service interest when provided
  if (hasValue(incoming.LEAD_TYPE)) {
    mergedAttributes.LEAD_TYPE = incoming.LEAD_TYPE;
  }
  if (hasValue(incoming.LEAD_FUNNEL)) {
    mergedAttributes.LEAD_FUNNEL = incoming.LEAD_FUNNEL;
  }

  for (const key of [
    "LEAD_SOURCE",
    "LEAD_FORM_JSON",
    "POPUP_SLUG",
    "BOOKING_STATUS",
    "MESSAGE",
    "CALENDAR_SKIPPED",
    "COMPANY",
    "PHONE",
  ]) {
    if (!hasValue(incoming[key])) continue;

    if (APPENDABLE.has(key) && hasValue(existingAttributes[key])) {
      mergedAttributes[key] = appendAttribute(
        key,
        existingAttributes[key],
        incoming[key],
      );
      continue;
    }

    if (!hasValue(existingAttributes[key])) {
      mergedAttributes[key] = incoming[key];
    }
  }

  const listId = getListId();
  const uniqueTags = [...new Set(tags.filter(Boolean))];

  const buildBody = (attrs) => {
    const body = {
      email,
      updateEnabled: true,
      attributes: attrs,
    };
    if (listId) body.listIds = [listId];
    if (uniqueTags.length > 0) body.tags = uniqueTags;
    return body;
  };

  const syncWithAttributes = async (attrs) => {
    await createOrUpdateContact(buildBody(attrs));
    // Explicit PUT so custom attributes actually land on the contact card.
    try {
      await putContactAttributes(email, attrs);
    } catch (putError) {
      console.warn("[Brevo] PUT attributes failed (create may have succeeded):", putError);
    }
  };

  try {
    await syncWithAttributes(mergedAttributes);
    return {
      success: true,
      email,
      updatedExisting: Boolean(existing),
      preservedProfile: Boolean(existing),
      attributesWritten: Object.keys(mergedAttributes),
    };
  } catch (error) {
    if (!isDuplicatePhoneError(error)) throw error;

    const fallbackAttributes = withoutUniquePhoneFields(mergedAttributes);
    console.warn(
      "[Brevo] SMS/LANDLINE already on another contact — syncing without unique phone fields",
      { email },
    );

    try {
      await syncWithAttributes(fallbackAttributes);
      return {
        success: true,
        email,
        updatedExisting: Boolean(existing),
        preservedProfile: Boolean(existing),
        phoneDeduped: true,
        attributesWritten: Object.keys(fallbackAttributes),
      };
    } catch (retryError) {
      const metadataOnly = { ...fallbackAttributes };
      delete metadataOnly.PHONE;
      console.warn(
        "[Brevo] Retry without PHONE after duplicate phone conflict",
        { email },
      );
      await syncWithAttributes(metadataOnly);
      return {
        success: true,
        email,
        updatedExisting: Boolean(existing),
        preservedProfile: Boolean(existing),
        phoneDeduped: true,
        phoneOmitted: true,
        attributesWritten: Object.keys(metadataOnly),
      };
    }
  }
}

/**
 * Optional transactional auto-responder (template IDs in env).
 */
export async function sendBrevoTransactional({ type, email, params = {} }) {
  const templateEnvKey = `BREVO_TEMPLATE_${String(type).toUpperCase().replace(/-/g, "_")}`;
  const templateId = Number(process.env[templateEnvKey]);

  if (!templateId || !email) {
    return { skipped: true, reason: "no_template" };
  }

  await brevoRequest("/smtp/email", {
    method: "POST",
    body: JSON.stringify({
      templateId,
      to: [{ email }],
      params,
    }),
  });

  return { success: true };
}

/**
 * Direct attribute overwrite for an existing contact — used by webhooks
 * (e.g. Cal.com booking status changes) where the new value must always
 * win, unlike upsertBrevoContact's "preserve/append" merge rules for
 * repeat form submissions.
 */
export async function updateBrevoContactAttributes(email, attributes = {}) {
  if (!email) {
    throw new Error("Email is required for Brevo attribute update");
  }

  if (!getApiKey()) {
    console.warn("[Brevo] BREVO_API_KEY not set — status update not synced");
    return { skipped: true, reason: "missing_api_key" };
  }

  try {
    await ensureBrevoAttributes();
  } catch (error) {
    console.warn("[Brevo] Attribute ensure failed (continuing):", error);
  }

  const cleaned = sanitizeAttributes(attributes);
  if (Object.keys(cleaned).length === 0) {
    return { skipped: true, reason: "no_attributes" };
  }

  await putContactAttributes(email, cleaned);
  return { success: true, email, attributesWritten: Object.keys(cleaned) };
}

export function isBrevoConfigured() {
  return Boolean(getApiKey());
}
