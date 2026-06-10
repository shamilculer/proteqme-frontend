"use client";

import Image from "next/image";
import { Globe, Scale, Users } from "lucide-react";
import { Button } from "../ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../ui/scroll-reveal";

const pillars = [
  {
    icon: Users,
    title: "Built by Practitioners",
    description:
      "Former compliance officers and regulators — advice grounded in real regulatory work.",
  },
  {
    icon: Scale,
    title: "Fiercely Independent",
    description:
      "No vendor commissions or kickbacks — recommendations shaped by your risk profile alone.",
  },
  {
    icon: Globe,
    title: "Trusted Across Markets",
    description:
      "Supporting 40+ institutions across 10+ jurisdictions, from Tier-1 banks to VASPs.",
  },
];

const stats = [
  { value: "40+", label: "institutions served" },
  { value: "10+", label: "jurisdictions" },
  { value: "15+", label: "years in compliance" },
];

const Intro = () => {
  return (
    <section
      className="section-light w-full border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="who-we-are-heading"
    >
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Who We Are
            </p>
            <h2
              id="who-we-are-heading"
              className="text-section-heading max-w-3xl text-foreground"
            >
              The Specialists Behind Your Compliance Confidence.
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-md">
            <p className="text-body text-zinc-600">
              A UK-based compliance firm helping regulated organisations build
              defensible programmes, capable teams, and systems that stand up to
              scrutiny.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal className="relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:min-h-[500px]">
            <Image
              src="/who-we-are.webp"
              alt="Compliance professionals in a focused boardroom discussion"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-proteq-dark/80 via-proteq-dark/15 to-transparent"
              aria-hidden
            />

            <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              UK-Based Firm
            </span>

            <blockquote className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <p className="font-serif-quote max-w-md text-xl leading-snug text-white md:text-2xl">
                Regulated organisations deserve counsel from people who have
                actually done the work.
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal xOffset={16} delay={0.08} className="lg:py-2">
            <p className="text-body mb-6 text-zinc-600">
              Proteq is built on practitioner expertise — designing programmes,
              facing regulators, and building teams that perform under pressure.
            </p>
            <p className="mb-6 text-sm leading-[1.8] text-zinc-600 sm:text-base">
              We partner with banks, fintechs, and VASPs across the UK, Europe,
              the Middle East, and Asia-Pacific — integrating advisory,
              practitioner-led learning, and RegTech into one coherent
              capability.
            </p>
            <p className="mb-10 text-sm leading-[1.8] text-zinc-600 sm:text-base">
              From programme design and team training to systems selection and
              examination readiness — we embed as an extension of your
              compliance function, scoped to your obligations and built to
              withstand regulatory scrutiny.
            </p>

            <ul className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`flex items-baseline gap-2 ${
                    index > 0
                      ? "sm:border-l sm:border-zinc-200 sm:pl-8"
                      : ""
                  }`}
                >
                  <span className="text-xl font-bold tabular-nums text-primary sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                glowingDot
                showArrow
                className="h-13 w-full px-7 text-sm font-semibold sm:w-auto"
              >
                Book a Free Consultation
              </Button>
              <Button
                href="#services"
                variant="white"
                showArrow
                className="h-13 w-full border border-zinc-300 px-7 text-sm font-semibold sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-16 grid gap-5 sm:grid-cols-3 md:mt-20"
          staggerChildren={0.08}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <article className="group flex h-full flex-col rounded-2xl bg-proteq-dark p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(13,13,20,0.28)] md:p-8">
                  <div className="icon-stat-circle mb-6 size-14">
                    <Icon
                      className="size-6 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mb-2.5 text-base font-semibold text-white md:text-lg">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 md:text-[15px]">
                    {pillar.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Intro;
