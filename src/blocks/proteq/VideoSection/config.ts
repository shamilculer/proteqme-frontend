import type { Block } from 'payload'

import {
  sectionHeaderFields,
  sectionIdField,
  trustStatsFields,
  videoFields,
} from '../fields'
import { proteqButtonsField } from '../shared'

export const ProteqVideoSection: Block = {
  slug: 'proteqVideoSection',
  interfaceName: 'ProteqVideoSectionBlock',
  labels: { singular: 'Video section', plural: 'Video sections' },
  fields: [
    ...sectionHeaderFields,
    ...videoFields,
    {
      name: 'sideCardEyebrow',
      type: 'text',
      label: 'Side card eyebrow',
    },
    {
      name: 'sideCardBody',
      type: 'textarea',
      label: 'Side card body',
    },
    trustStatsFields,
    proteqButtonsField,
    sectionIdField,
  ],
}
