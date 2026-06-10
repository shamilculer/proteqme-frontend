"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
      className="relative w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="partner-process-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/who-we-are.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[rgba(13,13,18,0.52)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-[rgba(13,13,18,0.72)] via-[rgba(13,13,18,0.55)] to-[rgba(13,13,18,0.86)] lg:via-[rgba(13,13,18,0.35)]"
          aria-hidden
        />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              How It Works
            </p>
            <h2
              id="partner-process-heading"
              className="text-section-heading max-w-lg text-white"
            >
              From Application to Partnership
            </h2>
            <p className="text-body mt-5 max-w-lg text-white/75">
              A streamlined collaboration journey designed to connect experts,
              trainers, and technology providers with meaningful opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="consultancy-approach-panel rounded-2xl border border-white/10 p-6 md:p-8">
              <ol className="divide-y divide-white/10">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="step-number-circle size-12 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-white/80">
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
