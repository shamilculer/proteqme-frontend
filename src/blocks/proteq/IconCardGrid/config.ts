import type { Block } from 'payload'

import { iconFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqIconCardGrid: Block = {
  slug: 'proteqIconCardGrid',
  interfaceName: 'ProteqIconCardGridBlock',
  labels: { singular: 'Icon card grid', plural: 'Icon card grids' },
  fields: [
    ...sectionHeaderFields,
    {
      name: 'headerLayout',
      type: 'select',
      label: 'Header layout',
      defaultValue: 'centered',
      options: [
        {
          label: 'Centered — eyebrow, heading, and description stacked',
          value: 'centered',
        },
        {
          label: 'Split — heading left, description right (systems pages)',
          value: 'split',
        },
      ],
      admin: {
        description:
          'Split matches the systems capabilities section. Centered is used on learning pages.',
      },
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
        { label: '4 columns', value: '4' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Cards',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        ...iconFields,
      ],
    },
    sectionIdField,
  ],
}
