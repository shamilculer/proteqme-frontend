"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AurumCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[420px] md:min-h-[480px]">
        <Image
          src="/ai-investment.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="aurum-cta-overlay absolute inset-0" aria-hidden />

        <div className="container relative z-10 flex min-h-[420px] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[480px]">
          <ScrollReveal className="max-w-3xl">
            <h2 className="aurum-heading-light mb-5">
              Join the AURUM Community
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/90 md:text-lg">
              Be part of a growing global network of investors and partners
              building the future of intelligent finance. Start your journey with
              AURUM Foundation today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://aurum-foundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aurum-white"
              >
                Join Now
              </Link>
              <Link href="/contact" className="btn-aurum-outline">
                Request Investor Information
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
