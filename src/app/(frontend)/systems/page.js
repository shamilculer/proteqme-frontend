import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import SystemsOverview from "@/components/systems/SystemsOverview";
import SystemsIntelligence from "@/components/systems/SystemsIntelligence";
import SystemsWhyChoose from "@/components/systems/SystemsWhyChoose";
import SystemsApproach from "@/components/systems/SystemsApproach";
import SystemsBenefits from "@/components/systems/SystemsBenefits";
import SystemsFeatures from "@/components/systems/SystemsFeatures";

export const metadata = {
  title: "RegTech Systems | Proteq",
  description:
    "Vendor-neutral AML screening, transaction monitoring, and KYC platform advisory for financial institutions, VASPs, and fintechs. Request a systems assessment.",
};

const SystemsPage = () => {
  return (
    <>
      <MediumHero
        eyebrow="RegTech Systems"
        heading="The Right Systems for the Right Risks"
        description="We evaluate, recommend, and help implement AML screening, transaction monitoring, and regulatory technology solutions tailored to your risk profile and operational scale."
        bgImage="/systems-bg.webp"
        imageAlt="RegTech systems and compliance technology advisory"
        enableParticles
        animatedPattern
        particleId="systems-hero-particles"
        buttons={[
          {
            label: "Request a Systems Assessment",
            href: "/contact",
            variant: "default",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Book a Demo",
            href: "/contact",
            variant: "white",
            showArrow: true,
          },
        ]}
        highlights={[
          "AML Screening & Sanctions",
          "Transaction Monitoring",
          "KYC & Due Diligence",
          "Regulatory Reporting",
        ]}
      />
      <SystemsOverview />
      <SystemsIntelligence />
      <SystemsFeatures />
      <SystemsApproach />
      <SystemsBenefits />
      <SystemsWhyChoose />

      <MainCTA
        bgImage="/systems.webp"
        heading="Not Sure Which System Fits Your Organisation?"
        description="Request a free systems assessment. We will review your current compliance technology stack and identify gaps, overlaps, and opportunities."
        buttons={[
          {
            label: "Request a Systems Assessment",
            href: "/contact",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Talk to an Expert",
            href: "/contact",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </>
  );
};

export default SystemsPage;
