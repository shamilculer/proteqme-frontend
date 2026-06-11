"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SectionAmbient from "../ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const approachSteps = [
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

export default function ConsultancyApproach() {
  return (
    <SectionReveal
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="consultancy-approach-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id="consultancy-approach-particles" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Our Approach
            </p>
            <h2
              id="consultancy-approach-heading"
              className="text-section-heading max-w-lg text-foreground"
            >
              A Clear Route from Review to Implementation
            </h2>
            <p className="text-body mt-5 max-w-lg text-zinc-600">
              Each advisory engagement follows a practical sequence: understand
              the risk, define the required controls, produce the evidence, and
              help your team operate with confidence.
            </p>
            <blockquote className="font-serif-quote mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-zinc-700">
              Structured enough for regulator-facing work. Flexible enough for
              the realities of your operating model.
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
