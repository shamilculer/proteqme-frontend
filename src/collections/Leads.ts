import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: {
    singular: 'Lead',
    plural: 'Leads',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: [
      'email',
      'fullName',
      'leadType',
      'funnel',
      'source',
      'bookingStatus',
      'createdAt',
    ],
    description: 'Form and popup submissions captured from the website.',
    listSearchableFields: ['email', 'fullName', 'phone', 'company', 'leadType', 'source'],
  },
  access: {
    // Public forms create via Local API with overrideAccess.
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  timestamps: true,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Summary',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  required: true,
                  index: true,
                  admin: { width: '50%' },
                },
                {
                  name: 'phone',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'fullName',
                  type: 'text',
                  admin: { width: '50%' },
                },
                {
                  name: 'company',
                  type: 'text',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'firstName',
                  type: 'text',
                  admin: { width: '50%', readOnly: true },
                },
                {
                  name: 'lastName',
                  type: 'text',
                  admin: { width: '50%', readOnly: true },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'funnel',
                  type: 'select',
                  required: true,
                  index: true,
                  options: [
                    { label: 'Demo / Calendar', value: 'demo' },
                    { label: 'Contact', value: 'contact' },
                    { label: 'Partner', value: 'partner' },
                    { label: 'Newsletter', value: 'newsletter' },
                    { label: 'Webinar gate', value: 'webinar-gate' },
                    { label: 'Resource', value: 'resource' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'leadType',
                  type: 'text',
                  index: true,
                  admin: {
                    width: '33%',
                    description: 'Service / enquiry label shown in CRM (e.g. Proteq Learning).',
                  },
                },
                {
                  name: 'bookingStatus',
                  type: 'select',
                  defaultValue: 'no_calendar',
                  options: [
                    { label: 'Booked', value: 'booked' },
                    { label: 'Skipped', value: 'skipped' },
                    { label: 'No calendar', value: 'no_calendar' },
                  ],
                  admin: { width: '34%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'source',
                  type: 'text',
                  admin: {
                    width: '50%',
                    description: 'Page path where the form was submitted.',
                  },
                },
                {
                  name: 'popupSlug',
                  type: 'text',
                  index: true,
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'message',
              type: 'textarea',
            },
            {
              name: 'formFields',
              type: 'array',
              label: 'Submitted fields',
              labels: {
                singular: 'Field',
                plural: 'Fields',
              },
              admin: {
                description: 'Every field the user submitted, listed individually.',
                initCollapsed: false,
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'field',
                      type: 'text',
                      required: true,
                      label: 'Field',
                      admin: { width: '35%', readOnly: true },
                    },
                    {
                      name: 'value',
                      type: 'textarea',
                      label: 'Value',
                      admin: { width: '65%', readOnly: true, rows: 2 },
                    },
                  ],
                },
              ],
            },
            {
              name: 'submittedAt',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'partial',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Submitted before the form was fully completed.',
              },
            },
            {
              name: 'notes',
              type: 'textarea',
              admin: {
                description: 'Internal notes (not shown to the lead).',
              },
            },
          ],
        },
        {
          label: 'Raw data',
          fields: [
            {
              name: 'form',
              type: 'json',
              required: true,
              admin: {
                description: 'Full form JSON (same data as Submitted fields above).',
              },
            },
            {
              name: 'brevoTags',
              type: 'json',
              admin: {
                description: 'Tags sent to Brevo for this submission.',
              },
            },
            {
              name: 'brevoAttributes',
              type: 'json',
              admin: {
                description: 'Attribute payload synced to Brevo.',
              },
            },
            {
              name: 'payloadSnapshot',
              type: 'json',
              admin: {
                description: 'Full normalised lead payload snapshot.',
                readOnly: true,
              },
            },
          ],
        },
        {
          label: 'Booking',
          fields: [
            {
              name: 'calendarSkipped',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'booking',
              type: 'group',
              fields: [
                { name: 'uid', type: 'text' },
                { name: 'title', type: 'text' },
                { name: 'startTime', type: 'text' },
                { name: 'endTime', type: 'text' },
                { name: 'status', type: 'text' },
                { name: 'videoCallUrl', type: 'text' },
                { name: 'attendeeEmail', type: 'email' },
                { name: 'attendeeName', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Sync',
          fields: [
            {
              name: 'brevoSync',
              type: 'group',
              fields: [
                {
                  name: 'success',
                  type: 'checkbox',
                  defaultValue: false,
                },
                {
                  name: 'syncedAt',
                  type: 'date',
                  admin: {
                    date: {
                      pickerAppearance: 'dayAndTime',
                    },
                  },
                },
                {
                  name: 'error',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
