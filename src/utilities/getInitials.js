/**
 * Derive display initials from a person's name (or role as fallback).
 */
export function getInitials(label) {
  const text = String(label || "").trim();
  if (!text) return "?";

  const words = text.split(/\s+/).filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}
