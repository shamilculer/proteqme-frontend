"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { Bot, Coins, Landmark } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const ecosystemPillars = [
  {
    label: "AI Trading Bots",
    title: "24/7 Liquidity Optimisation",
    description:
      "Autonomous bots scan global markets, detect opportunities, and adjust strategies using machine learning — minimising risk while pursuing capital growth.",
    icon: Bot,
  },
  {
    label: "Gold (XAU)",
    title: "Tokenised Gold Packages",
    description:
      "Structured access to gold-linked assets within a modern digital framework — combining long-term value stability with performance-oriented strategies.",
    icon: Coins,
  },
  {
    label: "NeoBank",
    title: "Crypto-Fiat Payments",
    description:
      "Virtual and physical debit cards, instant conversions, and Apple Pay / Google Pay integration — making digital assets practical for everyday use.",
    icon: Landmark,
  },
];

const stats = [
  { value: "$30M+", label: "Assets Under Management" },
  { value: "18,000+", label: "Active Partners Worldwide" },
  { value: "5+", label: "Innovative Tech Products" },
  { value: "24/7", label: "AI-Powered Assistance" },
];

export default function AurumInvestmentPerformance() {
  return (
    <section className="section-aurum-alt w-full py-20 md:py-28">
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <div className="aurum-eyebrow mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span>Aurum Ecosystem</span>
            </div>
            <h2 className="text-section-heading max-w-xl text-white">
              Empowering the Future of Finance
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-white/70">
              Measurable growth through AI infrastructure, structured capital
              strategies, and scalable financial technology across dynamic
              markets.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mb-10 grid gap-5 md:grid-cols-3 lg:mb-12"
          staggerChildren={0.07}
        >
          {ecosystemPillars.map((card, index) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={itemKey(card, index)}>
                <article className="aurum-panel flex h-full flex-col rounded-2xl p-7">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-md border border-white/20 bg-white/10">
                    <Icon className="size-5 text-white" strokeWidth={1.75} />
                  </div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                    {card.label}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {card.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal direction="left">
          <ul className="grid grid-cols-2 divide-y divide-white/10 rounded-lg border border-white/15 bg-white/5 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((stat, index) => (
              <li key={itemKey(stat, index)} className="px-5 py-8 text-center md:py-9">
                <p className="aurum-stat-value text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium text-white/55 md:text-sm">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
