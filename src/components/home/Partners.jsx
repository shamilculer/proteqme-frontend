"use client";

import React from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const Partners = () => {
  const partnerList = [
    {
      name: "OSL",
      website: "https://osl.com",
      logo: (
        <svg
          viewBox="0 0 160 50"
          className="h-10 w-auto transition-all duration-500 group-hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* OSL Icon & Modern Typography */}
          <rect x="5" y="8" width="34" height="34" rx="8" fill="#E25C8F" className="fill-zinc-400 group-hover:fill-[#E25C8F] transition-colors duration-500" />
          <path d="M15 25L20 18V32L29 25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          
          <text
            x="48"
            y="35"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="-0.5px"
            fill="#231143"
            className="fill-zinc-800 group-hover:fill-[#231143] transition-colors duration-500"
          >
            OSL
          </text>
          
          {/* Subtle tech detail underneath */}
          <circle cx="106" cy="18" r="3" fill="#E25C8F" className="fill-zinc-400 group-hover:fill-[#E25C8F] transition-colors duration-500" />
          <line x1="114" y1="18" x2="145" y2="18" stroke="#E25C8F" strokeWidth="2" strokeDasharray="3 3" className="stroke-zinc-400 group-hover:stroke-[#E25C8F] transition-colors duration-500" />
        </svg>
      ),
    },
    {
      name: "Chainalysis",
      website: "https://www.chainalysis.com",
      logo: (
        <svg
          viewBox="0 0 200 50"
          className="h-9 w-auto transition-all duration-500 group-hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blockchain Node Icon */}
          <circle cx="16" cy="16" r="6" fill="#F26522" className="fill-zinc-400 group-hover:fill-[#F26522] transition-colors duration-500" />
          <circle cx="36" cy="34" r="5" fill="#F26522" className="fill-zinc-400 group-hover:fill-[#F26522] transition-colors duration-500" />
          <circle cx="12" cy="38" r="4" fill="#F26522" className="fill-zinc-400 group-hover:fill-[#F26522] transition-colors duration-500" />
          <line x1="16" y1="16" x2="36" y2="34" stroke="#F26522" strokeWidth="2.5" className="stroke-zinc-400 group-hover:stroke-[#F26522] transition-colors duration-500" />
          <line x1="16" y1="16" x2="12" y2="38" stroke="#F26522" strokeWidth="2" className="stroke-zinc-400 group-hover:stroke-[#F26522] transition-colors duration-500" />
          <line x1="12" y1="38" x2="36" y2="34" stroke="#F26522" strokeWidth="1.5" className="stroke-zinc-400 group-hover:stroke-[#F26522] transition-colors duration-500" />

          {/* Chainalysis Text */}
          <text
            x="48"
            y="35"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="20"
            letterSpacing="-0.5px"
            fill="#231143"
            className="fill-zinc-800 group-hover:fill-[#231143] transition-colors duration-500"
          >
            Chainalysis
          </text>
        </svg>
      ),
    },
    {
      name: "Sumsub",
      website: "https://sumsub.com",
      logo: (
        <svg
          viewBox="0 0 160 50"
          className="h-9 w-auto transition-all duration-500 group-hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Identity Shield Icon */}
          <path
            d="M8 12C16 12 24 9 32 6C32 16 32 26 26 34C20 42 8 44 8 44C8 44 -4 42 -10 34C-16 26 -16 16 -16 6C-8 9 0 12 8 12Z"
            transform="translate(18, 0) scale(0.65)"
            fill="#00E575"
            className="fill-zinc-400 group-hover:fill-[#00E575] transition-colors duration-500"
          />
          <path
            d="M8 20L13 25L22 14"
            transform="translate(18, 0) scale(0.65)"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Sumsub Text */}
          <text
            x="48"
            y="34"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="21"
            letterSpacing="-0.5px"
            fill="#231143"
            className="fill-zinc-800 group-hover:fill-[#231143] transition-colors duration-500"
          >
            sumsub
          </text>
        </svg>
      ),
    },
    {
      name: "Elliptic",
      website: "https://www.elliptic.co",
      logo: (
        <svg
          viewBox="0 0 160 50"
          className="h-9 w-auto transition-all duration-500 group-hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon Cube Icon */}
          <path
            d="M20 6L36 15V33L20 42L4 33V15L20 6Z"
            fill="#4F46E5"
            className="fill-zinc-400 group-hover:fill-[#4F46E5] transition-colors duration-500"
          />
          <path
            d="M20 6V42M20 24L36 15M20 24L4 15"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Elliptic Text */}
          <text
            x="48"
            y="34"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="21"
            letterSpacing="-0.5px"
            fill="#231143"
            className="fill-zinc-800 group-hover:fill-[#231143] transition-colors duration-500"
          >
            ELLIPTIC
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 bg-zinc-50/50 border-t border-zinc-150 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(228 228 231) 1.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Section Header (Intro and Title Left/Top) */}
          <ScrollReveal className="w-full lg:w-2/5 text-center lg:text-left" xOffset={-16} yOffset={0}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E25C8F] bg-[#E25C8F]/5 border border-[#E25C8F]/10 px-3 py-1 rounded-full mb-3 inline-block">
              Our Partners
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight leading-tight">
              We work alongside the industry’s most trusted platforms and organisations
            </h2>
          </ScrollReveal>

          {/* Logos Horizontal Bar */}
          <div className="w-full lg:w-3/5">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center" staggerChildren={0.06}>
              {partnerList.map((partner, index) => (
                <StaggerItem
                  key={index}
                  className="w-full"
                  yOffset={12}
                >
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${partner.name}`}
                    className="group flex items-center justify-center p-4 w-full h-20 bg-white border border-zinc-200/60 rounded-2xl shadow-xs transition-all duration-500 hover:shadow-md hover:border-[#E25C8F]/20 hover:bg-white"
                  >
                    {/* Container with smooth opacity/grayscale transitions */}
                    <div className="grayscale opacity-50 saturate-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-500 flex items-center justify-center">
                      {partner.logo}
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
