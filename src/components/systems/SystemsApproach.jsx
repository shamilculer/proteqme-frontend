"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_STEPS = [
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

const DEFAULTS = {
  eyebrow: "Our Approach",
  heading: "A Clear Route from Review to Implementation",
  description:
    "Each systems engagement follows a practical sequence: assess the stack, define requirements, evaluate vendors neutrally, and embed technology your team can operate with confidence.",
  quote:
    "Structured enough for procurement and audit. Flexible enough for your operational realities.",
  steps: DEFAULT_STEPS,
  stepLabelPrefix: "Phase",
  sectionId: "systems-approach-heading",
  particleId: "systems-approach-particles",
};

export default function SystemsApproach({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  quote = DEFAULTS.quote,
  steps = DEFAULTS.steps,
  stepLabelPrefix = DEFAULTS.stepLabelPrefix,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) {
  return (
    <SectionReveal
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby={sectionId}
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id={sectionId}
              className="text-section-heading max-w-lg text-foreground"
            >
              {heading}
            </h2>
            <SectionDescription content={description} className="text-body mt-5 max-w-lg text-zinc-600" />
            {quote ? (
              <blockquote className="font-serif-quote mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-zinc-700">
                {quote}
              </blockquote>
            ) : null}
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl backdrop-blur-sm md:p-8">
              <ol className="consultancy-approach-steps relative">
                {steps.map((step, index) => (
                  <li
                    key={itemKey(step, index)}
                    className="relative grid gap-4 py-6 first:pt-0 last:pb-0 max-lg:flex max-lg:flex-col max-lg:items-start md:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="step-number-circle relative z-10 size-12 text-sm md:justify-self-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {stepLabelPrefix} {String(index + 1).padStart(2, "0")}
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
