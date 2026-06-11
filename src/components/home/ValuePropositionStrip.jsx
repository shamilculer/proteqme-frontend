"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, GraduationCap, Globe, Shield } from "lucide-react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
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

const stats = [
  {
    icon: Shield,
    number: 15,
    suffix: "+",
    title: "Years in Compliance",
    description:
      "Proven track record designing secure compliance structures and mitigating high-stakes risk.",
  },
  {
    icon: GraduationCap,
    number: 200,
    suffix: "+",
    title: "Professionals Trained",
    description:
      "Empowering teams with practical, audit-ready regulatory knowledge and operational skills.",
  },
  {
    icon: Globe,
    number: 10,
    suffix: "+",
    prefix: "Across ",
    title: "Jurisdictions",
    description:
      "Expertise navigating complex cross-border financial systems and regional mandates.",
  },
  {
    icon: Building2,
    number: 40,
    suffix: "+",
    title: "Institutions Served",
    description:
      "Approved compliance frameworks built for banks, exchanges, and regulated organisations.",
  },
];

function StatCard({ stat, inView }) {
  const Icon = stat.icon;

  return (
    <article className="flex h-full flex-col rounded-[calc(1rem-1.5px)] bg-white p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="icon-stat-circle size-10 shrink-0">
          <Icon className="size-4.5 text-primary" strokeWidth={1.75} />
        </div>
        <span className="h-px flex-1 bg-zinc-200" aria-hidden />
      </div>

      <p className="mb-1.5 text-[1.75rem] font-bold leading-none tabular-nums tracking-tight text-primary sm:text-[2rem]">
        {stat.prefix && (
          <span className="mr-1 text-sm font-medium text-zinc-400">
            {stat.prefix.trim()}
          </span>
        )}
        <ProgressiveCounter value={stat.number} shouldAnimate={inView} />
        {stat.suffix}
      </p>

      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        {stat.title}
      </h3>

      <p className="text-sm leading-[1.65] text-zinc-600">{stat.description}</p>
    </article>
  );
}

const ValuePropositionStrip = () => {
  const reduceMotion = useReducedMotion();
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
      className="section-light-white relative isolate w-full overflow-hidden pb-20 md:pb-28"
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
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-proteq-dark shadow-[0_28px_80px_rgba(13,13,20,0.12)] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[760px]">
              <Image
                src="/hero-3.webp"
                alt="Proteq compliance professionals at work"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-center">
            <ScrollReveal xOffset={16}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Our Values
              </p>
              <h2>
                Where Expertise, Compliance, and Trust Merge
              </h2>
              <p className="mt-4 text-zinc-600">
                A track record built on practitioner expertise — helping
                organisations mitigate risk, navigate evolving frameworks, and
                operate with defensible, audit-ready compliance programmes.
              </p>
            </ScrollReveal>

            <StaggerContainer
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              staggerChildren={0.08}
            >
              {stats.map((stat, index) => (
                <StaggerItem key={stat.title}>
                  <div
                    className={cn(
                       "group relative h-full rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,24,90,0.1)]",
                      reduceMotion
                        ? "border-2 border-primary bg-transparent"
                        : "border-beam-card-light"
                    )}
                    style={
                      reduceMotion
                        ? undefined
                        : { animationDelay: `${index * 0.35}s` }
                    }
                  >
                    <StatCard stat={stat} inView={inView} />
                  </div>
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
