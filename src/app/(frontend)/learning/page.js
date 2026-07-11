import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: LearningPage } = createCmsPageExports('learning')

export { generateMetadata }
export default LearningPage
