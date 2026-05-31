import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";

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
            href: "#",
            variant: "white",
            showArrow: true,
          },
        ]}
      />

      <MainCTA
        heading="Need Tailored Training for Your Team?"
        description="We design in-house training programmes for compliance teams, customised to your
organisation’s regulatory environment and risk profile."
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
