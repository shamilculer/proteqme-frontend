import type { Block, Field } from 'payload'

import {
  ctaActionField,
  sectionHeaderFields,
  sectionIdField,
} from '../fields'
import { cardGridItemsField } from '../cardGridItems'

const isFeatureCard = (_: unknown, siblingData?: { cardStyle?: string }) =>
  siblingData?.cardStyle === 'feature'

export const ProteqCardGrid: Block = {
  slug: 'proteqCardGrid',
  interfaceName: 'ProteqCardGridBlock',
  labels: { singular: 'Card grid', plural: 'Card grids' },
  fields: [
    ...sectionHeaderFields,
    {
      name: 'cardStyle',
      type: 'select',
      label: 'Card style',
      defaultValue: 'overlay',
      required: true,
      options: [
        {
          label: 'Image overlay — icon, title, and tag on photo',
          value: 'overlay',
        },
        {
          label: 'Feature — image header with bullet list',
          value: 'feature',
        },
        {
          label: 'Programme — training cards with highlights',
          value: 'programme',
        },
        {
          label: 'Offering — large image tiles (4 columns)',
          value: 'offering',
        },
        {
          label: 'Opportunity — cards with action button',
          value: 'opportunity',
        },
      ],
      admin: {
        description:
          'Overlay matches the industries section. Feature is for systems solution areas.',
      },
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      defaultValue: 'carousel-grid',
      options: [
        { label: 'Grid on all devices', value: 'grid' },
        {
          label: 'Carousel on mobile, grid on desktop',
          value: 'carousel-grid',
        },
        { label: 'Carousel on all devices', value: 'carousel' },
      ],
      admin: {
        description: 'Use carousel on mobile for swipeable card rows on smaller screens.',
      },
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
        { label: '4 columns', value: '4' },
      ],
    },
    cardGridItemsField,
    {
      ...ctaActionField,
      admin: {
        condition: isFeatureCard,
      },
    },
    sectionIdField,
  ] as Field[],
}
