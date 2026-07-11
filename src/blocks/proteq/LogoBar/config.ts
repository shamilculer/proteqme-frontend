import type { Block } from 'payload'

import { descriptionField, eyebrowField, headingField } from '../shared'

export const ProteqLogoBar: Block = {
  slug: 'proteqLogoBar',
  interfaceName: 'ProteqLogoBarBlock',
  labels: { singular: 'Logo Bar', plural: 'Logo Bars' },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'partners',
      options: [
        { label: 'Partners', value: 'partners' },
        { label: 'Clients', value: 'clients' },
      ],
    },
    eyebrowField,
    headingField,
    descriptionField,
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'website', type: 'text' },
        {
          name: 'logoPath',
          type: 'text',
          label: 'Logo path (public folder)',
          admin: { description: 'e.g. /partners/osl.png' },
        },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo (Media library)' },
      ],
    },
  ],
}
