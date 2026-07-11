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
    title: "Discover",
    description:
      "We map your organisation's objectives, culture, and learning gaps — understanding regulatory context, team roles, and skill priorities before recommending a path.",
  },
  {
    title: "Design",
    description:
      "Curate experiential, stimulating modules with leading-edge content — structured for your risk environment, certification goals, or in-house capability needs.",
  },
  {
    title: "Deliver",
    description:
      "Interactive sessions led by expert facilitators — grounded in real cases, with workplace-ready materials your team can apply immediately.",
  },
  {
    title: "Transform",
    description:
      "Practical follow-through and measurable performance gains — so training sticks after the session ends and stands up to examination.",
  },
];

const DEFAULTS = {
  eyebrow: "Our Approach",
  heading: "Experiential Learning That Stimulates & Challenges",
  description:
    "Interactive activities combined with leading-edge content, supported by practical learning solutions — from diagnosis through to lasting capability in your team.",
  quote:
    "Practitioner-led delivery. Audit-ready materials. Training that holds up in regulated work.",
  steps: DEFAULT_STEPS,
  stepLabelPrefix: "Step",
  sectionId: "learning-approach-heading",
  particleId: "learning-approach-particles",
};

export default function LearningApproach({
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
