import type { GlobalConfig } from 'payload'

import { actionButtonFields } from '@/fields/actionButton'
import { iconFields } from '@/blocks/proteq/fields'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    link({
      appearances: false,
      disableLabel: true,
      overrides: {
        name: 'logoLink',
        label: 'Logo destination',
        admin: {
          description: 'Where the logo links to. Defaults to home if unset.',
        },
      },
    }),
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation items',
      admin: {
        description: 'Add links or dropdown menus. Nothing appears until you add items here.',
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
      fields: [
        {
          name: 'type',
          type: 'radio',
          label: 'Item type',
          defaultValue: 'link',
          required: true,
          options: [
            { label: 'Link', value: 'link' },
            { label: 'Dropdown', value: 'dropdown' },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'link',
            },
          },
        }),
        {
          name: 'dropdownLabel',
          type: 'text',
          label: 'Dropdown label',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'dropdown',
          },
        },
        {
          name: 'dropdownItems',
          type: 'array',
          label: 'Dropdown items',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'dropdown',
            initCollapsed: true,
          },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            ...iconFields,
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'ctaButton',
      label: 'Header CTA button',
      admin: {
        description: 'Set a label and action to show the button. Leave empty to hide it.',
      },
      fields: actionButtonFields,
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
  versions: false,
}
