"use client";

import dynamic from "next/dynamic";
import {
  Globe2,
  Layers,
  LineChart,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const capabilities = [
  {
    title: "Vendor-Neutral Evaluation",
    description:
      "Structured RFP design, proof-of-concept scoring, and procurement-ready assessments — free from vendor incentives.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow & Case Design",
    description:
      "Alert triage, escalation paths, and SLA design aligned to your team structure and regulatory obligations.",
    icon: Workflow,
  },
  {
    title: "Integration Architecture",
    description:
      "Technical review of how screening, monitoring, and core banking systems connect and exchange data.",
    icon: Layers,
  },
  {
    title: "False Positive Optimisation",
    description:
      "Rule and threshold calibration to reduce analyst burden while maintaining regulatory coverage.",
    icon: LineChart,
  },
  {
    title: "Multi-Jurisdiction Coverage",
    description:
      "Screening and monitoring configurations for cross-border operations across multiple regulatory regimes.",
    icon: Globe2,
  },
  {
    title: "Identity & KYC Stack",
    description:
      "Evaluation of identity verification, biometric proofing, and onboarding journey design for regulated clients.",
    icon: UserCheck,
  },
];

function CapabilityCard({ capability }) {
  const Icon = capability.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs transition duration-300 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(232,24,90,0.08)] md:p-7">
      <div className="icon-stat-circle mb-5 size-12! shrink-0 transition duration-300 group-hover:border-primary/40">
        <Icon className="size-5 text-primary" strokeWidth={1.75} />
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

export default function SystemsFeatures() {
  return (
    <SectionReveal
      id="capabilities"
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-features-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="systems-features-particles" variant="light" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Our Capabilities
            </p>
            <h2
              id="systems-features-heading"
              className="text-section-heading text-foreground"
            >
              RegTech Advisory Made Simpler
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="border-l border-zinc-200/80 pl-6 text-body text-zinc-600">
              Vendor-neutral guidance from evaluation through implementation —
              structured for teams that need clarity, not more noise.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          staggerChildren={0.06}
        >
          {capabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <CapabilityCard capability={capability} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
