"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  FileCheck2,
  SearchCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const layers = [
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

export default function SystemsIntelligence() {
  const [activeId, setActiveId] = useState(layers[0].id);
  const active = layers.find((layer) => layer.id === activeId) ?? layers[0];
  const ActiveIcon = active.icon;

  return (
    <section
      id="solution-areas"
      className="relative w-full overflow-hidden bg-[#061525] py-18 text-white md:py-24"
      aria-labelledby="systems-intelligence-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(232,24,90,0.15), transparent 45%)",
        }}
      />

      <div className="container relative z-10">
        <ScrollReveal className="mb-10 max-w-3xl md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            AML Solution
          </p>
          <h2
            id="systems-intelligence-heading"
            className="mt-3 text-3xl font-semibold leading-tight md:text-[44px]"
          >
            Powered by Three Layers of RegTech Intelligence
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/68">
            Built to remove friction from compliance technology decisions. Screening,
            monitoring, onboarding, and reporting — evaluated and implemented as one
            coherent capability for your team.
          </p>
        </ScrollReveal>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 md:mb-10">
          {layers.map((layer) => {
            const Icon = layer.icon;
            const isActive = layer.id === activeId;

            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveId(layer.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300",
                  isActive
                    ? "border-primary/50 bg-primary/20 text-white shadow-[0_0_24px_rgba(232,24,90,0.25)]"
                    : "border-white/12 bg-white/5 text-white/65 hover:border-white/25 hover:text-white"
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {layer.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:items-center">
          <div>
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/15">
              <ActiveIcon className="size-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="text-2xl font-semibold leading-snug md:text-3xl">
              {active.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/72">
              {active.summary}
            </p>

            <ul className="mt-8 space-y-4">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-white/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0D0D14] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[16/11] md:aspect-[5/4]">
              <Image
                key={active.id}
                src={active.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#061525]/90 via-[#061525]/25 to-transparent" />
            </div>
            <div className="border-t border-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                Vendor-neutral evaluation
              </p>
              <p className="mt-1 text-sm text-white/75">
                Recommendations shaped by obligation, workflow, and scale — not
                commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
