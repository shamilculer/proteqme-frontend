import type { Block } from 'payload'

import { headingField } from '../shared'
import { iconFields, imageFields } from '../fields'

export const ProteqStatsStrip: Block = {
  slug: 'proteqStatsStrip',
  interfaceName: 'ProteqStatsStripBlock',
  labels: { singular: 'Stats Strip', plural: 'Stats Strips' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Eyebrow' },
    headingField,
    { name: 'description', type: 'textarea', label: 'Description' },
    ...imageFields,
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      required: true,
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Value (e.g. 15+)' },
        { name: 'prefix', type: 'text', label: 'Prefix (e.g. Across)' },
        { name: 'suffix', type: 'text', label: 'Suffix (e.g. +)' },
        { name: 'label', type: 'text', required: true },
        { name: 'description', type: 'textarea', label: 'Description' },
        ...iconFields,
      ],
    },
  ],
}
