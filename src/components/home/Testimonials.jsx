import TestimonialsSection from "@/components/global/TestimonialsSection";

const homeTestimonials = [
  {
    quote:
      "Their gap analysis was thorough and regulator-ready. We received a prioritised remediation plan our board could act on immediately.",
    role: "Chief Compliance Officer",
    company: "Mid-size European Bank",
  },
  {
    quote:
      "The AML programme redesign balanced regulatory expectations with how our team actually works day to day. Implementation support was practical throughout.",
    role: "Head of Financial Crime",
    company: "Regional Payment Provider",
  },
  {
    quote:
      "Training was scenario-led and immediately relevant to case reviews. Our analysts applied the frameworks in live investigations the following week.",
    role: "VP of AML Operations",
    company: "Digital Asset Exchange",
  },
  {
    quote:
      "Systems advisory helped us cut through vendor noise and select monitoring tools aligned to our risk profile and budget constraints.",
    role: "Director of RegTech",
    company: "Insurance Group",
  },
  {
    quote:
      "Policy and procedure packs were audit-ready from the first draft. External reviewers commented on the clarity of our control documentation.",
    role: "Senior Compliance Manager",
    company: "Wealth Management Firm",
  },
  {
    quote:
      "Cross-border advisory support helped us align KYC and screening controls across three jurisdictions without slowing onboarding.",
    role: "Head of Risk & Compliance",
    company: "Fintech Scale-up",
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
