"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="systems-approach-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/systems-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[#061525]/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-[#061525]/75 via-[#061525]/50 to-[#061525]/88 lg:via-[#061525]/35"
          aria-hidden
        />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Our Approach
            </p>
            <h2
              id="systems-approach-heading"
              className="text-section-heading max-w-lg text-white"
            >
              A Clear Route from Review to Implementation
            </h2>
            <p className="text-body mt-5 max-w-lg text-white/75">
              Each systems engagement follows a practical sequence: assess the
              stack, define requirements, evaluate vendors neutrally, and embed
              technology your team can operate with confidence.
            </p>
            <blockquote className="mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-white">
              Structured enough for procurement and audit. Flexible enough for
              your operational realities.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal xOffset={16}>
            <div className="consultancy-approach-panel rounded-2xl border border-white/10 p-6 md:p-8">
              <ol className="divide-y divide-white/10">
                {approachSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="step-number-circle size-12 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Phase {String(index + 1).padStart(2, "0")}
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
