"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { Bot, Shield, TrendingUp, Wallet } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../ui/scroll-reveal";

const steps = [
  {
    icon: Wallet,
    title: "Fund Your Account",
    description:
      "Deposit fiat or digital assets into your AURUM vault. Multi-signature custody and audited smart contracts secure capital from day one.",
  },
  {
    icon: Bot,
    title: "AI Strategy Allocation",
    description:
      "Proprietary algorithms analyse market signals and allocate capital to strategies within defined risk parameters.",
  },
  {
    icon: TrendingUp,
    title: "Automated Execution",
    description:
      "Trading bots execute positions 24/7 with real-time monitoring, rebalancing, and performance reporting.",
  },
  {
    icon: Shield,
    title: "Withdraw & Audit",
    description:
      "Withdrawals follow defined terms with full transaction audit trails and active capital protection protocols.",
  },
];

export default function AurumHowItWorks() {
  return (
    <section className="section-aurum w-full py-16 md:py-20">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 max-w-2xl md:mb-14">
          <p className="aurum-section-label">Process</p>
          <h2 className="text-section-heading text-white">
            How AURUM Works
          </h2>
          <p className="aurum-text-muted mt-4 text-base leading-relaxed">
            A structured four-stage process from deposit through allocation,
            execution, and audited withdrawal.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 gap-px border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.22)] md:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.06}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={itemKey(step, index)}>
                <article className="flex h-full flex-col bg-[var(--aurum-panel-elevated)] p-6 md:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold tabular-nums tracking-wider text-[var(--aurum-gold-on-dark)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex size-9 items-center justify-center border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)]">
                      <Icon
                        className="size-4 text-[var(--aurum-gold-on-dark)]"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="aurum-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
