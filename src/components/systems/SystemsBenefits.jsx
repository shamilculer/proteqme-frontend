"use client";

import { Button } from "@/components/ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const impactStats = [
  {
    value: "40+",
    label: "Institutions advised",
    description: "Banks, VASPs, fintechs, and regulated operators",
  },
  {
    value: "10+",
    label: "Jurisdictions",
    description: "Cross-border screening and monitoring programmes",
  },
  {
    value: "180+",
    label: "Technology evaluations",
    description: "Vendor-neutral assessments delivered",
  },
  {
    value: "100%",
    label: "Vendor-neutral",
    description: "No commissions, reseller fees, or kickbacks",
  },
];

export default function SystemsBenefits() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#061525] py-18 text-white md:py-24"
      aria-labelledby="systems-impact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(232,24,90,0.2), transparent 40%), radial-gradient(circle at 80% 20%, rgba(35,17,67,0.5), transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Impact at Scale
          </p>
          <h2
            id="systems-impact-heading"
            className="mt-3 text-3xl font-semibold md:text-[40px]"
          >
            RegTech Advisory Built for Regulated Operations
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.07}
        >
          {impactStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <article className="text-center">
                <p className="text-5xl font-bold tracking-tight text-primary md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg font-semibold">{stat.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {stat.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-12 text-center">
          <Button href="/contact" variant="white" showArrow glowingDot>
            Request a Systems Assessment
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
