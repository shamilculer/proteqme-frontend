"use client";

import PartnerApplicationForm from "@/components/forms/PartnerApplicationForm";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function PartnerFormSection() {
  return (
    <section
      id="partner-form"
      className="section-light-white w-full border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="partner-form-heading"
    >
      <div className="container space-y-8 md:space-y-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Partnership Application
          </p>
          <h2
            id="partner-form-heading"
            className="text-section-heading mb-4 text-foreground"
          >
            Let&apos;s Build Something Valuable Together
          </h2>
          <p className="text-body text-zinc-600">
            Apply as a partner, trainer, or system provider and explore
            opportunities to collaborate across advisory, training, and
            compliance technology initiatives.
          </p>
        </ScrollReveal>

        <ScrollReveal yOffset={16}>
          <PartnerApplicationForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
