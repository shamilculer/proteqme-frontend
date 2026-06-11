"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionAmbient from "@/components/ui/SectionAmbient";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const outboundLinks = [
  {
    title: "Aurum Foundation Website",
    description:
      "Visit the Aurum Foundation platform to explore AI trading bots, gold-backed investment packages, neobank services, and the complete financial ecosystem.",
    href: "https://aurum-foundation.com/",
    buttonLabel: "Visit Aurum Foundation",
    external: true,
  },
  {
    title: "Investor Information",
    description:
      "Request further information about Aurum products, partnership opportunities, or investor onboarding through Proteq.",
    href: "/contact",
    buttonLabel: "Learn More",
    external: false,
  },
];

export default function AurumOutboundLinks() {
  return (
    <SectionReveal
      id="aurum-links"
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-12 md:py-16"
      aria-labelledby="aurum-links-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="aurum-links-particles" variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center md:mb-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Explore Aurum
          </p>
          <h2
          >
            Your Path to the Aurum Ecosystem
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-5 md:grid-cols-2 md:gap-6"
          staggerChildren={0.08}
        >
          {outboundLinks.map((link) => (
            <StaggerItem key={link.title}>
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

                <Button
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  showArrow
                  className="mt-6 w-full sm:w-auto"
                  variant={link.external ? "default" : "secondary"}
                  glowingDot={link.external}
                >
                  {link.buttonLabel}
                </Button>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
