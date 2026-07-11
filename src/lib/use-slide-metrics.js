"use client";

import { useEffect, useState } from "react";

import { useIsMobile } from "@/lib/use-media-query";

const MOBILE_X_RATIO = 0.34;
const DESKTOP_X_RATIO = 0.48;

/**
 * Viewport-based slide distance so elements travel across most of the screen.
 */
export function useSlideMetrics() {
  const isMobile = useIsMobile();
  const [metrics, setMetrics] = useState({ x: 520, y: 80 });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setMetrics({
        x: Math.round(width * (isMobile ? MOBILE_X_RATIO : DESKTOP_X_RATIO)),
        y: Math.round(isMobile ? 64 : 96),
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isMobile]);

  return metrics;
}
