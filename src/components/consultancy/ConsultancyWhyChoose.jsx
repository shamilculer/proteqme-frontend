"use client";

import { itemKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import WhyChoosePointCard from "@/components/ui/WhyChoosePointCard";
import SectionDescription from "@/components/ui/SectionDescription";
import { cn } from "@/lib/utils";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_POINTS = [
  {
    title: "Practical, Not Theoretical",
    description:
      "Every engagement is built around usable documentation, clear findings, and implementation steps your team can act on.",
    icon: "clipboardCheck",
  },
  {
    title: "Regulatory Depth",
    description:
      "Advisory is grounded in AML, anti-fraud, digital asset, and regulatory control expectations across demanding environments.",
    icon: "shieldCheck",
  },
  {
    title: "Tailored Risk Lens",
    description:
      "We shape recommendations around your actual exposure, customer base, products, systems, and operating model.",
    icon: "target",
  },
  {
    title: "Audit-Ready Outputs",
    description:
      "Policies, procedures, assessments, and remediation plans are structured for internal use and external examination.",
    icon: "fileCheck",
  },
];

const DEFAULTS = {
  eyebrow: "Why Choose Us",
  heading: "Advisory That Holds Up When It Matters",
  description:
    "Our work is designed for regulated teams that need clarity, documentation, and defensible decisions without unnecessary complexity.",
  image: "/consulting-bg.webp",
  imageAlt: "Regulated business environment for compliance advisory",
  points: DEFAULT_POINTS,
  particleId: "consultancy-why-particles",
};

export default function ConsultancyWhyChoose({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
  points = DEFAULTS.points,
  particleId = DEFAULTS.particleId,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="relative w-full overflow-hidden bg-white py-18 md:py-24">
      <ParticleNetwork variant="light" id={particleId} />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
          <ScrollReveal xOffset={-16} className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl text-3xl md:text-[46px]">
              {heading}
            </h2>

            <SectionDescription content={description} className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base" />

            <div className="mt-9 w-full">
              <SplitSectionMedia
                size="why"
                src={image}
                alt={imageAlt}
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2" staggerChildren={0.1}>
            {points.map((point, index) => (
              <StaggerItem
                key={itemKey(point, index)}
                className={cn(
                  "group relative h-full rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,24,90,0.1)]",
                  reduceMotion
                    ? "border-2 border-primary bg-transparent"
                    : "border-beam-card-light"
                )}
                style={
                  reduceMotion
                    ? undefined
                    : { animationDelay: `${index * 0.35}s` }
                }
              >
                <WhyChoosePointCard point={point} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionReveal>
  );
}
