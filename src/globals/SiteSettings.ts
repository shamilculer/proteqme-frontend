import type { GlobalConfig } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contact',
          fields: [
            { name: 'email', type: 'email', label: 'Primary email' },
            { name: 'partnersEmail', type: 'email', label: 'Partners email' },
            { name: 'phonePrimary', type: 'text', label: 'Primary phone (tel link)' },
            { name: 'phonePrimaryDisplay', type: 'text', label: 'Primary phone (display)' },
            { name: 'phoneSecondary', type: 'text', label: 'Secondary phone (tel link)' },
            { name: 'phoneSecondaryDisplay', type: 'text', label: 'Secondary phone (display)' },
            { name: 'address', type: 'textarea', label: 'Office address' },
            { name: 'mapUrl', type: 'text', label: 'Google Maps search URL' },
            { name: 'mapEmbed', type: 'text', label: 'Google Maps embed URL' },
            { name: 'companyRegistration', type: 'text', label: 'Company registration number' },
          ],
        },
        {
          label: 'Branding',
          fields: [
            { name: 'logoPath', type: 'text', label: 'Logo path', defaultValue: '/proteq-logo.png' },
            { name: 'logoWhitePath', type: 'text', label: 'White logo path', defaultValue: '/proteq-white.png' },
            { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo (Media)' },
            { name: 'ctaLabel', type: 'text', label: 'Header CTA label', defaultValue: 'Book a Free Demo' },
            { name: 'ctaUrl', type: 'text', label: 'Header CTA URL', defaultValue: '/book-demo' },
          ],
        },
        {
          label: 'Default SEO',
          fields: [
            { name: 'defaultMetaTitle', type: 'text', label: 'Default meta title suffix' },
            { name: 'defaultMetaDescription', type: 'textarea', label: 'Default meta description' },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidatePath('/', 'layout')
        revalidateTag('global_siteSettings', 'max')
      },
    ],
  },
}
