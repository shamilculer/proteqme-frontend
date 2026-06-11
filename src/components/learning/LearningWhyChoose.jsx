"use client";

import { FileCheck2, GraduationCap, MonitorPlay, Users } from "lucide-react";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const points = [
  {
    title: "Practitioner-Led",
    description:
      "Sessions led by compliance professionals with live case experience — not abstract theory or generic slide decks.",
    icon: Users,
  },
  {
    title: "Audit-Ready Frameworks",
    description:
      "Workplace-ready materials structured for internal governance, examinations, and regulator-facing evidence.",
    icon: FileCheck2,
  },
  {
    title: "Certification Preparation",
    description:
      "Focused pathways for ACAMS CAFS, ICA, CAMS, and CFE — with assessment-aligned modules and expert guidance.",
    icon: GraduationCap,
  },
  {
    title: "Flexible Delivery",
    description:
      "Webinars, in-house programmes, and certification tracks — formats shaped around your team's schedule and regulatory context.",
    icon: MonitorPlay,
  },
];

function WhyCard({ point }) {
  const Icon = point.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 transition duration-300 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(232,24,90,0.08)] md:p-7 shadow-xs">
      <div className="icon-stat-circle mb-5 size-12! shrink-0 transition duration-300 group-hover:border-primary/40">
        <Icon className="size-5 text-primary" strokeWidth={1.75} />
      </div>

      <h3 className="mb-2 text-2xl font-semibold text-foreground">
        {point.title}
      </h3>

      <p className="text-sm leading-[1.65] text-zinc-600">{point.description}</p>
    </article>
  );
}

export default function LearningWhyChoose() {
  return (
    <SectionReveal
      className="section-light-white relative isolate w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="learning-why-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id="learning-why-particles" />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Why Learn With Proteq
          </p>
          <h2
          >
            Training That Holds Up in Regulated Work
          </h2>
          <p className="text-body mt-5 text-zinc-600">
            Four reasons compliance professionals choose Proteq — built for teams
            that need practical capability, not checkbox training.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          staggerChildren={0.08}
        >
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <WhyCard point={point} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
