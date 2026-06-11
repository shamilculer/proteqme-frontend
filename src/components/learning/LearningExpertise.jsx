"use client";

import Image from "next/image";
import {
  Award,
  Globe2,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import dynamic from "next/dynamic";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const facultyStats = [
  { value: "15+", label: "Years in compliance" },
  { value: "ACAMS", label: "Certified practitioner" },
  { value: "Tier 1", label: "Banking & VASP exposure" },
];

const leadInstructor = {
  name: "Proteq Senior Compliance Faculty",
  role: "Lead Instructor & Programme Director",
  credentials:
    "ACAMS-certified · ICA Advanced Sanctions Risk · 15+ years across Tier 1 banking, VASP, and fintech environments",
  image: "/trainer.webp",
};

const certifications = [
  {
    name: "ACAMS CAFS",
    description: "Certified Anti-Financial Crime Specialist",
    image: "/consultancy-services/1.webp",
    icon: ShieldCheck,
  },
  {
    name: "ICA",
    description: "International Compliance Association programmes",
    image: "/consultancy-services/3.webp",
    icon: GraduationCap,
  },
  {
    name: "CAMS",
    description: "Certified Anti-Money Laundering Specialist",
    image: "/consultancy-services/2.webp",
    icon: Award,
  },
  {
    name: "CFE",
    description: "Certified Fraud Examiner preparation",
    image: "/consultancy-services/4.webp",
    icon: UserCheck,
  },
];

const pastWebinars = [
  "Transaction Monitoring Red Flags in Crypto",
  "VARA Compliance for UAE Fintechs",
  "SAR Filing Best Practices for Regional Banks",
  "PEP Screening Workflows That Scale",
  "Building Audit-Ready AML Programmes",
];

const jurisdictions = ["UK", "EU", "UAE (VARA)", "US", "GCC", "APAC"];

const regulatoryBodies = [
  "FCA",
  "VARA",
  "DFSA",
  "MAS",
  "FinCEN-aligned frameworks",
];

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

export default function LearningExpertise() {
  return (
    <>
      {/* Section 1 — Lead faculty */}
      <SectionReveal
        className="section-light-white relative isolate w-full overflow-hidden pb-20 md:pb-28"
        aria-labelledby="learning-expertise-heading"
      >
        <SectionAmbient variant="light" />
        <ParticleNetwork variant="light" id="learning-expertise-particles" />
        <div className="container relative z-10">
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <ScrollReveal className="relative z-10">
              <SectionBadge>Proof of Expertise</SectionBadge>
              <h2
              >
                Learn From the Practitioners, Not the Textbooks
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-600 sm:text-base">
                Your training is led by compliance professionals with live
                regulatory, examination, and programme-building experience — not
                generic instructors reading from slides.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-zinc-200/80 py-6">
                {facultyStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-semibold tracking-tight text-[#231143] md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-5 text-sm! leading-relaxed text-zinc-600 sm:text-base">
                <p>
                  Our lead faculty brings hands-on AML, sanctions, and anti-fraud
                  experience across Tier 1 banking, digital asset exchanges, and
                  regulated fintech. They have led FATF-aligned gap analyses,
                  managed regulatory examinations, and designed AML programmes
                  adopted across the UK, EU, UAE, and APAC.
                </p>
                <p>
                  Training delivery draws on direct advisory work with FCA,
                  VARA, and DFSA-regulated entities — so every session reflects
                  how compliance is examined and operated in practice.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal xOffset={16} className="relative min-h-[560px] md:min-h-[640px]">
              <div className="absolute left-0 top-10 hidden h-[78%] w-px bg-[#231143]/12 lg:block" />
              <div className="absolute left-0 top-10 hidden h-24 w-px bg-[#E25C8F] lg:block" />

              <div className="relative h-[520px] overflow-hidden rounded-2xl bg-proteq-dark shadow-[0_28px_80px_rgba(13,13,20,0.12)] md:h-[580px] lg:ml-8">
                <Image
                  src={leadInstructor.image}
                  alt={`${leadInstructor.name} facilitating a professional learning session`}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-8 top-8 h-px bg-white/30" />
                <div className="absolute inset-y-8 right-8 w-px bg-white/20" />

                <div className="absolute left-6 top-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/75">
                  <GraduationCap className="size-4" strokeWidth={1.75} />
                  Lead Faculty
                </div>
              </div>

              <div className="absolute -left-2 bottom-8 w-[min(94%,480px)] border border-zinc-200 bg-white p-5 shadow-[0_22px_60px_rgba(35,17,67,0.12)] md:-left-6 md:p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:border-r sm:border-zinc-200 sm:pr-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      <Globe2 className="size-3.5" strokeWidth={1.75} />
                      Jurisdictions
                    </p>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#061525]">
                      {jurisdictions.join(" · ")}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      <Award className="size-3.5" strokeWidth={1.75} />
                      Frameworks
                    </p>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#061525]">
                      {regulatoryBodies.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-14 hidden w-48 border border-white/15 bg-[#231143] p-5 text-white shadow-[0_20px_55px_rgba(18,8,35,0.22)] md:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Training approach
                </p>
                <p className="mt-2 text-base font-medium leading-snug">
                  Practitioner-led. Case-grounded. Audit-ready.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionReveal>

    </>
  );
}
