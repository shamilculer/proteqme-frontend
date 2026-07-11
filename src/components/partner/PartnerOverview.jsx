"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import CmsIcon from "@/components/ui/CmsIcon";
import CtaButton from "@/components/ui/CtaButton";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_PILLS = [
  {
    bg: "bg-pink-100",
    color: "text-pink-600",
    icon: "shield",
    label: "AML Compliance",
  },
  {
    bg: "bg-violet-100",
    color: "text-violet-600",
    icon: "graduation",
    label: "Expert Training",
  },
  {
    bg: "bg-blue-100",
    color: "text-blue-600",
    icon: "building",
    label: "Strategic Partnerships",
  },
  {
    bg: "bg-emerald-100",
    color: "text-emerald-600",
    icon: "bot",
    label: "Compliance Technology",
  },
  {
    bg: "bg-orange-100",
    color: "text-orange-600",
    icon: "globe",
    label: "Global Network",
  },
  {
    bg: "bg-cyan-100",
    color: "text-cyan-600",
    icon: "users",
    label: "Industry Experts",
  },
  {
    bg: "bg-amber-100",
    color: "text-amber-600",
    icon: "checkCircle",
    label: "Trusted Collaboration",
  },
];

const DEFAULTS = {
  eyebrow: "Partnership & Collaboration",
  heading: "Build the Future of Compliance, Training & Regulatory Technology With Us",
  paragraphs: [
    "We collaborate with industry experts, compliance professionals, technology providers, and forward thinking organisations to create impactful advisory, learning, and systems driven solutions. Whether you deliver specialised expertise, innovative compliance technology, or training capabilities, we provide a platform to grow together, expand your reach, and create meaningful industry impact.",
    "Join a growing network of experts, trainers, and technology providers shaping the future of compliance, advisory, and regulatory innovation.",
  ],
  pills: DEFAULT_PILLS,
  cta: { label: "Become a Partner", href: "#partner-form", actionType: "link" },
  sectionId: "partner-overview",
};

function normalizePills(pills) {
  return pills.map((pill, index) => {
    const fallback = DEFAULT_PILLS[index % DEFAULT_PILLS.length];

    if (typeof pill === "string") {
      return {
        ...fallback,
        label: pill,
      };
    }

    return {
      ...fallback,
      ...pill,
      label: pill.label ?? fallback.label,
    };
  });
}

export default function PartnerOverview({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  body = null,
  paragraphs = DEFAULTS.paragraphs,
  pills = DEFAULTS.pills,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  sectionId = DEFAULTS.sectionId,
}) {
  const particleId = sectionId ? `${sectionId}-particles` : "partner-overview-particles";
  const normalizedPills = normalizePills(pills);
  const action =
    cta ||
    (ctaLabel && ctaHref
      ? { label: ctaLabel, href: ctaHref, actionType: "link" }
      : null);

  return (
    <SectionReveal
      id={sectionId}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id={particleId} variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mb-8 md:mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              {eyebrow}
            </span>
          </div>
          <h2 className="section-heading-accent text-section-heading max-w-4xl">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-12 xl:gap-16">
          <ScrollReveal
            className="order-2 min-w-0 lg:order-1"
            xOffset={-12}
          >
            <StaggerContainer
              className="flex max-w-full flex-wrap gap-2.5 sm:gap-3"
              staggerChildren={0.05}
            >
              {normalizedPills.map(({ bg, color, label, lucide, src, alt, icon }, index) => (
                <StaggerItem key={listKey(label, index)}>
                  <div className="flex max-w-full items-center gap-2 rounded-full border border-zinc-200/90 bg-white p-1 pr-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_35px_rgba(13,13,20,0.08)]">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full ${bg}`}
                    >
                      <CmsIcon
                        lucide={lucide || icon}
                        src={src}
                        alt={alt}
                        className={`size-4 ${color}`}
                      />
                    </div>
                    <span className="text-sm font-medium leading-snug text-foreground">
                      {label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal className="order-1 min-w-0 lg:order-2" xOffset={12}>
            {body ? (
              <SectionDescription
                content={body}
                className="text-body mb-6 text-zinc-600"
              />
            ) : (
              paragraphs.map((text, index) => (
                <p key={listKey(text, index, "paragraph")} className="text-body mb-6 text-zinc-600">
                  {text}
                </p>
              ))
            )}
            {action ? (
              <CtaButton
                cta={action}
                showArrow
                glowingDot
                className="w-full sm:w-auto"
              />
            ) : null}
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
