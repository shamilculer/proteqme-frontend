"use client";

import {
  Globe2,
  Layers,
  LineChart,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

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
    <article className="group flex h-full flex-col border border-zinc-200/90 bg-white p-7 transition duration-300 hover:border-zinc-300 hover:shadow-[0_12px_40px_rgba(13,13,20,0.06)] md:p-8">
      <div className="flex size-10 items-center justify-center border border-zinc-200/90 text-proteq-dark transition duration-300 group-hover:border-primary/30 group-hover:text-primary">
        <Icon className="size-[18px]" strokeWidth={1.5} />
      </div>

      <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground md:text-[17px]">
        {capability.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
        {capability.description}
      </p>
    </article>
  );
}

export default function SystemsFeatures() {
  return (
    <section
      id="capabilities"
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-16 md:py-20"
      aria-labelledby="systems-features-heading"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Our Capabilities
          </p>
          <h2
          >
            RegTech Advisory Made Simpler
          </h2>
          <p className="text-body mt-4 text-zinc-600">
            Vendor-neutral guidance from evaluation through implementation —
            structured for teams that need clarity, not more noise.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-px overflow-hidden rounded-sm border border-zinc-200/90 bg-zinc-200/90 sm:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.05}
        >
          {capabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <CapabilityCard capability={capability} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
