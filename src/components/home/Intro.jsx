"use client";

import { Globe, Scale, Users } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SectionAmbient from "../ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../ui/scroll-reveal";

const pillars = [
  {
    icon: Users,
    title: "Built by Practitioners",
    description:
      "Former compliance officers and regulators — advice grounded in real regulatory work.",
  },
  {
    icon: Scale,
    title: "Fiercely Independent",
    description:
      "No vendor commissions or kickbacks — recommendations shaped by your risk profile alone.",
  },
  {
    icon: Globe,
    title: "Trusted Across Markets",
    description:
      "Supporting 40+ institutions across 10+ jurisdictions, from Tier-1 banks to VASPs.",
  },
];

const stats = [
  { value: "40+", label: "institutions served" },
  { value: "10+", label: "jurisdictions" },
  { value: "15+", label: "years in compliance" },
];

const Intro = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="who-we-are-heading"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Who We Are
            </p>
            <h2
              id="who-we-are-heading"
              className="text-section-heading max-w-3xl text-foreground"
            >
              The Specialists Behind Your Compliance Confidence.
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-md">
            <p className="text-body text-zinc-600">
              An independent compliance firm helping regulated organisations build
              defensible programmes, capable teams, and systems that stand up to
              scrutiny.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-3"
          staggerChildren={0.08}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <div
                  className={cn(
                    "group relative h-full rounded-2xl p-[3px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(232,24,90,0.35)]",
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
                  <article className="flex h-full flex-col rounded-[calc(1rem-3px)] bg-proteq-dark p-7 md:p-8">
                    <motion.div
                      className="icon-stat-circle mb-6 size-14"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 18,
                      }}
                    >
                      <Icon
                        className="size-6 text-primary"
                        strokeWidth={1.75}
                      />
                    </motion.div>
                    <h3 className="mb-2.5 text-base font-semibold text-white md:text-lg">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70 md:text-[15px]">
                      {pillar.description}
                    </p>
                  </article>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center justify-center">
            <Button
              href="/contact"
              glowingDot
              showArrow
              className="h-13 w-full px-7 text-sm font-semibold sm:w-auto"
            >
              Book a Free Consultation
            </Button>
            <Button
              href="#services"
              variant="white"
              showArrow
              className="h-13 w-full border border-zinc-300 px-7 text-sm font-semibold sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Intro;