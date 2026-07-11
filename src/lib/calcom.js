const DEFAULT_CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK || "";

const SKIPPED_NOTE_KEYS = new Set([
  "name",
  "email",
  "phone",
  "company",
  "fullName",
  "full-name",
  "companyName",
  "phone_number",
  "contact_name",
]);

const FIELD_LABELS = {
  service: "Service interest",
  advisoryTopic: "Advisory topic",
  industry: "Industry",
  jurisdiction: "Regulatory context",
  programmeInterest: "Programme interest",
  deliveryFormat: "Delivery format",
  teamSize: "Team size",
  solutionArea: "Solution area",
  engagementType: "Engagement type",
  currentStack: "Current systems",
  interestArea: "Interest area",
  investorType: "Investor type",
  experienceLevel: "Experience level",
  partnershipCategory: "Partnership type",
  message: "Message",
  contact_name: "Contact name",
  phone_number: "Phone number",
};

export function resolveCalLink(override) {
  const link = (override || DEFAULT_CAL_LINK || "").trim();
  return link.replace(/^https?:\/\/cal\.com\//, "").replace(/^\//, "");
}

function formatFieldLabel(key) {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key];
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function buildCalPrefill(formValues = {}, options = {}) {
  const { popupSlug = "" } = options;
  const config = {};

  const name =
    formValues.name ||
    formValues.fullName ||
    formValues["full-name"] ||
    formValues.contact_name ||
    "";
  const email = formValues.email || "";
  const phone = formValues.phone || formValues.phone_number || "";
  const company = formValues.company || formValues.companyName || "";

  if (name) config.name = name;
  if (email) config.email = email;
  if (phone) {
    config.attendeePhoneNumber = phone;
  }

  const noteLines = [];

  if (popupSlug) {
    noteLines.push(`Enquiry: ${popupSlug}`);
  }

  if (company) {
    noteLines.push(`Company: ${company}`);
  }

  if (phone) {
    noteLines.push(`Phone: ${phone}`);
  }

  Object.entries(formValues).forEach(([key, value]) => {
    if (!value || SKIPPED_NOTE_KEYS.has(key)) return;
    noteLines.push(`${formatFieldLabel(key)}: ${value}`);
  });

  if (noteLines.length > 0) {
    config.notes = noteLines.join("\n");
  }

  if (popupSlug) {
    config[`metadata[popupSlug]`] = popupSlug;
  }

  return config;
}

export function hasCalLink(override) {
  return Boolean(resolveCalLink(override));
}

export function getCalPrefillKey(formValues = {}, popupSlug = "") {
  return JSON.stringify({ popupSlug, formValues });
}
