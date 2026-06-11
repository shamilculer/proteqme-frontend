"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useIsMobile } from "@/lib/use-media-query";
import {
  revealDuration,
  revealEase,
  revealSpringSoft,
  staggerChildrenDelay,
  staggerDuration,
  staggerHidden,
  staggerSpring,
  staggerVisible,
} from "@/lib/motion-presets";

function buildRevealState({ yOffset, xOffset, scale, blur = 6, compact = false }) {
  const effectiveBlur = compact ? 0 : blur;
  return {
    opacity: 0,
    y: compact ? yOffset * 0.65 : yOffset,
    x: xOffset,
    scale: compact ? 0.99 : scale,
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
  return spring
    ? { ...revealSpringSoft, delay }
    : {
        duration: duration ?? revealDuration,
        delay,
        ease: revealEase,
      };
}

/**
 * ScrollReveal — single block entrance on scroll (blur + lift + scale).
 */
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration,
  yOffset = 18,
  xOffset = 0,
  scale = 0.99,
  blur = 4,
  once = true,
  amount = 0.15,
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
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
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
  yOffset = 14,
  blur = 2,
  once = true,
  amount = 0.08,
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
              scale: 0.99,
              blur: isMobile ? 0 : blur,
              compact: isMobile,
            })
      }
      whileInView={reduceMotion ? undefined : buildRevealTarget()}
      viewport={{ once, amount, margin: "0px 0px -48px 0px" }}
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
  amount = 0.12,
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -32px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
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
  yOffset = 18,
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
    y: isMobile ? yOffset * 0.65 : yOffset,
    x: xOffset,
    scale: isMobile ? 0.99 : scale,
    filter: isMobile ? "blur(0px)" : blur > 0 ? `blur(${blur}px)` : "blur(0px)",
  };

  const show = {
    ...staggerVisible,
    transition: spring
      ? staggerSpring
      : {
          duration: duration ?? staggerDuration,
          ease: revealEase,
        },
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
