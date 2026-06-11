"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer, { AURUM_VIDEO_IDS } from "./AurumVideoPlayer";

const stats = [
  { value: "$30M+", label: "Assets managed", width: 100 },
  { value: "18,000+", label: "Active partners", width: 88 },
  { value: "5+", label: "Tech products", width: 62 },
];

function AnimatedStatBar({ stat, delay = 0, animate }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) {
      setWidth(0);
      return;
    }
    const timeout = setTimeout(() => setWidth(stat.width), delay);
    return () => clearTimeout(timeout);
  }, [animate, stat.width, delay]);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {stat.value}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          {stat.label}
        </p>
      </div>
      <div className="relative mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/90">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-proteq-dark to-primary transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function AurumPlatformSection() {
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
    <SectionReveal
      ref={sectionRef}
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-10 md:py-12"
      aria-labelledby="aurum-platform-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="aurum-platform-particles" variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mb-6 max-w-2xl md:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Platform Scale
          </p>
          <h2
            id="aurum-platform-heading"
            className="text-2xl md:text-[34px] md:leading-[1.15]"
          >
            Shaping the Future of Finance
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
            AI and blockchain technology delivering secure, transparent, and
            scalable financial management for a global digital economy.
          </p>
        </ScrollReveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal xOffset={-12} className="h-full min-h-[220px] lg:min-h-0">
            <AurumVideoPlayer
              videoId={AURUM_VIDEO_IDS.ecosystem}
              playLabel="Play AURUM ecosystem video"
              className="aspect-video h-full min-h-[220px] w-full border-0 shadow-[0_24px_70px_rgba(35,17,67,0.16)] lg:aspect-auto lg:min-h-full"
            />
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="h-full">
            <div className="card-surface flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 p-5 md:p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Platform at a glance
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Aurum Foundation brings AI trading intelligence, gold-backed
                  stability, and Web3 banking into one ecosystem — giving investors
                  a single place to grow, manage, and move assets with
                  blockchain-grade transparency.
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                  From EX-AI strategies and Neyro neural networks to cross-border
                  neobank services, the platform scales with partners worldwide.
                </p>
              </div>

              <div className="mt-5 grid gap-4 border-t border-zinc-200/80 pt-5">
                {stats.map((stat, index) => (
                  <AnimatedStatBar
                    key={stat.label}
                    stat={stat}
                    delay={index * 150}
                    animate={barsInView}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
