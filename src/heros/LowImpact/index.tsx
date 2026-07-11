// @ts-nocheck — legacy Payload website-template heroes (not used by Proteq pages)
import React from 'react'

import type { TemplatePageHero } from '@/heros/templateTypes'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<TemplatePageHero, 'richText'> & {
      children?: never
      richText?: TemplatePageHero['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
        {children || (richText && <RichText data={richText as never} enableGutter={false} />)}
      </div>
    </div>
  )
}
