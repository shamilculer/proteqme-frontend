"use client";



import Image from "next/image";

import { ScrollReveal } from "../ui/scroll-reveal";



const approachSteps = [

  {

    title: "Discover the Risk Picture",

    description:

      "We review your existing compliance documentation, interview key personnel, map your customer risk profile, and benchmark your controls against FATF recommendations and local regulatory requirements.",

  },

  {

    title: "Design the Control Path",

    description:

      "You receive a prioritised remediation roadmap with clear ownership, timelines, and success criteria — structured for both internal governance and regulator presentation.",

  },

  {

    title: "Build the Evidence",

    description:

      "Deliverables include AML policy documentation, KYC/EDD procedures, risk appetite statements, suspicious activity reporting protocols, and training materials.",

  },

  {

    title: "Embed the Programme",

    description:

      "Includes a 2-week knowledge transfer period, team Q&A sessions, and 30-day post-engagement support.",

  },

];



export default function ConsultancyApproach() {

  return (

    <section

      className="relative w-full overflow-hidden bg-proteq-dark py-20 md:py-28"

      aria-labelledby="consultancy-approach-heading"

    >

      <div className="absolute inset-0 hidden lg:block">

        <Image

          src="/consulting-intro.webp"

          alt=""

          fill

          sizes="100vw"

          className="object-cover"

          aria-hidden

        />

        <div className="overlay-consultancy-feature-base absolute inset-0" aria-hidden />

        <div

          className="overlay-consultancy-feature-side absolute inset-0"

          aria-hidden

        />

        <div

          className="hero-home-overlay-accent absolute inset-0 opacity-80"

          aria-hidden

        />

      </div>



      <div className="container relative z-10">

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">

          <ScrollReveal>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">

              Our Approach

            </p>

            <h2

              id="consultancy-approach-heading"

              className="text-section-heading max-w-lg text-white"

            >

              A Clear Route from Review to Implementation

            </h2>

            <p className="text-body mt-5 max-w-lg text-white/80">

              Each advisory engagement follows a practical sequence: understand

              the risk, define the required controls, produce the evidence, and

              help your team operate with confidence.

            </p>

            <blockquote className="font-serif-quote mt-8 max-w-lg border-l-[3px] border-primary pl-5 text-sm font-medium leading-relaxed text-white/95">

              Structured enough for regulator-facing work. Flexible enough for

              the realities of your operating model.

            </blockquote>

          </ScrollReveal>



          <ScrollReveal xOffset={16}>

            <div className="consultancy-approach-panel rounded-2xl border border-white/10 p-6 md:p-8">

              <ol className="consultancy-approach-steps relative">

                {approachSteps.map((step, index) => (

                  <li

                    key={step.title}

                    className="relative grid gap-4 py-6 first:pt-0 last:pb-0 max-lg:flex max-lg:flex-col max-lg:items-start md:grid-cols-[3.5rem_1fr]"

                  >

                    <span className="step-number-circle relative z-10 size-12 text-sm md:justify-self-center">

                      {String(index + 1).padStart(2, "0")}

                    </span>

                    <div className="relative z-10">

                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">

                        Phase {String(index + 1).padStart(2, "0")}

                      </p>

                      <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">

                        {step.title}

                      </h3>

                      <p className="text-sm font-medium leading-relaxed text-white/85">

                        {step.description}

                      </p>

                    </div>

                  </li>

                ))}

              </ol>

            </div>

          </ScrollReveal>

        </div>

      </div>

    </section>

  );

}


