import { Link } from "@tanstack/react-router";
import { CircleUserRound, Clapperboard, MessageSquareText, SquarePen } from "lucide-react";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";
import { SITE } from "@/lib/site";

const FOOTER_NAV = [
  { to: "/quem-somos", label: "Quem somos", Icon: CircleUserRound },
  { to: "/portfolio", label: "Portfólio", Icon: Clapperboard },
  { to: "/servicos", label: "Serviços", Icon: SquarePen },
  { to: "/contato", label: "Contato", Icon: MessageSquareText },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-20 md:px-16">
        <div className="grid gap-14 md:grid-cols-3 md:items-start">
          <div className="space-y-6">
            <Logo variant="cinza" className="h-12 md:h-16" />
            <SocialIcons iconClassName="h-7 w-7" />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Endereço</h3>
              <address className="space-y-1 text-sm not-italic leading-relaxed text-footer-foreground/85">
                <p>{SITE.address.line1}</p>
                <p>{SITE.address.line2}</p>
              </address>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">Contatos</h3>
              <div className="space-y-1 text-sm text-footer-foreground/85">
                <p>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {SITE.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${SITE.email}`} className="link-underline">
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col items-start gap-2 md:items-end">
            {FOOTER_NAV.map(({ to, label, Icon }) => (
              <Link
                key={to}
                to={to}
                className="group inline-flex items-center gap-2 text-xl text-footer-foreground transition-opacity hover:opacity-70"
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
                {label}
              </Link>
            ))}
            <Link
              to="/privacidade"
              className="mt-4 text-xs uppercase tracking-[0.2em] text-footer-foreground/50 hover:text-footer-foreground"
            >
              Política de privacidade
            </Link>
          </nav>
        </div>

        <p className="mt-16 text-center text-sm font-semibold">
          Plug Filmes | Copyright 2013 - {year}
        </p>
      </div>
      <div className="h-[6px] w-full bg-hairline" aria-hidden />
    </footer>
  );
}
