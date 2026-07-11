type CmsLinkValue = {
  type?: 'custom' | 'reference' | null
  url?: string | null
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value?: { slug?: string | null } | string | number | null
  } | null
}

export type ResolvedCmsLink = {
  href: string
  label: string
  newTab: boolean
}

export function resolvePagePath(slug: string, relationTo: 'pages' | 'posts' = 'pages'): string {
  if (relationTo === 'pages') {
    if (slug === 'home') return '/'
    return `/${slug}`
  }

  return `/${relationTo}/${slug}`
}

export function resolveCmsLink(link?: CmsLinkValue | null): ResolvedCmsLink | null {
  if (!link) return null

  let href: string | null = null

  if (link.type === 'reference' && link.reference) {
    const { value, relationTo } = link.reference

    if (value && typeof value === 'object' && value.slug) {
      href = resolvePagePath(value.slug, relationTo)
    }
  } else if (link.type === 'custom' && link.url) {
    href = link.url
  }

  if (!href) return null

  return {
    href,
    label: link.label || '',
    newTab: Boolean(link.newTab),
  }
}
