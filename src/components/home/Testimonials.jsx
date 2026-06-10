import TestimonialsSection from "@/components/global/TestimonialsSection";

const homeTestimonials = [
  {
    quote:
      "Their gap analysis was thorough and regulator-ready. We received a prioritised remediation plan our board could act on immediately.",
    attribution: "Chief Compliance Officer, Mid-size European Bank",
    initials: "CC",
  },
  {
    quote:
      "The AML programme redesign balanced regulatory expectations with how our team actually works day to day. Implementation support was practical throughout.",
    attribution: "Head of Financial Crime, Regional Payment Provider",
    initials: "HF",
  },
  {
    quote:
      "Training was scenario-led and immediately relevant to case reviews. Our analysts applied the frameworks in live investigations the following week.",
    attribution: "VP of AML Operations, Digital Asset Exchange",
    initials: "VA",
  },
  {
    quote:
      "Systems advisory helped us cut through vendor noise and select monitoring tools aligned to our risk profile and budget constraints.",
    attribution: "Director of RegTech, Insurance Group",
    initials: "DR",
  },
  {
    quote:
      "Policy and procedure packs were audit-ready from the first draft. External reviewers commented on the clarity of our control documentation.",
    attribution: "Senior Compliance Manager, Wealth Management Firm",
    initials: "SC",
  },
  {
    quote:
      "Cross-border advisory support helped us align KYC and screening controls across three jurisdictions without slowing onboarding.",
    attribution: "Head of Risk & Compliance, Fintech Scale-up",
    initials: "HR",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection
      eyebrow="Client Feedback"
      heading="What compliance leaders say about working with Proteq"
      description="Anonymised feedback from compliance, financial crime, and RegTech leaders across banking, payments, digital assets, and regulated fintech."
      testimonials={homeTestimonials}
    />
  );
};

export default Testimonials;
