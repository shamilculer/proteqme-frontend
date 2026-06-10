"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
    <section
      className="section-dark section-particles-animated relative isolate w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="learning-approach-heading"
    >
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/learning-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div
          className="overlay-consultancy-feature-base absolute inset-0"
          aria-hidden
        />
        <div
          className="overlay-consultancy-feature-side absolute inset-0"
          aria-hidden
        />
        <div
          className="hero-home-overlay-accent absolute inset-0 opacity-80"
          aria-hidden
        />
      </div>

      <SectionAmbient variant="dark" />
      <ParticleNetwork id="learning-approach-particles" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Our Approach
            </p>
            <h2
              id="learning-approach-heading"
              className="text-section-heading max-w-lg text-white"
            >
              Experiential Learning That Stimulates & Challenges
            </h2>
            <p className="text-body mt-5 max-w-lg text-white/80">
              Interactive activities combined with leading-edge content, supported
              by practical learning solutions — from diagnosis through to
              lasting capability in your team.
            </p>
            <blockquote className="font-serif-quote mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-white/95">
              Practitioner-led delivery. Audit-ready materials. Training that
              holds up in regulated work.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="consultancy-approach-panel rounded-2xl border border-white/10 p-6 backdrop-blur-sm md:p-8">
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
                      <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-white/85">
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
    </section>
  );
};

export default LearningApproach;
