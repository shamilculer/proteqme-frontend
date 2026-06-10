"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, Coins, Landmark } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const tradingBots = [
  {
    name: "AURUM EX AI BOT",
    description:
      "Automated trading system analysing global crypto market data and executing trades via machine learning models — operating 24/7 without manual intervention.",
    href: "https://aurum-foundation.com/",
  },
  {
    name: "AURUM EX AI PRO",
    description:
      "Multi-strategy architecture with advanced risk calibration, capital allocation logic, and enhanced analytical modelling for scalable operations.",
    href: "https://aurum-foundation.com/",
  },
  {
    name: "AURUM ZEUS AI BOT",
    description:
      "Flexible AI-driven module using real-time analytics to identify and execute opportunities across volatile digital asset markets.",
    href: "https://aurum-foundation.com/",
  },
];

const goldBenefits = [
  {
    title: "Asset-Backed Stability",
    description:
      "Gold-linked assets designed to preserve value within a modern investment framework.",
  },
  {
    title: "Performance-Driven Returns",
    description:
      "Hybrid model combining gold exposure with active strategies for long-term growth potential.",
  },
  {
    title: "Flexible Digital Access",
    description:
      "Scalable digital access to gold investments for global, long-term participation.",
  },
];

const neobankFeatures = [
  "Unified management of digital assets, stablecoins, and fiat currencies",
  "Virtual and physical debit cards with Apple Pay and Google Pay",
  "Instant crypto-fiat conversion and withdrawal capabilities",
  "AI-powered portfolio insights within an integrated fintech ecosystem",
];

const brokerPartners = ["Binance", "Bybit", "KuCoin", "HTX"];

export default function AurumProducts() {
  return (
    <>
      <section className="section-aurum-light w-full py-16 md:py-20">
        <div className="container relative z-10">
          <ScrollReveal className="mb-12 max-w-2xl md:mb-14">
            <p className="aurum-section-label">Products</p>
            <h2 className="text-section-heading text-foreground">
              AI Crypto Trading Bots
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Algorithmic models and real-time data analysis for structured trade
              execution and disciplined capital management across global crypto
              markets.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="mb-8 grid gap-px border border-zinc-200 bg-zinc-200 md:grid-cols-3"
            staggerChildren={0.06}
          >
            {tradingBots.map((bot) => (
              <StaggerItem key={bot.name}>
                <article className="flex h-full flex-col bg-white p-6">
                  <div className="mb-4 flex size-9 items-center justify-center border border-[rgba(107,88,36,0.25)] bg-[rgba(107,88,36,0.08)]">
                    <Bot
                      className="size-4 text-[var(--aurum-gold-muted)]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {bot.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                    {bot.description}
                  </p>
                  <Link
                    href={bot.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-aurum-outline-dark mt-5 inline-flex"
                  >
                    Learn More
                    <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="aurum-corp-panel p-6 md:p-8">
            <h3 className="text-base font-semibold text-foreground">
              How AI Crypto Trading Bots Work
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Bots analyse market data, apply machine learning models, and execute
              trades based on predefined rules — supported by risk management
              systems and real-time data processing within the AURUM trading
              ecosystem.
            </p>
            <div className="mt-6 border-t border-zinc-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Official Broker Partners
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {brokerPartners.join(" · ")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-aurum w-full py-16 md:py-20">
        <div className="container relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal xOffset={-12}>
              <p className="aurum-section-label">Gold (XAU)</p>
              <h2 className="text-section-heading text-white">
                Tokenized Gold Investment
              </h2>
              <p className="aurum-text-muted mt-4 text-base leading-relaxed">
                Secure digital access to gold-based investments through AURUM Gold
                (XAU) Packages — combining physical gold exposure with modern
                investment strategies.
              </p>
              <Link
                href="https://aurum-foundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aurum mt-6 inline-flex"
              >
                Gold Packages
                <ArrowUpRight className="size-4" />
              </Link>
            </ScrollReveal>

            <StaggerContainer
              className="grid gap-px border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.22)]"
              staggerChildren={0.05}
            >
              {goldBenefits.map((item) => (
                <StaggerItem key={item.title}>
                  <article className="flex gap-4 bg-[var(--aurum-panel-elevated)] p-5">
                    <div className="flex size-9 shrink-0 items-center justify-center border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)]">
                      <Coins
                        className="size-4 text-[var(--aurum-gold-on-dark)]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="aurum-text-muted mt-1.5 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section-aurum-light w-full py-16 md:py-20">
        <div className="container relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal xOffset={-12}>
              <p className="aurum-section-label">NeoBank</p>
              <h2 className="text-section-heading text-foreground">
                Crypto-Fiat Banking Infrastructure
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Web3 NeoBank for managing, spending, and growing digital and fiat
                assets — built on AI and blockchain technology.
              </p>

              <ul className="mt-6 space-y-3 border-t border-zinc-200 pt-6">
                {neobankFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-700"
                  >
                    <span className="mt-2 size-1 shrink-0 bg-[var(--aurum-gold-muted)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="https://aurum-foundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aurum-outline-dark mt-7 inline-flex"
              >
                AURUM NeoBank
                <ArrowUpRight className="size-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal xOffset={12}>
              <div className="aurum-corp-panel border-[rgba(107,88,36,0.2)] bg-zinc-50 p-8 md:p-10">
                <div className="mb-5 flex size-10 items-center justify-center border border-[rgba(107,88,36,0.25)] bg-white">
                  <Landmark
                    className="size-5 text-[var(--aurum-gold-muted)]"
                    strokeWidth={1.75}
                  />
                </div>
                <p className="text-xl font-semibold leading-snug text-foreground">
                  Payments infrastructure for digital assets
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Debit cards, instant conversions, and global payment rails —
                  making digital assets practical for institutional and
                  professional use.
                </p>
                <Link href="/contact" className="btn-aurum mt-7 inline-flex">
                  Request Investor Information
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
