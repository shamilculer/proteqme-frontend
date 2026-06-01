"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function ProgressiveCounter({ value, duration = 2000, shouldAnimate }) {
  const endValue = Number(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || Number.isNaN(endValue)) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progressRatio = Math.min((timestamp - startTime) / duration, 1);
      const easeRatio = progressRatio * (2 - progressRatio);

      setCount(Math.floor(easeRatio * endValue));

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration, shouldAnimate]);

  return <>{count.toLocaleString()}</>;
}

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Professionals Trained",
  },
  {
    value: 40,
    suffix: "+",
    label: "Programme Modules",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

const LearningTrustStrip = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-y border-zinc-100 bg-white py-14 md:py-16"
      aria-label="Learning impact statistics"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#E25C8F" strokeWidth="1" fill="none" opacity="0.18">
            <path d="M0 120 L200 80 L420 140 L640 60 L860 110 L1080 40 L1200 90" />
            <path d="M0 160 L180 100 L400 170 L620 90 L840 150 L1060 70 L1200 130" />
          </g>
          <g fill="#E25C8F" opacity="0.22">
            <circle cx="200" cy="80" r="4" />
            <circle cx="420" cy="140" r="4" />
            <circle cx="640" cy="60" r="4" />
            <circle cx="860" cy="110" r="4" />
            <circle cx="1080" cy="40" r="4" />
          </g>
        </svg>
      </div>

      <div className="container relative">
        <ScrollReveal yOffset={12}>
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-5xl font-semibold tracking-tight text-[#E25C8F] md:text-[56px]">
                  <ProgressiveCounter
                    value={stat.value}
                    shouldAnimate={inView}
                  />
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-500 md:text-base">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LearningTrustStrip;
