import type { Block } from 'payload'

import { quoteField, sectionHeaderFields, sectionIdField, stepsFields } from '../fields'

export const ProteqApproach: Block = {
  slug: 'proteqApproach',
  interfaceName: 'ProteqApproachBlock',
  labels: { singular: 'Approach steps', plural: 'Approach sections' },
  fields: [...sectionHeaderFields, quoteField, stepsFields, sectionIdField],
}
