"use client";

import Image from "next/image";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Globe,
  Users,
} from "lucide-react";

const points = [
  {
    title: "Global Reach & Visibility",
    description:
      "Tap into our network of financial institutions, regulators, and compliance professionals across 30+ markets.",
    icon: Globe,
  },
  {
    title: "Co-Branded Opportunities",
    description:
      "Deliver joint programmes, advisory engagements, and technology solutions under a trusted, recognised brand.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Expert Community Access",
    description:
      "Collaborate with practitioners, trainers, and technologists at the forefront of compliance and RegTech.",
    icon: Users,
  },
  {
    title: "Structured Support",
    description:
      "From onboarding to go-to-market, hands-on support so every partnership delivers measurable results.",
    icon: BadgeCheck,
  },
];

export default function PartnerWhyChoose() {
  return (
    <section
      className="w-full overflow-hidden bg-white py-18 md:py-24"
      aria-labelledby="partner-why-heading"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
          <div className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Why Partner With Us
              </span>
            </div>

            <h2
              id="partner-why-heading"
              className="max-w-xl text-3xl md:text-[46px]"
            >
              A Platform Built for Lasting Impact
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Meaningful collaboration with structured support — not a logo on a
              website, but a partnership that creates real industry value across
              advisory, training, and RegTech.
            </p>

            <div className="relative mt-9 min-h-[420px] w-full overflow-hidden bg-[#061525] shadow-[0_28px_80px_rgba(35,17,67,0.14)] md:min-h-[520px]">
              <Image
                src="/partner.webp"
                alt="Business partnership and professional collaboration"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#061525]/88 via-[#061525]/22 to-transparent" />

              <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-white/35 pt-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Partnership Standard
                </p>
                <p className="text-xs text-white/55">
                  Advisory / Training / RegTech
                </p>
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <div className="max-w-md border border-white/16 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-2xl font-medium leading-tight text-white">
                    Grow your reach through partnerships that matter — with
                    co-branded programmes and structured go-to-market support.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        30+
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Global Markets
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-medium leading-none text-white">
                        360°
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                        Collaboration Model
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
                  className="group relative min-h-[260px] overflow-hidden border border-zinc-200 bg-[#fbfafd] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/35 hover:bg-white hover:shadow-[0_24px_70px_rgba(35,17,67,0.1)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#E25C8F] via-[#231143] to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-[#231143]/5 transition group-hover:text-[#E25C8F]/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-full flex-col">
                    <span className="flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#231143] shadow-[0_14px_35px_rgba(35,17,67,0.08)] transition group-hover:border-[#E25C8F]/35 group-hover:bg-[#E25C8F] group-hover:text-white">
                      <Icon className="size-10" strokeWidth={1.5} />
                    </span>

                    <div className="mt-auto pt-8">
                      <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-[#E25C8F]" />
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
