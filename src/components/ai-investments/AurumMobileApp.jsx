"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AurumMobileApp() {
  return (
    <section className="section-aurum-light w-full py-16 md:py-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal xOffset={-12}>
            <h2 className="aurum-heading">
              A Mobile App for a New Generation of Investors
            </h2>
            <p className="aurum-body mt-5">
              Manage your entire AURUM portfolio from anywhere. The mobile app
              gives you real-time access to AI trading performance, gold-backed
              holdings, and NeoBank payment tools — all in one secure interface.
            </p>
            <p className="aurum-body mt-4">
              Track investments, convert assets instantly, and spend globally with
              your AURUM debit card. Integrated with Apple Pay and Google Pay for
              frictionless payments wherever you are.
            </p>
            <p className="aurum-body mt-4">
              Receive AI-powered portfolio insights and automated alerts so you
              stay informed and in control — 24 hours a day, seven days a week.
            </p>
            <Link
              href="https://aurum-foundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurum mt-8 inline-flex"
            >
              Download App
            </Link>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border-8 border-zinc-900 bg-zinc-900 shadow-[0_30px_80px_rgba(0,59,73,0.2)]">
                <Image
                  src="/aurum/aurum-2.webp"
                  alt="AURUM mobile app interface"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#003b49]/80 via-[#003b49]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    AURUM NeoBank
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Your digital assets, everywhere
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
