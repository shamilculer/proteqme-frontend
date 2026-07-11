import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: SystemsPage } = createCmsPageExports('systems')

export { generateMetadata }
export default SystemsPage
