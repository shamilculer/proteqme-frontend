"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, GraduationCap, Layers, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

import SectionAmbient from "../ui/SectionAmbient";

const PANEL_GRADIENT =
  "linear-gradient(90deg, rgba(13,13,18,0.92) 0%, rgba(13,13,18,0.78) 68%, rgba(13,13,18,0.18) 100%)";

const pillars = [
  {
    number: "01",
    tag: "Advisory",
    title: "Consultancy & Advisory",
    description:
      "Expert guidance on AML compliance frameworks, anti-fraud programme design, risk assessment, and regulatory readiness. We help organisations build defensible compliance operations.",
    href: "/consultancy-advisory",
    icon: ShieldCheck,
    image: "/consulting-adv.webp",
    imageAlt: "Compliance advisory consultation",
    gridClass: "lg:col-span-2 min-h-[480px]",
    alignClass: "justify-start",
    panelClass: "w-full sm:w-[min(100%,520px)] lg:w-[55%]",
    panelShadow: false,
  },
  {
    number: "02",
    tag: "Learning",
    title: "Learning",
    description:
      "Pre-recorded webinars, structured courses, and certification preparation programmes designed for compliance professionals and teams building anti-fraud capability.",
    href: "/learning",
    icon: GraduationCap,
    image: "/learning.webp",
    imageAlt: "Professional compliance learning",
    gridClass: "lg:col-span-1 min-h-[480px]",
    alignClass: "justify-start",
    panelClass: "w-full sm:w-[min(100%,420px)]",
    panelShadow: false,
  },
  {
    number: "03",
    tag: "Systems",
    title: "Systems",
    description:
      "AML screening, transaction monitoring, and regulatory technology solutions. We evaluate, recommend, and implement systems that reduce compliance risk and operational overhead.",
    href: "/systems",
    icon: Layers,
    image: "/systems.webp",
    imageAlt: "RegTech systems and compliance technology",
    gridClass: "lg:col-span-3 min-h-[440px]",
    alignClass: "justify-start lg:justify-end",
    panelClass: "w-full sm:w-[min(100%,520px)] lg:w-[42%]",
    panelShadow: true,
  },
];

const ServicePillars = () => {
  return (
    <section className="section-light-white relative overflow-hidden border-t border-zinc-200/70 py-18 md:py-24">
      <SectionAmbient variant="light" />
      <ParticleNetwork id="service-pillars-particles" variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Our Solutions Blueprint
            </span>
          </div>

          <h2 className="text-section-heading text-foreground">
            Integrated Advisory, Learning, and RegTech Services
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem
                key={pillar.number}
                className={`group relative overflow-hidden rounded-2xl bg-proteq-dark ${pillar.gridClass}`}
              >
                {/* Full-bleed background photography */}
                <div className="absolute inset-0">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card link + left content panel */}
                <Link
                  href={pillar.href}
                  className={`relative z-10 flex h-full min-h-[inherit] p-4 md:p-6 ${pillar.alignClass}`}
                >
                  <div
                    className={`relative flex min-h-[280px] flex-col justify-between rounded-xl p-6 backdrop-blur-sm md:min-h-[320px] md:p-8 ${pillar.panelClass} ${
                      pillar.panelShadow
                        ? "shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
                        : ""
                    }`}
                    style={{ background: PANEL_GRADIENT }}
                  >
                    <span
                      className="pointer-events-none absolute right-6 top-5 text-6xl font-black leading-none text-white/[0.04] transition group-hover:text-primary/10"
                      aria-hidden
                    >
                      {pillar.number}
                    </span>

                    <div className="relative z-10">
                      <div className="icon-ghost-pink mb-6 flex size-12 items-center justify-center rounded-xl">
                        <Icon className="size-5 text-white" strokeWidth={1.75} />
                      </div>

                      <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90">
                        {pillar.tag}
                      </span>

                      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white transition group-hover:text-primary lg:text-3xl">
                        {pillar.title}
                      </h3>

                      <p className="max-w-lg text-sm leading-relaxed text-zinc-300 md:text-base">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 flex items-center justify-end border-t border-white/10 pt-5">
                      <span
                        className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition group-hover:rotate-45 group-hover:border-primary/40 group-hover:bg-primary"
                        aria-label="Learn more"
                      >
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicePillars;
