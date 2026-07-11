"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import CtaButton from "@/components/ui/CtaButton";
import ActionButton from "@/components/ui/ActionButton";
import CmsIcon from "@/components/ui/CmsIcon"
import SectionDescription from "@/components/ui/SectionDescription";
import { cn } from "@/lib/utils";
import SectionAmbient from "../ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    icon: "users",
    title: "Built by Practitioners",
    description:
      "Former compliance officers and regulators — advice grounded in real regulatory work.",
  },
  {
    icon: "scale",
    title: "Fiercely Independent",
    description:
      "No vendor commissions or kickbacks — recommendations shaped by your risk profile alone.",
  },
  {
    icon: "globe",
    title: "Trusted Across Markets",
    description:
      "Supporting 40+ institutions across 10+ jurisdictions, from Tier-1 banks to VASPs.",
  },
];

const DEFAULTS = {
  eyebrow: "Who We Are",
  heading: "The Specialists Behind Your Compliance Confidence.",
  description:
    "An independent compliance firm helping regulated organisations build defensible programmes, capable teams, and systems that stand up to scrutiny.",
  columns: 3,
  items: DEFAULT_ITEMS,
  sectionId: null,
  particleId: "intro-particles",
  cta: { label: "Book a Free Consultation", href: "/contact", actionType: "link" },
  secondaryCta: { label: "Explore Our Services", href: "#services", actionType: "link" },
};

const Intro = ({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  columns = DEFAULTS.columns,
  items = DEFAULT_ITEMS,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  secondaryCta = DEFAULTS.secondaryCta,
  secondaryCtaLabel,
  secondaryCtaHref,
}) => {
  const reduceMotion = useReducedMotion();
  const primaryAction =
    cta ||
    (ctaLabel && ctaHref
      ? { label: ctaLabel, href: ctaHref, actionType: "link" }
      : null);
  const secondaryAction =
    secondaryCta ||
    (secondaryCtaLabel && secondaryCtaHref
      ? {
          label: secondaryCtaLabel,
          href: secondaryCtaHref,
          actionType: "link",
        }
      : null);

  const gridColsClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="who-we-are-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id={particleId} />

      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id="who-we-are-heading"
              className="text-section-heading max-w-3xl text-foreground"
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-md">
            <SectionDescription content={description} className="text-body text-zinc-600" />
          </ScrollReveal>
        </div>

        <StaggerContainer
          className={cn("grid gap-5", gridColsClass)}
          staggerChildren={0.08}
        >
          {items.map((pillar, index) => (
            <StaggerItem key={itemKey(pillar, index)}>
              <div
                className={cn(
                  "group relative h-full rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(232,24,90,0.15)]",
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
                <article className="flex h-full flex-col rounded-[calc(1rem-1.5px)] bg-white border border-zinc-200/50 p-7 md:p-8 shadow-xs">
                  <motion.div
                    className="icon-stat-circle mb-6 size-14"
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                    }}
                  >
                    <CmsIcon
                      lucide={pillar.lucide || pillar.icon}
                      src={pillar.src}
                      alt={pillar.alt}
                      className="size-6 text-primary"
                      strokeWidth={1.75}
                    />
                  </motion.div>
                  <h3 className="mb-2.5 text-base font-semibold text-foreground md:text-lg">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                    {pillar.description}
                  </p>
                </article>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {primaryAction || secondaryAction ? (
          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center justify-center">
              {primaryAction ? (
                <CtaButton
                  cta={primaryAction}
                  glowingDot
                  showArrow
                  className="w-full px-7 sm:w-auto"
                />
              ) : null}
              {secondaryAction ? (
                <ActionButton
                  {...secondaryAction}
                  variant="white"
                  showArrow
                  className="w-full border border-zinc-300 px-7 sm:w-auto"
                />
              ) : null}
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </SectionReveal>
  );
};

export default Intro;
