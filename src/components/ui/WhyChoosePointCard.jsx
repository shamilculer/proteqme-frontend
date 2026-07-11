"use client";

import CmsIcon from "@/components/ui/CmsIcon";
import FeatureIconBox from "@/components/ui/FeatureIconBox";
import { cn } from "@/lib/utils";

export default function WhyChoosePointCard({ point, index, className }) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[260px] h-full flex-col overflow-hidden rounded-[calc(1rem-1.5px)] bg-white p-6 transition duration-300",
        className
      )}
    >
      <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-[#231143]/5 transition group-hover:text-primary/10">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative flex h-full flex-col">
        <FeatureIconBox size="lg" className="size-20! rounded-full!">
          <CmsIcon
            lucide={point.lucide || point.icon}
            src={point.src}
            alt={point.alt}
            icon={typeof point.icon === "function" ? point.icon : undefined}
            className="size-10"
            strokeWidth={1.5}
          />
        </FeatureIconBox>

        <div className="mt-auto pt-8">
          <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-primary" />
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
}
