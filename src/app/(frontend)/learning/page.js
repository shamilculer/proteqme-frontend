import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";

const LearningPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Learning for Compliance Professionals"
        heading="Learn From the Practitioners, Not the Textbooks"
        description="Structured compliance training, pre-recorded webinars, and certification preparation designed for professionals who need practical skills, not just theory."
        highlights={[
          "Expert Led Webinars",
          "Practical AML Education",
          "CAFS Preparation Support",
          "Industry Focused Learning",
        ]}
        buttons={[
          {
            label: "Book a Free Demo",
            href: "#",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Browse Webinars",
            href: "#",
            variant: "outline",
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

export default LearningPage;
