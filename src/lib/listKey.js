/**
 * Stable React list keys — always suffix index so duplicate labels/titles never collide.
 */
export function listKey(value, index, fallback = 'item') {
  const base =
    value !== undefined && value !== null && String(value).trim() !== ''
      ? String(value)
      : fallback

  return `${base}-${index}`
}

export function itemKey(item, index, fields = ['id', 'title', 'label', 'name', 'value', 'text']) {
  if (!item || typeof item !== 'object') {
    return listKey(item, index)
  }

  if (item.id !== undefined && item.id !== null && item.id !== '') {
    return String(item.id)
  }

  for (const field of fields) {
    const value = item[field]
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      return listKey(value, index, field)
    }
  }

  return `item-${index}`
}
