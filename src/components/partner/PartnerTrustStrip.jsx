"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function ProgressiveCounter({ value, duration = 2000, shouldAnimate }) {
  const endValue = Number(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || Number.isNaN(endValue)) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progressRatio = Math.min((timestamp - startTime) / duration, 1);
      const easeRatio = progressRatio * (2 - progressRatio);

      setCount(Math.floor(easeRatio * endValue));

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration, shouldAnimate]);

  return <>{count.toLocaleString()}</>;
}

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Global Markets",
  },
  {
    value: 40,
    suffix: "+",
    label: "Institutions in Network",
  },
  {
    value: 3,
    suffix: "",
    label: "Partnership Tracks",
  },
  {
    value: 5,
    suffix: " Days",
    label: "Application Review",
  },
];

const ecosystemPartners = [
  { name: "OSL", logo: "/partners/osl.png" },
  { name: "Chainalysis", logo: "/partners/chainalysis.png" },
  { name: "Sumsub", logo: "/partners/sumsub (1).png" },
  { name: "Elliptic", logo: "/partners/elliptinc.png" },
];

export default function PartnerTrustStrip() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-y border-zinc-200/70 bg-[#f6f4f8] py-14 md:py-16"
      aria-label="Partnership trust signals"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#E25C8F" strokeWidth="1" fill="none" opacity="0.18">
            <path d="M0 120 L200 80 L420 140 L640 60 L860 110 L1080 40 L1200 90" />
            <path d="M0 160 L180 100 L400 170 L620 90 L840 150 L1060 70 L1200 130" />
          </g>
          <g fill="#E25C8F" opacity="0.22">
            <circle cx="200" cy="80" r="4" />
            <circle cx="420" cy="140" r="4" />
            <circle cx="640" cy="60" r="4" />
            <circle cx="860" cy="110" r="4" />
            <circle cx="1080" cy="40" r="4" />
          </g>
        </svg>
      </div>

      <div className="container relative">
        <ScrollReveal yOffset={12}>
          <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-4xl font-semibold tracking-tight text-[#E25C8F] md:text-[52px]">
                  <ProgressiveCounter
                    value={stat.value}
                    shouldAnimate={inView}
                  />
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-500 md:text-base">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal yOffset={10} className="mt-12 border-t border-zinc-200/80 pt-10 md:mt-14">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            RegTech platforms in our partnership ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0">
            {ecosystemPartners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={40}
                className="h-7 w-auto object-contain md:h-8"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
