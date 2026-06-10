"use client";

import Image from "next/image";
import { FileCheck2, GraduationCap, Users } from "lucide-react";

const points = [
  {
    title: "Practitioner-Led",
    description:
      "Sessions led by compliance professionals with live case experience — not abstract theory or generic slide decks.",
    icon: Users,
  },
  {
    title: "Audit-Ready Frameworks",
    description:
      "Workplace-ready materials structured for internal governance, examinations, and regulator-facing evidence.",
    icon: FileCheck2,
  },
  {
    title: "Certification Preparation",
    description:
      "Focused pathways for ACAMS CAFS, ICA, CAMS, and CFE — with assessment-aligned modules and expert guidance.",
    icon: GraduationCap,
  },
];

export default function LearningWhyChoose() {
  return (
    <section
      className="w-full overflow-hidden bg-white py-18 md:py-24"
      aria-labelledby="learning-why-heading"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
          <div className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Why Learn With Proteq
              </span>
            </div>

            <h2
              id="learning-why-heading"
              className="max-w-xl text-3xl md:text-[46px]"
            >
              Training That Holds Up in Regulated Work
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Three reasons compliance professionals choose Proteq — built for
              teams that need practical capability, not checkbox training.
            </p>

            <div className="relative mt-9 min-h-[420px] w-full overflow-hidden bg-proteq-dark shadow-[0_28px_80px_rgba(35,17,67,0.14)] md:min-h-[520px]">
              <Image
                src="/trainer.webp"
                alt="Corporate compliance team workshop"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="overlay-consultancy-why absolute inset-0" />

              <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-white/35 pt-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Learning Standard
                </p>
                <p className="text-xs text-white/55">
                  Webinars / Courses / Certs
                </p>
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <div className="consultancy-why-card max-w-md p-5">
                  <p className="text-2xl font-medium leading-tight text-white">
                    Learn from practitioners who have built, audited, and
                    defended compliance programmes in the field.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        200+
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Professionals Trained
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        ACAMS
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Certification Focus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="group relative min-h-[220px] overflow-hidden border border-zinc-200 bg-[#fbfafd] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white hover:shadow-[0_24px_70px_rgba(35,17,67,0.1)] md:min-h-[240px]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-[#231143] to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-[#231143]/5 transition group-hover:text-primary/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-full flex-col">
                    <span className="flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#231143] shadow-[0_14px_35px_rgba(35,17,67,0.08)] transition group-hover:border-primary/35 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-10" strokeWidth={1.5} />
                    </span>

                    <div className="mt-auto pt-8">
                      <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-primary" />
                      <h3 className="text-xl leading-tight text-[#061525]">
                        {point.title}
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
