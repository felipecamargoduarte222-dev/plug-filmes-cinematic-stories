import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { QualitySection, StatementBand, WhatWeDo } from "@/components/site/Sections";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { VideoCard } from "@/components/site/VideoCard";
import { LATEST_VIDEOS } from "@/lib/videos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plug Filmes — Filmes com qualidade de cinema | Santa Rosa, RS" },
      {
        name: "description",
        content:
          "Produtora audiovisual de Santa Rosa – RS. Filmes institucionais, campanhas publicitárias, manifestos e webséries para marcas de todo o Brasil desde 2008.",
      },
      { property: "og:title", content: "Plug Filmes — Filmes com qualidade de cinema" },
      {
        property: "og:description",
        content: "Produtora audiovisual de Santa Rosa – RS. Contamos boas histórias desde 2008.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = LATEST_VIDEOS.slice(0, 7);
  return (
    <>
      <HeroSlider />
      <WhatWeDo />
      <QualitySection />

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-12 md:pb-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">Últimos filmes:</p>
              <h2 className="mt-10 font-wide text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-7xl">
                Recém-saídos
                <br />
                da ilha de edição
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
              >
                Ver portfólio completo
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="md:col-span-2 lg:row-span-2">
              <VideoCard video={featured[0]} index={0} size="lg" className="h-full [&>div]:h-full" />
            </Reveal>
            {featured.slice(1).map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 90}>
                <VideoCard video={v} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatementBand />

      <section className="bg-background py-20">
        <div className="mx-auto mb-10 max-w-[1600px] px-6 md:px-12">
          <p className="eyebrow">Quem confia na Plug:</p>
        </div>
        <ClientsMarquee />
      </section>

      <CtaBand />
    </>
  );
}
