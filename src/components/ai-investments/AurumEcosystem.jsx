"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const platforms = [
  {
    index: "01",
    category: "Aurum Foundation Platform",
    title: "Aurum Foundation",
    description:
      "Explore the official Aurum Foundation platform featuring AI trading bots, gold backed investment packages, blockchain powered security, and integrated digital finance solutions.",
    highlights: [
      "AI Trading Infrastructure",
      "Gold Backed Investment Tools",
      "Web3 Financial Ecosystem",
      "Digital Asset Management",
    ],
    buttonLabel: "Visit Aurum Foundation",
    href: "https://aurum-foundation.com/",
    external: true,
    image: "/aurum.webp",
    buttonVariant: "default",
  },
  {
    index: "02",
    category: "Advanced Investment Solutions",
    title: "AI Powered Investment Opportunities",
    description:
      "Learn more about Aurum’s expanding ecosystem of intelligent investment tools, automated trading technologies, and modern wealth management solutions.",
    highlights: [
      "Intelligent Market Analysis",
      "Automated Trading Systems",
      "Blockchain Transparency",
      "Future Ready Financial Tools",
    ],
    buttonLabel: "Speak to Our Experts",
    href: "/contact",
    image: "/hero-3.webp",
    buttonVariant: "secondary",
  },
];

function PlatformCard({
  index,
  category,
  title,
  description,
  highlights,
  buttonLabel,
  href,
  image,
  buttonVariant,
  external = false,
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_22px_70px_rgba(6,21,37,0.1)] ring-1 ring-zinc-200/80">
      <div className="relative h-[min(48vw,260px)] min-h-[220px] shrink-0 overflow-hidden sm:min-h-[240px] md:h-[260px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#061525] via-[#061525]/50 to-[#231143]/15" />

        <span
          className="pointer-events-none absolute -right-1 top-3 select-none text-[100px] font-semibold leading-none tracking-tighter text-white/[0.07]"
          aria-hidden
        >
          {index}
        </span>

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
          <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {category}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 md:px-6 md:pb-8">
          <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#E25C8F]">
            Platform {index}
          </span>
          <h3 className="max-w-[95%] text-2xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] md:text-[28px]">
            {title}
          </h3>
        </div>
      </div>

      <div className="relative z-10 -mt-6 flex flex-1 flex-col px-3 pb-3 md:-mt-7 md:px-4 md:pb-4">
        <div className="flex flex-1 flex-col rounded-[18px] bg-white p-5 ring-1 ring-zinc-100/90 shadow-[0_-10px_40px_rgba(6,21,37,0.08)] md:p-6">
          <div className="mb-4 h-px w-full bg-linear-to-r from-[#E25C8F] via-[#E25C8F]/40 to-transparent" />

          <p className="text-sm leading-relaxed text-zinc-600">{description}</p>

          <ul className="mt-5 space-y-3 rounded-xl border border-zinc-100 bg-linear-to-b from-zinc-50 to-white p-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-zinc-700"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E25C8F] text-white shadow-[0_4px_12px_rgba(226,92,143,0.35)]">
                  <Check className="size-3 stroke-[3]" aria-hidden />
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-1">
            <Button
              href={href}
              variant={buttonVariant}
              showArrow
              className="w-full sm:w-auto"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

const AurumEcosystem = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white via-[#fbfafd] to-[#f5f0f8] pb-22">
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#E25C8F]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#231143]/8 blur-[90px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(35,17,67,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative">
        <ScrollReveal className="mb-12 md:mb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Explore the Aurum Ecosystem
                </span>
              </div>

              <h2 className="text-3xl leading-tight text-[#231143] md:text-[44px]">
                Access the Platforms Powering Intelligent Investing
              </h2>
            </div>

            <p className="max-w-md border-l-2 border-[#E25C8F]/35 pl-6 text-sm leading-relaxed text-zinc-600 sm:text-base lg:max-w-sm">
              Discover the tools, technologies, and financial infrastructure behind
              the Aurum ecosystem. Explore AI powered trading solutions, digital
              asset services, and next generation financial tools designed for
              the future of modern investing.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-7 lg:grid-cols-2 lg:gap-8"
          staggerChildren={0.08}
        >
          {platforms.map((platform) => (
            <StaggerItem key={platform.title} className="h-full">
              <PlatformCard {...platform} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AurumEcosystem;
