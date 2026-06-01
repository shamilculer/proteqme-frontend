import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import PartnerApplicationForm from "@/components/forms/PartnerApplicationForm";
import { Button } from "@/components/ui/button";
import {
  Shield,
  GraduationCap,
  BriefcaseBusiness,
  Cpu,
  Globe,
  Users,
  BadgeCheck,
  FileText,
  SearchCheck,
  MessagesSquare,
  Handshake,
  Clock,
  Check,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const steps = [
  {
    num: "01",
    icon: <FileText className="size-4" />,
    iconBg: "bg-pink-50 text-pink-600",
    connectorColor: "bg-pink-200",
    title: "Submit Application",
    desc: "Complete the partnership form with your expertise, organisation details, and collaboration interests.",
    meta: "~10 minutes",
    metaIcon: <Clock className="size-3" />,
  },
  {
    num: "02",
    icon: <SearchCheck className="size-4" />,
    iconBg: "bg-cyan-50 text-cyan-600",
    connectorColor: "bg-cyan-200",
    title: "Review & Evaluation",
    desc: "Our team carefully reviews your submission to evaluate expertise, alignment, and partnership potential.",
    meta: "5 business days",
    metaIcon: <Clock className="size-3" />,
  },
  {
    num: "03",
    icon: <MessagesSquare className="size-4" />,
    iconBg: "bg-violet-50 text-violet-600",
    connectorColor: "bg-violet-200",
    title: "Discovery Call",
    desc: "We schedule a conversation to explore collaboration goals, opportunities, and long-term alignment.",
    meta: "30-minute call",
    metaIcon: <Clock className="size-3" />,
  },
  {
    num: "04",
    icon: <Handshake className="size-4" />,
    iconBg: "bg-emerald-50 text-emerald-600",
    connectorColor: "bg-emerald-200",
    title: "Start Collaborating",
    desc: "Once approved, we begin building impactful advisory, training, and technology-driven initiatives together.",
    meta: "Welcome to the network",
    metaIcon: <Check className="size-3" />,
  },
];

const partnerBenefits = [
  {
    icon: <Globe className="size-8 text-[#E25C8F]" />,
    title: "Global Reach & Visibility",
    desc: "Tap into our established network of financial institutions, regulators, and compliance professionals across 30+ markets.",
  },
  {
    icon: <BriefcaseBusiness className="size-8 text-[#E25C8F]" />,
    title: "Co-Branded Opportunities",
    desc: "Deliver joint programmes, advisory engagements, and technology solutions under a trusted, recognised brand.",
  },
  {
    icon: <Users className="size-8 text-[#E25C8F]" />,
    title: "Expert Community Access",
    desc: "Collaborate with a curated network of practitioners, trainers, and technologists at the forefront of the industry.",
  },
  {
    icon: <BadgeCheck className="size-8 text-[#E25C8F]" />,
    title: "Structured Support",
    desc: "From onboarding to go-to-market, we provide hands-on support to ensure every partnership delivers measurable results.",
  },
];

const partnerTypes = [
  {
    image: "/partner.webp",
    heading: "Become a Partner",
    description:
      "Collaborate with us to co-deliver advisory, training, and compliance technology services across regulated industries.",
    highlights: [
      "Co-Branded Opportunities",
      "Shared Go-To-Market Support",
      "Access to Client Network",
      "Strategic Industry Collaboration",
    ],
    buttonText: "Apply as a Partner",
  },
  {
    image: "/trainer.webp",
    heading: "Become a Trainer",
    description:
      "Join our learning ecosystem as a subject matter expert delivering practical compliance and anti-fraud education.",
    highlights: [
      "Deliver Expert Webinars",
      "Create Training Modules",
      "Build Industry Authority",
      "Flexible Content Formats",
    ],
    buttonText: "Apply as a Trainer",
  },
  {
    image: "/system-provider.webp",
    heading: "Become a System Provider",
    description:
      "Showcase your compliance technology solutions through our systems advisory and implementation network.",
    highlights: [
      "Vendor Evaluation Access",
      "Compliance Technology Exposure",
      "Integration Opportunities",
      "Industry Focused Partnerships",
    ],
    buttonText: "Become a Provider",
  },
];

const PartnerPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Partner With Proteq"
        heading="Join a Network Shaping Compliance, Learning, and RegTech"
        description="Whether you are an experienced trainer, a compliance technology provider, or an organisation looking to partner on advisory and training, we want to hear from you."
        bgImage="/consulting-adv.webp"
        imageAlt="Compliance professionals collaborating on advisory and training work"
        buttons={[
          {
            label: "Become a Partner",
            href: "#partner-form",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Explore Opportunities",
            href: "#partnership-opportunities",
            variant: "outline",
            showArrow: true,
          },
        ]}
        highlights={[
          "Expert advisory",
          "Co-branded training",
          "Technology partnerships",
        ]}
      />

      {/* ── Partnership intro ── */}
      <section className="w-full overflow-x-hidden py-18 md:py-22">
        <div className="container">
          <div className="mb-8 md:mb-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Partnership & Collaboration
              </span>
            </div>
            <h2 className="max-w-4xl text-3xl leading-tight md:text-[44px]">
              Build the Future of Compliance, Training & Regulatory Technology
              With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-12 xl:gap-16">
            <div className="order-2 min-w-0 lg:order-1">
              <div className="flex max-w-full flex-wrap gap-2.5 sm:gap-3">
                {[
                  {
                    bg: "bg-pink-100",
                    color: "text-pink-600",
                    Icon: Shield,
                    label: "AML Compliance",
                  },
                  {
                    bg: "bg-violet-100",
                    color: "text-violet-600",
                    Icon: GraduationCap,
                    label: "Expert Training",
                  },
                  {
                    bg: "bg-blue-100",
                    color: "text-blue-600",
                    Icon: BriefcaseBusiness,
                    label: "Strategic Partnerships",
                  },
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
                    className="flex max-w-full items-center gap-2 rounded-full border border-zinc-300 bg-white p-1 pr-3"
                  >
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full ${bg}`}
                    >
                      <Icon className={`size-4 ${color}`} />
                    </div>
                    <span className="text-sm font-medium leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 min-w-0 lg:order-2">
              <p className="mb-6 text-sm leading-relaxed text-zinc-700 sm:text-base">
                We collaborate with industry experts, compliance professionals,
                technology providers, and forward thinking organisations to
                create impactful advisory, learning, and systems driven
                solutions. Whether you deliver specialised expertise, innovative
                compliance technology, or training capabilities, we provide a
                platform to grow together, expand your reach, and create
                meaningful industry impact.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-zinc-700 sm:text-base">
                Join a growing network of experts, trainers, and technology
                providers shaping the future of compliance, advisory, and
                regulatory innovation.
              </p>
              <Button href="#partner-form" showArrow className="w-full sm:w-auto">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnership types ── */}
      <section
        id="partnership-opportunities"
        className="w-full overflow-x-hidden bg-linear-to-br from-secondary via-primary/80 to-secondary-dark from-20% to-80% py-18 md:py-22"
      >
        <div className="container space-y-8 md:space-y-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-1 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Collaboration Opportunities
              </span>
            </div>
            <h2 className="mb-4 text-3xl leading-tight text-white md:text-[44px]">
              Choose the Partnership Path That Fits Your Expertise
            </h2>
            <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
              Join a growing network of experts, trainers, and technology
              providers shaping the future of compliance, advisory, and
              regulatory innovation.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {partnerTypes.map((i) => (
              <Card
                key={i.heading}
                className="relative overflow-visible rounded-[18px] border-0 bg-linear-to-br from-white to-gray-50 p-3 pt-0! text-gray-700 shadow-[0_20px_65px_rgba(6,21,37,0.12)] transition duration-300 hover:-translate-y-1 sm:p-4"
              >
                <CardHeader className="relative -mt-4 h-48 w-full overflow-hidden rounded-[14px] p-0! sm:-mt-5 sm:h-56 md:h-64">
                  <Image
                    src={i.image}
                    alt={i.heading}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent className="p-0 pt-1 sm:pt-0">
                  <h3 className="mb-2 text-xl leading-tight sm:text-2xl">{i.heading}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{i.description}</p>
                  <div className="mt-5 space-y-2.5 sm:mt-6">
                    {i.highlights.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#E25C8F]" />
                        <span className="text-sm leading-relaxed text-zinc-700">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    href="#partner-form"
                    showArrow
                    className="mt-5 h-10! w-full sm:mt-6 sm:w-auto"
                  >
                    {i.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process – horizontal timeline ── */}
      <section className="relative w-full overflow-x-hidden bg-white py-18 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[min(700px,100vw)] w-[min(700px,100vw)] -translate-x-1/2 rounded-full bg-[#E25C8F]/5 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto mb-10 max-w-3xl px-1 text-center md:mb-12">
            <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-[44px] leading-tight mb-5">
              From Application to Partnership
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              A streamlined collaboration journey designed to connect experts,
              trainers, and technology providers with meaningful opportunities.
            </p>
          </div>

          {/* Horizontal steps */}
          <div className="relative">
            {/* Connecting rule — sits at the centre of the number badges */}
            <div className="hidden lg:block absolute top-[22px] left-0 right-0 mx-auto w-[calc(100%-theme(spacing.24))] h-px bg-zinc-200 z-0" />

            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group flex flex-col items-center px-2 text-center"
                >
                  <div className="relative mb-5 flex flex-col items-center sm:mb-6">
                    <div className="absolute inset-0 -m-1.5 rounded-full border border-zinc-200 opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm sm:size-24">
                      <span className="text-lg font-semibold tracking-wide text-zinc-900 sm:text-xl">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center size-9 rounded-xl mb-4 ${step.iconBg}`}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-zinc-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Partner With Us ── */}
      <section className="relative flex w-full flex-col overflow-hidden bg-secondary-dark lg:min-h-[680px] lg:flex-row">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-secondary via-secondary-dark to-black" />
        <div className="relative min-h-[280px] w-full sm:min-h-[360px] lg:min-h-full lg:w-1/2">
          <Image
            src="/hero-bg.webp"
            alt="Why partner with us"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex w-full items-center px-4 py-14 sm:px-8 sm:py-16 lg:w-1/2 lg:px-12 lg:py-20 xl:px-16">
          <div className="min-w-0 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/15 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-white/70 uppercase font-semibold tracking-wider">
                Why Partner With Us
              </span>
            </div>

            <h2 className="mb-6 text-3xl leading-tight text-white md:text-[44px]">
              A Platform Built for Lasting Impact
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {partnerBenefits.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-[18px] border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/30 hover:bg-white/[0.09] sm:p-5"
                >
                  <div className="mb-4 flex size-14 items-center justify-center rounded-lg border border-white/10 bg-white/8 sm:mb-5 sm:size-16">
                    {icon}
                  </div>
                  <p className="text-white text-base font-medium mb-2">
                    {title}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partner-form" className="w-full overflow-x-hidden py-18 md:py-22">
        <div className="container space-y-8 md:space-y-10">
          <div className="mx-auto mb-8 max-w-3xl px-1 text-center md:mb-10">
            <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                Partnership Application
              </span>
            </div>
            <h2 className="text-3xl md:text-[44px] leading-tight mb-5">
              Let’s Build Something Valuable Together
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              Apply as a partner, trainer, or system provider and explore
              opportunities to collaborate across advisory, training, and
              compliance technology initiatives.
            </p>
          </div>

          <PartnerApplicationForm />
        </div>
      </section>

      <MainCTA
        bgImage="/systems.webp"
        eyebrow="Get Started Today"
        heading="Have Questions About Partnering?"
        description="Reach out directly and we will connect you with the right person on our team."
        buttons={[
          {
            label: "Contact Us Now",
            href: "/contact",
            variant: "white",
            showArrow: true,
          },
          {
            label: "Email Our Team",
            href: "mailto:partners@proteqme.com",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </main>
  );
};

export default PartnerPage;
