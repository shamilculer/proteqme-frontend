import type { Block } from 'payload'

import { imagePathField, mediaImageField } from '../shared'

export const ProteqPageTitle: Block = {
  slug: 'proteqPageTitle',
  interfaceName: 'ProteqPageTitleBlock',
  labels: { singular: 'Page Title', plural: 'Page Titles' },
  fields: [
    { name: 'title', type: 'text', label: 'Title', required: true },
    mediaImageField,
    imagePathField,
    { name: 'particleId', type: 'text', label: 'Particle ID' },
  ],
}
