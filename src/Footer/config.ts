import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Brand description',
      admin: {
        description: 'Short paragraph shown under the logo in the footer.',
      },
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Footer navigation links',
      admin: {
        description: 'Add links here. Nothing appears until you add items.',
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'X (Twitter)', value: 'x' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Other', value: 'other' },
          ],
        },
        { name: 'url', type: 'text', required: true },
        { name: 'label', type: 'text', label: 'Accessible label / title' },
      ],
    },
    {
      type: 'group',
      name: 'newsletter',
      label: 'Newsletter signup',
      fields: [
        { name: 'heading', type: 'text', label: 'Heading' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'placeholder', type: 'text', label: 'Email placeholder', defaultValue: 'Enter your email' },
        { name: 'submitLabel', type: 'text', label: 'Submit button', defaultValue: 'Get Briefings' },
        { name: 'privacyText', type: 'text', label: 'Privacy note (before link)' },
        { name: 'privacyLinkLabel', type: 'text', label: 'Privacy link label', defaultValue: 'Privacy Policy' },
        { name: 'privacyLinkHref', type: 'text', label: 'Privacy link URL', defaultValue: '/contact' },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      label: 'Legal links',
      admin: {
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'legalDisclaimer',
      type: 'textarea',
      label: 'Legal disclaimer',
    },
    {
      name: 'copyrightName',
      type: 'text',
      label: 'Copyright name',
      defaultValue: 'Proteq',
    },
    {
      name: 'showStatusBadge',
      type: 'checkbox',
      label: 'Show status badge',
      defaultValue: true,
    },
    {
      name: 'statusBadgeLabel',
      type: 'text',
      label: 'Status badge label',
      defaultValue: 'All Systems Operational',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
  versions: false,
}
