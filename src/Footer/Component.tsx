import { getCachedGlobal } from '@/utilities/getGlobals'
import { resolveCmsLink } from '@/utilities/resolveCmsLink'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 2)()

  const navLinks = (footerData?.navLinks || [])
    .map((item) => resolveCmsLink(item.link))
    .filter((link): link is NonNullable<typeof link> => Boolean(link?.href && link?.label))

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navLinks.map((item, i) => (
              <Link
                className="text-white"
                key={`${item.href}-${item.label}-${i}`}
                href={item.href}
                {...(item.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
