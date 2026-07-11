import type { DataFromGlobalSlug, Payload, PayloadRequest, RequiredDataFromCollectionSlug } from 'payload'

import { normalizeProteqPageData } from './normalizeRichText'

function carouselHero(slides: typeof homeSlides) {
  return { type: 'carousel' as const, slides }
}

function mediumHero(
  data: Omit<Record<string, unknown>, 'type'> & { heading: string },
) {
  return { type: 'medium' as const, ...data }
}

function pageTitleHero(data: { title: string; pageTitleImagePath?: string; particleId?: string }) {
  return { type: 'pageTitle' as const, ...data }
}

const partnerLogos = [
  { name: 'OSL', website: 'https://osl.com', logoPath: '/partners/osl.png' },
  { name: 'Chainalysis', website: 'https://www.chainalysis.com', logoPath: '/partners/chainalysis.png' },
  { name: 'Sumsub', website: 'https://sumsub.com', logoPath: '/partners/sumsub (1).png' },
  { name: 'Elliptic', website: 'https://www.elliptic.co', logoPath: '/partners/elliptinc.png' },
]

const homeSlides = [
  {
    tag: 'Consultancy & Advisory',
    title: 'Compliance Frameworks Built for Regulatory Scrutiny',
    description:
      'AML programme design, gap analysis, and regulator-ready documentation — shaped by practitioners who have been through examinations.',
    cta: {
      label: 'Book a Free Consultation',
      actionType: 'popup',
      popup: 'consultation',
      glowingDot: true,
      showArrow: true,
    },
    imagePath: '/consulting-bg.webp',
    imageAlt: 'Compliance advisory and regulatory consultation',
  },
  {
    tag: 'Professional Learning',
    title: 'Training Your Team Can Apply From Day One',
    description:
      'Webinars, structured courses, and certification preparation led by compliance professionals — not generic instructors.',
    cta: {
      label: 'Browse Courses',
      actionType: 'link',
      link: { type: 'custom', url: '/learning' },
      glowingDot: true,
      showArrow: true,
    },
    imagePath: '/learning-3.webp',
    imageAlt: 'Professional compliance learning and training',
  },
  {
    tag: 'RegTech Systems',
    title: 'The Right Systems for the Right Risks',
    description:
      'Vendor-neutral evaluation of AML screening, transaction monitoring, and KYC platforms — free from commissions and kickbacks.',
    cta: {
      label: 'Request a Systems Assessment',
      actionType: 'link',
      link: { type: 'custom', url: '/systems' },
      showArrow: true,
    },
    imagePath: '/system-provider.webp',
    imageAlt: 'RegTech systems and compliance technology',
  },
  {
    tag: 'AI Investments',
    title: 'Explore AI-Native Investment Pathways',
    description:
      'Discover the Aurum ecosystem — AI trading intelligence, gold-backed products, and regulated digital asset opportunities.',
    cta: {
      label: 'Explore AI Investments',
      actionType: 'link',
      link: { type: 'custom', url: '/ai-investments' },
      showArrow: true,
    },
    imagePath: '/aurum/aurum.webp',
    imageAlt: 'AI investments and the Aurum ecosystem',
  },
]

const homeTestimonials = [
  {
    quote:
      'Their gap analysis was thorough and regulator-ready. We received a prioritised remediation plan our board could act on immediately.',
    role: 'Chief Compliance Officer',
    company: 'Mid-size European Bank',
  },
  {
    quote:
      'The AML programme redesign balanced regulatory expectations with how our team actually works day to day. Implementation support was practical throughout.',
    role: 'Head of Financial Crime',
    company: 'Regional Payment Provider',
  },
  {
    quote:
      'Training was scenario-led and immediately relevant to case reviews. Our analysts applied the frameworks in live investigations the following week.',
    role: 'VP of AML Operations',
    company: 'Digital Asset Exchange',
  },
]

const learningTestimonials = [
  {
    quote:
      'The AML programme was practical, well structured, and immediately relevant to our day-to-day compliance work.',
    role: 'Compliance Manager',
    company: 'Regulated Financial Services Firm',
  },
  {
    quote:
      'Facilitators understand regulated environments. The sessions were engaging, scenario-led, and far more useful than generic off-the-shelf training.',
    role: 'Head of Learning & Development',
    company: 'Regional Bank',
  },
]

const consultancyModules = [
  {
    number: '01',
    anchorId: 'aml-advisory',
    title: 'AML Compliance Programme Design',
    summary:
      'Build or restructure your AML/CFT programme from risk assessment through to reporting.',
    details: [
      { text: 'Customer due diligence (CDD)' },
      { text: 'Enhanced due diligence (EDD)' },
      { text: 'Suspicious activity reporting (SAR)' },
      { text: 'Transaction monitoring frameworks' },
    ],
    icon: 'shieldCheck',
    imagePath: '/consultancy-services/1.webp',
  },
  {
    number: '02',
    anchorId: 'regulatory-gap-analysis',
    title: 'Regulatory Gap Analysis',
    summary:
      'Comprehensive review of current compliance infrastructure against applicable regulations.',
    details: [
      { text: 'FATF recommendations' },
      { text: 'Local regulatory requirements' },
      { text: 'VARA obligations for VASPs' },
      { text: 'EU Anti-Money Laundering Directives where relevant' },
    ],
    icon: 'searchCheck',
    imagePath: '/consultancy-services/2.webp',
  },
  {
    number: '03',
    anchorId: 'policy-programme-design',
    title: 'Policy & Procedure Documentation',
    summary:
      'Drafting, reviewing, and updating compliance policies, standard operating procedures, and internal control documentation.',
    details: [
      { text: 'Compliance policies' },
      { text: 'Standard operating procedures' },
      { text: 'Internal control documentation' },
      { text: 'Regulatory examination standards' },
    ],
    icon: 'fileCheck',
    imagePath: '/consultancy-services/3.webp',
  },
  {
    number: '04',
    anchorId: 'anti-fraud-advisory',
    title: 'Anti-Fraud Programme Advisory',
    summary:
      'Design and implementation of fraud risk management programmes, internal investigation protocols, and whistleblower frameworks.',
    details: [
      { text: 'Fraud risk management programmes' },
      { text: 'Internal investigation protocols' },
      { text: 'Whistleblower frameworks' },
      { text: 'ACAMS and international anti-fraud standards' },
    ],
    icon: 'checkCircle',
    imagePath: '/consultancy-services/4.webp',
  },
  {
    number: '05',
    anchorId: 'vara-compliance',
    title: 'VARA & Digital Asset Compliance',
    summary:
      'Specialised advisory for firms operating under the Dubai Virtual Assets Regulatory Authority framework.',
    details: [
      { text: 'Exchange traded derivatives (ETD) obligations' },
      { text: 'Licensing requirements' },
      { text: 'Suitability assessments' },
      { text: 'Insurance fund design and recordkeeping architecture' },
    ],
    icon: 'landmark',
    imagePath: '/consultancy-services/5.webp',
  },
  {
    number: '06',
    anchorId: 'training-capacity-building',
    title: 'Training & Capacity Building',
    summary:
      'In-house training programmes, compliance team upskilling, and certification preparation for ACAMS CAFS and related designations.',
    details: [
      { text: 'In-house team training' },
      { text: 'Compliance team upskilling' },
      { text: 'Certification preparation' },
      { text: 'Cross-linked learning pathways' },
    ],
    icon: 'graduation',
    imagePath: '/consultancy-services/6.webp',
  },
]

const proteqPages = [
  {
    title: 'Home',
    slug: 'home',
    hero: carouselHero(homeSlides),
    meta: {
      title: 'Proteq | Compliance Consulting, Training & Systems',
      description:
        'AML compliance advisory, professional regulatory training, and RegTech systems for financial institutions, VASPs, and fintechs.',
      keywords: 'compliance consulting, AML advisory, anti-fraud training',
    },
    layout: [
      {
        blockType: 'proteqContentSection',
        variant: 'overviewSplit',
        eyebrow: 'Why Proteq',
        heading: 'Compliance Expertise. Intelligent Learning. Systems That Work.',
        description:
          'Advisory, training, and technology for organisations navigating AML, anti-fraud, and regulatory complexity.',
        body: 'Built by practitioners. Fiercely independent. Trusted across markets.',
        imagePath: '/who-we-are.webp',
      },
      {
        blockType: 'proteqLogoBar',
        type: 'partners',
        eyebrow: 'Partners',
        heading: 'Strategic Partners',
        description:
          "We collaborate with leading RegTech and digital asset platforms to extend screening, monitoring, and identity capability.",
        logos: partnerLogos,
      },
      {
        blockType: 'proteqStatsStrip',
        eyebrow: 'Our Values',
        heading: 'Where Expertise, Compliance, and Trust Merge',
        description:
          'A track record built on practitioner expertise — helping organisations mitigate risk, navigate evolving frameworks, and operate with defensible, audit-ready compliance programmes.',
        imagePath: '/hero-3.webp',
        imageAlt: 'Proteq compliance professionals at work',
        stats: [
          {
            value: '15+',
            label: 'Years in Compliance',
            description:
              'Proven track record designing secure compliance structures and mitigating high-stakes risk.',
            icon: 'shield',
          },
          {
            value: '200+',
            label: 'Professionals Trained',
            description:
              'Empowering teams with practical, audit-ready regulatory knowledge and operational skills.',
            icon: 'graduation',
          },
          {
            value: '10+',
            label: 'Jurisdictions',
            prefix: 'Across',
            description:
              'Expertise navigating complex cross-border financial systems and regional mandates.',
            icon: 'globe',
          },
          {
            value: '40+',
            label: 'Institutions Served',
            description:
              'Approved compliance frameworks built for banks, exchanges, and regulated organisations.',
            icon: 'building',
          },
        ],
      },
      {
        blockType: 'proteqTestimonials',
        eyebrow: 'Testimonial',
        heading: 'What Our Clients Say',
        testimonials: homeTestimonials,
      },
      {
        blockType: 'proteqMainCta',
        heading: 'Ready to Strengthen Your Compliance?',
        description:
          "Book a free consultation to discuss your organisation's compliance requirements and explore how we can help.",
        imagePath: '/hero-3.webp',
        buttons: [
          { label: 'Book a Free Demo', href: '/book-demo', variant: 'white', glowingDot: true, showArrow: true },
          { label: 'Explore Our Services', href: '/consultancy-advisory', variant: 'outline', showArrow: true },
        ],
      },
    ],
  },
  {
    title: 'Consultancy & Advisory',
    slug: 'consultancy-advisory',
    hero: mediumHero({
      eyebrow: 'Consultancy & Advisory',
      heading: 'Navigate Compliance with Confidence',
      description:
        'From AML programme design to regulatory gap analysis, we deliver practical advisory that protects your organisation and satisfies your regulators.',
      imagePath: '/consulting-bg.webp',
      imageAlt: 'Consultancy and advisory services',
      enableParticles: true,
      particleId: 'consultancy-hero-particles',
      highlights: [
        { text: 'AML & Anti-Fraud Advisory', href: '#aml-advisory' },
        { text: 'Regulatory Gap Analysis', href: '#regulatory-gap-analysis' },
        { text: 'VARA Compliance Support', href: '#vara-compliance' },
        { text: 'Policy & Programme Design', href: '#policy-programme-design' },
      ],
      buttons: [
        { label: 'Book a Free Consultation', href: '/contact', variant: 'default', glowingDot: true, showArrow: true },
        { label: 'Explore Advisory Modules', href: '#advisory-modules', variant: 'white', showArrow: true },
      ],
    }),
    meta: {
      title: 'AML Compliance Advisory & Anti-Fraud Consulting | Proteq',
      description:
        'AML compliance advisory, regulatory gap analysis, and anti-fraud programme design for financial institutions, VASPs, and fintechs.',
      keywords: 'AML compliance advisory, anti-fraud consulting, VARA compliance',
    },
    layout: [
      {
        blockType: 'proteqOverviewRich',
        variant: 'simple',
        sectionId: 'consultancy-overview-particles',
        eyebrow: 'Overview',
        heading: 'Advisory Built for the Real Work of Compliance',
        paragraphs: [
          { text: "Our consulting practice works with financial institutions, virtual asset service providers, fintechs, and regulated businesses to build, audit, and strengthen their compliance operations." },
          { text: "Advisory engagements cover anti-money laundering frameworks, know your customer processes, sanctions screening programmes, and anti-fraud controls. The work is shaped around the organisation's actual risk exposure, systems, people, and regulatory duties." },
          { text: 'This is not theoretical guidance. Each engagement is grounded in hands-on implementation, with clear findings, usable documentation, filing support where required, and practical training for the teams responsible for execution.' },
        ],
        cta: {
          label: 'Book a Free Consultation',
          actionType: 'link',
          link: { type: 'custom', url: '/contact' },
          showArrow: true,
        },
        imagePath: '/consulting-intro.webp',
        imageAlt: 'Compliance advisory team reviewing regulatory controls',
      },
      {
        blockType: 'proteqModuleCarousel',
        sectionId: 'advisory-modules',
        eyebrow: 'What We Advise On',
        heading: 'Specialised Advisory for Complex Regulatory Environments',
        description:
          'Practical support across AML, anti-fraud, digital asset regulation, and governance — from programme design through to documentation and team enablement.',
        modules: consultancyModules,
      },
      {
        blockType: 'proteqWhyChoose',
        sectionId: 'consultancy-why-particles',
        eyebrow: 'Why Choose Us',
        heading: 'Advisory That Holds Up When It Matters',
        description:
          'Our work is designed for regulated teams that need clarity, documentation, and defensible decisions without unnecessary complexity.',
        imagePath: '/consulting-bg.webp',
        imageAlt: 'Regulated business environment for compliance advisory',
        points: [
          {
            title: 'Practical, Not Theoretical',
            description:
              'Every engagement is built around usable documentation, clear findings, and implementation steps your team can act on.',
            icon: 'clipboardCheck',
          },
          {
            title: 'Regulatory Depth',
            description:
              'Advisory is grounded in AML, anti-fraud, digital asset, and regulatory control expectations across demanding environments.',
            icon: 'shieldCheck',
          },
          {
            title: 'Tailored Risk Lens',
            description:
              'We shape recommendations around your actual exposure, customer base, products, systems, and operating model.',
            icon: 'target',
          },
          {
            title: 'Audit-Ready Outputs',
            description:
              'Policies, procedures, assessments, and remediation plans are structured for internal use and external examination.',
            icon: 'fileCheck',
          },
        ],
      },
      {
        blockType: 'proteqApproach',
        sectionId: 'consultancy-approach-heading',
        eyebrow: 'Our Approach',
        heading: 'A Clear Route from Review to Implementation',
        description:
          'Each advisory engagement follows a practical sequence: understand the risk, define the required controls, produce the evidence, and help your team operate with confidence.',
        quote:
          'Structured enough for regulator-facing work. Flexible enough for the realities of your operating model.',
        steps: [
          {
            title: 'Discover the Risk Picture',
            description:
              'We review your existing compliance documentation, interview key personnel, map your customer risk profile, and benchmark your controls against FATF recommendations and local regulatory requirements.',
          },
          {
            title: 'Design the Control Path',
            description:
              'You receive a prioritised remediation roadmap with clear ownership, timelines, and success criteria — structured for both internal governance and regulator presentation.',
          },
          {
            title: 'Build the Evidence',
            description:
              'Deliverables include AML policy documentation, KYC/EDD procedures, risk appetite statements, suspicious activity reporting protocols, and training materials.',
          },
          {
            title: 'Embed the Programme',
            description:
              'Includes a 2-week knowledge transfer period, team Q&A sessions, and 30-day post-engagement support.',
          },
        ],
      },
      {
        blockType: 'proteqCardGrid',
        cardStyle: 'overlay',
        eyebrow: 'Industries We Serve',
        heading: 'Advisory for Regulated and High-Exposure Sectors',
        description:
          'We support organisations where customer risk, transaction activity, and documentation must withstand close internal and regulatory scrutiny.',
        layout: 'carousel-grid',
        columns: '3',
        items: [
          {
            title: 'Financial Institutions and Banks',
            tag: 'AML governance, customer risk, and reporting controls',
            icon: 'landmark',
            imagePath: '/consultancy-services/industries/1.jpg',
          },
          {
            title: 'Virtual Asset Service Providers',
            tag: 'Digital asset compliance and VARA regulatory readiness',
            icon: 'badgeDollar',
            imagePath: '/consultancy-services/industries/2.jpg',
          },
          {
            title: 'Fintech and Payment Providers',
            tag: 'Onboarding, monitoring, and payment risk programmes',
            icon: 'walletCards',
            imagePath: '/consultancy-services/industries/3.jpg',
          },
          {
            title: 'Insurance and Wealth Management',
            tag: 'Client due diligence, suitability, and control documentation',
            icon: 'banknote',
            imagePath: '/consultancy-services/industries/4.jpg',
          },
          {
            title: 'Real Estate and High-Value Dealers',
            tag: 'Transaction screening and source-of-funds controls',
            icon: 'gem',
            imagePath: '/consultancy-services/industries/5.jpg',
          },
          {
            title: 'Non-Profit Organisations',
            tag: 'Donor oversight, funds flow, and governance safeguards',
            icon: 'handHeart',
            imagePath: '/consultancy-services/industries/6.jpg',
          },
        ],
      },
      {
        blockType: 'proteqMainCta',
        heading: 'Ready to Strengthen Your Compliance?',
        description:
          "Book a free consultation to discuss your organisation's compliance requirements, regulatory exposure, and how Proteq can support your team.",
        imagePath: '/implementation.webp',
        buttons: [
          { label: 'Book a Free Consultation', href: '/contact', variant: 'white', glowingDot: true, showArrow: true },
          { label: 'Request a Quote', href: '/contact', variant: 'outline', showArrow: true },
        ],
      },
    ],
  },
  {
    title: 'Learning',
    slug: 'learning',
    hero: mediumHero({
      eyebrow: 'Professional Learning',
      heading: 'The PROTEQme Training Experience',
      description:
        'Practitioner-led programmes that deliver quality training, enhance learner experience, and build compliance capability across AML, certification prep, and corporate upskilling.',
      imagePath: '/learning-5.webp',
      imageAlt: 'Professional compliance learning and webinar session',
      enableParticles: true,
      particleId: 'learning-hero-particles',
      highlights: [
        { text: 'AML Training', href: '#aml-financial-crime-training' },
        { text: 'Certification Preparation', href: '#certification-preparation' },
        { text: 'Compliance Training', href: '#corporate-compliance-training' },
        { text: 'Webinar Library', href: '#webinar-learning-library' },
        { text: 'Team Upskilling', href: '#team-upskilling-workshops' },
        { text: 'AI & VARA Education', href: '#ai-vara-digital-asset-education' },
      ],
      buttons: [
        { label: 'Browse Courses', href: '#training-programmes', variant: 'default', glowingDot: true, showArrow: true },
        { label: 'View Webinars', href: '#training-programmes', variant: 'white', showArrow: true },
      ],
    }),
    meta: {
      title: 'Compliance Training & AML Webinars | Proteq',
      description:
        'Practitioner-led AML training, certification preparation, and corporate compliance programmes for regulated teams.',
      keywords: 'compliance training, AML webinars, CAFS certification prep',
    },
    layout: [
      {
        blockType: 'proteqLearningIntro',
        sectionId: 'learning-intro-particles',
        leadText:
          'Training that turns regulatory knowledge into day-to-day capability—for compliance teams, risk professionals, and leaders who need more than slides on a screen.',
        eyebrow: 'How We Teach',
        heading: 'Learning designed for regulated environments',
        description:
          'From AML fundamentals to certification preparation, our programmes combine structured curricula with practitioner insight—so your team leaves every session ready to act, not just informed.',
        imagePath: '/learning-bg.webp',
        imageAlt: 'Professional compliance training session',
        secondaryImagePath: '/learning-4.webp',
        statValue: '200+',
        statLabel: 'Professionals trained across compliance disciplines',
        steps: [
          {
            step: '01',
            title: 'Diagnose the gap',
            description:
              'We map your regulatory context, team roles, and skill priorities before recommending a learning path.',
            icon: 'clipboardCheck',
          },
          {
            step: '02',
            title: 'Learn with practitioners',
            description:
              'Sessions led by compliance professionals—grounded in real cases, not abstract theory.',
            icon: 'monitorPlay',
          },
          {
            step: '03',
            title: 'Apply with confidence',
            description:
              'Workplace-ready frameworks, materials, and follow-through so training sticks after the session ends.',
            icon: 'graduation',
          },
        ],
        formats: [
          { label: 'Expert-Led Webinars', icon: 'monitorPlay' },
          { label: 'CAFS Preparation', icon: 'graduation' },
          { label: 'In-House Programmes', icon: 'users' },
          { label: 'Certification Tracks', icon: 'layers' },
        ],
        ctaLabel: 'Browse Courses',
        ctaHref: '#training-programmes',
        secondaryCtaLabel: 'View Webinars',
        secondaryCtaHref: '#learning-webinars',
      },
      {
        blockType: 'proteqOverviewRich',
        variant: 'expertise',
        sectionId: 'learning-expertise',
        eyebrow: 'Proof of Expertise',
        heading: 'Learn From the Practitioners, Not the Textbooks',
        description:
          'Your training is led by compliance professionals with live regulatory, examination, and programme-building experience — not generic instructors reading from slides.',
        paragraphs: [
          { text: 'Our lead faculty brings hands-on AML, sanctions, and anti-fraud experience across Tier 1 banking, digital asset exchanges, and regulated fintech. They have led FATF-aligned gap analyses, managed regulatory examinations, and designed AML programmes adopted across the UK, EU, UAE, and APAC.' },
          { text: 'Training delivery draws on direct advisory work with FCA, VARA, and DFSA-regulated entities — so every session reflects how compliance is examined and operated in practice.' },
        ],
        imagePath: '/trainer.webp',
        imageAlt: 'Proteq Senior Compliance Faculty facilitating a professional learning session',
        stats: [
          { value: '15+', label: 'Years in compliance' },
          { value: 'ACAMS', label: 'Certified practitioner' },
          { value: 'Tier 1', label: 'Banking & VASP exposure' },
        ],
        overlayLeft: {
          eyebrow: 'Jurisdictions',
          text: 'UK · EU · UAE (VARA) · US · GCC · APAC',
        },
        overlayRight: {
          eyebrow: 'Frameworks',
          text: 'FCA · VARA · DFSA · MAS · FinCEN-aligned frameworks',
        },
      },
      {
        blockType: 'proteqCardGrid',
        cardStyle: 'programme',
        sectionId: 'training-programmes',
        eyebrow: 'Training Programmes',
        heading: 'A comprehensive portfolio for every professional',
        description:
          'From standardised certifications to fully customised corporate programmes — we design learning that fits your goals.',
        layout: 'carousel-grid',
        columns: '3',
        items: [
          {
            title: 'AML & Financial Crime Training',
            anchorId: 'aml-financial-crime-training',
            description:
              'Practical training programmes covering AML, CFT, fraud prevention, and regulatory compliance for modern organisations and compliance teams.',
            imagePath: '/consultancy-services/1.webp',
            highlights: [
              { text: 'AML & CFT fundamentals' },
              { text: 'Financial crime risk awareness' },
              { text: 'Real-world compliance scenarios' },
            ],
          },
          {
            title: 'Certification Preparation',
            anchorId: 'certification-preparation',
            description:
              'Structured learning paths designed to support professionals preparing for industry-recognised compliance and anti-fraud certifications.',
            imagePath: '/consultancy-services/2.webp',
            highlights: [
              { text: 'CAFS preparation support' },
              { text: 'Assessment-focused modules' },
              { text: 'Expert-led learning sessions' },
            ],
          },
          {
            title: 'Corporate Compliance Training',
            anchorId: 'corporate-compliance-training',
            description:
              "Custom training programmes tailored to your organisation's regulatory environment, operational workflows, and internal risk profile.",
            imagePath: '/trainer.webp',
            highlights: [
              { text: 'Organisation-specific content' },
              { text: 'Policy & procedure alignment' },
              { text: 'Flexible delivery formats' },
            ],
          },
          {
            title: 'Webinar Learning Library',
            anchorId: 'webinar-learning-library',
            description:
              'On-demand webinar sessions designed for professionals seeking practical compliance insights, regulatory updates, and implementation guidance.',
            imagePath: '/learning-5.webp',
            highlights: [
              { text: 'Pre-recorded expert webinars' },
              { text: 'Practical implementation insights' },
              { text: 'Multi-category learning tracks' },
            ],
          },
          {
            title: 'Team Upskilling & Workshops',
            anchorId: 'team-upskilling-workshops',
            description:
              'Interactive workshops and guided learning sessions that help teams strengthen operational awareness and compliance capabilities.',
            imagePath: '/learning-3.webp',
            highlights: [
              { text: 'Interactive team workshops' },
              { text: 'Scenario-based learning' },
              { text: 'Compliance capability building' },
            ],
          },
          {
            title: 'AI, VARA & Digital Asset Education',
            anchorId: 'ai-vara-digital-asset-education',
            description:
              'Specialised programmes focused on AI in finance, VARA frameworks, digital assets, and emerging regulatory technologies.',
            imagePath: '/consultancy-services/5.webp',
            highlights: [
              { text: 'VARA compliance insights' },
              { text: 'AI & digital asset regulation' },
              { text: 'Emerging risk education' },
            ],
          },
        ],
      },
      {
        blockType: 'proteqTrustStrip',
        variant: 'stats-row',
        sectionId: 'learning-trust-particles',
        animate: true,
        stats: [
          { value: '500', suffix: '+', label: 'Professionals Trained' },
          { value: '40', suffix: '+', label: 'Programme Modules' },
          { value: '98', suffix: '%', label: 'Satisfaction Rate' },
        ],
      },
      {
        blockType: 'proteqIconCardGrid',
        sectionId: 'learning-why-particles',
        eyebrow: 'Why Learn With Proteq',
        heading: 'Training That Holds Up in Regulated Work',
        description:
          'Four reasons compliance professionals choose Proteq — built for teams that need practical capability, not checkbox training.',
        columns: '4',
        items: [
          {
            title: 'Practitioner-Led',
            description:
              'Sessions led by compliance professionals with live case experience — not abstract theory or generic slide decks.',
            icon: 'users',
          },
          {
            title: 'Audit-Ready Frameworks',
            description:
              'Workplace-ready materials structured for internal governance, examinations, and regulator-facing evidence.',
            icon: 'fileCheck',
          },
          {
            title: 'Certification Preparation',
            description:
              'Focused pathways for ACAMS CAFS, ICA, CAMS, and CFE — with assessment-aligned modules and expert guidance.',
            icon: 'graduation',
          },
          {
            title: 'Flexible Delivery',
            description:
              "Webinars, in-house programmes, and certification tracks — formats shaped around your team's schedule and regulatory context.",
            icon: 'monitorPlay',
          },
        ],
      },
      {
        blockType: 'proteqApproach',
        sectionId: 'learning-approach-heading',
        eyebrow: 'Our Approach',
        heading: 'Experiential Learning That Stimulates & Challenges',
        description:
          'Interactive activities combined with leading-edge content, supported by practical learning solutions — from diagnosis through to lasting capability in your team.',
        quote:
          'Practitioner-led delivery. Audit-ready materials. Training that holds up in regulated work.',
        steps: [
          {
            title: 'Discover',
            description:
              "We map your organisation's objectives, culture, and learning gaps — understanding regulatory context, team roles, and skill priorities before recommending a path.",
          },
          {
            title: 'Design',
            description:
              'Curate experiential, stimulating modules with leading-edge content — structured for your risk environment, certification goals, or in-house capability needs.',
          },
          {
            title: 'Deliver',
            description:
              'Interactive sessions led by expert facilitators — grounded in real cases, with workplace-ready materials your team can apply immediately.',
          },
          {
            title: 'Transform',
            description:
              'Practical follow-through and measurable performance gains — so training sticks after the session ends and stands up to examination.',
          },
        ],
      },
      {
        blockType: 'proteqTestimonials',
        sectionId: 'learning-testimonials',
        eyebrow: 'Learner Stories',
        heading: 'What Professionals Say About Our Training',
        testimonials: learningTestimonials,
      },
      {
        blockType: 'proteqMainCta',
        heading: 'Need Tailored Training for Your Team?',
        description:
          "We design in-house training programmes for compliance teams, customised to your organisation's regulatory environment and risk profile.",
        imagePath: '/trainer.webp',
        buttons: [
          { label: 'Browse Courses', href: '#training-programmes', variant: 'white', glowingDot: true, showArrow: true },
          { label: 'View Webinars', href: '#training-programmes', variant: 'outline', showArrow: true },
        ],
      },
    ],
  },
  {
    title: 'Systems',
    slug: 'systems',
    hero: mediumHero({
      eyebrow: 'RegTech Systems',
      heading: 'The Right Systems for the Right Risks',
      description:
        'We evaluate, recommend, and help implement AML screening, transaction monitoring, and regulatory technology solutions tailored to your risk profile and operational scale.',
      imagePath: '/systems-bg.webp',
      imageAlt: 'RegTech systems and compliance technology advisory',
      enableParticles: true,
      particleId: 'systems-hero-particles',
      highlights: [
        { text: 'AML Screening & Sanctions', href: '#screening' },
        { text: 'Transaction Monitoring', href: '#monitoring' },
        { text: 'KYC & Due Diligence', href: '#kyc' },
        { text: 'Regulatory Reporting', href: '#reporting' },
      ],
      buttons: [
        { label: 'Request a Systems Assessment', href: '/contact', variant: 'default', glowingDot: true, showArrow: true },
        { label: 'Book a Demo', href: '/contact', variant: 'white', showArrow: true },
      ],
    }),
    meta: {
      title: 'AML Systems & Compliance Technology Advisory | Proteq',
      description:
        'Vendor-neutral AML screening, transaction monitoring, and KYC platform advisory for financial institutions, VASPs, and fintechs.',
      keywords: 'AML screening systems, transaction monitoring, compliance technology',
    },
    layout: [
      {
        blockType: 'proteqOverviewRich',
        variant: 'focus-panel',
        sectionId: 'systems-overview',
        eyebrow: 'Overview',
        heading: 'Systems Built for Modern Compliance Operations',
        paragraphs: [
          { text: 'We help organisations evaluate, implement, and optimise compliance technology tailored to their regulatory obligations and operational needs — from AML screening and transaction monitoring to KYC onboarding and regulatory reporting.' },
          { text: 'Our advisory focuses on scalable systems that reduce risk, improve efficiency, and support long-term compliance readiness. Recommendations are shaped around your risk exposure, current stack, team workflows, and regulatory duties — not vendor incentives.' },
          { text: 'Every engagement starts with understanding your control gaps and workflow realities, then delivers clear, defensible guidance your team can implement with confidence.' },
        ],
        ctaLabel: 'Request a Systems Assessment',
        ctaHref: '/contact',
        imagePath: '/system-provider.webp',
        imageAlt: 'Compliance technology advisory and system evaluation',
      },
      {
        blockType: 'proteqCardGrid',
        cardStyle: 'feature',
        sectionId: 'solution-areas',
        eyebrow: 'AML Solution',
        heading: 'Integrated AI RegTech & SupTech Solutions for Modern Compliance',
        description:
          'Built to remove friction from compliance technology decisions. Screening, monitoring, onboarding, and reporting — evaluated and implemented as one coherent capability for your team.',
        layout: 'grid',
        columns: '2',
        ctaLabel: 'Book Free Assessment',
        ctaHref: '/contact',
        items: [
          {
            title: 'Screening Against Analyst-Approved Data Models',
            anchorId: 'screening',
            tag: 'AML Screening',
            description:
              'Evaluate and implement PEP, sanctions, adverse media, and watchlist screening — with workflow integration and false positive reduction.',
            imagePath: '/hero-new.webp',
            icon: 'searchCheck',
            highlights: [
              { text: 'PEP & RCA coverage across multiple jurisdictions' },
              { text: 'Sanctions and watchlist matching with alias handling' },
              { text: 'Adverse media workflows with analyst-ready escalation' },
              { text: 'Vendor-neutral RFP and proof-of-concept support' },
            ],
          },
          {
            title: 'Customisable Transaction Monitoring',
            anchorId: 'monitoring',
            tag: 'Transaction Monitoring',
            description:
              'Deploy rule-based and AI-augmented monitoring across typology libraries, alert management, and regulatory reporting integration.',
            imagePath: '/hero-2-new.webp',
            icon: 'lineChart',
            highlights: [
              { text: 'Typology libraries aligned to your risk profile' },
              { text: 'Alert triage, case workflow, and SLA design' },
              { text: 'False positive tuning with documented rationale' },
              { text: 'Integration with screening and case management' },
            ],
          },
          {
            title: 'Customer Onboarding & Ongoing Due Diligence',
            anchorId: 'kyc',
            tag: 'KYC & CDD',
            description:
              'End-to-end onboarding and ongoing due diligence platforms for regulated customer journeys — identity, UBO, and risk scoring.',
            imagePath: '/learning-4.webp',
            icon: 'userCheck',
            highlights: [
              { text: 'CDD and EDD workflow design' },
              { text: 'Beneficial ownership and entity verification' },
              { text: 'Risk scoring aligned to internal appetite' },
              { text: 'Ongoing monitoring and periodic review triggers' },
            ],
          },
          {
            title: 'Regulatory Reporting & Case Management',
            anchorId: 'reporting',
            tag: 'Reporting',
            description:
              'SAR, CTR, and case management workflows with audit trails built for regulatory examination and internal governance.',
            imagePath: '/implementation.webp',
            icon: 'fileCheck',
            highlights: [
              { text: 'Structured SAR/STR filing workflows' },
              { text: 'Examination-ready audit trails and evidence' },
              { text: 'Escalation paths and committee reporting' },
              { text: 'Handover documentation for operations teams' },
            ],
          },
        ],
      },
      {
        blockType: 'proteqIconCardGrid',
        headerLayout: 'split',
        sectionId: 'capabilities',
        eyebrow: 'Our Capabilities',
        heading: 'RegTech Advisory Made Simpler',
        description:
          'Vendor-neutral guidance from evaluation through implementation — structured for teams that need clarity, not more noise.',
        columns: '3',
        items: [
          {
            title: 'Vendor-Neutral Evaluation',
            description:
              'Structured RFP design, proof-of-concept scoring, and procurement-ready assessments — free from vendor incentives.',
            icon: 'shieldCheck',
          },
          {
            title: 'Workflow & Case Design',
            description:
              'Alert triage, escalation paths, and SLA design aligned to your team structure and regulatory obligations.',
            icon: 'layers',
          },
          {
            title: 'Integration Architecture',
            description:
              'Technical review of how screening, monitoring, and core banking systems connect and exchange data.',
            icon: 'layers',
          },
          {
            title: 'False Positive Optimisation',
            description:
              'Rule and threshold calibration to reduce analyst burden while maintaining regulatory coverage.',
            icon: 'lineChart',
          },
          {
            title: 'Multi-Jurisdiction Coverage',
            description:
              'Screening and monitoring configurations for cross-border operations across multiple regulatory regimes.',
            icon: 'globe',
          },
          {
            title: 'Identity & KYC Stack',
            description:
              'Evaluation of identity verification, biometric proofing, and onboarding journey design for regulated clients.',
            icon: 'userCheck',
          },
        ],
      },
      {
        blockType: 'proteqApproach',
        sectionId: 'systems-approach-heading',
        eyebrow: 'Our Approach',
        heading: 'A Clear Route from Review to Implementation',
        description:
          'Each systems engagement follows a practical sequence: assess the stack, define requirements, evaluate vendors neutrally, and embed technology your team can operate with confidence.',
        quote:
          'Structured enough for procurement and audit. Flexible enough for your operational realities.',
        steps: [
          {
            title: 'Assess the Current Stack',
            description:
              'We review your existing compliance technology, integrations, alert volumes, false positive rates, and control gaps — mapping what works, what does not, and where risk sits.',
          },
          {
            title: 'Define Requirements',
            description:
              'Regulatory obligations are translated into functional requirements, workflow needs, SLA expectations, and vendor evaluation criteria — structured for procurement and internal sign-off.',
          },
          {
            title: 'Evaluate & Select',
            description:
              'Vendor-neutral RFP support, proof-of-concept facilitation, and fit-for-purpose scoring — so selection is based on capability, not commercial incentives.',
          },
          {
            title: 'Implement & Optimise',
            description:
              'Deployment support, workflow tuning, false positive reduction, team training, and handover documentation — so improvements become part of daily operations.',
          },
        ],
      },
      {
        blockType: 'proteqTrustStrip',
        variant: 'impact-panel',
        sectionId: 'systems-benefits-particles',
        eyebrow: 'Impact at Scale',
        heading: 'RegTech Advisory Built for Regulated Operations',
        animate: false,
        ctaLabel: 'Request a Systems Assessment',
        ctaHref: '/contact',
        stats: [
          {
            value: '40+',
            label: 'Institutions advised',
            description: 'Banks, VASPs, fintechs, and regulated operators',
          },
          {
            value: '10+',
            label: 'Jurisdictions',
            description: 'Cross-border screening and monitoring programmes',
          },
          {
            value: '180+',
            label: 'Technology evaluations',
            description: 'Vendor-neutral assessments delivered',
          },
          {
            value: '100%',
            label: 'Vendor-neutral',
            description: 'No commissions, reseller fees, or kickbacks',
          },
        ],
      },
      {
        blockType: 'proteqWhyChoose',
        sectionId: 'systems-why-particles',
        eyebrow: 'Why Choose Proteq',
        heading: 'RegTech Guidance Built for Teams Under Real Pressure',
        description:
          'Vendor-neutral systems advisory for regulated teams that need faster decisions, fewer false positives, and technology choices they can defend — without overpriced legacy stacks or commission-led recommendations.',
        imagePath: '/implementation.webp',
        imageAlt: 'RegTech systems and compliance technology environment',
        points: [
          {
            title: 'Complete Coverage',
            description:
              'Global RegTech evaluation across screening, monitoring, KYC, and case management — prioritised by your integrated risk-based approach.',
            icon: 'shieldCheck',
          },
          {
            title: 'True Accuracy',
            description:
              'Requirements and vendor scoring grounded in your obligations and workflows — reducing false positives and implementation missteps.',
            icon: 'target',
          },
          {
            title: 'Implementation Depth',
            description:
              'From proof-of-concept through deployment, workflow tuning, and false positive optimisation — not just a vendor shortlist.',
            icon: 'layers',
          },
          {
            title: 'Regulator Readiness',
            description:
              'Systems and documentation structured for internal governance, procurement audit, and regulatory examination.',
            icon: 'brain',
          },
        ],
      },
      {
        blockType: 'proteqMainCta',
        heading: 'Not Sure Which System Fits Your Organisation?',
        description:
          'Request a free systems assessment. We will review your current compliance technology stack and identify gaps, overlaps, and opportunities.',
        imagePath: '/systems.webp',
        buttons: [
          { label: 'Request a Systems Assessment', href: '/contact', variant: 'white', glowingDot: true, showArrow: true },
          { label: 'Talk to an Expert', href: '/contact', variant: 'outline', showArrow: true },
        ],
      },
    ],
  },
  {
    title: 'AI Investments',
    slug: 'ai-investments',
    hero: mediumHero({
      eyebrow: 'AI Investments',
      heading: 'Where intelligent strategy meets real investment opportunity',
      description:
        'Discover AI-driven trading, gold-backed stability, and secure digital asset services in one ecosystem — built for investors who want smarter decisions, not louder promises.',
      imagePath: '/ai-investment.webp',
      imageAlt: 'AI investments and digital finance professionals',
      enableParticles: true,
      particleId: 'aurum-hero-particles',
      highlights: [
        { text: 'EX-AI Bot', href: '#ex-ai-bot' },
        { text: 'Neyro', href: '#neyro' },
        { text: 'Gold (XAU) Investment Packages', href: '#gold-xau-packages' },
        { text: 'Web3 Neobank Services', href: '#web3-neobank' },
      ],
      buttons: [
        { label: 'Get started', href: '#aurum-register', variant: 'default', glowingDot: true, showArrow: true },
        { label: 'Speak with Proteq', href: '/contact', variant: 'white', showArrow: true },
      ],
    }),
    meta: {
      title: 'AI Investments with Aurum Foundation | Proteq',
      description:
        'Explore how Aurum Foundation combines AI, blockchain security, and gold-backed stability.',
      keywords: 'AI investments, Aurum Foundation, AI trading',
    },
    layout: [
      {
        blockType: 'proteqVideoSection',
        sectionId: 'aurum-intro',
        eyebrow: 'Aurum Introduction',
        heading: 'A Comprehensive Financial Ecosystem',
        paragraphs: [
          { text: 'Aurum Foundation is a comprehensive financial ecosystem that combines AI driven intelligence with blockchain powered security. Unlike traditional investment platforms, Aurum provides access to both fiat and crypto assets in a single secure environment, enabling users to manage wealth, execute payments, and optimise liquidity across asset classes.' },
          { text: "The platform's core offerings include AI powered trading bots (EX-AI Bot), neural network investment tools (Neyro), gold (XAU) backed investment packages, and a neobank for Web3 financial services. Aurum operates at the intersection of decentralised finance and traditional wealth management." },
        ],
        videoId: 'iSDJ68Z-8sU',
        playLabel: 'Play AURUM Foundation overview',
        buttons: [
          { label: 'Get started', href: '#aurum-register', variant: 'default', glowingDot: true, showArrow: true },
        ],
      },
      {
        blockType: 'proteqCardGrid',
        cardStyle: 'offering',
        sectionId: 'core-offerings',
        eyebrow: 'Core Offerings',
        heading: 'The Building Blocks of the Aurum Ecosystem',
        description:
          'Four integrated products at the intersection of decentralised finance and traditional wealth management — designed to work together in one platform.',
        layout: 'grid',
        columns: '4',
        items: [
          {
            title: 'EX-AI Bot',
            anchorId: 'ex-ai-bot',
            tag: 'Autonomous AI trading intelligence',
            description:
              'AI powered trading bots that analyse market signals and execute strategies with defined risk parameters — operating around the clock.',
            icon: 'bot',
            imagePath: '/ai-investment.webp',
          },
          {
            title: 'Neyro',
            anchorId: 'neyro',
            tag: 'Neural network investment tools',
            description:
              'Pattern recognition and allocation tools designed to support smarter portfolio decisions across volatile markets.',
            icon: 'sparkles',
            imagePath: '/hero-new.webp',
          },
          {
            title: 'Gold (XAU) Packages',
            anchorId: 'gold-xau-packages',
            tag: 'Gold-backed digital investment',
            description:
              'Investment packages that combine digital access with the stability and inflation protection of gold exposure.',
            icon: 'coins',
            imagePath: '/aurum/aurum.webp',
          },
          {
            title: 'Web3 NeoBank',
            anchorId: 'web3-neobank',
            tag: 'Fiat & crypto in one hub',
            description:
              'Manage fiat and crypto, execute payments, and access liquidity from a single secure Web3 financial environment.',
            icon: 'landmark',
            imagePath: '/aurum/aurum-2.webp',
          },
        ],
      },
      {
        blockType: 'proteqVideoSection',
        sectionId: 'aurum-platform',
        eyebrow: 'Platform Scale',
        heading: 'Shaping the Future of Finance',
        paragraphs: [
          { text: 'AI and blockchain technology delivering secure, transparent, and scalable financial management for a global digital economy.' },
        ],
        videoId: 'uKgSgGClewc',
        playLabel: 'Play AURUM ecosystem video',
        sideCardEyebrow: 'Platform at a glance',
        sideCardBody:
          'Aurum Foundation brings AI trading intelligence, gold-backed stability, and Web3 banking into one ecosystem — giving investors a single place to grow, manage, and move assets with blockchain-grade transparency.\n\nFrom EX-AI strategies and Neyro neural networks to cross-border neobank services, the platform scales with partners worldwide.',
        stats: [
          { value: '$30M+', label: 'Assets managed' },
          { value: '18,000+', label: 'Active partners' },
          { value: '5+', label: 'Tech products' },
        ],
      },
      {
        blockType: 'proteqReferralRegister',
        sectionId: 'aurum-register',
        eyebrow: 'Get started',
        heading: 'Your path to AI-powered investing starts here',
        description:
          'Speak with Proteq to explore AI-driven trading, gold-backed products, and digital asset services — and find an approach that fits your goals.',
        cta: {
          label: 'Speak with Proteq',
          actionType: 'link',
          link: {
            type: 'custom',
            url: '/contact',
          },
          showArrow: true,
          glowingDot: true,
          variant: 'default',
        },
      },
      {
        blockType: 'proteqIconList',
        sectionId: 'aurum-why',
        eyebrow: 'Why AI Investments?',
        heading: 'A Meaningful Shift in How We Approach Wealth Building',
        description:
          'AI driven investment tools represent a meaningful shift in how individuals and institutions approach wealth building. The explanation below is educational and grounded — not promotional — reflecting an understanding of both the technology and the financial fundamentals.',
        reasons: [
          { icon: 'lineChart', text: 'AI continuously analyses financial markets to identify opportunities and manage risk.' },
          { icon: 'shieldCheck', text: 'Blockchain technology ensures transparency, immutability, and decentralisation.' },
          { icon: 'coins', text: 'Gold-backed instruments provide stability and inflation protection alongside digital asset growth.' },
          { icon: 'globe', text: 'Integrated payment and banking tools allow users to manage, grow, and spend assets from a single platform.' },
        ],
      },
      {
        blockType: 'proteqMainCta',
        eyebrow: 'Ready to explore?',
        heading: 'Take the next step toward smarter investing',
        description:
          'Speak with Proteq to explore AI trading tools, gold-backed packages, and Web3 banking — and find the right path for your investment goals.',
        imagePath: '/ai-investment.webp',
        buttons: [
          { label: 'Get started', href: '#aurum-register', variant: 'white', glowingDot: true, showArrow: true },
          { label: 'Speak with Proteq', href: '/contact', variant: 'outline', showArrow: true },
        ],
      },
    ],
  },
  {
    title: 'Become a Partner',
    slug: 'become-a-partner',
    hero: mediumHero({
      eyebrow: 'Partner With Proteq',
      heading: 'Join a Network Shaping Compliance, Learning, and RegTech',
      description:
        'Whether you are an experienced trainer, a compliance technology provider, or an organisation looking to partner on advisory and training, we want to hear from you.',
      imagePath: '/partner.webp',
      imageAlt: 'Business partnership and professional collaboration',
      enableParticles: true,
      particleId: 'partner-hero-particles',
      highlights: [
        { text: 'Expert Advisory', href: '#partner-track' },
        { text: 'Co-Branded Training', href: '#trainer-track' },
        { text: 'Technology Partnerships', href: '#provider-track' },
      ],
      buttons: [
        { label: 'Become a Partner', href: '#partner-form', variant: 'default', glowingDot: true, showArrow: true },
        { label: 'Explore Opportunities', href: '#partnership-opportunities', variant: 'outline', showArrow: true },
      ],
    }),
    meta: {
      title: 'Become a Partner, Trainer or System Provider | Proteq',
      description:
        'Partner with Proteq on advisory, training, and RegTech collaborations.',
      keywords: 'compliance partner programme, become a trainer',
    },
    layout: [
      {
        blockType: 'proteqPillSplit',
        sectionId: 'partner-overview',
        eyebrow: 'Partnership & Collaboration',
        heading: 'Build the Future of Compliance, Training & Regulatory Technology With Us',
        paragraphs: [
          { text: 'We collaborate with industry experts, compliance professionals, technology providers, and forward thinking organisations to create impactful advisory, learning, and systems driven solutions. Whether you deliver specialised expertise, innovative compliance technology, or training capabilities, we provide a platform to grow together, expand your reach, and create meaningful industry impact.' },
          { text: 'Join a growing network of experts, trainers, and technology providers shaping the future of compliance, advisory, and regulatory innovation.' },
        ],
        pills: [
          { label: 'AML Compliance' },
          { label: 'Expert Training' },
          { label: 'Strategic Partnerships' },
          { label: 'Compliance Technology' },
          { label: 'Global Network' },
          { label: 'Industry Experts' },
          { label: 'Trusted Collaboration' },
        ],
        ctaLabel: 'Become a Partner',
        ctaHref: '#partner-form',
      },
      {
        blockType: 'proteqTrustStrip',
        variant: 'stats-row',
        sectionId: 'partner-trust-particles',
        animate: true,
        stats: [
          { value: '30', suffix: '+', label: 'Global Markets' },
          { value: '40', suffix: '+', label: 'Institutions in Network' },
          { value: '3', suffix: '', label: 'Partnership Tracks' },
          { value: '5', suffix: ' Days', label: 'Application Review' },
        ],
      },
      {
        blockType: 'proteqCardGrid',
        cardStyle: 'opportunity',
        sectionId: 'partnership-opportunities',
        eyebrow: 'Collaboration Opportunities',
        heading: 'Choose the Partnership Path That Fits Your Expertise',
        description:
          'Three ways to collaborate — advisory partnerships, expert training, and compliance technology provider relationships.',
        layout: 'grid',
        columns: '3',
        items: [
          {
            title: 'Become a Partner',
            anchorId: 'partner-track',
            description:
              'Collaborate with us to co-deliver advisory, training, and compliance technology services across regulated industries.',
            imagePath: '/partner.webp',
            highlights: [
              { text: 'Co-branded opportunities' },
              { text: 'Shared go-to-market support' },
              { text: 'Access to client network' },
              { text: 'Strategic industry collaboration' },
            ],
            buttonLabel: 'Apply as a Partner',
            buttonHref: '#partner-form',
          },
          {
            title: 'Become a Trainer',
            anchorId: 'trainer-track',
            description:
              'Join our learning ecosystem as a subject matter expert delivering practical compliance and anti-fraud education.',
            imagePath: '/trainer.webp',
            highlights: [
              { text: 'Deliver expert webinars' },
              { text: 'Create training modules' },
              { text: 'Build industry authority' },
              { text: 'Flexible content formats' },
            ],
            buttonLabel: 'Apply as a Trainer',
            buttonHref: '#partner-form',
          },
          {
            title: 'Become a System Provider',
            anchorId: 'provider-track',
            description:
              'Showcase your compliance technology solutions through our systems advisory and implementation network.',
            imagePath: '/system-provider.webp',
            highlights: [
              { text: 'Vendor evaluation access' },
              { text: 'Compliance technology exposure' },
              { text: 'Integration opportunities' },
              { text: 'Industry-focused partnerships' },
            ],
            buttonLabel: 'Become a Provider',
            buttonHref: '#partner-form',
          },
        ],
      },
      {
        blockType: 'proteqWhyChoose',
        sectionId: 'partner-why-particles',
        eyebrow: 'Why Partner With Us',
        heading: 'A Platform Built for Lasting Impact',
        description:
          'Meaningful collaboration with structured support — not a logo on a website, but a partnership that creates real industry value across advisory, training, and RegTech.',
        imagePath: '/who-we-are.webp',
        imageAlt: 'Business partnership and professional collaboration',
        points: [
          {
            title: 'Global Reach & Visibility',
            description:
              'Tap into our network of financial institutions, regulators, and compliance professionals across 30+ markets.',
            icon: 'globe',
          },
          {
            title: 'Co-Branded Opportunities',
            description:
              'Deliver joint programmes, advisory engagements, and technology solutions under a trusted, recognised brand.',
            icon: 'building',
          },
          {
            title: 'Expert Community Access',
            description:
              'Collaborate with practitioners, trainers, and technologists at the forefront of compliance and RegTech.',
            icon: 'users',
          },
          {
            title: 'Structured Support',
            description:
              'From onboarding to go-to-market, hands-on support so every partnership delivers measurable results.',
            icon: 'checkCircle',
          },
        ],
      },
      {
        blockType: 'proteqPartnerForm',
        sectionId: 'partner-form',
        eyebrow: 'Partnership Application',
        heading: 'Apply to Partner With Proteq',
      },
      {
        blockType: 'proteqMainCta',
        eyebrow: 'Get Started Today',
        heading: 'Have Questions About Partnering?',
        description: 'Reach out directly and we will connect you with the right person on our team.',
        imagePath: '/partner.webp',
        buttons: [
          { label: 'Contact Us', href: '/contact', variant: 'white', glowingDot: true, showArrow: true },
          { label: 'Email Our Team', href: 'mailto:partners@proteqme.com', variant: 'outline', showArrow: true },
        ],
      },
    ],
  },
  {
    title: 'Contact',
    slug: 'contact',
    hero: pageTitleHero({
      title: 'Contact Us',
      pageTitleImagePath: '/consulting-bg.webp',
      particleId: 'contact-hero-particles',
    }),
    meta: {
      title: 'Contact Us | Proteq',
      description:
        'Speak with Proteq about compliance advisory, professional learning, RegTech systems, or AI investments.',
      keywords: 'contact Proteq, compliance advisory, RegTech, AI investments',
    },
    layout: [
      {
        blockType: 'proteqContactBlock',
        sectionId: 'contact-main',
        eyebrow: "Let's Talk",
        heading: 'Speak With Our Experts',
        description:
          'Whether you need compliance advisory, professional learning, RegTech systems, or AI investment guidance — we are here to help.',
      },
      {
        blockType: 'proteqMapEmbed',
        sectionId: 'contact-map',
        embedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.887623456789!2d-0.0195!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331d0c5d%3A0xef9344b9b6e4c8f1!2sOne%20Canada%20Square%2C%20London%20E14%205AB!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
      },
      {
        blockType: 'proteqNewsletter',
        sectionId: 'newsletter',
        eyebrow: 'Stay Informed',
        heading: 'Stay Ahead of Compliance',
        description: 'Regulatory updates, training releases, and industry insights delivered to your inbox.',
        cardHeading: 'Get Monthly Compliance Briefings',
        submitLabel: 'Get Briefings',
        privacyNote: 'By signing up you agree to our Privacy Policy. Tagged as Newsletter.',
        topics: [
          { label: 'AML & CFT' },
          { label: 'RegTech' },
          { label: 'Risk Advisory' },
          { label: 'Anti-Fraud' },
        ],
        ctaLabel: 'Book a Free Consultation',
        ctaHref: '/contact',
      },
    ],
  },
]

async function upsertPopup(
  payload: Payload,
  req: PayloadRequest,
  data: RequiredDataFromCollectionSlug<'popups'>,
): Promise<string> {
  const slug = String(data.slug)
  const existing = await payload.find({
    collection: 'popups',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })

  if (existing.docs.length > 0) {
    const updated = await payload.update({
      collection: 'popups',
      id: existing.docs[0].id,
      data,
      depth: 0,
      req,
    })
    return String(updated.id)
  }

  const created = await payload.create({
    collection: 'popups',
    data,
    depth: 0,
    req,
  })

  return String(created.id)
}

function applyLearningPagePopupCtas(popupId: string) {
  const page = proteqPages.find((entry) => entry.slug === 'learning')
  if (!page) return

  page.hero = mediumHero({
    ...(page.hero as ReturnType<typeof mediumHero>),
    buttons: [
      {
        label: 'Enquire About Training',
        actionType: 'popup' as const,
        popup: popupId,
        variant: 'default',
        glowingDot: true,
        showArrow: true,
      },
      {
        label: 'Browse Courses',
        href: '#training-programmes',
        variant: 'white',
        showArrow: true,
      },
    ],
  })

  const introBlock = page.layout.find(
    (block) => block.blockType === 'proteqLearningIntro',
  ) as Record<string, unknown> | undefined

  if (introBlock) {
    introBlock.cta = {
      label: 'Enquire About Training',
      actionType: 'popup',
      popup: popupId,
      glowingDot: true,
      showArrow: true,
    }
    introBlock.secondaryCta = {
      label: 'View Webinars',
      actionType: 'link',
      link: { type: 'custom', url: '#training-programmes' },
      variant: 'secondary',
      showArrow: true,
    }
    delete introBlock.ctaLabel
    delete introBlock.ctaHref
    delete introBlock.secondaryCtaLabel
    delete introBlock.secondaryCtaHref
  }

  const mainCtaBlock = page.layout.find(
    (block) => block.blockType === 'proteqMainCta',
  ) as Record<string, unknown> | undefined

  if (mainCtaBlock) {
    mainCtaBlock.buttons = [
      {
        label: 'Enquire About Training',
        actionType: 'popup',
        popup: popupId,
        variant: 'white',
        glowingDot: true,
        showArrow: true,
      },
      {
        label: 'Browse Courses',
        href: '#training-programmes',
        variant: 'outline',
        showArrow: true,
      },
    ]
  }
}

export const seedProteqPages = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('— Seeding popups...')

  const consultationPopupData = {
    title: 'Book a Free Consultation',
    slug: 'consultation',
    multiStep: true,
    steps: [
      {
        title: 'Book a Free Consultation',
        description:
          "Leave your number and we'll call you back — usually within one business day.",
        continueLabel: 'Continue',
        fields: [
          {
            name: 'phone',
            label: 'Phone number',
            fieldType: 'tel' as const,
            placeholder: '+44 20 7123 4567',
            required: true,
          },
        ],
      },
      {
        title: 'Almost done',
        description: 'A few more details so we can prepare for your consultation.',
        backLabel: 'Back',
        fields: [
          {
            name: 'name',
            label: 'Full name',
            fieldType: 'text' as const,
            placeholder: 'Your name',
            required: true,
          },
          {
            name: 'email',
            label: 'Work email',
            fieldType: 'email' as const,
            placeholder: 'you@company.com',
            required: true,
          },
          {
            name: 'company',
            label: 'Company',
            fieldType: 'text' as const,
            placeholder: 'Organisation name',
            required: false,
          },
          {
            name: 'service',
            label: "I'm interested in",
            fieldType: 'select' as const,
            required: true,
            options: [
              { label: 'Consultancy & Advisory', value: 'advisory' },
              { label: 'Proteq Learning', value: 'learning' },
              { label: 'RegTech Systems', value: 'systems' },
              { label: 'AI Investments', value: 'ai-investments' },
              { label: 'General Enquiry', value: 'general' },
            ],
          },
        ],
      },
    ],
    submitLabel: 'Submit',
    successTitle: "Thank you — we'll be in touch",
    successDescription: 'A member of our team will contact you within one business day.',
    privacyNote: 'No spam. Your details are kept confidential.',
    calendarStep: {
      enabled: true,
      title: 'Pick a time',
      description:
        'Choose a slot for your consultation. We will send a confirmation by email.',
      calLink: '',
      continueLabel: 'Continue to calendar',
      skipLabel: "Skip — we'll email you available times",
      leadType: 'demo' as const,
    },
    autoOpen: {
      enabled: true,
      initialDelayMs: 5000,
      reopenDelayMs: 300000,
      maxAutoOpens: 2,
      storageKey: 'proteq-consultation',
    },
  }

  const consultationPopupId = await upsertPopup(payload, req, consultationPopupData)

  const learningEnquiryPopupData = {
    title: 'Learning & Training Enquiry',
    slug: 'learning-enquiry',
    multiStep: true,
    steps: [
      {
        title: 'Find the Right Learning Path',
        description:
          "Share your name and number and we'll help you choose the right programme or webinar track.",
        continueLabel: 'Continue',
        fields: [
          {
            name: 'name',
            label: 'Full name',
            fieldType: 'text' as const,
            placeholder: 'Your name',
            required: true,
          },
          {
            name: 'phone',
            label: 'Phone number',
            fieldType: 'tel' as const,
            placeholder: '+44 20 7123 4567',
            required: true,
          },
        ],
      },
      {
        title: 'Tell us about your training needs',
        description:
          'A few details so we can recommend the right programme or format.',
        backLabel: 'Back',
        fields: [
          {
            name: 'email',
            label: 'Work email',
            fieldType: 'email' as const,
            placeholder: 'you@company.com',
            required: true,
          },
          {
            name: 'company',
            label: 'Company / organisation',
            fieldType: 'text' as const,
            placeholder: 'Organisation name',
            required: false,
          },
          {
            name: 'programmeInterest',
            label: 'Programme of interest',
            fieldType: 'select' as const,
            required: true,
            options: [
              { label: 'AML & Financial Crime Training', value: 'aml-training' },
              { label: 'Certification Preparation (e.g. CAFS)', value: 'certification-prep' },
              { label: 'Corporate Compliance Training', value: 'corporate-training' },
              { label: 'Webinar Learning Library', value: 'webinars' },
              { label: 'Team Upskilling & Workshops', value: 'workshops' },
              { label: 'AI, VARA & Digital Asset Education', value: 'ai-vara-education' },
              { label: 'Not sure yet', value: 'unsure' },
            ],
          },
          {
            name: 'teamSize',
            label: 'How many people need training?',
            fieldType: 'select' as const,
            required: true,
            options: [
              { label: 'Just me', value: 'individual' },
              { label: '2–10 people', value: '2-10' },
              { label: '11–50 people', value: '11-50' },
              { label: '50+ people', value: '50-plus' },
            ],
          },
          {
            name: 'deliveryFormat',
            label: 'Preferred format',
            fieldType: 'select' as const,
            required: true,
            options: [
              { label: 'Live webinar', value: 'webinar' },
              { label: 'In-house / on-site', value: 'in-house' },
              { label: 'Virtual classroom', value: 'virtual' },
              { label: 'Self-paced / on-demand', value: 'on-demand' },
              { label: 'Open to recommendation', value: 'flexible' },
            ],
          },
          {
            name: 'jurisdiction',
            label: 'Primary regulatory context',
            fieldType: 'select' as const,
            required: false,
            options: [
              { label: 'UK / FCA', value: 'uk-fca' },
              { label: 'UAE / VARA', value: 'uae-vara' },
              { label: 'EU', value: 'eu' },
              { label: 'US', value: 'us' },
              { label: 'Multi-jurisdiction', value: 'multi' },
              { label: 'Other', value: 'other' },
            ],
          },
          {
            name: 'message',
            label: 'Anything else we should know?',
            fieldType: 'textarea' as const,
            placeholder: 'Tell us about your team, goals, or timeline…',
            required: false,
          },
        ],
      },
    ],
    submitLabel: 'Submit enquiry',
    successTitle: "Thank you — we'll be in touch",
    successDescription:
      'A member of our team will contact you within one business day to discuss your training needs.',
    privacyNote: 'No spam. Your details are kept confidential.',
    calendarStep: {
      enabled: true,
      title: 'Pick a time',
      description:
        'Choose a slot to discuss your training needs. We will send a confirmation by email.',
      calLink: '',
      continueLabel: 'Continue to calendar',
      skipLabel: "Skip — we'll email you available times",
      leadType: 'demo' as const,
    },
    autoOpen: {
      enabled: true,
      initialDelayMs: 5000,
      reopenDelayMs: 300000,
      maxAutoOpens: 2,
      storageKey: 'proteq-learning-enquiry',
    },
  }

  const learningEnquiryPopupId = await upsertPopup(payload, req, learningEnquiryPopupData)

  applyLearningPagePopupCtas(learningEnquiryPopupId)

  homeSlides[0].cta = {
    label: 'Book a Free Consultation',
    actionType: 'popup' as const,
    popup: consultationPopupId,
    glowingDot: true,
    showArrow: true,
  }

  payload.logger.info('— Seeding Proteq pages...')

  for (const pageData of proteqPages) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: pageData.slug } },
      limit: 1,
      depth: 0,
    })

    const data = normalizeProteqPageData({
      ...pageData,
      _status: 'published' as const,
    }) as RequiredDataFromCollectionSlug<'pages'>

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data,
        depth: 0,
        context: { disableRevalidate: false },
        req,
      })
      payload.logger.info(`  Updated page: ${pageData.slug}`)
    } else {
      await payload.create({
        collection: 'pages',
        data,
        depth: 0,
        context: { disableRevalidate: false },
        req,
      })
      payload.logger.info(`  Created page: ${pageData.slug}`)
    }
  }

  const homePage = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    depth: 0,
  })

  if (homePage.docs[0]) {
    await payload.update({
      collection: 'popups',
      id: consultationPopupId,
      data: {
        autoOpen: {
          ...consultationPopupData.autoOpen,
          pages: [homePage.docs[0].id],
        },
      },
      depth: 0,
      req,
    })
  }

  const learningPage = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'learning' } },
    limit: 1,
    depth: 0,
  })

  if (learningPage.docs[0]) {
    await payload.update({
      collection: 'popups',
      id: learningEnquiryPopupId,
      data: {
        autoOpen: {
          ...learningEnquiryPopupData.autoOpen,
          pages: [learningPage.docs[0].id],
        },
      },
      depth: 0,
      req,
    })
  }

  payload.logger.info('— Seeding site settings...')

  await payload.updateGlobal({
    slug: 'siteSettings',
    data: {
      email: 'info@proteq.me',
      partnersEmail: 'partners@proteqme.com',
      phonePrimary: '+442071234567',
      phonePrimaryDisplay: '+44 (0) 20 7123 4567',
      phoneSecondary: '+12125550199',
      phoneSecondaryDisplay: '+1 (212) 555-0199',
      address: 'Level 24, International Finance Centre, London, EC2N 1HQ',
      companyRegistration: 'England & Wales · Company No. [registration number]',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=International+Finance+Centre+London+EC2N+1HQ',
      logoPath: '/proteq-logo.png',
      logoWhitePath: '/proteq-white.png',
      ctaLabel: 'Book a Free Demo',
      ctaUrl: '/book-demo',
    },
    depth: 0,
    req,
  })

  payload.logger.info('— Seeding header...')

  const pageId = async (slug: string): Promise<string | undefined> => {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    })

    const id = result.docs[0]?.id
    return id != null ? String(id) : undefined
  }

  const [
    homeId,
    consultancyId,
    learningId,
    systemsId,
    aiInvestmentsId,
    partnerId,
    contactId,
  ] = await Promise.all([
    pageId('home'),
    pageId('consultancy-advisory'),
    pageId('learning'),
    pageId('systems'),
    pageId('ai-investments'),
    pageId('become-a-partner'),
    pageId('contact'),
  ])

  const pageLink = (id: string, label: string) => ({
    type: 'reference' as const,
    label,
    reference: {
      relationTo: 'pages' as const,
      value: id,
    },
  })

  const dropdownItem = (
    id: string | undefined,
    title: string,
    description: string,
    icon: 'shieldCheck' | 'graduation' | 'layers',
  ) =>
    id
      ? {
          title,
          description,
          icon,
          link: {
            type: 'reference' as const,
            reference: {
              relationTo: 'pages' as const,
              value: id,
            },
          },
        }
      : null

  await payload.updateGlobal({
    slug: 'header',
    data: {
      logoLink: homeId
        ? {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: homeId,
            },
          }
        : undefined,
      navItems: [
        ...(homeId ? [{ type: 'link' as const, link: pageLink(homeId, 'Home') }] : []),
        {
          type: 'dropdown' as const,
          dropdownLabel: 'Solutions',
          dropdownItems: [
            dropdownItem(
              consultancyId,
              'Consultancy & Advisory',
              'AML frameworks, gap analysis, and regulatory readiness.',
              'shieldCheck',
            ),
            dropdownItem(
              learningId,
              'Learning',
              'Webinars, courses, and certification preparation.',
              'graduation',
            ),
            dropdownItem(
              systemsId,
              'Systems',
              'AML screening, monitoring, and RegTech implementation.',
              'layers',
            ),
          ].filter((item): item is NonNullable<typeof item> => item != null),
        },
        ...(aiInvestmentsId
          ? [{ type: 'link' as const, link: pageLink(aiInvestmentsId, 'AI Investments') }]
          : []),
        ...(partnerId
          ? [{ type: 'link' as const, link: pageLink(partnerId, 'Become a Partner') }]
          : []),
        ...(contactId ? [{ type: 'link' as const, link: pageLink(contactId, 'Contact') }] : []),
      ],
      ctaButton: {
        label: 'Book a Free Demo',
        actionType: 'link',
        link: { type: 'custom', url: '/book-demo' },
        showArrow: true,
      },
    } as DataFromGlobalSlug<'header'>,
    depth: 0,
    req,
  })

  payload.logger.info('— Seeding footer...')

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      navLinks: [
        ...(homeId ? [{ link: pageLink(homeId, 'Home') }] : []),
        ...(consultancyId
          ? [{ link: pageLink(consultancyId, 'Consultancy & Advisory') }]
          : []),
        ...(learningId ? [{ link: pageLink(learningId, 'Learning') }] : []),
        ...(systemsId ? [{ link: pageLink(systemsId, 'Systems') }] : []),
        ...(aiInvestmentsId ? [{ link: pageLink(aiInvestmentsId, 'AI Investments') }] : []),
        ...(partnerId ? [{ link: pageLink(partnerId, 'Become a Partner') }] : []),
        ...(contactId ? [{ link: pageLink(contactId, 'Contact') }] : []),
      ],
      socialLinks: [
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/company/proteq-me',
          label: 'LinkedIn',
        },
        {
          platform: 'x',
          url: 'https://x.com/proteq_me',
          label: 'X (formerly Twitter)',
        },
        {
          platform: 'youtube',
          url: 'https://www.youtube.com/@proteqme',
          label: 'YouTube',
        },
        {
          platform: 'instagram',
          url: 'https://www.instagram.com/proteq.me',
          label: 'Instagram',
        },
      ],
      newsletter: {
        heading: 'Monthly AML & RegTech Intelligence',
        description: 'No spam, unsubscribe anytime.',
        placeholder: 'Enter your email',
        submitLabel: 'Get Briefings',
        privacyText: 'By subscribing you agree to our',
        privacyLinkLabel: 'Privacy Policy',
        privacyLinkHref: '/contact',
      },
      legalLinks: [
        ...(contactId ? [{ link: pageLink(contactId, 'Privacy Policy') }] : []),
        ...(contactId ? [{ link: pageLink(contactId, 'Terms of Service') }] : []),
        ...(contactId ? [{ link: pageLink(contactId, 'Cookies Settings') }] : []),
      ],
      legalDisclaimer:
        'Proteq provides compliance advisory, learning, and systems guidance. Regulatory authorisation and licensing details are available on request where applicable.',
      copyrightName: 'Proteq',
      showStatusBadge: true,
      statusBadgeLabel: 'All Systems Operational',
    },
    depth: 0,
    req,
  })

  payload.logger.info('Proteq seed complete.')
}
