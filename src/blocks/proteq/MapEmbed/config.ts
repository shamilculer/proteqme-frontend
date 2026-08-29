import type { Block } from 'payload'

import { sectionIdField } from '../fields'

export const ProteqMapEmbed: Block = {
  slug: 'proteqMapEmbed',
  interfaceName: 'ProteqMapEmbedBlock',
  labels: { singular: 'Map embed', plural: 'Map embeds' },
  fields: [
    {
      name: 'embedUrl',
      type: 'text',
      label: 'Google Maps embed URL',
      admin: {
        description:
          'Optional override. Leave blank to use the Google Maps embed URL from Site Settings → Contact.',
      },
    },
    sectionIdField,
  ],
}
