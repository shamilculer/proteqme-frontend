"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowUpRight, ShieldAlert, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../ui/scroll-reveal";

const benefits = [
  {
    icon: ShieldAlert,
    title: "Monthly Regulatory Briefs",
    desc: "Stay updated on international compliance, CFT, and AML framework updates.",
  },
  {
    icon: BookOpen,
    title: "Priority Learning Access",
    desc: "Receive priority invites and discounts on upcoming webinars and course modules.",
  },
  {
    icon: Sparkles,
    title: "RegTech Blueprints",
    desc: "Get deep-dives and evaluations on the latest transaction monitoring tools.",
  }
];

const topics = ["AML & CFT", "RegTech", "Risk Advisory", "Anti-Fraud"];

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const crmPayload = {
      email: email,
      tag: "Newsletter",
      source: "Homepage",
    };

    console.log("Syncing with CRM:", crmPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail("");
    }, 800);
  };

  return (
    <section className="bg-panel-dark border-b border-zinc-700 pt-20 pb-16 relative overflow-hidden">
      {/* Immersive Ambient Glows */}
      <div className="absolute right-0 top-1/4 w-120 h-120 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-5" />
      <div className="absolute left-0 bottom-0 w-100 h-100 bg-panel-dark rounded-full blur-[120px] pointer-events-none -z-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Heading, Subtext, Demo CTA, and Benefits */}
          <ScrollReveal className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left" xOffset={-16} yOffset={0}>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs text-zinc-300 uppercase font-semibold tracking-wider">Stay Informed</span>
            </div>

            {/* Heading */}
            <h2 className="text-section-heading font-bold text-white tracking-tight leading-[1.15] mb-4">
              Stay Ahead of Compliance
            </h2>
            
            {/* Subtext */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              Regulatory updates, training releases, and industry insights delivered to your inbox.
            </p>

            {/* Book A Free Demo Button (Positioned under description) */}
            <div className="mb-10 w-full sm:w-auto flex justify-center lg:justify-start">
              <Button
                href="/contact"
                variant="white"
                glowingDot
                showArrow
                className="w-full sm:w-auto"
              >
                Book a Free Consultation
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Premium Boxed Subscription Card */}
          <ScrollReveal className="w-full lg:w-[50%] shrink-0" xOffset={16} yOffset={0}>
            <div className="bg-panel-dark/40 border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Subtle visual lighting inside card */}
              <div className="absolute right-0 top-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-bold tracking-tight text-white">
                  Get Monthly Compliance Briefings
                </h3>
                <p className="mb-4 text-xs text-zinc-400">Unsubscribe anytime.</p>

                {subscribed ? (
                  <div className="inline-flex w-full items-center gap-2.5 px-5 py-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-sm font-semibold animate-fade-in justify-center">
                    <Check className="size-5 stroke-[3] text-emerald-400 shrink-0" />
                    <span>Subscribed successfully! Welcome to Proteq.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="bg-panel-dark text-white placeholder-zinc-500 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/15 rounded-full px-5 py-3 h-13 text-sm focus:outline-none w-full transition-all disabled:opacity-50"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="secondary"
                      className="shrink-0"
                    >
                      {isSubmitting ? "Subscribing..." : "Get Briefings"}
                    </Button>
                  </form>
                )}

                <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed">
                  By signing up you agree to our Privacy Policy. Tagged as <span className="text-primary">Newsletter</span>.
                </p>

                <div className="h-px bg-[#2B183E] my-6" />

                {/* Covered Topics Pills */}
                <div>
                  <h4 className="text-zinc-500 uppercase text-[9px] font-bold tracking-widest mb-3 select-none">
                    Topics We Cover
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white/5 border border-white/10 hover:border-primary/30 hover:text-white transition-all text-zinc-300 text-xs px-3.5 py-1.5 rounded-full cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
