"use client";

import Image from "next/image";
import { ClipboardCheck, FileCheck2, ShieldCheck, Target } from "lucide-react";

const points = [
  {
    number: "01",
    title: "Practical, Not Theoretical",
    description:
      "Every engagement is built around usable documentation, clear findings, and implementation steps your team can act on.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Regulatory Depth",
    description:
      "Advisory is grounded in AML, anti-fraud, digital asset, and regulatory control expectations across demanding environments.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Tailored Risk Lens",
    description:
      "We shape recommendations around your actual exposure, customer base, products, systems, and operating model.",
    icon: Target,
  },
  {
    number: "04",
    title: "Audit-Ready Outputs",
    description:
      "Policies, procedures, assessments, and remediation plans are structured for internal use and external examination.",
    icon: FileCheck2,
  },
];

export default function ConsultancyWhyChoose() {
  return (
    <section className="w-full overflow-hidden bg-white py-18 md:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
          <div className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Why Choose Us
              </span>
            </div>

            <h2 className="max-w-xl text-3xl md:text-[46px]">
              Advisory That Holds Up When It Matters
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Our work is designed for regulated teams that need clarity,
              documentation, and defensible decisions without unnecessary
              complexity.
            </p>

            <div className="relative mt-9 min-h-[420px] w-full overflow-hidden bg-proteq-dark shadow-[0_28px_80px_rgba(35,17,67,0.14)] md:min-h-[520px]">
              <Image
                src="/consulting-bg.webp"
                alt="Regulated business environment for compliance advisory"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="overlay-consultancy-why absolute inset-0" />
              <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-white/35 pt-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Advisory Standard
                </p>
                <p className="text-xs text-white/55">AML / KYC / Controls</p>
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <div className="consultancy-why-card max-w-md p-5">
                  <p className="text-2xl font-medium leading-tight text-white">
                    Clear, defensible compliance work for regulated teams.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        AML
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Compliance Focus
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        360
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Operational View
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="group relative min-h-[260px] overflow-hidden border border-zinc-200 bg-[#fbfafd] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white hover:shadow-[0_24px_70px_rgba(35,17,67,0.1)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#231143] to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-[#231143]/5 transition group-hover:text-primary/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-full flex-col">
                    <span className="flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#231143] shadow-[0_14px_35px_rgba(35,17,67,0.08)] transition group-hover:border-primary/35 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-10" />
                    </span>

                    <div className="mt-auto pt-8">
                      <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-primary" />
                      <h3 className="text-xl leading-tight text-[#061525]">
                src="/assesment.webp"
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

