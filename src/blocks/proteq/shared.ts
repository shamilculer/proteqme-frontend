import type { Field, TextField, UploadField } from 'payload'

import { actionButtonFields } from '@/fields/actionButton'
import { sectionDescriptionField } from '@/fields/proteqRichText'

export const eyebrowField: Field = {
  name: 'eyebrow',
  type: 'text',
  label: 'Eyebrow',
}

export const headingField: Field = {
  name: 'heading',
  type: 'text',
  label: 'Heading',
  required: true,
}

export const descriptionField: Field = sectionDescriptionField

export const imagePathField: TextField = {
  name: 'imagePath',
  type: 'text',
  label: 'Image path (public folder)',
  admin: {
    description: 'e.g. /consulting-bg.webp — used if no Media upload is set',
  },
}

export const mediaImageField: UploadField = {
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  label: 'Image (Media library)',
}

export const mobileImageField: UploadField = {
  name: 'mobileImage',
  type: 'upload',
  relationTo: 'media',
  label: 'Mobile banner (Media library)',
  admin: {
    description: 'Optional. Used below the lg breakpoint. Falls back to the desktop image.',
  },
}

export const mobileImagePathField: TextField = {
  name: 'mobileImagePath',
  type: 'text',
  label: 'Mobile banner path (public folder)',
  admin: {
    description: 'e.g. /consulting-bg-mobile.webp — used if no mobile Media upload is set',
  },
}

export const proteqButtonsField: Field = {
  name: 'buttons',
  type: 'array',
  label: 'Buttons',
  fields: actionButtonFields.map((field) =>
    'name' in field && field.name === 'label' ? { ...field, required: true } : field,
  ),
}

export const highlightsField: Field = {
  name: 'highlights',
  type: 'array',
  label: 'Highlights',
  fields: [
    { name: 'text', type: 'text', required: true, label: 'Label' },
    {
      name: 'href',
      type: 'text',
      label: 'Link',
      admin: {
        description: 'In-page anchor (e.g. #solution-areas) or URL (e.g. /contact)',
      },
    },
  ],
}

export const cardItemsField: Field = {
  name: 'items',
  type: 'array',
  label: 'Items',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'summary', type: 'textarea' },
  ],
}
