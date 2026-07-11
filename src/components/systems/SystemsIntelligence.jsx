"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import SectionAmbient from "@/components/ui/SectionAmbient";
import CardGridLayout from "@/components/ui/CardGridLayout";
import {
  SectionReveal,
  ScrollReveal,
} from "@/components/ui/scroll-reveal";
import CmsIcon from "@/components/ui/CmsIcon"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    id: "screening",
    tag: "AML Screening",
    title: "Screening Against Analyst-Approved Data Models",
    description:
      "Evaluate and implement PEP, sanctions, adverse media, and watchlist screening — with workflow integration and false positive reduction.",
    highlights: [
      "PEP & RCA coverage across multiple jurisdictions",
      "Sanctions and watchlist matching with alias handling",
      "Adverse media workflows with analyst-ready escalation",
      "Vendor-neutral RFP and proof-of-concept support",
    ],
    icon: "searchCheck",
    image: "/hero-new.webp",
  },
  {
    id: "monitoring",
    tag: "Transaction Monitoring",
    title: "Customisable Transaction Monitoring",
    description:
      "Deploy rule-based and AI-augmented monitoring across typology libraries, alert management, and regulatory reporting integration.",
    highlights: [
      "Typology libraries aligned to your risk profile",
      "Alert triage, case workflow, and SLA design",
      "False positive tuning with documented rationale",
      "Integration with screening and case management",
    ],
    icon: "activity",
    image: "/hero-2-new.webp",
  },
  {
    id: "kyc",
    tag: "KYC & CDD",
    title: "Customer Onboarding & Ongoing Due Diligence",
    description:
      "End-to-end onboarding and ongoing due diligence platforms for regulated customer journeys — identity, UBO, and risk scoring.",
    highlights: [
      "CDD and EDD workflow design",
      "Beneficial ownership and entity verification",
      "Risk scoring aligned to internal appetite",
      "Ongoing monitoring and periodic review triggers",
    ],
    icon: "userCheck",
    image: "/learning-4.webp",
  },
  {
    id: "reporting",
    tag: "Reporting",
    title: "Regulatory Reporting & Case Management",
    description:
      "SAR, CTR, and case management workflows with audit trails built for regulatory examination and internal governance.",
    highlights: [
      "Structured SAR/STR filing workflows",
      "Examination-ready audit trails and evidence",
      "Escalation paths and committee reporting",
      "Handover documentation for operations teams",
    ],
    icon: "fileCheck",
    image: "/implementation.webp",
  },
];

const DEFAULTS = {
  eyebrow: "AML Solution",
  heading: "Integrated AI RegTech & SupTech Solutions for Modern Compliance",
  description:
    "Built to remove friction from compliance technology decisions. Screening, monitoring, onboarding, and reporting — evaluated and implemented as one coherent capability for your team.",
  layout: "grid",
  columns: 2,
  items: DEFAULT_ITEMS,
  cta: { label: "Book Free Assessment", href: "/contact", actionType: "link" },
  sectionId: "solution-areas",
};

function SolutionCard({ solution }) {
  return (
    <article
      id={solution.anchorId || solution.id || undefined}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_55px_rgba(13,13,20,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(232,24,90,0.1)]"
    >
      <div className="relative h-48 shrink-0 overflow-hidden sm:h-52">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/55 via-proteq-dark/10 to-transparent" />
        <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl border border-white/80 bg-white/95 shadow-md">
          <CmsIcon
            lucide={solution.lucide || solution.icon}
            src={solution.src}
            alt={solution.alt}
            className="size-5 text-primary"
            strokeWidth={1.75}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {solution.tag}
        </p>
        <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
          {solution.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {solution.description}
        </p>
        <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
          {solution.highlights.map((bullet, index) => (
            <li
              key={listKey(bullet, index)}
              className="flex gap-2.5 text-sm leading-relaxed text-zinc-600"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-primary"
                strokeWidth={2}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function SystemsIntelligence({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  layout = DEFAULTS.layout,
  columns = DEFAULTS.columns,
  items = DEFAULT_ITEMS,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  sectionId = DEFAULTS.sectionId,
}) {
  const gridColsClass =
    columns === 1
      ? "sm:grid-cols-1"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";
  const action =
    cta ||
    (ctaLabel && ctaHref
      ? { label: ctaLabel, href: ctaHref, actionType: "link" }
      : null);

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-intelligence-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="systems-intelligence-particles" variant="light" />

      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id="systems-intelligence-heading"
              className="text-section-heading text-foreground"
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <SectionDescription content={description} className="border-l border-zinc-200/80 pl-6 text-body text-zinc-600" />
          </ScrollReveal>
        </div>

        <CardGridLayout
          items={items}
          layout={layout}
          gridClassName={`gap-5 lg:gap-6 ${gridColsClass}`}
          renderCard={(solution) => (
            <SolutionCard solution={solution} />
          )}
          getItemKey={(solution) => solution.id || solution.title}
          staggerChildren={0.07}
          carouselMinHeight="480px"
          carouselAriaLabel="Solution areas carousel"
        />

        <ScrollReveal className="mt-12 flex justify-center border-t border-zinc-200/80 pt-10 md:mt-14">
          {action ? (
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
              <CtaButton cta={action} glowingDot showArrow />
              {action.href ? (
                <Link
                  href={action.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-foreground"
                >
                  See how it works
                  <ArrowRight className="size-4" />
                </Link>
              ) : null}
            </div>
          ) : null}
        </ScrollReveal>
      </div>
    </SectionReveal>
  );
}
