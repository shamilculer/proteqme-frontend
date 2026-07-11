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

export function mapFooterProps(footer, siteSettings) {
  return {
    logo: {
      src: siteSettings?.logoWhitePath || '/proteq-white.png',
      alt: 'Proteq Logo',
    },
    navLinks: mapFooterLinks(footer?.navLinks),
    socialLinks: footer?.socialLinks?.length ? footer.socialLinks : DEFAULT_SOCIAL,
    contact: {
      email: siteSettings?.email || 'info@proteq.me',
      phonePrimary: siteSettings?.phonePrimary || '+442071234567',
      phonePrimaryDisplay: siteSettings?.phonePrimaryDisplay || '+44 (0) 20 7123 4567',
      phoneSecondary: siteSettings?.phoneSecondary || '+12125550199',
      phoneSecondaryDisplay: siteSettings?.phoneSecondaryDisplay || '+1 (212) 555-0199',
      address: siteSettings?.address || 'Level 24, International Finance Centre, London, EC2N 1HQ',
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
