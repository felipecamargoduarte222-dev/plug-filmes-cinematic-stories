import { CLIENTS } from "@/lib/site";

export function ClientsMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="relative overflow-hidden border-y border-border py-8 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-14 hover:[animation-play-state:paused]">
        {row.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-14 whitespace-nowrap">
            <span className="font-wide text-2xl font-bold uppercase text-foreground/80 md:text-3xl">
              {name}
            </span>
            <span className="h-2 w-2 rotate-45 bg-foreground/30" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
