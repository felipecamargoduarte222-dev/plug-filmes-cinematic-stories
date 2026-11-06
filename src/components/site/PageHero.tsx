import type { ReactNode } from "react";
import { thumb } from "@/lib/videos";

export function PageHero({
  eyebrow,
  title,
  intro,
  videoId,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  videoId: string;
}) {
  return (
    <section className="grain relative flex min-h-[78vh] items-end overflow-hidden bg-background">
      <img
        src={thumb(videoId)}
        alt=""
        className="absolute inset-0 h-full w-full animate-kenburns object-cover media-mono opacity-60"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-fade-bottom" />
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 md:px-12 md:pb-28">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1
          className="mt-10 max-w-6xl animate-fade-up font-wide text-5xl font-bold uppercase leading-[0.92] text-foreground md:text-8xl lg:text-9xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {intro && (
          <div
            className="mt-10 max-w-2xl animate-fade-up text-lg leading-relaxed text-foreground/80 md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            {intro}
          </div>
        )}
      </div>
    </section>
  );
}
