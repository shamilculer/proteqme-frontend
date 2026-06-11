"use client";

import Image from "next/image";
import {
  Activity,
  FileCheck2,
  SearchCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";

const systemsFocusAreas = [
  { label: "AML screening & sanctions", icon: SearchCheck },
  { label: "Transaction monitoring", icon: Activity },
  { label: "KYC & due diligence", icon: UserCheck },
  { label: "Regulatory reporting", icon: FileCheck2 },
];

export default function SystemsOverview() {
  return (
    <SectionReveal className="w-full overflow-hidden border-b border-zinc-200/70 bg-[#f6f4f8] py-18 md:py-24">
      <div className="container">
        <div className="relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-18">
          <ScrollReveal xOffset={-16} className="relative z-10">
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Overview
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl md:text-[46px]">
                Systems Built for Modern Compliance Operations
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                <p>
                  We help organisations evaluate, implement, and optimise
                  compliance technology tailored to their regulatory obligations
                  and operational needs — from AML screening and transaction
                  monitoring to KYC onboarding and regulatory reporting.
                </p>
                <p>
                  Our advisory focuses on scalable systems that reduce risk,
                  improve efficiency, and support long-term compliance readiness.
                  Recommendations are shaped around your risk exposure, current
                  stack, team workflows, and regulatory duties — not vendor
                  incentives.
                </p>
                <p>
                  Every engagement starts with understanding your control gaps and
                  workflow realities, then delivers clear, defensible guidance
                  your team can implement with confidence.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-5">
                <Button href="/contact" showArrow>
                  Request a Systems Assessment
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={16} delay={0.08} className="relative min-h-0 lg:min-h-[600px]">
            <div className="absolute left-0 top-10 hidden h-[78%] w-px bg-[#231143]/15 lg:block" />
            <div className="absolute left-0 top-10 hidden h-24 w-px bg-[#E25C8F] lg:block" />

            <div className="relative ml-0 h-full lg:ml-10">
              <div className="relative h-[260px] overflow-hidden rounded-[14px] rounded-tl-[28px] rounded-br-[28px] bg-[#231143] shadow-[0_32px_90px_rgba(35,17,67,0.18)] sm:h-[360px] md:h-[520px] md:rounded-[12px] md:rounded-tl-[42px] md:rounded-br-[42px] lg:h-[620px]">
                <Image
                  src="/system-provider.webp"
                  alt="Compliance technology advisory and system evaluation"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-8 top-8 h-px bg-white/35" />
                <div className="absolute inset-y-8 right-8 w-px bg-white/25" />
              </div>

              <div className="relative mt-6 w-full border border-zinc-200 bg-white p-5 shadow-[0_22px_60px_rgba(35,17,67,0.14)] lg:absolute lg:-left-8 lg:bottom-10 lg:mt-0 lg:w-[min(92%,520px)]">
                <div className="grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
                  <div className="border-r border-zinc-200 pr-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Systems coverage
                    </p>
                    <p className="mt-2 text-xl font-medium leading-tight text-[#231143]">
                      Screening, monitoring, KYC, reporting.
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {systemsFocusAreas.map(({ label, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center bg-[#231143]/5 text-[#231143]">
                          <Icon className="size-4" />
                        </span>
                        <span className="text-sm font-medium text-zinc-800">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-12 hidden w-52 border border-white/20 bg-[#231143] p-5 text-white shadow-[0_20px_55px_rgba(18,8,35,0.25)] md:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
                  Principle
                </p>
                <p className="mt-2 text-lg font-medium leading-tight">
                  Vendor-neutral, obligation-led, ready to implement.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
