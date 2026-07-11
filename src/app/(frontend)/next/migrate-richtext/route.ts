import { getPayload } from 'payload'
import config from '@payload-config'
import { normalizeProteqPageData } from '@/utilities/richText'

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    limit: 1000,
    depth: 0,
    draft: true,
    overrideAccess: true,
  })

  let updated = 0

  for (const page of docs) {
    const normalized = normalizeProteqPageData(page)
    const before = JSON.stringify(page.layout)
    const after = JSON.stringify(normalized.layout)
    const heroBefore = JSON.stringify(page.hero)
    const heroAfter = JSON.stringify(normalized.hero)

    if (before !== after || heroBefore !== heroAfter) {
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          layout: normalized.layout,
          hero: normalized.hero,
        },
        depth: 0,
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
      updated += 1
    }
  }

  return Response.json({
    ok: true,
    message: `Migrated rich text on ${updated} of ${docs.length} pages.`,
    updated,
    total: docs.length,
  })
}
