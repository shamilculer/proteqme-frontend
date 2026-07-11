import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: HomePage } = createCmsPageExports('home')

export { generateMetadata }
export default HomePage
