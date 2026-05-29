"use client";

import React from "react";
import { motion } from "motion/react";

/**
 * ScrollReveal component reveals a single block as it enters the viewport.
 */
export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 16,
  xOffset = 0,
  scale = 1,
  once = true,
  amount = 0.15,
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale: scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.02, 0.43, 1.01], // Decelerating premium cubic bezier
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer is a parent component that triggers staggered reveal transitions for its StaggerItem children.
 */
export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.08,
  once = true,
  amount = 0.1,
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
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
 * StaggerItem is a child component of StaggerContainer that animates relative to its siblings.
 */
export const StaggerItem = ({
  children,
  className = "",
  yOffset = 16,
  xOffset = 0,
  duration = 0.5,
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: yOffset,
          x: xOffset,
        },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            ease: [0.21, 1.02, 0.43, 1.01],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
