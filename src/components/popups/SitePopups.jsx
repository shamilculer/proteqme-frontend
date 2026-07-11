import { getCachedPopups } from '@/utilities/getPopups'
import { mapPopups } from '@/utilities/mapPopup'

import { PopupProvider } from './PopupProvider'

export default async function SitePopups({ children }) {
  const popups = mapPopups(await getCachedPopups(2)())

  return <PopupProvider popups={popups}>{children}</PopupProvider>
}
