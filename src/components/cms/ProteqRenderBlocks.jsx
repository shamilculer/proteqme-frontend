"use client";

import MediumHero from "@/components/global/MediumHero";
import MainCTA from "@/components/global/MainCTA";
import PageTitle from "@/components/global/PageTitle";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import ValuePropositionStrip from "@/components/home/ValuePropositionStrip";
import TestimonialsSection from "@/components/global/TestimonialsSection";

import ConsultancyOverview from "@/components/consultancy/ConsultancyOverview";
import ConsultancyModules from "@/components/consultancy/ConsultancyModules";
import ConsultancyWhyChoose from "@/components/consultancy/ConsultancyWhyChoose";
import ConsultancyApproach from "@/components/consultancy/ConsultancyApproach";
import ConsultancyIndustries from "@/components/consultancy/ConsultancyIndustries";

import LearningIntro from "@/components/learning/LearningIntro";
import LearningExpertise from "@/components/learning/LearningExpertise";
import TrainingProgrammes from "@/components/learning/TrainingProgrammes";
import LearningTrustStrip from "@/components/learning/LearningTrustStrip";
import LearningWhyChoose from "@/components/learning/LearningWhyChoose";
import LearningApproach from "@/components/learning/LearningApproach";

import SystemsOverview from "@/components/systems/SystemsOverview";
import SystemsIntelligence from "@/components/systems/SystemsIntelligence";
import SystemsFeatures from "@/components/systems/SystemsFeatures";
import SystemsBenefits from "@/components/systems/SystemsBenefits";
import SystemsApproach from "@/components/systems/SystemsApproach";
import SystemsWhyChoose from "@/components/systems/SystemsWhyChoose";
import PartnerTrustStrip from "@/components/partner/PartnerTrustStrip";
import PartnerWhyChoose from "@/components/partner/PartnerWhyChoose";

import AurumIntro from "@/components/ai-investments/AurumIntro";
import AurumCoreOfferings from "@/components/ai-investments/AurumCoreOfferings";
import AurumPlatformSection from "@/components/ai-investments/AurumPlatformSection";
import AurumReferralRegister from "@/components/ai-investments/AurumReferralRegister";
import AurumOutboundLinks from "@/components/ai-investments/AurumOutboundLinks";
import AurumWhyAI from "@/components/ai-investments/AurumWhyAI";

import PartnerOverview from "@/components/partner/PartnerOverview";
import PartnerOpportunities from "@/components/partner/PartnerOpportunities";
import PartnerFormSection from "@/components/partner/PartnerFormSection";

import ContactMainSection from "@/components/contact/ContactMainSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import NewsletterSignup from "@/components/home/NewsletterSignup";

import {
  isImpactTrustStrip,
  isLearningExpertiseOverview,
  isPlatformVideoSection,
  mapApproach,
  mapButtons,
  mapCardGrid,
  mapContentOverrides,
  mapHighlights,
  mapIconCardGrid,
  mapIconListItems,
  mapLearningExpertise,
  mapLearningIntro,
  mapReferralRegister,
  mapLinkCards,
  mapLogos,
  mapModuleCarousel,
  mapOverviewRich,
  mapPartnerForm,
  mapPills,
  mapSlides,
  mapStats,
  mapTestimonials,
  mapTopics,
  mapTrustStrip,
  mapVideoSection,
  mapWhyChoose,
  pickCardGridComponent,
  resolveImageSrc,
} from "@/components/cms/mapBlockData";
import { mapCtaFields } from "@/utilities/mapActionButton";
import { componentRegistry, layoutRegistry } from "@/components/cms/componentRegistry";

const cardGridComponents = {
  consultancyIndustries: ConsultancyIndustries,
  systemsIntelligence: SystemsIntelligence,
  trainingProgrammes: TrainingProgrammes,
  aurumCoreOfferings: AurumCoreOfferings,
  partnerOpportunities: PartnerOpportunities,
};

const blockComponents = {
  proteqMediumHero: ({ block }) => (
    <MediumHero
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      bgImage={resolveImageSrc(block) || "/systems.webp"}
      imageAlt={block.imageAlt}
      buttons={mapButtons(block.buttons)}
      highlights={mapHighlights(block.highlights)}
      enableParticles={block.enableParticles}
      particleId={block.particleId}
    />
  ),
  proteqMainCta: ({ block }) => (
    <MainCTA
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      buttons={mapButtons(block.buttons)}
    />
  ),
  proteqPageTitle: ({ block }) => (
    <PageTitle
      title={block.title}
      bgImage={resolveImageSrc(block) || "/consulting-bg.webp"}
      particleId={block.particleId}
    />
  ),
  proteqHeroCarousel: ({ block }) => <Hero slides={mapSlides(block.slides)} />,
  proteqLogoBar: ({ block }) => {
    const logos = mapLogos(block.logos);
    return (
      <Partners
        partners={logos}
        eyebrow={block.eyebrow}
        heading={block.heading}
        description={block.description}
      />
    );
  },
  proteqStatsStrip: ({ block }) => (
    <ValuePropositionStrip
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      image={resolveImageSrc(block) || "/hero-3.webp"}
      imageAlt={block.imageAlt}
      stats={mapStats(block.stats)}
    />
  ),
  proteqTestimonials: ({ block }) => (
    <TestimonialsSection
      id={block.sectionId}
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      testimonials={mapTestimonials(block.testimonials)}
    />
  ),
  proteqOverviewRich: ({ block }) => {
    if (isLearningExpertiseOverview(block)) {
      return <LearningExpertise {...mapLearningExpertise(block)} />;
    }
    if (block.sectionId === "systems-overview") {
      return <SystemsOverview {...mapOverviewRich(block)} />;
    }
    return <ConsultancyOverview {...mapOverviewRich(block)} />;
  },
  proteqLearningIntro: ({ block }) => (
    <LearningIntro {...mapLearningIntro(block)} />
  ),
  proteqIconCardGrid: ({ block }) => {
    const props = mapIconCardGrid(block);
    if (props.headerLayout === 'split') {
      return <SystemsFeatures {...props} />;
    }
    return <LearningWhyChoose {...props} />;
  },
  proteqWhyChoose: ({ block }) => {
    const props = mapWhyChoose(block);
    const sectionId = block.sectionId || "";
    if (sectionId.includes("systems-why")) {
      return <SystemsWhyChoose {...props} />;
    }
    if (sectionId.includes("partner-why")) {
      return <PartnerWhyChoose {...props} />;
    }
    return <ConsultancyWhyChoose {...props} />;
  },
  proteqApproach: ({ block }) => {
    const props = mapApproach(block);
    const sectionId = block.sectionId || "";
    if (sectionId.includes("learning-approach")) {
      return <LearningApproach {...props} stepLabelPrefix="Step" />;
    }
    if (sectionId.includes("systems-approach")) {
      return <SystemsApproach {...props} />;
    }
    return <ConsultancyApproach {...props} />;
  },
  proteqCardGrid: ({ block }) => {
    const props = mapCardGrid(block);
    const key = pickCardGridComponent(block, props);
    const Component = cardGridComponents[key];
    return <Component {...props} />;
  },
  proteqModuleCarousel: ({ block }) => (
    <ConsultancyModules {...mapModuleCarousel(block)} />
  ),
  proteqTrustStrip: ({ block }) => {
    const props = mapTrustStrip(block);
    if (isImpactTrustStrip(block)) {
      return <SystemsBenefits {...props} animate={false} />;
    }
    if (
      (block.sectionId || "").includes("partner-trust") ||
      block.stats?.length === 4
    ) {
      return <PartnerTrustStrip {...props} />;
    }
    return <LearningTrustStrip {...props} />;
  },
  proteqVideoSection: ({ block }) =>
    isPlatformVideoSection(block) ? (
      <AurumPlatformSection {...mapVideoSection(block)} />
    ) : (
      <AurumIntro {...mapVideoSection(block)} />
    ),
  proteqReferralRegister: ({ block }) => (
    <AurumReferralRegister {...mapReferralRegister(block)} />
  ),
  proteqLinkCards: ({ block }) => (
    <AurumOutboundLinks
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      links={mapLinkCards(block.links)}
      sectionId={block.sectionId}
    />
  ),
  proteqIconList: ({ block }) => (
    <AurumWhyAI
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      reasons={mapIconListItems(block.reasons)}
      sectionId={block.sectionId}
    />
  ),
  proteqPillSplit: ({ block }) => (
    <PartnerOverview
      eyebrow={block.eyebrow}
      heading={block.heading}
      body={block.body}
      paragraphs={block.paragraphs?.map((p) => p.text)}
      pills={mapPills(block.pills)}
      cta={mapCtaFields(block)}
      sectionId={block.sectionId}
    />
  ),
  proteqPartnerForm: ({ block }) => (
    <PartnerFormSection {...mapPartnerForm(block)} />
  ),
  proteqNewsletter: ({ block }) => (
    <NewsletterSignup
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      cardHeading={block.cardHeading}
      submitLabel={block.submitLabel}
      privacyNote={block.privacyNote}
      topics={mapTopics(block.topics)}
      cta={mapCtaFields(block)}
      sectionId={block.sectionId}
    />
  ),
  proteqMapEmbed: ({ block }) => (
    <ContactMapSection embedUrl={block.embedUrl} sectionId={block.sectionId} />
  ),
  proteqContactBlock: ({ block }) => (
    <ContactMainSection
      eyebrow={block.eyebrow}
      heading={block.heading}
      description={block.description}
      sectionId={block.sectionId}
    />
  ),
  proteqContentSection: ({ block }) => {
    const overrides = mapContentOverrides(block);

    if (block.variant === "component" && block.componentKey) {
      const Component = componentRegistry[block.componentKey];
      if (!Component) return null;
      return <Component {...overrides} />;
    }

    const Layout = layoutRegistry[block.variant];
    if (!Layout) return null;
    return <Layout {...overrides} variant={block.variant} />;
  },
};

export default function ProteqRenderBlocks({ blocks = [] }) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const Renderer = blockComponents[block.blockType];
        if (!Renderer) return null;
        return <Renderer key={block.id ? String(block.id) : `block-${index}`} block={block} />;
      })}
    </>
  );
}
