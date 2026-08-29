"use client";

import { itemKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_STATS = [
  {
    value: "40+",
    suffix: "",
    label: "Institutions advised",
    description: "Banks, VASPs, fintechs, and regulated operators",
  },
  {
    value: "10+",
    suffix: "",
    label: "Jurisdictions",
    description: "Cross-border screening and monitoring programmes",
  },
  {
    value: "180+",
    suffix: "",
    label: "Technology evaluations",
    description: "Vendor-neutral assessments delivered",
  },
  {
    value: "100%",
    suffix: "",
    label: "Vendor-neutral",
    description: "No commissions, reseller fees, or kickbacks",
  },
];

const DEFAULTS = {
  eyebrow: "Impact at Scale",
  heading: "RegTech Advisory Built for Regulated Operations",
  stats: DEFAULT_STATS,
  animate: false,
  sectionId: null,
  particleId: "systems-benefits-particles",
};

function ImpactStat({ stat }) {
  const displayValue = `${stat.value}${stat.suffix || ""}`;

  return (
    <article className="text-center">
      <p className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
        {displayValue}
      </p>
      <p className="mt-3 text-base font-semibold text-foreground md:text-lg">
        {stat.label}
      </p>
      {stat.description ? (
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {stat.description}
        </p>
      ) : null}
    </article>
  );
}

export default function SystemsBenefits({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  stats = DEFAULTS.stats,
  animate = DEFAULTS.animate,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) {
  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light-white relative isolate w-full overflow-hidden border-y border-zinc-200/70 py-16 md:py-20"
      aria-labelledby="systems-impact-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />

      <div className="container relative z-10">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id="systems-impact-heading"
            className="text-section-heading text-foreground"
          >
            {heading}
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6"
          staggerChildren={0.07}
        >
          {stats.map((stat, index) => (
            <StaggerItem key={itemKey(stat, index)}>
              <ImpactStat stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
