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
    title: "AI Driven Market Intelligence",
    description:
      "Advanced algorithms continuously analyse market trends, patterns, and signals to support faster and more informed investment decisions.",
    icon: Brain,
  },
  {
    title: "Blockchain Powered Security",
    description:
      "Decentralised infrastructure enhances transparency, security, and trust across transactions and digital asset management.",
    icon: Shield,
  },
  {
    title: "Gold Backed Stability",
    description:
      "Gold linked investment structures provide an additional layer of stability alongside digital asset growth opportunities.",
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
      "AI powered systems help identify market behaviour, optimise strategies, and support better risk awareness in volatile environments.",
    icon: Activity,
  },
  {
    title: "The Future of Digital Finance",
    description:
      "AI, blockchain, and decentralised finance are reshaping how modern financial ecosystems operate, invest, and scale.",
    icon: Sparkles,
  },
];

const AurumWhyAI = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/consulting-intro.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#061525]/92 via-[#061525]/78 to-[#061525]/55" />
        <div className="absolute inset-0 bg-linear-to-t from-[#061525]/95 via-[#061525]/40 to-[#061525]/25" />
      </div>

      <div className="container relative z-10 flex min-h-[720px] flex-col justify-between py-14 md:min-h-[820px] md:py-18 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <ScrollReveal className="max-w-2xl" xOffset={-12} yOffset={0}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-[#E25C8F]">✱</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Why AI Investments
              </span>
            </div>

            <div className="flex gap-4">
              <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-[#E25C8F]" />
              <div>
                <h2 className="text-3xl leading-tight text-white md:text-[44px] lg:text-[48px]">
                  A New Era of Intelligent Financial Growth
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                  Artificial intelligence is transforming how individuals and
                  institutions analyse markets, manage risk, and identify
                  investment opportunities. Combined with blockchain transparency
                  and gold backed stability, AI driven investment ecosystems
                  offer a more adaptive and data informed approach to modern
                  wealth building.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="flex shrink-0 justify-center lg:justify-end"
            xOffset={12}
            yOffset={0}
          >
            <Link
              href="#aurum-intro"
              className="group flex flex-col items-center gap-3"
              aria-label="Watch our video"
            >
              <span className="relative flex size-28 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:border-[#E25C8F]/50 hover:bg-white/15 md:size-32">
                <span className="absolute inset-0 rounded-full border border-dashed border-white/25 transition duration-700 group-hover:rotate-180 group-hover:border-[#E25C8F]/40" />
                <span className="flex size-12 items-center justify-center rounded-full bg-[#E25C8F] text-white shadow-[0_8px_30px_rgba(226,92,143,0.45)] transition group-hover:scale-105 md:size-14">
                  <Play className="ml-0.5 size-5 fill-white md:size-6" />
                </span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Watch our video
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-12 md:mt-14 lg:-mb-6">
          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren={0.06}
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title}>
                  <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(6,21,37,0.2)] md:p-7">
                    <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-[#E25C8F] text-white">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>

                    <h3 className="text-lg font-semibold leading-snug text-[#231143]">
                      {item.title}
                    </h3>

                    <div className="my-4 h-px w-full bg-zinc-100" />

                    <p className="text-sm leading-relaxed text-zinc-600">
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
};

export default AurumWhyAI;
