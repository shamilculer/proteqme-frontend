import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: ConsultancyPage } =
  createCmsPageExports('consultancy-advisory')

export { generateMetadata }
export default ConsultancyPage
