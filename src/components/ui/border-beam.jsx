"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const BRAND_PINK = "#E8185A";
const BRAND_PINK_LIGHT = "#ff6b9d";

/**
 * Spinning conic-gradient border beam in brand pink.
 */
export function BorderBeam({
  className,
  duration = 6,
  colorFrom = BRAND_PINK,
  colorTo = BRAND_PINK_LIGHT,
  reverse = false,
}) {
  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-[-100%] left-1/2 top-1/2 size-[300%] -translate-x-1/2 -translate-y-1/2",
        className
      )}
      style={{
        background: `conic-gradient(from 0deg, transparent 0deg, transparent 35%, ${colorFrom} 48%, ${colorTo} 58%, transparent 72%, transparent 360deg)`,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
