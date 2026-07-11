import { getCachedGlobal } from '@/utilities/getGlobals'
import { mapFooterProps } from '@/utilities/mapSiteLayout'

import Footer from './Footer'

export default async function SiteFooter() {
  const [footer, siteSettings] = await Promise.all([
    getCachedGlobal('footer', 2)(),
    getCachedGlobal('siteSettings', 1)(),
  ])

  const props = mapFooterProps(footer, siteSettings)

  return <Footer {...props} />
}
