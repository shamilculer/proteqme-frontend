"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BadgeDollarSign,
  Banknote,
  Gem,
  HandHeart,
  Landmark,
  WalletCards,
} from "lucide-react";
import SectionAmbient from "../ui/SectionAmbient";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";
import { cn } from "@/lib/utils";

const industries = [
  {
    title: "Financial Institutions and Banks",
    tag: "AML governance, customer risk, and reporting controls",
    icon: Landmark,
    image: "/consultancy-services/industries/1.jpg",
  },
  {
    title: "Virtual Asset Service Providers",
    tag: "Digital asset compliance and VARA regulatory readiness",
    icon: BadgeDollarSign,
    image: "/consultancy-services/industries/2.jpg",
  },
  {
    title: "Fintech and Payment Providers",
    tag: "Onboarding, monitoring, and payment risk programmes",
    icon: WalletCards,
    image: "/consultancy-services/industries/3.jpg",
  },
  {
    title: "Insurance and Wealth Management",
    tag: "Client due diligence, suitability, and control documentation",
    icon: Banknote,
    image: "/consultancy-services/industries/4.jpg",
  },
  {
    title: "Real Estate and High-Value Dealers",
    tag: "Transaction screening and source-of-funds controls",
    icon: Gem,
    image: "/consultancy-services/industries/5.jpg",
  },
  {
    title: "Non-Profit Organisations",
    tag: "Donor oversight, funds flow, and governance safeguards",
    icon: HandHeart,
    image: "/consultancy-services/industries/6.jpg",
  },
];

function IndustryCard({ industry, index }) {
  const Icon = industry.icon;

  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-[0_18px_55px_rgba(13,13,20,0.06)]">
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
          <Icon className="size-10 text-white" strokeWidth={1.75} />
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

export default function ConsultancyIndustries() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;

    const card = track.firstElementChild;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 16;
    const index = Math.round(track.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), industries.length - 1));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;

    const card = track.firstElementChild;
    const cardWidth = card.getBoundingClientRect().width;
    track.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="consultancy-industries-heading"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Industries We Serve
            </p>
            <h2
              id="consultancy-industries-heading"
              className="text-section-heading max-w-2xl text-foreground"
            >
              Advisory for Regulated and High-Exposure Sectors
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              We support organisations where customer risk, transaction activity,
              and documentation must withstand close internal and regulatory
              scrutiny.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:hidden">
          <div
            ref={trackRef}
            className="industries-snap-track -mx-1 px-1"
            aria-label="Industries carousel"
          >
            {industries.map((industry, index) => (
              <div key={industry.title} className="relative min-h-[320px]">
                <IndustryCard industry={industry} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {industries.map((industry, index) => (
              <button
                key={industry.title}
                type="button"
                aria-label={`Go to ${industry.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "size-2 rounded-full transition",
                  activeIndex === index
                    ? "bg-primary scale-110"
                    : "bg-zinc-300 hover:bg-zinc-400"
                )}
              />
            ))}
          </div>
        </div>

        <StaggerContainer
          className="hidden gap-4 lg:grid lg:grid-cols-3"
          staggerChildren={0.06}
        >
          {industries.map((industry, index) => {
            return (
              <StaggerItem key={industry.title}>
                <IndustryCard industry={industry} index={index} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

