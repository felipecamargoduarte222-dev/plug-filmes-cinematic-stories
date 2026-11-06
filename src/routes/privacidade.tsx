import { createFileRoute } from "@tanstack/react-router";
import { openCookiePreferences } from "@/lib/cookie-consent";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade e cookies — Plug Filmes" },
      {
        name: "description",
        content:
          "Saiba como a Plug Filmes coleta, usa e protege seus dados pessoais e como utilizamos cookies, em conformidade com a LGPD.",
      },
      { property: "og:title", content: "Política de privacidade — Plug Filmes" },
      { property: "og:description", content: "Privacidade, cookies e LGPD na Plug Filmes." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "1. Quem somos",
    body: `A Plug Filmes é uma produtora audiovisual sediada na ${SITE.address.full}. Esta política explica como tratamos dados pessoais coletados neste site, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).`,
  },
  {
    title: "2. Dados que coletamos",
    body: "Coletamos apenas os dados que você nos fornece voluntariamente ao entrar em contato (nome, e-mail, telefone, empresa e mensagem) e dados de navegação anônimos coletados por cookies, quando autorizados.",
  },
  {
    title: "3. Como usamos seus dados",
    body: "Utilizamos seus dados para responder solicitações de orçamento, manter contato comercial e melhorar a experiência no site. Não vendemos nem compartilhamos dados pessoais com terceiros para fins de marketing.",
  },
  {
    title: "4. Cookies",
    body: "Cookies são pequenos arquivos armazenados no seu navegador. Usamos cookies necessários (funcionamento do site e registro do seu consentimento), de análise (estatísticas de uso) e de marketing (conteúdos de terceiros, como vídeos incorporados). Você pode alterar suas preferências a qualquer momento.",
  },
  {
    title: "5. Vídeos incorporados",
    body: "Os filmes deste site são exibidos pelo YouTube em modo de privacidade aprimorada (youtube-nocookie.com). Ao reproduzir um vídeo, o YouTube pode coletar dados conforme sua própria política de privacidade.",
  },
  {
    title: "6. Seus direitos",
    body: `Você pode solicitar acesso, correção, portabilidade ou exclusão dos seus dados a qualquer momento pelo e-mail ${SITE.email}.`,
  },
  {
    title: "7. Atualizações",
    body: "Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página.",
  },
];

function PrivacyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 pb-28 pt-40 md:pt-48">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-10 font-wide text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">
          Política de privacidade
          <span className="block font-serif font-normal normal-case italic text-foreground/70">e cookies</span>
        </h1>
        <div className="mt-16 space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <button
          onClick={openCookiePreferences}
          className="mt-16 border border-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
        >
          Gerenciar cookies
        </button>
      </div>
    </section>
  );
}
