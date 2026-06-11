"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  FileCheck2,
  SearchCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  SectionReveal,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const solutions = [
  {
    id: "screening",
    label: "AML Screening",
    title: "Screening Against Analyst-Approved Data Models",
    summary:
      "Evaluate and implement PEP, sanctions, adverse media, and watchlist screening — with workflow integration and false positive reduction.",
    bullets: [
      "PEP & RCA coverage across multiple jurisdictions",
      "Sanctions and watchlist matching with alias handling",
      "Adverse media workflows with analyst-ready escalation",
      "Vendor-neutral RFP and proof-of-concept support",
    ],
    icon: SearchCheck,
    image: "/hero-new.webp",
  },
  {
    id: "monitoring",
    label: "Transaction Monitoring",
    title: "Customisable Transaction Monitoring",
    summary:
      "Deploy rule-based and AI-augmented monitoring across typology libraries, alert management, and regulatory reporting integration.",
    bullets: [
      "Typology libraries aligned to your risk profile",
      "Alert triage, case workflow, and SLA design",
      "False positive tuning with documented rationale",
      "Integration with screening and case management",
    ],
    icon: Activity,
    image: "/hero-2-new.webp",
  },
  {
    id: "kyc",
    label: "KYC & CDD",
    title: "Customer Onboarding & Ongoing Due Diligence",
    summary:
      "End-to-end onboarding and ongoing due diligence platforms for regulated customer journeys — identity, UBO, and risk scoring.",
    bullets: [
      "CDD and EDD workflow design",
      "Beneficial ownership and entity verification",
      "Risk scoring aligned to internal appetite",
      "Ongoing monitoring and periodic review triggers",
    ],
    icon: UserCheck,
    image: "/learning-4.webp",
  },
  {
    id: "reporting",
    label: "Reporting",
    title: "Regulatory Reporting & Case Management",
    summary:
      "SAR, CTR, and case management workflows with audit trails built for regulatory examination and internal governance.",
    bullets: [
      "Structured SAR/STR filing workflows",
      "Examination-ready audit trails and evidence",
      "Escalation paths and committee reporting",
      "Handover documentation for operations teams",
    ],
    icon: FileCheck2,
    image: "/implementation.webp",
  },
];

function SolutionCard({ solution }) {
  const Icon = solution.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_55px_rgba(13,13,20,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(232,24,90,0.1)]">
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
          <Icon className="size-5 text-primary" strokeWidth={1.75} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {solution.label}
        </p>
        <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
          {solution.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {solution.summary}
        </p>
        <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
          {solution.bullets.map((bullet) => (
            <li
              key={bullet}
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

export default function SystemsIntelligence() {
  return (
    <SectionReveal
      id="solution-areas"
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-intelligence-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="systems-intelligence-particles" variant="light" />

      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              AML Solution
            </p>
            <h2
              id="systems-intelligence-heading"
              className="text-section-heading text-foreground"
            >
              Integrated RegTech Solutions for Modern Compliance
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="border-l border-zinc-200/80 pl-6 text-body text-zinc-600">
              Built to remove friction from compliance technology decisions.
              Screening, monitoring, onboarding, and reporting — evaluated and
              implemented as one coherent capability for your team.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2 lg:gap-6"
          staggerChildren={0.07}
        >
          {solutions.map((solution) => (
            <StaggerItem key={solution.id} className="h-full">
              <SolutionCard solution={solution} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-12 flex flex-col items-start gap-4 border-t border-zinc-200/80 pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-14">
          <p className="max-w-md text-sm text-zinc-600">
            Vendor-neutral evaluation shaped by obligation, workflow, and scale
            — not commission.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" glowingDot showArrow>
              Book Free Assessment
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-foreground"
            >
              See how it works
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </SectionReveal>
  );
}
