"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { useEffect, useRef, useState } from "react";

import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer, { AURUM_VIDEO_IDS } from "./AurumVideoPlayer";

const DEFAULT_STAT_WIDTHS = [100, 88, 62];

const DEFAULT_STATS = [
  { value: "$30M+", label: "Assets managed", width: 100 },
  { value: "18,000+", label: "Active partners", width: 88 },
  { value: "5+", label: "Tech products", width: 62 },
];

const DEFAULT_SIDE_CARD_BODY = [
  "Aurum Foundation brings AI trading intelligence, gold-backed stability, and Web3 banking into one ecosystem — giving investors a single place to grow, manage, and move assets with blockchain-grade transparency.",
  "From EX-AI strategies and Neyro neural networks to cross-border neobank services, the platform scales with partners worldwide.",
];

const DEFAULTS = {
  eyebrow: "Platform Scale",
  heading: "Shaping the Future of Finance",
  description:
    "AI and blockchain technology delivering secure, transparent, and scalable financial management for a global digital economy.",
  videoId: AURUM_VIDEO_IDS.ecosystem,
  buttons: [],
  image: null,
  sideCardEyebrow: "Platform at a glance",
  sideCardBody: DEFAULT_SIDE_CARD_BODY,
  stats: DEFAULT_STATS,
  sectionId: "aurum-platform",
  playLabel: "Play AURUM ecosystem video",
};

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

function normalizeSideCardBody(sideCardBody) {
  if (Array.isArray(sideCardBody)) return sideCardBody;
  if (sideCardBody) return [sideCardBody];
  return DEFAULT_SIDE_CARD_BODY;
}

function normalizeStats(stats) {
  return stats.map((stat, index) => ({
    ...stat,
    width: stat.width ?? DEFAULT_STAT_WIDTHS[index % DEFAULT_STAT_WIDTHS.length],
  }));
}

export default function AurumPlatformSection({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  videoId = DEFAULTS.videoId,
  sideCardEyebrow = DEFAULTS.sideCardEyebrow,
  sideCardBody = DEFAULTS.sideCardBody,
  stats = DEFAULTS.stats,
  sectionId = DEFAULTS.sectionId,
  playLabel = DEFAULTS.playLabel,
}) {
  const sectionRef = useRef(null);
  const [barsInView, setBarsInView] = useState(false);
  const headingId = sectionId ? `${sectionId}-heading` : "aurum-platform-heading";
  const sideCardParagraphs = normalizeSideCardBody(sideCardBody);
  const normalizedStats = normalizeStats(stats);

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
      id={sectionId}
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-10 md:py-12"
      aria-labelledby={headingId}
    >
      <div className="container relative z-10">
        <ScrollReveal className="mb-6 max-w-2xl md:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-2xl md:text-[34px] md:leading-[1.15]"
          >
            {heading}
          </h2>
          {description ? (
            <SectionDescription
              content={description}
              className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600"
            />
          ) : null}
        </ScrollReveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal xOffset={-12} className="relative z-10 h-full min-h-[220px] lg:min-h-0">
            <AurumVideoPlayer
              videoId={videoId}
              playLabel={playLabel}
              className="aspect-video h-full min-h-[220px] w-full border-0 shadow-[0_24px_70px_rgba(35,17,67,0.16)] lg:aspect-auto lg:min-h-full"
            />
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="h-full">
            <div className="card-surface flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 p-5 md:p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {sideCardEyebrow}
                </p>
                {sideCardParagraphs.map((text, index) => (
                  <p
                    key={listKey(text, index, "paragraph")}
                    className={`text-sm leading-relaxed text-zinc-600 ${index === 0 ? "mt-3" : "mt-2.5"}`}
                  >
                    {text}
                  </p>
                ))}
              </div>

              <div className="mt-5 grid gap-4 border-t border-zinc-200/80 pt-5">
                {normalizedStats.map((stat, index) => (
                  <AnimatedStatBar
                    key={itemKey(stat, index)}
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
