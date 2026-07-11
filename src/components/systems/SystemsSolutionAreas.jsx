"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Activity,
  FileCheck2,
  SearchCheck,
  UserCheck,
} from "lucide-react";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const solutionAreas = [
  {
    title: "AML Screening & Sanctions",
    description:
      "Evaluate and implement screening systems for PEP identification, sanctions list matching, and adverse media monitoring — with workflow integration and false positive reduction.",
    icon: SearchCheck,
    image: "/hero-new.webp",
  },
  {
    title: "Transaction Monitoring",
    description:
      "Deploy rule-based and AI-augmented transaction monitoring across typology libraries and alert management, with case workflow and regulatory reporting integration.",
    icon: Activity,
    image: "/hero-2-new.webp",
  },
  {
    title: "KYC & Customer Due Diligence",
    description:
      "End-to-end customer onboarding and ongoing due diligence platforms for regulated customer journeys — identity verification, beneficial ownership, and risk scoring.",
    icon: UserCheck,
    image: "/learning-4.webp",
  },
  {
    title: "Regulatory Reporting & Case Management",
    description:
      "Systems for SAR, CTR, and case management workflows that maintain audit trails for regulatory examination — structured reporting, escalation, and examination records.",
    icon: FileCheck2,
    image: "/who-we-are.webp",
  },
];

export default function SystemsSolutionAreas() {
  return (
    <section
      id="solution-areas"
      className="section-light w-full border-t border-zinc-200/70 py-20 md:py-28 relative isolate overflow-hidden"
      aria-labelledby="systems-solutions-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="systems-solution-areas-particles" variant="light" />
      <div className="container">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Solution Areas
            </p>
            <h2
              id="systems-solutions-heading"
              className="text-section-heading max-w-2xl text-foreground"
            >
              Compliance Systems for Teams Moving at Operational Speed
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              Screening, monitoring, onboarding, reporting, and case workflows —
              technology that supports stronger compliance outcomes without
              slowing the team down.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          staggerChildren={0.06}
        >
          {solutionAreas.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <StaggerItem key={itemKey(solution, index)}>
                <article className="group relative min-h-[360px] overflow-hidden rounded-xl border border-zinc-200/80 bg-[#0D0D14] shadow-[0_18px_55px_rgba(13,13,20,0.08)]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-[rgba(13,13,18,0.55)]"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[rgba(13,13,18,0.92)] via-[rgba(13,13,18,0.45)] to-[rgba(13,13,18,0.12)]" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="text-xs font-semibold tabular-nums tracking-wider text-white/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="icon-stat-circle size-9 bg-white/10">
                      <Icon className="size-4 text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="mb-2 text-base font-semibold leading-snug text-white">
                      {solution.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/75">
                      {solution.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
