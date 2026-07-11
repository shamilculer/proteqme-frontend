"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SectionAmbient from "@/components/ui/SectionAmbient";
import CmsIcon from "@/components/ui/CmsIcon"
import SectionDescription from "@/components/ui/SectionDescription";
import CardGridLayout from "@/components/ui/CardGridLayout";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    title: "EX-AI Bot",
    anchorId: "ex-ai-bot",
    tag: "Autonomous AI trading intelligence",
    description:
      "AI powered trading bots that analyse market signals and execute strategies with defined risk parameters — operating around the clock.",
    icon: "bot",
    image: "/ai-investment.webp",
  },
  {
    title: "Neyro",
    anchorId: "neyro",
    tag: "Neural network investment tools",
    description:
      "Pattern recognition and allocation tools designed to support smarter portfolio decisions across volatile markets.",
    icon: "sparkles",
    image: "/hero-new.webp",
  },
  {
    title: "Gold (XAU) Packages",
    anchorId: "gold-xau-packages",
    tag: "Gold-backed digital investment",
    description:
      "Investment packages that combine digital access with the stability and inflation protection of gold exposure.",
    icon: "coins",
    image: "/aurum/aurum.webp",
  },
  {
    title: "Web3 NeoBank",
    anchorId: "web3-neobank",
    tag: "Fiat & crypto in one hub",
    description:
      "Manage fiat and crypto, execute payments, and access liquidity from a single secure Web3 financial environment.",
    icon: "landmark",
    image: "/aurum/aurum-2.webp",
  },
];

const DEFAULTS = {
  eyebrow: "Core Offerings",
  heading: "The Building Blocks of the Aurum Ecosystem",
  description:
    "Four integrated products at the intersection of decentralised finance and traditional wealth management — designed to work together in one platform.",
  layout: "grid",
  columns: 4,
  items: DEFAULT_ITEMS,
  cta: null,
  sectionId: "core-offerings",
};

function OfferingCard({ offering, index }) {
  return (
    <article
      id={offering.anchorId || offering.id || undefined}
      className="group relative min-h-[320px] scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_22px_70px_rgba(13,13,20,0.1)] transition duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_32px_90px_rgba(232,24,90,0.18)] sm:min-h-[400px]"
    >
      <Image
        src={offering.image}
        alt={offering.title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-[#0D0D14]/95 via-[#0D0D14]/55 to-[#0D0D14]/25 transition duration-500 group-hover:via-[#231143]/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-primary/0 mix-blend-multiply transition duration-500 group-hover:bg-primary/10"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 md:p-6">
        <div className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 group-hover:border-primary/40 group-hover:bg-primary/90">
          <CmsIcon
            lucide={offering.lucide || offering.icon}
            src={offering.src}
            alt={offering.alt}
            className="size-5 text-white transition duration-300 group-hover:scale-105"
            strokeWidth={1.75}
          />
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white/90 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Core offering
        </p>
        <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
          {offering.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-white/75">{offering.tag}</p>

        <div className="mt-5 border-t border-white/15 pt-5">
          <p className="text-sm leading-relaxed text-white/80">
            {offering.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AurumCoreOfferings({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  layout = DEFAULTS.layout,
  columns = DEFAULTS.columns,
  items = DEFAULT_ITEMS,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  sectionId = DEFAULTS.sectionId,
}) {
  const gridColsClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-12 md:py-16"
      aria-labelledby="aurum-offerings-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="aurum-core-particles" variant="light" />
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center md:mb-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {eyebrow}
          </p>
          <h2
          >
            {heading}
          </h2>
          <SectionDescription content={description} className="text-body mt-4 text-zinc-600" />
        </ScrollReveal>

        <CardGridLayout
          items={items}
          layout={layout}
          gridClassName={`gap-5 lg:gap-6 ${gridColsClass}`}
          staggerChildren={0.07}
          carouselMinHeight="360px"
          carouselAriaLabel="Core offerings carousel"
          renderCard={(offering, index) => (
            <OfferingCard offering={offering} index={index} />
          )}
        />
      </div>
    </SectionReveal>
  );
}
