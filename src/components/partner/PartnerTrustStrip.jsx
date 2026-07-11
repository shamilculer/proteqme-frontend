"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

function ProgressiveCounter({ value, duration = 2000, shouldAnimate }) {
  const endValue = Number(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || Number.isNaN(endValue)) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progressRatio = Math.min((timestamp - startTime) / duration, 1);
      const easeRatio = progressRatio * (2 - progressRatio);

      setCount(Math.floor(easeRatio * endValue));

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration, shouldAnimate]);

  return <>{count.toLocaleString()}</>;
}

const DEFAULT_STATS = [
  { value: 30, suffix: "+", label: "Global Markets" },
  { value: 40, suffix: "+", label: "Institutions in Network" },
  { value: 3, suffix: "", label: "Partnership Tracks" },
  { value: 5, suffix: " Days", label: "Application Review" },
];

const DEFAULTS = {
  eyebrow: null,
  heading: null,
  stats: DEFAULT_STATS,
  animate: true,
  sectionId: null,
  particleId: "partner-trust-particles",
};

export default function PartnerTrustStrip({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  stats = DEFAULTS.stats,
  animate = DEFAULTS.animate,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionReveal
      ref={sectionRef}
      id={sectionId || undefined}
      className="section-light relative isolate w-full overflow-hidden border-y border-zinc-200/70 py-14 md:py-16"
      aria-label="Partnership trust signals"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            className="text-primary"
            strokeWidth="1"
            fill="none"
            opacity="0.18"
          >
            <path d="M0 120 L200 80 L420 140 L640 60 L860 110 L1080 40 L1200 90" />
            <path d="M0 160 L180 100 L400 170 L620 90 L840 150 L1060 70 L1200 130" />
          </g>
          <g className="text-primary" fill="currentColor" opacity="0.22">
            <circle cx="200" cy="80" r="4" />
            <circle cx="420" cy="140" r="4" />
            <circle cx="640" cy="60" r="4" />
            <circle cx="860" cy="110" r="4" />
            <circle cx="1080" cy="40" r="4" />
          </g>
        </svg>
      </div>

      <div className="container relative z-10">
        {eyebrow || heading ? (
          <ScrollReveal className="mb-10 text-center">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                {eyebrow}
              </p>
            ) : null}
            {heading ? (
              <h2 className="text-section-heading text-foreground">{heading}</h2>
            ) : null}
          </ScrollReveal>
        ) : null}

        <StaggerContainer
          className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6"
          staggerChildren={0.1}
        >
          {stats.map((stat, index) => (
            <StaggerItem key={itemKey(stat, index)}>
              <div className="text-center transition-transform duration-300 hover:-translate-y-1">
                <p className="text-4xl font-semibold tracking-tight text-primary md:text-[52px]">
                  {animate ? (
                    <ProgressiveCounter
                      value={stat.value}
                      shouldAnimate={inView}
                    />
                  ) : (
                    Number(stat.value).toLocaleString()
                  )}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-500 md:text-base">
                  {stat.label}
                </p>
                {stat.description ? (
                  <p className="mt-2 text-sm text-zinc-600">{stat.description}</p>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
