'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

import { resolveCmsLink } from '@/utilities/resolveCmsLink'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map((item, i) => {
        if (item.type === 'dropdown') {
          return (
            <span key={i} className="text-sm font-medium text-muted-foreground">
              {item.dropdownLabel}
            </span>
          )
        }

        const resolved = resolveCmsLink(item.link)

        if (!resolved?.href) return null

        return (
          <Link
            key={i}
            href={resolved.href}
            className="text-sm font-medium"
            {...(resolved.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {resolved.label}
          </Link>
        )
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
