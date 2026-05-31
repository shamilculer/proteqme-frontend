import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import ServiceModulesSlider from "@/components/consultancy/ServiceModulesSlider";
import Image from "next/image";
import {
  BadgeDollarSign,
  Banknote,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Gem,
  HandHeart,
  Landmark,
  ListChecks,
  SearchCheck,
  ShieldCheck,
  Target,
  UserCheck,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const advisoryFocusAreas = [
  { label: "AML frameworks", icon: ShieldCheck },
  { label: "KYC processes", icon: UserCheck },
  { label: "Sanctions screening", icon: SearchCheck },
  { label: "Anti-fraud controls", icon: CheckCircle2 },
];

const whyChooseUs = [
  {
    title: "Practical, Not Theoretical",
    description:
      "Every engagement is built around usable documentation, clear findings, and implementation steps your team can act on.",
    icon: ClipboardCheck,
  },
  {
    title: "Regulatory Depth",
    description:
      "Advisory is grounded in AML, anti-fraud, digital asset, and regulatory control expectations across demanding environments.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored Risk Lens",
    description:
      "We shape recommendations around your actual exposure, customer base, products, systems, and operating model.",
    icon: Target,
  },
  {
    title: "Audit-Ready Outputs",
    description:
      "Policies, procedures, assessments, and remediation plans are structured for internal use and external examination.",
    icon: FileCheck2,
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

const industriesServed = [
  {
    title: "Financial Institutions and Banks",
    tag: "AML governance, customer risk, and reporting controls",
    icon: Landmark,
    image: "/consultancy-services/industries/1.jpg",
  },
  {
    title: "Virtual Asset Service Providers (VASPs)",
    tag: "Digital asset compliance and regulatory readiness",
    icon: BadgeDollarSign,
    image: "/consultancy-services/industries/2.jpg",
  },
  {
    title: "Fintech and Payment Service Providers",
    tag: "Fast-moving onboarding, monitoring, and payment risk",
    icon: WalletCards,
    image: "/consultancy-services/industries/3.jpg",
  },
  {
    title: "Insurance and Wealth Management",
    tag: "Client due diligence, suitability, and control documentation",
    icon: Banknote,
    image: "/consultancy-services/industries/4.jpg",
  },
  {
    title: "Real Estate and High Value Goods Dealers",
    tag: "High-value transaction screening and source-of-funds controls",
    icon: Gem,
    image: "/consultancy-services/industries/5.jpg",
  },
  {
    title: "Non-Profit Organisations",
    tag: "Donor oversight, funds flow, and governance safeguards",
    icon: HandHeart,
    image: "/consultancy-services/industries/6.jpg",
  },
];

const ConsultancyPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Consultancy & Advisory"
        heading="Navigate Compliance with Confidence"
        description="From AML programme design to regulatory gap analysis, we deliver practical advisory that protects your organisation and satisfies your regulators."
        buttons={[
          {
            label: "Book a Consultation",
            href: "#",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Schedule a Call",
            href: "#",
            variant: "outline",
            showArrow: true,
          },
        ]}
        highlights={[
          "AML & Anti-Fraud Advisory",
          "Regulatory Gap Analysis",
          "VARA Compliance Support",
          "& More",
        ]}
        bgImage="/consulting-bg.webp"
        imageAlt="Consulting & Advisory"
      />
      <section className="w-full overflow-hidden bg-[#f6f4f8] py-18 md:py-24">
        <div className="container">
          <div className="relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-18">
            <div className="relative z-10">
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                  </span>
                  <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                    Overview
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl md:text-[46px]">
                  Advisory Built for the Real Work of Compliance
                </h2>

                <div className="mt-7 space-y-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  <p>
                    Our consulting practice works with financial institutions,
                    virtual asset service providers, fintechs, and regulated
                    businesses to build, audit, and strengthen their compliance
                    operations.
                  </p>
                  <p>
                    Advisory engagements cover anti-money laundering frameworks,
                    know your customer processes, sanctions screening
                    programmes, and anti-fraud controls. The work is shaped
                    around the organisation&apos;s actual risk exposure,
                    systems, people, and regulatory duties.
                  </p>
                  <p>
                    This is not theoretical guidance. Each engagement is
                    grounded in hands-on implementation, with clear findings,
                    usable documentation, filing support where required, and
                    practical training for the teams responsible for execution.
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-6">
                  <Button href="#" showArrow>
                    Book a Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[600px]">
              <div className="absolute left-0 top-10 hidden h-[78%] w-px bg-[#231143]/15 lg:block" />
              <div className="absolute left-0 top-10 hidden h-24 w-px bg-[#E25C8F] lg:block" />

              <div className="relative ml-0 h-full lg:ml-10">
                <div className="relative h-[520px] overflow-hidden rounded-[14px] rounded-tl-[28px] rounded-br-[28px] bg-[#231143] shadow-[0_32px_90px_rgba(35,17,67,0.18)] md:h-[620px] md:rounded-[12px] md:rounded-tl-[42px] md:rounded-br-[42px]">
                  <Image
                    src="/consulting-intro.webp"
                    alt="Compliance advisory team reviewing regulatory controls"
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-linear-to-br from-[#120823]/75 via-[#120823]/18 to-[#E25C8F]/20" /> */}
                  <div className="absolute inset-x-8 top-8 h-px bg-white/35" />
                  <div className="absolute inset-y-8 right-8 w-px bg-white/25" />
                </div>

                <div className="absolute -left-1 bottom-10 w-[min(92%,520px)] border border-zinc-200 bg-white p-5 shadow-[0_22px_60px_rgba(35,17,67,0.14)] md:-left-8">
                  <div className="grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
                    <div className="border-r border-zinc-200 pr-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Advisory coverage
                      </p>
                      <p className="mt-2 text-xl font-medium leading-tight text-[#231143]">
                        Framework, process, screening, control.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      {advisoryFocusAreas.map(({ label, icon: Icon }) => (
                        <div key={label} className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center bg-[#231143]/5 text-[#231143]">
                            <Icon className="size-4" />
                          </span>
                          <span className="text-sm font-medium text-zinc-800">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-12 hidden w-52 border border-white/20 bg-[#231143] p-5 text-white shadow-[0_20px_55px_rgba(18,8,35,0.25)] md:block">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
                    Output
                  </p>
                  <p className="mt-2 text-lg font-medium leading-tight">
                    Actionable, auditable, ready to implement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden py-22 bg-linear-to-br from-secondary via-primary/80 to-secondary-dark from-20% to-80%">
        <div className="flex items-center flex-col max-w-200 mx-auto">
          <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
            </span>
            <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
              What We Advise On
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] mb-4 text-center text-white">
            Specialised Advisory for Complex Regulatory Environments
          </h2>
          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-4 text-center">
            Practical advisory across AML, anti-fraud, compliance, and digital
            asset regulation designed to strengthen operations and support
            regulatory readiness.
          </p>
        </div>
        <ServiceModulesSlider />
      </section>

      <section className="w-full overflow-hidden bg-white py-18 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                </span>
                <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                  Why Choose Us
                </span>
              </div>

              <h2 className="max-w-xl text-3xl md:text-[46px]">
                Advisory That Holds Up When It Matters
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                Our work is designed for regulated teams that need clarity,
                documentation, and defensible decisions without unnecessary
                complexity.
              </p>

              <div className="relative mt-9 min-h-[420px] w-full overflow-hidden bg-[#061525] shadow-[0_28px_80px_rgba(35,17,67,0.14)] md:min-h-[520px]">
                <Image
                  src="/hero-3.webp"
                  alt="Regulated business environment for compliance advisory"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#061525]/88 via-[#061525]/22 to-transparent" />
                <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-white/35 pt-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Advisory Standard
                  </p>
                  <p className="text-xs text-white/55">AML / KYC / Controls</p>
                </div>

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="max-w-md border border-white/16 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-2xl font-medium leading-tight text-white">
                      Clear, defensible compliance work for regulated teams.
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                      <div>
                        <p className="text-2xl font-medium leading-none text-white">
                          AML
                        </p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                          Compliance Focus
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-medium leading-none text-white">
                          360
                        </p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                          Operational View
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((point, index) => {
                const Icon = point.icon;

                return (
                  <article
                    key={point.title}
                    className="group relative min-h-[260px] overflow-hidden border border-zinc-200 bg-[#fbfafd] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/35 hover:bg-white hover:shadow-[0_24px_70px_rgba(35,17,67,0.1)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#E25C8F] via-[#231143] to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-[#231143]/5 transition group-hover:text-[#E25C8F]/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative flex h-full flex-col">
                      <span className="flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#231143] shadow-[0_14px_35px_rgba(35,17,67,0.08)] transition group-hover:border-[#E25C8F]/35 group-hover:bg-[#E25C8F] group-hover:text-white">
                        <Icon className="size-10" />
                      </span>

                      <div className="mt-auto pt-8">
                        <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-[#E25C8F]" />
                        <h3 className="text-xl leading-tight text-[#061525]">
                          {point.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                          {point.description}
                        </p>
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

      <section className="w-full overflow-hidden bg-[#fbfafd] py-16 md:py-20">
        <div className="container">
          <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                </span>
                <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                  Industries We Serve
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl md:text-[44px]">
                Advisory for Regulated and High-Exposure Sectors
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base lg:text-right">
              We support organisations where customer risk, transaction
              activity, governance, and documentation need to withstand close
              internal and regulatory scrutiny.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {industriesServed.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group relative min-h-[310px] overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_18px_55px_rgba(35,17,67,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/45 hover:shadow-[0_24px_70px_rgba(35,17,67,0.13)] md:min-h-[330px] xl:min-h-[360px]"
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#061525]/82 via-[#061525]/18 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-18 bg-linear-to-b from-black/28 to-transparent" />

                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-white/40 transition group-hover:w-14 group-hover:bg-[#E25C8F]" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="relative min-h-[146px] rounded-[6px] border border-white/55 bg-white/94 p-4 text-[#061525] shadow-[0_18px_45px_rgba(6,21,37,0.18)] backdrop-blur-sm">
                      <div className="flex h-full flex-col">
                        <span className="mb-4 flex size-11 shrink-0 items-center justify-center rounded-full border border-[#231143]/15 bg-white text-[#231143] shadow-[0_12px_32px_rgba(35,17,67,0.12)] transition group-hover:border-[#E25C8F]/40 group-hover:bg-[#E25C8F] group-hover:text-white">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="text-[17px] leading-tight text-[#061525] xl:text-base">
                          {industry.title}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                          {industry.tag}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <MainCTA
        heading="Ready to Strengthen Your Compliance?"
        description="Book a free consultation to discuss your organisation’s compliance requirements and explore how we can help."
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

export default ConsultancyPage;
