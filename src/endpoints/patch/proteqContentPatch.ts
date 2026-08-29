import type { Payload, PayloadRequest } from 'payload'

/**
 * One-off content patch — Learning page testimonials.
 *
 * Replaces the mismatched advisory/RegTech testimonials in the `proteqTestimonials`
 * block on the Learning page with training-specific ones (and drops the malformed
 * entry that had no name/role).
 *
 * `payload.update` re-validates the whole page, so the Learning page's Main CTA —
 * which still carries two buttons from before the "single button" rule — is
 * clamped to one button in the same write. Without that, the update fails the
 * `maxRows: 1` validation on that block. No other block is touched.
 *
 * Safe to run more than once: it checks the current quotes first and only writes
 * when they differ.
 */

type LooseRecord = Record<string, unknown>

const LEARNING_TESTIMONIALS: LooseRecord[] = [
  {
    quote:
      'The AML fundamentals programme was practical from the first session. My team came back able to apply CDD and escalation steps straight away, not just recite definitions.',
    role: 'Head of Compliance',
    company: 'Regional Bank',
  },
  {
    quote:
      'I sat the ACAMS exam two weeks after finishing the prep track and passed comfortably. The modules mapped closely to the syllabus and the practice scenarios were the difference.',
    role: 'AML Analyst',
    company: 'Payments Firm',
  },
  {
    quote:
      'We needed training built around our own VASP risk profile, not a generic deck. Proteq shaped the corporate programme around our products, customer base, and regulator expectations.',
    role: 'MLRO',
    company: 'Digital Asset Exchange',
  },
  {
    quote:
      'The webinar library keeps our wider team current between formal training cycles. Short, specific, and actually relevant to day-to-day compliance work.',
    role: 'Learning & Development Lead',
    company: 'Insurance Group',
  },
  {
    quote:
      "Facilitators have clearly worked in regulated environments. The workshop was scenario-led and far more useful than the off-the-shelf courses we'd used before.",
    role: 'Financial Crime Manager',
    company: 'Fintech Scale-up',
  },
  {
    quote:
      'The certification cohort for CAMS gave our new joiners a common baseline fast. Structured, well-paced, and the materials stayed useful as reference afterwards.',
    role: 'Head of Financial Crime',
    company: 'Regulated Wealth Manager',
  },
]

type PatchResult = {
  changed: string[]
  skipped: string[]
}

export async function patchProteqContent({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<PatchResult> {
  const changed: string[] = []
  const skipped: string[] = []

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'learning' } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })
  const learningPage = result.docs[0] as unknown as LooseRecord | undefined

  if (!learningPage) {
    skipped.push('learning page (not found)')
    return { changed, skipped }
  }

  const layout = (
    Array.isArray(learningPage.layout) ? [...learningPage.layout] : []
  ) as LooseRecord[]

  const blockIndex = layout.findIndex(
    (block) => block?.blockType === 'proteqTestimonials',
  )

  if (blockIndex === -1) {
    skipped.push('learning testimonials (proteqTestimonials block not found)')
    return { changed, skipped }
  }

  const current = layout[blockIndex]
  const currentQuotes = (Array.isArray(current.testimonials) ? current.testimonials : [])
    .map((testimonial: LooseRecord) => testimonial?.quote)
  const nextQuotes = LEARNING_TESTIMONIALS.map((testimonial) => testimonial.quote)

  if (JSON.stringify(currentQuotes) === JSON.stringify(nextQuotes)) {
    skipped.push('learning testimonials (already up to date)')
    return { changed, skipped }
  }

  layout[blockIndex] = { ...current, testimonials: LEARNING_TESTIMONIALS }

  // Clamp the Main CTA to a single button so the page passes validation.
  const ctaIndex = layout.findIndex((block) => block?.blockType === 'proteqMainCta')
  if (
    ctaIndex !== -1 &&
    Array.isArray(layout[ctaIndex].buttons) &&
    (layout[ctaIndex].buttons as unknown[]).length > 1
  ) {
    layout[ctaIndex] = {
      ...layout[ctaIndex],
      buttons: (layout[ctaIndex].buttons as unknown[]).slice(0, 1),
    }
    changed.push('learning page (Main CTA trimmed to one button)')
  }

  await payload.update({
    collection: 'pages',
    id: learningPage.id as string,
    data: { layout } as any,
    depth: 0,
    overrideAccess: true,
    context: { disableRevalidate: false },
    req,
  })

  changed.push('learning page (testimonials replaced with training-specific ones)')

  return { changed, skipped }
}
