"use client";

import {
  BadgeCheck,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  Globe,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const focusPills = [
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
];

export default function PartnerOverview() {
  return (
    <section className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28">
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mb-8 md:mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Partnership & Collaboration
            </span>
          </div>
          <h2 className="section-heading-accent text-section-heading max-w-4xl">
            Build the Future of Compliance, Training & Regulatory Technology
            With Us
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-12 xl:gap-16">
          <ScrollReveal
            className="order-2 min-w-0 lg:order-1"
            xOffset={-12}
          >
            <StaggerContainer
              className="flex max-w-full flex-wrap gap-2.5 sm:gap-3"
              staggerChildren={0.05}
            >
              {focusPills.map(({ bg, color, Icon, label }) => (
                <StaggerItem key={label}>
                  <div className="flex max-w-full items-center gap-2 rounded-full border border-zinc-200/90 bg-white p-1 pr-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_35px_rgba(13,13,20,0.08)]">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full ${bg}`}
                    >
                      <Icon className={`size-4 ${color}`} />
                    </div>
                    <span className="text-sm font-medium leading-snug text-foreground">
                      {label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal className="order-1 min-w-0 lg:order-2" xOffset={12}>
            <p className="text-body mb-6 text-zinc-600">
              We collaborate with industry experts, compliance professionals,
              technology providers, and forward thinking organisations to
              create impactful advisory, learning, and systems driven
              solutions. Whether you deliver specialised expertise, innovative
              compliance technology, or training capabilities, we provide a
              platform to grow together, expand your reach, and create
              meaningful industry impact.
            </p>
            <p className="text-body mb-6 text-zinc-600">
              Join a growing network of experts, trainers, and technology
              providers shaping the future of compliance, advisory, and
              regulatory innovation.
            </p>
            <Button href="#partner-form" showArrow glowingDot className="w-full sm:w-auto">
              Become a Partner
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
