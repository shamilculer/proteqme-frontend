"use client";

import dynamic from "next/dynamic";
import ActionButton from "@/components/ui/ActionButton";
import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false },
);

const DEFAULTS = {
  eyebrow: "Get started",
  heading: "Your path to AI-powered investing starts here",
  description:
    "Speak with Proteq to explore AI-driven trading, gold-backed products, and digital asset services — and find an approach that fits your goals.",
  cta: {
    label: "Speak with Proteq",
    href: "/contact",
    actionType: "link",
    glowingDot: true,
    showArrow: true,
  },
  sectionId: "aurum-register",
};

export default function AurumReferralRegister({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  cta = DEFAULTS.cta,
  sectionId = DEFAULTS.sectionId,
}) {
  const particleId = sectionId ? `${sectionId}-particles` : "aurum-register-particles";
  const headingId = sectionId ? `${sectionId}-heading` : "aurum-register-heading";
  const registerCta = cta?.href ? cta : DEFAULTS.cta;

  return (
    <SectionReveal
      id={sectionId}
      className="relative isolate w-full overflow-hidden border-t border-white/10 py-14 md:py-16"
      aria-labelledby={headingId}
    >
      <div
        className="absolute inset-0 bg-linear-to-br from-[#231143] via-[#1a0d33] to-[#0d0d14]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(232,24,90,0.08),transparent_50%)]"
        aria-hidden
      />
      <ParticleNetwork id={particleId} variant="dark" density="sparse" />

      <div className="container relative z-10">
        <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center md:gap-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E25C8F]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/85">
              {eyebrow}
            </span>
          </div>

          <h2
            id={headingId}
            className="max-w-xl text-2xl font-semibold tracking-tight text-white md:text-[2rem] md:leading-[1.2]"
          >
            {heading}
          </h2>

          {description ? (
            <SectionDescription
              content={description}
              className="max-w-lg text-sm leading-relaxed text-white/72 md:text-base [&_p]:text-white/72"
            />
          ) : null}

          <ActionButton
            {...registerCta}
            showArrow
            glowingDot
            className="mt-1 h-11 w-full max-w-xs px-7 shadow-[0_8px_28px_rgba(232,24,90,0.35)] sm:w-auto"
          />
        </ScrollReveal>
      </div>
    </SectionReveal>
  );
}
