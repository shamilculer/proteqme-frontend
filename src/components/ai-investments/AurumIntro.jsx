"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer from "./AurumVideoPlayer";

const AurumIntro = () => {
  return (
    <section
      id="aurum-intro"
      className="w-full bg-white py-18 md:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal xOffset={-16} yOffset={0}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Aurum Foundation
              </span>
            </div>

            <h2 className="max-w-xl text-3xl leading-tight text-[#231143] md:text-[44px]">
            AI Investments with Aurum Foundation
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                Aurum Foundation is a comprehensive financial ecosystem that
                combines AI driven intelligence with blockchain powered security.
                Unlike traditional investment platforms, Aurum provides access to
                both fiat and crypto assets in a single secure environment,
                enabling users to manage wealth, execute payments, and optimise
                liquidity across asset classes.
              </p>
              <p>
                The platform&apos;s core offerings include AI powered trading bots
                (EX-AI Bot), neural network investment tools (Neyro), gold
                (XAU) backed investment packages, and a neobank for Web3 financial
                services. Aurum operates at the intersection of decentralised
                finance and traditional wealth management.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" showArrow glowingDot>
                Book a Free Demo
              </Button>
              <Button href="/contact" variant="secondary" showArrow>
                Speak With Our Team
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={16} yOffset={0}>
            <AurumVideoPlayer />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AurumIntro;
