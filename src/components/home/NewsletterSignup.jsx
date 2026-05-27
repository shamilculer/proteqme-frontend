"use client";

import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate CRM Integration Action:
    // Subscriber details are tagged as "Newsletter" in the CRM
    // with source attribution "Homepage"
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
    <section className="bg-white border-t border-zinc-150 py-16 md:py-24 relative overflow-hidden">
      {/* Visual Accent: Geometric Grid Background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(228 228 231) 1.5px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Background Glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E25C8F]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200/60 shadow-xs text-center">
          <div className="max-w-2xl mx-auto">
            
            {/* Mail Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#E25C8F]/10 text-[#E25C8F] flex items-center justify-center mx-auto mb-6">
              <Mail className="size-5" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Stay Ahead of Compliance
            </h2>
            
            {/* Subtext */}
            <p className="text-zinc-600 text-base md:text-lg mb-8 leading-relaxed">
              Regulatory updates, training releases, and industry insights delivered to your inbox.
            </p>

            {/* Subscription Form State */}
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-semibold animate-fade-in">
                <Check className="size-4 stroke-[3]" />
                Thanks for subscribing! You will receive our next update.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-white text-zinc-900 placeholder-zinc-400 border border-zinc-250 focus:border-[#E25C8F] focus:ring-2 focus:ring-[#E25C8F]/10 rounded-full px-5 py-3 text-sm focus:outline-none w-full transition-all"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-zinc-950 text-white hover:bg-zinc-900 font-semibold px-8 py-3 text-sm transition-all shrink-0 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}

            {/* CRM Attribution Note */}
            <p className="text-zinc-400 text-[10px] mt-4 tracking-wide uppercase">
              Attribution: Homepage | Tag: Newsletter
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
