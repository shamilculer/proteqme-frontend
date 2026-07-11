import { createCmsPageExports } from '@/utilities/createCmsPageExports'

export const dynamic = 'force-dynamic'

const { generateMetadata, default: ContactPage } = createCmsPageExports('contact')

export { generateMetadata }
export default ContactPage
