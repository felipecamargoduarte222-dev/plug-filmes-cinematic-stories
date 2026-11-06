import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ClientsGrid, StatementBand, TeamSection, WhatWeDo } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem somos — Plug Filmes" },
      {
        name: "description",
        content:
          "Desde 2008 a Plug Filmes cria filmes para múltiplos segmentos em todo o Brasil. Conheça nossa história, nosso time e os clientes que confiam em nós.",
      },
      { property: "og:title", content: "Quem somos — Plug Filmes" },
      {
        property: "og:description",
        content: "Especialistas em contar boas histórias desde 2008, em Santa Rosa – RS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "2008", text: "Nasce a Plug Filmes em Santa Rosa, no noroeste gaúcho, com a missão de contar boas histórias." },
  { year: "2013", text: "A marca se consolida e passa a atender cooperativas, indústrias e grandes marcas do agronegócio." },
  { year: "2020", text: "Nos tornamos multiplataforma: webséries, conteúdo para redes e transmissões entram no portfólio." },
  { year: "Hoje", text: "Filmes para todo o País, com padrão de cinema e um time sênior em cada etapa da produção." },
];

const VALUES = [
  { title: "Olhar autoral", text: "Cada marca tem uma voz. Nosso trabalho é encontrá-la e traduzi-la em imagem." },
  { title: "Rigor técnico", text: "Equipamento de cinema e processos testados em centenas de produções." },
  { title: "Proximidade", text: "Relacionamento direto, do briefing à entrega final — sem intermediários." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        videoId="syvtVlB-yks"
        title={
          <>
            Boas histórias
            <br />
            desde 2008
          </>
        }
        intro="Somos uma produtora audiovisual de Santa Rosa – RS. Criamos filmes que conectam pessoas a marcas — no campo, na cidade e em todas as telas."
      />

      <WhatWeDo videoId="FjK6XBGodsA" />
      <StatementBand />

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
          <Reveal>
            <p className="eyebrow">Nossa trajetória:</p>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 100} className="bg-background p-8 md:p-10">
                <p className="font-wide text-5xl font-bold text-foreground md:text-6xl">{t.year}</p>
                <span className="mt-6 block h-px w-10 bg-hairline" />
                <p className="mt-6 leading-relaxed text-muted-foreground">{t.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 grid gap-12 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <h3 className="font-serif text-4xl italic text-foreground">{v.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <div className="h-px bg-border" />
      <ClientsGrid />
      <CtaBand />
    </>
  );
}
