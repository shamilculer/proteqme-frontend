"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";
import SectionAmbient from "@/components/ui/SectionAmbient";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const DEFAULT_LINKS = [
  {
    title: "Aurum Foundation Website",
    description:
      "Visit the Aurum Foundation platform to explore AI trading bots, gold-backed investment packages, neobank services, and the complete financial ecosystem.",
    button: {
      label: "Visit Aurum Foundation",
      href: "https://aurum-foundation.com/",
      actionType: "link",
      newTab: true,
      variant: "default",
      glowingDot: true,
    },
  },
  {
    title: "Investor Information",
    description:
      "Request further information about Aurum products, partnership opportunities, or investor onboarding through Proteq.",
    button: {
      label: "Learn More",
      href: "/contact",
      actionType: "link",
      variant: "secondary",
    },
  },
];

const DEFAULTS = {
  eyebrow: "Explore Aurum",
  heading: "Your Path to the Aurum Ecosystem",
  description: null,
  links: DEFAULT_LINKS,
  sectionId: "aurum-links",
};

export default function AurumOutboundLinks({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description: _description = DEFAULTS.description,
  links = DEFAULTS.links,
  sectionId = DEFAULTS.sectionId,
}) {
  const particleId = sectionId ? `${sectionId}-particles` : "aurum-links-particles";
  const headingId = sectionId ? `${sectionId}-heading` : "aurum-links-heading";

  return (
    <SectionReveal
      id={sectionId}
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-12 md:py-16"
      aria-labelledby={headingId}
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center md:mb-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {eyebrow}
          </p>
          <h2 id={headingId}>
            {heading}
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-5 md:grid-cols-2 md:gap-6"
          staggerChildren={0.08}
        >
          {links.map((link, index) => {
            const linkButton =
              link.button ||
              (link.buttonLabel && link.href
                ? {
                    label: link.buttonLabel,
                    href: link.href,
                    actionType: "link",
                    newTab: link.external,
                  }
                : null);

            return (
            <StaggerItem key={itemKey(link, index)}>
              <article className="flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_20px_50px_rgba(13,13,20,0.08)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(232,24,90,0.12)] md:p-8">
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  {link.external ? (
                    <ExternalLink className="size-5 text-primary" strokeWidth={1.75} />
                  ) : (
                    <ArrowUpRight className="size-5 text-primary" strokeWidth={1.75} />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  {link.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {link.description}
                </p>

                {linkButton ? (
                  <ActionButton
                    {...linkButton}
                    showArrow
                    className="mt-6 w-full sm:w-auto"
                    variant={
                      linkButton.variant ?? (link.external ? "default" : "secondary")
                    }
                    glowingDot={linkButton.glowingDot ?? link.external}
                  />
                ) : null}
              </article>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
