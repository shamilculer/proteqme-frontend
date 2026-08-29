import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { CmsPageClient } from '@/components/cms/CmsPageClient'
import ProteqRenderBlocks from '@/components/cms/ProteqRenderBlocks'
import ProteqRenderHero from '@/components/cms/ProteqRenderHero'
import { hasProteqHero } from '@/utilities/hasProteqHero'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { proteqHeroBlockTypes } from '@/blocks/proteq/layoutBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getPage } from '@/utilities/getPage'
import { mapContactProps } from '@/utilities/mapSiteLayout'

function getContentBlocks(layout = []) {
  return layout.filter((block) => !proteqHeroBlockTypes.has(block.blockType))
}

export function createCmsPageExports(slug) {
  async function generateMetadata() {
    const page = await getPage(slug)
    return generateMeta({ doc: page })
  }

  async function CmsPage() {
    const { isEnabled: draft } = await draftMode()
    const [page, siteSettings] = await Promise.all([
      getPage(slug),
      getCachedGlobal('siteSettings', 1)(),
    ])

    if (!page) {
      notFound()
    }

    const contentBlocks = getContentBlocks(page.layout)
    const showHero = hasProteqHero(page.hero)

    if (!showHero && !contentBlocks.length) {
      notFound()
    }

    return (
      <>
        {draft && <LivePreviewListener />}
        <CmsPageClient />
        <ProteqRenderHero hero={page.hero} />
        <ProteqRenderBlocks
          blocks={contentBlocks}
          contact={mapContactProps(siteSettings)}
        />
      </>
    )
  }

  return { generateMetadata, default: CmsPage }
}
