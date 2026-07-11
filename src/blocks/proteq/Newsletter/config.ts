import type { Block } from 'payload'

import { ctaActionField, newsletterTopicFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqNewsletter: Block = {
  slug: 'proteqNewsletter',
  interfaceName: 'ProteqNewsletterBlock',
  labels: { singular: 'Newsletter signup', plural: 'Newsletter sections' },
  fields: [
    ...sectionHeaderFields,
    { name: 'cardHeading', type: 'text', label: 'Form card heading', required: true },
    { name: 'submitLabel', type: 'text', label: 'Submit button label', defaultValue: 'Get Briefings' },
    { name: 'privacyNote', type: 'textarea', label: 'Privacy note' },
    newsletterTopicFields,
    ctaActionField,
    sectionIdField,
  ],
}
