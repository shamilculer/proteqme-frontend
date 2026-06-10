"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  "AI crypto trading bots",
  "Gold (XAU) investment packages",
  "Web3 NeoBank infrastructure",
  "Automated liquidity systems",
];

export default function AurumEcosystemIntro() {
  return (
    <section className="section-aurum w-full py-14 md:py-16">
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="aurum-section-label">Ecosystem</p>
              <h2 className="text-section-heading text-white">
                Unified Platform for AI, Gold &amp; Digital Banking
              </h2>
            </div>

            <div>
              <p className="aurum-text-muted text-base leading-relaxed">
                The AURUM Foundation ecosystem integrates artificial
                intelligence, blockchain technology, digital banking
                infrastructure, and gold-based investment solutions into a single
                institutional-grade fintech platform.
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {pillars.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.06)] px-3 py-2.5 text-sm text-white/90"
                  >
                    <span className="size-1.5 shrink-0 bg-[var(--aurum-gold-on-dark)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
