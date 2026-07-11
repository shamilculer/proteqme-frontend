"use client";

import { itemKey, listKey } from "@/lib/listKey";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const features = [
  {
    eyebrow: "AI Liquidity",
    title: "Autonomous Trading Bots for Capital Growth",
    description:
      "AURUM AI-driven trading bots scan financial markets, detect investment opportunities, and dynamically adjust strategies to optimise performance while minimising risk.",
    cta: "EX AI Bot",
    href: "https://aurum-foundation.com/",
    image: "/ai-investment.webp",
    imageAlt: "AI-driven trading dashboard and market analytics",
  },
  {
    eyebrow: "Gold (XAU)",
    title: "Structured Access to Gold-Linked Assets",
    description:
      "AURUM Gold (XAU) Packages provide structured access to gold-linked assets — combining long-term value stability with performance-oriented strategies.",
    cta: "Gold Packages",
    href: "https://aurum-foundation.com/",
    image: "/aurum/aurum.webp",
    imageAlt: "Gold-backed digital investment concept",
    reverse: true,
  },
  {
    eyebrow: "NeoBank",
    title: "Crypto-Fiat Payment Infrastructure",
    description:
      "The AURUM NeoBank enables seamless management of crypto and fiat assets — debit cards, instant conversions, and Apple Pay / Google Pay for global payments.",
    cta: "NeoBank",
    href: "https://aurum-foundation.com/",
    image: "/aurum/aurum-2.webp",
    imageAlt: "Digital banking and crypto-fiat payments",
  },
  {
    eyebrow: "AI Assistance",
    title: "24/7 Autonomous Financial Agents",
    description:
      "Autonomous AI agents deliver portfolio insights, risk assessment, and investor education — operating continuously within the AURUM ecosystem.",
    cta: "Request Investor Information",
    href: "/contact",
    image: "/who-we-are.webp",
    imageAlt: "Professional financial advisory session",
    reverse: true,
    internal: true,
  },
];

const tradingBots = [
  {
    name: "AURUM EX AI BOT",
    description:
      "Automated trading via machine learning models — operating 24/7 across global crypto markets.",
    href: "https://aurum-foundation.com/",
  },
  {
    name: "AURUM EX AI PRO",
    description:
      "Multi-strategy architecture with advanced risk calibration and capital allocation logic.",
    href: "https://aurum-foundation.com/",
  },
  {
    name: "AURUM ZEUS AI BOT",
    description:
      "Real-time analytics module for volatile digital asset market environments.",
    href: "https://aurum-foundation.com/",
  },
];

const brokerPartners = ["Binance", "Bybit", "KuCoin", "HTX"];

function FeatureRow({
  eyebrow,
  title,
  description,
  cta,
  href,
  image,
  imageAlt,
  reverse,
  internal,
}) {
  return (
    <div
      className={`grid items-center gap-10 border-t border-zinc-200/80 pt-12 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ScrollReveal xOffset={reverse ? 12 : -12}>
        <p className="aurum-section-label mb-3">{eyebrow}</p>
        <h3 className="text-xl font-semibold leading-snug text-foreground md:text-2xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          {description}
        </p>
        {internal ? (
          <Link href={href} className="btn-aurum mt-6 inline-flex">
            {cta}
          </Link>
        ) : (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aurum-outline-dark mt-6 inline-flex"
          >
            {cta}
            <ArrowUpRight className="size-4" />
          </Link>
        )}
      </ScrollReveal>

      <ScrollReveal xOffset={reverse ? -12 : 12}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_16px_48px_rgba(10,10,0,0.08)]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(20,8,0,0.35)] via-transparent to-transparent" />
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function AurumPlatformFeatures() {
  return (
    <section className="section-aurum-light w-full py-16 md:py-20">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 max-w-2xl md:mb-14">
          <p className="aurum-section-label">Capabilities & Products</p>
          <h2 className="text-section-heading text-foreground">
            Core Platform Capabilities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Structured investment, payment, and liquidity tools within a single
            institutional-grade digital asset platform.
          </p>
        </ScrollReveal>

        <div className="space-y-12 md:space-y-14">
          {features.map((feature, index) => (
            <FeatureRow key={itemKey(feature, index, ["eyebrow", "title"])} {...feature} />
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-200/80 pt-14 md:mt-20">
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="aurum-section-label">Trading Bots</p>
            <h3 className="text-2xl font-semibold text-foreground">
              AI Crypto Trading Bots
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              Algorithmic models and real-time data analysis for disciplined
              capital management across global cryptocurrency markets.
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="mb-8 grid gap-5 md:grid-cols-3"
            staggerChildren={0.06}
          >
            {tradingBots.map((bot, index) => (
              <StaggerItem key={itemKey(bot, index, ["name", "title"])}>
                <article className="aurum-corp-panel flex h-full flex-col rounded-2xl p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-[rgba(107,88,36,0.25)] bg-[rgba(107,88,36,0.08)]">
                    <Bot
                      className="size-5 text-[var(--aurum-gold-muted)]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">
                    {bot.name}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
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

          <ScrollReveal className="aurum-corp-panel rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Official Broker Partners
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              {brokerPartners.join(" · ")}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
