"use client";

import React from 'react';
import Link from 'next/link';
import { Shield, GraduationCap, Network, ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/scroll-reveal';
import Image from 'next/image';

const pillars = [
  {
    number: "01",
    tag: "Advisory",
    title: "Consultancy & Advisory",
    description: "Expert guidance on AML compliance frameworks, anti-fraud programme design, risk assessment, and regulatory readiness. We help organisations build defensible compliance operations.",
    linkText: "Learn More",
    href: "/consultancy-advisory",
    icon: Shield,
    iconColor: "text-[#E25C8F]",
    image: "/systems.webp",
    gridClass: "lg:col-span-2 min-h-[480px]",
    parentFlexClass: "justify-start",
    panelClass: "w-full sm:w-[420px]",
  },
  {
    number: "02",
    tag: "Learning",
    title: "Learning",
    description: "Pre-recorded webinars, structured courses, and certification preparation programmes designed for compliance professionals and teams building anti-fraud capability.",
    linkText: "Explore Courses",
    href: "/learning",
    icon: GraduationCap,
    iconColor: "text-pink-400",
    image: "/learning.webp",
    gridClass: "lg:col-span-1 min-h-[480px]",
    parentFlexClass: "justify-center",
    panelClass: "w-full",
  },
  {
    number: "03",
    tag: "Systems",
    title: "Systems",
    description: "AML screening, transaction monitoring, and regulatory technology solutions. We evaluate, recommend, and implement systems that reduce compliance risk and operational overhead.",
    linkText: "View Systems",
    href: "/systems",
    icon: Network,
    iconColor: "text-indigo-400",
    image: "/consulting-adv.webp",
    gridClass: "lg:col-span-3 min-h-[440px]",
    parentFlexClass: "justify-start lg:justify-end",
    panelClass: "w-full sm:w-[420px]",
  }
];

const ServicePillars = () => {
  return (
    <section className="mt-10 mb-14 relative overflow-hidden">
      <div className="container">
        {/* Premium Geometric Grid Background */}
        {/* <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #E25C8F 1.5px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        /> */}

        {/* Immersive Ambient Glows */}
        <div className="absolute right-0 top-1/4 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full relative z-10">
          {/* Section Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">Our Solutions Blueprint</span>
            </div>

            <h2 className="text-[34px] md:text-[42px]">
              Integrated Advisory, Learning, and RegTech Services
            </h2>
          </ScrollReveal>

          {/* Pillars Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem
                  key={idx}
                  className={`relative group overflow-hidden rounded-[10px] ${pillar.gridClass} border border-zinc-200/60 shadow-lg p-4 md:p-6 flex flex-col justify-center items-center md:items-stretch ${pillar.parentFlexClass}`}
                >

                  {/* 1. Card Background Image with Parallax & Scaling */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
                    <Image
                      fill
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* 2. Flex-Stretching Glassmorphic Card Container */}
                  <Link
                    href={pillar.href}
                    className={`relative z-10 bg-zinc-950/75 backdrop-blur-xl rounded-[24px] p-6 lg:p-8 border border-white/10 flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:bg-zinc-950/80 group-hover:border-white/15 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer ${pillar.panelClass}`}
                  >
                    {/* Background Counter Number */}
                    <span className="absolute right-8 top-6 text-7xl lg:text-8xl font-black text-white/[0.02] group-hover:text-[#E25C8F]/5 transition-colors duration-500 font-sans select-none pointer-events-none">
                      {pillar.number}
                    </span>

                    <div>
                      {/* Glowing Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
                        <Icon className={`size-5 ${pillar.iconColor}`} />
                      </div>

                      {/* Floating tag */}
                      <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3 shadow-xs">
                        {pillar.tag}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-[#E25C8F] transition-colors duration-300">
                        {pillar.title}
                      </h3>

                      {/* Description Paragraph */}
                      <p className="text-zinc-300 text-sm lg:text-base leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    {/* 3. Action Link Row */}
                    <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs lg:text-sm uppercase tracking-wider font-bold text-white group-hover:text-[#E25C8F] transition-colors duration-300">
                        {pillar.linkText}
                      </span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#E25C8F] group-hover:border-[#E25C8F] group-hover:text-white group-hover:rotate-45 group-hover:scale-105 shrink-0 shadow-xs border border-white/10">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </Link>

                  <div className="absolute inset-0 w-full h-full bg-black/40" />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
