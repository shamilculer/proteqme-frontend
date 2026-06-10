import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import AurumIntro from "@/components/ai-investments/AurumIntro";
import AurumCoreOfferings from "@/components/ai-investments/AurumCoreOfferings";
import AurumPlatformSection from "@/components/ai-investments/AurumPlatformSection";
import AurumOutboundLinks from "@/components/ai-investments/AurumOutboundLinks";
import AurumWhyAI from "@/components/ai-investments/AurumWhyAI";

export const metadata = {
  title: "AI Investments with Aurum Foundation | Proteq",
  description:
    "Explore how Aurum Foundation combines AI, blockchain security, and gold-backed stability. Visit the Aurum platform or request investor information through Proteq.",
};

const AiInvestmentPage = () => {
  return (
    <>
      <MediumHero
        eyebrow="AI Investments · Aurum Foundation"
        heading="We Don't Just Teach AI Investments — We Offer Hope!"
        description="Explore how Aurum Foundation combines artificial intelligence, blockchain security, and gold-backed stability to create a new path for financial growth and capital protection."
        bgImage="/ai-investment.webp"
        imageAlt="Aurum Foundation — AI investments and financial ecosystem"
        enableParticles
        animatedPattern
        particleId="aurum-hero-particles"
        buttons={[
          {
            label: "Explore Aurum Foundation",
            href: "https://aurum-foundation.com/",
            variant: "default",
            glowingDot: true,
            showArrow: true,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            label: "Learn More",
            href: "#aurum-links",
            variant: "white",
            showArrow: true,
          },
        ]}
        highlights={[
          "EX-AI Bot",
          "Neyro",
          "Gold (XAU) Investment Packages",
          "Web3 Neobank Services",
        ]}
      />

      <AurumIntro />
      <AurumCoreOfferings />
      <AurumPlatformSection />
      <AurumOutboundLinks />
      <AurumWhyAI />

      <MainCTA
        className="py-14 md:py-16"
        bgImage="/ai-investment.webp"
        eyebrow="Ready to Explore?"
        heading="Take the Next Step with Aurum Foundation"
        description="Visit the Aurum platform to explore AI trading bots, gold-backed packages, and Web3 banking — or contact Proteq for investor information and guidance."
        buttons={[
          {
            label: "Visit Aurum Foundation",
            href: "https://aurum-foundation.com/",
            variant: "white",
            glowingDot: true,
            showArrow: true,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            label: "Request Investor Information",
            href: "/contact",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </>
  );
};

export default AiInvestmentPage;
