import MainCTA from "@/components/global/MainCTA";
import MediumHero from "@/components/global/MediumHero";
import LearningIntro from "@/components/learning/LearningIntro";
import LearningApproach from "@/components/learning/LearningApproach";
import LearningWhyChoose from "@/components/learning/LearningWhyChoose";
import TrainingProgrammes from "@/components/learning/TrainingProgrammes";
import LearningTrustStrip from "@/components/learning/LearningTrustStrip";
import LearningExpertise from "@/components/learning/LearningExpertise";
import TestimonialsSection from "@/components/global/TestimonialsSection";
import { learningTestimonials } from "@/data/learningTestimonials";

export const metadata = {
  title: "Professional Learning | Proteq",
  description:
    "Practitioner-led AML training, certification preparation, and corporate compliance programmes for regulated teams. Browse courses and webinars.",
};

const LearningPage = () => {
  return (
    <main>
      <MediumHero
        eyebrow="Professional Learning"
        heading="The PROTEQme Training Experience"
        description="Practitioner-led programmes that deliver quality training, enhance learner experience, and build compliance capability across AML, certification prep, and corporate upskilling."
        highlights={[
          "Expert-Led Webinars",
          "Practical AML Education",
          "CAFS Preparation Support",
          "Industry-Focused Learning",
        ]}
        buttons={[
          {
            label: "Browse Courses",
            href: "#training-programmes",
            variant: "default",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "View Webinars",
            href: "#training-programmes",
            variant: "white",
            showArrow: true,
          },
        ]}
        bgImage="/learning-5.webp"
        imageAlt="Professional compliance learning and webinar session"
      />

      <LearningIntro />
      <LearningExpertise />
      <TrainingProgrammes />
      <LearningTrustStrip />
      <LearningApproach />
      <LearningWhyChoose />

      <TestimonialsSection
        id="learning-testimonials"
        eyebrow="Learner Stories"
        heading="What Professionals Say About Our Training"
        testimonials={learningTestimonials}
      />

      <MainCTA
        bgImage="/trainer.webp"
        heading="Need Tailored Training for Your Team?"
        description="We design in-house training programmes for compliance teams, customised to your organisation's regulatory environment and risk profile."
        buttons={[
          {
            label: "Browse Courses",
            href: "#training-programmes",
            variant: "white",
            glowingDot: true,
            showArrow: true,
          },
          {
            label: "View Webinars",
            href: "#training-programmes",
            variant: "outline",
            showArrow: true,
          },
        ]}
      />
    </main>
  );
};

export default LearningPage;
