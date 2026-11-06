import { useState } from "react";
import { Play } from "lucide-react";
import { thumb, type Video } from "@/lib/videos";
import { useVideoPlayer } from "./VideoPlayer";
import { cn } from "@/lib/utils";

export function VideoCard({
  video,
  index,
  className,
  size = "md",
}: {
  video: Video;
  index?: number;
  className?: string;
  size?: "md" | "lg";
}) {
  const { open } = useVideoPlayer();
  const [src, setSrc] = useState(thumb(video.id));

  return (
    <button
      onClick={() => open(video.id)}
      className={cn(
        "group relative block w-full overflow-hidden bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label={`Assistir: ${video.client} — ${video.title}`}
    >
      <div className={cn("relative w-full overflow-hidden", size === "lg" ? "aspect-[16/9]" : "aspect-video")}>
        <img
          src={src}
          onError={() => setSrc(thumb(video.id, "hq"))}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover media-mono group-hover:scale-105 group-hover:[filter:grayscale(0)_brightness(0.9)]"
        />
        <div className="absolute inset-0 bg-card-gradient" />
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-foreground/70 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Play className="ml-1 h-6 w-6 fill-foreground text-foreground" />
        </div>
        {typeof index === "number" && (
          <span className="absolute right-4 top-4 font-wide text-xs font-semibold tracking-widest text-foreground/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/70">{video.client}</p>
          <span className="mt-2 block h-px w-8 bg-hairline transition-all duration-700 group-hover:w-16" />
          <p
            className={cn(
              "mt-3 font-semibold leading-tight text-foreground",
              size === "lg" ? "text-2xl md:text-4xl" : "text-lg md:text-xl",
            )}
          >
            {video.title}
          </p>
        </div>
      </div>
    </button>
  );
}
