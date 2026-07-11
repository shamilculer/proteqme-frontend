import type { Block } from 'payload'

import {
  imageFields,
  pointsFields,
  sectionHeaderFields,
  sectionIdField,
} from '../fields'

export const ProteqWhyChoose: Block = {
  slug: 'proteqWhyChoose',
  interfaceName: 'ProteqWhyChooseBlock',
  labels: { singular: 'Why choose (split)', plural: 'Why choose sections' },
  fields: [
    ...sectionHeaderFields,
    ...imageFields,
    pointsFields,
    sectionIdField,
  ],
}
