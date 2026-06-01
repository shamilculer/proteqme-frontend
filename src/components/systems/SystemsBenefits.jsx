import { Button } from "@/components/ui/button";
import { Asterisk } from "lucide-react";

const benefitCards = [
  {
    title: "Improved Operational Clarity & Better Decisions",
    description:
      "Gain a clear view of control gaps, alert volumes, and system performance with structured implementation insight.",
    stat: "180+",
    statLabel: "Compliance technology evaluations delivered",
  },
  {
    title: "Increased Efficiency Through Strategic Planning",
    description:
      "Tailored screening, monitoring, and onboarding workflows help reduce false positives and operational drag.",
    stat: "50+",
    statLabel: "Regulated industries supported with tailored approaches",
  },
  {
    title: "Proactive Risk Reduction & Audit Readiness",
    description:
      "Identify control weaknesses early and embed solutions that stand up to regulatory scrutiny.",
    stat: "250+",
    statLabel: "Teams empowered with smarter compliance systems",
  },
];

const SystemsBenefits = () => {
  return (
    <section className="w-full overflow-hidden bg-[#fbfafd] py-18 md:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 xl:gap-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <Asterisk className="size-3.5 text-[#231143]" strokeWidth={2.5} />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Our Benefits
              </span>
            </div>

            <h2 className="max-w-xl text-3xl leading-[1.12] text-[#231143] md:text-[44px] md:leading-[1.08]">
              Unlocking value that strengthens your compliance operations
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:pt-14">
            <p className="max-w-lg text-sm leading-relaxed text-zinc-600 sm:text-base">
              We focus on delivering meaningful outcomes through vendor-neutral
              systems advisory, helping you optimise controls, reduce operational
              risk, and build sustainable compliance capability.
            </p>

            <div>
              <Button
                href="/contact"
                variant="default"
                showArrow
                arrowDirection="right"
                className="shadow-[0_18px_45px_rgba(35,17,67,0.18)]"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {benefitCards.map((card) => (
            <article
              key={card.title}
              className="group flex min-h-full flex-col rounded-[18px] border border-zinc-200/80 bg-zinc-100/70 p-7 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-[0_22px_60px_rgba(35,17,67,0.08)] md:p-8"
            >
              <div className="flex-1">
                <h3 className="text-xl leading-snug text-[#061525] md:text-[22px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 border-t border-zinc-300/70 pt-6">
                <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="text-4xl font-semibold leading-none tracking-tight text-[#231143] md:text-[46px]">
                    {card.stat}
                  </span>
                  <p className="max-w-[11rem] pb-1 text-sm leading-snug text-zinc-600">
                    {card.statLabel}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsBenefits;
