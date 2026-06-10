"use client";

import { useReducedMotion } from "motion/react";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "40%",
    label: "False positive reduction",
    context: "Regional payment provider",
  },
  {
    value: "10+",
    label: "Jurisdictions supported",
    context: "Cross-border regulated clients",
  },
  {
    value: "40+",
    label: "Institutions advised",
    context: "Banks, VASPs & fintechs",
  },
  {
    value: "15+",
    label: "Years RegTech experience",
    context: "Practitioner-led delivery",
  },
];

function MetricCard({ metric }) {
  return (
    <article className="flex h-full flex-col rounded-[calc(1rem-3px)] bg-white p-6 md:p-7">
      <p className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-semibold text-foreground">
        {metric.label}
      </p>
      <p className="mt-auto pt-4 text-xs text-zinc-500">~ {metric.context}</p>
    </article>
  );
}

export default function SystemsMetrics() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-light relative isolate w-full overflow-hidden border-b border-zinc-200/70 py-14 md:py-18"
      aria-label="RegTech advisory outcomes"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            For teams that move at operational speed
          </p>
          <h2 className="mt-3">
            Measurable outcomes from vendor-neutral systems work
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.07}
        >
          {metrics.map((metric, index) => (
            <StaggerItem key={metric.label}>
              <div
                className={cn(
                  "h-full rounded-2xl p-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,24,90,0.15)]",
                  reduceMotion
                    ? "border-2 border-primary bg-transparent"
                    : "border-beam-card"
                )}
                style={
                  reduceMotion
                    ? undefined
                    : { animationDelay: `${index * 0.35}s` }
                }
              >
                <MetricCard metric={metric} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
