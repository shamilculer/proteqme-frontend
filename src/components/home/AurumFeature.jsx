"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollReveal } from "../ui/scroll-reveal";

const AurumFeature = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden border-t border-zinc-200/60">
      {/* Subtle Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #231143 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Unconstrained Image Frame */}
          <ScrollReveal className="w-full lg:w-[46%] relative flex justify-center" xOffset={-16} yOffset={0}>
            <div className="w-full flex items-center justify-center">
              <Image 
                src="/aurum.webp"
                alt="Aurum AI Investment Platform"
                width={720}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Right Side: Copy, Split-Features List, & CTA */}
          <ScrollReveal className="w-full lg:w-[54%] flex flex-col items-center lg:items-start text-center lg:text-left" xOffset={16} yOffset={0}>
            {/* Upper Badge */}
                        <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">Investment Platform</span>
            </div>

            {/* Headline */}
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#231143] mb-4 max-w-xl">
              AI Investments with Aurum
            </h2>

            {/* Description */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Explore the intersection of artificial intelligence and wealth building. Aurum Foundation combines AI driven trading intelligence with blockchain powered security to offer a new approach to financial growth and capital protection.
            </p>

            {/* Styled Element: Divide-y Features List */}
            <div className="w-full border-t border-b border-zinc-150 divide-y divide-zinc-150 mb-8 text-left">
              {/* Highlight 1 */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-[#E25C8F] uppercase block mb-1">
                    01 / Algorithmic Intelligence
                  </span>
                  <h4 className="font-bold text-[#231143] text-base">AI Trading Engine</h4>
                </div>
                <p className="text-zinc-500 text-xs sm:text-sm max-w-sm sm:text-right leading-relaxed">
                  Analyzes multi-market datasets in real time to capture high-probability arbitrage opportunities.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-[#231143] uppercase block mb-1">
                    02 / Capital Protection
                  </span>
                  <h4 className="font-bold text-[#231143] text-base">Secured Vault Protocol</h4>
                </div>
                <p className="text-zinc-500 text-xs sm:text-sm max-w-sm sm:text-right leading-relaxed">
                  Utilizes decentralized custody and audited smart contracts to protect foundational capital.
                </p>
              </div>
            </div>

            {/* CTA Button linking to /ai-investments */}
            <div className="w-full sm:w-auto flex justify-center lg:justify-start">
              <Button
                href="/ai-investments"
                showArrow
                arrowDirection="right"
                className="w-full sm:w-auto"
              >
                Discover Aurum
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AurumFeature;
