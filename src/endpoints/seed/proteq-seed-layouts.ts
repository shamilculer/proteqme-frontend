/** Seed layout blocks for Proteq marketing pages (excluding home). */

const t = (text: string) => ({ text })
const bullets = (...items: string[]) => items.map(t)

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
    details: bullets(
      'Customer due diligence (CDD)',
      'Enhanced due diligence (EDD)',
      'Suspicious activity reporting (SAR)',
      'Transaction monitoring frameworks',
    ),
    icon: 'shieldCheck',
    imagePath: '/consultancy-services/1.webp',
  },
  {
    number: '02',
    anchorId: 'regulatory-gap-analysis',
    title: 'Regulatory Gap Analysis',
    summary:
      'Comprehensive review of current compliance infrastructure against applicable regulations.',
    details: bullets(
      'FATF recommendations',
      'Local regulatory requirements',
      'VARA obligations for VASPs',
      'EU Anti-Money Laundering Directives where relevant',
    ),
    icon: 'searchCheck',
    imagePath: '/consultancy-services/2.webp',
  },
  {
    number: '03',
    anchorId: 'policy-programme-design',
    title: 'Policy & Procedure Documentation',
    summary:
      'Drafting, reviewing, and updating compliance policies, standard operating procedures, and internal control documentation.',
    details: bullets(
      'Compliance policies',
      'Standard operating procedures',
      'Internal control documentation',
      'Regulatory examination standards',
    ),
    icon: 'fileCheck',
    imagePath: '/consultancy-services/3.webp',
  },
  {
    number: '04',
    anchorId: 'anti-fraud-advisory',
    title: 'Anti-Fraud Programme Advisory',
    summary:
      'Design and implementation of fraud risk management programmes, internal investigation protocols, and whistleblower frameworks.',
    details: bullets(
      'Fraud risk management programmes',
      'Internal investigation protocols',
      'Whistleblower frameworks',
      'ACAMS and international anti-fraud standards',
    ),
    icon: 'checkCircle',
    imagePath: '/consultancy-services/4.webp',
  },
  {
    number: '05',
    anchorId: 'vara-compliance',
    title: 'VARA & Digital Asset Compliance',
    summary:
      'Specialised advisory for firms operating under the Dubai Virtual Assets Regulatory Authority framework.',
    details: bullets(
      'Exchange traded derivatives (ETD) obligations',
      'Licensing requirements',
      'Suitability assessments',
      'Insurance fund design and recordkeeping architecture',
    ),
    icon: 'landmark',
    imagePath: '/consultancy-services/5.webp',
  },
  {
    number: '06',
    anchorId: 'training-capacity-building',
    title: 'Training & Capacity Building',
    summary:
      'In-house training programmes, compliance team upskilling, and certification preparation for ACAMS CAFS and related designations.',
    details: bullets(
      'In-house team training',
      'Compliance team upskilling',
      'Certification preparation',
      'Cross-linked learning pathways',
    ),
    icon: 'graduation',
    imagePath: '/consultancy-services/6.webp',
  },
]

export const consultancyLayout = [
  {
    blockType: 'proteqOverviewRich',
    variant: 'simple',
    eyebrow: 'Overview',
    heading: 'Advisory Built for the Real Work of Compliance',
    paragraphs: bullets(
      'Our consulting practice works with financial institutions, virtual asset service providers, fintechs, and regulated businesses to build, audit, and strengthen their compliance operations.',
      'Advisory engagements cover anti-money laundering frameworks, know your customer processes, sanctions screening programmes, and anti-fraud controls. The work is shaped around the organisation\'s actual risk exposure, systems, people, and regulatory duties.',
      'This is not theoretical guidance. Each engagement is grounded in hands-on implementation, with clear findings, usable documentation, filing support where required, and practical training for the teams responsible for execution.',
    ),
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
    eyebrow: 'What We Advise On',
    heading: 'Specialised Advisory for Complex Regulatory Environments',
    description:
      'Practical support across AML, anti-fraud, digital asset regulation, and governance — from programme design through to documentation and team enablement.',
    modules: consultancyModules,
    sectionId: 'advisory-modules',
  },
  {
    blockType: 'proteqWhyChoose',
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
    sectionId: 'consultancy-approach-heading',
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
]

export const learningLayout = [
  {
    blockType: 'proteqLearningIntro',
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
    sectionId: 'learning-intro',
  },
  {
    blockType: 'proteqOverviewRich',
    variant: 'expertise',
    eyebrow: 'Proof of Expertise',
    heading: 'Learn From the Practitioners, Not the Textbooks',
    description:
      'Your training is led by compliance professionals with live regulatory, examination, and programme-building experience — not generic instructors reading from slides.',
    paragraphs: bullets(
      'Our lead faculty brings hands-on AML, sanctions, and anti-fraud experience across Tier 1 banking, digital asset exchanges, and regulated fintech. They have led FATF-aligned gap analyses, managed regulatory examinations, and designed AML programmes adopted across the UK, EU, UAE, and APAC.',
      'Training delivery draws on direct advisory work with FCA, VARA, and DFSA-regulated entities — so every session reflects how compliance is examined and operated in practice.',
    ),
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
    sectionId: 'learning-expertise',
  },
  {
    blockType: 'proteqCardGrid',
    cardStyle: 'programme',
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
        highlights: bullets(
          'AML & CFT fundamentals',
          'Financial crime risk awareness',
          'Real-world compliance scenarios',
        ),
      },
      {
        title: 'Certification Preparation',
        anchorId: 'certification-preparation',
        description:
          'Structured learning paths designed to support professionals preparing for industry-recognised compliance and anti-fraud certifications.',
        imagePath: '/consultancy-services/2.webp',
        highlights: bullets(
          'CAFS preparation support',
          'Assessment-focused modules',
          'Expert-led learning sessions',
        ),
      },
      {
        title: 'Corporate Compliance Training',
        anchorId: 'corporate-compliance-training',
        description:
          'Custom training programmes tailored to your organisation\'s regulatory environment, operational workflows, and internal risk profile.',
        imagePath: '/trainer.webp',
        highlights: bullets(
          'Organisation-specific content',
          'Policy & procedure alignment',
          'Flexible delivery formats',
        ),
      },
      {
        title: 'Webinar Learning Library',
        anchorId: 'webinar-learning-library',
        description:
          'On-demand webinar sessions designed for professionals seeking practical compliance insights, regulatory updates, and implementation guidance.',
        imagePath: '/learning-5.webp',
        highlights: bullets(
          'Pre-recorded expert webinars',
          'Practical implementation insights',
          'Multi-category learning tracks',
        ),
      },
      {
        title: 'Team Upskilling & Workshops',
        anchorId: 'team-upskilling-workshops',
        description:
          'Interactive workshops and guided learning sessions that help teams strengthen operational awareness and compliance capabilities.',
        imagePath: '/learning-3.webp',
        highlights: bullets(
          'Interactive team workshops',
          'Scenario-based learning',
          'Compliance capability building',
        ),
      },
      {
        title: 'AI, VARA & Digital Asset Education',
        anchorId: 'ai-vara-digital-asset-education',
        description:
          'Specialised programmes focused on AI in finance, VARA frameworks, digital assets, and emerging regulatory technologies.',
        imagePath: '/consultancy-services/5.webp',
        highlights: bullets(
          'VARA compliance insights',
          'AI & digital asset regulation',
          'Emerging risk education',
        ),
      },
    ],
    sectionId: 'training-programmes',
  },
  {
    blockType: 'proteqTrustStrip',
    variant: 'stats-row',
    stats: [
      { value: '500', suffix: '+', label: 'Professionals Trained' },
      { value: '40', suffix: '+', label: 'Programme Modules' },
      { value: '98', suffix: '%', label: 'Satisfaction Rate' },
    ],
    animate: true,
  },
  {
    blockType: 'proteqIconCardGrid',
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
          'Webinars, in-house programmes, and certification tracks — formats shaped around your team\'s schedule and regulatory context.',
        icon: 'monitorPlay',
      },
    ],
  },
  {
    blockType: 'proteqApproach',
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
          'We map your organisation\'s objectives, culture, and learning gaps — understanding regulatory context, team roles, and skill priorities before recommending a path.',
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
    sectionId: 'learning-approach',
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
]

export const systemsLayout = [
  {
    blockType: 'proteqOverviewRich',
    variant: 'focus-panel',
    eyebrow: 'Overview',
    heading: 'Systems Built for Modern Compliance Operations',
    paragraphs: bullets(
      'We help organisations evaluate, implement, and optimise compliance technology tailored to their regulatory obligations and operational needs — from AML screening and transaction monitoring to KYC onboarding and regulatory reporting.',
      'Our advisory focuses on scalable systems that reduce risk, improve efficiency, and support long-term compliance readiness. Recommendations are shaped around your risk exposure, current stack, team workflows, and regulatory duties — not vendor incentives.',
      'Every engagement starts with understanding your control gaps and workflow realities, then delivers clear, defensible guidance your team can implement with confidence.',
    ),
    ctaLabel: 'Request a Systems Assessment',
    ctaHref: '/contact',
    imagePath: '/system-provider.webp',
    imageAlt: 'Compliance technology advisory and system evaluation',
    sectionId: 'systems-overview',
  },
  {
    blockType: 'proteqCardGrid',
    cardStyle: 'feature',
    eyebrow: 'AML Solution',
    heading: 'Integrated AI RegTech & SupTech Solutions for Modern Compliance',
    description:
      'Built to remove friction from compliance technology decisions. Screening, monitoring, onboarding, and reporting — evaluated and implemented as one coherent capability for your team.',
    layout: 'grid',
    columns: '2',
    items: [
      {
        tag: 'AML Screening',
        title: 'Screening Against Analyst-Approved Data Models',
        description:
          'Evaluate and implement PEP, sanctions, adverse media, and watchlist screening — with workflow integration and false positive reduction.',
        highlights: bullets(
          'PEP & RCA coverage across multiple jurisdictions',
          'Sanctions and watchlist matching with alias handling',
          'Adverse media workflows with analyst-ready escalation',
          'Vendor-neutral RFP and proof-of-concept support',
        ),
        icon: 'searchCheck',
        imagePath: '/hero-new.webp',
      },
      {
        tag: 'Transaction Monitoring',
        title: 'Customisable Transaction Monitoring',
        description:
          'Deploy rule-based and AI-augmented monitoring across typology libraries, alert management, and regulatory reporting integration.',
        highlights: bullets(
          'Typology libraries aligned to your risk profile',
          'Alert triage, case workflow, and SLA design',
          'False positive tuning with documented rationale',
          'Integration with screening and case management',
        ),
        icon: 'activity',
        imagePath: '/hero-2-new.webp',
      },
      {
        tag: 'KYC & CDD',
        title: 'Customer Onboarding & Ongoing Due Diligence',
        description:
          'End-to-end onboarding and ongoing due diligence platforms for regulated customer journeys — identity, UBO, and risk scoring.',
        highlights: bullets(
          'CDD and EDD workflow design',
          'Beneficial ownership and entity verification',
          'Risk scoring aligned to internal appetite',
          'Ongoing monitoring and periodic review triggers',
        ),
        icon: 'userCheck',
        imagePath: '/learning-4.webp',
      },
      {
        tag: 'Reporting',
        title: 'Regulatory Reporting & Case Management',
        description:
          'SAR, CTR, and case management workflows with audit trails built for regulatory examination and internal governance.',
        highlights: bullets(
          'Structured SAR/STR filing workflows',
          'Examination-ready audit trails and evidence',
          'Escalation paths and committee reporting',
          'Handover documentation for operations teams',
        ),
        icon: 'fileCheck',
        imagePath: '/implementation.webp',
      },
    ],
    ctaLabel: 'Book Free Assessment',
    ctaHref: '/contact',
    sectionId: 'solution-areas',
  },
  {
    blockType: 'proteqIconCardGrid',
    headerLayout: 'split',
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
        icon: 'workflow',
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
    sectionId: 'systems-capabilities',
  },
  {
    blockType: 'proteqApproach',
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
    sectionId: 'systems-approach',
  },
  {
    blockType: 'proteqTrustStrip',
    variant: 'impact-panel',
    eyebrow: 'Impact at Scale',
    heading: 'RegTech Advisory Built for Regulated Operations',
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
    animate: false,
  },
  {
    blockType: 'proteqWhyChoose',
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
        icon: 'scale',
      },
      {
        title: 'Implementation Depth',
        description:
          'From proof-of-concept through deployment, workflow tuning, and false positive optimisation — not just a vendor shortlist.',
        icon: 'workflow',
      },
      {
        title: 'Regulator Readiness',
        description:
          'Systems and documentation structured for internal governance, procurement audit, and regulatory examination.',
        icon: 'cpu',
      },
    ],
    sectionId: 'systems-why-choose',
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
]

export const aiInvestmentsLayout = [
  {
    blockType: 'proteqVideoSection',
    eyebrow: 'Aurum Introduction',
    heading: 'A Comprehensive Financial Ecosystem',
    paragraphs: bullets(
      'Aurum Foundation is a comprehensive financial ecosystem that combines AI driven intelligence with blockchain powered security. Unlike traditional investment platforms, Aurum provides access to both fiat and crypto assets in a single secure environment, enabling users to manage wealth, execute payments, and optimise liquidity across asset classes.',
      'The platform\'s core offerings include AI powered trading bots (EX-AI Bot), neural network investment tools (Neyro), gold (XAU) backed investment packages, and a neobank for Web3 financial services. Aurum operates at the intersection of decentralised finance and traditional wealth management.',
    ),
    videoId: 'iSDJ68Z-8sU',
    buttons: [
      {
        label: 'Get started',
        href: '#aurum-register',
        variant: 'default',
        glowingDot: true,
        showArrow: true,
      },
    ],
    sectionId: 'aurum-intro',
    playLabel: 'Play AURUM Foundation overview',
  },
  {
    blockType: 'proteqCardGrid',
    cardStyle: 'offering',
    eyebrow: 'Core Offerings',
    heading: 'The Building Blocks of the Aurum Ecosystem',
    description:
      'Four integrated products at the intersection of decentralised finance and traditional wealth management — designed to work together in one platform.',
    layout: 'grid',
    columns: '4',
    items: [
      {
        title: 'EX-AI Bot',
        tag: 'Autonomous AI trading intelligence',
        description:
          'AI powered trading bots that analyse market signals and execute strategies with defined risk parameters — operating around the clock.',
        icon: 'bot',
        imagePath: '/ai-investment.webp',
      },
      {
        title: 'Neyro',
        tag: 'Neural network investment tools',
        description:
          'Pattern recognition and allocation tools designed to support smarter portfolio decisions across volatile markets.',
        icon: 'sparkles',
        imagePath: '/hero-new.webp',
      },
      {
        title: 'Gold (XAU) Packages',
        tag: 'Gold-backed digital investment',
        description:
          'Investment packages that combine digital access with the stability and inflation protection of gold exposure.',
        icon: 'coins',
        imagePath: '/aurum/aurum.webp',
      },
      {
        title: 'Web3 NeoBank',
        tag: 'Fiat & crypto in one hub',
        description:
          'Manage fiat and crypto, execute payments, and access liquidity from a single secure Web3 financial environment.',
        icon: 'landmark',
        imagePath: '/aurum/aurum-2.webp',
      },
    ],
    sectionId: 'core-offerings',
  },
  {
    blockType: 'proteqVideoSection',
    eyebrow: 'Platform Scale',
    heading: 'Shaping the Future of Finance',
    paragraphs: bullets(
      'AI and blockchain technology delivering secure, transparent, and scalable financial management for a global digital economy.',
    ),
    videoId: 'uKgSgGClewc',
    sideCardEyebrow: 'Platform at a glance',
    sideCardBody:
      'Aurum Foundation brings AI trading intelligence, gold-backed stability, and Web3 banking into one ecosystem — giving investors a single place to grow, manage, and move assets with blockchain-grade transparency.\n\nFrom EX-AI strategies and Neyro neural networks to cross-border neobank services, the platform scales with partners worldwide.',
    stats: [
      { value: '$30M+', label: 'Assets managed' },
      { value: '18,000+', label: 'Active partners' },
      { value: '5+', label: 'Tech products' },
    ],
    sectionId: 'aurum-platform',
    playLabel: 'Play AURUM ecosystem video',
  },
  {
    blockType: 'proteqReferralRegister',
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
    sectionId: 'aurum-register',
  },
  {
    blockType: 'proteqIconList',
    eyebrow: 'Why AI Investments?',
    heading: 'A Meaningful Shift in How We Approach Wealth Building',
    description:
      'AI driven investment tools represent a meaningful shift in how individuals and institutions approach wealth building. The explanation below is educational and grounded — not promotional — reflecting an understanding of both the technology and the financial fundamentals.',
    reasons: [
      {
        icon: 'lineChart',
        text: 'AI continuously analyses financial markets to identify opportunities and manage risk.',
      },
      {
        icon: 'shieldCheck',
        text: 'Blockchain technology ensures transparency, immutability, and decentralisation.',
      },
      {
        icon: 'coins',
        text: 'Gold-backed instruments provide stability and inflation protection alongside digital asset growth.',
      },
      {
        icon: 'globe',
        text: 'Integrated payment and banking tools allow users to manage, grow, and spend assets from a single platform.',
      },
    ],
    sectionId: 'aurum-why',
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
]

export const partnerLayout = [
  {
    blockType: 'proteqPillSplit',
    eyebrow: 'Partnership & Collaboration',
    heading: 'Build the Future of Compliance, Training & Regulatory Technology With Us',
    paragraphs: bullets(
      'We collaborate with industry experts, compliance professionals, technology providers, and forward thinking organisations to create impactful advisory, learning, and systems driven solutions. Whether you deliver specialised expertise, innovative compliance technology, or training capabilities, we provide a platform to grow together, expand your reach, and create meaningful industry impact.',
      'Join a growing network of experts, trainers, and technology providers shaping the future of compliance, advisory, and regulatory innovation.',
    ),
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
    sectionId: 'partner-overview',
  },
  {
    blockType: 'proteqTrustStrip',
    variant: 'stats-row',
    stats: [
      { value: '30', suffix: '+', label: 'Global Markets' },
      { value: '40', suffix: '+', label: 'Institutions in Network' },
      { value: '3', suffix: '', label: 'Partnership Tracks' },
      { value: '5', suffix: ' Days', label: 'Application Review' },
    ],
    animate: true,
  },
  {
    blockType: 'proteqCardGrid',
    cardStyle: 'opportunity',
    eyebrow: 'Collaboration Opportunities',
    heading: 'Choose the Partnership Path That Fits Your Expertise',
    description:
      'Three ways to collaborate — advisory partnerships, expert training, and compliance technology provider relationships.',
    layout: 'grid',
    columns: '3',
    items: [
      {
        title: 'Become a Partner',
        description:
          'Collaborate with us to co-deliver advisory, training, and compliance technology services across regulated industries.',
        imagePath: '/partner.webp',
        highlights: bullets(
          'Co-branded opportunities',
          'Shared go-to-market support',
          'Access to client network',
          'Strategic industry collaboration',
        ),
        buttonLabel: 'Apply as a Partner',
        buttonHref: '#partner-form',
      },
      {
        title: 'Become a Trainer',
        description:
          'Join our learning ecosystem as a subject matter expert delivering practical compliance and anti-fraud education.',
        imagePath: '/trainer.webp',
        highlights: bullets(
          'Deliver expert webinars',
          'Create training modules',
          'Build industry authority',
          'Flexible content formats',
        ),
        buttonLabel: 'Apply as a Trainer',
        buttonHref: '#partner-form',
      },
      {
        title: 'Become a System Provider',
        description:
          'Showcase your compliance technology solutions through our systems advisory and implementation network.',
        imagePath: '/system-provider.webp',
        highlights: bullets(
          'Vendor evaluation access',
          'Compliance technology exposure',
          'Integration opportunities',
          'Industry-focused partnerships',
        ),
        buttonLabel: 'Become a Provider',
        buttonHref: '#partner-form',
      },
    ],
    sectionId: 'partnership-opportunities',
  },
  {
    blockType: 'proteqWhyChoose',
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
        icon: 'briefcaseBusiness',
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
        icon: 'badgeCheck',
      },
    ],
    sectionId: 'partner-why-choose',
  },
  {
    blockType: 'proteqPartnerForm',
    eyebrow: 'Partnership Application',
    heading: 'Apply to Partner With Proteq',
    sectionId: 'partner-form',
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
]

export const contactLayout = [
  {
    blockType: 'proteqContactBlock',
    eyebrow: 'Let\u2019s Talk',
    heading: 'Speak With Our Experts',
    description:
      'Whether you need compliance advisory, professional learning, RegTech systems, or AI investment guidance — we are here to help.',
    sectionId: 'contact-main',
  },
  {
    blockType: 'proteqMapEmbed',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.887623456789!2d-0.0195!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331d0c5d%3A0xef9344b9b6e4c8f1!2sOne%20Canada%20Square%2C%20London%20E14%205AB!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
    sectionId: 'contact-map',
  },
  {
    blockType: 'proteqNewsletter',
    eyebrow: 'Stay Informed',
    heading: 'Stay Ahead of Compliance',
    description:
      'Regulatory updates, training releases, and industry insights delivered to your inbox.',
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
    sectionId: 'newsletter',
  },
]
