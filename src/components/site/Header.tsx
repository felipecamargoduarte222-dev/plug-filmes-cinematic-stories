import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";
import { LATEST_VIDEOS, thumb } from "@/lib/videos";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled || menuOpen
            ? "bg-background/85 py-3 backdrop-blur-xl"
            : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
          <Link to="/" aria-label="Plug Filmes — início" className="relative z-10">
            <Logo className={cn("transition-all duration-700", scrolled ? "h-7" : "h-8 md:h-9")} />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline pb-1 text-[13px] uppercase tracking-[0.22em] text-foreground/75 transition-colors hover:text-foreground"
                activeProps={{ className: "!text-foreground !bg-[length:100%_1px]" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="group inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
            >
              Orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={cn(
                "h-[3px] w-8 rounded-full bg-foreground transition-all duration-500",
                menuOpen && "translate-y-[9px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-[3px] w-8 rounded-full bg-foreground transition-all duration-500",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-[3px] w-8 rounded-full bg-foreground transition-all duration-500",
                menuOpen && "-translate-y-[9px] -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen menu (mobile / tablet) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-700 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src={thumb(LATEST_VIDEOS[0].id)}
            alt=""
            className="h-full w-full object-cover media-mono"
          />
        </div>
        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-32">
          <nav className="flex flex-col gap-2" aria-label="Menu">
            {[{ to: "/", label: "Início" }, ...NAV].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "font-wide text-4xl font-bold uppercase text-foreground transition-all duration-700 sm:text-6xl",
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{SITE.address.line1}</p>
            <p>{SITE.address.line2}</p>
            <p className="pt-3 text-foreground">{SITE.phone}</p>
            <p className="text-foreground">{SITE.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
