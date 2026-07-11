import type { Block } from 'payload'

import { linkCardsFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqLinkCards: Block = {
  slug: 'proteqLinkCards',
  interfaceName: 'ProteqLinkCardsBlock',
  labels: { singular: 'Link cards', plural: 'Link card sections' },
  fields: [...sectionHeaderFields, linkCardsFields, sectionIdField],
}
