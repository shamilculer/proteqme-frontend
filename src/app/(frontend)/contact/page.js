import PageTitle from "@/components/global/PageTitle";
import ContactMainSection from "@/components/contact/ContactMainSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export const metadata = {
  title: "Contact Us | Proteq",
  description:
    "Speak with Proteq's compliance experts about advisory, training, or RegTech systems. UK and US hotlines, email, and London office details.",
};

const ContactPage = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        bgImage="/consulting-bg.webp"
        particleId="contact-hero-particles"
      />

      <ContactMainSection />
      <ContactMapSection />
      <NewsletterSignup />
    </>
  );
};

export default ContactPage;
