import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: PartnerPage } = createCmsPageExports('become-a-partner')

export { generateMetadata }
export default PartnerPage
