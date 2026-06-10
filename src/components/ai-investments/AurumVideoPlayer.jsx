"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

export const AURUM_VIDEO_IDS = {
  overview: "iSDJ68Z-8sU",
  ecosystem: "uKgSgGClewc",
  platform: "iSDJ68Z-8sU",
};

export default function AurumVideoPlayer({
  videoId = AURUM_VIDEO_IDS.overview,
  className,
  playLabel = "Play video",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl border border-zinc-200/90 bg-proteq-dark shadow-[0_20px_60px_rgba(35,17,67,0.14)]",
        className
      )}
    >
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 flex w-full items-center justify-center"
          aria-label={playLabel}
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 45vw, 100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-[rgba(35,17,67,0.55)] transition group-hover:bg-[rgba(35,17,67,0.65)]" />

          <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white shadow-[0_8px_30px_rgba(35,17,67,0.25)] transition group-hover:scale-105 group-hover:bg-primary group-hover:border-primary">
            <Play className="ml-0.5 size-6 fill-white" aria-hidden />
          </span>
        </button>
      ) : (
        <div className="absolute inset-0 [&>div]:h-full! [&>div]:w-full!">
          <ReactPlayer
            url={youtubeUrl}
            width="100%"
            height="100%"
            playing
            controls
            config={{
              youtube: {
                rel: 0,
                modestbranding: 1,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
