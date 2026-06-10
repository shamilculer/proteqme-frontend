import AurumHero from "@/components/ai-investments/AurumHero";
import AurumIntro from "@/components/ai-investments/AurumIntro";
import AurumEcosystemSection from "@/components/ai-investments/AurumEcosystemSection";
import AurumMissionVision from "@/components/ai-investments/AurumMissionVision";
import AurumWhyChoose from "@/components/ai-investments/AurumWhyChoose";
import AurumGetStarted from "@/components/ai-investments/AurumGetStarted";
import AurumMobileApp from "@/components/ai-investments/AurumMobileApp";
import AurumCTA from "@/components/ai-investments/AurumCTA";

export const metadata = {
  title: "AI Investments | AURUM Foundation | Proteq",
  description:
    "Explore AURUM Foundation — AI trading bots, Gold (XAU) packages, and Web3 NeoBank. Request investor information through Proteq.",
};

const AiInvestmentPage = () => {
  return (
    <main className="aurum-page">
      <AurumHero />
      <AurumIntro />
      <AurumEcosystemSection />
      <AurumMissionVision />
      <AurumWhyChoose />
      <AurumGetStarted />
      <AurumMobileApp />
      <AurumCTA />
    </main>
  );
};

export default AiInvestmentPage;
