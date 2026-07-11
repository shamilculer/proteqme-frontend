import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: AiInvestmentPage } =
  createCmsPageExports('ai-investments')

export { generateMetadata }
export default AiInvestmentPage
