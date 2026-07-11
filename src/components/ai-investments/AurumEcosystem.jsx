"use client";

import { itemKey, listKey } from "@/lib/listKey";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const platforms = [
  {
    category: "Official Platform",
    title: "AURUM Foundation",
    description:
      "Direct access to AI trading bots, gold-backed investment packages, blockchain custody, and integrated digital finance.",
    highlights: [
      "EX AI & ZEUS Trading Bots",
      "Gold (XAU) Packages",
      "Web3 NeoBank",
      "Global Partner Network",
    ],
    href: "https://aurum-foundation.com/",
    external: true,
    image: "/ai-investment.webp",
  },
  {
    category: "Proteq Partnership",
    title: "Investor Information via Proteq",
    description:
      "Curated introductions, due diligence support, and compliance-aligned onboarding for qualified investors.",
    highlights: [
      "Curated investor access",
      "Due diligence support",
      "Compliance-aligned introduction",
      "Ongoing partnership guidance",
    ],
    href: "/contact",
    external: false,
    image: "/who-we-are.webp",
  },
];

function PlatformCard({
  category,
  title,
  description,
  highlights,
  href,
  image,
  external,
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_12px_40px_rgba(10,10,0,0.06)]">
      <div className="relative h-[200px] shrink-0 overflow-hidden sm:h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(20,8,0,0.45)]" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">
            {category}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-sm leading-relaxed text-zinc-600">{description}</p>

        <ul className="mt-5 flex-1 space-y-2.5 border-t border-zinc-200/80 pt-5">
          {highlights.map((item, index) => (
            <li
              key={listKey(item, index)}
              className="flex items-start gap-2.5 text-sm text-zinc-700"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-[var(--aurum-gold-muted)]"
                strokeWidth={2}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          {external ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurum-outline-dark inline-flex"
            >
              Visit AURUM Foundation
              <ArrowUpRight className="size-4" />
            </Link>
          ) : (
            <Link href={href} className="btn-aurum inline-flex">
              Request Investor Information
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AurumEcosystem() {
  return (
    <section className="section-aurum-light w-full py-16 md:py-20">
      <div className="container relative z-10">
        <div className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-2 lg:items-end">
          <ScrollReveal>
            <p className="aurum-section-label">Investor Access</p>
            <h2 className="text-section-heading max-w-xl text-foreground">
              How to Engage with AURUM
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12}>
            <p className="text-base leading-relaxed text-zinc-600">
              Proteq partners with AURUM Foundation to provide curated investor
              introductions and compliance-aligned onboarding — alongside direct
              access to the official platform.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid gap-6 lg:grid-cols-2"
          staggerChildren={0.06}
        >
          {platforms.map((platform, index) => (
            <StaggerItem key={itemKey(platform, index)} className="h-full">
              <PlatformCard {...platform} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
