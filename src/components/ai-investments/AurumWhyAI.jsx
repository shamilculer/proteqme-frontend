"use client";

import {
  Activity,
  Coins,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const reasons = [
  {
    icon: Activity,
    text: "AI continuously analyses financial markets to identify opportunities and manage risk.",
  },
  {
    icon: ShieldCheck,
    text: "Blockchain technology ensures transparency, immutability, and decentralisation.",
  },
  {
    icon: Coins,
    text: "Gold-backed instruments provide stability and inflation protection alongside digital asset growth.",
  },
  {
    icon: Globe2,
    text: "Integrated payment and banking tools allow users to manage, grow, and spend assets from a single platform.",
  },
];

export default function AurumWhyAI() {
  return (
    <section
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-12 md:py-16"
      aria-labelledby="aurum-why-heading"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-10">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Why AI Investments?
            </p>
            <h2
              id="aurum-why-heading"
              className="section-heading-accent text-section-heading max-w-xl text-foreground"
            >
              A Meaningful Shift in How We Approach Wealth Building
            </h2>
            <p className="text-body mt-5 max-w-xl text-zinc-600">
              AI driven investment tools represent a meaningful shift in how
              individuals and institutions approach wealth building. The
              explanation below is educational and grounded — not promotional —
              reflecting an understanding of both the technology and the
              financial fundamentals.
            </p>
          </ScrollReveal>

          <StaggerContainer className="space-y-4" staggerChildren={0.07}>
            {reasons.map(({ icon: Icon, text }) => (
              <StaggerItem key={text}>
                <div className="flex gap-4 rounded-xl border border-zinc-200/90 bg-white p-5 md:p-6">
                  <div className="icon-stat-circle size-11 shrink-0">
                    <Icon className="size-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                    {text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
