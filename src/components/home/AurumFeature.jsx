"use client";

import { itemKey, listKey } from "@/lib/listKey";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Coins,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const offerings = [
  {
    icon: Bot,
    title: "AI Trading Bots",
    description:
      "EX AI, EX AI PRO, and ZEUS — automated market intelligence for high-probability opportunities.",
  },
  {
    icon: Coins,
    title: "Tokenised Gold (XAU)",
    description:
      "Gold-backed investment packages combining stability with digital asset growth.",
  },
  {
    icon: ShieldCheck,
    title: "Vault Protocol",
    description:
      "Blockchain-powered custody and audited smart contracts protecting investor capital.",
  },
  {
    icon: Landmark,
    title: "Aurum NeoBank",
    description:
      "Integrated fiat and crypto payments — bridging traditional and decentralised finance.",
  },
];

const stats = [
  { value: "$30M+", label: "Assets Managed" },
  { value: "18,000+", label: "Active Partners" },
  { value: "5+", label: "Tech Products" },
];

const AurumFeature = () => {
  return (
    <section
      className="section-aurum-home relative w-full overflow-hidden py-12 md:py-16"
      aria-labelledby="aurum-heading"
    >
      <div
        className="aurum-home-bg absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/aurum/aurum-2.webp')" }}
        aria-hidden
      />
      <div className="aurum-home-overlay absolute inset-0 z-[1]" aria-hidden />

      <div className="container relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <ScrollReveal>
            <div className="aurum-home-eyebrow mb-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9a84c]/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9a84c]" />
              </span>
              <span>Aurum Foundation</span>
            </div>

            <h2
              id="aurum-heading"
              className="text-section-heading mb-4 max-w-lg text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
            >
              AI Investments — A Distinct Proposition
            </h2>

            <p className="mb-6 max-w-lg text-sm leading-[1.7] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-[15px]">
              Separate from Proteq&apos;s compliance advisory, learning, and
              systems work — Aurum Foundation combines AI-driven trading,
              gold-backed investments, and blockchain-secured custody in one
              secure fintech ecosystem for modern wealth management.
            </p>

            <ul className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
              {stats.map((stat, index) => (
                <li
                  key={itemKey(stat, index)}
                  className={
                    index > 0
                      ? "sm:border-l sm:border-white/25 sm:pl-6 md:pl-7"
                      : ""
                  }
                >
                  <p className="aurum-home-stat-value text-xl md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-aurum-home w-full sm:w-auto">
                Request Investor Information
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/ai-investments"
                className="btn-aurum-home-outline w-full sm:w-auto"
              >
                Explore AI Investments
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={12} delay={0.06}>
            <div className="aurum-home-offerings-panel">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#c9a84c]/35" aria-hidden />
                <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                  Platform Offerings
                </p>
                <span className="h-px flex-1 bg-[#c9a84c]/35" aria-hidden />
              </div>

              <StaggerContainer
                className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0"
                staggerChildren={0.05}
              >
                {offerings.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={itemKey(item, index)}>
                      <article
                        className={`flex h-full flex-col px-4 py-4 sm:px-5 sm:py-5 ${
                          index >= 2 ? "sm:border-t sm:border-white/10" : ""
                        }`}
                      >
                        <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-[#c9a84c]/45 bg-[#c9a84c]/10">
                          <Icon
                            className="size-4 text-[#c9a84c]"
                            strokeWidth={1.75}
                          />
                        </div>
                        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                          {item.title}
                        </h3>
                        <p className="text-[13px] leading-[1.6] text-white/90">
                          {item.description}
                        </p>
                      </article>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AurumFeature;
