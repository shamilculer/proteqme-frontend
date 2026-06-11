# Phase 1 — Remaining Development Specification (Full)

> Companion to `ROADMAP.md` (the 2-day schedule). This document is the complete spec for every remaining piece of Phase 1 work, per the *Website Architecture Blueprint — Proteqme (V1)*.
>
> Decisions logged:
> - **Dummy/placeholder videos are acceptable** for the webinar funnel until client content arrives.
> - **CMS approved: Sanity** — webinars, testimonials, logos, stats, and contact details are CMS-managed (see Workstream 2B). Full page copy stays in code (Phase 2).

---

## 0. Current State Summary

**Done:** 7 routes (`/`, `/consultancy-advisory`, `/learning`, `/systems`, `/ai-investments`, `/become-a-partner`, `/contact`), full design system (Tailwind v4 + shadcn/radix), Header/Footer/MainCTA/MediumHero chrome, validated forms (react-hook-form + Zod), per-page metadata, animations, responsive nav.

**Not done:** `/book-demo` funnel, webinar funnel, all backend/CRM wiring, auto-responder emails, legal pages, SEO infrastructure, analytics, several content fixes, QA/deploy.

---

## WORKSTREAM 1 — `/book-demo` Funnel  ⛔ launch-blocker

The primary conversion path. Every page's main CTA points here.

### 1.1 New files

| File | Purpose |
|---|---|
| `src/app/(frontend)/book-demo/page.js` | Route + metadata (`Book a Free Demo \| Proteq`) |
| `src/components/forms/DemoBookingForm.jsx` | Multi-step form (client component) |

### 1.2 Form steps & fields

**Step 1 — Your details**
- Full Name (required)
- Email Address (required, email validation)
- Phone Number (required)
- Company / Organisation (required)

**Step 2 — What do you need?**
- Interest Area (required, select): Consultancy & Advisory / Learning / Systems / AI Investments / Not sure yet
- Message (optional, textarea)

**Step 3 — Pick a time**
- Cal.com (or Calendly) inline embed. Until the client account exists, render a styled placeholder panel with "Our team will email you available times" and submit on Step 2 completion.

**Success screen** — confirmation message, "what to expect" copy, links to the three service pages.

### 1.3 Behaviour

- Progress indicator across steps (reuse the pattern from `PartnerApplicationForm.jsx`, which is already a 2-step wizard).
- Capture lead source: read `?source=` query param and `document.referrer`; include in payload.
- On submit → `POST /api/leads` with `type: "demo"` → CRM tag `Demo Requested`, sub-tag = source page URL.
- Validation per step (Zod schema per step, same pattern as existing forms).
- Error state with retry on API failure.

### 1.4 CTA rewiring (sitewide audit)

Point every "Book a Free Demo" / "Book a Demo" / "Book a Consultation" CTA to `/book-demo` (with `?source=` where useful):

- `Header.jsx` sticky CTA button (desktop + mobile sheet menu)
- `MainCTA.jsx` (used on all service pages)
- `MediumHero.jsx` CTA props on each page
- Homepage `Hero` primary CTA
- All in-section CTA blocks (consultancy, learning, systems, partner, contact pages)
- Post-webinar upsell card (Workstream 2)

Per the blueprint CTA map: primary CTA visually dominant (gold/accent), secondary CTA per page must not compete.

---

## WORKSTREAM 2 — Webinar Funnel on `/learning`  ⛔ launch-blocker

The blueprint's "core content marketing engine". **Dummy videos approved** — use unlisted/sample YouTube URLs and placeholder thumbnails.

### 2.1 New files

| File | Purpose |
|---|---|
| `src/sanity/schemas/webinar.js` | Webinar catalogue schema (CMS-managed, see Workstream 2B) |
| `src/components/learning/WebinarLibrary.jsx` | Card grid + category filter row |
| `src/components/learning/WebinarCard.jsx` | Thumbnail, title, duration, category tag, Watch Now CTA |
| `src/app/(frontend)/learning/[slug]/page.js` | Webinar detail/player page (+ `generateStaticParams`, `generateMetadata`) |
| `src/components/learning/WebinarPlayer.jsx` | Player + gate + mid-roll prompt + upsell overlay (client component) |
| `src/components/forms/WebinarGateForm.jsx` | Email gate form |

### 2.2 Data model (Sanity `webinar` document — see Workstream 2B)

```js
{
  title: "Building a Defensible AML Programme",
  slug: { current: "aml-programme-fundamentals" },
  description: "...",
  category: "AML", // AML | Anti-Fraud | VARA | AI Investments | Compliance Ops
  duration: "45 min",
  thumbnail: image,                              // Sanity asset (placeholder images for now)
  videoUrl: "https://youtu.be/PLACEHOLDER",      // dummy video for now
  gated: false,                                  // first webinar per category ungated
  nextWebinar: reference,                        // → webinar; powers upsell path B
  resourcePack: file | null                      // optional gated PDF (upsell path C)
}
```

Seed with **5–10 dummy entries** spanning all five categories so filtering and the "next webinar" chain are testable.

### 2.3 Library grid (on `/learning`)

- Inserted between the existing hero and certification-prep sections.
- Webinars fetched via GROQ with ISR (`revalidate: 60`) — client publishes in the studio, site updates within a minute, no redeploy.
- 2–3 column responsive card grid; card style lifted from existing training-programme cards.
- Filter row above grid: All / AML / Anti-Fraud / VARA / AI Investments / Compliance Ops (client-side `useState` filter).

### 2.4 Detail page logic (`/learning/[slug]`)

| Condition | Behaviour |
|---|---|
| `gated: true`, not yet unlocked | Render `WebinarGateForm` instead of player. Fields: Name (req), Email (req), Company (opt), Interest Area (select). Submit → `POST /api/leads` (`type: "webinar-gate"`, tag `Webinar Viewer`, sub-tag = webinar title + category) → unlock |
| Unlocked / `gated: false` | `react-player` playback (already a dependency, used in Aurum sections) |
| Ungated, 50% progress (`onProgress`) | Dismissible inline email-capture prompt (same form, soft) |
| Video ends (`onEnded`) | **Post-webinar upsell overlay** (full-cover) |

- Persist unlock in `sessionStorage` (`webinar-unlocked:{slug}`) so refresh doesn't re-gate.
- Page also shows: title, category tag, duration, description, breadcrumb back to `/learning`.

### 2.5 Post-webinar upsell overlay (Coursera model)

Heading: *"You just completed [Webinar Title]."* Three cards:

1. **Book a Free Demo** → `/book-demo?source=webinar-{slug}`
2. **Watch the Next Webinar** → `/learning/{nextWebinar}` (hide if none)
3. **Download the Resource Pack** → email-gated; submit fires `type: "resource"`, tag `Resource Download`, sub-tag = resource name. *(Cut-list item #1: if time runs out, link this card to `/book-demo` instead.)*

### 2.6 GA4 events (wired in Workstream 6)

`webinar_gate_submit`, `webinar_play`, `webinar_complete`, `upsell_demo_click`, `upsell_next_click`, `upsell_resource_click`.

---

## WORKSTREAM 2B — CMS (Sanity)  ⛔ launch-blocker

Hosted CMS so the client can manage content without a developer. Sanity's backend is fully hosted — this adds **no database or server for us to run**. The studio lives inside the Next.js app.

### 2B.1 Setup

- [ ] Create Sanity project (free tier); note `projectId` + dataset (`production`)
- [ ] Install: `next-sanity`, `@sanity/image-url`, `sanity` (studio)
- [ ] Embed studio at `src/app/studio/[[...tool]]/page.js` — client logs in at `proteq.me/studio`
- [ ] `sanity.config.js` at repo root; CORS origin + tokens configured for the production domain

### 2B.2 New files

| File | Purpose |
|---|---|
| `sanity.config.js` | Studio config (schemas, project, basePath `/studio`) |
| `src/app/studio/[[...tool]]/page.js` | Embedded studio route |
| `src/sanity/client.js` | Configured `next-sanity` client |
| `src/sanity/queries.js` | All GROQ queries (webinars, testimonials, logos, stats, settings) |
| `src/sanity/image.js` | `@sanity/image-url` builder for `next/image` |
| `src/sanity/schemas/webinar.js` | See §2.2 |
| `src/sanity/schemas/testimonial.js` | Quote, name, title, photo (homepage §3.5) |
| `src/sanity/schemas/logo.js` | Image, name, url, type: `partner` \| `client` (homepage §3.3/§3.4) |
| `src/sanity/schemas/siteStats.js` | Value-strip counters (homepage §3.6) |
| `src/sanity/schemas/siteSettings.js` | Singleton: email, phones, address, social links, company reg no. (replaces hardcoded `src/data/siteContact.js`) |

### 2B.3 What is CMS-managed in Phase 1 (and what is not)

| CMS-managed ✅ | Stays in code ❌ (Phase 2) |
|---|---|
| Webinar catalogue | Page section copy (heroes, service modules, etc.) |
| Testimonials | Layout/sections themselves |
| Partner & client logos | Legal page text |
| Value-strip stats | Form fields/options |
| Contact details + company reg no. | Navigation structure |

Keeping page copy in code is deliberate: migrating every section into the CMS would blow the 2-day timeline for content that changes rarely. Add incrementally in Phase 2.

### 2B.4 Data fetching pattern

- Server components fetch via GROQ with ISR: `{ next: { revalidate: 60 } }` — publish in studio → live within a minute, no redeploy
- Webinar detail pages: `generateStaticParams` from Sanity + ISR for new slugs
- Images served from Sanity CDN through `next/image` (add `cdn.sanity.io` to `next.config.mjs` image domains)
- Empty-state handling: sections render gracefully when the client hasn't added content yet (e.g. testimonials hidden if none published)

### 2B.5 Client handover

- [ ] Invite client email as editor on the Sanity project (**client blocker #11**)
- [ ] 10-minute Loom or written guide: how to add a webinar, testimonial, logo

---

## WORKSTREAM 3 — Backend & Form Wiring  ⛔ launch-blocker

One API route serves every capture point. Recommended CRM/ESP: **Brevo** (free tier; contacts + tags + automations + transactional email + simple REST API). If the client mandates another CRM, only the adapter inside the route changes.

### 3.1 New files

| File | Purpose |
|---|---|
| `src/app/api/leads/route.js` | Single POST handler: validate (Zod) → upsert Brevo contact with attributes/tags → trigger transactional auto-responder template |
| `src/lib/brevo.js` | Thin Brevo API wrapper (contact upsert, transactional send) |
| `.env.local` / `.env.example` | `BREVO_API_KEY`, `BREVO_LIST_ID`, per-form template IDs, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` |

### 3.2 Lead tag mapping (blueprint §11, enforced server-side)

| `type` in payload | Lead Tag | Sub-tag | Auto-responder |
|---|---|---|---|
| `demo` | Demo Requested | Source page URL | Sequence 1, email 1 |
| `webinar-gate` | Webinar Viewer | Webinar title + category | Sequence 4 trigger |
| `contact` | Contact Enquiry | Enquiry type | Sequence 2 |
| `newsletter` | Newsletter | Source page URL | Welcome/confirm |
| `partner` | Partner Application | Category (Partner/Trainer/System Provider) | Receipt + 5-business-day expectation |
| `resource` | Resource Download | Resource name | Resource delivery email |

### 3.3 Forms to rewire (replace mock handlers with `fetch('/api/leads')`)

| File | Current behaviour | Change |
|---|---|---|
| `src/components/forms/ContactForm.jsx` | `console.log(data)`; `// TODO: handle error`; broken class strings (`placeholder:text-zinc-400text-sm`, missing space) | Real submit, error state, **fix the Tailwind class typos** |
| `src/components/forms/HeroLeadForm.jsx` | `console.log("Hero lead capture:", ...)` | Real submit (`type: "demo"` or `"contact"` per its copy), error state |
| `src/components/forms/PartnerApplicationForm.jsx` | `console.log(...)` + `// TODO: send to CRM / API` | Real submit (`type: "partner"`, category in payload), error state |
| `src/components/home/NewsletterSignup.jsx` | Fake 800 ms delay + `console.log("Syncing with CRM:", ...)` | Real submit (`type: "newsletter"`) |
| `src/components/global/Footer.jsx` newsletter | `alert("Subscribed successfully: ...")` | Real submit (`type: "newsletter"`), inline success message — **remove the alert** |
| *(new)* `DemoBookingForm.jsx` | — | `type: "demo"` |
| *(new)* `WebinarGateForm.jsx` | — | `type: "webinar-gate"` |

Every form must show: loading state, success confirmation, and error-with-retry (blueprint §15 Form UX).

---

## WORKSTREAM 4 — Page Completions

### 4.1 AI Investments (`/ai-investments`) — blueprint §7

- [ ] **Two outbound CTA cards** (side by side):
  - Card 1: *Visit Aurum Foundation* → `https://aurum-foundation.com/` (external, `rel="noopener"`)
  - Card 2: *Learn More* → second Aurum URL — **awaiting client**; ship with `#` + visually complete card, swap URL on receipt
- [ ] **Compliance disclaimer section** (placeholder copy from blueprint §7.5: "The information on this page is provided for educational purposes and does not constitute financial advice…") — flag for client confirmation
- [ ] Review the ~18 unmounted Aurum components (`AurumHero`, `AurumFAQ`, `AurumProducts`, `AurumEcosystem`, etc.): mount any that serve §7.2 (Aurum intro) / §7.4 (Why AI Investments), **delete the rest**

### 4.2 Homepage — blueprint §3

- [ ] Re-enable `<AurumFeature />` (currently commented out in `src/app/page.js`) — §3.7 feature block with *Discover Aurum →* CTA
- [ ] Mount `Clients` section (imported but never rendered) — OSL logo + placeholder slots — §3.4
- [ ] Verify `Partners` section displays OSL prominently (grayscale→colour hover per §3.3) — logos from Sanity
- [ ] Testimonials: fetch from Sanity; hide section gracefully until client publishes content (§3.5)
- [ ] Value strip: stats from Sanity `siteStats` (§3.6) — blueprint example numbers seeded as defaults
- [ ] Decide `HowItWorks` / `ServicePillars` (both unused): mount or delete

### 4.3 Become a Partner — blueprint §8

- [ ] Verify `PartnerApplicationForm` matches the spec exactly:
  - Step 1: Full Name, Email, Phone, Company (all req), Website (opt), Category dropdown (req)
  - Step 2 conditional fields per category (Partner: expertise multi-select, geo focus, client-base size, description / Trainer: subject areas, years, catalogue Y/N, format, bio-or-LinkedIn / System Provider: system name, category, target market, integrations, demo Y/N)
- [ ] Decide `PartnerProcess` (commented out on page): mount or delete
- [ ] "Apply Now" hero CTA scrolls to form

### 4.4 Contact — blueprint §9

- [ ] Verify form fields: Full Name (req), Email (req), Phone (opt), Company (opt), Enquiry Type dropdown — General / Request a Quote / Schedule a Call / Consultancy / Learning / Systems / Partnership (req), Message (req)
- [ ] Alternative-contact cards (email / phone / location) — replace placeholder data
- [ ] Map embed: fix address inconsistency (copy says IFC London, embed URL points at One Canada Square) or swap for a Schedule-a-Call calendar embed

### 4.5 Codebase hygiene

- [ ] Delete orphaned components not being shipped (≈18 unused Aurum sections, plus any of `HowItWorks` / `Clients` / `ServicePillars` / `LearningComingSoon` / `SystemsMetrics` / `SystemsSolutionAreas` / `PartnerProcess` not mounted above)
- [ ] Remove unused imports from `src/app/page.js`

---

## WORKSTREAM 5 — Legal Pages & Content Fixes  ⛔ launch-blocker

### 5.1 New routes

| File | Content |
|---|---|
| `src/app/(frontend)/privacy-policy/page.js` | Standard privacy policy (data collected via forms, CRM processing, analytics cookies, contact for requests). Flag for client legal review |
| `src/app/(frontend)/terms/page.js` | Standard terms of service. Flag for client legal review |

### 5.2 Footer fixes (`src/components/global/Footer.jsx`)

- [ ] Privacy → `/privacy-policy`; Terms → `/terms` (both currently link to `/contact`)
- [ ] Cookie-settings link: remove (no cookie banner in Phase 1 scope) or implement minimal consent
- [ ] Company registration placeholder `"Company No. [registration number]"` → real number (**client blocker #6**)
- [ ] Remove or justify decorative "All Systems Operational" badge

### 5.3 Contact data

- [ ] Migrate `src/data/siteContact.js` to the Sanity `siteSettings` singleton; components read from CMS
- [ ] Replace placeholder phones (`+44 (0) 20 7123 4567`, `+1 (212) 555-0199`), email, address in the studio (**client blocker #5**)

### 5.4 Asset audit  ⛔ build-blocker

Referenced in code but **missing from `public/`** — add real files or placeholders, or fix references:

- `proteq-logo.png`, `proteq-white.png`
- `hero-3.webp`, `consulting-bg.webp`, `consulting-intro.webp`, `systems-bg.webp`, `systems.webp`
- `partner.webp`, `trainer.webp`, `system-provider.webp`
- `/consultancy-services/1.webp` … `6.webp`
- `/consultancy-services/industries/1.jpg` … `6.jpg`
- *(new)* `/webinars/*` placeholder thumbnails for dummy webinar entries

Verification: `next build` + click through every page checking the network tab for 404s.

---

## WORKSTREAM 6 — SEO, Analytics & Production Hardening  ⛔ launch-blocker

### 6.1 New files

| File | Purpose |
|---|---|
| `src/app/sitemap.js` | All public routes incl. webinar detail pages |
| `src/app/robots.js` | Allow all; point to sitemap |
| `src/app/not-found.js` | Branded 404 |
| `src/app/error.js` | Branded error boundary |

### 6.2 Metadata & schema

- [ ] `metadataBase` in root layout (`NEXT_PUBLIC_SITE_URL`); canonical URLs on all pages
- [ ] Verify per-page meta titles against blueprint §14 keyword table (all 7 pages + book-demo + legal)
- [ ] JSON-LD: `Organization` + `WebSite` in root layout; `BreadcrumbList` on inner pages *(cut-list item #3)*
- [ ] OpenGraph + Twitter card images
- [ ] `generateMetadata` on webinar detail pages (title, description, OG image = thumbnail)

### 6.3 Analytics — GA4 via `@next/third-parties/google`

Conversion events (blueprint §14.3):

| Event | Trigger |
|---|---|
| `demo_form_submit` | `/book-demo` success |
| `contact_form_submit` | Contact form success |
| `webinar_gate_submit` | Gate form success |
| `partner_application_submit` | Partner form success |
| `newsletter_signup` | Either newsletter form success |
| `cta_click` (with `cta_label`, `page` params) | Primary CTA buttons sitewide |
| `webinar_play` / `webinar_complete` / `upsell_*_click` | Player events |

UTM parameters pass through untouched (GA4 handles natively); `?source=` param feeds CRM sub-tags.

### 6.4 Performance & images

- [ ] `next/image` for all content images, WebP, lazy loading below the fold, descriptive alt text
- [ ] Target: load < 3 s on throttled 4G; Lighthouse performance ≥ 90
- [ ] Particle backgrounds: verify `prefers-reduced-motion` is respected and mobile perf is acceptable

---

## WORKSTREAM 7 — Email Automation Sequences (configured in Brevo, not code)

### Sequence 1 — Free Demo Booking

| # | Timing | Subject direction | Content |
|---|---|---|---|
| 1 | Instant | Your demo is confirmed | Confirmation, demo details, calendar link, what to expect |
| 2 | 24 h before demo | Reminder: your demo is tomorrow | Time, link, prep material |
| 3 | Day 1 post-demo | Thank you + next steps | Recap, follow-up call link |
| 4 | Day 3 post-demo | A resource for you | Webinar link / resource per demo topic |
| 5 | Day 7 post-demo | Ready to move forward? | Consultation / quote CTA |

### Sequence 2 — Enquiry Auto-Responder

| # | Timing | Content |
|---|---|---|
| 1 | Instant | Receipt confirmation, 24 h response expectation, links to service pages |

### Sequence 3 — Re-Engagement *(cut-list item #2)*

| # | Timing | Content |
|---|---|---|
| 1 | Day 14 no response | New value prop / webinar / consultation offer |
| 2 | Day 30 no response | Final soft offer; then status → "Cold" |

### Sequence 4 — Post-Webinar *(cut-list item #2)*

| # | Timing | Content |
|---|---|---|
| 1 | 24 h post-webinar | Thanks + next recommended webinar + soft consultation CTA |
| 2 | Day 3 post-webinar | Related-category webinar + demo CTA |

**Test protocol:** one real submission from the live site per capture point → verify contact lands in Brevo with correct tag/sub-tag → verify auto-responder arrives.

---

## WORKSTREAM 8 — QA & Deploy

- [ ] `next build` clean (no errors; triage warnings)
- [ ] Full click-through: every page, every link, every form — desktop + mobile viewports
- [ ] Every form end-to-end: validation errors, loading, success, API-failure retry
- [ ] Webinar funnel end-to-end: gate → play → 50% prompt → complete → upsell → all three paths
- [ ] Cross-browser: Chrome, Safari, Firefox, Edge
- [ ] Accessibility (WCAG 2.1 AA): heading hierarchy, alt text, keyboard-navigable forms (incl. multi-step), focus states, contrast
- [ ] Lighthouse: perf ≥ 90, load < 3 s throttled 4G
- [ ] Deploy: Vercel → custom domain → HTTPS enforced
- [ ] Env vars set in Vercel (Brevo key, GA ID, site URL)
- [ ] Google Search Console: verify property, submit sitemap
- [ ] Production smoke test: one lead through every form → confirm CRM + email

---

## Client Dependencies (chase immediately; placeholders ship if late)

| # | Item | Blocks | Placeholder fallback |
|---|---|---|---|
| 1 | ~~Webinar videos~~ | ~~Webinar funnel~~ | ✅ **Resolved: dummy videos approved** |
| 2 | Second Aurum link URL | AI Investments card 2 | `#` link, card built |
| 3 | Testimonial quotes/names | Homepage §3.5 | Styled placeholder cards |
| 4 | Partner & client logos | Homepage §3.3/§3.4 | OSL + empty slots |
| 5 | Real phone / email / address | Contact, footer | Current placeholders flagged |
| 6 | Company registration number | Footer | Placeholder flagged |
| 7 | Final value-strip stats | Homepage §3.6 | Blueprint example numbers |
| 8 | Brevo (or chosen CRM) account | All form wiring, sequences | Dev account; migrate keys |
| 9 | Cal.com / Calendly account | `/book-demo` step 3 | "We'll email you times" panel |
| 10 | Domain + DNS | Deploy | Vercel preview URL |
| 11 | Client email for Sanity studio invite | CMS handover | Dev-only access until provided |

## Cut-List (drop in order if behind schedule)

1. Resource-pack download flow → upsell card links to `/book-demo` instead
2. Email Sequences 3 & 4 → ship 1 & 2; add post-launch
3. `BreadcrumbList` schema + OG image polish
4. Orphaned-component cleanup

## Out of Scope (Phase 2/3 — do not build)

Auth/accounts, payments/LMS/course marketplace, blog, affiliate programme + referral tracking, live sessions/scheduling, AI/LLM features, advanced CRM workflows/lead scoring.

---

## Appendix — Full File Manifest

### New files

```
src/app/(frontend)/book-demo/page.js
src/app/(frontend)/learning/[slug]/page.js
src/app/(frontend)/privacy-policy/page.js
src/app/(frontend)/terms/page.js
src/app/studio/[[...tool]]/page.js
src/app/api/leads/route.js
src/app/sitemap.js
src/app/robots.js
src/app/not-found.js
src/app/error.js
src/lib/brevo.js
sanity.config.js
src/sanity/client.js
src/sanity/queries.js
src/sanity/image.js
src/sanity/schemas/{webinar,testimonial,logo,siteStats,siteSettings}.js
src/components/forms/DemoBookingForm.jsx
src/components/forms/WebinarGateForm.jsx
src/components/learning/WebinarLibrary.jsx
src/components/learning/WebinarCard.jsx
src/components/learning/WebinarPlayer.jsx
.env.example
+ missing assets listed in §5.4 (webinar thumbnails now live in Sanity)
```

### Modified files

```
src/app/layout.js                        (metadataBase, GA4, JSON-LD)
src/app/page.js                          (AurumFeature, Clients, unused imports)
src/app/(frontend)/learning/page.js      (webinar library section)
src/app/(frontend)/ai-investments/page.js (link cards, disclaimer)
src/components/global/Header.jsx          (CTA → /book-demo)
src/components/global/Footer.jsx          (legal links, newsletter wiring, reg no.)
src/components/global/MainCTA.jsx         (CTA → /book-demo)
src/components/forms/ContactForm.jsx      (API wiring, class typo fix, error state)
src/components/forms/HeroLeadForm.jsx     (API wiring)
src/components/forms/PartnerApplicationForm.jsx (API wiring)
src/components/home/NewsletterSignup.jsx  (API wiring)
src/data/siteContact.js                   (migrated to Sanity siteSettings, then removed)
next.config.mjs                           (cdn.sanity.io image domain)
```

### Deleted files (pending §4.5 decisions)

```
~18 unused src/components/ai-investments/* sections
src/components/home/{HowItWorks,ServicePillars}.jsx (if not mounted)
src/components/learning/LearningComingSoon.jsx (if not used)
src/components/systems/{SystemsMetrics,SystemsSolutionAreas}.jsx
src/components/partner/PartnerProcess.jsx (if not mounted)
```
