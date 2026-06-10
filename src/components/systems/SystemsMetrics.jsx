"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const metrics = [
  {
    value: "40%",
    label: "False positive reduction",
    context: "Regional payment provider",
    variant: "dark",
  },
  {
    value: "10+",
    label: "Jurisdictions supported",
    context: "Cross-border regulated clients",
    variant: "light",
  },
  {
    value: "40+",
    label: "Institutions advised",
    context: "Banks, VASPs & fintechs",
    variant: "accent",
  },
  {
    value: "15+",
    label: "Years RegTech experience",
    context: "Practitioner-led delivery",
    variant: "dark",
  },
];

const variantStyles = {
  dark: "border-[#061525]/10 bg-[#061525] text-white",
  light: "border-zinc-200 bg-white text-[#061525]",
  accent: "border-primary/20 bg-primary/8 text-[#061525]",
};

export default function SystemsMetrics() {
  return (
    <section
      className="w-full border-b border-zinc-200/70 bg-[#f6f4f8] py-14 md:py-18"
      aria-label="RegTech advisory outcomes"
    >
      <div className="container">
        <ScrollReveal className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            For teams that move at operational speed
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#231143] md:text-3xl">
            Measurable outcomes from vendor-neutral systems work
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.07}
        >
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 md:p-7 ${variantStyles[metric.variant]}`}
              >
                <p className="text-4xl font-bold tracking-tight md:text-5xl">
                  {metric.value}
                </p>
                <p
                  className={`mt-2 text-sm font-semibold ${metric.variant === "dark" ? "text-white" : "text-[#061525]"}`}
                >
                  {metric.label}
                </p>
                <p
                  className={`mt-auto pt-4 text-xs ${metric.variant === "dark" ? "text-white/55" : "text-zinc-500"}`}
                >
                  ~ {metric.context}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
