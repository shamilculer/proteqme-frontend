import PageTitle from "@/components/global/PageTitle";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import ContactForm from "@/components/forms/ContactForm";
import {
  OFFICE_ADDRESS,
  OFFICE_MAP_EMBED,
  OFFICE_MAP_URL,
  SITE_EMAIL,
  UK_HOTLINE,
  UK_HOTLINE_DISPLAY,
  US_HOTLINE,
  US_HOTLINE_DISPLAY,
} from "@/data/siteContact";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Proteq",
  description:
    "Speak with Proteq's compliance experts about advisory, training, or RegTech systems. UK and US hotlines, email, and London office details.",
};

const contactInfo = [
  {
    title: "UK Hotline",
    info: UK_HOTLINE_DISPLAY,
    icon: Phone,
    link: `tel:${UK_HOTLINE}`,
  },
  {
    title: "US Hotline",
    info: US_HOTLINE_DISPLAY,
    icon: Phone,
    link: `tel:${US_HOTLINE}`,
  },
  {
    title: "Email Us",
    info: SITE_EMAIL,
    icon: Mail,
    link: `mailto:${SITE_EMAIL}`,
  },
  {
    title: "Visit Us",
    info: OFFICE_ADDRESS,
    icon: MapPin,
    link: OFFICE_MAP_URL,
  },
];

const ContactPage = () => {
  return (
    <main className="overflow-x-hidden">
      <PageTitle title="Contact Us" />

      <section className="section-light-white w-full border-t border-zinc-200/70 py-20 md:py-28">
        <div className="container">
          <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Let&apos;s Talk
              </p>
              <h2 className="text-section-heading max-w-xl text-foreground">
                Speak With Our Compliance Experts
              </h2>
            </div>
            <p className="text-body max-w-lg text-zinc-600">
              Whether you need compliance guidance, want to explore training
              options, or are evaluating systems, we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <div className="flex flex-col gap-3 sm:gap-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      href={item.link}
                      key={item.title}
                      target={item.title === "Visit Us" ? "_blank" : undefined}
                      rel={
                        item.title === "Visit Us"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_4px_25px_rgba(13,13,20,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_12px_35px_rgba(13,13,20,0.08)] sm:gap-4 sm:p-5"
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
                        <div className="icon-ghost-pink flex size-12 shrink-0 items-center justify-center rounded-2xl sm:size-14">
                          <Icon className="size-5 text-primary sm:size-6" />
                        </div>

                        <div className="min-w-0">
                          <h5 className="text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                            {item.title}
                          </h5>
                          <p className="mt-0.5 break-words text-sm font-medium leading-snug text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800 sm:text-base">
                            {item.info}
                          </p>
                        </div>
                      </div>

                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:bg-foreground/5 sm:group-hover:text-foreground">
                        <ChevronRight className="size-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0 w-full lg:sticky lg:top-24 lg:self-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden border-t border-zinc-200/70">
        <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] md:aspect-[2.4/1]">
          <iframe
            src={OFFICE_MAP_EMBED}
            title="Proteq office location — London"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
};

export default ContactPage;
