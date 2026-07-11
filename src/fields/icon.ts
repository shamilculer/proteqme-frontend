import type { Field } from 'payload'

import { iconSelectOptions } from '@/lib/iconMap'

export const iconFields: Field[] = [
  {
    name: 'iconType',
    type: 'radio',
    label: 'Icon type',
    defaultValue: 'lucide',
    options: [
      { label: 'Lucide icon', value: 'lucide' },
      { label: 'Uploaded image', value: 'upload' },
    ],
    admin: {
      layout: 'horizontal',
    },
  },
  {
    name: 'icon',
    type: 'text',
    label: 'Lucide icon name',
    defaultValue: 'checkCircle',
    admin: {
      condition: (_, siblingData) => siblingData?.iconType !== 'upload',
      description:
        'Enter an icon key (e.g. shieldCheck, graduation) or any Lucide icon name in camelCase.',
    },
  },
  {
    name: 'iconPreset',
    type: 'select',
    label: 'Common icons',
    options: [{ label: '— Select preset —', value: '' }, ...iconSelectOptions],
    admin: {
      condition: (_, siblingData) => siblingData?.iconType !== 'upload',
      description: 'Optional shortcut — copies the preset into the Lucide icon name when saved.',
    },
  },
  {
    name: 'iconImage',
    type: 'upload',
    relationTo: 'media',
    label: 'Icon image',
    admin: {
      condition: (_, siblingData) => siblingData?.iconType === 'upload',
    },
  },
  {
    name: 'iconImagePath',
    type: 'text',
    label: 'Icon image path (public folder)',
    admin: {
      condition: (_, siblingData) => siblingData?.iconType === 'upload',
      description: 'Used if no Media upload is set',
    },
  },
]
