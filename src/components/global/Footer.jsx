"use client";

import { useState } from "react";
import { listKey } from "@/lib/listKey";
import { getLeadSource, postLead } from "@/lib/leads/postLead";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

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

const columnHeadingClass =
  "mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500";

const FooterLink = ({ href, label, newTab, className }) => {
  const props = {
    href,
    className,
    ...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  return <Link {...props}>{label}</Link>;
};

function FooterColumn({ title, children, className }) {
  return (
    <div className={cn("min-w-0", className)}>
      {title ? <h3 className={columnHeadingClass}>{title}</h3> : null}
      {children}
    </div>
  );
}

const Footer = ({
  logo = { src: "/proteq-white.png", alt: "Proteq Logo" },
  description = "Regulatory, Accounting, and AML Compliance Advisory — delivering professional learning and RegTech-enabled governance solutions for regulated and supervised organisations",
  navLinks = [],
  socialLinks = [],
  contact = {},
  newsletter = {},
  legalLinks = [],
  copyrightName = "Proteq",
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

  const contactItems = [
    contact.address
      ? { icon: MapPin, label: contact.address, href: null }
      : null,
    contact.email
      ? {
          icon: Mail,
          label: contact.email,
          href: `mailto:${contact.email}`,
        }
      : null,
    contact.phonePrimary
      ? {
          icon: Phone,
          label: contact.phonePrimaryDisplay || contact.phonePrimary,
          href: `tel:${contact.phonePrimary}`,
        }
      : null,
    contact.phoneSecondary
      ? {
          icon: Phone,
          label: contact.phoneSecondaryDisplay || contact.phoneSecondary,
          href: `tel:${contact.phoneSecondary}`,
        }
      : null,
  ].filter(Boolean);

  return (
    <footer className="relative z-20 shrink-0 border-t border-white/10 bg-panel-dark text-zinc-300">
      <div className="container mx-auto px-4 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          {/* Brand */}
          <FooterColumn className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src={logo.src}
                width={148}
                height={44}
                alt={logo.alt}
                priority
              />
            </Link>

            {description ? (
              <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            ) : null}

            {socialLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social, index) => (
                  <a
                    key={listKey(social.url, index, "social")}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-transparent hover:bg-primary hover:text-white"
                    title={social.label || social.platform}
                  >
                    {SOCIAL_ICONS[social.platform] || SOCIAL_ICONS.other}
                  </a>
                ))}
              </div>
            ) : null}
          </FooterColumn>

          {/* Explore */}
          {navLinks.length > 0 ? (
            <FooterColumn title="Explore" className="lg:col-span-2">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <FooterLink
                    key={listKey(`${link.href}-${link.label}`, index, "nav")}
                    href={link.href}
                    label={link.label}
                    newTab={link.newTab}
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  />
                ))}
              </nav>
            </FooterColumn>
          ) : null}

          {/* Contact */}
          {contactItems.length > 0 ? (
            <FooterColumn title="Contact" className="lg:col-span-3">
              <ul className="flex flex-col gap-3.5">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <Icon className="mt-0.5 size-3.5 shrink-0 text-zinc-500" />
                      <span className="text-sm leading-relaxed text-zinc-300">
                        {item.label}
                      </span>
                    </>
                  );

                  return (
                    <li key={listKey(item.label, index, "contact")}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-start gap-2.5 transition-colors hover:text-white"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-2.5">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </FooterColumn>
          ) : null}

          {/* Newsletter */}
          <FooterColumn
            title="Newsletter"
            className="sm:col-span-2 lg:col-span-3"
          >
            {newsletter.heading ? (
              <p className="mb-2 text-sm font-medium leading-snug text-zinc-100">
                {newsletter.heading}
              </p>
            ) : null}
            {newsletter.description ? (
              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                {newsletter.description}
              </p>
            ) : null}

            {subscribed ? (
              <p className="rounded-full bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                Subscribed successfully. Welcome to Proteq.
              </p>
            ) : (
              <>
                <form
                  onSubmit={handleSubscribe}
                  className="flex w-full flex-col gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder={newsletter.placeholder || "Enter your email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50"
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
              <p className="mt-4 text-[11px] leading-relaxed text-zinc-500">
                {newsletter.privacyText}{" "}
                {newsletter.privacyLinkLabel ? (
                  <Link
                    href={newsletter.privacyLinkHref || "/contact"}
                    className="underline transition-colors hover:text-white"
                  >
                    {newsletter.privacyLinkLabel}
                  </Link>
                ) : null}
              </p>
            )}
          </FooterColumn>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 md:mt-12">
          <div className="flex flex-col items-center gap-4 text-center">
            {legalLinks.length > 0 ? (
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
                {legalLinks.map((link, index) => (
                  <FooterLink
                    key={listKey(`${link.href}-${link.label}`, index, "legal")}
                    href={link.href}
                    label={link.label}
                    newTab={link.newTab}
                    className="transition-colors hover:text-white"
                  />
                ))}
              </div>
            ) : null}

            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} {copyrightName} · All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
