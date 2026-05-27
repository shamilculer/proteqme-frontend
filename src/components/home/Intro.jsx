"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, Shield, GraduationCap, Network } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const Intro = () => {
    return (
        <section className="w-full my-12 md:my-20">
            <div className="container flex flex-col items-center gap-10 justify-center">
                
                {/* Responsive Headline Wrapper */}
                <ScrollReveal className="w-full max-w-275 px-0" yOffset={20}>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-center md:mb-6 !font-medium tracking-tight leading-[1.35] text-zinc-900">
                        Helping Organisations Navigate Regulatory Complexity Through Strategic Compliance Advisory, Professional Learning, and Intelligent Systems Built for Modern Risk Environments
                    </h2>
                </ScrollReveal>

                {/* Stacking Grid columns on mobile and side-by-side on large viewports */}
                <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20">
                    
                    {/* Adaptive Image Container */}
                    <ScrollReveal className="w-full lg:w-2/5 relative h-64 sm:h-80 md:h-96 lg:h-130 shrink-0" yOffset={0} scale={0.96} duration={0.8}>
                        <Image src="/hero-bg.webp" alt="Intro Image" fill className="object-cover rounded-2xl" />
                    </ScrollReveal>

                    {/* Content Column */}
                    <StaggerContainer className="w-full lg:w-3/5 space-y-4 md:space-y-6" staggerChildren={0.08}>
                        <StaggerItem>
                            <div className="inline-flex items-center gap-2 mb-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 shadow-xs">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                                </span>
                                <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">Who We Are</span>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                                We are a compliance-focused advisory and learning platform helping organisations navigate AML, anti-fraud, regulatory, and technology challenges through practical expertise, professional training, and intelligent systems guidance. Our approach combines industry knowledge, regulatory insight, and real-world implementation experience to help businesses operate with greater confidence, efficiency, and resilience.
                            </p>
                        </StaggerItem>
 
                        {/* Core Pillars Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                            <StaggerItem className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-150 transition-all duration-300 hover:bg-white hover:shadow-md group">
                                <div className="w-10 h-10 rounded-xl bg-[#231143]/5 flex items-center justify-center border border-[#231143]/10 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#231143] group-hover:text-white text-[#231143]">
                                    <Shield className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-sm">Strategic Advisory</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">AML framework design, compliance gap analysis, and regulatory readiness support for modern organisations.</p>
                                </div>
                            </StaggerItem>
 
                            <StaggerItem className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-150 transition-all duration-300 hover:bg-white hover:shadow-md group">
                                <div className="w-10 h-10 rounded-xl bg-[#E25C8F]/5 flex items-center justify-center border border-[#E25C8F]/10 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E25C8F] group-hover:text-white text-[#E25C8F]">
                                    <GraduationCap className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-sm">Professional Learning</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">Practical webinars, certification preparation, and compliance training designed for real-world application.</p>
                                </div>
                            </StaggerItem>
 
                            <StaggerItem className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-150 transition-all duration-300 hover:bg-white hover:shadow-md group col-span-1 sm:col-span-2">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600">
                                    <Network className="size-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-sm">Intelligent RegTech Systems</h4>
                                    <p className="text-xs text-zinc-500 mt-0.5">Transaction monitoring, AML screening, and regulatory technology evaluation.</p>
                                </div>
                            </StaggerItem>
                        </div>
 
                        {/* Stacking Buttons on Mobile */}
                        <StaggerItem className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                            <Button
                                asChild
                                className="rounded-full bg-white text-black hover:text-white h-13 pl-4 pr-1.5 py-1.5 flex items-center gap-3 border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group/cta cursor-pointer w-full sm:w-auto justify-center sm:justify-start"
                            >
                                <Link href="#" className="!text-base font-semibold flex items-center justify-between sm:justify-start w-full sm:w-auto">
                                    <span className="flex items-center gap-2">
                                        {/* Glowing green dot */}
                                        <span className="relative flex h-2 w-2 shrink-0">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                                        </span>
                                        Book A Free Demo
                                    </span>
                                    {/* Circular Arrow Badge */}
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-800 text-zinc-100 transition-all duration-300 group-hover/cta:rotate-45 shrink-0">
                                        <ArrowUpRight className="size-4" />
                                    </span>
                                </Link>
                            </Button>
 
                            <Button
                                asChild
                                className="rounded-full bg-primary h-13 flex items-center gap-3 border-0 shadow-md hover:shadow-lg hover:scale-[1.02] group/cta w-full sm:w-auto justify-center sm:justify-start"
                            >
                                <Link href="#" className="!text-base font-semibold flex items-center justify-between sm:justify-start w-full sm:w-auto">
                                    Explore Our Services
                                    {/* Circular Arrow Badge */}
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-800 text-zinc-100 transition-all duration-300 group-hover/cta:rotate-45 shrink-0">
                                        <ArrowUpRight className="size-4" />
                                    </span>
                                </Link>
                            </Button>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};

export default Intro;
