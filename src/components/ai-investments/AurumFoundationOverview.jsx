"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer from "./AurumVideoPlayer";

const statBars = [
  "$30M+ Assets Managed",
  "18,000+ Active Partners",
  "5+ Tech Products",
];

function AnimatedStatBar({ label, targetWidth, delay = 0, animate }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) {
      setWidth(0);
      return;
    }

    const timeout = setTimeout(() => {
      setWidth(targetWidth);
    }, delay);

    return () => clearTimeout(timeout);
  }, [animate, targetWidth, delay]);

  return (
    <div className="relative h-12 w-full overflow-hidden rounded-full bg-zinc-100 md:h-[52px]">
      <div
        className="absolute inset-y-0 left-0 flex min-w-0 items-center rounded-full bg-[#231143] px-5 transition-[width] duration-1000 ease-out"
        style={{ width: `${width}%` }}
      >
        <span className="truncate text-sm font-semibold text-white md:text-[15px]">
          {label}
        </span>
      </div>
    </div>
  );
}

const AurumFoundationOverview = () => {
  const sectionRef = useRef(null);
  const [barsInView, setBarsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsInView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-zinc-200/60 bg-white py-18 md:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal xOffset={-16} yOffset={0}>
            <h2 className="text-3xl leading-tight text-[#231143] md:text-[40px] lg:text-[42px]">
              AURUM Foundation: Shaping the Future of Finance
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
              AURUM is a decentralized fintech ecosystem that integrates
              artificial intelligence and blockchain technology to modernize
              financial management. The platform delivers secure, transparent,
              and scalable solutions designed for a global digital economy.
            </p>

            <div className="mt-8 space-y-3 md:mt-10 md:space-y-4">
              {statBars.map((label, index) => (
                <AnimatedStatBar
                  key={label}
                  label={label}
                  targetWidth={100}
                  delay={index * 180}
                  animate={barsInView}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal xOffset={16} yOffset={0}>
            <AurumVideoPlayer
              videoId="uKgSgGClewc"
              playLabel="Play AURUM Foundation video"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AurumFoundationOverview;
