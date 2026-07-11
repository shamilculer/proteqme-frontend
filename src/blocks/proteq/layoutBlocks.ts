import { ProteqApproach } from './Approach/config'
import { ProteqLearningIntro } from './LearningIntro/config'
import { ProteqPartnerForm } from './PartnerForm/config'
import { ProteqCardGrid } from './CardGrid/config'
import { ProteqContactBlock } from './ContactBlock/config'
import { ProteqContentSection } from './ContentSection/config'
import { ProteqIconCardGrid } from './IconCardGrid/config'
import { ProteqIconList } from './IconList/config'
import { ProteqLinkCards } from './LinkCards/config'
import { ProteqReferralRegister } from './ReferralRegister/config'
import { ProteqLogoBar } from './LogoBar/config'
import { ProteqMainCta } from './MainCta/config'
import { ProteqMapEmbed } from './MapEmbed/config'
import { ProteqModuleCarousel } from './ModuleCarousel/config'
import { ProteqNewsletter } from './Newsletter/config'
import { ProteqOverviewRich } from './OverviewRich/config'
import { ProteqPillSplit } from './PillSplit/config'
import { ProteqStatsStrip } from './StatsStrip/config'
import { ProteqTestimonials } from './Testimonials/config'
import { ProteqTrustStrip } from './TrustStrip/config'
import { ProteqVideoSection } from './VideoSection/config'
import { ProteqWhyChoose } from './WhyChoose/config'

/** Blocks available in the page Content tab (hero is configured in the Hero tab). */
export const proteqLayoutBlocks = [
  ProteqOverviewRich,
  ProteqIconCardGrid,
  ProteqWhyChoose,
  ProteqApproach,
  ProteqCardGrid,
  ProteqModuleCarousel,
  ProteqTrustStrip,
  ProteqVideoSection,
  ProteqReferralRegister,
  ProteqLinkCards,
  ProteqIconList,
  ProteqPillSplit,
  ProteqNewsletter,
  ProteqMapEmbed,
  ProteqContactBlock,
  ProteqLearningIntro,
  ProteqPartnerForm,
  ProteqContentSection,
  ProteqMainCta,
  ProteqLogoBar,
  ProteqStatsStrip,
  ProteqTestimonials,
]

export const proteqHeroBlockTypes = new Set([
  'proteqHeroCarousel',
  'proteqMediumHero',
  'proteqPageTitle',
])
