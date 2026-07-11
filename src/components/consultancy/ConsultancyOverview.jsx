"use client";

import { listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import CtaButton from "@/components/ui/CtaButton";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULTS = {
  eyebrow: "Overview",
  heading: "Advisory Built for the Real Work of Compliance",
  description: null,
  paragraphs: [
    "Our consulting practice works with financial institutions, virtual asset service providers, fintechs, and regulated businesses to build, audit, and strengthen their compliance operations.",
    "Advisory engagements cover anti-money laundering frameworks, know your customer processes, sanctions screening programmes, and anti-fraud controls. The work is shaped around the organisation's actual risk exposure, systems, people, and regulatory duties.",
    "This is not theoretical guidance. Each engagement is grounded in hands-on implementation, with clear findings, usable documentation, filing support where required, and practical training for the teams responsible for execution.",
  ],
  cta: { label: "Book a Free Consultation", href: "/contact", actionType: "link" },
  image: "/consulting-intro.webp",
  imageAlt: "Compliance advisory team reviewing regulatory controls",
  particleId: "consultancy-overview-particles",
};

export default function ConsultancyOverview({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  paragraphs = DEFAULTS.paragraphs,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
  particleId = DEFAULTS.particleId,
}) {
  const action =
    cta ||
    (ctaLabel && ctaHref
      ? { label: ctaLabel, href: ctaHref, actionType: "link" }
      : null);

  return (
    <SectionReveal className="w-full overflow-hidden bg-[#f6f4f8] py-18 md:py-24 relative">
      <ParticleNetwork variant="light" id={particleId} />
      <div className="container">
        <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-18">
          <ScrollReveal xOffset={-16} delay={0.08} className="relative min-h-0 lg:min-h-[600px]">
            <div className="max-w-md lg:max-w-none">
              <SplitSectionMedia
                frame="default"
                size="overview"
                src={image}
                alt={imageAlt}
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={16} className="relative z-10">
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]" />
                </span>
                <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                  {eyebrow}
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl md:text-[46px]">{heading}</h2>

              {description ? (
                <SectionDescription
                  content={description}
                  className="mt-7 text-sm leading-relaxed text-zinc-700 sm:text-base"
                />
              ) : paragraphs.length ? (
                <div className="mt-7 space-y-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {paragraphs.map((text, index) => (
                    <p key={listKey(text, index, "paragraph")}>{text}</p>
                  ))}
                </div>
              ) : null}

              {action ? (
                <div className="flex items-center gap-5 mt-6">
                  <CtaButton cta={action} showArrow />
                </div>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
