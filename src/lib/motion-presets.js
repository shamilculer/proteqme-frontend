/** Shared motion tokens — broad horizontal slide + pop entrances */

export const revealEase = [0.16, 1, 0.3, 1];

export const revealDuration = 1.38;
export const staggerDuration = 1.22;
export const pageEnterDuration = 1.45;
export const staggerChildrenDelay = 0.16;

/** Legacy px fallback when viewport is unknown (SSR) */
export const slideDistance = {
  x: 520,
  y: 88,
};

export const popHiddenScale = 0.86;

export const revealSpring = {
  type: "spring",
  stiffness: 58,
  damping: 22,
  mass: 1.15,
};

export const revealSpringPop = {
  type: "spring",
  stiffness: 72,
  damping: 22,
  mass: 1.05,
};

export const revealSpringSoft = {
  type: "spring",
  stiffness: 64,
  damping: 18,
  mass: 1.1,
};

export const hoverSpring = {
  type: "spring",
  stiffness: 380,
  damping: 22,
};

export const staggerSpring = {
  type: "spring",
  stiffness: 68,
  damping: 20,
  mass: 1.05,
};

export function compactScale(compact = false) {
  return compact ? 0.88 : 1;
}

export function popHidden(x = 0, y = 0, scale = popHiddenScale) {
  return { x, y, opacity: 0, scale };
}

export const popVisible = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
};

export function resolveSlideX(value, slideX, compact = false) {
  const scale = compactScale(compact);
  if (!value) return 0;
  const abs = Math.abs(value);
  // Small values (e.g. ±12, ±16) are direction hints — use full slide distance.
  const magnitude = abs <= 48 ? slideX : abs;
  return (value < 0 ? -1 : 1) * magnitude * scale;
}

export function resolveSlideOffsets({
  yOffset = 0,
  xOffset = 0,
  compact = false,
  staggerIndex = null,
  slideX = slideDistance.x,
  slideY = slideDistance.y,
}) {
  const scale = compactScale(compact);
  let x = 0;
  let y = 0;

  if (xOffset) {
    x = resolveSlideX(xOffset, slideX, compact);
  } else if (yOffset) {
    y = (yOffset < 0 ? -1 : 1) * Math.abs(yOffset) * scale;
  } else if (staggerIndex != null) {
    x = staggerDirectionX(staggerIndex, compact, slideX);
  } else {
    x = -slideX * scale;
  }

  return { x, y };
}

export function revealTransition(duration, delay = 0, ease = revealEase) {
  const base = { duration, delay, ease };
  return { x: base, y: base, opacity: base, scale: base };
}

export const slideVisible = popVisible;

export function slideFromLeft(compact = false, slideX = slideDistance.x) {
  return { x: -slideX * compactScale(compact) };
}

export function slideFromRight(compact = false, slideX = slideDistance.x) {
  return { x: slideX * compactScale(compact) };
}

export function slideHiddenX(x = slideDistance.x) {
  return popHidden(x);
}

export function slideHiddenY(y = slideDistance.y) {
  return popHidden(0, y);
}

/** Page-load entrances (hero panels — not header) */
export const pageEnterTransition = (delay = 0) =>
  revealTransition(pageEnterDuration, delay);

export const pageEnterSpring = (delay = 0) => ({
  ...revealSpringPop,
  delay,
});

export const pageEnterHidden = (slideX = slideDistance.x) =>
  popHidden(-slideX);
export const pageEnterHiddenX = (slideX = slideDistance.x) => popHidden(slideX);
export const pageEnterVisible = popVisible;

export const revealHidden = (slideX = slideDistance.x) =>
  popHidden(-slideX);
export const revealVisible = popVisible;

export const staggerHidden = (slideX = slideDistance.x) => popHidden(-slideX);
export const staggerVisible = popVisible;

/** Multi-step forms and panels */
export const slidePanelTransition = (delay = 0) =>
  revealTransition(0.85, delay);

export function slidePanelHiddenX(x = slideDistance.x) {
  return popHidden(x);
}

export function slidePanelHiddenY(y = slideDistance.y) {
  return popHidden(0, y);
}

/** Alternate left / right for grid children */
export function staggerDirectionX(
  index,
  compact = false,
  slideX = slideDistance.x,
) {
  const distance = slideX * compactScale(compact);
  return index % 2 === 0 ? -distance : distance;
}

export function buildPopTransition({ spring = true, delay = 0, duration }) {
  if (spring) {
    return { ...revealSpringPop, delay };
  }
  return revealTransition(duration ?? revealDuration, delay);
}
