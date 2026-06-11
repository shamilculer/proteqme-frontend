"use client";



import React, { useState } from "react";

import Link from "next/link";

import Image from "next/image";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
  SITE_EMAIL,
  OFFICE_ADDRESS,
} from "@/data/siteContact";



/** Update with official company registration when confirmed */

const COMPANY_REGISTRATION = "England & Wales · Company No. [registration number]";



const Footer = () => {

  const [email, setEmail] = useState("");



  const handleSubscribe = (e) => {

    e.preventDefault();

    alert(`Subscribed successfully: ${email}`);

    setEmail("");

  };



  return (

    <footer className="relative z-20 shrink-0 bg-panel-dark text-zinc-300">

      <div className="container mx-auto px-4 py-16 md:py-20">

        

        <div className="mb-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">

          <div className="flex flex-col items-start space-y-8 lg:col-span-7">

            <Link href="/" className="flex items-center gap-2">

              <Image 

                src="/proteq-white.png" 

                width={160} 

                height={47} 

                alt="Proteq Logo" 

                priority 

              />

            </Link>



            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-300">

              <Link href="/" className="hover:text-primary transition-colors">

                Home

              </Link>

              <Link href="/consultancy-advisory" className="hover:text-primary transition-colors">

                Consultancy & Advisory

              </Link>

              <Link href="/learning" className="hover:text-primary transition-colors">

                Learning

              </Link>

              <Link href="/systems" className="hover:text-primary transition-colors">

                Systems

              </Link>

              <Link href="/ai-investments" className="hover:text-primary transition-colors">

                AI Investments

              </Link>

              <Link href="/become-a-partner" className="hover:text-primary transition-colors">

                Become a Partner

              </Link>

              <Link href="/contact" className="hover:text-primary transition-colors">

                Contact

              </Link>

            </nav>



            <div className="grid w-full gap-3 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:grid-cols-2">

              <div className="flex items-start gap-2">

                <MapPin className="mt-0.5 size-3.5 shrink-0 text-zinc-500" />

                <span>{OFFICE_ADDRESS}</span>

              </div>

              <div className="flex items-center gap-2">

                <Mail className="size-3.5 shrink-0 text-zinc-500" />

                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary transition-colors">

                  {SITE_EMAIL}

                </a>

              </div>

              <div className="flex items-center gap-2">

                <Phone className="size-3.5 shrink-0 text-zinc-500" />

                <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-primary transition-colors">

                  {PHONE_PRIMARY_DISPLAY}

                </a>

              </div>

              <div className="flex items-center gap-2">

                <Phone className="size-3.5 shrink-0 text-zinc-500" />

                <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-primary transition-colors">

                  {PHONE_SECONDARY_DISPLAY}

                </a>

              </div>

            </div>



            <div className="flex items-center gap-3">

              <a 

                href="https://www.linkedin.com/company/proteq-me" 

                target="_blank" 

                rel="noreferrer" 

                className="w-9 h-9 rounded-full bg-panel-dark hover:bg-primary border border-white/10 hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"

                title="LinkedIn"

              >

                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>

              </a>

              <a 

                href="https://x.com/proteq_me" 

                target="_blank" 

                rel="noreferrer" 

                className="w-9 h-9 rounded-full bg-panel-dark hover:bg-primary border border-white/10 hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"

                title="X (formerly Twitter)"

              >

                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>

              </a>

              <a 

                href="https://www.youtube.com/@proteqme" 

                target="_blank" 

                rel="noreferrer" 

                className="w-9 h-9 rounded-full bg-panel-dark hover:bg-primary border border-white/10 hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"

                title="YouTube"

              >

                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>

              </a>

              <a 

                href="https://www.instagram.com/proteq.me" 

                target="_blank" 

                rel="noreferrer" 

                className="w-9 h-9 rounded-full bg-panel-dark hover:bg-primary border border-white/10 hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"

                title="Instagram"

              >

                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>

              </a>

            </div>

          </div>

          <div className="flex w-full flex-col items-start lg:col-span-5 lg:items-end">

            <div className="w-full max-w-md">

              <h3 className="mb-2 text-sm font-bold leading-snug text-zinc-100">

                Monthly AML &amp; RegTech Intelligence

              </h3>

              <p className="mb-4 text-xs leading-relaxed text-zinc-400">

                No spam, unsubscribe anytime.

              </p>

              

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">

                <input

                  type="email"

                  required

                  placeholder="Enter your email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  className="bg-white text-zinc-900 placeholder-zinc-400 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full border-0"

                />

                <button

                  type="submit"

                  className="bg-white text-foreground hover:bg-zinc-100 active:scale-[0.98] transition-all font-bold rounded-full px-6 py-3 text-sm cursor-pointer whitespace-nowrap"

                >

                  Get Briefings

                </button>

              </form>

              

              <p className="text-[11px] text-zinc-400 mt-3 leading-relaxed">

                By subscribing you agree to our{" "}

                <Link href="/contact" className="underline hover:text-white transition-colors">

                  Privacy Policy

                </Link>

              </p>

            </div>

          </div>

        </div>

        <div className="space-y-6 border-t border-white/10 pt-8">

          <p className="text-[11px] leading-relaxed text-zinc-500 max-w-3xl">

            {COMPANY_REGISTRATION}. Proteq provides compliance advisory, learning,

            and systems guidance. Regulatory authorisation and licensing details

            are available on request where applicable.

          </p>



          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400">

              <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>

              <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>

              <Link href="/contact" className="hover:text-white transition-colors">Cookies Settings</Link>

            </div>



            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400">

              <span>© {new Date().getFullYear()} Proteq | All rights reserved.</span>

              

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel-dark border border-white/10 text-[11px] font-semibold text-zinc-300">

                <span className="relative flex h-1.5 w-1.5">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>

                </span>

                All Systems Operational

              </div>

            </div>

          </div>

        </div>



      </div>

    </footer>

  );

};



export default Footer;

