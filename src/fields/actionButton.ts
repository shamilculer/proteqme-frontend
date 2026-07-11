import type { Field } from 'payload'

import { link } from '@/fields/link'

export const actionButtonStyleFields: Field[] = [
  {
    name: 'variant',
    type: 'select',
    defaultValue: 'default',
    options: [
      { label: 'Primary', value: 'default' },
      { label: 'White', value: 'white' },
      { label: 'Outline', value: 'outline' },
      { label: 'Secondary', value: 'secondary' },
    ],
  },
  { name: 'glowingDot', type: 'checkbox', label: 'Glowing dot' },
  { name: 'showArrow', type: 'checkbox', label: 'Show arrow', defaultValue: true },
]

export const actionButtonFields: Field[] = [
  { name: 'label', type: 'text', label: 'Button label' },
  {
    name: 'actionType',
    type: 'radio',
    label: 'Button action',
    defaultValue: 'link',
    options: [
      { label: 'Link', value: 'link' },
      { label: 'Open popup', value: 'popup' },
    ],
    admin: {
      layout: 'horizontal',
    },
  },
  link({
    appearances: false,
    disableLabel: true,
    overrides: {
      admin: {
        condition: (_, siblingData) => siblingData?.actionType === 'link',
      },
    },
  }),
  {
    name: 'popup',
    type: 'relationship',
    relationTo: 'popups',
    label: 'Popup',
    admin: {
      condition: (_, siblingData) => siblingData?.actionType === 'popup',
    },
  },
  ...actionButtonStyleFields,
]

export const ctaActionButtonField: Field = {
  type: 'group',
  name: 'cta',
  label: 'Call to action button',
  fields: actionButtonFields,
}

export const slideCtaFields: Field[] = [
  ...actionButtonFields.map((field) => {
    if ('name' in field && field.name === 'label') {
      return { ...field, name: 'ctaLabel', label: 'Button label' }
    }
    return field
  }),
]
