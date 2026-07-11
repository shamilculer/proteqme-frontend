import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'

import { getMongoConnectionHint } from '@/utilities/mongoConnectOptions'

export const queryPageBySlug = cache(async (slug: string) => {
  const { isEnabled: draft } = await draftMode()

  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      draft,
      depth: 2,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: { equals: slug },
      },
    })

    return result.docs?.[0] || null
  } catch (error) {
    const hint = getMongoConnectionHint(error)
    if (hint) {
      console.error(`[getPage:${slug}] ${hint}`)
    }
    throw error
  }
})

export async function getPage(slug: string) {
  return queryPageBySlug(slug)
}
