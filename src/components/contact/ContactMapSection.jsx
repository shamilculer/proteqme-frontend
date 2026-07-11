"use client";

import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import { OFFICE_MAP_EMBED } from "@/data/siteContact";

const DEFAULTS = {
  embedUrl: OFFICE_MAP_EMBED,
  sectionId: "contact-map",
};

export default function ContactMapSection({
  embedUrl = DEFAULTS.embedUrl,
  sectionId = DEFAULTS.sectionId,
}) {
  return (
    <SectionReveal
      id={sectionId}
      className="relative w-full overflow-hidden border-t border-zinc-200/70"
    >
      <ScrollReveal yOffset={0}>
        <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] md:aspect-[2.4/1]">
          <iframe
            src={embedUrl}
            title="Proteq office location — London"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollReveal>
    </SectionReveal>
  );
}
