import type { Block } from 'payload'

import { actionButtonFields } from '@/fields/actionButton'
import {
  imagePathField,
  mediaImageField,
  mobileImageField,
  mobileImagePathField,
} from '../shared'

export const ProteqHeroCarousel: Block = {
  slug: 'proteqHeroCarousel',
  interfaceName: 'ProteqHeroCarouselBlock',
  labels: { singular: 'Hero Carousel', plural: 'Hero Carousels' },
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      required: true,
      fields: [
        { name: 'tag', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          type: 'group',
          name: 'cta',
          label: 'Slide button',
          fields: actionButtonFields.map((field) =>
            'name' in field && field.name === 'label'
              ? { ...field, required: true }
              : field,
          ),
        },
        {
          ...mediaImageField,
          label: 'Desktop banner (Media library)',
        },
        {
          ...mobileImageField,
          label: 'Mobile banner (Media library)',
        },
        {
          ...imagePathField,
          label: 'Desktop banner path (public folder)',
        },
        {
          ...mobileImagePathField,
          label: 'Mobile banner path (public folder)',
        },
        { name: 'imageAlt', type: 'text' },
      ],
    },
  ],
}
