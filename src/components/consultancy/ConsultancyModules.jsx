"use client";

import dynamic from "next/dynamic";
import { ScrollReveal } from "../ui/scroll-reveal";
import ServiceModulesSlider from "./ServiceModulesSlider";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

export default function ConsultancyModules() {
  return (
    <section
      id="advisory-modules"
      className="section-dark section-particles-animated relative isolate w-full overflow-hidden py-20 md:py-28"
      aria-labelledby="consultancy-modules-heading"
    >
      <ParticleNetwork id="consultancy-modules-particles" />

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
              What We Advise On
            </p>
            <h2
              id="consultancy-modules-heading"
              className="text-section-heading max-w-3xl text-white"
            >
              Specialised Advisory for Complex Regulatory Environments
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-white/75">
              Practical support across AML, anti-fraud, digital asset regulation,
              and governance — from programme design through to documentation
              and team enablement.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ServiceModulesSlider />
    </section>
  );
}
