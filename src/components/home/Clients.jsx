"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "../ui/scroll-reveal";

const clientStats = [
  { value: "50+", label: "Organisations Served" },
  { value: "10+", label: "Jurisdictions" },
  { value: "200+", label: "Professionals Trained" },
  { value: "40+", label: "Institutions" },
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

const Clients = () => {
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
      className="credential-strip w-full border-t border-[#1E1E28] py-12 md:py-14"
    >
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <h2 className="text-lg font-medium text-white">Our Clients</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {clientStats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-primary md:text-[32px]">{stat.value}</span>
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
                key={client.service}
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
