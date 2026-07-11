export function isRichTextContent(value) {
  return Boolean(value && typeof value === 'object' && value.root)
}

export function textToLexical(...paragraphs) {
  const blocks = paragraphs.filter(Boolean).map((text) => ({
    type: 'paragraph',
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr',
    children: [
      {
        type: 'text',
        detail: 0,
        format: 0,
        mode: 'normal',
        style: '',
        text: String(text),
        version: 1,
      },
    ],
  }))

  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: blocks,
    },
  }
}

export function lexicalToPlainText(value) {
  if (!value) return value
  if (typeof value === 'string') return value
  if (!isRichTextContent(value)) return value

  const paragraphs = []

  for (const child of value.root?.children || []) {
    if (child.type === 'paragraph') {
      const text = (child.children || [])
        .filter((node) => node.type === 'text')
        .map((node) => node.text)
        .join('')

      if (text) paragraphs.push(text)
    }
  }

  return paragraphs.join('\n\n')
}

function normalizeDescription(value) {
  if (!value) return value
  if (isRichTextContent(value)) return value
  if (typeof value === 'string') return textToLexical(value)
  return value
}

function ensurePlainTextDescription(value) {
  if (!value) return value
  if (isRichTextContent(value)) return lexicalToPlainText(value)
  return value
}

/** Block types whose top-level `description` uses the Lexical rich-text field. */
const RICH_TEXT_SECTION_BLOCKS = new Set([
  'proteqOverviewRich',
  'proteqIconCardGrid',
  'proteqWhyChoose',
  'proteqApproach',
  'proteqCardGrid',
  'proteqModuleCarousel',
  'proteqTrustStrip',
  'proteqVideoSection',
  'proteqReferralRegister',
  'proteqLinkCards',
  'proteqIconList',
  'proteqPillSplit',
  'proteqNewsletter',
  'proteqContactBlock',
  'proteqLearningIntro',
  'proteqPartnerForm',
  'proteqContentSection',
  'proteqMainCta',
  'proteqLogoBar',
  'proteqTestimonials',
])

/** Nested array keys where `description` must stay plain textarea text. */
const PLAIN_TEXT_NESTED_ARRAYS = ['points', 'steps', 'items', 'stats', 'links']

function normalizeOverviewContent(block) {
  const next = { ...block }
  const isExpertise = next.variant === 'expertise'

  if (next.description) {
    next.description = normalizeDescription(next.description)
  }

  if (isExpertise) {
    if (next.body) {
      next.body = normalizeDescription(next.body)
    } else if (Array.isArray(next.paragraphs) && next.paragraphs.length > 0) {
      const texts = next.paragraphs.map((paragraph) => paragraph?.text).filter(Boolean)

      if (texts.length > 0) {
        next.body = textToLexical(...texts)
      }
    }

    delete next.paragraphs
    return next
  }

  if (!next.description && next.body) {
    next.description = normalizeDescription(next.body)
    delete next.body
  } else if (!next.description && Array.isArray(next.paragraphs) && next.paragraphs.length > 0) {
    const texts = next.paragraphs.map((paragraph) => paragraph?.text).filter(Boolean)

    if (texts.length > 0) {
      next.description = textToLexical(...texts)
      delete next.paragraphs
    }
  }

  return next
}

function normalizeVideoSectionContent(block) {
  const next = { ...block }

  if (next.description) {
    next.description = normalizeDescription(next.description)
  } else if (next.body) {
    next.description = normalizeDescription(next.body)
  } else if (Array.isArray(next.paragraphs) && next.paragraphs.length > 0) {
    const texts = next.paragraphs.map((paragraph) => paragraph?.text).filter(Boolean)

    if (texts.length > 0) {
      next.description = textToLexical(...texts)
    }
  }

  delete next.body
  delete next.paragraphs

  return next
}

function normalizeParagraphsToBody(block) {
  if (block.body || !Array.isArray(block.paragraphs) || block.paragraphs.length === 0) {
    return block
  }

  const texts = block.paragraphs.map((paragraph) => paragraph?.text).filter(Boolean)

  if (texts.length === 0) return block

  const { paragraphs: _removed, ...rest } = block

  return {
    ...rest,
    body: textToLexical(...texts),
  }
}

function revertNestedPlainTextDescriptions(block) {
  const next = { ...block }

  for (const key of PLAIN_TEXT_NESTED_ARRAYS) {
    if (!Array.isArray(next[key])) continue

    next[key] = next[key].map((item) => {
      if (!item || typeof item !== 'object' || item.description === undefined) {
        return item
      }

      return {
        ...item,
        description: ensurePlainTextDescription(item.description),
      }
    })
  }

  return next
}

export function normalizeProteqBlock(block) {
  if (!block || typeof block !== 'object') return block

  let next = { ...block }
  const blockType = block.blockType

  if (blockType === 'proteqOverviewRich') {
    next = normalizeOverviewContent(next)
  } else if (blockType === 'proteqVideoSection') {
    next = normalizeVideoSectionContent(next)
  } else if (blockType && RICH_TEXT_SECTION_BLOCKS.has(blockType)) {
    if (next.description !== undefined) {
      next.description = normalizeDescription(next.description)
    }

    if (blockType === 'proteqPillSplit') {
      next = normalizeParagraphsToBody(next)
    }
  } else if (next.description !== undefined) {
    next.description = ensurePlainTextDescription(next.description)
  }

  return revertNestedPlainTextDescriptions(next)
}

export function normalizeProteqPageData(pageData) {
  const next = { ...pageData }

  if (next.hero && typeof next.hero === 'object') {
    next.hero = { ...next.hero }

    if (next.hero.description !== undefined) {
      next.hero.description = ensurePlainTextDescription(next.hero.description)
    }

    if (Array.isArray(next.hero.slides)) {
      next.hero.slides = next.hero.slides.map((slide) => ({
        ...slide,
        description: ensurePlainTextDescription(slide.description),
      }))
    }
  }

  if (Array.isArray(next.layout)) {
    next.layout = next.layout.map((block) => normalizeProteqBlock(block))
  }

  return next
}
