import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CircleUserRound, Clapperboard, MessageSquareText, Play, SquarePen } from "lucide-react";
import { embedUrl, thumb } from "@/lib/videos";
import { useVideoPlayer } from "./VideoPlayer";
import { cn } from "@/lib/utils";

const SLIDES = [
  { id: "TZDMJJnP9AQ", client: "Cambaí Sementes", headline: ["Plantar é", "investir no futuro"] },
  { id: "Oswmo27gfXE", client: "Coprel", headline: ["Conectando você", "ao que importa"] },
  { id: "iy4NCkXJN98", client: "3tentos", headline: ["Relatório de", "sustentabilidade"] },
  { id: "F_Dk4AiLrVI", client: "Tritec", headline: ["Quarenta anos", "de história"] },
];

const DURATION = 8000;

const RAIL = [
  { to: "/quem-somos", label: "Quem somos", Icon: CircleUserRound },
  { to: "/portfolio", label: "Portfólio", Icon: Clapperboard },
  { to: "/servicos", label: "Serviços", Icon: SquarePen },
  { to: "/contato", label: "Contato", Icon: MessageSquareText },
] as const;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [bgReady, setBgReady] = useState(false);
  const { open } = useVideoPlayer();

  useEffect(() => {
    setBgReady(false);
    const show = setTimeout(() => setBgReady(true), 1800);
    const next = setTimeout(() => setActive((a) => (a + 1) % SLIDES.length), DURATION);
    return () => {
      clearTimeout(show);
      clearTimeout(next);
    };
  }, [active]);

  const slide = SLIDES[active];

  return (
    <section className="relative h-[100svh] min-h-[640px] bg-overlay md:pr-20 md:pt-3">
      <div className="grain relative h-full overflow-hidden md:ml-20 md:rounded-t-[2.5rem]">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1400ms]",
              i === active ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== active}
          >
            <img
              src={thumb(s.id)}
              alt=""
              className={cn(
                "absolute inset-0 h-full w-full object-cover media-mono",
                i === active && "animate-kenburns",
              )}
            />
            {i === active && (
              <div
                className={cn(
                  "absolute inset-0 overflow-hidden transition-opacity duration-[1500ms] [filter:grayscale(1)_contrast(1.05)_brightness(0.8)]",
                  bgReady ? "opacity-100" : "opacity-0",
                )}
              >
                <iframe
                  src={embedUrl(s.id, { background: true })}
                  title=""
                  tabIndex={-1}
                  allow="autoplay; encrypted-media"
                  className="iframe-cover scale-125"
                />
              </div>
            )}
          </div>
        ))}
        <div className="absolute inset-0 z-[2] bg-hero-gradient" />

        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-24">
          <div key={active} className="max-w-[1400px]">
            <p className="animate-fade-up text-2xl font-light text-foreground md:text-4xl">
              {slide.client}
            </p>
            <span
              className="mt-4 block h-1 w-24 origin-left animate-line-grow bg-hairline"
              style={{ animationDelay: "200ms" }}
            />
            <h1
              className="mt-8 animate-fade-up font-wide text-[13vw] font-semibold uppercase leading-[0.9] text-foreground md:text-[7.5vw]"
              style={{ animationDelay: "150ms" }}
            >
              {slide.headline[0]}
              <br />
              {slide.headline[1]}
            </h1>
            <button
              onClick={() => open(slide.id)}
              className="group mt-10 inline-flex animate-fade-up items-center gap-5 border border-foreground/60 px-6 py-3 text-base text-foreground transition-all duration-500 hover:border-foreground hover:bg-foreground hover:text-background md:text-xl"
              style={{ animationDelay: "320ms" }}
            >
              Assista ao vídeo
              <span className="flex gap-2">
                {[0, 1, 2].map((n) => (
                  <Play
                    key={n}
                    className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1"
                    style={{ transitionDelay: `${n * 60}ms` }}
                    strokeWidth={1.75}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground/60 md:left-24">
          <span className="font-wide font-semibold text-foreground">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-16 bg-foreground/30" />
          <span>{String(SLIDES.length).padStart(2, "0")}</span>
          <span className="ml-6 hidden sm:inline">Role para explorar</span>
        </div>
      </div>

      {/* Right rail — like the classic Plug Filmes layout */}
      <aside className="absolute inset-y-0 right-0 z-20 hidden w-20 flex-col items-center justify-between py-24 md:flex">
        <nav className="flex flex-col items-center gap-8" aria-label="Atalhos">
          {RAIL.map(({ to, label, Icon }) => (
            <Link key={to} to={to} aria-label={label} className="group relative text-foreground">
              <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
              <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground px-3 py-1 text-xs font-semibold text-background opacity-0 transition-all duration-300 group-hover:right-12 group-hover:opacity-100">
                {label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-5" role="tablist" aria-label="Destaques">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`Destaque ${i + 1}: ${s.client}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-3.5 w-3.5 rounded-full border border-foreground transition-all duration-500",
                i === active ? "bg-foreground" : "bg-transparent hover:bg-foreground/40",
              )}
            />
          ))}
        </div>
        <div className="h-24" />
      </aside>
    </section>
  );
}
