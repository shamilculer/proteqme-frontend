"use client";

import PartnerApplicationForm from "@/components/forms/PartnerApplicationForm";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const DEFAULTS = {
  eyebrow: "Partnership Application",
  heading: "Apply to Partner With Proteq",
  sectionId: "partner-form",
};

export default function PartnerFormSection({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  sectionId = DEFAULTS.sectionId,
}) {
  const headingId = sectionId ? `${sectionId}-heading` : "partner-form-heading";

  return (
    <SectionReveal
      id={sectionId}
      className="section-light-white relative isolate scroll-mt-24 w-full overflow-visible border-t border-zinc-200/70 py-16 md:py-24"
      aria-labelledby={headingId}
    >
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-8 max-w-[1000px] text-center md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-section-heading text-foreground"
          >
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="right" className="mx-auto w-full max-w-[1000px]">
          <div className="rounded-2xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
            <PartnerApplicationForm />
          </div>
        </ScrollReveal>
      </div>
    </SectionReveal>
  );
}
