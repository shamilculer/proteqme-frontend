import type { CollectionAfterReadHook, CollectionBeforeChangeHook } from 'payload'

import { normalizeProteqPageData } from '@/utilities/richText'

export const migrateRichTextFieldsAfterRead: CollectionAfterReadHook = ({ doc }) => {
  if (!doc) return doc
  return normalizeProteqPageData(doc)
}

export const migrateRichTextFieldsBeforeChange: CollectionBeforeChangeHook = ({ data }) => {
  if (!data) return data
  return normalizeProteqPageData(data)
}
