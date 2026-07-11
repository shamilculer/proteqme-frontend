import type { Field } from 'payload'

import { actionButtonFields, ctaActionButtonField } from '@/fields/actionButton'
import { iconFields } from '@/fields/icon'
import { bodyRichTextField, sectionDescriptionField } from '@/fields/proteqRichText'

export { iconFields }
export { bodyRichTextField, sectionDescriptionField }

export const sectionIdField: Field = {
  name: 'sectionId',
  type: 'text',
  label: 'HTML section ID',
}

export const sectionHeaderFields: Field[] = [
  { name: 'eyebrow', type: 'text', label: 'Eyebrow' },
  { name: 'heading', type: 'text', label: 'Heading', required: true },
  sectionDescriptionField,
]

export const imageFields: Field[] = [
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    label: 'Image (Media library)',
  },
  {
    name: 'imagePath',
    type: 'text',
    label: 'Image path (public folder)',
    admin: { description: 'Used if no Media upload is set' },
  },
  { name: 'imageAlt', type: 'text', label: 'Image alt text' },
]

export const ctaButtonFields: Field[] = actionButtonFields

export const ctaActionField: Field = ctaActionButtonField

export const quoteField: Field = {
  name: 'quote',
  type: 'textarea',
  label: 'Blockquote',
}

export const paragraphsField: Field = bodyRichTextField

export const pointsFields: Field = {
  name: 'points',
  type: 'array',
  label: 'Points',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    ...iconFields,
  ],
}

export const stepsFields: Field = {
  name: 'steps',
  type: 'array',
  label: 'Steps',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
  ],
}

export const cardButtonField: Field = {
  type: 'group',
  name: 'button',
  label: 'Card button',
  fields: actionButtonFields,
}

export const moduleItemsFields: Field = {
  name: 'modules',
  type: 'array',
  label: 'Modules',
  fields: [
    { name: 'number', type: 'text', label: 'Number', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea', required: true },
    {
      name: 'details',
      type: 'array',
      label: 'Details',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    { name: 'imagePath', type: 'text', label: 'Image path' },
    ...iconFields,
    { name: 'href', type: 'text', label: 'Link (optional)' },
    {
      name: 'anchorId',
      type: 'text',
      label: 'Anchor ID',
      admin: {
        description:
          'Optional in-page anchor (e.g. regulatory-gap-analysis). Hero pills can link here with #regulatory-gap-analysis.',
      },
    },
  ],
}

export const trustStatsFields: Field = {
  name: 'stats',
  type: 'array',
  label: 'Stats',
  fields: [
    { name: 'value', type: 'text', required: true, label: 'Value (number or text e.g. 15+)' },
    { name: 'suffix', type: 'text', label: 'Suffix (e.g. + or %)' },
    { name: 'label', type: 'text', required: true },
    { name: 'description', type: 'textarea', label: 'Description (optional)' },
  ],
}

export const pillsFields: Field = {
  name: 'pills',
  type: 'array',
  label: 'Pills',
  fields: [{ name: 'label', type: 'text', required: true }],
}

export const iconListFields: Field = {
  name: 'reasons',
  type: 'array',
  label: 'Items',
  fields: [
    { name: 'text', type: 'text', required: true },
    ...iconFields,
  ],
}

export const linkCardsFields: Field = {
  name: 'links',
  type: 'array',
  label: 'Link cards',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    cardButtonField,
  ],
}

export const videoFields: Field[] = [
  {
    name: 'videoId',
    type: 'text',
    label: 'YouTube video ID',
    admin: {
      description:
        'Paste a YouTube video ID (e.g. iSDJ68Z-8sU) or full URL. The thumbnail is pulled automatically — no image upload needed.',
    },
  },
  { name: 'playLabel', type: 'text', label: 'Play button label' },
]

export const newsletterTopicFields: Field = {
  name: 'topics',
  type: 'array',
  label: 'Topic pills',
  fields: [{ name: 'label', type: 'text', required: true }],
}

export const inlineStatsFields: Field = {
  name: 'inlineStats',
  type: 'array',
  label: 'Inline stats',
  fields: [
    { name: 'value', type: 'text', required: true },
    { name: 'label', type: 'text', required: true },
  ],
}

export const overlayPanelFields: Field = {
  name: 'overlayPanels',
  type: 'group',
  label: 'Image overlay panels',
  fields: [
    { name: 'leftEyebrow', type: 'text', label: 'Left panel eyebrow' },
    { name: 'leftText', type: 'textarea', label: 'Left panel text' },
    { name: 'rightEyebrow', type: 'text', label: 'Right panel eyebrow' },
    { name: 'rightText', type: 'textarea', label: 'Right panel text' },
  ],
}

export const learningStepFields: Field = {
  name: 'steps',
  type: 'array',
  label: 'Learning journey steps',
  fields: [
    { name: 'step', type: 'text', label: 'Step number', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    ...iconFields,
  ],
}

export const formatPillFields: Field = {
  name: 'formats',
  type: 'array',
  label: 'Format pills',
  fields: [
    { name: 'label', type: 'text', required: true },
    ...iconFields,
  ],
}
