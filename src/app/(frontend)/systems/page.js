import MainCTA from "@/components/global/MainCTA";
import SystemsHero from "@/components/systems/SystemsHero";
import SystemsMetrics from "@/components/systems/SystemsMetrics";
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
    <main>
      <SystemsHero />
      <SystemsMetrics />
      <SystemsIntelligence />
      <SystemsWhyChoose />
      <SystemsApproach />
      <SystemsBenefits />
      <SystemsFeatures />

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
    </main>
  );
};

export default SystemsPage;
