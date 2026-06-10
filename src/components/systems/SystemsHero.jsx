"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import HeroOverlays from "@/components/global/HeroOverlays";
import { Button } from "@/components/ui/button";

const highlights = [
  "AML Screening Solutions",
  "Transaction Monitoring",
  "KYC & Due Diligence",
  "Vendor-Neutral Advisory",
];

const partners = [
  { name: "Chainalysis", logo: "/partners/chainalysis.png" },
  { name: "Sumsub", logo: "/partners/sumsub (1).png" },
  { name: "Elliptic", logo: "/partners/elliptinc.png" },
  { name: "OSL", logo: "/partners/osl.png" },
];

export default function SystemsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-proteq-dark text-white">
      <div className="hero-home-pattern absolute inset-0">
        <Image
          src="/systems-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <HeroOverlays />
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                RegTech Systems
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[56px]">
              Unified RegTech Advisory Proven to Fit Your Risk Profile
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 md:text-lg">
              Cut vendor noise, false positives, and implementation risk with
              vendor-neutral systems guidance trusted by regulated teams across
              banking, payments, and digital assets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                glowingDot
                showArrow
                className="h-13 px-7 text-sm font-semibold"
              >
                Request a Systems Assessment
              </Button>
              <Button
                href="#solution-areas"
                variant="outline"
                showArrow
                className="h-13 border-white/25 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore Solution Areas
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 rounded-[24px] bg-primary/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0D0D14]/80 p-2 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl">
                <Image
                  src="/systems.webp"
                  alt="RegTech compliance software dashboard"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#061525]/80 via-transparent to-transparent" />
              </div>

              <div className="grid grid-cols-3 gap-2 p-3">
                {[
                  { label: "Screening", value: "PEP & Sanctions" },
                  { label: "Monitoring", value: "Typology-led" },
                  { label: "Advisory", value: "Vendor-neutral" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-white/85">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 md:mt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Technology partners we evaluate & implement
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80 grayscale">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={40}
                className="h-8 w-auto object-contain md:h-9"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
