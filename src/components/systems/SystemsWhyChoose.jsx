"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { Cpu, Scale, ShieldCheck, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

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

function WhyCard({ point, index }) {
  const Icon = point.icon;

  return (
    <article className="group relative flex min-h-[260px] h-full flex-col overflow-hidden rounded-[calc(1rem-3px)] bg-[#fbfafd] p-6 transition duration-300 hover:bg-white">
      <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-proteq-dark/5 transition group-hover:text-primary/10">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative flex h-full flex-col">
        <span className="flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white text-proteq-dark shadow-[0_14px_35px_rgba(35,17,67,0.08)] transition group-hover:border-primary/35 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-10" strokeWidth={1.5} />
        </span>

        <div className="mt-auto pt-8">
          <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-primary" />
          <h3 className="text-xl leading-tight text-foreground">{point.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            {point.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function SystemsWhyChoose() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-why-heading"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
          <ScrollReveal className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Why Choose Proteq
              </span>
            </div>

            <h2
              id="systems-why-heading"
              className="section-heading-accent text-section-heading max-w-xl"
            >
              RegTech Guidance Built for Teams Under Real Pressure
            </h2>

            <p className="text-body mt-5 max-w-xl text-zinc-600">
              Vendor-neutral systems advisory for regulated teams that need
              faster decisions, fewer false positives, and technology choices
              they can defend — without overpriced legacy stacks or commission-led
              recommendations.
            </p>

            <div className="relative mt-9 min-h-[280px] w-full overflow-hidden rounded-2xl bg-proteq-dark shadow-[0_28px_80px_rgba(35,17,67,0.14)] sm:min-h-[360px] md:min-h-[520px]">
              <Image
                src="/systems-bg.webp"
                alt="RegTech systems and compliance technology environment"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="overlay-consultancy-why absolute inset-0" />

              <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-white/35 pt-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Systems Standard
                </p>
                <p className="text-xs text-white/55">
                  Screening / Monitoring / KYC
                </p>
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <div className="consultancy-why-card max-w-md p-5">
                  <p className="text-2xl font-medium leading-tight text-white">
                    Recommendations shaped by obligation, workflow, and scale —
                    not vendor incentives.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        180+
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Evaluations delivered
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        100%
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Vendor-neutral
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2"
            staggerChildren={0.08}
          >
            {points.map((point, index) => (
              <StaggerItem key={point.title}>
                <div
                  className={cn(
                    "h-full rounded-2xl p-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,24,90,0.2)]",
                    reduceMotion
                      ? "border-2 border-primary bg-transparent"
                      : "border-beam-card"
                  )}
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDelay: `${index * 0.35}s` }
                  }
                >
                  <WhyCard point={point} index={index} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
