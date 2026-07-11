"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const defaultPartners = [
  {
    name: "OSL",
    website: "https://osl.com",
    logo: "/partners/osl.png",
  },
  {
    name: "Chainalysis",
    website: "https://www.chainalysis.com",
    logo: "/partners/chainalysis.png",
  },
  {
    name: "Sumsub",
    website: "https://sumsub.com",
    logo: "/partners/sumsub (1).png",
  },
  {
    name: "Elliptic",
    website: "https://www.elliptic.co",
    logo: "/partners/elliptinc.png",
  },
];

const LOGO_WIDTH = 240;
const LOGO_HEIGHT = 80;

function PartnerLogo({ partner }) {
  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.name}
      className="flex h-16 shrink-0 items-center justify-center px-8 transition-transform duration-300 hover:scale-105 md:h-20 md:px-10 lg:h-28"
    >
      <Image
        src={partner.logo}
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-full w-auto max-w-[200px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:max-w-[220px] md:max-w-[240px] lg:max-w-[280px]"
      />
    </a>
  );
}

const Partners = ({
  partners: partnersProp,
  eyebrow = "Partners",
  heading = "Strategic Partners",
  description = "We collaborate with leading RegTech and digital asset platforms to extend screening, monitoring, and identity capability — connecting advisory insight with proven technology partners.",
}) => {
  const items = partnersProp?.length ? partnersProp : defaultPartners;
  const marqueeItems = [...items, ...items, ...items];

  return (
    <SectionReveal
      className="section-light relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-16 md:py-24"
      aria-labelledby="partners-heading"
    >
      <ParticleNetwork variant="light" id="partners-particles" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {eyebrow}
            </p>
            <h2 id="partners-heading" className="text-section-heading text-foreground">
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <SectionDescription content={description} className="text-zinc-600" />
          </ScrollReveal>
        </div>

        <div className="pause-marquee relative overflow-hidden py-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-slate-white to-transparent md:w-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-slate-white to-transparent md:w-20"
            aria-hidden
          />
          <div className="animate-marquee flex w-max items-center md:[animation-duration:55s]">
            {marqueeItems.map((partner, index) => (
              <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Partners;
