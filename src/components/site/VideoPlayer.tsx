import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { embedUrl, videoById } from "@/lib/videos";

interface VideoPlayerContextValue {
  open: (id: string) => void;
}

const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(null);

export function useVideoPlayer() {
  const ctx = useContext(VideoPlayerContext);
  if (!ctx) throw new Error("useVideoPlayer must be used inside VideoPlayerProvider");
  return ctx;
}

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<string | null>(null);
  const open = useCallback((id: string) => setCurrent(id), []);
  const close = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [current, close]);

  const video = current ? videoById(current) : undefined;

  return (
    <VideoPlayerContext.Provider value={{ open }}>
      {children}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={video ? `${video.client} — ${video.title}` : "Vídeo"}
          className="fixed inset-0 z-[100] flex animate-in fade-in items-center justify-center bg-overlay/95 p-4 backdrop-blur-sm duration-500 md:p-12"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fechar vídeo"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="w-full max-w-6xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden bg-card shadow-elevated">
              <iframe
                src={embedUrl(current)}
                title={video?.title ?? "Vídeo Plug Filmes"}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            {video && (
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {video.client}
                </p>
                <p className="font-serif text-2xl italic text-foreground">{video.title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </VideoPlayerContext.Provider>
  );
}
