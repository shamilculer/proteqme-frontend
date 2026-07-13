"use client";

import { useEffect, useState } from "react";

import { useIsMobile } from "@/lib/use-media-query";

/** Keep scroll-reveal travel short enough that whileInView still intersects. */
const MOBILE_X_MAX = 48;
const DESKTOP_X_MAX = 88;

function readSlideMetrics(isMobile) {
  if (typeof window === "undefined") {
    return { x: isMobile ? MOBILE_X_MAX : DESKTOP_X_MAX, y: isMobile ? 36 : 56 };
  }

  const width = window.innerWidth;
  const mobile =
    typeof isMobile === "boolean" ? isMobile : width < 1024;

  if (mobile) {
    return {
      x: Math.min(MOBILE_X_MAX, Math.round(width * 0.12)),
      y: 36,
    };
  }

  return {
    x: Math.min(DESKTOP_X_MAX, Math.round(width * 0.06)),
    y: 56,
  };
}

/**
 * Slide distance for scroll reveals. Must stay small: large transforms park
 * content off-screen so IntersectionObserver never fires (blank sections).
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
