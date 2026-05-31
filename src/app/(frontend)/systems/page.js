import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import { Button } from "@/components/ui/button";
import {
  Activity,
  BadgeCheck,
  Cpu,
  FileCheck2,
  Globe,
  SearchCheck,
  Users,
  UserCheck,
  ListChecks,
  Target,
} from "lucide-react";
import Image from "next/image";

const solutionAreas = [
  {
    title: "AML Screening & Sanctions",
    description:
      "Evaluate and implement screening systems for PEP identification, sanctions list matching, and adverse media monitoring.",
    details: "Workflow integration and false positive reduction.",
    icon: SearchCheck,
    image: "/systems.webp",
  },
  {
    title: "Transaction Monitoring",
    description:
      "Deploy rule-based and AI-augmented transaction monitoring systems across typology libraries and alert management.",
    details: "Case workflow and regulatory reporting integration.",
    icon: Activity,
    image: "/hero-2.webp",
  },
  {
    title: "KYC & Customer Due Diligence Platforms",
    description:
      "End-to-end customer onboarding and ongoing due diligence systems for regulated customer journeys.",
    details:
      "Identity verification, beneficial ownership mapping, and risk scoring.",
    icon: UserCheck,
    image: "/consulting-adv.webp",
  },
  {
    title: "Regulatory Reporting & Case Management",
    description:
      "Systems for SAR, CTR, and case management workflows that maintain audit trails for regulatory examination.",
    details: "Structured reporting, escalation, and examination records.",
    icon: FileCheck2,
    image: "/hero-bg.webp",
  },
];

const approachSteps = [
  {
    title: "Discover the Risk Picture",
    description:
      "We begin with your business model, regulatory obligations, customer risk, controls, systems, and existing documentation.",
    icon: SearchCheck,
  },
  {
    title: "Design the Control Path",
    description:
      "Findings are translated into a focused action plan with priorities, ownership, and realistic implementation sequencing.",
    icon: Target,
  },
  {
    title: "Build the Evidence",
    description:
      "We develop or refine the policies, procedures, assessments, registers, and reporting packs needed for defensible operation.",
    icon: FileCheck2,
  },
  {
    title: "Embed the Programme",
    description:
      "The engagement closes with practical handover, team guidance, and next-step support so improvements become part of daily work.",
    icon: ListChecks,
  },
];

const SystemsPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Systems for Compliance Teams"
        heading="The Right Systems for the Right Risks"
        description="We evaluate, recommend, and help implement AML screening, transaction monitoring, and regulatory technology solutions tailored to your risk profile and operational scale."
        highlights={[
          "AML Screening Solutions",
          "Transaction Monitoring Systems",
          "KYC & Due Diligence Platforms",
          "& More",
        ]}
        buttons={[
          {
            label: "Book a Free Demo",
            href: "#",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Request a Systems Assessment ",
            href: "#",
            variant: "outline",
            showArrow: true,
          },
        ]}
        bgImage="/systems-bg.webp"
      />

      <section className="w-full overflow-hidden my-18 md:my-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
            <div className="relative min-h-[560px]">
              <div className="relative h-[520px] overflow-hidden rounded-[18px] bg-[#061525] shadow-[0_32px_90px_rgba(35,17,67,0.18)] md:h-[620px]">
                <Image
                  src="/systems.webp"
                  alt="Compliance technology advisory and system evaluation"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#061525]/86 via-[#061525]/22 to-transparent" />
                <div className="absolute inset-x-8 top-8 flex items-center justify-between border-t border-white/35 pt-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    System Fit Review
                  </p>
                  <p className="text-xs text-white/55">Vendor Neutral</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Compliance Technology Advisory
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl leading-tight text-[#231143] md:text-[46px]">
                Systems Built for Modern Compliance Operations
              </h2>

              <div className="mt-4 space-y-5 text-sm sm:text-base leading-relaxed text-zinc-700">
                <p>
                  We help organisations evaluate, implement, and optimise
                  compliance technology tailored to their regulatory obligations
                  and operational needs. From AML screening and transaction
                  monitoring to KYC onboarding and regulatory reporting, our
                  advisory approach focuses on scalable systems that reduce
                  risk, improve efficiency, and support long term compliance
                  readiness.
                </p>
              </div>
              <div className="mt-6 w-full flex gap-22">
                <div className="w-full flex flex-wrap gap-4">
                  {[
                    {
                      bg: "bg-emerald-100",
                      color: "text-emerald-600",
                      Icon: Cpu,
                      label: "Compliance Technology",
                    },
                    {
                      bg: "bg-orange-100",
                      color: "text-orange-600",
                      Icon: Globe,
                      label: "Global Network",
                    },
                    {
                      bg: "bg-cyan-100",
                      color: "text-cyan-600",
                      Icon: Users,
                      label: "Industry Experts",
                    },
                    {
                      bg: "bg-amber-100",
                      color: "text-amber-600",
                      Icon: BadgeCheck,
                      label: "Trusted Collaboration",
                    },
                  ].map(({ bg, color, Icon, label }) => (
                    <div
                      key={label}
                      className="bg-white border border-zinc-300 rounded-full p-1 pr-3 flex items-center gap-2.5"
                    >
                      <div
                        className={`size-8 rounded-full ${bg} flex items-center justify-center`}
                      >
                        <Icon className={`size-4 ${color}`} />
                      </div>
                      <span className="font-medium text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4">
                <Button href="#" showArrow>
                  Book a Free Demo
                </Button>

                <Button href="#" variant="secondary" showArrow>
                  Get In Touch With US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-white my-18 md:my-24">
        <div className="container">
          <div>
            <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                  </span>
                  <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                    Solution Areas
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl md:text-[44px]">
                  Compliance Systems for Teams Moving at Operational Speed
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base lg:text-right">
                Bring together screening, monitoring, onboarding, reporting, and
                case workflows so technology supports stronger compliance
                outcomes without slowing the team down.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {solutionAreas.map((solution, index) => {
                const Icon = solution.icon;
                const isAccent = index === 2;

                return (
                  <article
                    key={solution.title}
                    className={`group relative flex min-h-[500px] overflow-hidden rounded-[18px] border shadow-[0_22px_70px_rgba(6,21,37,0.12)] transition duration-300 hover:-translate-y-1 ${
                      isAccent
                        ? "border-[#E25C8F]/25 bg-[#f3e8f0]"
                        : "border-zinc-200 bg-[#061525]"
                    }`}
                  >
                    {!isAccent ? (
                      <>
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#061525]/94 via-[#061525]/48 to-[#061525]/12" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,17,67,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(35,17,67,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
                    )}

                    <div className="relative flex w-full flex-col p-7">
                      <div className="flex items-start justify-between gap-5">
                        <span
                          className={`flex size-13 items-center justify-center rounded-full ${
                            isAccent
                              ? "bg-white text-[#231143]"
                              : "bg-white/12 text-white backdrop-blur-md"
                          }`}
                        >
                          <Icon className="size-5" />
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                            isAccent
                              ? "bg-white/70 text-[#231143]"
                              : "bg-white/12 text-white/70"
                          }`}
                        >
                          Area {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <div
                          className={`mb-5 h-px w-16 transition group-hover:w-24 ${
                            isAccent ? "bg-[#E25C8F]" : "bg-white/30"
                          }`}
                        />

                        <h3
                          className={`text-3xl leading-tight ${
                            isAccent ? "text-[#061525]" : "text-white"
                          }`}
                        >
                          {solution.title}
                        </h3>

                        <p
                          className={`mt-4 text-sm leading-relaxed ${
                            isAccent ? "text-zinc-700" : "text-white/68"
                          }`}
                        >
                          {solution.description}
                        </p>

                        <div
                          className={`mt-6 border-t pt-5 text-sm font-medium ${
                            isAccent
                              ? "border-[#231143]/15 text-[#231143]"
                              : "border-white/15 text-white"
                          }`}
                        >
                          {solution.details}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#061525] py-18 text-white md:py-24">
        <Image
          src="/hero-2.webp"
          alt="Advisory team discussing a compliance implementation plan"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#061525] via-[#061525]/82 to-[#061525]/58" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="container">
          <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-1.5">
                <span className="size-1.5 rotate-45 bg-[#E25C8F]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/78">
                  Our Approach
                </span>
              </div>

              <h2 className="max-w-xl text-3xl leading-tight md:text-[46px]">
                A Clear Route from Review to Implementation
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                Each advisory engagement follows a practical sequence:
                understand the risk, define the required controls, produce the
                evidence, and help your team operate with confidence.
              </p>

              <div className="mt-8 border-l border-white/15 pl-5">
                <p className="text-sm font-medium leading-relaxed text-white">
                  Structured enough for regulator-facing work. Flexible enough
                  for the realities of your operating model.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-white/12 md:block" />
              {approachSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="group relative grid gap-5 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[3.5rem_1fr_auto] md:items-start"
                  >
                    <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-white/15 bg-[#061525] text-[#E25C8F] transition group-hover:border-[#E25C8F] group-hover:bg-[#E25C8F] group-hover:text-white">
                      <Icon className="size-5" />
                    </span>

                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#E25C8F]">
                          Phase {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px w-12 bg-white/18 transition group-hover:w-20 group-hover:bg-[#E25C8F]" />
                      </div>
                      <h3 className="text-2xl leading-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/62">
                        {step.description}
                      </p>
                    </div>

                    <span className="hidden text-5xl font-medium leading-none text-white/6 transition group-hover:text-[#E25C8F]/16 lg:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <MainCTA
        heading="Not Sure Which System Fits Your Organisation?"
        description=" Book a free systems assessment. We will review your current compliance technology
stack and identify gaps, overlaps, and opportunities."
        buttons={[
          {
            label: "Book a Free Demo",
            href: "/contact",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Request a Quote",
            href: "/contact",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </main>
  );
};

export default SystemsPage;
