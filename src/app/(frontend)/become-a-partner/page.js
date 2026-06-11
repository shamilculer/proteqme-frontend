import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import PartnerOverview from "@/components/partner/PartnerOverview";
import PartnerOpportunities from "@/components/partner/PartnerOpportunities";
import PartnerProcess from "@/components/partner/PartnerProcess";
import PartnerWhyChoose from "@/components/partner/PartnerWhyChoose";
import PartnerTrustStrip from "@/components/partner/PartnerTrustStrip";
import PartnerFormSection from "@/components/partner/PartnerFormSection";
import { PARTNERS_EMAIL } from "@/data/siteContact";

export const metadata = {
  title: "Become a Partner | Proteq",
  description:
    "Partner with Proteq on advisory, training, and RegTech collaborations. Apply as a partner, trainer, or compliance technology provider.",
};

const PartnerPage = () => {
  return (
    <>
      <MediumHero
        eyebrow="Partner With Proteq"
        heading="Join a Network Shaping Compliance, Learning, and RegTech"
        description="Whether you are an experienced trainer, a compliance technology provider, or an organisation looking to partner on advisory and training, we want to hear from you."
        bgImage="/partner.webp"
        imageAlt="Business partnership and professional collaboration"
        buttons={[
          {
            label: "Become a Partner",
            href: "#partner-form",
            variant: "default",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Explore Opportunities",
            href: "#partnership-opportunities",
            variant: "outline",
            showArrow: true,
          },
        ]}
        highlights={[
          "Expert Advisory",
          "Co-Branded Training",
          "Technology Partnerships",
        ]}
        enableParticles
        animatedPattern
        particleId="partner-hero-particles"
      />

      <PartnerOverview />
      <PartnerTrustStrip />
      <PartnerOpportunities />
      <PartnerWhyChoose />
      <PartnerFormSection />
      {/* <PartnerProcess /> */}

      <MainCTA
        bgImage="/partner.webp"
        eyebrow="Get Started Today"
        heading="Have Questions About Partnering?"
        description="Reach out directly and we will connect you with the right person on our team."
        buttons={[
          {
            label: "Contact Us",
            href: "/contact",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Email Our Team",
            href: `mailto:${PARTNERS_EMAIL}`,
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </>
  );
};

export default PartnerPage;
