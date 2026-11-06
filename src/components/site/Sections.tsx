import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { useVideoPlayer } from "./VideoPlayer";
import { CLIENTS, TEAM } from "@/lib/site";
import { REEL_ID, embedUrl, thumb } from "@/lib/videos";

/** "O que fazemos" — video left, statement right. */
export function WhatWeDo({ videoId = "WriKoCgILjk" }: { videoId?: string }) {
  const { open } = useVideoPlayer();
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow">O que fazemos:</p>
        </Reveal>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <button
              onClick={() => open(videoId)}
              className="group relative block aspect-square w-full overflow-hidden bg-card"
              aria-label="Assistir ao vídeo"
            >
              <img
                src={thumb(videoId)}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover media-mono group-hover:scale-105 group-hover:[filter:grayscale(0)]"
              />
              <span className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/80 transition-all duration-500 group-hover:scale-110 group-hover:bg-foreground/10">
                <Play className="ml-1.5 h-10 w-10 text-foreground" strokeWidth={1.25} />
              </span>
            </button>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-wide text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
              Somos especialistas em contar boas histórias
            </h2>
            <span className="mt-8 block h-px w-full bg-hairline" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              Seu público está esperando para se conectar com sua marca e nós sabemos exatamente
              como fazer isso.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Do roteiro à última correção de cor, cada filme é pensado para emocionar, informar e
              gerar resultado — em qualquer tela, em qualquer formato.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Statement band over a muted, monochrome reel. */
export function StatementBand() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className="grain relative overflow-hidden bg-overlay">
      <div className="absolute inset-0 opacity-35 [filter:grayscale(1)_blur(2px)]">
        <img src={thumb("Rx5ZYE62y-Q")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        {mounted && (
          <iframe
            src={embedUrl(REEL_ID, { background: true })}
            title=""
            tabIndex={-1}
            allow="autoplay; encrypted-media"
            className="iframe-cover scale-125"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-overlay/50" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground md:text-2xl">
            Criamos filmes para múltiplos segmentos em todo o País desde 2008.
            <br className="hidden md:block" /> Ao longo desse tempo nos adaptamos, nos tornamos
            multiplataforma e construímos autoridade em nosso segmento.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-10 font-serif text-3xl italic text-foreground md:text-5xl">
            Sabemos que entregar qualidade é garantir resultados.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <Link
            to="/contato"
            className="mt-12 inline-flex border-2 border-foreground px-6 py-4 text-sm font-semibold text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
          >
            Solicitar Orçamento
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/** "Padrão de cinema" — the size and quality of every delivery. */
const STATS = [
  { value: "2008", label: "Contando histórias desde" },
  { value: "18", label: "Anos de mercado" },
  { value: `${CLIENTS.length}+`, label: "Marcas que confiam na Plug" },
  { value: "4K", label: "Padrão mínimo de captação" },
];

const SPECS = [
  { n: "01", title: "Captação em 4K e 6K", text: "Câmeras de cinema, lentes cine e sensores full-frame para imagens com profundidade e textura de longa-metragem." },
  { n: "02", title: "Color grading", text: "Tratamento de cor profissional, quadro a quadro, que dá identidade visual única a cada marca." },
  { n: "03", title: "Som direto & sound design", text: "Captação de áudio limpa, trilhas, locução e mixagem pensadas para envolver o espectador." },
  { n: "04", title: "Imagens aéreas", text: "Drones com operação certificada para revelar escala — do campo à indústria." },
  { n: "05", title: "Roteiro & direção", text: "Narrativas construídas a partir do seu objetivo de negócio, com direção de cena experiente." },
  { n: "06", title: "Entregas multiplataforma", text: "Versões em 16:9, 9:16 e 1:1, cortes para TV, redes sociais, eventos e web — tudo do mesmo set." },
];

export function QualitySection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Padrão de entrega:</p>
            <h2 className="mt-10 font-wide text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-7xl">
              Qualidade
              <br />
              de cinema.
              <br />
              <span className="font-serif font-normal normal-case italic text-foreground/70">
                Em cada frame.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="self-end">
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              Cada projeto da Plug Filmes passa pelo mesmo rigor técnico de uma produção
              cinematográfica: equipe especializada, equipamento de ponta e um processo de
              pós-produção obsessivo por detalhes. O resultado são filmes que elevam a percepção da
              sua marca — e permanecem na memória.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 border-l border-t border-border lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="border-b border-r border-border p-6 md:p-10">
              <p className="font-wide text-5xl font-bold text-foreground md:text-7xl">{s.value}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 100} className="group bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
              <span className="font-wide text-sm font-semibold text-muted-foreground">{s.n}</span>
              <h3 className="mt-8 text-2xl font-semibold text-foreground">{s.title}</h3>
              <span className="mt-5 block h-px w-8 bg-hairline transition-all duration-700 group-hover:w-20" />
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "O poder de bons profissionais" — team grid. */
export function TeamSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow">O poder de bons profissionais:</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            O olhar certo é o que determina a melhor experiência possível para seu público. Por
            isso, nosso time é composto por especialistas com extensa habilidade em direção de cena,
            fotografia, edição de vídeo, criação de roteiros e relacionamento.
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            Isso nos dá segurança para dizermos “sim” a novos projetos, por mais desafiadores que
            sejam.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="group relative aspect-square overflow-hidden bg-card">
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center font-wide text-[9rem] font-black text-foreground/[0.06] transition-all duration-700 group-hover:scale-110 group-hover:text-foreground/10"
                >
                  {m.name
                    .split(" ")
                    .filter((p) => /^[A-ZÁ-Ú]/.test(p))
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div className="absolute inset-0 bg-card-gradient" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-wide text-xl font-extrabold text-foreground">{m.name}</h3>
                  <span className="mt-2 block h-0.5 w-12 bg-hairline transition-all duration-700 group-hover:w-24" />
                  <p className="mt-2 text-sm text-foreground/75">{m.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={TEAM.length * 100}>
            <Link
              to="/contato"
              className="group relative flex aspect-square flex-col justify-end overflow-hidden border border-dashed border-foreground/30 p-6 transition-colors duration-500 hover:border-foreground"
            >
              <svg
                viewBox="0 0 100 100"
                aria-hidden
                className="absolute -right-6 -top-6 h-3/4 w-3/4 text-foreground/10 transition-transform duration-700 group-hover:rotate-6"
              >
                <path d="M25 12 L85 50 L25 88 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
              </svg>
              <p className="font-wide text-2xl font-bold leading-tight text-foreground">
                Faça parte
                <br />
                da equipe
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground">
                Envie seu portfólio <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** "Clientes" — typographic grid. */
export function ClientsGrid() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="eyebrow">Clientes:</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c, i) => (
            <Reveal key={c} delay={(i % 6) * 60} className="bg-surface">
              <div className="flex h-32 items-center justify-center px-4 text-center transition-colors duration-500 hover:bg-surface-raised">
                <span className="font-wide text-lg font-bold uppercase leading-tight text-foreground/85 md:text-xl">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
