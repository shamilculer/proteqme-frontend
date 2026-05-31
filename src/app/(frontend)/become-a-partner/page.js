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
      <section className="w-full my-22">
        <div className="max-w-320 mx-auto space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                Partnership & Collaboration
              </span>
            </div>
            <h2 className="text-3xl md:text-[44px] mb-4">
              Build the Future of Compliance, Training & Regulatory Technology
              With Us
            </h2>
          </div>

          <div className="w-full flex gap-22">
            <div className="w-full md:w-1/2 flex items-end">
              <div className="w-full flex flex-wrap gap-4">
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
            <div className="w-full md:w-1/2">
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-4">
                We collaborate with industry experts, compliance professionals,
                technology providers, and forward thinking organisations to
                create impactful advisory, learning, and systems driven
                solutions. Whether you deliver specialised expertise, innovative
                compliance technology, or training capabilities, we provide a
                platform to grow together, expand your reach, and create
                meaningful industry impact.
                <br />
                <br />
                Join a growing network of experts, trainers, and technology
                providers shaping the future of compliance, advisory, and
                regulatory innovation.
              </p>
              <Button href="#" showArrow className="w-full sm:w-auto">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnership types ── */}
      <section
        id="partnership-opportunities"
        className="w-full py-22 bg-linear-to-br from-secondary via-primary/80 to-secondary-dark from-20% to-80%"
      >
        <div className="container space-y-10">
          <div className="flex items-center flex-col max-w-200 mx-auto">
            <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                Collaboration Opportunities
              </span>
            </div>
            <h2 className="text-3xl md:text-[44px] mb-4 text-center text-white">
              Choose the Partnership Path That Fits Your Expertise
            </h2>
            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-4 text-center">
              Join a growing network of experts, trainers, and technology
              providers shaping the future of compliance, advisory, and
              regulatory innovation.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
            {partnerTypes.map((i) => (
              <Card
                key={i}
                className="relative overflow-visible rounded-lg border-0 bg-linear-to-br from-white to-gray-50 text-gray-700 hover:-translate-y-1 transition duration-300 p-4 pt-0!"
              >
                <CardHeader className="w-full -mt-5 h-75 rounded-lg overflow-hidden relative">
                  <Image
                    src={i.image}
                    alt={i.heading}
                    fill
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent className="p-0">
                  <h3 className="text-[28px] mb-2">{i.heading}</h3>
                  <p className="text-sm text-gray-500">{i.description}</p>
                  <div className="mt-6 space-y-2.5">
                    {i.highlights.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#E25C8F]" />
                        <span className="text-sm leading-relaxed text-zinc-700">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button href="#" showArrow className="mt-4 h-10!">
                    {i.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process – horizontal timeline ── */}
      <section className="w-full py-24 bg-white overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E25C8F]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="container relative z-10">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Badge row */}
                  <div className="relative mb-6 flex flex-col items-center">
                    {/* Outer ring – appears on hover */}
                    <div className="absolute inset-0 -m-1.5 rounded-full border border-zinc-200 opacity-0 group-hover:opacity-100 transition duration-300" />

                    {/* Number badge */}
                    <div className="relative size-25 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center z-10">
                      <span className="text-xl font-semibold text-zinc-900 tracking-wide">
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
      <section className="w-full flex flex-col lg:flex-row min-h-[680px] bg-secondary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary-dark to-black pointer-events-none" />
        {/* Image half */}
        <div className="relative w-full lg:w-1/2 min-h-[420px] lg:min-h-full">
          <Image
            src="/hero-bg.webp"
            alt="Why partner with us"
            fill
            className="object-cover"
          />
        </div>

        {/* Content half */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/15 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-white/70 uppercase font-semibold tracking-wider">
                Why Partner With Us
              </span>
            </div>

            <h2 className="text-3xl md:text-[44px] text-white leading-tight mb-6">
              A Platform Built for Lasting Impact
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {partnerBenefits.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/30 hover:bg-white/[0.09]"
                >
                  <div className="mb-5 size-16 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center">
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

      <section className="w-full my-22">
        <div className="max-w-260 mx-auto space-y-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
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
            label: "Email Us: partners@proteqme.com",
            href: "mailto:partners@proteqme.com",
            variant: "outline",
          },
        ]}
      />
    </main>
  );
};

export default PartnerPage;
