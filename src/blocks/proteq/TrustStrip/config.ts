import type { Block, Field } from 'payload'

import { sectionHeaderFields, sectionIdField } from '../fields'

type ConditionContext = {
  blockData?: { variant?: string }
  path?: (string | number)[]
}

/** Resolve trust strip variant from block data or document path (layout → block index). */
function getTrustStripVariant(
  data: Record<string, unknown>,
  siblingData?: { variant?: string },
  ctx?: ConditionContext,
): string {
  if (ctx?.blockData?.variant) {
    return ctx.blockData.variant
  }

  if (siblingData?.variant) {
    return siblingData.variant
  }

  const path = ctx?.path
  if (Array.isArray(path)) {
    const layoutIndex = path.findIndex((segment) => segment === 'layout')
    if (layoutIndex !== -1 && typeof path[layoutIndex + 1] === 'number') {
      const blockIndex = path[layoutIndex + 1] as number
      const layout = (data as { layout?: Array<{ variant?: string }> })?.layout
      const block = layout?.[blockIndex]
      if (block?.variant) return block.variant
    }
  }

  return 'stats-row'
}

const isImpactPanel = (
  data: Record<string, unknown>,
  siblingData?: { variant?: string },
  ctx?: ConditionContext,
) => getTrustStripVariant(data, siblingData, ctx) === 'impact-panel'

const isStatsRow = (
  data: Record<string, unknown>,
  siblingData?: { variant?: string },
  ctx?: ConditionContext,
) => getTrustStripVariant(data, siblingData, ctx) === 'stats-row'

const trustStatsFields: Field = {
  name: 'stats',
  type: 'array',
  label: 'Stats',
  required: true,
  fields: [
    { name: 'value', type: 'text', required: true, label: 'Value (number or text e.g. 15+)' },
    { name: 'suffix', type: 'text', label: 'Suffix (e.g. + or %)' },
    { name: 'label', type: 'text', required: true },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        condition: (data, siblingData, ctx) =>
          isImpactPanel(data as Record<string, unknown>, siblingData, ctx),
        description: 'Supporting line shown under the stat label on impact-panel strips.',
      },
    },
  ],
}

export const ProteqTrustStrip: Block = {
  slug: 'proteqTrustStrip',
  interfaceName: 'ProteqTrustStripBlock',
  labels: { singular: 'Trust stats strip', plural: 'Trust stats strips' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      label: 'Layout',
      defaultValue: 'stats-row',
      required: true,
      options: [
        {
          label: 'Stats row — centred counters (learning pages)',
          value: 'stats-row',
        },
        {
          label: 'Impact panel — heading and stat descriptions',
          value: 'impact-panel',
        },
      ],
      admin: {
        description:
          'Stats row is the simple pink counter strip. Impact panel adds a header and per-stat copy.',
      },
    },
    ...sectionHeaderFields.map((field) => ({
      ...field,
      admin: {
        ...field.admin,
        condition: (data: Record<string, unknown>, siblingData?: { variant?: string }, ctx?: ConditionContext) =>
          isImpactPanel(data, siblingData, ctx),
      },
    })),
    trustStatsFields,
    {
      name: 'animate',
      type: 'checkbox',
      label: 'Animate counters',
      defaultValue: true,
      admin: {
        condition: (data: Record<string, unknown>, siblingData?: { variant?: string }, ctx?: ConditionContext) =>
          isStatsRow(data, siblingData, ctx),
      },
    },
    sectionIdField,
  ] as Field[],
}
