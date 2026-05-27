"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#130A1C] text-zinc-300 border-t border-[#1F112D]">
      <div className="container mx-auto px-4 py-16 md:py-20">
        
        {/* Main Content Area */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-12" staggerChildren={0.12}>
          
          {/* Left Side: Logo, Nav Links, Contacts, and Socials */}
          <StaggerItem className="lg:col-span-7 flex flex-col items-start space-y-8">
            {/* White Wordmark Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/proteq-white.png" 
                width={160} 
                height={47} 
                alt="Proteq Logo" 
                priority 
              />
            </Link>

            {/* Navigation Links in a single wrap row */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-300">
              <Link href="/" className="hover:text-[#E25C8F] transition-colors">
                Home
              </Link>
              <Link href="/consultancy-advisory" className="hover:text-[#E25C8F] transition-colors">
                Consultancy & Advisory
              </Link>
              <Link href="/learning" className="hover:text-[#E25C8F] transition-colors">
                Learning
              </Link>
              <Link href="/systems" className="hover:text-[#E25C8F] transition-colors">
                Systems
              </Link>
              <Link href="/ai-investments" className="hover:text-[#E25C8F] transition-colors">
                AI Investments
              </Link>
              <Link href="/become-a-partner" className="hover:text-[#E25C8F] transition-colors">
                Become a Partner
              </Link>
              <Link href="/contact" className="hover:text-[#E25C8F] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Contact Details: Address & Phone Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-xs text-zinc-400 border-t border-[#251536] pt-6">
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <MapPin className="size-3.5 mt-0.5 text-zinc-500 shrink-0" />
                  <span>Level 24, International Finance Centre, London, EC2N 1HQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5 text-zinc-500 shrink-0" />
                  <a href="mailto:info@proteq.me" className="hover:text-[#E25C8F] transition-colors">
                    info@proteq.me
                  </a>
                </div>
              </div>
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 text-zinc-500 shrink-0" />
                  <span>UK Hotline: +44 (0) 20 7123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 text-zinc-500 shrink-0" />
                  <span>US Hotline: +1 (212) 555-0199</span>
                </div>
              </div>
            </div>

            {/* Social Media Links (LinkedIn, X, YouTube, Instagram) */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1A0E26] hover:bg-[#E25C8F] border border-[#2B183E] hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                title="LinkedIn"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* X / Twitter */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1A0E26] hover:bg-[#E25C8F] border border-[#2B183E] hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                title="X (formerly Twitter)"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1A0E26] hover:bg-[#E25C8F] border border-[#2B183E] hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                title="YouTube"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1A0E26] hover:bg-[#E25C8F] border border-[#2B183E] hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                title="Instagram"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </StaggerItem>

          {/* Right Side: Newsletter field (Matches the screenshot layout) */}
          <StaggerItem className="lg:col-span-5 flex flex-col items-start lg:items-end w-full">
            <div className="w-full max-w-md">
              <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest mb-4">
                Subscribe
              </h3>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-zinc-900 placeholder-zinc-400 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E25C8F] w-full border-0"
                />
                <button
                  type="submit"
                  className="bg-white text-[#130A1C] hover:bg-zinc-100 active:scale-[0.98] transition-all font-bold rounded-full px-6 py-3 text-sm cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-[11px] text-zinc-400 mt-3 leading-relaxed">
                By subscribing you agree to with our{" "}
                <Link href="#" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Bottom Section: Legal Links, Copyright and Status */}
        <ScrollReveal className="border-t border-[#251536] pt-8 flex flex-col md:flex-row items-center justify-between gap-6" yOffset={12}>
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies Settings</Link>
          </div>

          {/* Copyright & Pulse Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400">
            <span>© {new Date().getFullYear()} Proteq | All rights reserved.</span>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0E26] border border-[#2B183E] text-[11px] font-semibold text-zinc-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              All Systems Operational
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};

export default Footer;
