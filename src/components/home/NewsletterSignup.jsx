"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import dynamic from "next/dynamic";
import CtaButton from "@/components/ui/CtaButton";
import { getLeadSource, postLead } from "@/lib/leads/postLead";
import { Button } from "@/components/ui/button";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const DEFAULT_TOPICS = ["AML & CFT", "RegTech", "Risk Advisory", "Anti-Fraud"];

const DEFAULTS = {
  eyebrow: "Stay Informed",
  heading: "Stay Ahead of Compliance",
  description:
    "Regulatory updates, training releases, and industry insights delivered to your inbox.",
  cardHeading: "Get Monthly Compliance Briefings",
  submitLabel: "Get Briefings",
  privacyNote: "By signing up you agree to our Privacy Policy. Tagged as Newsletter.",
  topics: DEFAULT_TOPICS,
  cta: { label: "Book a Free Consultation", href: "/contact", actionType: "link" },
  sectionId: "newsletter",
};

const NewsletterSignup = ({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  cardHeading = DEFAULTS.cardHeading,
  submitLabel = DEFAULTS.submitLabel,
  privacyNote = DEFAULTS.privacyNote,
  topics = DEFAULTS.topics,
  cta = DEFAULTS.cta,
  ctaLabel,
  ctaHref,
  sectionId = DEFAULTS.sectionId,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const particleId = sectionId ? `${sectionId}-particles` : "newsletter-particles";
  const action =
    cta ||
    (ctaLabel && ctaHref
      ? { label: ctaLabel, href: ctaHref, actionType: "link" }
      : null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await postLead({
        type: "newsletter",
        source: getLeadSource(),
        form: { email },
      });
      setSubscribed(true);
      setEmail("");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionReveal
      id={sectionId}
      className="section-light border-b border-zinc-200/70 pt-20 pb-16 relative overflow-hidden"
    >
      <ParticleNetwork variant="light" id={particleId} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Heading, Subtext, Demo CTA, and Benefits */}
          <ScrollReveal className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left" xOffset={-16} yOffset={0}>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-5 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs text-primary uppercase font-semibold tracking-wider">{eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-section-heading font-bold text-foreground tracking-tight leading-[1.15] mb-4">
              {heading}
            </h2>
            
            {/* Subtext */}
            <SectionDescription content={description} className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl" />

            {/* Book A Free Demo Button (Positioned under description) */}
            {action ? (
              <div className="mb-10 w-full sm:w-auto flex justify-center lg:justify-start">
                <CtaButton
                  cta={action}
                  variant="default"
                  glowingDot
                  showArrow
                  className="w-full sm:w-auto"
                />
              </div>
            ) : null}
          </ScrollReveal>

          {/* Right Column: Premium Boxed Subscription Card */}
          <ScrollReveal className="w-full lg:w-[50%] shrink-0" xOffset={16} yOffset={0}>
            <div className="bg-white border border-zinc-200/80 rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                  {cardHeading}
                </h3>
                <p className="mb-4 text-xs text-zinc-500">Unsubscribe anytime.</p>

                {subscribed ? (
                  <div className="inline-flex w-full items-center gap-2.5 px-5 py-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold animate-fade-in justify-center">
                    <Check className="size-5 stroke-[3] text-emerald-600 shrink-0" />
                    <span>Subscribed successfully! Welcome to Proteq.</span>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
                      <input
                        type="email"
                        required
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="bg-zinc-50 text-zinc-900 placeholder-zinc-400 border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/15 rounded-full px-5 py-3 h-13 text-sm focus:outline-none w-full transition-all disabled:opacity-50"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="shrink-0"
                      >
                        {isSubmitting ? "Subscribing..." : submitLabel}
                      </Button>
                    </form>
                    {submitError ? (
                      <p className="mt-2 text-sm text-primary">{submitError}</p>
                    ) : null}
                  </>
                )}

                <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed">
                  {privacyNote === DEFAULTS.privacyNote ? (
                    <>
                      By signing up you agree to our Privacy Policy. Tagged as{" "}
                      <span className="text-primary font-medium">Newsletter</span>.
                    </>
                  ) : (
                    privacyNote
                  )}
                </p>

                <div className="h-px bg-zinc-200 my-6" />

                {/* Covered Topics Pills */}
                <div>
                  <h4 className="text-zinc-400 uppercase text-[9px] font-bold tracking-widest mb-3 select-none">
                    Topics We Cover
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-zinc-50 border border-zinc-200/80 hover:border-primary/30 hover:text-primary transition-all text-zinc-700 text-xs px-3.5 py-1.5 rounded-full cursor-default font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </SectionReveal>
  );
};

export default NewsletterSignup;
