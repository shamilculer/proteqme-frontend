import type { Block, Field } from 'payload'

import { bodyRichTextField } from '@/fields/proteqRichText'

import {
  ctaActionField,
  imageFields,
  sectionHeaderFields,
  sectionIdField,
  trustStatsFields,
} from '../fields'

const isExpertise = (_: unknown, siblingData?: { variant?: string }) =>
  siblingData?.variant === 'expertise'

const isNotExpertise = (_: unknown, siblingData?: { variant?: string }) =>
  siblingData?.variant !== 'expertise'

const overlayLeftFields: Field = {
  name: 'overlayLeft',
  type: 'group',
  label: 'Bottom overlay (left)',
  admin: { condition: isExpertise },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'text', type: 'textarea' },
  ],
}

const overlayRightFields: Field = {
  name: 'overlayRight',
  type: 'group',
  label: 'Bottom overlay (right)',
  admin: { condition: isExpertise },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'text', type: 'textarea' },
  ],
}

export const ProteqOverviewRich: Block = {
  slug: 'proteqOverviewRich',
  interfaceName: 'ProteqOverviewRichBlock',
  labels: { singular: 'Overview (rich)', plural: 'Overview (rich)' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Layout variant',
      defaultValue: 'focus-panel',
      options: [
        {
          label: 'Simple — text, image, and CTA',
          value: 'simple',
        },
        {
          label: 'Split — text and image columns',
          value: 'focus-panel',
        },
        {
          label: 'Expertise — image with stats and bottom overlays',
          value: 'expertise',
        },
      ],
      admin: {
        description:
          'Simple is a clean intro. Split uses the same two-column layout. Expertise is for learning pages with stats.',
      },
    },
    ...sectionHeaderFields,
    {
      ...ctaActionField,
      admin: { condition: isNotExpertise },
    },
    ...imageFields,
    {
      ...trustStatsFields,
      admin: { condition: isExpertise },
    },
    {
      ...bodyRichTextField,
      label: 'Body copy (below stats)',
      admin: {
        condition: isExpertise,
        description: 'Additional detail shown under the stat row on the left.',
      },
    },
    overlayLeftFields,
    overlayRightFields,
    sectionIdField,
  ] as Field[],
}
