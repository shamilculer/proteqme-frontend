"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer from "./AurumVideoPlayer";

const statBars = [
  { label: "Secure Storage", width: 90 },
  { label: "Instant Exchange", width: 85 },
  { label: "Mobile Apps", width: 95 },
];

const ecosystemBlocks = [
  {
    title: "A New Way to Invest in Cryptocurrency",
    body: "AURUM Foundation integrates artificial intelligence, blockchain technology, digital banking infrastructure, and gold-based investment solutions into a unified fintech platform — giving investors direct access to both fiat and crypto assets in one secure hub.",
  },
  {
    title: "Our AURUM Ecosystem",
    body: "It combines AI crypto trading bots, Gold (XAU) Investments, Web3 banking solutions and automated liquidity systems designed for modern digital asset management.",
  },
  {
    title: "Community Focused Growth",
    body: "With more than 18,000 active partners worldwide, AURUM continues to expand its global presence — strengthening liquidity, accelerating innovation, and fostering a trusted financial community.",
  },
];

const sideImages = [
  { src: "/ai-investment.webp", alt: "AURUM trading technology" },
  { src: "/aurum/aurum-2.webp", alt: "AURUM digital finance" },
  { src: "/who-we-are.webp", alt: "AURUM professional team" },
];

function AnimatedStatBar({ label, targetWidth, delay = 0, animate }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) {
      setWidth(0);
      return;
    }
    const timeout = setTimeout(() => setWidth(targetWidth), delay);
    return () => clearTimeout(timeout);
  }, [animate, targetWidth, delay]);

  return (
    <div className="aurum-stat-bar">
      <div className="aurum-stat-bar-fill" style={{ width: `${width}%` }}>
        <span className="truncate text-sm font-semibold text-white md:text-[15px]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function AurumEcosystemSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-aurum-muted w-full py-16 md:py-20"
    >
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="aurum-heading">
                The Most Trusted Cryptocurrency Platform.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="space-y-3">
                {statBars.map((bar, index) => (
                  <AnimatedStatBar
                    key={bar.label}
                    label={bar.label}
                    targetWidth={bar.width}
                    delay={index * 180}
                    animate={barsInView}
                  />
                ))}
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {ecosystemBlocks.map((block, index) => (
                <ScrollReveal key={block.title} delay={0.08 + index * 0.04}>
                  <h3 className="aurum-subheading">{block.title}</h3>
                  <p className="aurum-body mt-3">{block.body}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <ScrollReveal xOffset={12}>
              <AurumVideoPlayer
                videoId="uKgSgGClewc"
                playLabel="Play AURUM ecosystem video"
              />
            </ScrollReveal>
            {sideImages.map((img, index) => (
              <ScrollReveal key={img.src} xOffset={12} delay={0.06 + index * 0.05}>
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,59,73,0.12)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="aurum-section-cta" delay={0.12}>
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
