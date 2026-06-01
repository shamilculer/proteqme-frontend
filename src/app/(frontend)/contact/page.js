import PageTitle from "@/components/global/PageTitle";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

const contactInfo = [
  {
    title: "Call Us",
    info: "+971 xx xxx xxxx",
    icon: Phone,
    link: "tel:+971xxxxxxxx",
  },
  {
    title: "Email Us",
    info: "info@proteq.com",
    icon: Mail,
    link: "mailto:info@proteq.com",
  },
  {
    title: "Visit Us",
    info: "Office 123, Business Bay, Dubai",
    icon: MapPin,
    link: "https://goo.gl/maps/xxxxxxx",
  },
];

const ContactPage = () => {
  return (
    <main className="overflow-x-hidden">
      <PageTitle title="Contact Us" />

      <section className="overflow-x-hidden py-18 md:py-22">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5 shadow-xs">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Let&apos;s Talk
                </span>
              </div>

              <h2 className="mb-3 text-3xl font-bold leading-tight text-[#231143] md:text-[42px]">
                Speak With Our Compliance Experts
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                Whether you need compliance guidance, want to explore training
                options, or are evaluating systems, we are here to help.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      href={item.link}
                      key={item.title}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_4px_25px_rgba(35,17,67,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_12px_35px_rgba(35,17,67,0.08)] sm:gap-4 sm:p-5"
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#231143] to-[#E25C8F] text-white shadow-xs transition duration-300 group-hover:scale-105 sm:size-14">
                          <Icon className="size-5 sm:size-6" />
                        </div>

                        <div className="min-w-0">
                          <h5 className="text-sm font-bold text-[#231143] transition-colors duration-300 group-hover:text-[#E25C8F]">
                            {item.title}
                          </h5>
                          <p className="mt-0.5 break-words text-base font-medium leading-snug text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700 sm:text-lg">
                            {item.info}
                          </p>
                        </div>
                      </div>

                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:bg-[#231143]/5 sm:group-hover:text-[#231143]">
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

      <section className="w-full overflow-hidden">
        <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] md:aspect-[2.4/1]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03271722235!2d54.897828656500074!3d25.075658395396644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1780078319534!5m2!1sen!2sin"
            title="Proteq office location map"
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
