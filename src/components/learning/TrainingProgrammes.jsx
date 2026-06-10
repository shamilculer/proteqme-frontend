"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const programmes = [
  {
    title: "AML & Financial Crime Training",
    description:
      "Practical training programmes covering AML, CFT, fraud prevention, and regulatory compliance for modern organisations and compliance teams.",
    image: "/consultancy-services/1.webp",
    highlights: [
      "AML & CFT fundamentals",
      "Financial crime risk awareness",
      "Real-world compliance scenarios",
    ],
  },
  {
    title: "Certification Preparation",
    description:
      "Structured learning paths designed to support professionals preparing for industry-recognised compliance and anti-fraud certifications.",
    image: "/consultancy-services/2.webp",
    highlights: [
      "CAFS preparation support",
      "Assessment-focused modules",
      "Expert-led learning sessions",
    ],
  },
  {
    title: "Corporate Compliance Training",
    description:
      "Custom training programmes tailored to your organisation's regulatory environment, operational workflows, and internal risk profile.",
    image: "/trainer.webp",
    highlights: [
      "Organisation-specific content",
      "Policy & procedure alignment",
      "Flexible delivery formats",
    ],
  },
  {
    title: "Webinar Learning Library",
    description:
      "On-demand webinar sessions designed for professionals seeking practical compliance insights, regulatory updates, and implementation guidance.",
    image: "/learning-5.webp",
    highlights: [
      "Pre-recorded expert webinars",
      "Practical implementation insights",
      "Multi-category learning tracks",
    ],
  },
  {
    title: "Team Upskilling & Workshops",
    description:
      "Interactive workshops and guided learning sessions that help teams strengthen operational awareness and compliance capabilities.",
    image: "/learning-3.webp",
    highlights: [
      "Interactive team workshops",
      "Scenario-based learning",
      "Compliance capability building",
    ],
  },
  {
    title: "AI, VARA & Digital Asset Education",
    description:
      "Specialised programmes focused on AI in finance, VARA frameworks, digital assets, and emerging regulatory technologies.",
    image: "/consultancy-services/5.webp",
    imageClass: "object-[center_28%]",
    highlights: [
      "VARA compliance insights",
      "AI & digital asset regulation",
      "Emerging risk education",
    ],
  },
];

function ProgrammeCard({
  index,
  title,
  description,
  image,
  highlights,
  imageClass = "",
}) {
  return (
    <article className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_22px_70px_rgba(6,21,37,0.14)] ring-1 ring-white/20 transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_90px_rgba(226,92,143,0.2)]">
      <div className="relative h-[min(52vw,280px)] min-h-[240px] shrink-0 overflow-hidden sm:min-h-[260px] md:h-[280px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 88vw"
          className={`object-cover transition duration-700 ease-out group-hover:scale-110 ${imageClass}`}
        />

        <div className="absolute inset-0 bg-[#061525]/10 transition duration-500 group-hover:bg-[#061525]/18" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-linear-to-t from-[#061525]/88 via-[#061525]/40 to-transparent transition duration-500 group-hover:from-[#061525]/92 group-hover:via-[#231143]/45" />
        <div className="absolute inset-0 bg-[#E25C8F]/0 mix-blend-multiply transition duration-500 group-hover:bg-[#E25C8F]/8" />

        <span
          className="pointer-events-none absolute -right-1 top-2 select-none text-[120px] font-semibold leading-none tracking-tighter text-white/[0.06] transition duration-500 group-hover:text-[#E25C8F]/20"
          aria-hidden
        >
          {index}
        </span>

        <div className="absolute inset-x-0 top-0 flex justify-end p-4 md:p-5">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white/90 backdrop-blur-md">
            {index}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-4 p-5 pb-10 md:px-6">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#E25C8F]">
            Programme {index}
          </span>
          <h3 className="max-w-[95%] text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="relative z-10 -mt-7 flex flex-1 flex-col px-3 pb-3 md:-mt-8 md:px-4 md:pb-4">
        <div className="flex flex-1 flex-col rounded-[18px] bg-white p-5 shadow-[0_-12px_40px_rgba(6,21,37,0.1)] ring-1 ring-zinc-100/90 md:p-6">
          <div className="mb-4 h-px w-full bg-linear-to-r from-[#E25C8F] via-[#E25C8F]/40 to-transparent" />

          <p className="text-sm leading-relaxed text-zinc-600">{description}</p>

          <ul className="mt-5 space-y-3 rounded-xl border border-zinc-100 bg-linear-to-b from-zinc-50 to-white p-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-zinc-700 transition duration-300 group-hover:translate-x-0.5"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E25C8F] text-white shadow-[0_4px_12px_rgba(226,92,143,0.35)]">
                  <Check className="size-3 stroke-[3]" aria-hidden />
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

const TrainingProgrammes = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;

    const card = track.firstElementChild;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;
    const index = Math.round(track.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), programmes.length - 1));
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
    track.scrollTo({ left: index * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      id="training-programmes"
      className="relative w-full overflow-hidden bg-proteq-dark py-18 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="container relative">
        <ScrollReveal className="mb-12 md:mb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  Training Programmes
                </span>
              </div>

              <h2 className="max-w-3xl text-white">
                A comprehensive portfolio for every professional
              </h2>
            </div>

            <p className="max-w-lg border-l border-white/25 pl-6 text-sm leading-relaxed text-white/85 sm:text-base lg:max-w-sm">
              From standardised certifications to fully customised corporate
              programmes — we design learning that fits your goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="lg:hidden">
          <div
            ref={trackRef}
            className="programmes-snap-track -mx-1 flex gap-6 px-1"
            aria-label="Training programmes carousel"
          >
            {programmes.map((programme, i) => (
              <div key={programme.title} className="h-full min-h-[520px]">
                <ProgrammeCard
                  index={String(i + 1).padStart(2, "0")}
                  {...programme}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {programmes.map((programme, index) => (
              <button
                key={programme.title}
                type="button"
                aria-label={`Go to ${programme.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "size-2 rounded-full transition",
                  activeIndex === index
                    ? "scale-110 bg-primary"
                    : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>

        <StaggerContainer
          className="hidden gap-6 sm:gap-7 lg:grid lg:grid-cols-3 lg:gap-8"
          staggerChildren={0.06}
        >
          {programmes.map((programme, i) => (
            <StaggerItem key={programme.title} className="h-full">
              <ProgrammeCard
                index={String(i + 1).padStart(2, "0")}
                {...programme}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TrainingProgrammes;
