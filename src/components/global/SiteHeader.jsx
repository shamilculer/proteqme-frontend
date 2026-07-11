import { getCachedGlobal } from '@/utilities/getGlobals'
import { mapHeaderProps } from '@/utilities/mapSiteLayout'

import Header from './Header'

export default async function SiteHeader() {
  const [header, siteSettings] = await Promise.all([
    getCachedGlobal('header', 2)(),
    getCachedGlobal('siteSettings', 2)(),
  ])

  const props = mapHeaderProps(header, siteSettings)

  return <Header {...props} />
}
