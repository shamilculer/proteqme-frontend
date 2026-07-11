import type { Block } from 'payload'

import { sectionIdField } from '../fields'

export const ProteqMapEmbed: Block = {
  slug: 'proteqMapEmbed',
  interfaceName: 'ProteqMapEmbedBlock',
  labels: { singular: 'Map embed', plural: 'Map embeds' },
  fields: [
    { name: 'embedUrl', type: 'text', label: 'Google Maps embed URL', required: true },
    sectionIdField,
  ],
}
