/** Shared motion tokens for scroll reveals and UI transitions */

/** Ease-in-out — motion spread evenly across the full duration (feels slow, not snappy) */
export const revealEase = [0.42, 0, 0.58, 1];

export const revealDuration = 1;
export const staggerDuration = 0.9;
export const pageEnterDuration = 1;
export const staggerChildrenDelay = 0.14;

export const revealSpring = {
  type: "spring",
  stiffness: 52,
  damping: 26,
  mass: 0.95,
};

export const revealSpringSoft = {
  type: "spring",
  stiffness: 24,
  damping: 38,
  mass: 1.2,
};

export const hoverSpring = {
  type: "spring",
  stiffness: 380,
  damping: 22,
};

export const staggerSpring = {
  type: "spring",
  stiffness: 24,
  damping: 38,
  mass: 1.2,
};

/** Sync every animated property to the same duration so nothing races ahead */
export function revealTransition(duration, delay = 0, ease = revealEase) {
  const base = { duration, delay, ease };
  return {
    ...base,
    opacity: base,
    y: base,
    x: base,
    scale: base,
    filter: base,
  };
}

/** Page-load entrances (hero, headers) */
export const pageEnterTransition = (delay = 0) =>
  revealTransition(pageEnterDuration, delay);

export const pageEnterSpring = (delay = 0) => ({
  ...revealSpringSoft,
  delay,
});

export const pageEnterHidden = {
  opacity: 0,
  y: 36,
  filter: "blur(8px)",
};

export const pageEnterHiddenX = (x = 32) => ({
  opacity: 0,
  x,
  filter: "blur(6px)",
});

export const pageEnterVisible = {
  opacity: 1,
  y: 0,
  x: 0,
  filter: "blur(0px)",
};

export const revealHidden = {
  opacity: 0,
  y: 28,
  filter: "blur(5px)",
  scale: 0.98,
};

export const revealVisible = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  scale: 1,
};

export const staggerHidden = {
  opacity: 0,
  y: 24,
  filter: "blur(4px)",
  scale: 0.98,
};

export const staggerVisible = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  scale: 1,
};
