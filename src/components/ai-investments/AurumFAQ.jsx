"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { aurumFaqs } from "@/data/aurumFaqs";

const AurumFAQ = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-secondary via-primary/80 to-secondary-dark from-20% to-80% py-18 text-white md:py-24">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#E25C8F]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-[#E25C8F]/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,21,37,0.45)_0%,transparent_70%)]" />

      <div className="container relative z-10">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061525]/55 px-4 py-1.5 shadow-[0_8px_32px_rgba(6,21,37,0.35)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-100">
              Common Questions
            </span>
          </div>

          <h2 className="text-3xl leading-tight text-white drop-shadow-[0_2px_16px_rgba(6,21,37,0.85)] md:text-[44px]">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <Accordion
            type="single"
            collapsible
            className="mx-auto flex w-full max-w-3xl flex-col gap-3"
          >
            {aurumFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-[18px] border border-white/15 bg-[#061525]/88 shadow-[0_16px_48px_rgba(6,21,37,0.45)] backdrop-blur-lg not-last:border-b-0"
              >
                <AccordionTrigger className="px-5 py-5 text-base font-semibold text-white hover:no-underline md:px-6 md:py-5 [&_[data-slot=accordion-trigger-icon]]:text-[#E25C8F]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="border-t border-white/10 bg-[#120823]/40 px-5 pb-5 text-sm leading-relaxed text-zinc-100 md:px-6 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AurumFAQ;
