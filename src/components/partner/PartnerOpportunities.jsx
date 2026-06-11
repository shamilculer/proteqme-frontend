"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionAmbient from "@/components/ui/SectionAmbient";
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const partnerTypes = [
  {
    image: "/partner.webp",
    heading: "Become a Partner",
    description:
      "Collaborate with us to co-deliver advisory, training, and compliance technology services across regulated industries.",
    highlights: [
      "Co-branded opportunities",
      "Shared go-to-market support",
      "Access to client network",
      "Strategic industry collaboration",
    ],
    buttonText: "Apply as a Partner",
  },
  {
    image: "/trainer.webp",
    heading: "Become a Trainer",
    description:
      "Join our learning ecosystem as a subject matter expert delivering practical compliance and anti-fraud education.",
    highlights: [
      "Deliver expert webinars",
      "Create training modules",
      "Build industry authority",
      "Flexible content formats",
    ],
    buttonText: "Apply as a Trainer",
  },
  {
    image: "/system-provider.webp",
    heading: "Become a System Provider",
    description:
      "Showcase your compliance technology solutions through our systems advisory and implementation network.",
    highlights: [
      "Vendor evaluation access",
      "Compliance technology exposure",
      "Integration opportunities",
      "Industry-focused partnerships",
    ],
    buttonText: "Become a Provider",
  },
];

export default function PartnerOpportunities() {
  return (
    <SectionReveal
      id="partnership-opportunities"
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="partner-opportunities-heading"
    >
      <SectionAmbient variant="light" />
      <ParticleNetwork id="partner-opportunities-particles" variant="light" />

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Collaboration Opportunities
            </p>
            <h2
              id="partner-opportunities-heading"
              className="text-section-heading max-w-2xl text-foreground"
            >
              Choose the Partnership Path That Fits Your Expertise
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              Three ways to collaborate — advisory partnerships, expert training,
              and compliance technology provider relationships.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
          staggerChildren={0.06}
        >
          {partnerTypes.map((item) => (
            <StaggerItem key={item.heading}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(17,24,39,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(232,24,90,0.08)]">
                <div className="relative h-[200px] shrink-0 overflow-hidden sm:h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-proteq-dark/55" />
                  <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                      {item.heading}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5">
                    {item.highlights.map((detail) => (
                      <li
                        key={detail}
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

                  <Button
                    href="#partner-form"
                    variant="secondary"
                    showArrow
                    className="mt-6 w-full sm:w-auto"
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
