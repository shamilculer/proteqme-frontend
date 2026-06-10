"use client";

import Image from "next/image";
import { CheckCircle2, SearchCheck, ShieldCheck, UserCheck } from "lucide-react";
import { Button } from "../ui/button";

const advisoryFocusAreas = [
  { label: "AML frameworks", icon: ShieldCheck },
  { label: "KYC processes", icon: UserCheck },
  { label: "Sanctions screening", icon: SearchCheck },
  { label: "Anti-fraud controls", icon: CheckCircle2 },
];

export default function ConsultancyOverview() {
  return (
<section className="w-full overflow-hidden bg-[#f6f4f8] py-18 md:py-24">
        <div className="container">
          <div className="relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-18">
            <div className="relative z-10">
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                  </span>
                  <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                    Overview
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl md:text-[46px]">
                  Advisory Built for the Real Work of Compliance
                </h2>

                <div className="mt-7 space-y-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  <p>
                    Our consulting practice works with financial institutions,
                    virtual asset service providers, fintechs, and regulated
                    businesses to build, audit, and strengthen their compliance
                    operations.
                  </p>
                  <p>
                    Advisory engagements cover anti-money laundering frameworks,
                    know your customer processes, sanctions screening
                    programmes, and anti-fraud controls. The work is shaped
                    around the organisation&apos;s actual risk exposure,
                    systems, people, and regulatory duties.
                  </p>
                  <p>
                    This is not theoretical guidance. Each engagement is
                    grounded in hands-on implementation, with clear findings,
                    usable documentation, filing support where required, and
                    practical training for the teams responsible for execution.
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-6">
                  <Button href="/contact" showArrow>
                    Book a Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative min-h-0 lg:min-h-[600px]">
              <div className="absolute left-0 top-10 hidden h-[78%] w-px bg-[#231143]/15 lg:block" />
              <div className="absolute left-0 top-10 hidden h-24 w-px bg-[#E25C8F] lg:block" />

              <div className="relative ml-0 h-full lg:ml-10">
                <div className="relative h-[260px] overflow-hidden rounded-[14px] rounded-tl-[28px] rounded-br-[28px] bg-[#231143] shadow-[0_32px_90px_rgba(35,17,67,0.18)] sm:h-[360px] md:h-[520px] md:rounded-[12px] md:rounded-tl-[42px] md:rounded-br-[42px] lg:h-[620px]">
                  <Image
                    src="/consulting-intro.webp"
                    alt="Compliance advisory team reviewing regulatory controls"
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-linear-to-br from-[#120823]/75 via-[#120823]/18 to-[#E25C8F]/20" /> */}
                  <div className="absolute inset-x-8 top-8 h-px bg-white/35" />
                  <div className="absolute inset-y-8 right-8 w-px bg-white/25" />
                </div>

                <div className="relative mt-6 w-full border border-zinc-200 bg-white p-5 shadow-[0_22px_60px_rgba(35,17,67,0.14)] lg:absolute lg:-left-8 lg:bottom-10 lg:mt-0 lg:w-[min(92%,520px)]">
                  <div className="grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
                    <div className="border-r border-zinc-200 pr-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Advisory coverage
                      </p>
                      <p className="mt-2 text-xl font-medium leading-tight text-[#231143]">
                        Framework, process, screening, control.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      {advisoryFocusAreas.map(({ label, icon: Icon }) => (
                        <div key={label} className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center bg-[#231143]/5 text-[#231143]">
                            <Icon className="size-4" />
                          </span>
                          <span className="text-sm font-medium text-zinc-800">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-12 hidden w-52 border border-white/20 bg-[#231143] p-5 text-white shadow-[0_20px_55px_rgba(18,8,35,0.25)] md:block">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
                    Output
                  </p>
                  <p className="mt-2 text-lg font-medium leading-tight">
                    Actionable, auditable, ready to implement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}