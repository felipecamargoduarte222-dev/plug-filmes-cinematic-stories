import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { QualitySection } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { useVideoPlayer } from "@/components/site/VideoPlayer";
import { thumb } from "@/lib/videos";
import { Play } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Plug Filmes" },
      {
        name: "description",
        content:
          "Filmes institucionais, campanhas publicitárias, manifestos de marca, webséries, relatórios de sustentabilidade e conteúdo para redes sociais.",
      },
      { property: "og:title", content: "Serviços — Plug Filmes" },
      {
        property: "og:description",
        content: "Do roteiro à pós-produção: tudo o que sua marca precisa em audiovisual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { n: "01", title: "Filmes institucionais", text: "A história, a estrutura e as pessoas da sua empresa contadas com emoção e precisão.", videoId: "4Fz0HpIdaeQ" },
  { n: "02", title: "Campanhas publicitárias", text: "VTs para TV e digital com conceito forte, elenco, direção de arte e finalização premium.", videoId: "Oswmo27gfXE" },
  { n: "03", title: "Manifestos de marca", text: "Filmes que traduzem propósito e posicionamento — ideais para lançamentos e novas marcas.", videoId: "syvtVlB-yks" },
  { n: "04", title: "Webséries & documentários", text: "Narrativas em episódios que aprofundam a relação entre a marca e seu público.", videoId: "Pge6zOttNWc" },
  { n: "05", title: "Relatórios de sustentabilidade", text: "Dados ESG transformados em histórias humanas, visuais e fáceis de compartilhar.", videoId: "iy4NCkXJN98" },
  { n: "06", title: "Conteúdo para redes", text: "Cortes verticais, reels e pílulas pensadas para performance em cada plataforma.", videoId: "viuS1r8HbVA" },
];

const PROCESS = [
  { step: "Briefing", text: "Entendemos objetivo, público e onde o filme vai viver." },
  { step: "Roteiro", text: "Conceito criativo, roteiro e storyboard aprovados com você." },
  { step: "Pré-produção", text: "Locações, elenco, cronograma e plano de filmagem." },
  { step: "Captação", text: "Set com equipe sênior e equipamento de cinema." },
  { step: "Pós-produção", text: "Montagem, cor, som, motion e trilha." },
  { step: "Entrega", text: "Versões e formatos para cada canal, prontas para veicular." },
];

function ServicesPage() {
  const { open } = useVideoPlayer();
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        videoId="4Fz0HpIdaeQ"
        title={
          <>
            Do roteiro
            <br />
            à tela
          </>
        }
        intro="Uma produtora completa: criação, produção e pós-produção sob o mesmo teto — com o mesmo padrão de qualidade em cada etapa."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="eyebrow">O que entregamos:</p>
          </Reveal>
          <ul className="mt-14 border-t border-border">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 60}>
                <button
                  onClick={() => open(s.videoId)}
                  className="group grid w-full items-center gap-6 border-b border-border py-10 text-left transition-colors duration-500 hover:bg-surface md:grid-cols-[80px_1fr_1fr_240px] md:px-6"
                >
                  <span className="font-wide text-sm font-semibold text-muted-foreground">{s.n}</span>
                  <h3 className="font-wide text-3xl font-bold uppercase leading-tight text-foreground transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="max-w-md leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="relative block aspect-video overflow-hidden bg-card">
                    <img
                      src={thumb(s.videoId)}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover media-mono group-hover:scale-110 group-hover:[filter:grayscale(0)]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Play className="h-8 w-8 fill-foreground text-foreground" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="eyebrow">Como trabalhamos:</p>
            <h2 className="mt-10 max-w-3xl font-wide text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
              Seis etapas.
              <span className="font-serif font-normal normal-case italic text-foreground/70"> Zero improviso.</span>
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={(i % 3) * 100} className="bg-surface p-8 md:p-10">
                <span className="font-wide text-6xl font-bold text-foreground/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{p.step}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <QualitySection />
      <CtaBand />
    </>
  );
}
