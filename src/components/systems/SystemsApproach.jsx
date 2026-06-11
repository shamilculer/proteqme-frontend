"use client";

import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const approachSteps = [
  {
    title: "Assess the Current Stack",
    description:
      "We review your existing compliance technology, integrations, alert volumes, false positive rates, and control gaps — mapping what works, what does not, and where risk sits.",
  },
  {
    title: "Define Requirements",
    description:
      "Regulatory obligations are translated into functional requirements, workflow needs, SLA expectations, and vendor evaluation criteria — structured for procurement and internal sign-off.",
  },
  {
    title: "Evaluate & Select",
    description:
      "Vendor-neutral RFP support, proof-of-concept facilitation, and fit-for-purpose scoring — so selection is based on capability, not commercial incentives.",
  },
  {
    title: "Implement & Optimise",
    description:
      "Deployment support, workflow tuning, false positive reduction, team training, and handover documentation — so improvements become part of daily operations.",
  },
];

export default function SystemsApproach() {
  return (
    <SectionReveal
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-approach-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="systems-approach-particles" variant="light" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Our Approach
            </p>
            <h2
              id="systems-approach-heading"
              className="text-section-heading max-w-lg text-foreground"
            >
              A Clear Route from Review to Implementation
            </h2>
            <p className="text-body mt-5 max-w-lg text-zinc-600">
              Each systems engagement follows a practical sequence: assess the
              stack, define requirements, evaluate vendors neutrally, and embed
              technology your team can operate with confidence.
            </p>
            <blockquote className="font-serif-quote mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-zinc-700">
              Structured enough for procurement and audit. Flexible enough for
              your operational realities.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl backdrop-blur-sm md:p-8">
              <ol className="consultancy-approach-steps relative">
                {approachSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative grid gap-4 py-6 first:pt-0 last:pb-0 max-lg:flex max-lg:flex-col max-lg:items-start md:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="step-number-circle relative z-10 size-12 text-sm md:justify-self-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Phase {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-zinc-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
