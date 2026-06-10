"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer from "./AurumVideoPlayer";

const statBars = [
  { label: "$30M+ Assets Managed", width: 100 },
  { label: "18,000+ Active Partners", width: 88 },
  { label: "5+ Tech Products", width: 62 },
];

function AnimatedStatBar({ label, targetWidth, delay = 0, animate }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) {
      setWidth(0);
      return;
    }

    const timeout = setTimeout(() => {
      setWidth(targetWidth);
    }, delay);

    return () => clearTimeout(timeout);
  }, [animate, targetWidth, delay]);

  return (
    <div className="aurum-stat-bar">
      <div
        className="aurum-stat-bar-fill"
        style={{ width: `${width}%` }}
      >
        <span className="truncate text-sm font-semibold text-white md:text-[15px]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function AurumFoundationOverview() {
  const sectionRef = useRef(null);
  const [barsInView, setBarsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsInView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-aurum-alt w-full py-16 md:py-20"
    >
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal xOffset={-12}>
            <p className="aurum-section-label">Platform Scale</p>

            <h2 className="text-section-heading text-white">
              Shaping the Future of Finance
            </h2>

            <p className="aurum-text-muted mt-5 text-base leading-relaxed">
              AURUM integrates artificial intelligence and blockchain technology
              to modernise financial management — delivering secure, transparent,
              and scalable solutions for a global digital economy.
            </p>

            <div className="mt-8 space-y-3 md:mt-10 md:space-y-4">
              {statBars.map((bar, index) => (
                <AnimatedStatBar
                  key={bar.label}
                  label={bar.label}
                  targetWidth={bar.width}
                  delay={index * 180}
                  animate={barsInView}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={12}>
            <AurumVideoPlayer
              videoId="uKgSgGClewc"
              playLabel="Play AURUM Foundation video"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
