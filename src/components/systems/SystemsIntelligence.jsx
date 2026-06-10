"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  FileCheck2,
  SearchCheck,
  UserCheck,
} from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useIsMobile } from "@/lib/use-media-query";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const SOLUTION_COUNT = 4;
const SCROLL_VH_PER_SOLUTION = 110;
const CONTENT_FADE_IN = 0.14;
const CONTENT_FADE_OUT = 0.22;
const STACK_EXIT_START = 0.74;

const solutions = [
  {
    id: "screening",
    label: "AML Screening",
    icon: SearchCheck,
    title: "Screening Against Analyst-Approved Data Models",
    summary:
      "Evaluate and implement PEP, sanctions, adverse media, and watchlist screening — with workflow integration and false positive reduction.",
    bullets: [
      "PEP & RCA coverage across multiple jurisdictions",
      "Sanctions and watchlist matching with alias handling",
      "Adverse media workflows with analyst-ready escalation",
      "Vendor-neutral RFP and proof-of-concept support",
    ],
    image: "/hero-new.webp",
  },
  {
    id: "monitoring",
    label: "Transaction Monitoring",
    icon: Activity,
    title: "Customisable Transaction Monitoring",
    summary:
      "Deploy rule-based and AI-augmented monitoring across typology libraries, alert management, and regulatory reporting integration.",
    bullets: [
      "Typology libraries aligned to your risk profile",
      "Alert triage, case workflow, and SLA design",
      "False positive tuning with documented rationale",
      "Integration with screening and case management",
    ],
    image: "/hero-2-new.webp",
  },
  {
    id: "kyc",
    label: "KYC & CDD",
    icon: UserCheck,
    title: "Customer Onboarding & Ongoing Due Diligence",
    summary:
      "End-to-end onboarding and ongoing due diligence platforms for regulated customer journeys — identity, UBO, and risk scoring.",
    bullets: [
      "CDD and EDD workflow design",
      "Beneficial ownership and entity verification",
      "Risk scoring aligned to internal appetite",
      "Ongoing monitoring and periodic review triggers",
    ],
    image: "/learning-4.webp",
  },
  {
    id: "reporting",
    label: "Reporting",
    icon: FileCheck2,
    title: "Regulatory Reporting & Case Management",
    summary:
      "SAR, CTR, and case management workflows with audit trails built for regulatory examination and internal governance.",
    bullets: [
      "Structured SAR/STR filing workflows",
      "Examination-ready audit trails and evidence",
      "Escalation paths and committee reporting",
      "Handover documentation for operations teams",
    ],
    image: "/implementation.webp",
  },
];

function smoothstep(value) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

function getSegmentLocal(progress, index, total) {
  const raw = progress * total;
  return Math.max(0, Math.min(1, raw - index));
}

function getContentOpacity(progress, index, total) {
  const local = getSegmentLocal(progress, index, total);

  if (local <= 0) return 0;
  if (index < total - 1 && local >= 1) return 0;

  const fadeIn =
    index === 0 ? 1 : smoothstep(local / CONTENT_FADE_IN);
  const fadeOut =
    index === total - 1
      ? 1
      : smoothstep((1 - local) / CONTENT_FADE_OUT);

  return fadeIn * fadeOut;
}

function getActiveIndex(progress, total) {
  const raw = progress * total;
  return Math.min(total - 1, Math.max(0, Math.round(raw - 0.5)));
}

function getStackTransforms(progress, index, total) {
  const raw = progress * total;
  const relative = index - raw;

  if (relative < -0.08) {
    const t = smoothstep(Math.min(1, (-relative - 0.08) / 0.42));
    return {
      y: -190 * t,
      scale: 1 - 0.1 * t,
      opacity: Math.max(0, 1 - t * 1.15),
      rotate: -8 * t,
      zIndex: 10 + index,
    };
  }

  if (relative <= 0.12) {
    const local = raw - index;

    if (local < STACK_EXIT_START) {
      return { y: 0, scale: 1, opacity: 1, rotate: 0, zIndex: 50 };
    }

    const t = smoothstep((local - STACK_EXIT_START) / (1 - STACK_EXIT_START));
    return {
      y: -170 * t,
      scale: 1 - 0.07 * t,
      opacity: 1 - t,
      rotate: -6 * t,
      zIndex: 50,
    };
  }

  const depth = relative;
  const segmentLocal = raw - Math.floor(raw);
  const lift = smoothstep(segmentLocal) * 22;

  return {
    y: depth * 38 - lift,
    scale: Math.max(0.9, 1 - depth * 0.03),
    opacity: Math.max(0.7, 1 - depth * 0.09),
    rotate: depth * 1.2,
    zIndex: Math.round(46 - depth * 8),
  };
}

function StackImage({ solution, index, scrollYProgress, total }) {
  const transform = useTransform(scrollYProgress, (progress) => {
    const { y, scale, rotate } = getStackTransforms(progress, index, total);
    return `translate3d(0, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`;
  });
  const opacity = useTransform(scrollYProgress, (progress) =>
    getStackTransforms(progress, index, total).opacity
  );
  const zIndex = useTransform(scrollYProgress, (progress) =>
    getStackTransforms(progress, index, total).zIndex
  );

  return (
    <motion.article
      className="absolute inset-x-0 top-0 mx-auto w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_28px_70px_rgba(13,13,20,0.2)] will-change-transform"
      style={{ zIndex, opacity, transform }}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="(min-width: 1024px) 480px, 90vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>
    </motion.article>
  );
}

function SolutionContent({ solution, index, scrollYProgress, total, isActive }) {
  const Icon = solution.icon;
  const opacity = useTransform(scrollYProgress, (progress) =>
    getContentOpacity(progress, index, total)
  );
  const y = useTransform(scrollYProgress, (progress) => {
    const value = getContentOpacity(progress, index, total);
    return (1 - value) * 18;
  });

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex flex-col justify-center will-change-transform"
      style={{ opacity, y }}
      aria-hidden={!isActive}
    >
      <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_20px_50px_rgba(13,13,20,0.12)] md:p-8">
        <div className="mb-5 inline-flex size-12 w-fit items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
          <Icon className="size-5 text-primary" strokeWidth={1.75} />
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {solution.label}
        </p>

        <h3 className="max-w-xl text-2xl font-semibold leading-snug text-[#061525] md:text-3xl">
          {solution.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 md:text-[17px]">
          {solution.summary}
        </p>

        <ul className="mt-8 max-w-xl space-y-3.5">
          {solution.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-sm leading-relaxed text-zinc-700 md:text-[15px]"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ScrollProgressBar({ scrollYProgress, total }) {
  const width = useTransform(scrollYProgress, (progress) => {
    const raw = progress * total;
    const index = Math.min(total - 1, Math.max(0, Math.floor(raw)));
    const local = getSegmentLocal(progress, index, total);
    const segmentProgress = (index + local) / total;
    return `${Math.min(100, segmentProgress * 100)}%`;
  });

  return (
    <motion.div
      className="h-full rounded-full bg-primary"
      style={{ width }}
    />
  );
}

function StaticSolutionsList() {
  return (
    <div className="space-y-10">
      {solutions.map((solution) => {
        const Icon = solution.icon;
        return (
          <article
            key={solution.id}
            className="grid gap-8 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_20px_50px_rgba(13,13,20,0.1)] md:grid-cols-2 md:p-8"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-200">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex size-11 w-fit items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Icon className="size-5 text-primary" strokeWidth={1.75} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {solution.label}
              </p>
              <h3 className="text-2xl font-semibold text-[#061525]">
                {solution.title}
              </h3>
              <p className="mt-3 text-zinc-600">{solution.summary}</p>
              <ul className="mt-6 space-y-3">
                {solution.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-zinc-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function SystemsIntelligence() {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const useStaticLayout = reduceMotion || isMobile;
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = getActiveIndex(value, SOLUTION_COUNT);
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const activeSolution = solutions[activeIndex];

  return (
    <section
      id="solution-areas"
      className="relative isolate w-full bg-proteq-dark py-20 text-white md:py-28"
      aria-labelledby="systems-intelligence-heading"
    >
      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              AML Solution
            </p>
            <h2
              id="systems-intelligence-heading"
              className="text-section-heading text-white"
            >
              Integrated RegTech Solutions for Modern Compliance
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-white/90">
              Built to remove friction from compliance technology decisions.
              Screening, monitoring, onboarding, and reporting — evaluated and
              implemented as one coherent capability for your team.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {useStaticLayout ? (
        <div className="container relative z-10 pb-8">
          <StaticSolutionsList />
        </div>
      ) : (
        <div ref={containerRef} className="relative">
          <div className="sticky top-0 z-20 h-svh w-full">
            <div className="section-dark section-particles-animated relative h-full overflow-hidden">
              <ParticleNetwork id="systems-intelligence-particles" />

              <div className="container relative z-10 flex h-full flex-col justify-center py-12 md:py-16">
                <div className="grid min-h-0 flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
                  <div className="relative mx-auto aspect-square w-full max-w-[min(88vw,400px)] shrink-0 sm:max-w-[440px] lg:max-w-[480px]">
                    {solutions.map((solution, index) => (
                      <StackImage
                        key={solution.id}
                        solution={solution}
                        index={index}
                        scrollYProgress={scrollYProgress}
                        total={SOLUTION_COUNT}
                      />
                    ))}
                  </div>

                  <div className="relative min-h-[min(48vh,420px)] lg:min-h-[460px]">
                    {solutions.map((solution, index) => (
                      <SolutionContent
                        key={solution.id}
                        solution={solution}
                        index={index}
                        scrollYProgress={scrollYProgress}
                        total={SOLUTION_COUNT}
                        isActive={index === activeIndex}
                      />
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none mt-6 flex items-center justify-center lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
                  <div className="flex items-center gap-3 rounded-full border border-zinc-200/90 bg-white px-4 py-2 shadow-[0_8px_24px_rgba(13,13,20,0.12)]">
                    <div className="h-1 w-16 overflow-hidden rounded-full bg-zinc-200 sm:w-24">
                      <ScrollProgressBar
                        scrollYProgress={scrollYProgress}
                        total={SOLUTION_COUNT}
                      />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                      {activeSolution.label} · {activeIndex + 1} of{" "}
                      {SOLUTION_COUNT}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {solutions.map((solution) => (
            <div
              key={`scroll-${solution.id}`}
              className="w-full"
              style={{ height: `${SCROLL_VH_PER_SOLUTION}vh` }}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      <div className="container relative z-10 pt-10 md:pt-14">
        <div className="flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-white/85">
            Vendor-neutral evaluation shaped by obligation, workflow, and scale
            — not commission.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" glowingDot showArrow>
              Book Free Assessment
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              See how it works
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
