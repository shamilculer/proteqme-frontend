"use client";

import dynamic from "next/dynamic";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal"
import SectionDescription from "@/components/ui/SectionDescription";
import ServiceModulesSlider, { DEFAULT_MODULES } from "./ServiceModulesSlider";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULTS = {
  eyebrow: "What We Advise On",
  heading: "Specialised Advisory for Complex Regulatory Environments",
  description:
    "Practical support across AML, anti-fraud, digital asset regulation, and governance — from programme design through to documentation and team enablement.",
  modules: DEFAULT_MODULES,
  sectionId: "advisory-modules",
};

export default function ConsultancyModules({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  modules = DEFAULTS.modules,
  sectionId = DEFAULTS.sectionId,
}) {
  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light relative w-full scroll-mt-28 overflow-hidden py-20 md:py-28"
      aria-labelledby="consultancy-modules-heading"
    >
      <ParticleNetwork variant="light" id="consultancy-modules-particles" />

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id="consultancy-modules-heading"
              className="text-section-heading max-w-3xl text-foreground"
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <SectionDescription content={description} className="text-body text-zinc-600" />
          </ScrollReveal>
        </div>
      </div>

      <ServiceModulesSlider modules={modules} sectionId={sectionId} />
    </SectionReveal>
  );
}
