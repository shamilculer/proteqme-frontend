import type { Field } from 'payload'

import { cardButtonField, iconFields } from './fields'

type ConditionContext = {
  blockData?: { cardStyle?: string }
  path?: (string | number)[]
}

/** Resolve card style from block data or document path (layout → block index). */
export function getCardStyle(
  data: Record<string, unknown>,
  _siblingData?: unknown,
  ctx?: ConditionContext,
): string {
  if (ctx?.blockData?.cardStyle) {
    return ctx.blockData.cardStyle
  }

  const path = ctx?.path
  if (Array.isArray(path)) {
    const layoutIndex = path.findIndex((segment) => segment === 'layout')
    if (layoutIndex !== -1 && typeof path[layoutIndex + 1] === 'number') {
      const blockIndex = path[layoutIndex + 1] as number
      const layout = (data as { layout?: Array<{ cardStyle?: string }> })?.layout
      const block = layout?.[blockIndex]
      if (block?.cardStyle) return block.cardStyle
    }
  }

  return 'overlay'
}

const isOverlayStyle = (
  data: Record<string, unknown>,
  siblingData?: { appearance?: string },
  ctx?: ConditionContext,
) => {
  const style = getCardStyle(data, siblingData, ctx)
  if (style !== 'overlay') return false
  return siblingData?.appearance !== 'standard'
}

const isHighlightCardStyle = (
  data: Record<string, unknown>,
  siblingData?: unknown,
  ctx?: ConditionContext,
) => {
  if (isOverlayStyle(data, siblingData as { appearance?: string }, ctx)) return false
  const style = getCardStyle(data, siblingData as { appearance?: string }, ctx)
  return style === 'opportunity' || style === 'programme'
}

export const cardGridItemsField: Field = {
  name: 'items',
  type: 'array',
  label: 'Cards',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'appearance',
      type: 'select',
      label: 'Card layout',
      defaultValue: 'overlay',
      options: [
        { label: 'Image overlay — text on photo', value: 'overlay' },
        { label: 'Standard — image with content below', value: 'standard' },
      ],
      admin: {
        condition: (data, siblingData, ctx) =>
          getCardStyle(data as Record<string, unknown>, siblingData, ctx) === 'overlay',
      },
    },
    { name: 'tag', type: 'text', label: 'Tag / subtitle' },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        condition: (data, siblingData, ctx) =>
          !isOverlayStyle(data as Record<string, unknown>, siblingData, ctx),
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    { name: 'imagePath', type: 'text', label: 'Image path' },
    {
      name: 'anchorId',
      type: 'text',
      label: 'Anchor ID',
      admin: {
        description: 'Optional HTML id for in-page links (e.g. screening → #screening)',
      },
    },
    ...iconFields,
    {
      name: 'highlights',
      type: 'array',
      label: 'Bullet points',
      admin: {
        condition: (data, siblingData, ctx) => {
          if (isOverlayStyle(data as Record<string, unknown>, siblingData, ctx)) return false
          const style = getCardStyle(data as Record<string, unknown>, siblingData, ctx)
          return style === 'feature' || style === 'programme' || style === 'opportunity'
        },
      },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      ...cardButtonField,
      admin: {
        condition: (data, siblingData, ctx) =>
          isHighlightCardStyle(data as Record<string, unknown>, siblingData, ctx),
      },
    },
  ] as Field[],
}
