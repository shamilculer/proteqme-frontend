import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import LearningIntro from "@/components/learning/LearningIntro";
import LearningApproach from "@/components/learning/LearningApproach";
import LearningWhyChoose from "@/components/learning/LearningWhyChoose";
import TrainingProgrammes from "@/components/learning/TrainingProgrammes";
import LearningTrustStrip from "@/components/learning/LearningTrustStrip";
import TestimonialsSection from "@/components/global/TestimonialsSection";
import { learningTestimonials } from "@/data/learningTestimonials";

const LearningPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Holistic Learning Solutions"
        heading="The PROTEQme Training Experience"
        description="Holistic learning solutions that deliver quality trainings, enhance learner experience, and transform performance for professionals across every discipline."
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
            label: "Explore Our Programs",
            href: "#training-programmes",
            variant: "outline",
            showArrow: true,
          },
        ]}
        bgImage="/learning-5.webp"
      />

      <LearningIntro />

      <TrainingProgrammes />

      <LearningTrustStrip />

      <LearningApproach />

      <LearningWhyChoose />

      <TestimonialsSection
        id="learning-testimonials"
        eyebrow="Learner Stories"
        heading="What professionals say about our training"
        testimonials={learningTestimonials}
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
