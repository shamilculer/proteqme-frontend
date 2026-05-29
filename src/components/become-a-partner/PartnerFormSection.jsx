import PartnerApplicationForm from "@/components/forms/PartnerApplicationForm";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function PartnerFormSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #231143 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Glow accent */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#E25C8F]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-250 mx-auto px-4 relative z-10">

        {/* Section header */}
        <ScrollReveal className="text-center mb-4" yOffset={20}>
          <div className="inline-flex items-center gap-2 mb-5 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
            </span>
            <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">Partner Application</span>
          </div>
          <h2 className="text-3xl md:text-[44px] mb-4 max-w-2xl mx-auto">
            Apply to Become a Proteq Partner
          </h2>
          <p className="text-zinc-500 text-smmax-w-xl mx-auto">
            Join our growing ecosystem of compliance professionals, educators, and technology providers. Complete the two-step application below to get started.
          </p>
        </ScrollReveal>

        <div>
          <ScrollReveal className="flex-1 w-full" yOffset={20} delay={0.1}>
            <div className="bg-white border border-zinc-200 border-t-4 border-t-[#E25C8F] rounded-3xl p-7 md:p-10 shadow-sm">
              <PartnerApplicationForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
