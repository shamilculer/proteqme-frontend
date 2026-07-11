import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

async function getPopups(depth = 2) {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'popups',
    depth,
    limit: 100,
    pagination: false,
  })

  return result.docs
}

export const getCachedPopups = (depth = 2) =>
  unstable_cache(async () => getPopups(depth), ['popups'], {
    tags: ['popups'],
  })
