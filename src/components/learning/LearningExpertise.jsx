"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import SectionAmbient from "@/components/ui/SectionAmbient";
import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_INLINE_STATS = [
  { value: "15+", label: "Years in compliance" },
  { value: "ACAMS", label: "Certified practitioner" },
  { value: "Tier 1", label: "Banking & VASP exposure" },
];

const DEFAULTS = {
  eyebrow: "Proof of Expertise",
  heading: "Learn From the Practitioners, Not the Textbooks",
  description:
    "Your training is led by compliance professionals with live regulatory, examination, and programme-building experience — not generic instructors reading from slides.",
  paragraphs: [
    "Our lead faculty brings hands-on AML, sanctions, and anti-fraud experience across Tier 1 banking, digital asset exchanges, and regulated fintech. They have led FATF-aligned gap analyses, managed regulatory examinations, and designed AML programmes adopted across the UK, EU, UAE, and APAC.",
    "Training delivery draws on direct advisory work with FCA, VARA, and DFSA-regulated entities — so every session reflects how compliance is examined and operated in practice.",
  ],
  image: "/trainer.webp",
  imageAlt: "Proteq Senior Compliance Faculty facilitating a professional learning session",
  inlineStats: DEFAULT_INLINE_STATS,
  overlayLeft: {
    eyebrow: "Jurisdictions",
    text: "UK · EU · UAE (VARA) · US · GCC · APAC",
  },
  overlayRight: {
    eyebrow: "Frameworks",
    text: "FCA · VARA · DFSA · MAS · FinCEN-aligned frameworks",
  },
  particleId: "learning-expertise-particles",
};

function SectionBadge({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
      <span className="size-1.5 rounded-full bg-[#E25C8F]" aria-hidden />
      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
        {children}
      </span>
    </div>
  );
}

export default function LearningExpertise({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  body,
  paragraphs = DEFAULTS.paragraphs,
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
  inlineStats = DEFAULTS.inlineStats,
  overlayLeft = DEFAULTS.overlayLeft,
  overlayRight = DEFAULTS.overlayRight,
  particleId = DEFAULTS.particleId,
}) {
  const bodyContent =
    body || (paragraphs.length ? paragraphs.join("\n\n") : null);
  return (
    <>
      {/* Section 1 — Lead faculty */}
      <SectionReveal
        id="learning-expertise"
        className="section-light-white relative isolate w-full scroll-mt-28 overflow-hidden pb-20 md:pb-28"
        aria-labelledby="learning-expertise-heading"
      >
        <SectionAmbient variant="light" />
        <ParticleNetwork variant="light" id={particleId} />
        <div className="container relative z-10">
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:items-start">
            <ScrollReveal className="relative z-10 min-w-0" xOffset={-16}>
              <SectionBadge>{eyebrow}</SectionBadge>
              <h2 id="learning-expertise-heading">
                {heading}
              </h2>
              {description ? (
                <SectionDescription
                  content={description}
                  className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-base"
                />
              ) : null}

              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-zinc-200/80 py-6">
                {inlineStats.map((stat, index) => (
                  <div key={itemKey(stat, index)}>
                    <p className="text-xl font-semibold tracking-tight text-[#231143] md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {bodyContent ? (
                <SectionDescription
                  content={bodyContent}
                  className="mt-8 w-full text-sm leading-relaxed text-zinc-600 sm:text-base [&_p+p]:mt-4"
                />
              ) : null}
            </ScrollReveal>

            <ScrollReveal xOffset={16} delay={0.08} className="relative min-h-[560px] md:min-h-[640px]">
              <SplitSectionMedia
                frame="tight"
                size="expertise"
                src={image}
                alt={imageAlt}
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </SectionReveal>

    </>
  );
}
