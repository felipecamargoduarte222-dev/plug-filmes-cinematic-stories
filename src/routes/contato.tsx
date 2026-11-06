import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SocialIcons } from "@/components/site/SocialIcons";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Plug Filmes" },
      {
        name: "description",
        content:
          "Solicite um orçamento à Plug Filmes. Avenida Tuparendi, 797, Apto 201, Centro, Santa Rosa – RS. (55) 9 9666-8979.",
      },
      { property: "og:title", content: "Contato — Plug Filmes" },
      { property: "og:description", content: "Vamos conversar sobre o seu próximo filme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(100).optional(),
  service: z.string().max(60),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o projeto").max(1500),
});

const SERVICES = [
  "Filme institucional",
  "Campanha publicitária",
  "Manifesto de marca",
  "Websérie / documentário",
  "Relatório de sustentabilidade",
  "Conteúdo para redes",
  "Outro",
];

const fieldClass =
  "peer w-full border-0 border-b border-input bg-transparent px-0 pb-3 pt-6 text-lg text-foreground placeholder-transparent outline-none transition-colors focus:border-foreground";
const labelClass =
  "pointer-events-none absolute left-0 top-0 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.25em]";

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const text = [
      `Olá, Plug Filmes! Meu nome é ${d.name}${d.company ? ` (${d.company})` : ""}.`,
      `Tenho interesse em: ${d.service}.`,
      "",
      d.message,
      "",
      `E-mail: ${d.email}${d.phone ? ` | Telefone: ${d.phone}` : ""}`,
    ].join("\n");
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    toast.success("Abrimos o WhatsApp com sua mensagem pronta. É só enviar!");
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contato"
        videoId="GWwX6XkXaaU"
        title={
          <>
            Vamos
            <br />
            conversar
          </>
        }
        intro="Conte sobre o seu projeto. Respondemos em até 24 horas úteis."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-20 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-12">
            <div>
              <p className="eyebrow">Fale com a gente:</p>
            </div>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-5">
              <Phone className="mt-1 h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
              <span>
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">WhatsApp</span>
                <span className="mt-2 block font-wide text-2xl font-semibold text-foreground md:text-3xl link-underline">
                  {SITE.phone}
                </span>
              </span>
            </a>
            <a href={`mailto:${SITE.email}`} className="group flex items-start gap-5">
              <Mail className="mt-1 h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
              <span>
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">E-mail</span>
                <span className="mt-2 block break-all font-wide text-xl font-semibold text-foreground md:text-2xl link-underline">
                  {SITE.email}
                </span>
              </span>
            </a>
            <div className="flex items-start gap-5">
              <MapPin className="mt-1 h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
              <address className="not-italic">
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">Endereço</span>
                <span className="mt-2 block text-xl text-foreground">{SITE.address.line1}</span>
                <span className="block text-xl text-foreground">{SITE.address.line2}</span>
              </address>
            </div>
            <SocialIcons className="gap-5 pt-4" />
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} noValidate className="grid gap-10 sm:grid-cols-2">
              <Field name="name" label="Nome *" error={errors.name} />
              <Field name="email" label="E-mail *" type="email" error={errors.email} />
              <Field name="phone" label="Telefone" type="tel" />
              <Field name="company" label="Empresa" />
              <div className="relative sm:col-span-2">
                <label htmlFor="service" className="block text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Tipo de projeto
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue={SERVICES[0]}
                  className="mt-3 w-full appearance-none border-0 border-b border-input bg-transparent pb-3 text-lg text-foreground outline-none focus:border-foreground"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-popover text-popover-foreground">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Mensagem"
                  maxLength={1500}
                  className={`${fieldClass} resize-none`}
                />
                <label htmlFor="message" className={labelClass}>
                  Conte sobre o projeto *
                </label>
                {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-foreground px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-background transition-all duration-500 hover:gap-6 hover:bg-foreground/85"
                >
                  Enviar mensagem
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[480px] overflow-hidden border-t border-border bg-surface">
        <iframe
          title="Mapa — Plug Filmes"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapsQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
        />
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="relative">
      <input id={name} name={name} type={type} placeholder={label} maxLength={255} className={fieldClass} />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
