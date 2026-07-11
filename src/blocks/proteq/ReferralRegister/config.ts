import type { Block } from 'payload'

import { ctaActionField, iconFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqReferralRegister: Block = {
  slug: 'proteqReferralRegister',
  interfaceName: 'ProteqReferralRegisterBlock',
  labels: { singular: 'Referral registration', plural: 'Referral registration sections' },
  fields: [
    ...sectionHeaderFields,
    {
      name: 'highlights',
      type: 'array',
      label: 'Highlights',
      admin: {
        description: 'Optional short points shown below the description.',
      },
      fields: [
        { name: 'text', type: 'text', required: true, label: 'Label' },
        ...iconFields,
      ],
    },
    ctaActionField,
    {
      name: 'footnote',
      type: 'text',
      label: 'Footnote',
      admin: {
        description: 'Optional small line below the button.',
      },
    },
    sectionIdField,
  ],
}
