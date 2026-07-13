/**
 * Resolve image URL from Payload media upload or static public path.
 */
import { mapIcon } from '@/utilities/mapIcon'
import { lexicalToPlainText, textToLexical } from '@/utilities/richText'
import { parseYouTubeVideoId } from '@/lib/youtube'
import {
  mapActionButton,
  mapActionButtons,
  mapCardButton,
  mapCtaFields,
} from '@/utilities/mapActionButton'

export function mapButtons(buttons = []) {
  return mapActionButtons(buttons)
}

export function resolveImageSrc(block) {
  if (block?.image && typeof block.image === 'object' && block.image.url) {
    return block.image.url
  }
  return block?.imagePath || null
}

export function resolveMobileImageSrc(block) {
  if (block?.mobileImage && typeof block.mobileImage === 'object' && block.mobileImage.url) {
    return block.mobileImage.url
  }
  if (block?.mobileImagePath) return block.mobileImagePath
  return resolveImageSrc(block)
}

export function resolveLogoSrc(logo) {
  if (logo?.logo && typeof logo.logo === 'object' && logo.logo.url) {
    return logo.logo.url
  }
  return logo?.logoPath || null
}

export function mapHighlights(highlights = []) {
  return highlights
    .map((item) => {
      const text = typeof item === 'string' ? item : item?.text
      if (!text) return null

      const href = typeof item === 'object' && item?.href ? item.href : null

      return { text, href }
    })
    .filter(Boolean)
}

export function mapSlides(slides = []) {
  return slides.map((slide, index) => ({
    id: slide.id || `slide-${index}`,
    tag: slide.tag,
    title: slide.title,
    description: slide.description,
    cta: mapActionButton(
      slide.cta || {
        label: slide.cta,
        href: slide.href,
        opensConsultation: slide.opensConsultation,
      },
    ),
    image: resolveImageSrc(slide) || '/hero-new.webp',
    mobileImage: resolveMobileImageSrc(slide) || resolveImageSrc(slide) || '/hero-new.webp',
    imageAlt: slide.imageAlt || slide.title,
  }))
}

export function mapLogos(logos = []) {
  return logos
    .map((logo) => ({
      name: logo.name,
      website: logo.website,
      logo: resolveLogoSrc(logo),
    }))
    .filter((logo) => logo.logo)
}

export function mapTestimonials(testimonials = []) {
  return testimonials.map((item) => ({
    quote: item.quote,
    name: item.name,
    role: item.role,
    company: item.company,
    avatar:
      item.avatar && typeof item.avatar === 'object' && item.avatar.url
        ? item.avatar.url
        : null,
  }))
}

export function mapStats(stats = []) {
  return stats.map((stat) => ({
    value: stat.value,
    prefix: stat.prefix,
    suffix: stat.suffix,
    label: stat.label,
    description: stat.description,
    ...mapIcon(stat),
  }))
}

export function mapContentOverrides(block) {
  if (!block) return undefined
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    body: block.body,
    image: resolveImageSrc(block),
    items: block.items,
    sectionId: block.sectionId,
  }
}

export function mapParagraphs(paragraphs = []) {
  return paragraphs.map((p) => p.text).filter(Boolean)
}

function resolveOverviewDescription(block) {
  if (block?.description) return block.description
  if (block?.body) return block.body
  const paragraphs = block?.paragraphs ? mapParagraphs(block.paragraphs) : []
  if (paragraphs.length) return textToLexical(...paragraphs)
  return null
}

export function mapFocusAreas(areas = []) {
  return areas.map((area) => ({
    label: area.label,
    ...mapIcon(area),
  }))
}

export function mapPoints(points = []) {
  return points.map((point, index) => ({
    number: point.number || String(index + 1).padStart(2, '0'),
    title: point.title,
    description: point.description,
    ...mapIcon(point),
  }))
}

export function mapSteps(steps = []) {
  return steps.map((step) => ({
    title: step.title,
    description: step.description,
  }))
}

function mapHighlightText(highlight) {
  if (typeof highlight === 'string') return highlight
  if (highlight && typeof highlight === 'object') {
    return highlight.text || highlight.label || ''
  }
  return ''
}

function resolveCardDescription(description) {
  if (!description) return ''
  if (typeof description === 'string') return description
  return lexicalToPlainText(description) || ''
}

const PROGRAMME_CARD_DEFAULTS = {
  'AML & Financial Crime Training': {
    anchorId: 'aml-financial-crime-training',
    description:
      'Practical training programmes covering AML, CFT, fraud prevention, and regulatory compliance for modern organisations and compliance teams.',
    image: '/consultancy-services/1.webp',
    highlights: [
      'AML & CFT fundamentals',
      'Financial crime risk awareness',
      'Real-world compliance scenarios',
    ],
  },
  'Certification Preparation': {
    anchorId: 'certification-preparation',
    description:
      'Structured learning paths designed to support professionals preparing for industry-recognised compliance and anti-fraud certifications.',
    image: '/consultancy-services/2.webp',
    highlights: [
      'CAFS preparation support',
      'Assessment-focused modules',
      'Expert-led learning sessions',
    ],
  },
  'Corporate Compliance Training': {
    anchorId: 'corporate-compliance-training',
    description:
      "Custom training programmes tailored to your organisation's regulatory environment, operational workflows, and internal risk profile.",
    image: '/trainer.webp',
    highlights: [
      'Organisation-specific content',
      'Policy & procedure alignment',
      'Flexible delivery formats',
    ],
  },
  'Webinar Learning Library': {
    anchorId: 'webinar-learning-library',
    description:
      'On-demand webinar sessions designed for professionals seeking practical compliance insights, regulatory updates, and implementation guidance.',
    image: '/learning-5.webp',
    highlights: [
      'Pre-recorded expert webinars',
      'Practical implementation insights',
      'Multi-category learning tracks',
    ],
  },
  'Team Upskilling & Workshops': {
    anchorId: 'team-upskilling-workshops',
    description:
      'Interactive workshops and guided learning sessions that help teams strengthen operational awareness and compliance capabilities.',
    image: '/learning-3.webp',
    highlights: [
      'Interactive team workshops',
      'Scenario-based learning',
      'Compliance capability building',
    ],
  },
  'AI, VARA & Digital Asset Education': {
    anchorId: 'ai-vara-digital-asset-education',
    description:
      'Specialised programmes focused on AI in finance, VARA frameworks, digital assets, and emerging regulatory technologies.',
    image: '/consultancy-services/5.webp',
    imageClass: 'object-[center_28%]',
    highlights: [
      'VARA compliance insights',
      'AI & digital asset regulation',
      'Emerging risk education',
    ],
  },
}

function mergeProgrammeCardDefaults(item) {
  const fallback = PROGRAMME_CARD_DEFAULTS[item.title]
  if (!fallback) return item

  return {
    ...item,
    anchorId: item.anchorId || fallback.anchorId,
    description: item.description || fallback.description,
    highlights: item.highlights?.length ? item.highlights : fallback.highlights,
    image: item.image || fallback.image,
    imageClass: item.imageClass || fallback.imageClass,
  }
}

export function mapCardItems(items = []) {
  return items.map((item) => {
    const mapped = {
      id: item.anchorId || item.id,
      anchorId: item.anchorId,
      title: item.title,
      appearance: item.appearance || 'overlay',
      tag: item.tag,
      description: resolveCardDescription(item.description),
      image: resolveImageSrc(item),
      ...mapIcon(item),
      highlights: item.highlights?.map(mapHighlightText).filter(Boolean) || [],
      button: mapCardButton(item),
    }

    const merged = mergeProgrammeCardDefaults(mapped)
    return {
      ...merged,
      id: merged.anchorId || merged.id,
    }
  })
}

export function mapModules(modules = []) {
  return modules.map((mod) => ({
    number: mod.number,
    title: mod.title,
    summary: mod.summary,
    details: mod.details?.map((d) => d.text).filter(Boolean) || [],
    image: resolveImageSrc(mod),
    ...mapIcon(mod),
    href: mod.href,
    anchorId: mod.anchorId,
    id: mod.anchorId || mod.id,
  }))
}

export function mapTrustStats(stats = []) {
  return stats.map((stat) => ({
    value: stat.value,
    suffix: stat.suffix || '',
    label: stat.label,
    description: stat.description,
  }))
}

export function mapIconListItems(reasons = []) {
  return reasons.map((item) => ({
    text: item.text,
    ...mapIcon(item),
  }))
}

export function mapReferralRegister(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    highlights:
      block.highlights
        ?.map((item) => ({
          text: item.text,
          ...mapIcon(item),
        }))
        .filter((item) => item.text) || [],
    cta: mapCtaFields(block),
    footnote: block.footnote,
    sectionId: block.sectionId,
  }
}

export function mapLinkCards(links = []) {
  return links.map((link) => ({
    title: link.title,
    description: link.description,
    button: mapCardButton(link),
    external: Boolean(link.external),
  }))
}

export function mapPills(pills = []) {
  return pills.map((pill) => pill.label).filter(Boolean)
}

export function mapTopics(topics = []) {
  return topics.map((topic) => topic.label).filter(Boolean)
}

export function mapOverviewRich(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: resolveOverviewDescription(block),
    cta: mapCtaFields(block),
    image: resolveImageSrc(block),
    imageAlt: block.imageAlt,
    particleId: block.sectionId,
  }
}

export function mapWhyChoose(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    image: resolveImageSrc(block),
    imageAlt: block.imageAlt,
    points: mapPoints(block.points),
    particleId: block.sectionId,
  }
}

export function mapApproach(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    quote: block.quote,
    steps: mapSteps(block.steps),
    sectionId: block.sectionId,
    particleId: block.sectionId,
  }
}

export function mapCardGrid(block) {
  let items = mapCardItems(block.items)

  if (block.cardStyle === 'programme') {
    items = items.map(mergeProgrammeCardDefaults)
  }

  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    layout: block.layout || 'grid',
    columns: block.columns || '3',
    items,
    cta: mapCtaFields(block),
    sectionId: block.sectionId,
  }
}

export function mapModuleCarousel(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    modules: mapModules(block.modules),
    sectionId: block.sectionId,
  }
}

function resolveExpertiseBody(block) {
  if (block?.body) return block.body
  const paragraphs = block?.paragraphs ? mapParagraphs(block.paragraphs) : []
  if (paragraphs.length) return textToLexical(...paragraphs)
  return null
}

export function mapLearningExpertise(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description || null,
    body: resolveExpertiseBody(block),
    image: resolveImageSrc(block),
    imageAlt: block.imageAlt,
    inlineStats: mapTrustStats(block.stats),
    overlayLeft: block.overlayLeft,
    overlayRight: block.overlayRight,
    particleId: block.sectionId,
  }
}

export function mapLearningIntro(block) {
  return {
    leadText: block.leadText,
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    image: resolveImageSrc(block),
    imageAlt: block.imageAlt,
    secondaryImage: block.secondaryImagePath,
    statValue: block.statValue,
    statLabel: block.statLabel,
    steps:
      block.steps?.map((step, index) => ({
        step: step.step || String(index + 1).padStart(2, '0'),
        title: step.title,
        description: step.description,
        ...mapIcon(step),
      })) || [],
    formats: mapFocusAreas(block.formats),
    primaryCta: mapCtaFields(block),
    secondaryCta: mapActionButton(block.secondaryCta),
    sectionId: block.sectionId,
    particleId: block.sectionId,
  }
}

export function mapPartnerForm(block) {
  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    sectionId: block.sectionId,
  }
}

export function mapVideoSection(block) {
  const sideCardBody = block.sideCardBody
    ? String(block.sideCardBody)
        .split(/\n\n+/)
        .map((text) => text.trim())
        .filter(Boolean)
    : null

  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description || null,
    videoId: parseYouTubeVideoId(block.videoId) || block.videoId || null,
    buttons: mapButtons(block.buttons),
    image: resolveImageSrc(block),
    sideCardEyebrow: block.sideCardEyebrow,
    sideCardBody,
    stats: mapTrustStats(block.stats),
    sectionId: block.sectionId,
    playLabel: block.playLabel,
  }
}

export function mapTrustStrip(block) {
  return {
    variant: block.variant || 'stats-row',
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    stats: mapTrustStats(block.stats),
    animate: block.animate !== false,
    sectionId: block.sectionId,
    particleId: block.sectionId,
    cta: mapCtaFields(block),
  }
}

export function isLearningExpertiseOverview(block) {
  return Boolean(
    block?.variant === 'expertise' ||
      block?.stats?.length ||
      block?.overlayLeft?.text ||
      block?.overlayRight?.text,
  )
}

export function pickCardGridComponent(block, props) {
  const style = block?.cardStyle

  if (style === 'overlay') return 'consultancyIndustries'
  if (style === 'feature') return 'systemsIntelligence'
  if (style === 'programme') return 'trainingProgrammes'
  if (style === 'offering') return 'aurumCoreOfferings'
  if (style === 'opportunity') return 'partnerOpportunities'

  if (props.items?.some((item) => item.button?.label)) {
    return 'partnerOpportunities'
  }
  if (props.columns === '4' || props.columns === 4) {
    return 'aurumCoreOfferings'
  }
  if (
    props.layout === 'carousel-grid' &&
    props.items?.some((item) => item.highlights?.length)
  ) {
    return 'trainingProgrammes'
  }
  if (
    props.layout === 'grid' &&
    props.cta?.label &&
    props.items?.some((item) => item.highlights?.length)
  ) {
    return 'systemsIntelligence'
  }
  return 'consultancyIndustries'
}

export function isPlatformVideoSection(block) {
  return Boolean(block?.sideCardBody || block?.stats?.length)
}

export function isImpactTrustStrip(block) {
  return block?.variant === 'impact-panel'
}

export function mapIconCardGrid(block) {
  const columns = Number(block.columns) || 3

  return {
    eyebrow: block.eyebrow,
    heading: block.heading,
    description: block.description,
    headerLayout:
      block.headerLayout ||
      (block.sectionId === 'capabilities' ? 'split' : 'centered'),
    columns,
    items: block.items?.map((item) => ({
      title: item.title,
      description: item.description,
      ...mapIcon(item),
    })),
    sectionId: block.sectionId,
    particleId: block.sectionId,
  }
}
