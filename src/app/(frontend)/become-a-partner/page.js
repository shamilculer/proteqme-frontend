import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import PartnerFormSection from "@/components/become-a-partner/PartnerFormSection";

const PartnerPage = () => {
  return (
    <main>
      <MediumHero />

      <PartnerFormSection />

      <MainCTA
        bgImage="/systems.webp"
        eyebrow="Get Started Today"
        heading="Have Questions About Partnering?"
        description="Reach out directly and we will connect you with the right person on our team."
        buttons={[
          {
            label: "Contact Us Now",
            href: "/contact",
            variant: "white",
            showArrow: true,
          },
          {
            label: "Email Us: partners@proteqme.com",
            href: "mailto:partners@proteqme.com",
            variant: "outline",
          },
        ]}
      />
    </main>
  );
};

export default PartnerPage;

