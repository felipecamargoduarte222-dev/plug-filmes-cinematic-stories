import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { OPEN_PREFS_EVENT, readConsent, saveConsent } from "@/lib/cookie-consent";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    setAnalytics(existing.analytics);
    setMarketing(existing.marketing);
  }, []);

  useEffect(() => {
    const open = () => {
      setVisible(true);
      setPrefsOpen(true);
    };
    window.addEventListener(OPEN_PREFS_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, open);
  }, []);

  const decide = (choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setVisible(false);
    setPrefsOpen(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[90] animate-in slide-in-from-bottom-8 fade-in duration-700"
    >
      <div className="border-t border-border bg-surface-raised/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <Cookie className="mt-0.5 hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/85">
                Para otimizar sua experiência durante a navegação, fazemos uso de cookies. Ao
                continuar no site, consideramos que você está de acordo com nossa{" "}
                <Link to="/privacidade" className="font-semibold text-foreground underline underline-offset-4">
                  Política de privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="quiet" size="sm" onClick={() => setPrefsOpen((o) => !o)}>
                Preferências
              </Button>
              <Button variant="frame" size="sm" className="h-10 px-5" onClick={() => decide({ analytics: false, marketing: false })}>
                Apenas necessários
              </Button>
              <Button variant="solid" size="sm" className="h-10 px-6" onClick={() => decide({ analytics: true, marketing: true })}>
                Aceito
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "grid transition-all duration-500",
              prefsOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-3">
                <PrefRow
                  title="Necessários"
                  description="Essenciais para o funcionamento do site. Sempre ativos."
                  checked
                  disabled
                />
                <PrefRow
                  title="Análise"
                  description="Nos ajudam a entender como o site é usado para melhorá-lo."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <PrefRow
                  title="Marketing"
                  description="Permitem conteúdos e vídeos personalizados de terceiros."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
              <div className="mt-5 flex justify-end gap-3">
                <Button variant="quiet" size="sm" onClick={() => setPrefsOpen(false)}>
                  <X /> Fechar
                </Button>
                <Button variant="solid" size="sm" className="h-10 px-6" onClick={() => decide({ analytics, marketing })}>
                  Salvar preferências
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  const id = `cookie-${title.toLowerCase()}`;
  return (
    <label htmlFor={id} className="flex items-start justify-between gap-4 border border-border p-4">
      <span>
        <span className="block text-sm font-semibold text-foreground">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{description}</span>
      </span>
      <Switch id={id} checked={checked} disabled={disabled} onCheckedChange={onChange} />
    </label>
  );
}
