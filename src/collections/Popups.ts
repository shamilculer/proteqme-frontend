import type { CollectionConfig } from 'payload'

import { revalidateTag } from 'next/cache'

export const Popups: CollectionConfig = {
  slug: 'popups',
  labels: {
    singular: 'Popup',
    plural: 'Popups',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'multiStep', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Admin title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used when linking buttons to this popup (e.g. consultation).',
      },
    },
    {
      name: 'multiStep',
      type: 'checkbox',
      label: 'Multi-step popup',
      defaultValue: false,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      required: true,
      minRows: 1,
      admin: {
        description: 'Use one step for a single-page popup, or add multiple for a wizard flow.',
      },
      fields: [
        { name: 'title', type: 'text', label: 'Step title' },
        { name: 'description', type: 'textarea', label: 'Step description' },
        {
          name: 'fields',
          type: 'array',
          label: 'Fields',
          fields: [
            { name: 'name', type: 'text', required: true, label: 'Field name (unique key)' },
            { name: 'label', type: 'text', required: true },
            {
              name: 'fieldType',
              type: 'select',
              required: true,
              defaultValue: 'text',
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'tel' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Select', value: 'select' },
              ],
            },
            { name: 'placeholder', type: 'text' },
            {
              name: 'required',
              type: 'checkbox',
              label: 'Required',
              defaultValue: true,
            },
            {
              name: 'options',
              type: 'array',
              label: 'Select options',
              admin: {
                condition: (_, siblingData) => siblingData?.fieldType === 'select',
              },
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'value', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          name: 'continueLabel',
          type: 'text',
          label: 'Continue button label',
          defaultValue: 'Continue',
        },
        {
          name: 'backLabel',
          type: 'text',
          label: 'Back button label',
          defaultValue: 'Back',
        },
      ],
    },
    {
      type: 'group',
      name: 'calendarStep',
      label: 'Cal.com booking step',
      admin: {
        description:
          'Optional final step with an inline Cal.com calendar. Lead data is saved when the user leaves the last form step.',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Add Cal.com step after form',
          defaultValue: false,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Calendar step title',
          defaultValue: 'Pick a time',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Calendar step description',
          defaultValue: 'Choose a slot that works for you. We will send a confirmation by email.',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'calLink',
          type: 'text',
          label: 'Cal.com event link',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
            description:
              'e.g. your-team/30min. Leave blank to use NEXT_PUBLIC_CALCOM_LINK from the environment.',
          },
        },
        {
          name: 'continueLabel',
          type: 'text',
          label: 'Last form step button (before calendar)',
          defaultValue: 'Continue to calendar',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'skipLabel',
          type: 'text',
          label: 'Skip calendar link label',
          defaultValue: "Skip — we'll email you available times",
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'leadType',
          type: 'select',
          label: 'CRM lead type when calendar is enabled',
          defaultValue: 'demo',
          options: [
            { label: 'Demo booking', value: 'demo' },
            { label: 'Contact enquiry', value: 'contact' },
          ],
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
      ],
    },
    {
      name: 'submitLabel',
      type: 'text',
      label: 'Final submit button label',
      defaultValue: 'Submit',
      admin: {
        description: 'Used on the last form step when Cal.com is disabled.',
      },
    },
    {
      name: 'successTitle',
      type: 'text',
      label: 'Success title',
      defaultValue: "Thank you — we'll be in touch",
    },
    {
      name: 'successDescription',
      type: 'textarea',
      label: 'Success message',
      defaultValue: 'A member of our team will contact you within one business day.',
    },
    {
      name: 'privacyNote',
      type: 'text',
      label: 'Privacy note',
      defaultValue: 'No spam. Your details are kept confidential.',
    },
    {
      type: 'group',
      name: 'autoOpen',
      label: 'Auto-open behaviour',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Auto-open on page load',
          defaultValue: false,
        },
        {
          name: 'pages',
          type: 'relationship',
          relationTo: 'pages',
          hasMany: true,
          label: 'Auto-open on these pages',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
            description:
              'The popup opens automatically only on the selected pages. Buttons can still open it from any page via the popup link action.',
          },
        },
        {
          name: 'initialDelayMs',
          type: 'number',
          label: 'Initial delay (ms)',
          defaultValue: 5000,
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'reopenDelayMs',
          type: 'number',
          label: 'Re-open delay after dismiss (ms)',
          defaultValue: 300000,
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'maxAutoOpens',
          type: 'number',
          label: 'Max auto-opens per session',
          defaultValue: 2,
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'storageKey',
          type: 'text',
          label: 'Session storage key',
          admin: {
            condition: (_, siblingData) => siblingData?.enabled,
            description: 'Leave blank to use the popup slug.',
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag('popups', 'max')
      },
    ],
  },
}
