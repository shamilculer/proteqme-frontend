"use client";

import { Calendar, LineChart, Wallet } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const performanceCards = [
  {
    label: "Daily Returns",
    value: "0.5 - 0.6%",
    subtext: "Compound your wealth every single day",
    icon: LineChart,
  },
  {
    label: "Weekly Returns",
    value: "3.5 - 4.2%",
    subtext: "Watch your portfolio grow week by week",
    icon: Calendar,
  },
  {
    label: "Monthly Returns",
    value: "16 - 18%",
    subtext: "Consistent monthly returns that outperform",
    icon: Wallet,
  },
];

const stats = [
  { value: "$1M+", label: "Managed Assets" },
  { value: "500+", label: "Active Investors" },
  { value: "99.2%", label: "Client Retention" },
  { value: "24/7", label: "Portfolio Access" },
];

const AurumInvestmentPerformance = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-zinc-200/60 bg-[#fbfafd] py-18 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(35,17,67,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Investment Performance
            </span>
          </div>

          <h2 className="text-3xl leading-tight text-[#231143] md:text-[44px]">
            Your Renewed Investment{" "}
            <span className="text-[#E25C8F]">Strategy</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Our proprietary algorithms and expert fund managers deliver
            consistent, industry-leading returns across all investment
            timeframes.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-5 md:grid-cols-3"
          staggerChildren={0.07}
        >
          {performanceCards.map((card) => {
            const Icon = card.icon;

            return (
              <StaggerItem key={card.label}>
                <article className="group flex h-full flex-col rounded-[18px] border border-zinc-200/90 bg-white p-6 shadow-[0_14px_45px_rgba(35,17,67,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/35 hover:shadow-[0_22px_60px_rgba(35,17,67,0.1)] md:p-7">
                  <span className="mb-5 flex size-13 items-center justify-center rounded-full border border-[#231143]/10 bg-[#231143]/5 text-[#231143] transition duration-300 group-hover:border-[#E25C8F]/40 group-hover:bg-[#E25C8F] group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E25C8F]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-[#231143] md:text-[36px]">
                    {card.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {card.subtext}
                  </p>

                  <div className="mt-6 h-0.5 w-0 bg-[#E25C8F] transition-all duration-500 group-hover:w-full" />
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal className="mt-8 md:mt-10" yOffset={12}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-zinc-200/90 bg-zinc-200/80 shadow-[0_18px_55px_rgba(35,17,67,0.08)] md:grid-cols-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="bg-white px-4 py-8 text-center md:py-9"
              >
                <p className="text-2xl font-semibold tracking-tight text-[#E25C8F] md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm font-medium text-zinc-500">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AurumInvestmentPerformance;
