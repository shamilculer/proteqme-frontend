import type { Block } from 'payload'

import { moduleItemsFields, sectionHeaderFields, sectionIdField } from '../fields'

export const ProteqModuleCarousel: Block = {
  slug: 'proteqModuleCarousel',
  interfaceName: 'ProteqModuleCarouselBlock',
  labels: { singular: 'Module carousel', plural: 'Module carousels' },
  fields: [...sectionHeaderFields, moduleItemsFields, sectionIdField],
}
