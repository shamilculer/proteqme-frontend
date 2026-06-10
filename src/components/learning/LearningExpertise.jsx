"use client";

import Image from "next/image";
import {
  Award,
  Globe2,
  GraduationCap,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

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
      <section
        className="w-full overflow-hidden border-t border-zinc-200/70 bg-white py-18 md:py-24"
        aria-labelledby="learning-expertise-heading"
      >
        <div className="container">
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <ScrollReveal className="relative z-10">
              <SectionBadge>Proof of Expertise</SectionBadge>
              <h2
                id="learning-expertise-heading"
                className="max-w-xl text-3xl leading-tight text-[#231143] md:text-[44px]"
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

              <div className="mt-8 flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:gap-5 sm:p-6">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm sm:size-[4.5rem]">
                  <Image
                    src={leadInstructor.image}
                    alt=""
                    fill
                    sizes="72px"
                    className="object-cover"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Lead Instructor
                  </p>
                  <p className="mt-1 text-lg font-semibold leading-snug text-[#231143]">
                    {leadInstructor.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#061525]">
                    {leadInstructor.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {leadInstructor.credentials}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
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

              <div className="relative h-[480px] overflow-hidden rounded-[12px] rounded-tl-[36px] rounded-br-[36px] bg-[#061525] shadow-[0_32px_90px_rgba(35,17,67,0.16)] md:h-[580px] lg:ml-8">
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
      </section>

      {/* Section 2 — Certifications & webinars */}
      <section
        id="learning-webinars"
        className="w-full overflow-hidden border-t border-zinc-200/70 bg-[#f6f4f8] py-18 md:py-24"
        aria-labelledby="learning-programs-heading"
      >
        <div className="container">
          <ScrollReveal className="mb-10 md:mb-12">
            <SectionBadge>Programmes & Topics</SectionBadge>
            <h2
              id="learning-programs-heading"
              className="max-w-2xl text-3xl leading-tight text-[#231143] md:text-[40px]"
            >
              Certification Pathways and Practitioner Webinars
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Structured preparation for industry-recognised credentials, paired
              with webinar topics drawn from live regulatory and compliance work.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:mb-16"
            staggerChildren={0.06}
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <StaggerItem key={cert.name}>
                  <article className="group relative flex h-full flex-col overflow-hidden border border-zinc-200/90 bg-white shadow-[0_10px_36px_rgba(35,17,67,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#E25C8F]/30 hover:shadow-[0_28px_70px_rgba(35,17,67,0.12)]">
                    <div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-linear-to-r from-[#E25C8F] via-[#231143] to-transparent transition duration-300 group-hover:scale-x-100" />

                    <div className="relative aspect-[5/4] overflow-hidden bg-[#061525]">
                      <Image
                        src={cert.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.05]"
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#061525]/90 via-[#061525]/25 to-transparent" />

                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                        <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition duration-300 group-hover:border-[#E25C8F]/40 group-hover:bg-[#E25C8F]">
                          <Icon className="size-4.5" strokeWidth={1.75} />
                        </span>
                        <span
                          className="font-serif text-4xl leading-none text-white/15"
                          aria-hidden
                        >
                          {number}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#061525]/60 px-4 py-3.5 backdrop-blur-sm">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                          Certification pathway
                        </p>
                        <p className="mt-1 text-lg font-bold tracking-tight text-white">
                          {cert.name}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-5 md:p-6">
                      <span
                        className="pointer-events-none absolute right-4 top-2 font-serif text-6xl leading-none text-[#231143]/[0.035] transition duration-300 group-hover:text-[#E25C8F]/10"
                        aria-hidden
                      >
                        {number}
                      </span>

                      <div className="mb-5 h-px w-10 bg-zinc-200 transition duration-300 group-hover:w-14 group-hover:bg-[#E25C8F]" />

                      <h3 className="text-xl font-semibold tracking-tight text-[#231143] md:text-2xl">
                        {cert.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                        {cert.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal yOffset={20}>
            <div className="grid overflow-hidden border border-zinc-200 bg-white lg:grid-cols-[0.42fr_0.58fr]">
              <div className="relative min-h-[280px] bg-[#061525] lg:min-h-[420px]">
                <Image
                  src="/learning-5.webp"
                  alt="Professional compliance webinar session"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#061525]/35" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    Webinar Library
                  </p>
                  <p className="mt-2 max-w-xs text-xl font-medium leading-snug text-white">
                    Live and on-demand sessions for regulated teams.
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <h3 className="text-xl font-semibold text-[#061525]">
                  Recent Webinar Topics
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Selected sessions from our practitioner-led library.
                </p>

                <ol className="mt-8 divide-y divide-zinc-200/80">
                  {pastWebinars.map((title, index) => (
                    <li
                      key={title}
                      className="flex gap-5 py-5 first:pt-0 last:pb-0"
                    >
                      <span className="w-7 shrink-0 pt-0.5 text-xs font-semibold tabular-nums tracking-wider text-zinc-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
                        {title}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
