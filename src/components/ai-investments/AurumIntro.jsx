"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer, { AURUM_VIDEO_IDS } from "./AurumVideoPlayer";

export default function AurumIntro() {
  return (
    <section
      id="aurum-intro"
      className="w-full overflow-hidden bg-[#f6f4f8] py-12 md:py-16"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
          <ScrollReveal className="relative z-10 lg:max-w-xl lg:py-4 xl:max-w-none">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Aurum Introduction
              </span>
            </div>

            <h2 className="max-w-xl text-3xl md:text-[42px] md:leading-[1.12] xl:text-[46px]">
              A Comprehensive Financial Ecosystem
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
              <p>
                Aurum Foundation is a comprehensive financial ecosystem that
                combines AI driven intelligence with blockchain powered security.
                Unlike traditional investment platforms, Aurum provides access to
                both fiat and crypto assets in a single secure environment,
                enabling users to manage wealth, execute payments, and optimise
                liquidity across asset classes.
              </p>
              <p>
                The platform&apos;s core offerings include AI powered trading
                bots (EX-AI Bot), neural network investment tools (Neyro), gold
                (XAU) backed investment packages, and a neobank for Web3
                financial services. Aurum operates at the intersection of
                decentralised finance and traditional wealth management.
              </p>
            </div>

            <div className="mt-7">
              <Button
                href="https://aurum-foundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                showArrow
                glowingDot
              >
                Explore Aurum Foundation
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="relative w-full">
            <div className="absolute left-0 top-8 hidden h-[72%] w-px bg-[#231143]/15 lg:block" />
            <div className="absolute left-0 top-8 hidden h-20 w-px bg-[#E25C8F] lg:block" />

            <div className="relative lg:pl-8">
              <div className="relative overflow-hidden rounded-[14px] rounded-tl-[28px] rounded-br-[28px] bg-[#231143] shadow-[0_32px_90px_rgba(35,17,67,0.18)] md:rounded-[12px] md:rounded-tl-[42px] md:rounded-br-[42px]">
                <AurumVideoPlayer
                  videoId={AURUM_VIDEO_IDS.overview}
                  playLabel="Play AURUM Foundation overview"
                  className="aspect-video w-full border-0 shadow-none md:min-h-[340px] lg:min-h-[380px] xl:min-h-[420px]"
                />
                <div className="pointer-events-none absolute inset-x-8 top-8 z-10 h-px bg-white/35" />
                <div className="pointer-events-none absolute inset-y-8 right-8 z-10 w-px bg-white/25" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
