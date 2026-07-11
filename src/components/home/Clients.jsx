"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "../ui/scroll-reveal";

const DEFAULT_STATS = [
  { value: "50+", suffix: "", label: "Organisations Served" },
  { value: "10+", suffix: "", label: "Jurisdictions" },
  { value: "200+", suffix: "", label: "Professionals Trained" },
  { value: "40+", suffix: "", label: "Institutions" },
];

const clientEntries = [
  {
    sector: "Financial Institution",
    service: "AML Programme — UK",
  },
  {
    sector: "VASP",
    service: "Middle East VARA Compliance Advisory",
  },
  {
    sector: "Fintech Platform",
    service: "KYC Framework — Singapore",
  },
  {
    sector: "Crypto Exchange",
    service: "Transaction Monitoring — UAE",
  },
  {
    sector: "Insurance Group",
    service: "Regulatory Gap Analysis",
  },
  {
    sector: "Payment Provider",
    service: "Anti-Fraud Programme Design",
  },
];

const DEFAULTS = {
  eyebrow: null,
  heading: "Our Clients",
  stats: DEFAULT_STATS,
  animate: false,
  sectionId: null,
  particleId: null,
};

const Clients = ({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  stats = DEFAULTS.stats,
  animate = DEFAULTS.animate,
  sectionId = DEFAULTS.sectionId,
  particleId = DEFAULTS.particleId,
}) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={sectionId || undefined}
      className="credential-strip w-full border-t border-[#1E1E28] py-12 md:py-14"
    >
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              {eyebrow ? (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  {eyebrow}
                </p>
              ) : null}
              <h2 className="text-lg font-medium text-white">{heading}</h2>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {stats.map((stat, index) => (
                <div key={itemKey(stat, index)} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-primary md:text-[32px]">
                    {`${stat.value}${stat.suffix || ""}`}
                  </span>
                  <span className="text-sm text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`credential-strip-entries clients-entries border-t border-white/10 pt-8 ${visible ? "clients-visible" : ""}`}
          >
            {clientEntries.map((client, index) => (
              <div
                key={itemKey(client, index, ["service", "sector"])}
                className="credential-entry client-entry"
                style={{ animationDelay: `${0.05 + index * 0.07}s` }}
              >
                <span className="mb-1 size-1.5 rotate-45 bg-primary" aria-hidden />
                <p className="text-center text-sm font-semibold text-zinc-300">{client.sector}</p>
                <p className="text-center text-xs text-zinc-500">{client.service}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Clients;
