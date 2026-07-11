"use client";

import { itemKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import CmsIcon from "@/components/ui/CmsIcon";
import FeatureIconBox from "@/components/ui/FeatureIconBox";
import SectionDescription from "@/components/ui/SectionDescription";
import { cn } from "@/lib/utils";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    title: "Practitioner-Led",
    description:
      "Sessions led by compliance professionals with live case experience — not abstract theory or generic slide decks.",
    icon: "users",
  },
  {
    title: "Audit-Ready Frameworks",
    description:
      "Workplace-ready materials structured for internal governance, examinations, and regulator-facing evidence.",
    icon: "fileCheck",
  },
  {
    title: "Certification Preparation",
    description:
      "Focused pathways for ACAMS CAFS, ICA, CAMS, and CFE — with assessment-aligned modules and expert guidance.",
    icon: "graduation",
  },
  {
    title: "Flexible Delivery",
    description:
      "Webinars, in-house programmes, and certification tracks — formats shaped around your team's schedule and regulatory context.",
    icon: "monitorPlay",
  },
];

const DEFAULTS = {
  eyebrow: "Why Learn With Proteq",
  heading: "Training That Holds Up in Regulated Work",
  description:
    "Four reasons compliance professionals choose Proteq — built for teams that need practical capability, not checkbox training.",
  columns: 4,
  items: DEFAULT_ITEMS,
  sectionId: null,
  particleId: "learning-why-particles",
};

function WhyCard({ point }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-zinc-200/90 bg-white p-5 shadow-[0_8px_30px_rgba(13,13,20,0.04)] transition duration-300 hover:border-primary/25 hover:shadow-[0_16px_40px_rgba(232,24,90,0.08)] sm:rounded-2xl sm:p-6">
      <FeatureIconBox size="md" className="mb-5">
        <CmsIcon
          lucide={point.lucide || point.icon}
          src={point.src}
          alt={point.alt}
          className="size-5"
          strokeWidth={1.75}
        />
      </FeatureIconBox>

      <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
        {point.title}
      </h3>

      <p className="text-sm leading-[1.65] text-zinc-600">{point.description}</p>
    </article>
  );
}

export default function LearningWhyChoose({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  columns = DEFAULTS.columns,
  items = DEFAULT_ITEMS,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) {
  const colCount = Number(columns) || 4;
  const gridColsClass =
    colCount === 2
      ? "sm:grid-cols-2"
      : colCount === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light-white relative isolate w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="learning-why-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id={particleId} />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {eyebrow}
          </p>
          <h2 id="learning-why-heading">{heading}</h2>
          <SectionDescription content={description} className="text-body mt-5 text-zinc-600" />
        </ScrollReveal>

        <StaggerContainer
          className={cn("mx-auto grid max-w-6xl grid-cols-1 gap-3 lg:gap-4", gridColsClass)}
          staggerChildren={0.08}
        >
          {items.map((point, index) => (
            <StaggerItem key={itemKey(point, index)}>
              <WhyCard point={point} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
