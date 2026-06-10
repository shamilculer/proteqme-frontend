"use client";

import { Button } from "@/components/ui/button";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const impactStats = [
  {
    value: "40+",
    label: "Institutions advised",
    description: "Banks, VASPs, fintechs, and regulated operators",
  },
  {
    value: "10+",
    label: "Jurisdictions",
    description: "Cross-border screening and monitoring programmes",
  },
  {
    value: "180+",
    label: "Technology evaluations",
    description: "Vendor-neutral assessments delivered",
  },
  {
    value: "100%",
    label: "Vendor-neutral",
    description: "No commissions, reseller fees, or kickbacks",
  },
];

function ImpactStat({ stat }) {
  return (
    <article className="text-center">
      <p className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
        {stat.value}
      </p>
      <p className="mt-3 text-base font-semibold text-foreground md:text-lg">
        {stat.label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        {stat.description}
      </p>
    </article>
  );
}

export default function SystemsBenefits() {
  return (
    <section
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-impact-heading"
    >
      <SectionAmbient variant="light" />

      <div className="container relative z-10">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Impact at Scale
          </p>
          <h2
            id="systems-impact-heading"
            className="section-heading-accent text-section-heading text-foreground"
          >
            RegTech Advisory Built for Regulated Operations
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6"
          staggerChildren={0.07}
        >
          {impactStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <ImpactStat stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-12 text-center">
          <Button href="/contact" showArrow glowingDot>
            Request a Systems Assessment
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
