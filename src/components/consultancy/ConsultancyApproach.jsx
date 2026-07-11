"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SectionAmbient from "../ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_STEPS = [
  {
    title: "Discover the Risk Picture",
    description:
      "We review your existing compliance documentation, interview key personnel, map your customer risk profile, and benchmark your controls against FATF recommendations and local regulatory requirements.",
  },
  {
    title: "Design the Control Path",
    description:
      "You receive a prioritised remediation roadmap with clear ownership, timelines, and success criteria — structured for both internal governance and regulator presentation.",
  },
  {
    title: "Build the Evidence",
    description:
      "Deliverables include AML policy documentation, KYC/EDD procedures, risk appetite statements, suspicious activity reporting protocols, and training materials.",
  },
  {
    title: "Embed the Programme",
    description:
      "Includes a 2-week knowledge transfer period, team Q&A sessions, and 30-day post-engagement support.",
  },
];

const DEFAULTS = {
  eyebrow: "Our Approach",
  heading: "A Clear Route from Review to Implementation",
  description:
    "Each advisory engagement follows a practical sequence: understand the risk, define the required controls, produce the evidence, and help your team operate with confidence.",
  quote:
    "Structured enough for regulator-facing work. Flexible enough for the realities of your operating model.",
  steps: DEFAULT_STEPS,
  stepLabelPrefix: "Phase",
  sectionId: "consultancy-approach-heading",
  particleId: "consultancy-approach-particles",
};

export default function ConsultancyApproach({
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
      <ParticleNetwork variant="light" id={particleId} />

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
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-xl backdrop-blur-sm md:p-8">
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
