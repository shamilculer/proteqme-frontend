"use client";

import React, { useState, useEffect, useRef } from "react";
import { Shield, GraduationCap, Globe, Building2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

// Robust, high-performance progressive count-up component using requestAnimationFrame
const ProgressiveCounter = ({ value, duration = 2000, shouldAnimate }) => {
  const endValue = parseInt(value, 10);
  const isNumeric = !isNaN(endValue);

  const [count, setCount] = useState(() => (isNumeric ? 0 : value));

  useEffect(() => {
    if (!shouldAnimate || !isNumeric) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      // Easing out quadratic curve for a premium, decelerating feel
      const easeRatio = progressRatio * (2 - progressRatio);

      setCount(Math.floor(easeRatio * endValue));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue, isNumeric, duration, shouldAnimate]);

  return <span>{count.toLocaleString()}</span>;
};

const ValuePropositionStrip = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once animated, we don't need to observe anymore
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* 1. Cinematic Background Loop Video */}
      <div className="absolute inset-0 w-full h-full -z-10 origin-center pointer-events-none select-none">
        <div className="absolute inset-0 w-full h-full bg-black/90" />

        {/* Looping HTML5 Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        >
          <source
            src="/value.mp4"
            type="video/mp4"
          />
        </video>

        {/* Softer dark radial overlay for text readability, keeping the video highly visible in the center */}
        {/* <div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{
            background: 'radial-gradient(circle, rgba(18, 8, 35, 0.1) 0%, rgba(9, 9, 11, 0.65) 60%, rgba(9, 9, 11, 0.95) 100%)'
          }}
        /> */}
      </div>

      {/* 2. Bento Container Split Layout */}
      <div className="w-full max-w-400 mx-auto flex flex-col lg:flex-row items-stretch">

        {/* Left Side: Large Heading Column */}
        <ScrollReveal className="w-full lg:w-[40%] px-4 py-12 lg:!p-16 flex flex-col lg:border-r border-white/10" xOffset={-16} yOffset={0}>
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">Our Values</span>
            </div>

            {/* Heading with mixed modern typography - using only brand sans-serif font */}
            <h2 className="text-[34px] lg:text-[56px] text-white mb-2">
              Where Expertise Compliance, and Trust Merge
            </h2>

            <p className="text-white text-sm">
              Empowering organizations to proactively mitigate risk, navigate shifting international frameworks, and protect operations through intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* Right Side: Staggered Bento Grid */}
        <StaggerContainer className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 border-t lg:border-t-0 border-white/10" staggerChildren={0.08}>

          {/* CARD 01 */}
          <StaggerItem className="border-b md:border-r border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-70 md:min-h-80 group transition-all duration-300  backdrop-blur-sm">
            <div className="flex items-start justify-between">
              {/* Brand Pink Circular Icon Container */}
              <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-[#E25C8F] text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(226,92,143,0.5)]">
                <Shield className="size-8 md:size-6 stroke-[2]" />
              </div>
              {/* Card Number */}
              <span className="text-zinc-500 text-sm font-light select-none tracking-wider">01</span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                <ProgressiveCounter value={15} shouldAnimate={inView} />+ Years in Compliance
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-sm">
                Proven track record designing secure compliance structures and mitigating high-stakes risk.
              </p>
            </div>
          </StaggerItem>

          {/* Spacer 01 (Row 1, Col 2) - Hidden on Mobile */}
          <div className="hidden md:block border-b border-white/10 p-8 md:p-12 lg:p-16 min-h-70 md:min-h-80 select-none pointer-events-none" />

          {/* CARD 02 */}
          <StaggerItem className="border-b  md:border-r border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-70 md:min-h-80 group transition-all duration-300  backdrop-blur-sm">
            <div className="flex items-start justify-between">
              {/* Brand Pink Circular Icon Container */}
              <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-[#E25C8F] text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(226,92,143,0.5)]">
                <GraduationCap className="size-8 md:size-6 stroke-[2]" />
              </div>
              {/* Card Number */}
              <span className="text-zinc-500 text-sm font-light select-none tracking-wider">02</span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                <ProgressiveCounter value={200} shouldAnimate={inView} />+ Professionals Trained
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-sm">
                Empowering teams with practical, audit-ready regulatory knowledge and operational skills.
              </p>
            </div>
          </StaggerItem>

          {/* CARD 03 */}
          <StaggerItem className="border-b border-white/10 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-70 md:min-h-80 group transition-all duration-300  backdrop-blur-sm">
            <div className="flex items-start justify-between">
              {/* Brand Pink Circular Icon Container */}
              <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-[#E25C8F] text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(226,92,143,0.5)]">
                <Globe className="size-8 md:size-6 stroke-[2]" />
              </div>
              {/* Card Number */}
              <span className="text-zinc-500 text-sm font-light select-none tracking-wider">03</span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Across <ProgressiveCounter value={10} shouldAnimate={inView} />+ Jurisdictions
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-sm">
                Expertise navigating complex cross-border financial systems and regional mandates.
              </p>
            </div>
          </StaggerItem>

          {/* Spacer 02 (Row 3, Col 1) - Hidden on Mobile */}
          <div className="hidden md:block border-r border-white/10 p-8 md:p-12 lg:p-16 min-h-70 md:min-h-80 select-none pointer-events-none" />

          {/* CARD 04 */}
          <StaggerItem className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-70 md:min-h-80 group transition-all duration-300  backdrop-blur-sm">
            <div className="flex items-start justify-between">
              {/* Brand Pink Circular Icon Container */}
              <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-[#E25C8F] text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(226,92,143,0.5)]">
                <Building2 className="size-8 md:size-6 stroke-[2]" />
              </div>
              {/* Card Number */}
              <span className="text-zinc-500 text-sm font-light select-none tracking-wider">04</span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Trusted by Institutions
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-sm">
                Approved compliance frameworks built for banks, exchanges, and regulated organizations.
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default ValuePropositionStrip;
