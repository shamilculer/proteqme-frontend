"use client";

import { itemKey } from "@/lib/listKey";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import CmsIcon from "@/components/ui/CmsIcon";
import FeatureIconBox from "@/components/ui/FeatureIconBox";
import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

function ProgressiveCounter({ value, duration = 2000, shouldAnimate }) {
  const endValue = parseInt(value, 10);
  const isNumeric = !isNaN(endValue);
  const [count, setCount] = useState(() => (isNumeric ? endValue : value));

  useEffect(() => {
    if (!shouldAnimate || !isNumeric) return;

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
  }, [endValue, isNumeric, duration, shouldAnimate]);

  return <span>{count.toLocaleString()}</span>;
}

const DEFAULT_STATS = [
  {
    lucide: "shield",
    number: 15,
    suffix: "+",
    title: "Years in Compliance",
    description:
      "Proven track record designing secure compliance structures and mitigating high-stakes risk.",
  },
  {
    lucide: "graduation",
    number: 200,
    suffix: "+",
    title: "Professionals Trained",
    description:
      "Empowering teams with practical, audit-ready regulatory knowledge and operational skills.",
  },
  {
    lucide: "globe",
    number: 10,
    suffix: "+",
    prefix: "Across ",
    title: "Jurisdictions",
    description:
      "Expertise navigating complex cross-border financial systems and regional mandates.",
  },
  {
    lucide: "building",
    number: 40,
    suffix: "+",
    title: "Institutions Served",
    description:
      "Approved compliance frameworks built for banks, exchanges, and regulated organisations.",
  },
];

function normalizeStat(stat) {
  if (stat.number !== undefined) return stat;

  const match = String(stat.value || "").match(/^(\D*)(\d+)(.*)$/);
  const prefix = stat.prefix ?? match?.[1] ?? "";
  const number = match?.[2] ? Number(match[2]) : stat.value;
  const suffix = stat.suffix ?? match?.[3] ?? "";

  return {
    lucide: stat.lucide,
    src: stat.src,
    alt: stat.alt,
    number,
    suffix,
    prefix,
    title: stat.label || stat.title,
    description: stat.description || "",
  };
}

function StatCard({ stat, inView }) {
  const normalized = normalizeStat(stat);

  return (
    <article className="group flex h-full flex-col rounded-xl border border-zinc-200/90 bg-white p-5 shadow-[0_8px_30px_rgba(13,13,20,0.04)] transition duration-300 hover:border-primary/25 hover:shadow-[0_16px_40px_rgba(232,24,90,0.08)] sm:rounded-2xl sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <FeatureIconBox size="sm">
          <CmsIcon
            lucide={normalized.lucide}
            src={normalized.src}
            alt={normalized.alt}
            className="size-4.5"
            strokeWidth={1.75}
          />
        </FeatureIconBox>
        <span className="h-px flex-1 bg-zinc-200" aria-hidden />
      </div>

      <p className="mb-1.5 text-[1.75rem] font-bold leading-none tabular-nums tracking-tight text-primary sm:text-[2rem]">
        {normalized.prefix && (
          <span className="mr-1 text-sm font-medium text-zinc-400">
            {normalized.prefix.trim()}
          </span>
        )}
        <ProgressiveCounter value={normalized.number} shouldAnimate={inView} />
        {normalized.suffix}
      </p>

      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        {normalized.title}
      </h3>

      <p className="text-sm leading-[1.65] text-zinc-600">{normalized.description}</p>
    </article>
  );
}

const ValuePropositionStrip = ({
  stats: statsProp,
  eyebrow = "Our Values",
  heading = "Where Expertise, Compliance, and Trust Merge",
  description = "A track record built on practitioner expertise — helping organisations mitigate risk, navigate evolving frameworks, and operate with defensible, audit-ready compliance programmes.",
  image = "/hero-3.webp",
  imageAlt = "Proteq compliance professionals at work",
}) => {
  const displayStats = statsProp?.length ? statsProp : DEFAULT_STATS;
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <SectionReveal
      ref={sectionRef}
      id="values"
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 pt-20 pb-20 md:pt-28 md:pb-28"
      aria-labelledby="values-heading"
    >
      <ParticleNetwork variant="light" id="value-prop-particles" />
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <ScrollReveal
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            xOffset={-16}
            yOffset={0}
          >
            <SplitSectionMedia
              frame="wide"
              size="portrait"
              src={image}
              alt={imageAlt}
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </ScrollReveal>

          <div className="flex flex-col justify-center">
            <ScrollReveal xOffset={16}>
              {eyebrow ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  {eyebrow}
                </p>
              ) : null}
              <h2 id="values-heading">{heading}</h2>
              {description ? (
                <SectionDescription content={description} className="mt-4 text-zinc-600" />
              ) : null}
            </ScrollReveal>

            <StaggerContainer
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
              staggerChildren={0.08}
            >
              {displayStats.map((stat, index) => (
                <StaggerItem key={itemKey(stat, index)}>
                  <StatCard stat={stat} inView={inView} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default ValuePropositionStrip;
