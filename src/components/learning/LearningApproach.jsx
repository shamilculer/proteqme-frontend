"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const approachSteps = [
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

const LearningApproach = () => {
  return (
    <SectionReveal
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="learning-approach-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id="learning-approach-particles" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Our Approach
            </p>
            <h2
              id="learning-approach-heading"
              className="text-section-heading max-w-lg text-foreground"
            >
              Experiential Learning That Stimulates & Challenges
            </h2>
            <p className="text-body mt-5 max-w-lg text-zinc-600">
              Interactive activities combined with leading-edge content, supported
              by practical learning solutions — from diagnosis through to
              lasting capability in your team.
            </p>
            <blockquote className="font-serif-quote mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-zinc-700">
              Practitioner-led delivery. Audit-ready materials. Training that
              holds up in regulated work.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-xl backdrop-blur-sm md:p-8">
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
                        Step {String(index + 1).padStart(2, "0")}
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
};

export default LearningApproach;
