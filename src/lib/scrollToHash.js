/**
 * Scroll to an in-page hash target, preferring a visible element when
 * the same id is rendered more than once (e.g. mobile + desktop cards).
 */
export function getHashId(hash = "") {
  return decodeURIComponent(String(hash).replace(/^#/, "")).trim();
}

export function findScrollTarget(id) {
  if (!id || typeof document === "undefined") return null;

  let candidates;
  try {
    candidates = document.querySelectorAll(`#${CSS.escape(id)}`);
  } catch {
    candidates = document.querySelectorAll(`[id="${id.replace(/"/g, '\\"')}"]`);
  }

  if (!candidates.length) return null;

  return (
    [...candidates].find((el) => el.getClientRects().length > 0) ||
    candidates[0]
  );
}

export function scrollToHashId(hash, { behavior = "smooth", block = "start" } = {}) {
  const id = getHashId(hash);
  if (!id) return false;

  const target = findScrollTarget(id);
  if (!target) return false;

  target.scrollIntoView({ behavior, block });
  return true;
}

export function navigateToHash(hash, options) {
  const id = getHashId(hash);
  if (!id || typeof window === "undefined") return false;

  const nextHash = `#${id}`;
  const scrolled = scrollToHashId(nextHash, options);

  if (window.location.hash !== nextHash) {
    window.history.pushState(null, "", nextHash);
  }

  // Carousel/hash listeners still expect hashchange
  window.dispatchEvent(new Event("hashchange"));

  return scrolled;
}
