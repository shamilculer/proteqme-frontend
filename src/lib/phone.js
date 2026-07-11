import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

/**
 * Resolve a phone-like value from mixed form payloads.
 */
export function resolvePhoneValue(data = {}) {
  if (data == null || typeof data !== "object") return "";

  const candidates = [
    data.phone,
    data.Phone,
    data.PHONE,
    data.mobile,
    data.tel,
    data.telephone,
    data.phoneNumber,
    data.phone_number,
  ];

  for (const candidate of candidates) {
    if (candidate == null) continue;
    const asString = String(candidate).trim();
    if (asString) return asString;
  }

  return "";
}

/**
 * Normalize any user/input phone string to E.164 (`+9198…`).
 * Returns "" when the value cannot be parsed into a valid number.
 *
 * Uses libphonenumber-js (safe on server) — not react-phone-number-input.
 */
export function toE164Phone(value, defaultCountry = "AE") {
  if (value == null) return "";

  const raw = String(value).trim();
  if (!raw) return "";

  try {
    const parsed =
      parsePhoneNumberFromString(raw) ||
      parsePhoneNumberFromString(raw, defaultCountry);

    if (parsed?.isValid()) {
      return parsed.format("E.164");
    }
  } catch {
    // fall through
  }

  // Already looks like E.164 but failed strict validation — keep digits only.
  const compact = raw.replace(/[\s().-]/g, "");
  if (/^\+[1-9]\d{7,14}$/.test(compact)) {
    return compact;
  }

  return "";
}

export { isValidPhoneNumber };
