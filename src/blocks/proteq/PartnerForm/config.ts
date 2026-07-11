import type { Block } from 'payload'

import { sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqPartnerForm: Block = {
  slug: 'proteqPartnerForm',
  interfaceName: 'ProteqPartnerFormBlock',
  labels: { singular: 'Partner application form', plural: 'Partner application forms' },
  fields: [...sectionHeaderFields, sectionIdField],
}
