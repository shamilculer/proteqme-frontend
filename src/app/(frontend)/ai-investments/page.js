import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import AurumIntro from "@/components/ai-investments/AurumIntro";
import AurumInvestmentPerformance from "@/components/ai-investments/AurumInvestmentPerformance";
import AurumWhyAI from "@/components/ai-investments/AurumWhyAI";
import AurumFoundationOverview from "@/components/ai-investments/AurumFoundationOverview";
import AurumEcosystem from "@/components/ai-investments/AurumEcosystem";
import AurumFAQ from "@/components/ai-investments/AurumFAQ";

const AiInvestmentPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="AI Investments with Aurum"
        heading="Your Exclusive Gateway to Premium Returns"
        description="Join an elite circle of investors generating 16-18% ROI through our proprietary FinTech investment strategies. Limited positions available."
        highlights={[
          "SEC Compliant",
          "Bank-Grade Security",
          "Verified Returns",
          "Exclusive Access",
        ]}
        buttons={[
          {
            label: "Explore Aurum Foundation",
            href: "#aurum-intro",
            variant: "white",
            showArrow: true,
          },
        ]}
      />
      <AurumIntro />

      <AurumInvestmentPerformance />

      <AurumWhyAI />

      <AurumFoundationOverview />

      <AurumEcosystem />

      <AurumFAQ />

      <MainCTA
        heading="Ready to Explore AI-Driven Investment Opportunities?"
        description="Speak with our team to learn how Aurum Foundation combines AI-driven trading intelligence with blockchain-powered security for modern wealth management."
        buttons={[
          {
            label: "Book a Free Demo",
            href: "/contact",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Get in Touch",
            href: "/contact",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </main>
  );
};

export default AiInvestmentPage;
