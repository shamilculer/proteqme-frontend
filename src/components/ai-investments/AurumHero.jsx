import Image from "next/image";
import Link from "next/link";

export default function AurumHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[520px] md:min-h-[600px]">
        <Image
          src="/ai-investment.webp"
          alt="AURUM Foundation professionals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="aurum-hero-overlay absolute inset-0" />

        <div className="container relative z-10 flex min-h-[520px] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[600px] md:py-24">
          <h1 className="aurum-heading-light mb-6 max-w-4xl text-white">
            AURUM Foundation – The Future of Finance
          </h1>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
            AURUM Foundation connects individuals and businesses worldwide
            through a secure, transparent, and AI-driven fintech ecosystem.
            Built on advanced Artificial Intelligence and Blockchain technology,
            AURUM reinvents finance by combining capital growth, liquidity
            management, and real-world payment systems in one platform.
          </p>
          <Link
            href="#aurum-intro"
            className="btn-aurum-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
