"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from "motion/react";
import { StaggerContainer, StaggerItem } from '../ui/scroll-reveal';

const statsData = [
  {
    value: "200",
    label: "Professionals Trained"
  },
  {
    value: "15",
    label: "Years of experience"
  }
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially to capture positions
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Multi-layered depth speeds (stereoscopic parallax)
  const bgTranslateY = scrollY * 0.28;
  const contentTranslateY = scrollY * 0.12;
  const statsTranslateY = scrollY * 0.08;

  const contentOpacity = Math.max(1 - scrollY / 700, 0);
  const statsOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <section className="w-full min-h-[520px] md:h-175 md:min-h-175 relative overflow-hidden flex items-center px-3 lg:!p-0">
      <div className="container rounded-[14px] md:rounded-3xl h-155  md:h-175 relative overflow-hidden flex flex-col justify-start md:justify-center px-6 py-14 sm:!p-10 md:!p-14 lg:!p-16">

        {/* Layer 1: Background Image with Parallax Scrolling Effect */}
        <div
          className="absolute inset-x-0 top-0 h-[130%] w-full -z-10 origin-center pointer-events-none"
          style={{
            transform: `translateY(${bgTranslateY}px) scale(1.05)`,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)',
            backgroundImage: "url('https://cdn.prod.website-files.com/696e1a231b607dae06243d7c/696f432c4b5c9c46ca70eb5a_4580b2f1f7434e4416a23d00f62fbad5_hero-bg-img.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Brand dark mask overlay inside the background layer */}
          <div className="absolute inset-0 w-full h-full bg-linear-to-br from-secondary via-secondary/40 to-black/10"></div>
        </div>

        {/* Layer 2: Main Hero Content with Sub-Parallax and Fade */}
        <div
          className="z-5 w-full md:max-w-[58%] lg:max-w-[50%] flex flex-col items-start"
          style={{
            transform: `translateY(${contentTranslateY}px)`,
            opacity: contentOpacity,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.1s linear',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 1.02, 0.43, 1.01] }}
            className="flex flex-col items-start w-full"
          >
            <div className="flex items-center gap-2 mb-2 md:mb-4 bg-black/20 backdrop-blur-sm border border-gray-600 rounded-lg md:rounded-xl px-4 py-2">
              <span className="text-xs sm:text-sm text-white uppercase font-medium">Advisory . Learning . Systems</span>
            </div>

          <h1 className="text-[40px] md:text-5xl lg:text-[62px] font-bold text-white mb-2 md:mb-4 tracking-tight !leading-[1.2] md:leading-[1.12]">
            Compliance Expertise. Intelligent Learning. Systems That Work.
          </h1>

          <p className="text-white/95 mb-8 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
            Advisory, training, and technology for organisations navigating AML, anti-fraud, and regulatory complexity.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              href="#"
              variant="white"
              glowingDot
              showArrow
              className="w-full sm:w-auto"
            >
              Book A Free Demo
            </Button>

            <Button
              href="#"
              variant="secondary"
              showArrow
              className="w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
            </div>
          </motion.div>
        </div>

        {/* Layer 3: Glassmorphic Stats in Bottom Right (Collapses beautifully under content on mobile) */}
        <div
          className="z-10 w-full md:w-auto absolute bottom-0 right-0 flex gap-3 sm:gap-4 lg:gap-6"
          style={{
            transform: `translateY(${statsTranslateY}px)`,
            opacity: statsOpacity,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1), opacity 0.1s linear',
          }}
        >
          <StaggerContainer className="flex gap-3 sm:gap-4 lg:gap-6 w-full justify-end" delay={0.4} staggerChildren={0.12}>
            {statsData.map((stat, idx) => (
              <StaggerItem
                key={idx}
                yOffset={24}
                className="bg-gradient-to-br from-white/12 to-white/[0.03] backdrop-blur-lg border border-white/10 rounded-t-xl md:rounded-t-[28px] p-5 lg:p-7 flex-1 md:flex-initial md:w-44 lg:w-80 flex flex-col justify-center transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] shadow-2xl"
              >
                <div className="flex items-start mb-1 sm:mb-2 select-none">
                  <span className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-amber-400 ml-0.5 -mt-1">
                    +
                  </span>
                </div>
                <span className="text-zinc-200 text-[10px] sm:text-xs lg:text-base font-medium tracking-tight leading-tight">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

export default Hero;
