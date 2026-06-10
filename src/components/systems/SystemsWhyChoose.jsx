"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Scale, ShieldCheck, Workflow } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const points = [
  {
    title: "Complete Coverage",
    description:
      "Global RegTech evaluation across screening, monitoring, KYC, and case management — prioritised by your integrated risk-based approach.",
    icon: ShieldCheck,
  },
  {
    title: "True Accuracy",
    description:
      "Requirements and vendor scoring grounded in your obligations and workflows — reducing false positives and implementation missteps.",
    icon: Scale,
  },
  {
    title: "Implementation Depth",
    description:
      "From proof-of-concept through deployment, workflow tuning, and false positive optimisation — not just a vendor shortlist.",
    icon: Workflow,
  },
  {
    title: "Regulator Readiness",
    description:
      "Systems and documentation structured for internal governance, procurement audit, and regulatory examination.",
    icon: Cpu,
  },
];

export default function SystemsWhyChoose() {
  return (
    <section
      className="w-full border-t border-zinc-200/70 bg-[#f6f4f8] py-18 md:py-24"
      aria-labelledby="systems-why-heading"
    >
      <div className="container">
        <ScrollReveal className="mb-10 max-w-3xl md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Why Choose Proteq
          </p>
          <h2
            id="systems-why-heading"
            className="mt-3 text-3xl font-semibold text-[#231143] md:text-[40px]"
          >
            Loved by Compliance Teams Done with Overpriced Legacy Stacks
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Choose modern, vendor-neutral RegTech advisory engineered for
            today&apos;s risk environment — with flexible scoping, faster
            decisions, and a team that builds around your needs.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2"
          staggerChildren={0.07}
        >
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(35,17,67,0.1)] md:p-8">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-semibold text-[#061525]">
                    {point.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                    {point.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#231143] transition hover:text-primary"
                  >
                    Learn more
                    <ArrowRight className="size-4" />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
