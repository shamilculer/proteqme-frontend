"use client";

import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const steps = [
  {
    title: "Submit Application",
    description:
      "Complete the partnership form with your expertise, organisation details, and collaboration interests — typically around 10 minutes.",
  },
  {
    title: "Review & Evaluation",
    description:
      "Our team reviews your submission to evaluate expertise, alignment, and partnership potential within five business days.",
  },
  {
    title: "Discovery Call",
    description:
      "We schedule a 30-minute conversation to explore collaboration goals, opportunities, and long-term alignment.",
  },
  {
    title: "Start Collaborating",
    description:
      "Once approved, we begin building impactful advisory, training, and technology-driven initiatives together.",
  },
];

export default function PartnerProcess() {
  return (
    <section
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="partner-process-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="partner-process-particles" variant="light" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              How It Works
            </p>
            <h2
              id="partner-process-heading"
              className="text-section-heading max-w-lg text-foreground"
            >
              From Application to Partnership
            </h2>
            <p className="text-body mt-5 max-w-lg text-zinc-600">
              A streamlined collaboration journey designed to connect experts,
              trainers, and technology providers with meaningful opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_16px_48px_rgba(13,13,20,0.06)] md:p-8">
              <ol className="relative divide-y divide-zinc-100">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-sm font-semibold tabular-nums text-zinc-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
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
    </section>
  );
}
