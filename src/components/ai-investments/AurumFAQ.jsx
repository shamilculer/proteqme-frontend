"use client";

import { itemKey, listKey } from "@/lib/listKey";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { aurumFaqs } from "@/data/aurumFaqs";

export default function AurumFAQ() {
  return (
    <section className="section-aurum-light w-full py-16 md:py-20">
      <div className="container relative z-10">
        <ScrollReveal className="mb-10 max-w-2xl md:mb-12">
          <p className="aurum-section-label">Investor FAQ</p>
          <h2 className="text-section-heading text-foreground">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <Accordion
            type="single"
            collapsible
            className="mx-auto flex w-full max-w-3xl flex-col gap-0 border border-zinc-200 bg-white"
          >
            {aurumFaqs.map((faq, index) => (
              <AccordionItem
                key={itemKey(faq, index, ["question", "title"])}
                value={`faq-${index}`}
                className="border-b border-zinc-200 last:border-b-0"
              >
                <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-foreground hover:no-underline md:px-6 [&_[data-slot=accordion-trigger-icon]]:text-zinc-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="border-t border-zinc-100 bg-zinc-50/80 px-5 pb-5 text-sm leading-relaxed text-zinc-600 md:px-6 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
