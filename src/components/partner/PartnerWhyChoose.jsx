"use client";

import { itemKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import WhyChoosePointCard from "@/components/ui/WhyChoosePointCard";
import SectionDescription from "@/components/ui/SectionDescription";
import { cn } from "@/lib/utils";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_POINTS = [
  {
    title: "Global Reach & Visibility",
    description:
      "Tap into our network of financial institutions, regulators, and compliance professionals across 30+ markets.",
    icon: "globe",
  },
  {
    title: "Co-Branded Opportunities",
    description:
      "Deliver joint programmes, advisory engagements, and technology solutions under a trusted, recognised brand.",
    icon: "briefcaseBusiness",
  },
  {
    title: "Expert Community Access",
    description:
      "Collaborate with practitioners, trainers, and technologists at the forefront of compliance and RegTech.",
    icon: "users",
  },
  {
    title: "Structured Support",
    description:
      "From onboarding to go-to-market, hands-on support so every partnership delivers measurable results.",
    icon: "badgeCheck",
  },
];

const DEFAULTS = {
  eyebrow: "Why Partner With Us",
  heading: "A Platform Built for Lasting Impact",
  description:
    "Meaningful collaboration with structured support — not a logo on a website, but a partnership that creates real industry value across advisory, training, and RegTech.",
  image: "/who-we-are.webp",
  imageAlt: "Business partnership and professional collaboration",
  points: DEFAULT_POINTS,
  particleId: "partner-why-particles",
};

export default function PartnerWhyChoose({
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
    <SectionReveal
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="partner-why-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />
      <div className="container relative z-10">
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

            <h2
              id="partner-why-heading"
              className="section-heading-accent text-section-heading max-w-xl"
            >
              {heading}
            </h2>

            <SectionDescription content={description} className="text-body mt-5 max-w-xl text-zinc-600" />

            <div className="mt-9 w-full">
              <SplitSectionMedia
                size="why"
                src={image}
                alt={imageAlt}
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2"
            staggerChildren={0.08}
          >
            {points.map((point, index) => (
              <StaggerItem key={itemKey(point, index)}>
                <div
                  className={cn(
                    "h-full rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,24,90,0.12)]",
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
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionReveal>
  );
}
