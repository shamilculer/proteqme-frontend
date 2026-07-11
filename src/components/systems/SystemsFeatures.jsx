"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import CmsIcon from "@/components/ui/CmsIcon"
import SectionDescription from "@/components/ui/SectionDescription";
import { cn } from "@/lib/utils";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    title: "Vendor-Neutral Evaluation",
    description:
      "Structured RFP design, proof-of-concept scoring, and procurement-ready assessments — free from vendor incentives.",
    icon: "shieldCheck",
  },
  {
    title: "Workflow & Case Design",
    description:
      "Alert triage, escalation paths, and SLA design aligned to your team structure and regulatory obligations.",
    icon: "workflow",
  },
  {
    title: "Integration Architecture",
    description:
      "Technical review of how screening, monitoring, and core banking systems connect and exchange data.",
    icon: "layers",
  },
  {
    title: "False Positive Optimisation",
    description:
      "Rule and threshold calibration to reduce analyst burden while maintaining regulatory coverage.",
    icon: "lineChart",
  },
  {
    title: "Multi-Jurisdiction Coverage",
    description:
      "Screening and monitoring configurations for cross-border operations across multiple regulatory regimes.",
    icon: "globe",
  },
  {
    title: "Identity & KYC Stack",
    description:
      "Evaluation of identity verification, biometric proofing, and onboarding journey design for regulated clients.",
    icon: "userCheck",
  },
];

const DEFAULTS = {
  eyebrow: "Our Capabilities",
  heading: "RegTech Advisory Made Simpler",
  description:
    "Vendor-neutral guidance from evaluation through implementation — structured for teams that need clarity, not more noise.",
  columns: 3,
  items: DEFAULT_ITEMS,
  sectionId: "capabilities",
  particleId: "systems-features-particles",
};

function CapabilityCard({ capability }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs transition duration-300 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(232,24,90,0.08)] md:p-7">
      <div className="icon-stat-circle mb-5 size-12! shrink-0 transition duration-300 group-hover:border-primary/40">
        <CmsIcon
          lucide={capability.lucide || capability.icon}
          src={capability.src}
          alt={capability.alt}
          className="size-5 text-primary"
          strokeWidth={1.75}
        />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
        {capability.title}
      </h3>
      <p className="text-sm leading-[1.65] text-zinc-600">
        {capability.description}
      </p>
    </article>
  );
}

export default function SystemsFeatures({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  columns = DEFAULTS.columns,
  items = DEFAULT_ITEMS,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) {
  const colCount = Number(columns) || 3
  const gridColsClass =
    colCount === 2
      ? "sm:grid-cols-2"
      : colCount === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-features-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id="systems-features-heading"
              className="text-section-heading text-foreground"
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <SectionDescription content={description} className="border-l border-zinc-200/80 pl-6 text-body text-zinc-600" />
          </ScrollReveal>
        </div>

        <StaggerContainer
          className={cn("grid grid-cols-1 gap-4 lg:gap-5", gridColsClass)}
          staggerChildren={0.06}
        >
          {items.map((capability, index) => (
            <StaggerItem key={itemKey(capability, index)}>
              <CapabilityCard capability={capability} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
