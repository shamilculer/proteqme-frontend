import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import ConsultancyApproach from "@/components/consultancy/ConsultancyApproach";
import ConsultancyIndustries from "@/components/consultancy/ConsultancyIndustries";
import ConsultancyModules from "@/components/consultancy/ConsultancyModules";
import ConsultancyOverview from "@/components/consultancy/ConsultancyOverview";
import ConsultancyWhyChoose from "@/components/consultancy/ConsultancyWhyChoose";

export const metadata = {
  title: "Consultancy & Advisory | Proteq",
  description:
    "AML compliance advisory, regulatory gap analysis, and anti-fraud programme design for financial institutions, VASPs, and fintechs. Book a free consultation.",
};

const ConsultancyPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Consultancy & Advisory"
        heading="Navigate Compliance with Confidence"
        description="From AML programme design to regulatory gap analysis, we deliver practical advisory that protects your organisation and satisfies your regulators."
        buttons={[
          {
            label: "Book a Free Consultation",
            href: "/contact",
            variant: "default",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Explore Advisory Modules",
            href: "#advisory-modules",
            variant: "white",
            showArrow: true,
          },
        ]}
        highlights={[
          "AML & Anti-Fraud Advisory",
          "Regulatory Gap Analysis",
          "VARA Compliance Support",
          "Policy & Programme Design",
        ]}
        bgImage="/consulting-bg.webp"
        imageAlt="Consultancy and advisory services"
      />

      <ConsultancyOverview />
      <ConsultancyModules />
      <ConsultancyWhyChoose />
      <ConsultancyApproach />
      <ConsultancyIndustries />

      <MainCTA
        bgImage="/implementation.webp"
        heading="Ready to Strengthen Your Compliance?"
        description="Book a free consultation to discuss your organisation's compliance requirements, regulatory exposure, and how Proteq can support your team."
        buttons={[
          {
            label: "Book a Free Consultation",
            href: "/contact",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "Request a Quote",
            href: "/contact",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </main>
  );
};

export default ConsultancyPage;
