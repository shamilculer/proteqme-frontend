"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  YOUTUBE_THUMBNAIL_QUALITIES,
  getYouTubeThumbnailUrl,
  getYouTubeWatchUrl,
  parseYouTubeVideoId,
} from "@/lib/youtube";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

export const AURUM_VIDEO_IDS = {
  overview: "iSDJ68Z-8sU",
  ecosystem: "uKgSgGClewc",
  platform: "iSDJ68Z-8sU",
};

function YouTubeThumbnail({ videoId, className }) {
  const [qualityIndex, setQualityIndex] = useState(0);

  const thumbnailSrc = useMemo(() => {
    const quality = YOUTUBE_THUMBNAIL_QUALITIES[qualityIndex];
    return getYouTubeThumbnailUrl(videoId, quality);
  }, [videoId, qualityIndex]);

  if (!thumbnailSrc) return null;

  return (
    <Image
      src={thumbnailSrc}
      alt=""
      fill
      className={className}
      sizes="(min-width: 1024px) 45vw, 100vw"
      unoptimized
      onError={() => {
        setQualityIndex((current) =>
          current < YOUTUBE_THUMBNAIL_QUALITIES.length - 1 ? current + 1 : current
        );
      }}
    />
  );
}

export default function AurumVideoPlayer({
  videoId = AURUM_VIDEO_IDS.overview,
  className,
  playLabel = "Play video",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const resolvedVideoId = parseYouTubeVideoId(videoId) || AURUM_VIDEO_IDS.overview;
  const youtubeUrl = getYouTubeWatchUrl(resolvedVideoId);

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
          <YouTubeThumbnail
            videoId={resolvedVideoId}
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-[#231143]/25 to-black/15 transition group-hover:from-black/60 group-hover:via-[#231143]/35" />

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
