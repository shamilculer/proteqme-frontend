"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useIsMobile } from "@/lib/use-media-query";
import { useRevealReady } from "@/components/providers/PageShell";
import { useSlideMetrics } from "@/lib/use-slide-metrics";
import { cn } from "@/lib/utils";
import {
  buildPopTransition,
  popHidden,
  popVisible,
  resolveSlideOffsets,
  staggerChildrenDelay,
  staggerDuration,
  staggerSpring,
  staggerVisible,
} from "@/lib/motion-presets";

const StaggerIndexContext = createContext(null);

function useStaggerIndex() {
  return useContext(StaggerIndexContext);
}

function isContainerElement(child) {
  if (!React.isValidElement(child)) return false;
  const className = child.props?.className;
  if (!className) return false;
  return /\bcontainer\b/.test(cn(className));
}

function useRevealMotion({
  delay = 0,
  duration,
  yOffset = 0,
  xOffset: xOffsetProp = 0,
  direction = "left",
  spring = true,
}) {
  const reduceMotion = useReducedMotion();
  const revealReady = useRevealReady();
  const isMobile = useIsMobile();
  const { x: slideX, y: slideY } = useSlideMetrics();

  const xOffset =
    xOffsetProp !== 0
      ? xOffsetProp
      : direction === "right"
        ? slideX
        : direction === "left"
          ? -slideX
          : 0;

  const { x, y } = resolveSlideOffsets({
    yOffset,
    xOffset,
    compact: isMobile,
    slideX,
    slideY,
  });

  return {
    reduceMotion,
    revealReady,
    isMobile,
    motionProps: {
      // Stay visible until PageShell signals ready — otherwise content can
      // mount hidden with whileInView disabled and never recover on mobile.
      initial: reduceMotion || !revealReady ? false : popHidden(x, y),
      whileInView: reduceMotion || !revealReady ? undefined : popVisible,
      animate: reduceMotion || !revealReady ? popVisible : undefined,
      transition: buildPopTransition({ spring, delay, duration }),
    },
  };
}

/**
 * ScrollReveal — broad horizontal slide on scroll with scale pop.
 */
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration,
  yOffset = 0,
  xOffset: xOffsetProp = 0,
  direction,
  once = true,
  amount = 0.08,
  spring = true,
}) => {
  const reduceMotion = useReducedMotion();
  const revealReady = useRevealReady();
  const isMobile = useIsMobile();
  const { x: slideX, y: slideY } = useSlideMetrics();

  const xOffset =
    direction === "right"
      ? slideX
      : direction === "left"
        ? -slideX
        : xOffsetProp;

  const { x, y } = resolveSlideOffsets({
    yOffset,
    xOffset,
    compact: isMobile,
    slideX,
    slideY,
  });

  return (
    <motion.div
      className={className}
      initial={reduceMotion || !revealReady ? false : popHidden(x, y)}
      whileInView={reduceMotion || !revealReady ? undefined : popVisible}
      animate={reduceMotion || !revealReady ? popVisible : undefined}
      viewport={{ once, amount, margin: isMobile ? "0px 0px -8px 0px" : "0px 0px -40px 0px" }}
      transition={buildPopTransition({ spring, delay, duration })}
    >
      {children}
    </motion.div>
  );
};

/**
 * SectionReveal — static section shell; animates `.container` children only.
 */
export const SectionReveal = React.forwardRef(function SectionReveal(
  {
    children,
    className = "",
    delay = 0,
    duration,
    yOffset = 0,
    xOffset: xOffsetProp = 0,
    direction = "left",
    once = true,
    amount = 0.06,
    ...props
  },
  ref,
) {
  const { reduceMotion, isMobile, motionProps } = useRevealMotion({
    delay,
    duration,
    yOffset,
    xOffset: xOffsetProp,
    direction,
  });

  const viewport = {
    once,
    amount,
    margin: isMobile ? "0px 0px -8px 0px" : "0px 0px -48px 0px",
  };

  return (
    <section ref={ref} className={className} {...props}>
      {React.Children.map(children, (child) => {
        if (!isContainerElement(child)) return child;
        if (reduceMotion) return child;

        const {
          className: childClassName,
          children: innerChildren,
          ...childRest
        } = child.props;

        return (
          <motion.div
            key={child.key}
            className={childClassName}
            {...childRest}
            {...motionProps}
            viewport={viewport}
          >
            {innerChildren}
          </motion.div>
        );
      })}
    </section>
  );
});

/**
 * StaggerContainer — children alternate slide from left / right.
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
  const revealReady = useRevealReady();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const effectiveStagger = Math.max(staggerChildren, staggerChildrenDelay);
  const items = React.Children.toArray(children);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView={revealReady ? "show" : undefined}
      animate={!revealReady ? "show" : undefined}
      viewport={{ once, amount, margin: "0px 0px -8px 0px" }}
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
      {items.map((child, index) => (
        <StaggerIndexContext.Provider key={index} value={index}>
          {child}
        </StaggerIndexContext.Provider>
      ))}
    </motion.div>
  );
};

/**
 * StaggerItem — alternates left/right when inside StaggerContainer.
 */
export const StaggerItem = ({
  children,
  className = "",
  yOffset = 0,
  xOffset = 0,
  direction,
  duration,
  spring = true,
}) => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const staggerIndex = useStaggerIndex();
  const { x: slideX, y: slideY } = useSlideMetrics();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const resolvedX =
    direction === "right"
      ? slideX
      : direction === "left"
        ? -slideX
        : xOffset;

  const { x, y } = resolveSlideOffsets({
    yOffset,
    xOffset: resolvedX,
    compact: isMobile,
    staggerIndex:
      resolvedX === 0 && yOffset === 0 && staggerIndex != null
        ? staggerIndex
        : null,
    slideX,
    slideY,
  });

  const hidden = popHidden(x, y);

  const show = {
    ...staggerVisible,
    transition: spring
      ? staggerSpring
      : buildPopTransition({ spring: false, duration: duration ?? staggerDuration }),
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
