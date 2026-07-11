"use client";

import { useState } from "react";
import { itemKey, listKey } from "@/lib/listKey";
import { getLeadSource, postLead } from "@/lib/leads/postLead";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const SOCIAL_ICONS = {
  linkedin: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  x: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  youtube: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
  instagram: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  other: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
};

const FooterLink = ({ href, label, newTab, className }) => {
  const props = {
    href,
    className,
    ...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  return <Link {...props}>{label}</Link>;
};

const Footer = ({
  logo = { src: "/proteq-white.png", alt: "Proteq Logo" },
  navLinks = [],
  socialLinks = [],
  contact = {},
  newsletter = {},
  legalLinks = [],
  legalDisclaimer = "",
  copyrightName = "Proteq",
  showStatusBadge = true,
  statusBadgeLabel = "All Systems Operational",
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

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
    <footer className="relative z-20 shrink-0 bg-panel-dark text-zinc-300">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start space-y-8 lg:col-span-7">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo.src}
                width={160}
                height={47}
                alt={logo.alt}
                priority
              />
            </Link>

            {navLinks.length > 0 && (
              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-zinc-300">
                {navLinks.map((link, index) => (
                  <FooterLink
                    key={listKey(`${link.href}-${link.label}`, index, "nav")}
                    href={link.href}
                    label={link.label}
                    newTab={link.newTab}
                    className="hover:text-primary transition-colors"
                  />
                ))}
              </nav>
            )}

            <div className="grid w-full gap-3 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:grid-cols-2">
              {contact.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-zinc-500" />
                  <span>{contact.address}</span>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5 shrink-0 text-zinc-500" />
                  <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              )}
              {contact.phonePrimary && (
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 shrink-0 text-zinc-500" />
                  <a href={`tel:${contact.phonePrimary}`} className="hover:text-primary transition-colors">
                    {contact.phonePrimaryDisplay || contact.phonePrimary}
                  </a>
                </div>
              )}
              {contact.phoneSecondary && (
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 shrink-0 text-zinc-500" />
                  <a href={`tel:${contact.phoneSecondary}`} className="hover:text-primary transition-colors">
                    {contact.phoneSecondaryDisplay || contact.phoneSecondary}
                  </a>
                </div>
              )}
            </div>

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={listKey(social.url, index, "social")}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-panel-dark hover:bg-primary border border-white/10 hover:border-transparent flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                    title={social.label || social.platform}
                  >
                    {SOCIAL_ICONS[social.platform] || SOCIAL_ICONS.other}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex w-full flex-col items-start lg:col-span-5 lg:items-end">
            <div className="w-full max-w-md">
              {newsletter.heading && (
                <h3 className="mb-2 text-sm font-bold leading-snug text-zinc-100">
                  {newsletter.heading}
                </h3>
              )}
              {newsletter.description && (
                <p className="mb-4 text-xs leading-relaxed text-zinc-400">
                  {newsletter.description}
                </p>
              )}

              {subscribed ? (
                <p className="rounded-full bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                  Subscribed successfully. Welcome to Proteq.
                </p>
              ) : (
                <>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                    <input
                      type="email"
                      required
                      placeholder={newsletter.placeholder || "Enter your email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="bg-white text-zinc-900 placeholder-zinc-400 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full border-0 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white text-foreground hover:bg-zinc-100 active:scale-[0.98] transition-all font-bold rounded-full px-6 py-3 text-sm cursor-pointer whitespace-nowrap disabled:opacity-50"
                    >
                      {isSubmitting
                        ? "Subscribing..."
                        : newsletter.submitLabel || "Get Briefings"}
                    </button>
                  </form>
                  {submitError ? (
                    <p className="mt-2 text-sm text-primary">{submitError}</p>
                  ) : null}
                </>
              )}

              {(newsletter.privacyText || newsletter.privacyLinkLabel) && (
                <p className="text-[11px] text-zinc-400 mt-3 leading-relaxed">
                  {newsletter.privacyText}{" "}
                  {newsletter.privacyLinkLabel && (
                    <Link
                      href={newsletter.privacyLinkHref || "/contact"}
                      className="underline hover:text-white transition-colors"
                    >
                      {newsletter.privacyLinkLabel}
                    </Link>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-white/10 pt-8">
          {(contact.companyRegistration || legalDisclaimer) && (
            <p className="text-[11px] leading-relaxed text-zinc-500 max-w-3xl">
              {contact.companyRegistration && <>{contact.companyRegistration}. </>}
              {legalDisclaimer}
            </p>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {legalLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400">
                {legalLinks.map((link, index) => (
                  <FooterLink
                    key={listKey(`${link.href}-${link.label}`, index, "legal")}
                    href={link.href}
                    label={link.label}
                    newTab={link.newTab}
                    className="hover:text-white transition-colors"
                  />
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400">
              <span>© {new Date().getFullYear()} {copyrightName} | All rights reserved.</span>

              {showStatusBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel-dark border border-white/10 text-[11px] font-semibold text-zinc-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  {statusBadgeLabel}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
