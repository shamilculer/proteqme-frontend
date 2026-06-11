# Phase 1 — 2-Day Completion Roadmap

> Source of truth: *Website Architecture Blueprint — Proteqme (V1)*.
> Current state: all 7 marketing pages built and styled; missing the demo funnel, webinar funnel, all backend wiring, legal pages, and SEO/analytics infrastructure.

---

## Guiding priorities

1. **Conversion paths first** — `/book-demo` and the webinar funnel are the reason the site exists.
2. **Every form must actually submit** — CRM + auto-responder, no `console.log`.
3. **Launch-blockers over polish** — legal pages, SEO, analytics before cosmetic tweaks.

**Recommended stack decisions (to avoid building a backend from scratch in 2 days):**

| Need | Recommendation | Why |
|---|---|---|
| CRM + email automation | **Brevo** (free tier) | Contacts, tags/attributes, and automation workflows in one tool; simple REST API |
| CMS | **Sanity** (free tier) | Hosted backend (no DB to run); studio embedded at `/studio`; ISR means client edits go live without redeploys |
| Calendar booking | **Cal.com** embed (or Calendly) | Drop-in embed on `/book-demo` step 3 |
| Form backend | **Next.js Route Handlers** (`src/app/api/leads/route.js`) | One endpoint, forwards to Brevo with source tags |
| Transactional email | Brevo transactional API | Auto-responders fire from the same place |
| Analytics | **GA4** via `@next/third-parties` | Built-in Next.js support, conversion events |

---

## DAY 1 — Build the missing features + wire the backend

> Note: CMS adds ~1.5h to Day 1. If Block 4 gets squeezed, push the orphaned-component cleanup and `PartnerProcess` decision to Day 2 evening (already cut-list item #4).

### Block 1 (morning, ~3h): `/book-demo` funnel  ⛔ launch-blocker

- [ ] Create `src/app/(frontend)/book-demo/page.js` with metadata
- [ ] Multi-step form component (`src/components/forms/DemoBookingForm.jsx`):
  - Step 1: Name, Email, Phone, Company
  - Step 2: Interest Area (Consultancy / Learning / Systems / AI Investments), short message
  - Step 3: Cal.com / Calendly inline embed for slot selection
  - Success confirmation screen
- [ ] Capture source page URL (referrer / `?source=` param) for CRM tagging
- [ ] Point ALL "Book a Free Demo" CTAs sitewide to `/book-demo` (Header sticky CTA, MainCTA, heroes, MediumHero) — audit with a grep for `book` / demo CTA hrefs

### Block 2 (midday, ~4.5h): CMS setup + Learning webinar funnel  ⛔ launch-blocker

**CMS (Sanity) setup (~1.5h):**
- [ ] Create Sanity project; install `next-sanity` + `@sanity/image-url`; embed studio at `/studio`
- [ ] Schemas: `webinar`, `testimonial`, `partnerLogo` / `clientLogo`, `siteStats`, `siteSettings` (contact details)
- [ ] GROQ query layer in `src/sanity/queries.js`; ISR (`revalidate: 60`) so content edits go live without redeploys
- [ ] Seed 5–10 dummy webinars (dummy YouTube URLs + placeholder thumbnails) across all 5 categories

**Webinar funnel (~3h):**
- [ ] Webinar library grid on `/learning` (data from Sanity) — card: thumbnail, title, duration, category tag, "Watch Now" CTA
- [ ] Category filter row (tab/filter bar above grid)
- [ ] Webinar detail page `src/app/(frontend)/learning/[slug]/page.js` (`generateStaticParams` from Sanity + ISR):
  - Email gate form (Name, Email, Company optional, Interest Area) shown before playback when `gated`
  - Player (react-player), description, category
  - **Post-webinar upsell screen** (on video end via `onEnded`): 3 cards — Book a Free Demo / Next webinar in series / Download resource pack (email gated)
- [ ] Keep existing certification-prep + CTA sections; mount `LearningComingSoon` only if client confirms

### Block 3 (afternoon, ~3h): Backend wiring — one lead API for everything  ⛔ launch-blocker

- [ ] `src/app/api/leads/route.js` — validates payload (Zod), forwards to Brevo:
  - creates/updates contact, applies **lead tag + sub-tag + source** per blueprint table:
    - Demo form → `Demo Requested` + source URL
    - Webinar gate → `Webinar Viewer` + webinar title/category
    - Contact form → `Contact Enquiry` + enquiry type
    - Newsletter → `Newsletter` + source URL
    - Partner application → `Partner Application` + category
    - Resource download → `Resource Download` + resource name
  - triggers Brevo transactional auto-responder (template ID per form type)
- [ ] `.env.local` + `.env.example`: `BREVO_API_KEY`, list IDs, template IDs
- [ ] Replace all 5 mock handlers with real `fetch('/api/leads')`:
  - `ContactForm` (also fix the broken `placeholder:text-zinc-400text-sm` class strings)
  - `HeroLeadForm`
  - `PartnerApplicationForm`
  - `NewsletterSignup` (homepage)
  - Footer newsletter (remove the `alert()`)
- [ ] Error states on every form (the existing `// TODO: handle error`)

### Block 4 (evening, ~2h): Page completions

- [ ] **AI Investments**: add the two outbound CTA cards (Aurum Foundation link + second link as "Learn More" placeholder until client confirms URL); add the compliance disclaimer section (placeholder copy from blueprint §7.5)
- [ ] **Homepage**: re-enable `AurumFeature` block; mount `Clients` section (OSL logo + placeholders); verify Partners section shows OSL; testimonials, logos, and value-strip stats fetched from Sanity
- [ ] **Become a Partner**: decide on `PartnerProcess` (mount or delete); confirm form matches blueprint Step 1 / Step 2 category-specific fields
- [ ] Delete or archive orphaned components you won't ship (≈18 unused Aurum sections, `ServicePillars`, `HowItWorks` if unused) — keeps the build clean

---

## DAY 2 — Launch readiness: legal, SEO, email automation, QA, deploy

### Block 5 (morning, ~2.5h): Legal pages + content fixes  ⛔ launch-blocker

- [ ] `src/app/(frontend)/privacy-policy/page.js` and `src/app/(frontend)/terms/page.js` (standard templates; flag for client legal review)
- [ ] Fix footer links: Privacy → `/privacy-policy`, Terms → `/terms`; remove or implement cookie settings link
- [ ] Replace placeholders: company registration number, phone numbers in `siteContact.js`, client email/address (chase client if not yet provided — see Blockers below)
- [ ] Asset audit: add/replace all missing images referenced in code (`proteq-logo.png`, `hero-3.webp`, consultancy service images, partner/trainer/system-provider images, etc.); run `next build` and click through every page to catch 404'd assets

### Block 6 (midday, ~2.5h): SEO + analytics  ⛔ launch-blocker

- [ ] `src/app/sitemap.js` and `src/app/robots.js`
- [ ] `metadataBase` + canonical URLs in root layout; verify per-page meta titles match blueprint §14 keyword table
- [ ] JSON-LD schema: `Organization` + `WebSite` (root layout), `BreadcrumbList` on inner pages
- [ ] OpenGraph/Twitter images
- [ ] GA4 via `@next/third-parties/google` — fire conversion events: `demo_form_submit`, `contact_form_submit`, `webinar_gate_submit`, `partner_application_submit`, `newsletter_signup`, plus CTA click events
- [ ] `not-found.js` + `error.js` pages
- [ ] Image optimisation pass: `next/image` everywhere, WebP, lazy loading, alt text

### Block 7 (afternoon, ~2.5h): Email automation sequences (in Brevo, not code)

- [ ] **Sequence 1 — Demo booking** (5 emails: instant confirm, 24h-before reminder, day-1 thanks, day-3 resource, day-7 CTA)
- [ ] **Sequence 2 — Enquiry auto-responder** (instant)
- [ ] **Sequence 3 — Re-engagement** (day 14, day 30 → mark Cold)
- [ ] **Sequence 4 — Post-webinar** (24h next-webinar email, day-3 related recommendation)
- [ ] Test each trigger end-to-end with a real submission from the site

### Block 8 (evening, ~2.5h): QA + deploy

- [ ] `next build` clean; fix any errors/warnings
- [ ] Full click-through of every page + every form on desktop and mobile viewport
- [ ] Cross-browser smoke test (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility pass: heading hierarchy, alt text, keyboard-navigable forms, contrast (WCAG 2.1 AA target)
- [ ] Lighthouse: aim ≥90 performance, page load < 3s on throttled 4G
- [ ] Deploy to Vercel; connect domain; enforce HTTPS
- [ ] Submit sitemap to Google Search Console
- [ ] Final verification: submit one lead through every form in production and confirm it lands in Brevo with correct tags + auto-responder received

---

## Blockers — chase the client TODAY (Day 1, first thing)

These cannot be built without client input; placeholders go in if not received by Day 2 midday:

| # | Needed from client | Used in |
|---|---|---|
| 1 | Webinar videos (or YouTube links) + titles/thumbnails | Learning funnel |
| 2 | Second Aurum link URL | AI Investments page |
| 3 | Testimonial quotes + names | Homepage |
| 4 | Partner & client logos (beyond OSL) | Homepage |
| 5 | Real phone, email, office address | Contact page, footer |
| 6 | Company registration number | Footer |
| 7 | Final value-strip stats ("15+ years", etc.) | Homepage |
| 8 | Brevo (or preferred CRM) account access | All form wiring |
| 9 | Cal.com / Calendly account | `/book-demo` |
| 10 | Domain + DNS access | Deploy |

## Cut-list (drop if running behind, in this order)

1. Resource-pack download flow (keep the upsell card, link it to `/book-demo` instead)
2. Sequences 3 & 4 email automations (ship Sequences 1 & 2 only; add rest post-launch)
3. `BreadcrumbList` schema + OG image polish
4. Orphaned-component cleanup (cosmetic, doesn't affect users)

## Explicitly OUT of scope (per blueprint Phase 2/3)

Auth/accounts, payments/LMS, blog, affiliate programme, live sessions, AI/LLM features, advanced lead scoring.
