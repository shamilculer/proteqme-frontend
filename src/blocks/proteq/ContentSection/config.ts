import type { Block } from 'payload'

import {
  descriptionField,
  eyebrowField,
  imagePathField,
  mediaImageField,
} from '../shared'

export const ProteqContentSection: Block = {
  slug: 'proteqContentSection',
  interfaceName: 'ProteqContentSectionBlock',
  labels: { singular: 'Content Section', plural: 'Content Sections' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'component',
      options: [
        { label: 'Registered component', value: 'component' },
        { label: 'Overview (split layout)', value: 'overviewSplit' },
        { label: 'Card grid intro', value: 'cardGridIntro' },
      ],
    },
    {
      name: 'componentKey',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData?.variant === 'component',
      },
      options: [
        { label: 'Home — Intro', value: 'homeIntro' },
        { label: 'Consultancy — Overview', value: 'consultancyOverview' },
        { label: 'Consultancy — Modules slider', value: 'consultancyModules' },
        { label: 'Consultancy — Why choose', value: 'consultancyWhyChoose' },
        { label: 'Consultancy — Approach', value: 'consultancyApproach' },
        { label: 'Consultancy — Industries', value: 'consultancyIndustries' },
        { label: 'Learning — Intro', value: 'learningIntro' },
        { label: 'Learning — Expertise', value: 'learningExpertise' },
        { label: 'Learning — Training programmes', value: 'trainingProgrammes' },
        { label: 'Learning — Trust strip', value: 'learningTrustStrip' },
        { label: 'Learning — Why choose', value: 'learningWhyChoose' },
        { label: 'Learning — Approach', value: 'learningApproach' },
        { label: 'Systems — Overview', value: 'systemsOverview' },
        { label: 'Systems — Intelligence', value: 'systemsIntelligence' },
        { label: 'Systems — Features', value: 'systemsFeatures' },
        { label: 'Systems — Approach', value: 'systemsApproach' },
        { label: 'Systems — Benefits', value: 'systemsBenefits' },
        { label: 'Systems — Why choose', value: 'systemsWhyChoose' },
        { label: 'Aurum — Intro', value: 'aurumIntro' },
        { label: 'Aurum — Core offerings', value: 'aurumCoreOfferings' },
        { label: 'Aurum — Platform', value: 'aurumPlatform' },
        { label: 'Aurum — Referral register', value: 'aurumReferralRegister' },
        { label: 'Aurum — Outbound links', value: 'aurumOutboundLinks' },
        { label: 'Aurum — Why AI', value: 'aurumWhyAI' },
        { label: 'Partner — Overview', value: 'partnerOverview' },
        { label: 'Partner — Trust strip', value: 'partnerTrustStrip' },
        { label: 'Partner — Opportunities', value: 'partnerOpportunities' },
        { label: 'Partner — Why choose', value: 'partnerWhyChoose' },
        { label: 'Partner — Form', value: 'partnerForm' },
        { label: 'Contact — Main', value: 'contactMain' },
        { label: 'Contact — Map', value: 'contactMap' },
        { label: 'Newsletter signup', value: 'newsletterSignup' },
        { label: 'Home — Aurum feature', value: 'aurumFeature' },
        { label: 'Home — Clients', value: 'homeClients' },
      ],
    },
    eyebrowField,
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'component',
      },
    },
    descriptionField,
    {
      name: 'body',
      type: 'textarea',
      label: 'Body copy',
      admin: {
        condition: (_, siblingData) => siblingData?.variant !== 'component',
      },
    },
    mediaImageField,
    imagePathField,
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.variant === 'overviewSplit' || siblingData?.variant === 'cardGridIntro',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'summary', type: 'textarea' },
      ],
    },
    { name: 'sectionId', type: 'text', label: 'HTML section ID' },
  ],
}
