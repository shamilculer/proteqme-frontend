import type { Block } from 'payload'

import { descriptionField, eyebrowField, headingField } from '../shared'

export const ProteqTestimonials: Block = {
  slug: 'proteqTestimonials',
  interfaceName: 'ProteqTestimonialsBlock',
  labels: { singular: 'Testimonials', plural: 'Testimonials' },
  fields: [
    eyebrowField,
    headingField,
    descriptionField,
    { name: 'sectionId', type: 'text', label: 'HTML section ID' },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      required: true,
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'name', type: 'text', label: 'Name' },
        { name: 'role', type: 'text', label: 'Role / title' },
        { name: 'company', type: 'text', label: 'Company' },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar image',
          admin: {
            description:
              'Optional. If empty, initials are generated from the name (or role).',
          },
        },
      ],
    },
  ],
}
