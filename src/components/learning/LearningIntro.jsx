"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import CmsIcon from "@/components/ui/CmsIcon";
import SectionDescription from "@/components/ui/SectionDescription";
import ActionButton from "@/components/ui/ActionButton";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_STEPS = [
  {
    step: "01",
    title: "Diagnose the gap",
    description:
      "We map your regulatory context, team roles, and skill priorities before recommending a learning path.",
    lucide: "clipboardCheck",
  },
  {
    step: "02",
    title: "Learn with practitioners",
    description:
      "Sessions led by compliance professionals—grounded in real cases, not abstract theory.",
    lucide: "monitorPlay",
  },
  {
    step: "03",
    title: "Apply with confidence",
    description:
      "Workplace-ready frameworks, materials, and follow-through so training sticks after the session ends.",
    lucide: "graduation",
  },
];

const DEFAULT_FORMATS = [
  { label: "Expert-Led Webinars", lucide: "monitorPlay" },
  { label: "CAFS Preparation", lucide: "graduation" },
  { label: "In-House Programmes", lucide: "users" },
  { label: "Certification Tracks", lucide: "layers" },
];

const DEFAULTS = {
  leadText:
    "Training that turns regulatory knowledge into day-to-day capability—for compliance teams, risk professionals, and leaders who need more than slides on a screen.",
  eyebrow: "How We Teach",
  heading: "Learning designed for regulated environments",
  description:
    "From AML fundamentals to certification preparation, our programmes combine structured curricula with practitioner insight—so your team leaves every session ready to act, not just informed.",
  image: "/learning-bg.webp",
  imageAlt: "Professional compliance training session",
  secondaryImage: "/learning-4.webp",
  statValue: "200+",
  statLabel: "Professionals trained across compliance disciplines",
  steps: DEFAULT_STEPS,
  formats: DEFAULT_FORMATS,
  primaryCta: {
    label: "Browse Courses",
    href: "#training-programmes",
    actionType: "link",
  },
  secondaryCta: {
    label: "View Webinars",
    href: "#learning-webinars",
    actionType: "link",
  },
  sectionId: "learning-intro",
  particleId: "learning-intro-particles",
};

const LearningIntro = ({
  leadText = DEFAULTS.leadText,
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
  secondaryImage = DEFAULTS.secondaryImage,
  statValue = DEFAULTS.statValue,
  statLabel = DEFAULTS.statLabel,
  steps = DEFAULTS.steps,
  formats = DEFAULTS.formats,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) => {
  const normalizedSteps = steps;
  const normalizedFormats = formats;
  return (
    <SectionReveal
      id={sectionId}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id={particleId} />
      <div className="pointer-events-none absolute -right-24 top-20 hidden text-[180px] font-semibold leading-none tracking-tighter text-proteq-dark/[0.03] lg:block">
        LEARN
      </div>

      <div className="container relative z-10">
        <ScrollReveal className="mb-12 max-w-3xl md:mb-16" direction="left">
          <p className="text-lg font-medium leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
            {leadText === DEFAULTS.leadText ? (
              <>
                Training that turns regulatory knowledge into{" "}
                <span className="text-proteq-dark">day-to-day capability</span>—for
                compliance teams, risk professionals, and leaders who need more than
                slides on a screen.
              </>
            ) : (
              leadText
            )}
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <ScrollReveal
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            xOffset={-16}
            yOffset={0}
            scale={0.995}
          >
            <SplitSectionMedia
              frame="soft"
              size="portraitTall"
              src={image}
              alt={imageAlt}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </ScrollReveal>

          <StaggerContainer
            className="flex flex-col"
            staggerChildren={0.07}
          >
            <StaggerItem>
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  {eyebrow}
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="section-heading-accent text-section-heading max-w-xl">
                {heading}
              </h2>
            </StaggerItem>

            <StaggerItem>
              <SectionDescription
                content={description}
                className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base"
              />
            </StaggerItem>

            <div className="relative mt-5 space-y-0 px-3 md:px-0">
              <div className="absolute bottom-8 left-[1.65rem] top-8 hidden w-px bg-zinc-200 md:block" />

              {normalizedSteps.map((item, index) => (
                  <StaggerItem
                    key={itemKey(item, index, ["step", "title"])}
                    className="group relative grid gap-4 border-b border-zinc-150 py-6 last:border-b-0 md:grid-cols-[3.25rem_1fr] md:items-start md:gap-5"
                  >
                    <div className="icon-stat-circle relative z-10 size-13 transition duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
                      <CmsIcon
                        lucide={item.lucide || item.icon}
                        src={item.src}
                        alt={item.alt}
                        className="size-5"
                      />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        Phase {item.step}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-[#061525]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
            </div>

            <StaggerItem className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryCta?.label ? (
                <ActionButton {...primaryCta} showArrow />
              ) : null}
              {secondaryCta?.label ? (
                <ActionButton {...secondaryCta} variant="secondary" showArrow />
              ) : null}
            </StaggerItem>
          </StaggerContainer>
        </div>

        <StaggerContainer
          className="mt-14 grid grid-cols-2 gap-3 md:mt-18 md:grid-cols-4 md:gap-4"
          staggerChildren={0.06}
        >
          {normalizedFormats.map(({ label, lucide, src, alt, icon }, index) => (
            <StaggerItem key={listKey(label, index)}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-zinc-200/90 bg-white px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_40px_rgba(13,13,20,0.08)]">
                <div className="icon-stat-circle size-10 shrink-0">
                  <CmsIcon
                    lucide={lucide || icon}
                    src={src}
                    alt={alt}
                    className="size-4 text-primary"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="text-sm font-medium leading-snug text-foreground">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
};

export default LearningIntro;
