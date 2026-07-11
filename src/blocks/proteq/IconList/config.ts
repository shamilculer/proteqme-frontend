import type { Block } from 'payload'

import { iconListFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqIconList: Block = {
  slug: 'proteqIconList',
  interfaceName: 'ProteqIconListBlock',
  labels: { singular: 'Icon list (split)', plural: 'Icon list sections' },
  fields: [...sectionHeaderFields, iconListFields, sectionIdField],
}
