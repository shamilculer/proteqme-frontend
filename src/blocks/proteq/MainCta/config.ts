import type { Block } from 'payload'

import {
  descriptionField,
  eyebrowField,
  headingField,
  proteqSingleButtonField,
} from '../shared'

export const ProteqMainCta: Block = {
  slug: 'proteqMainCta',
  interfaceName: 'ProteqMainCtaBlock',
  labels: { singular: 'Main CTA', plural: 'Main CTAs' },
  fields: [eyebrowField, headingField, descriptionField, proteqSingleButtonField],
}
