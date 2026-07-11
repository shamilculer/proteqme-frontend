/**
 * Maps a Next.js pathname to the CMS page slug.
 * Homepage routes (`/` or empty) map to `home`.
 */
export function pathnameToPageSlug(pathname) {
  const normalized = (pathname || '').replace(/\/$/, '')
  if (!normalized) return 'home'
  return normalized.replace(/^\//, '')
}
