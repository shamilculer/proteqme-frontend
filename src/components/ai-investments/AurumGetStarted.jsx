"use client";

import { itemKey, listKey } from "@/lib/listKey";
import Link from "next/link";
import { BarChart3, FileCheck, UserPlus } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    icon: UserPlus,
    title: "Create an Account",
    body: "Register on the AURUM platform to access AI trading bots, gold packages, and NeoBank services in one secure environment.",
  },
  {
    icon: FileCheck,
    title: "Verify Your Identity",
    body: "Complete KYC verification to meet regulatory requirements and unlock full platform features for investing and payments.",
  },
  {
    icon: BarChart3,
    title: "Start Investing",
    body: "Fund your account, allocate capital to AI strategies or gold-backed products, and monitor performance through your dashboard.",
  },
];

export default function AurumGetStarted() {
  return (
    <section className="section-aurum-muted w-full py-16 md:py-20">
      <div className="container">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <h2 className="aurum-heading">How to Get Started</h2>
          <p className="aurum-body mt-4">
            Three simple steps to join the AURUM ecosystem and begin building
            intelligent, secure wealth through AI and digital assets.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-6 md:grid-cols-3"
          staggerChildren={0.08}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={itemKey(step, index)}>
                <article className="h-full rounded-2xl border border-zinc-200/80 bg-white p-7 text-center shadow-sm md:p-8">
                  <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#003b49] text-white">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="aurum-subheading text-lg">{step.title}</h3>
                  <p className="aurum-body mt-3 text-sm">{step.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal className="aurum-section-cta" delay={0.1}>
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
