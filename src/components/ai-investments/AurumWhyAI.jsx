"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import CmsIcon from "@/components/ui/CmsIcon"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const DEFAULT_REASONS = [
  {
    lucide: "lineChart",
    text: "AI continuously analyses financial markets to identify opportunities and manage risk.",
  },
  {
    lucide: "shieldCheck",
    text: "Blockchain technology ensures transparency, immutability, and decentralisation.",
  },
  {
    lucide: "coins",
    text: "Gold-backed instruments provide stability and inflation protection alongside digital asset growth.",
  },
  {
    lucide: "globe",
    text: "Integrated payment and banking tools allow users to manage, grow, and spend assets from a single platform.",
  },
];

const DEFAULTS = {
  eyebrow: "Why AI Investments?",
  heading: "A Meaningful Shift in How We Approach Wealth Building",
  description:
    "AI driven investment tools represent a meaningful shift in how individuals and institutions approach wealth building. The explanation below is educational and grounded — not promotional — reflecting an understanding of both the technology and the financial fundamentals.",
  reasons: DEFAULT_REASONS,
  sectionId: "aurum-why",
};

export default function AurumWhyAI({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  reasons = DEFAULTS.reasons,
  sectionId = DEFAULTS.sectionId,
}) {
  const particleId = sectionId ? `${sectionId}-particles` : "aurum-why-particles";
  const headingId = sectionId ? `${sectionId}-heading` : "aurum-why-heading";

  return (
    <SectionReveal
      id={sectionId}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-12 md:py-16"
      aria-labelledby={headingId}
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-10">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="section-heading-accent text-section-heading max-w-xl text-foreground"
            >
              {heading}
            </h2>
            <SectionDescription content={description} className="text-body mt-5 max-w-xl text-zinc-600" />
          </ScrollReveal>

          <StaggerContainer className="space-y-4" staggerChildren={0.07}>
            {reasons.map((reason, index) => (
              <StaggerItem key={itemKey(reason, index)}>
                <div className="flex gap-4 rounded-xl border border-zinc-200/90 bg-white p-5 md:p-6">
                  <div className="icon-stat-circle size-11 shrink-0">
                    <CmsIcon
                      lucide={reason.lucide || reason.icon}
                      src={reason.src}
                      alt={reason.alt}
                      className="size-5 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                    {reason.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionReveal>
  );
}
