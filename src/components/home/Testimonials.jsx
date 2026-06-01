import TestimonialsSection from "@/components/global/TestimonialsSection";

const homeTestimonials = [
  {
    quote:
      "Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations at every turn.",
    name: "Lincoln Stanton",
    role: "CEO & Co-Founder",
    company: "Gumroad",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The advisory support team went above and beyond.",
    name: "Skylar Lipshutz",
    role: "Product Manager",
    company: "Orbit",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "Excellent compliance tools—durable, intuitive, and exactly what we needed. Their customer service is stellar and highly responsive.",
    name: "Paityn Lipshutz",
    role: "VP of Risk Operations",
    company: "Lemonsqueezy",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "Impressive service—high quality, simple to integrate, and exactly as promised. The compliance gap analysis was incredibly thorough.",
    name: "Anika Franci",
    role: "Chief Compliance Officer",
    company: "Zendesk",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "Great implementation—reliable, easy to set up, and just as described. The training webinars ensured a smooth onboarding experience.",
    name: "Chance Baptista",
    role: "Head of AML Auditing",
    company: "ABC Company",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  },
  {
    quote:
      "Wonderful partnership—highly detailed, easy to operate, and exactly what we wanted. Technical support has been quick and proactive.",
    name: "Corey Franci",
    role: "Lead Developer",
    company: "Stripe",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection
      eyebrow="Testimonial"
      heading="Words of Praise From Others About Our Presence"
      testimonials={homeTestimonials}
    />
  );
};

export default Testimonials;
