"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const stats = [
  {
    value: "$30 Million+",
    label: "Assets Under Management",
    description:
      "Operates at scale within complex financial environments through AI-driven analytics, disciplined capital allocation, and advanced risk management.",
  },
  {
    value: "18,000+",
    label: "Active Partners Worldwide",
    description:
      "A growing global partner network strengthening liquidity, innovation, and trusted adoption across international markets.",
  },
  {
    value: "5+",
    label: "Technology Products",
    description:
      "AI trading bots, Web3 NeoBank, and gold-linked investment products designed for institutional and professional investors.",
  },
];

export default function AurumEmpoweringStats() {
  return (
    <section className="section-aurum-alt w-full py-16 md:py-20">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 max-w-2xl md:mb-14">
          <p className="aurum-section-label">Performance</p>
          <h2 className="text-section-heading text-white">
            Institutional Scale &amp; Reach
          </h2>
          <p className="aurum-text-muted mt-4 text-base leading-relaxed">
            Measurable growth through AI-powered infrastructure, structured
            capital strategies, and scalable financial technology.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-px border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.22)] md:grid-cols-3"
          staggerChildren={0.06}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <article className="flex h-full flex-col bg-[var(--aurum-panel-elevated-alt)] p-7 md:p-8">
                <p className="aurum-stat-value text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider aurum-text-subtle">
                  {stat.label}
                </p>
                <p className="aurum-text-muted mt-4 flex-1 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-10 flex flex-wrap items-center gap-3" yOffset={12}>
          <Link href="/contact" className="btn-aurum">
            Request Investor Information
          </Link>
          <Link
            href="https://aurum-foundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aurum-outline inline-flex"
          >
            Visit AURUM Foundation
            <ArrowUpRight className="size-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
