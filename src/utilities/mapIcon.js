/**
 * Resolve CMS icon fields to serializable props for client components.
 */
export function mapIcon(item, fallbackLucide = 'checkCircle') {
  if (!item) {
    return { lucide: fallbackLucide, src: null, alt: '' }
  }

  const iconType =
    item.iconType ||
    (item.iconImage || item.iconImagePath ? 'upload' : 'lucide')

  if (iconType === 'upload') {
    const src =
      item.iconImage && typeof item.iconImage === 'object' && item.iconImage.url
        ? item.iconImage.url
        : item.iconImagePath || null

    return {
      lucide: null,
      src,
      alt: item.iconAlt || '',
    }
  }

  const lucide = item.icon || item.iconPreset || fallbackLucide

  return {
    lucide,
    src: null,
    alt: '',
  }
}
