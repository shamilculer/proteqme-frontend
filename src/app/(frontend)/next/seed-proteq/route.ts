import { createLocalReq, getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'

import { seedProteqPages } from '@/endpoints/seed/proteq-pages'

export const maxDuration = 120

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  try {
    const payloadReq = await createLocalReq({ user }, payload)
    await seedProteqPages({ payload, req: payloadReq })
    return Response.json({ success: true, message: 'Proteq pages seeded successfully.' })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error seeding Proteq pages' })
    return new Response('Error seeding Proteq pages.', { status: 500 })
  }
}
