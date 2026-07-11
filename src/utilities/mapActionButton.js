import { resolveCmsLink } from '@/utilities/resolveCmsLink'

function resolvePopupRef(popup) {
  if (!popup) return null

  if (typeof popup === 'object') {
    return {
      slug: popup.slug || null,
      id: popup.id || null,
    }
  }

  return { slug: null, id: popup }
}

/**
 * Map a CMS action button (link or popup) to client-safe props.
 * Supports legacy href / opensConsultation fields during migration.
 */
export function mapActionButton(button) {
  if (!button) return null

  const label = button.label || button.ctaLabel || button.cta || null
  if (!label) return null

  const style = {
    variant: button.variant || 'default',
    glowingDot: Boolean(button.glowingDot),
    showArrow: button.showArrow !== false,
    className: button.className,
    arrowDirection: button.arrowDirection,
    icon: button.icon,
    iconPosition: button.iconPosition,
    target: button.target,
    rel: button.rel,
    style: button.style,
  }

  const actionType =
    button.actionType ||
    (button.opensConsultation || button.openConsultation ? 'popup' : 'link')

  if (actionType === 'popup') {
    const popupRef = resolvePopupRef(button.popup)

    return {
      label,
      actionType: 'popup',
      popupSlug: popupRef?.slug || (button.opensConsultation ? 'consultation' : null),
      variant: button.variant || 'default',
      glowingDot: Boolean(button.glowingDot),
      showArrow: button.showArrow !== false,
      className: button.className,
      arrowDirection: button.arrowDirection,
      icon: button.icon,
      iconPosition: button.iconPosition,
      target: button.target,
      rel: button.rel,
      style: button.style,
    }
  }

  const resolved = button.link
    ? resolveCmsLink(button.link)
    : button.href
      ? { href: button.href, newTab: Boolean(button.newTab) }
      : null

  if (!resolved?.href) return null

  return {
    label,
    actionType: 'link',
    href: resolved.href,
    newTab: Boolean(resolved.newTab ?? button.newTab),
    ...style,
  }
}

export function mapActionButtons(buttons = []) {
  return buttons.map(mapActionButton).filter(Boolean)
}

export function mapCtaFields(block) {
  if (block?.cta?.label) {
    return mapActionButton(block.cta)
  }

  if (block?.ctaLabel) {
    return mapActionButton({
      label: block.ctaLabel,
      href: block.ctaHref,
      actionType: block.ctaActionType,
      popup: block.ctaPopup,
      variant: block.ctaVariant,
      glowingDot: block.ctaGlowingDot,
      showArrow: block.ctaShowArrow,
    })
  }

  return null
}

export function mapCardButton(item) {
  if (item?.button?.label) {
    return mapActionButton({ ...item.button, label: item.button.label })
  }

  if (item?.buttonLabel) {
    return mapActionButton({
      label: item.buttonLabel,
      href: item.buttonHref,
      actionType: item.buttonActionType,
      popup: item.buttonPopup,
    })
  }

  return null
}
