"use client";

import Image from "next/image";
import { FileCheck, KeyRound, Lock } from "lucide-react";
import { ScrollReveal } from "../ui/scroll-reveal";

const protections = [
  {
    icon: Lock,
    title: "Multi-Signature Vault Custody",
    description:
      "Investor capital is held in decentralised vaults requiring multiple authorised signatures for any outbound transfer.",
  },
  {
    icon: FileCheck,
    title: "Audited Smart Contracts",
    description:
      "Custody and allocation contracts undergo independent security audits. Reports are available to qualified investors on request.",
  },
  {
    icon: KeyRound,
    title: "Segregated Investor Accounts",
    description:
      "Each investor's capital is segregated with full audit trail visibility and transparent withdrawal processing timelines.",
  },
];

export default function AurumCapitalProtection() {
  return (
    <section className="section-aurum-light w-full py-16 md:py-20">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal xOffset={-12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_16px_48px_rgba(10,10,0,0.08)] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/aurum/aurum.webp"
                alt="Secure vault and custody infrastructure"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(20,8,0,0.3)]" />
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={12}>
            <p className="aurum-section-label">Capital Protection</p>
            <h2 className="text-section-heading text-foreground">
              Vault Protocol
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600">
              AURUM&apos;s vault protocol protects investor capital at every stage
              — from deposit through allocation, trading, and withdrawal. Custody
              is built on blockchain-verified controls rather than opaque internal
              ledgers.
            </p>

            <div className="mt-8 space-y-4">
              {protections.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-zinc-200/80 bg-white p-5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[rgba(107,88,36,0.25)] bg-[rgba(107,88,36,0.08)]">
                      <Icon
                        className="size-5 text-[var(--aurum-gold-muted)]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
