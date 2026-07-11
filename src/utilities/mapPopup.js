export function mapPopup(popup) {
  if (!popup || typeof popup !== 'object') return null

  const steps = (popup.steps || [])
    .map((step) => ({
      title: step.title || '',
      description: step.description || '',
      continueLabel: step.continueLabel || 'Continue',
      backLabel: step.backLabel || 'Back',
      fields: (step.fields || []).map((field) => ({
        name: field.name,
        label: field.label,
        fieldType: field.fieldType || 'text',
        placeholder: field.placeholder || '',
        required: field.required !== false,
        options: (field.options || []).map((option) => ({
          label: option.label,
          value: option.value,
        })),
      })),
    }))
    .filter((step) => step.fields.length > 0)

  if (!popup.slug || steps.length === 0) return null

  const autoOpenPages = (popup.autoOpen?.pages || [])
    .map((page) => (typeof page === 'object' && page?.slug ? page.slug : null))
    .filter(Boolean)

  const calendarStep = popup.calendarStep || {}

  return {
    id: popup.id,
    slug: popup.slug,
    title: popup.title,
    multiStep:
      (Boolean(popup.multiStep) && steps.length > 1) ||
      (Boolean(calendarStep.enabled) && steps.length >= 1),
    steps,
    calendarStep: {
      enabled: Boolean(calendarStep.enabled),
      title: calendarStep.title || 'Pick a time',
      description:
        calendarStep.description ||
        'Choose a slot that works for you. We will send a confirmation by email.',
      calLink: calendarStep.calLink || '',
      continueLabel: calendarStep.continueLabel || 'Continue to calendar',
      skipLabel:
        calendarStep.skipLabel || "Skip — we'll email you available times",
      leadType: calendarStep.leadType === 'contact' ? 'contact' : 'demo',
    },
    submitLabel: popup.submitLabel || 'Submit',
    successTitle: popup.successTitle || "Thank you — we'll be in touch",
    successDescription:
      popup.successDescription ||
      'A member of our team will contact you within one business day.',
    privacyNote: popup.privacyNote || '',
    autoOpen: {
      enabled: Boolean(popup.autoOpen?.enabled),
      pageSlugs: autoOpenPages,
      initialDelayMs: popup.autoOpen?.initialDelayMs ?? 5000,
      reopenDelayMs: popup.autoOpen?.reopenDelayMs ?? 300000,
      maxAutoOpens: popup.autoOpen?.maxAutoOpens ?? 2,
      storageKey: popup.autoOpen?.storageKey || popup.slug,
    },
  }
}

export function mapPopups(popups = []) {
  return popups.map(mapPopup).filter(Boolean)
}
