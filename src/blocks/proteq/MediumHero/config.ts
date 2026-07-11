import type { Block } from 'payload'

import {
  descriptionField,
  eyebrowField,
  headingField,
  highlightsField,
  imagePathField,
  mediaImageField,
  proteqButtonsField,
} from '../shared'

export const ProteqMediumHero: Block = {
  slug: 'proteqMediumHero',
  interfaceName: 'ProteqMediumHeroBlock',
  labels: { singular: 'Medium Hero', plural: 'Medium Heroes' },
  fields: [
    eyebrowField,
    headingField,
    descriptionField,
    mediaImageField,
    imagePathField,
    { name: 'imageAlt', type: 'text', label: 'Image alt text' },
    proteqButtonsField,
    highlightsField,
    { name: 'enableParticles', type: 'checkbox', label: 'Enable particles' },
    { name: 'particleId', type: 'text', label: 'Particle ID' },
    { name: 'sectionId', type: 'text', label: 'HTML section ID' },
  ],
}
