/** Shared motion tokens for scroll reveals and UI transitions */

export const revealEase = [0.22, 1, 0.36, 1];

export const revealDuration = 0.5;
export const staggerDuration = 0.42;
export const pageEnterDuration = 0.58;
export const staggerChildrenDelay = 0.07;

export const revealSpring = {
  type: "spring",
  stiffness: 52,
  damping: 26,
  mass: 0.95,
};

export const revealSpringSoft = {
  type: "spring",
  stiffness: 46,
  damping: 28,
  mass: 1,
};

export const hoverSpring = {
  type: "spring",
  stiffness: 380,
  damping: 22,
};

export const staggerSpring = {
  type: "spring",
  stiffness: 48,
  damping: 27,
  mass: 0.98,
};

/** Page-load entrances (hero, headers) */
export const pageEnterTransition = (delay = 0) => ({
  duration: pageEnterDuration,
  delay,
  ease: revealEase,
});

export const pageEnterSpring = (delay = 0) => ({
  ...revealSpringSoft,
  delay,
});

export const revealHidden = {
  opacity: 0,
  y: 24,
  filter: "blur(6px)",
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
  y: 18,
  filter: "blur(4px)",
  scale: 0.98,
};

export const staggerVisible = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  scale: 1,
};
