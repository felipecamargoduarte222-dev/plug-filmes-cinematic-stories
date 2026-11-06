export const SITE = {
  name: "Plug Filmes",
  tagline: "Produtora audiovisual",
  since: 2008,
  city: "Santa Rosa – RS",
  address: {
    line1: "Avenida Tuparendi, 797 – Apto 201",
    line2: "Centro – Santa Rosa – RS",
    full: "Avenida Tuparendi, 797, Apto 201, Centro, Santa Rosa – RS",
    mapsQuery: "Avenida Tuparendi, 797, Centro, Santa Rosa - RS",
  },
  phone: "(55) 9 9666-8979",
  phoneRaw: "5555996668979",
  email: "contato@plugfilmes.com.br",
  whatsapp: "https://wa.me/5555996668979",
  socials: {
    whatsapp: "https://wa.me/5555996668979",
    instagram: "https://www.instagram.com/plugfilmes/",
    facebook: "https://www.facebook.com/plugfilmes",
    linkedin: "https://www.linkedin.com/company/plugfilmes",
    vimeo: "https://vimeo.com/plugfilmes",
    youtube: "https://www.youtube.com/@plugfilmes",
  },
} as const;

export const NAV = [
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/contato", label: "Contato" },
] as const;

export const CLIENTS = [
  "Forza JMalucelli",
  "ViaCerta Banking",
  "3tentos",
  "Alfa",
  "Unimed Noroeste/RS",
  "Sicredi",
  "Agrosol",
  "HD Distribuidora",
  "Cotripal",
  "KF",
  "Unijuí",
  "Tiaraju",
  "AfraPharma",
  "Agrichem",
  "Celena Alimentos",
  "Fenasoja",
  "Ceriluz",
  "Nortox",
  "Decoy",
  "Cotrijal",
  "Coprel",
  "Nufarm",
  "Cotrirosa",
  "Cambaí Sementes",
  "MB Farmácias",
  "Tritec",
  "Cresol",
] as const;

export const TEAM = [
  { name: "Fabiano Duarte", role: "Diretor de Cena" },
  { name: "Ana Cláudia Camargo", role: "Relacionamento" },
  { name: "Felipe J. J.", role: "Diretor de Fotografia" },
] as const;
