"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer from "./AurumVideoPlayer";

const empowerPoints = [
  "AI crypto trading bots for autonomous market intelligence",
  "Gold (XAU) investment packages with digital access",
  "Web3 NeoBank for crypto-fiat payments worldwide",
  "Automated liquidity systems operating 24/7",
  "Blockchain-powered security and transparent custody",
  "Regulatory-aligned frameworks for global investors",
];

export default function AurumIntro() {
  return (
    <section id="aurum-intro" className="section-aurum-light w-full py-16 md:py-20">
      <div className="container">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="aurum-heading">What is AURUM Foundation?</h2>
              <p className="aurum-body mt-5">
                AURUM Foundation is more than just another fintech platform; it
                is a comprehensive financial ecosystem that combines AI-driven
                intelligence with blockchain-powered security. Unlike traditional
                banks, AURUM provides direct access to both fiat and crypto assets
                in one secure hub, ensuring that users can manage wealth, make
                payments, and optimize liquidity seamlessly.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <AurumVideoPlayer playLabel="Play AURUM Foundation overview" />
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="aurum-body">
                Driven by Artificial Intelligence, AURUM continuously analyzes
                financial markets to maximize investment opportunities and
                minimize risk. Blockchain technology ensures transparency,
                immutability, and decentralization, giving users true ownership
                of their money.
              </p>
              <p className="aurum-body mt-4">
                Whether managing a portfolio, paying globally with a crypto debit
                card, or accessing instant liquidity, AURUM transforms complex
                financial processes into simple, accessible, and secure solutions
                for both individuals and enterprises.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="aurum-subheading mt-8">
                AURUM: Empowering the Future
              </h3>
              <ul className="mt-4 space-y-2.5">
                {empowerPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-600 md:text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#003b49]" />
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal xOffset={12} delay={0.06} className="min-h-[320px] lg:min-h-0">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,59,73,0.15)] lg:sticky lg:top-24 lg:min-h-[480px]">
              <Image
                src="/aurum/aurum.webp"
                alt="AURUM Foundation — intelligent finance made simple"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="aurum-section-cta" delay={0.12}>
          <Link
            href="https://aurum-foundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aurum"
          >
            Learn More
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
