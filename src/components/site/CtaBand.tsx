import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Vamos contar a sua história?",
  subtitle = "Conte pra gente o seu desafio. Respondemos em até 24 horas úteis.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
        <Reveal>
          <p className="eyebrow">Próximo projeto</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-10 max-w-5xl font-wide text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-8xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg text-muted-foreground">{subtitle}</p>
          <Link
            to="/contato"
            className="group inline-flex items-center gap-4 border border-foreground px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
          >
            Solicitar orçamento
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
