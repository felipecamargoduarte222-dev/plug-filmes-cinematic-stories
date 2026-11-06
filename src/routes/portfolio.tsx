import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { VideoCard } from "@/components/site/VideoCard";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { LATEST_VIDEOS, type VideoCategory } from "@/lib/videos";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Plug Filmes" },
      {
        name: "description",
        content:
          "Os 15 filmes mais recentes da Plug Filmes: campanhas, institucionais, manifestos e relatórios de sustentabilidade para Coprel, 3tentos, Sicredi, Cotripal e mais.",
      },
      { property: "og:title", content: "Portfólio — Plug Filmes" },
      {
        property: "og:description",
        content: "Campanhas, institucionais e manifestos com qualidade de cinema.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS: Array<"Todos" | VideoCategory> = [
  "Todos",
  "Campanha",
  "Institucional",
  "Manifesto",
  "Sustentabilidade",
  "Reel",
];

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const list = useMemo(
    () => (filter === "Todos" ? LATEST_VIDEOS : LATEST_VIDEOS.filter((v) => v.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        videoId="Rx5ZYE62y-Q"
        title={
          <>
            Filmes que
            <br />
            movem marcas
          </>
        }
        intro="Os 15 trabalhos mais recentes publicados no nosso canal. Clique em qualquer filme para assistir."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 pb-28 md:px-12">
          <div className="sticky top-16 z-30 -mx-6 flex gap-2 overflow-x-auto bg-background/85 px-6 py-5 backdrop-blur-xl md:-mx-12 md:px-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "shrink-0 border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500",
                  filter === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/70 hover:border-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto hidden shrink-0 items-center text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
              {String(list.length).padStart(2, "0")} filmes
            </span>
          </div>

          <div key={filter} className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((v, i) => (
              <Reveal
                key={v.id}
                delay={(i % 3) * 90}
                className={cn(i === 0 && filter === "Todos" && "md:col-span-2 lg:col-span-2 lg:row-span-2")}
              >
                <VideoCard
                  video={v}
                  index={i}
                  size={i === 0 && filter === "Todos" ? "lg" : "md"}
                  className={cn(i === 0 && filter === "Todos" && "h-full [&>div]:h-full")}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex justify-center">
            <a
              href={SITE.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 border border-foreground px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
            >
              Ver todos no YouTube
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Seu filme pode ser o próximo." />
    </>
  );
}
