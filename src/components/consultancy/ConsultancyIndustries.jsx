"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionAmbient from "../ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal";
import CmsIcon from "@/components/ui/CmsIcon";
import SectionDescription from "@/components/ui/SectionDescription";
import CardGridLayout from "@/components/ui/CardGridLayout";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    title: "Financial Institutions and Banks",
    tag: "AML governance, customer risk, and reporting controls",
    icon: "landmark",
    image: "/consultancy-services/industries/1.jpg",
  },
  {
    title: "Virtual Asset Service Providers",
    tag: "Digital asset compliance and VARA regulatory readiness",
    icon: "badgeDollar",
    image: "/consultancy-services/industries/2.jpg",
  },
  {
    title: "Fintech and Payment Providers",
    tag: "Onboarding, monitoring, and payment risk programmes",
    icon: "walletCards",
    image: "/consultancy-services/industries/3.jpg",
  },
  {
    title: "Insurance and Wealth Management",
    tag: "Client due diligence, suitability, and control documentation",
    icon: "banknote",
    image: "/consultancy-services/industries/4.jpg",
  },
  {
    title: "Real Estate and High-Value Dealers",
    tag: "Transaction screening and source-of-funds controls",
    icon: "gem",
    image: "/consultancy-services/industries/5.jpg",
  },
  {
    title: "Non-Profit Organisations",
    tag: "Donor oversight, funds flow, and governance safeguards",
    icon: "handHeart",
    image: "/consultancy-services/industries/6.jpg",
  },
];

const DEFAULTS = {
  eyebrow: "Industries We Serve",
  heading: "Advisory for Regulated and High-Exposure Sectors",
  description:
    "We support organisations where customer risk, transaction activity, and documentation must withstand close internal and regulatory scrutiny.",
  layout: "carousel-grid",
  columns: 3,
  items: DEFAULT_ITEMS,
  ctaLabel: null,
  ctaHref: null,
  sectionId: null,
};

function StandardIndustryCard({ industry, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-[0_18px_55px_rgba(13,13,20,0.06)] transition duration-300 hover:-translate-y-1 hover:border-primary/25">
      <div className="relative h-48 shrink-0 overflow-hidden sm:h-52">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/55 via-proteq-dark/10 to-transparent" />
        <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl border border-white/80 bg-white/95 shadow-md">
          <CmsIcon
            lucide={industry.lucide || industry.icon}
            src={industry.src}
            alt={industry.alt}
            className="size-5 text-primary"
            strokeWidth={1.75}
          />
        </div>
        <span className="absolute right-4 top-4 text-sm font-bold tabular-nums tracking-wider text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-foreground">{industry.title}</h3>
        {industry.tag ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{industry.tag}</p>
        ) : null}
      </div>
    </article>
  );
}

function IndustryCard({ industry, index }) {
  return (
    <article className="group relative h-full min-h-[320px] w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-[0_18px_55px_rgba(13,13,20,0.06)]">
      <Image
        src={industry.image}
        alt={industry.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
        className="object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="industry-card-overlay absolute inset-0" />

      <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
        <div className="icon-stat-circle size-14! bg-white/10">
          <CmsIcon
            lucide={industry.lucide || industry.icon}
            src={industry.src}
            alt={industry.alt}
            className="size-10 text-white"
            strokeWidth={1.75}
          />
        </div>
        <span className="text-sm font-bold tabular-nums tracking-wider text-white/55">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 min-h-[120px] p-5">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {industry.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {industry.tag}
        </p>
      </div>
    </article>
  );
}

export default function ConsultancyIndustries({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  layout = DEFAULTS.layout,
  columns = DEFAULTS.columns,
  items = DEFAULTS.items,
  sectionId = DEFAULTS.sectionId,
}) {
  const gridColsClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  const renderCard = (industry, index) => {
    const Card =
      industry.appearance === "standard" ? StandardIndustryCard : IndustryCard;
    return <Card industry={industry} index={index} />;
  };

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="consultancy-industries-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork variant="light" id="consultancy-industries-particles" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id="consultancy-industries-heading"
              className="text-section-heading max-w-2xl text-foreground"
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <SectionDescription content={description} />
          </ScrollReveal>
        </div>

        <CardGridLayout
          items={items}
          layout={layout}
          gridClassName={`gap-4 ${gridColsClass}`}
          renderCard={renderCard}
          carouselAriaLabel="Industries carousel"
        />

      </div>
    </SectionReveal>
  );
}
