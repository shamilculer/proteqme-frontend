"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const DEFAULT_VIDEO_ID = "iSDJ68Z-8sU";

export default function AurumVideoPlayer({
  videoId = DEFAULT_VIDEO_ID,
  className,
  playLabel = "Play video",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-[18px] bg-[#061525] shadow-[0_20px_60px_rgba(35,17,67,0.1)] ring-1 ring-zinc-200/80",
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
            sizes="(min-width: 1024px) 50vw, 100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#061525]/35 transition group-hover:bg-[#061525]/45" />

          <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-[#E25C8F] text-white shadow-lg transition group-hover:scale-105">
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
