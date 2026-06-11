"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useIsMobile } from "@/lib/use-media-query";
import {
  revealDuration,
  revealEase,
  revealSpringSoft,
  revealTransition,
  staggerChildrenDelay,
  staggerDuration,
  staggerHidden,
  staggerSpring,
  staggerVisible,
} from "@/lib/motion-presets";

function buildRevealState({ yOffset, xOffset, scale, blur = 6, compact = false }) {
  const travel = compact ? yOffset * 0.82 : yOffset;
  const effectiveBlur = compact ? Math.max(3, blur * 0.65) : blur;

  return {
    opacity: 0,
    y: travel,
    x: xOffset,
    scale: compact ? Math.max(scale, 0.98) : scale,
    filter: effectiveBlur > 0 ? `blur(${effectiveBlur}px)` : "blur(0px)",
  };
}

function buildRevealTarget() {
  return {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  };
}

function buildRevealTransition({ spring, delay, duration }) {
  if (spring) return { ...revealSpringSoft, delay };
  return revealTransition(duration ?? revealDuration, delay);
}

/**
 * ScrollReveal — single block entrance on scroll (blur + lift + scale).
 */
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration,
  yOffset = 28,
  xOffset = 0,
  scale = 0.98,
  blur = 5,
  once = true,
  amount = 0.08,
  spring = false,
}) => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : buildRevealState({ yOffset, xOffset, scale, blur, compact: isMobile })
      }
      whileInView={reduceMotion ? undefined : buildRevealTarget()}
      viewport={{ once, amount, margin: "0px 0px -100px 0px" }}
      transition={buildRevealTransition({ spring, delay, duration })}
    >
      {children}
    </motion.div>
  );
};

/**
 * SectionReveal — full-width section entrance on scroll.
 */
export const SectionReveal = ({
  children,
  className = "",
  delay = 0,
  duration,
  yOffset = 24,
  blur = 4,
  once = true,
  amount = 0.05,
  ...props
}) => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <motion.section
      className={className}
      initial={
        reduceMotion
          ? false
          : buildRevealState({
              yOffset,
              xOffset: 0,
              scale: 0.98,
              blur: isMobile ? Math.max(3, blur * 0.65) : blur,
              compact: isMobile,
            })
      }
      whileInView={reduceMotion ? undefined : buildRevealTarget()}
      viewport={{ once, amount, margin: "0px 0px -120px 0px" }}
      transition={buildRevealTransition({ spring: false, delay, duration })}
      {...props}
    >
      {children}
    </motion.section>
  );
};

/**
 * StaggerContainer — orchestrates staggered child reveals.
 */
export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  staggerChildren = staggerChildrenDelay,
  once = true,
  amount = 0.08,
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const effectiveStagger = Math.max(staggerChildren, staggerChildrenDelay);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -100px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: effectiveStagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem — child of StaggerContainer with matched reveal motion.
 */
export const StaggerItem = ({
  children,
  className = "",
  yOffset = 24,
  xOffset = 0,
  scale = 0.98,
  blur = 4,
  duration,
  spring = false,
}) => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const hidden = {
    ...staggerHidden,
    y: isMobile ? yOffset * 0.82 : yOffset,
    x: xOffset,
    scale: isMobile ? Math.max(scale, 0.98) : scale,
    filter: isMobile
      ? `blur(${Math.max(3, blur * 0.65)}px)`
      : blur > 0
        ? `blur(${blur}px)`
        : "blur(0px)",
  };

  const show = {
    ...staggerVisible,
    transition: spring
      ? staggerSpring
      : revealTransition(duration ?? staggerDuration),
  };

  return (
    <motion.div className={className} variants={{ hidden, show }}>
      {children}
    </motion.div>
  );
};

/**
 * HoverLift — subtle spring lift on hover for cards and panels.
 */
export const HoverLift = ({
  children,
  className = "",
  y = -5,
  scale = 1.01,
  as = "div",
}) => {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      whileHover={{ y, scale }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
    >
      {children}
    </Component>
  );
};
