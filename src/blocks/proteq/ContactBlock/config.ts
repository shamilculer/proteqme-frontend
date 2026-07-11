import type { Block } from 'payload'

import { sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqContactBlock: Block = {
  slug: 'proteqContactBlock',
  interfaceName: 'ProteqContactBlockBlock',
  labels: { singular: 'Contact section', plural: 'Contact sections' },
  fields: [...sectionHeaderFields, sectionIdField],
}
