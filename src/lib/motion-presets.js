/** Shared motion tokens for scroll reveals and UI transitions */

export const revealEase = [0.16, 1, 0.3, 1];

export const revealSpring = {
  type: "spring",
  stiffness: 72,
  damping: 22,
  mass: 0.85,
};

export const revealSpringSoft = {
  type: "spring",
  stiffness: 58,
  damping: 24,
  mass: 1,
};

export const hoverSpring = {
  type: "spring",
  stiffness: 380,
  damping: 22,
};

export const staggerSpring = {
  type: "spring",
  stiffness: 68,
  damping: 21,
  mass: 0.9,
};

export const revealHidden = {
  opacity: 0,
  y: 28,
  filter: "blur(8px)",
  scale: 0.97,
};

export const revealVisible = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  scale: 1,
};

export const staggerHidden = {
  opacity: 0,
  y: 22,
  filter: "blur(6px)",
  scale: 0.96,
};

export const staggerVisible = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  scale: 1,
};
