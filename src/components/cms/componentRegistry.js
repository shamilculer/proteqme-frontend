import Intro from '@/components/home/Intro'
import Partners from '@/components/home/Partners'
import Clients from '@/components/home/Clients'
import AurumFeature from '@/components/home/AurumFeature'
import NewsletterSignup from '@/components/home/NewsletterSignup'

import ConsultancyOverview from '@/components/consultancy/ConsultancyOverview'
import ConsultancyModules from '@/components/consultancy/ConsultancyModules'
import ConsultancyWhyChoose from '@/components/consultancy/ConsultancyWhyChoose'
import ConsultancyApproach from '@/components/consultancy/ConsultancyApproach'
import ConsultancyIndustries from '@/components/consultancy/ConsultancyIndustries'

import LearningIntro from '@/components/learning/LearningIntro'
import LearningExpertise from '@/components/learning/LearningExpertise'
import TrainingProgrammes from '@/components/learning/TrainingProgrammes'
import LearningTrustStrip from '@/components/learning/LearningTrustStrip'
import LearningWhyChoose from '@/components/learning/LearningWhyChoose'
import LearningApproach from '@/components/learning/LearningApproach'

import SystemsOverview from '@/components/systems/SystemsOverview'
import SystemsIntelligence from '@/components/systems/SystemsIntelligence'
import SystemsFeatures from '@/components/systems/SystemsFeatures'
import SystemsApproach from '@/components/systems/SystemsApproach'
import SystemsBenefits from '@/components/systems/SystemsBenefits'
import SystemsWhyChoose from '@/components/systems/SystemsWhyChoose'

import AurumIntro from '@/components/ai-investments/AurumIntro'
import AurumCoreOfferings from '@/components/ai-investments/AurumCoreOfferings'
import AurumPlatformSection from '@/components/ai-investments/AurumPlatformSection'
import AurumReferralRegister from '@/components/ai-investments/AurumReferralRegister'
import AurumOutboundLinks from '@/components/ai-investments/AurumOutboundLinks'
import AurumWhyAI from '@/components/ai-investments/AurumWhyAI'

import PartnerOverview from '@/components/partner/PartnerOverview'
import PartnerTrustStrip from '@/components/partner/PartnerTrustStrip'
import PartnerOpportunities from '@/components/partner/PartnerOpportunities'
import PartnerWhyChoose from '@/components/partner/PartnerWhyChoose'
import PartnerFormSection from '@/components/partner/PartnerFormSection'

import ContactMainSection from '@/components/contact/ContactMainSection'
import ContactMapSection from '@/components/contact/ContactMapSection'

import CmsOverviewSection from '@/components/cms/sections/CmsOverviewSection'

export const componentRegistry = {
  homeIntro: Intro,
  homeClients: Clients,
  aurumFeature: AurumFeature,
  newsletterSignup: NewsletterSignup,

  consultancyOverview: ConsultancyOverview,
  consultancyModules: ConsultancyModules,
  consultancyWhyChoose: ConsultancyWhyChoose,
  consultancyApproach: ConsultancyApproach,
  consultancyIndustries: ConsultancyIndustries,

  learningIntro: LearningIntro,
  learningExpertise: LearningExpertise,
  trainingProgrammes: TrainingProgrammes,
  learningTrustStrip: LearningTrustStrip,
  learningWhyChoose: LearningWhyChoose,
  learningApproach: LearningApproach,

  systemsOverview: SystemsOverview,
  systemsIntelligence: SystemsIntelligence,
  systemsFeatures: SystemsFeatures,
  systemsApproach: SystemsApproach,
  systemsBenefits: SystemsBenefits,
  systemsWhyChoose: SystemsWhyChoose,

  aurumIntro: AurumIntro,
  aurumCoreOfferings: AurumCoreOfferings,
  aurumPlatform: AurumPlatformSection,
  aurumReferralRegister: AurumReferralRegister,
  aurumOutboundLinks: AurumOutboundLinks,
  aurumWhyAI: AurumWhyAI,

  partnerOverview: PartnerOverview,
  partnerTrustStrip: PartnerTrustStrip,
  partnerOpportunities: PartnerOpportunities,
  partnerWhyChoose: PartnerWhyChoose,
  partnerForm: PartnerFormSection,

  contactMain: ContactMainSection,
  contactMap: ContactMapSection,
}

export const layoutRegistry = {
  overviewSplit: CmsOverviewSection,
  cardGridIntro: CmsOverviewSection,
}

// Partners is rendered via proteqLogoBar block, not component registry
export { Partners }
