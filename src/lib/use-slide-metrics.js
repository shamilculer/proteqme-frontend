"use client";

import { useEffect, useState } from "react";

import { useIsMobile } from "@/lib/use-media-query";

const MOBILE_X_RATIO = 0.18;
const DESKTOP_X_RATIO = 0.48;
const MOBILE_X_MAX = 72;

function readSlideMetrics(isMobile) {
  if (typeof window === "undefined") {
    // SSR fallback: keep offsets small so hydration never parks content off-screen
    return { x: isMobile ? 48 : 520, y: isMobile ? 48 : 80 };
  }

  const width = window.innerWidth;
  const mobile =
    typeof isMobile === "boolean" ? isMobile : width < 1024;

  if (mobile) {
    return {
      x: Math.min(MOBILE_X_MAX, Math.round(width * MOBILE_X_RATIO)),
      y: 48,
    };
  }

  return {
    x: Math.round(width * DESKTOP_X_RATIO),
    y: 96,
  };
}

/**
 * Viewport-based slide distance so elements travel across most of the screen.
 * Mobile caps stay small enough that whileInView can still intersect.
 */
export function useSlideMetrics() {
  const isMobile = useIsMobile();
  const [metrics, setMetrics] = useState(() => readSlideMetrics(isMobile));

  useEffect(() => {
    const update = () => setMetrics(readSlideMetrics(isMobile));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile]);

  return metrics;
}
