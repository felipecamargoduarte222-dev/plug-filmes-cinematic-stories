export type VideoCategory =
  | "Institucional"
  | "Campanha"
  | "Manifesto"
  | "Sustentabilidade"
  | "Reel";

export interface Video {
  id: string;
  title: string;
  client: string;
  category: VideoCategory;
}

/** The 15 most recent uploads on youtube.com/@plugfilmes, newest first. */
export const LATEST_VIDEOS: Video[] = [
  { id: "Oswmo27gfXE", title: "Conectando você ao que importa", client: "Coprel", category: "Campanha" },
  { id: "IIwZHGWenV0", title: "Nutrição de Plantas", client: "Nufarm", category: "Institucional" },
  { id: "viuS1r8HbVA", title: "Isso é Bem Cotri!", client: "Cotrirosa", category: "Campanha" },
  { id: "iy4NCkXJN98", title: "Relatório de Sustentabilidade 2025", client: "3tentos", category: "Sustentabilidade" },
  { id: "F_Dk4AiLrVI", title: "Tritec 40 anos", client: "Tritec", category: "Institucional" },
  { id: "4Fz0HpIdaeQ", title: "Irrigação e Implementos Agrícolas", client: "Cotripal", category: "Institucional" },
  { id: "Rx5ZYE62y-Q", title: "É melhor ser Sicredi", client: "Sicredi Planalto RS/MG", category: "Campanha" },
  { id: "QrVwxuLy_HA", title: "Reel Plug Filmes", client: "Plug Filmes", category: "Reel" },
  { id: "syvtVlB-yks", title: "Filme Manifesto", client: "Cotrirosa", category: "Manifesto" },
  { id: "TZDMJJnP9AQ", title: "Plantar é investir no futuro", client: "Cambaí Sementes", category: "Campanha" },
  { id: "GWwX6XkXaaU", title: "Filme de Natal 2023", client: "MB Farmácias", category: "Campanha" },
  { id: "jKqagnl64kE", title: "VT Campanha Natal 2023", client: "MB Farmácias", category: "Campanha" },
  { id: "WriKoCgILjk", title: "Mães Possíveis", client: "MB Farmácias", category: "Campanha" },
  { id: "FjK6XBGodsA", title: "Manifesto Nova Marca", client: "São José", category: "Manifesto" },
  { id: "Pge6zOttNWc", title: "3tentos Carbono — EP01 Raul", client: "3tentos", category: "Sustentabilidade" },
];

export const REEL_ID = "QrVwxuLy_HA";

export function thumb(id: string, quality: "maxres" | "hq" = "maxres") {
  return `https://i.ytimg.com/vi/${id}/${quality === "maxres" ? "maxresdefault" : "hqdefault"}.jpg`;
}

export function embedUrl(id: string, opts: { background?: boolean } = {}) {
  const base = `https://www.youtube-nocookie.com/embed/${id}`;
  if (opts.background) {
    return `${base}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1`;
  }
  return `${base}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
}

export function videoById(id: string) {
  return LATEST_VIDEOS.find((v) => v.id === id);
}
