"use client";

import Image from "next/image";
import {
  Activity,
  FileCheck2,
  Info,
  SearchCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const focusAreas = [
  { label: "AML screening & sanctions", icon: SearchCheck },
  { label: "Transaction monitoring", icon: Activity },
  { label: "KYC & due diligence", icon: UserCheck },
  { label: "Regulatory reporting", icon: FileCheck2 },
];

export default function SystemsOverview() {
  return (
    <section
      className="section-light-white w-full border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="systems-overview-heading"
    >
      <div className="container">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Overview
            </p>
            <h2
              id="systems-overview-heading"
              className="text-section-heading max-w-xl text-foreground"
            >
              Systems Built for Modern Compliance Operations
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              Vendor-neutral RegTech advisory — evaluate, implement, and optimise
              compliance technology aligned to your regulatory obligations and
              operational scale.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal yOffset={20}>
          <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_32px_100px_rgba(13,13,20,0.07)] lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
              <div className="space-y-4 text-body text-zinc-600">
                <p>
                  We help organisations evaluate, implement, and optimise
                  compliance technology tailored to their regulatory obligations
                  and operational needs — from AML screening and transaction
                  monitoring to KYC onboarding and regulatory reporting.
                </p>
                <p>
                  Our advisory focuses on scalable systems that reduce risk,
                  improve efficiency, and support long-term compliance readiness
                  without locking you into vendor relationships that do not fit
                  your risk profile.
                </p>
                <p>
                  Every engagement starts with understanding your current stack,
                  control gaps, and workflow realities — then delivers clear
                  recommendations your team can implement and defend.
                </p>
              </div>

              <div
                className="mt-8 flex gap-4 rounded-xl border border-primary/15 border-l-[3px] border-l-primary bg-primary/5 p-5"
                role="note"
              >
                <Info
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div>
                  <p className="mb-1 text-sm font-bold text-primary">
                    Vendor Neutral
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    We do not take vendor commissions or reseller fees. Our
                    systems recommendations are based solely on your regulatory
                    obligations, operational scale, and risk profile — not on
                    commercial relationships with technology providers.
                  </p>
                </div>
              </div>

              <ul className="mt-8 grid gap-3 border-t border-zinc-200/80 pt-8 sm:grid-cols-2">
                {focusAreas.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="icon-ghost-pink flex size-9 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="size-4 text-primary" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 border-t border-zinc-200/80 pt-8 sm:flex-row sm:items-center">
                <Button href="/contact" glowingDot showArrow>
                  Request a Systems Assessment
                </Button>
                <Button href="#solution-areas" variant="secondary" showArrow>
                  Explore Solution Areas
                </Button>
              </div>
            </div>

            <div className="relative min-h-[300px] bg-zinc-100 sm:min-h-[380px] lg:min-h-full">
              <Image
                src="/systems.webp"
                alt="Compliance technology advisory and system evaluation"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
