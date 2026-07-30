// Configuração de idiomas e strings de UI da Maquiavel.
// EN é a língua-base (rotas na raiz); PT em /pt/, ES em /es/.

export const LANGS = ['en', 'pt', 'es'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

// Prefixo de rota por língua (EN = raiz)
export function langPrefix(lang: Lang): string {
  return lang === 'en' ? '' : `/${lang}`;
}

// Nome da rota de artigos por língua
export const ESSAY_ROUTE: Record<Lang, string> = {
  en: 'essays',
  pt: 'ensaios',
  es: 'ensayos',
};

export function articleUrl(lang: Lang, slug: string): string {
  return `${langPrefix(lang)}/${ESSAY_ROUTE[lang]}/${slug}`;
}

export const UI: Record<Lang, Record<string, string>> = {
  en: {
    tagline: 'An international journal of political science',
    nav_essays: 'Essays',
    nav_archive: 'Archive',
    nav_podcast: 'Podcast',
    nav_about: 'About',
    nav_submit: 'Submissions',
    home_latest: 'Latest essays',
    home_featured: 'Featured',
    archive_title: 'The Archive',
    archive_intro:
      'A living map of political science: journals from Brazil and the world, thesis repositories, research centers, newsletters and video channels. Continuously curated.',
    archive_journals_br: 'Journals — Brazil',
    archive_journals_world: 'Journals — World',
    archive_repos: 'Thesis & article repositories',
    archive_unis: 'Political science at the universities',
    archive_substacks: 'Newsletters & Substacks',
    archive_videos: 'Videos & interviews',
    podcast_title: 'Maquiavel — the podcast',
    submit_title: 'Submissions',
    about_title: 'About Maquiavel',
    read_more: 'Read',
    also_in: 'Also in',
    access_open: 'Open access',
    access_mixed: 'Mixed access',
    access_paywall: 'Paywall',
    visit: 'Visit',
    footer_note: 'Maquiavel — political science with a journalist’s voice. Essays, not hard news.',
    curated_from: 'Curated and translated from',
    license: 'License',
  },
  pt: {
    tagline: 'Uma revista internacional de ciência política',
    nav_essays: 'Ensaios',
    nav_archive: 'Acervo',
    nav_podcast: 'Podcast',
    nav_about: 'Sobre',
    nav_submit: 'Colabore',
    home_latest: 'Últimos ensaios',
    home_featured: 'Destaque',
    archive_title: 'O Acervo',
    archive_intro:
      'Um mapa vivo da ciência política: revistas do Brasil e do mundo, repositórios de teses, centros de pesquisa, newsletters e canais de vídeo. Curadoria contínua.',
    archive_journals_br: 'Revistas — Brasil',
    archive_journals_world: 'Revistas — Mundo',
    archive_repos: 'Repositórios de teses e artigos',
    archive_unis: 'Ciência política nas universidades',
    archive_substacks: 'Newsletters & Substacks',
    archive_videos: 'Vídeos & entrevistas',
    podcast_title: 'Maquiavel — o podcast',
    submit_title: 'Colabore com a Maquiavel',
    about_title: 'Sobre a Maquiavel',
    read_more: 'Ler',
    also_in: 'Também em',
    access_open: 'Acesso aberto',
    access_mixed: 'Acesso misto',
    access_paywall: 'Paywall',
    visit: 'Visitar',
    footer_note: 'Maquiavel — ciência política com voz de revista. Ensaios, não hard news.',
    curated_from: 'Curadoria e tradução de',
    license: 'Licença',
  },
  es: {
    tagline: 'Una revista internacional de ciencia política',
    nav_essays: 'Ensayos',
    nav_archive: 'Archivo',
    nav_podcast: 'Podcast',
    nav_about: 'Sobre',
    nav_submit: 'Colabora',
    home_latest: 'Últimos ensayos',
    home_featured: 'Destacado',
    archive_title: 'El Archivo',
    archive_intro:
      'Un mapa vivo de la ciencia política: revistas de Brasil y del mundo, repositorios de tesis, centros de investigación, newsletters y canales de video. Curaduría continua.',
    archive_journals_br: 'Revistas — Brasil',
    archive_journals_world: 'Revistas — Mundo',
    archive_repos: 'Repositorios de tesis y artículos',
    archive_unis: 'Ciencia política en las universidades',
    archive_substacks: 'Newsletters & Substacks',
    archive_videos: 'Videos & entrevistas',
    podcast_title: 'Maquiavel — el podcast',
    submit_title: 'Colabora con Maquiavel',
    about_title: 'Sobre Maquiavel',
    read_more: 'Leer',
    also_in: 'También en',
    access_open: 'Acceso abierto',
    access_mixed: 'Acceso mixto',
    access_paywall: 'Paywall',
    visit: 'Visitar',
    footer_note: 'Maquiavel — ciencia política con voz de revista. Ensayos, no hard news.',
    curated_from: 'Curaduría y traducción de',
    license: 'Licencia',
  },
};
