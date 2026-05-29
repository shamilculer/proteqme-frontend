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
    <main>
      <PageTitle title="Contact Us" />

      <section className="my-22">
        <div className="container flex gap-22">
          <div className="w-full md:w-2/5">
            <div className="inline-flex items-center gap-2 mb-4 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
              </span>
              <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                Let&apos;s Talk
              </span>
            </div>

            <h2 className="text-[32px] md:text-[42px] font-bold text-[#231143] mb-1">
              Speak With Our Compliance Experts
            </h2>
            <p>
              Whether you need compliance guidance, want to explore training
              options, or are evaluating systems, we are here to help.
            </p>
            <div className="mt-8 flex flex-col gap-5">
              {contactInfo.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="group flex items-center justify-between p-5 bg-white border border-zinc-150 rounded-2xl shadow-[0_4px_25px_rgba(35,17,67,0.02)] hover:shadow-[0_12px_35px_rgba(35,17,67,0.08)] hover:-translate-y-0.5 hover:border-zinc-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    {/* Icon Container with Swipe Gradient and Scale Animations */}
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#231143] to-[#E25C8F] flex items-center justify-center group-hover:scale-105 text-white shadow-xs">
                      <item.icon className="size-6" />
                    </div>

                    {/* Text block with Color Highlights on Hover */}
                    <div>
                      <h5 className="text-sm font-bold text-[#231143] group-hover:text-[#E25C8F] transition-colors duration-300">
                        {item.title}
                      </h5>
                      <p className="text-zinc-500 font-medium text-lg mt-0.5 transition-colors duration-300 group-hover:text-zinc-700">
                        {item.info}
                      </p>
                    </div>
                  </div>

                  {/* Elegant interactive chevron indicator */}
                  <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 opacity-0 transform -translate-x-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-[#231143]/5 group-hover:text-[#231143]">
                    <ChevronRight className="size-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/5 flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03271722235!2d54.897828656500074!3d25.075658395396644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1780078319534!5m2!1sen!2sin" width="600" height="500" style={{ border: 0, width: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <NewsletterSignup />
    </main>
  );
};

export default ContactPage;
