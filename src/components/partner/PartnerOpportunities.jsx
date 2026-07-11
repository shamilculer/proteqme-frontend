"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Check } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";
import SectionAmbient from "@/components/ui/SectionAmbient";
import CardGridLayout from "@/components/ui/CardGridLayout";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_ITEMS = [
  {
    title: "Become a Partner",
    anchorId: "partner-track",
    description:
      "Collaborate with us to co-deliver advisory, training, and compliance technology services across regulated industries.",
    image: "/partner.webp",
    highlights: [
      "Co-branded opportunities",
      "Shared go-to-market support",
      "Access to client network",
      "Strategic industry collaboration",
    ],
    button: { label: "Apply as a Partner", href: "#partner-form", actionType: "link" },
  },
  {
    title: "Become a Trainer",
    anchorId: "trainer-track",
    description:
      "Join our learning ecosystem as a subject matter expert delivering practical compliance and anti-fraud education.",
    image: "/trainer.webp",
    highlights: [
      "Deliver expert webinars",
      "Create training modules",
      "Build industry authority",
      "Flexible content formats",
    ],
    button: { label: "Apply as a Trainer", href: "#partner-form", actionType: "link" },
  },
  {
    title: "Become a System Provider",
    anchorId: "provider-track",
    description:
      "Showcase your compliance technology solutions through our systems advisory and implementation network.",
    image: "/system-provider.webp",
    highlights: [
      "Vendor evaluation access",
      "Compliance technology exposure",
      "Integration opportunities",
      "Industry-focused partnerships",
    ],
    button: { label: "Become a Provider", href: "#partner-form", actionType: "link" },
  },
];

const DEFAULTS = {
  eyebrow: "Collaboration Opportunities",
  heading: "Choose the Partnership Path That Fits Your Expertise",
  description:
    "Three ways to collaborate — advisory partnerships, expert training, and compliance technology provider relationships.",
  layout: "grid",
  columns: 3,
  items: DEFAULT_ITEMS,
  cta: null,
  sectionId: "partnership-opportunities",
};

export default function PartnerOpportunities({
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
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <SectionReveal
      id={sectionId || undefined}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="partner-opportunities-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="partner-opportunities-particles" variant="light" />

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2
              id="partner-opportunities-heading"
              className="text-section-heading max-w-2xl text-foreground"
            >
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <SectionDescription content={description} className="text-body text-zinc-600" />
          </ScrollReveal>
        </div>

        <CardGridLayout
          items={items}
          layout={layout}
          gridClassName={`grid-cols-1 gap-5 lg:gap-6 ${gridColsClass}`}
          staggerChildren={0.06}
          carouselMinHeight="520px"
          carouselAriaLabel="Partnership opportunities carousel"
          renderCard={(item) => {
            const cardButton =
              item.button ||
              (item.buttonLabel && item.buttonHref
                ? {
                    label: item.buttonLabel,
                    href: item.buttonHref,
                    actionType: "link",
                  }
                : null);

            return (
              <article
                id={item.anchorId || item.id || undefined}
                className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(17,24,39,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(232,24,90,0.08)]"
              >
                <div className="relative h-[200px] shrink-0 overflow-hidden sm:h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-proteq-dark/55" />
                  <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
                    {item.highlights.map((detail, index) => (
                      <li
                        key={listKey(detail, index)}
                        className="flex items-start gap-2.5 text-sm text-zinc-700"
                      >
                        <span className="icon-ghost-pink mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                          <Check
                            className="size-3 text-primary"
                            strokeWidth={2.5}
                          />
                        </span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {cardButton ? (
                    <ActionButton
                      {...cardButton}
                      variant="secondary"
                      showArrow
                      className="mt-6 w-full sm:w-auto"
                    />
                  ) : null}
                </div>
              </article>
            );
          }}
        />

      </div>
    </SectionReveal>
  );
}
