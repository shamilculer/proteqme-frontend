"use client";

import { listKey } from "@/lib/listKey";
import CtaButton from "@/components/ui/CtaButton";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const DEFAULTS = {
  eyebrow: "Overview",
  heading: "Systems Built for Modern Compliance Operations",
  description: null,
  paragraphs: [
    "We help organisations evaluate, implement, and optimise compliance technology tailored to their regulatory obligations and operational needs — from AML screening and transaction monitoring to KYC onboarding and regulatory reporting.",
    "Our advisory focuses on scalable systems that reduce risk, improve efficiency, and support long-term compliance readiness. Recommendations are shaped around your risk exposure, current stack, team workflows, and regulatory duties — not vendor incentives.",
    "Every engagement starts with understanding your control gaps and workflow realities, then delivers clear, defensible guidance your team can implement with confidence.",
  ],
  cta: { label: "Request a Systems Assessment", href: "/contact", actionType: "link" },
  image: "/system-provider.webp",
  imageAlt: "Compliance technology advisory and system evaluation",
  particleId: null,
};

export default function SystemsOverview({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  paragraphs = DEFAULTS.paragraphs,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
}) {
  const action =
    cta ||
    (ctaLabel && ctaHref
      ? { label: ctaLabel, href: ctaHref, actionType: "link" }
      : null);

  return (
    <SectionReveal className="w-full overflow-hidden border-b border-zinc-200/70 bg-[#f6f4f8] py-18 md:py-24">
      <div className="container">
        <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-18">
          <ScrollReveal xOffset={-16} delay={0.08} className="relative min-h-0 lg:min-h-[600px]">
            <div className="max-w-md lg:max-w-none">
              <SplitSectionMedia
                frame="soft"
                size="overview"
                src={image}
                alt={imageAlt}
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={16} className="relative z-10">
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
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
                <div className="mt-6 flex items-center gap-5">
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
