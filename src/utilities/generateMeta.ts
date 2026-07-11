import type { Metadata } from 'next'

import type { Media, Page } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | string | number | null) => {
  const serverUrl = getServerSideURL()
  let url = serverUrl + '/hero-new.webp'

  if (image && typeof image === 'object' && 'url' in image && image.url) {
    const ogUrl = image.sizes?.og?.url
    url = ogUrl ? (ogUrl.startsWith('http') ? ogUrl : serverUrl + ogUrl) : image.url.startsWith('http') ? image.url : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | null
}): Promise<Metadata> => {
  const { doc } = args

  if (!doc) {
    return {
      title: 'Proteq',
      description: 'AML compliance advisory, training, and RegTech systems.',
    }
  }

  const ogImage = getImageURL(doc?.meta?.image)
  const title = doc?.meta?.title || doc?.title || 'Proteq'
  const description =
    doc?.meta?.description ||
    'AML compliance advisory, professional regulatory training, and RegTech systems.'

  const keywords = doc?.meta?.keywords
    ? doc.meta.keywords.split(',').map((k) => k.trim()).filter(Boolean)
    : undefined

  const slug = doc.slug === 'home' ? '' : `/${doc.slug}`

  return {
    title,
    description,
    keywords,
    openGraph: mergeOpenGraph({
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      title,
      url: slug || '/',
    }),
  }
}
