import type { Block } from 'payload'

import { actionButtonFields } from '@/fields/actionButton'

import {
  ctaActionField,
  imageFields,
  iconFields,
  sectionHeaderFields,
  sectionIdField,
} from '../fields'

export const ProteqLearningIntro: Block = {
  slug: 'proteqLearningIntro',
  interfaceName: 'ProteqLearningIntroBlock',
  labels: { singular: 'Learning intro', plural: 'Learning intro sections' },
  fields: [
    { name: 'leadText', type: 'textarea', label: 'Lead paragraph' },
    ...sectionHeaderFields,
    ...imageFields,
    {
      name: 'secondaryImagePath',
      type: 'text',
      label: 'Secondary image path (inset thumbnail)',
    },
    { name: 'statValue', type: 'text', label: 'Stat card value' },
    { name: 'statLabel', type: 'text', label: 'Stat card label' },
    {
      name: 'steps',
      type: 'array',
      label: 'Journey steps',
      fields: [
        { name: 'step', type: 'text', label: 'Step number' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        ...iconFields,
      ],
    },
    {
      name: 'formats',
      type: 'array',
      label: 'Format pills',
      fields: [
        { name: 'label', type: 'text', required: true },
        ...iconFields,
      ],
    },
    ctaActionField,
    {
      type: 'group',
      name: 'secondaryCta',
      label: 'Secondary CTA button',
      fields: actionButtonFields,
    },
    sectionIdField,
  ],
}
