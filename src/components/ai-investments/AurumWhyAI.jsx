"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Brain,
  Coins,
  Globe2,
  Play,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const highlights = [
  {
    title: "AI-Driven Market Intelligence",
    description:
      "Advanced algorithms continuously analyse market trends, patterns, and signals to support faster and more informed investment decisions.",
    icon: Brain,
  },
  {
    title: "Blockchain-Powered Security",
    description:
      "Decentralised infrastructure enhances transparency, security, and trust across transactions and digital asset management.",
    icon: Shield,
  },
  {
    title: "Gold-Backed Stability",
    description:
      "Gold-linked investment structures provide an additional layer of stability alongside digital asset growth opportunities.",
    icon: Coins,
  },
  {
    title: "Integrated Financial Ecosystem",
    description:
      "Manage, grow, and access assets across fiat and crypto environments through a connected Web3 financial infrastructure.",
    icon: Globe2,
  },
  {
    title: "Smarter Risk Management",
    description:
      "AI systems help identify market behaviour, optimise strategies, and support better risk awareness in volatile environments.",
    icon: Activity,
  },
  {
    title: "The Future of Digital Finance",
    description:
      "AI, blockchain, and decentralised finance are reshaping how modern financial ecosystems operate, invest, and scale.",
    icon: Sparkles,
  },
];

export default function AurumWhyAI() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/ai-investment.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="aurum-cta-overlay absolute inset-0" aria-hidden />
      </div>

      <div className="container relative z-10 flex min-h-[720px] flex-col justify-between py-14 md:min-h-[820px] md:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <ScrollReveal className="max-w-2xl" xOffset={-12}>
            <div className="aurum-eyebrow mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span>Why AI Investments</span>
            </div>

            <div className="flex gap-4">
              <span className="mt-1.5 h-12 w-1 shrink-0 rounded-sm bg-white/80" />
              <div>
                <h2 className="text-section-heading text-white">
                  A New Era of Intelligent Financial Growth
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                  Artificial intelligence is transforming how individuals and
                  institutions analyse markets, manage risk, and identify
                  investment opportunities — combined with blockchain transparency
                  and gold-backed stability.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex shrink-0 justify-center lg:justify-end" xOffset={12}>
            <Link
              href="#aurum-intro"
              className="group flex flex-col items-center gap-3"
              aria-label="Watch Aurum video"
            >
              <span className="relative flex size-28 items-center justify-center rounded-full border border-aurum-brand/30 bg-aurum-brand/10 md:size-32">
                <span className="absolute inset-0 rounded-full border border-dashed border-aurum-brand/25 transition duration-700 group-hover:rotate-180" />
                <span className="flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-[0_8px_30px_rgba(0,59,73,0.35)] transition group-hover:scale-105 md:size-14">
                  <Play className="ml-0.5 size-5 fill-white md:size-6" />
                </span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                Watch our video
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-12 lg:-mb-6 md:mt-14">
          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.06}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <article className="aurum-panel flex h-full flex-col rounded-2xl p-6 md:p-7">
                    <span className="aurum-step-circle mb-4 size-11">
                      <Icon className="size-4 text-white" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-subheading mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
