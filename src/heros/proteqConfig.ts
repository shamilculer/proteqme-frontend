import type { Field } from 'payload'

import { actionButtonFields } from '@/fields/actionButton'
import { imagePathField, mediaImageField } from '@/blocks/proteq/shared'

const carouselSlideFields: Field[] = [
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
  mediaImageField,
  imagePathField,
  { name: 'imageAlt', type: 'text', label: 'Image alt text' },
]

const isCarousel = (_: unknown, siblingData?: { type?: string }) => siblingData?.type === 'carousel'
const isMedium = (_: unknown, siblingData?: { type?: string }) => siblingData?.type === 'medium'
const isPageTitle = (_: unknown, siblingData?: { type?: string }) => siblingData?.type === 'pageTitle'

export const proteqHero: Field = {
  name: 'hero',
  type: 'group',
  label: false,
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Hero type',
      defaultValue: 'none',
      required: true,
      options: [
        { label: 'None', value: 'none' },
        { label: 'Carousel (homepage)', value: 'carousel' },
        { label: 'Medium hero (service pages)', value: 'medium' },
        { label: 'Page title (simple header)', value: 'pageTitle' },
      ],
    },
    {
      name: 'slides',
      type: 'array',
      label: 'Carousel slides',
      admin: { condition: isCarousel },
      fields: carouselSlideFields,
    },
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
      admin: { condition: isMedium },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      admin: { condition: isMedium },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: { condition: isMedium },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (Media library)',
      admin: { condition: isMedium },
    },
    {
      name: 'imagePath',
      type: 'text',
      label: 'Image path (public folder)',
      admin: {
        condition: isMedium,
        description: 'e.g. /consulting-bg.webp — used if no Media upload is set',
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image alt text',
      admin: { condition: isMedium },
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      admin: { condition: isMedium },
      fields: actionButtonFields.map((field) =>
        'name' in field && field.name === 'label'
          ? { ...field, required: true }
          : field,
      ),
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlights',
      admin: { condition: isMedium },
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
    },
    {
      name: 'enableParticles',
      type: 'checkbox',
      label: 'Enable particles',
      admin: { condition: isMedium },
    },
    {
      name: 'particleId',
      type: 'text',
      label: 'Particle ID',
      admin: {
        condition: (_, siblingData) => isMedium(_, siblingData) || isPageTitle(_, siblingData),
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: { condition: isPageTitle },
    },
    {
      name: 'pageTitleImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background image (Media library)',
      admin: { condition: isPageTitle },
    },
    {
      name: 'pageTitleImagePath',
      type: 'text',
      label: 'Background image path (public folder)',
      admin: {
        condition: isPageTitle,
        description: 'e.g. /consulting-bg.webp — used if no Media upload is set',
      },
    },
  ],
}
