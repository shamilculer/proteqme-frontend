import type { Block } from 'payload'

import { ctaActionField, paragraphsField, pillsFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqPillSplit: Block = {
  slug: 'proteqPillSplit',
  interfaceName: 'ProteqPillSplitBlock',
  labels: { singular: 'Pill split', plural: 'Pill split sections' },
  fields: [...sectionHeaderFields, paragraphsField, pillsFields, ctaActionField, sectionIdField],
}
