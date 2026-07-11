/** Legacy Payload website-template hero shape (used by Posts template routes, not Proteq pages). */
export type TemplatePageHero = {
  type?: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact' | null
  links?: Array<{
    link?: {
      type?: string | null
      appearance?: string | null
      label?: string | null
      url?: string | null
      newTab?: boolean | null
    } | null
    id?: string | null
  }> | null
  media?: unknown
  richText?: Record<string, unknown> | null
}
