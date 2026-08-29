import {
  OFFICE_ADDRESS,
  OFFICE_MAP_EMBED,
  OFFICE_MAP_URL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  SITE_EMAIL,
} from '@/data/siteContact'
import { mapActionButton } from '@/utilities/mapActionButton'
import { mapIcon } from '@/utilities/mapIcon'
import { resolveCmsLink } from '@/utilities/resolveCmsLink'

const DEFAULT_SOCIAL = [
  { platform: 'linkedin', url: 'https://www.linkedin.com/company/proteq-me', label: 'LinkedIn' },
  { platform: 'x', url: 'https://x.com/proteq_me', label: 'X (formerly Twitter)' },
  { platform: 'youtube', url: 'https://www.youtube.com/@proteqme', label: 'YouTube' },
  { platform: 'instagram', url: 'https://www.instagram.com/proteq.me', label: 'Instagram' },
]

function mapFooterLinks(items = []) {
  return (items || [])
    .map((item) => resolveCmsLink(item?.link))
    .filter((link) => link?.href && link?.label)
}

function resolveMediaUrl(media, pathFallback) {
  if (media && typeof media === 'object' && media.url) {
    return media.url
  }
  return pathFallback
}

function mapDropdownItem(item) {
  const resolved = resolveCmsLink(item?.link)

  if (!resolved?.href || !item?.title) return null

  return {
    title: item.title,
    description: item.description || '',
    ...mapIcon(item, 'shieldCheck'),
    href: resolved.href,
    newTab: resolved.newTab,
  }
}

function mapNavItem(item) {
  if (item?.type === 'dropdown') {
    const items = (item.dropdownItems || []).map(mapDropdownItem).filter(Boolean)

    if (!item.dropdownLabel || items.length === 0) return null

    return {
      type: 'dropdown',
      label: item.dropdownLabel,
      items,
    }
  }

  const resolved = resolveCmsLink(item?.link)

  if (!resolved?.href || !resolved.label) return null

  return {
    type: 'link',
    label: resolved.label,
    href: resolved.href,
    newTab: resolved.newTab,
  }
}

export function mapHeaderProps(header, siteSettings) {
  const logoDestination = resolveCmsLink(header?.logoLink)
  const navItems = (header?.navItems || []).map(mapNavItem).filter(Boolean)

  return {
    logo: {
      url: logoDestination?.href || '/',
      src: resolveMediaUrl(siteSettings?.logo, siteSettings?.logoPath || '/proteq-logo.png'),
      srcWhite: siteSettings?.logoWhitePath || '/proteq-white.png',
      alt: 'Proteq logo',
    },
    navItems,
    cta: mapActionButton(header?.ctaButton),
  }
}

/**
 * Single source of truth for public contact details.
 * Reads from the `siteSettings` global, with the hardcoded constants in
 * `@/data/siteContact` used only as a last-resort fallback.
 */
export function mapContactProps(siteSettings) {
  const phonePrimary = siteSettings?.phonePrimary || PHONE_PRIMARY
  const phoneSecondary = siteSettings?.phoneSecondary || ''

  return {
    email: siteSettings?.email || SITE_EMAIL,
    phonePrimary,
    phonePrimaryDisplay:
      siteSettings?.phonePrimaryDisplay || phonePrimary || PHONE_PRIMARY_DISPLAY,
    phoneSecondary,
    phoneSecondaryDisplay: phoneSecondary
      ? siteSettings?.phoneSecondaryDisplay || phoneSecondary
      : '',
    address: siteSettings?.address || OFFICE_ADDRESS,
    mapUrl: siteSettings?.mapUrl || OFFICE_MAP_URL,
    mapEmbed: siteSettings?.mapEmbed || OFFICE_MAP_EMBED,
  }
}

export function mapFooterProps(footer, siteSettings) {
  return {
    logo: {
      src: siteSettings?.logoWhitePath || '/proteq-white.png',
      alt: 'Proteq Logo',
    },
    description:
      footer?.description ||
      'Regulatory, Accounting, and AML Compliance Advisory — delivering professional learning and RegTech-enabled governance solutions for regulated and supervised organisations',
    navLinks: mapFooterLinks(footer?.navLinks),
    socialLinks: footer?.socialLinks?.length ? footer.socialLinks : DEFAULT_SOCIAL,
    contact: {
      ...mapContactProps(siteSettings),
      companyRegistration:
        siteSettings?.companyRegistration ||
        'England & Wales · Company No. [registration number]',
    },
    newsletter: {
      heading: footer?.newsletter?.heading || 'Monthly AML & RegTech Intelligence',
      description: footer?.newsletter?.description || 'No spam, unsubscribe anytime.',
      placeholder: footer?.newsletter?.placeholder || 'Enter your email',
      submitLabel: footer?.newsletter?.submitLabel || 'Get Briefings',
      privacyText: footer?.newsletter?.privacyText || 'By subscribing you agree to our',
      privacyLinkLabel: footer?.newsletter?.privacyLinkLabel || 'Privacy Policy',
      privacyLinkHref: footer?.newsletter?.privacyLinkHref || '/contact',
    },
    legalLinks: mapFooterLinks(footer?.legalLinks),
    legalDisclaimer:
      footer?.legalDisclaimer ||
      'Proteq provides compliance advisory, learning, and systems guidance. Regulatory authorisation and licensing details are available on request where applicable.',
    copyrightName: footer?.copyrightName || 'Proteq',
    showStatusBadge: footer?.showStatusBadge !== false,
    statusBadgeLabel: footer?.statusBadgeLabel || 'All Systems Operational',
  }
}
