"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, GraduationCap, Globe, Shield } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

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
    <StaggerItem className="flex h-full flex-col px-7 py-9 md:px-9 md:py-11">
      <div className="mb-7 flex items-center gap-4">
        <div className="icon-stat-circle size-11 shrink-0">
          <Icon className="size-5 text-primary" strokeWidth={1.75} />
        </div>
        <span className="h-px flex-1 bg-zinc-200" aria-hidden />
      </div>

      <p className="mb-2 text-[2rem] font-bold leading-none tabular-nums tracking-tight text-primary md:text-[2.35rem]">
        {stat.prefix && (
          <span className="mr-1 text-base font-medium text-zinc-400 md:text-lg">
            {stat.prefix.trim()}
          </span>
        )}
        <ProgressiveCounter value={stat.number} shouldAnimate={inView} />
        {stat.suffix}
      </p>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
        {stat.title}
      </h3>

      <p className="mt-auto text-sm leading-[1.7] text-zinc-600">
        {stat.description}
      </p>
    </StaggerItem>
  );
}

const ValuePropositionStrip = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="values"
      className="section-light-white w-full py-b0 md:pb-28"
      aria-labelledby="values-heading"
    >
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Our Values
            </p>
            <h2
              id="values-heading"
              className="section-heading-accent text-section-heading max-w-2xl text-foreground lg:hidden"
            >
              Expertise. Compliance. Trust.
            </h2>
            <h2 className="section-heading-accent text-section-heading hidden max-w-2xl text-foreground lg:block">
              Where Expertise, Compliance, and Trust Merge
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              A track record built on practitioner expertise — helping
              organisations mitigate risk, navigate evolving frameworks, and
              operate with defensible, audit-ready compliance programmes.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(13,13,20,0.07)] divide-y divide-zinc-200 lg:grid-cols-4 lg:divide-x lg:divide-y-0"
          staggerChildren={0.08}
        >
          {stats.map((stat) => (
            <StatCard key={stat.title} stat={stat} inView={inView} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValuePropositionStrip;
