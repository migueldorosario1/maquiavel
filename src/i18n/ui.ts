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
    home_featured: 'Featured Essay',
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
    read_more: 'Read Essay',
    also_in: 'Also in',
    access_open: 'Open access',
    access_mixed: 'Mixed access',
    access_paywall: 'Paywall',
    visit: 'Visit',
    footer_note: 'Maquiavel — political science with a journalist’s voice. Essays, not hard news.',
    curated_from: 'Curated and translated from',
    license: 'License',
    hero_caption: 'Niccolò Machiavelli in his study (editorial gravure after Santi di Tito, 1513)',
    
    // UI Visual Panel Strings
    panel_dossiers_title: 'Dossiers & Core Research Tracks',
    panel_dossiers_subtitle: 'In-depth essays organized by major pillars of contemporary political science.',
    panel_acervo_title: 'The Archive — Living Map of Political Science',
    panel_acervo_desc: 'Over 70 continuously curated sources: academic journals, repositories, and research centers.',
    panel_podcast_title: 'Dialogues & Maquiavel Podcast',
    panel_podcast_desc: 'In-depth audio and video debates with political scientists from Brazil and abroad.',
    dossier_1_tag: 'Theory & Power',
    dossier_1_title: 'The Reality of Power Without Illusions',
    dossier_1_desc: 'From Machiavelli’s realist tradition to modern institutional analysis.',
    dossier_2_tag: 'Global South & Geopolitics',
    dossier_2_title: 'The New International Architecture',
    dossier_2_desc: 'Sovereignty, emerging alliances, and the voice of the Global South.',
    dossier_3_tag: 'Technology & Institutions',
    dossier_3_title: 'Political Science in the Age of Algorithms',
    dossier_3_desc: 'Artificial intelligence, digital regimes, and the future of democracy.',
  },
  pt: {
    tagline: 'Uma revista internacional de ciência política',
    nav_essays: 'Ensaios',
    nav_archive: 'Acervo',
    nav_podcast: 'Podcast',
    nav_about: 'Sobre',
    nav_submit: 'Colabore',
    home_latest: 'Últimos ensaios',
    home_featured: 'Ensaio em Destaque',
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
    read_more: 'Ler Ensaio',
    also_in: 'Também em',
    access_open: 'Acesso aberto',
    access_mixed: 'Acesso misto',
    access_paywall: 'Paywall',
    visit: 'Visitar',
    footer_note: 'Maquiavel — ciência política com voz de revista. Ensaios, não hard news.',
    curated_from: 'Curadoria e tradução de',
    license: 'Licença',
    hero_caption: 'Nicolau Maquiavel em seu escritório (gravura editorial segundo Santi di Tito, 1513)',
    
    // UI Visual Panel Strings
    panel_dossiers_title: 'Dossiês & Linhas de Pesquisa',
    panel_dossiers_subtitle: 'Análises de fôlego organizadas por grandes eixos da ciência política contemporânea.',
    panel_acervo_title: 'O Acervo — Mapa Vivo da Ciência Política',
    panel_acervo_desc: 'Mais de 70 fontes curadas continuadamente: revistas acadêmicas, repositórios e centros de pesquisa.',
    panel_podcast_title: 'Diálogos & Podcast Maquiavel',
    panel_podcast_desc: 'Debates em áudio e vídeo com cientistas políticos do Brasil e do mundo.',
    dossier_1_tag: 'Teoria & Poder',
    dossier_1_title: 'A Realidade do Poder sem Ilusões',
    dossier_1_desc: 'Da tradição realista de Maquiavel à análise institucional moderna.',
    dossier_2_tag: 'Sul Global & Geopolítica',
    dossier_2_title: 'A Nova Arquitetura do Sistema Internacional',
    dossier_2_desc: 'Soberania, alianças emergentes e a voz do Sul Global no debate contemporâneo.',
    dossier_3_tag: 'Tecnologia & Instituições',
    dossier_3_title: 'A Ciência Política na Era dos Algoritmos',
    dossier_3_desc: 'Inteligência artificial, regimes digitais e a transformação da democracia.',
  },
  es: {
    tagline: 'Una revista internacional de ciencia política',
    nav_essays: 'Ensayos',
    nav_archive: 'Archivo',
    nav_podcast: 'Podcast',
    nav_about: 'Sobre',
    nav_submit: 'Colabora',
    home_latest: 'Últimos ensayos',
    home_featured: 'Ensayo Destacado',
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
    read_more: 'Leer Ensayo',
    also_in: 'También en',
    access_open: 'Acceso abierto',
    access_mixed: 'Acceso mixto',
    access_paywall: 'Paywall',
    visit: 'Visitar',
    footer_note: 'Maquiavel — ciencia política con voz de revista. Ensayos, no hard news.',
    curated_from: 'Curaduría y traducción de',
    license: 'Licencia',
    hero_caption: 'Nicolás Maquiavelo en su estudio (grabado editorial según Santi di Tito, 1513)',
    
    // UI Visual Panel Strings
    panel_dossiers_title: 'Dosieres y Líneas de Investigación',
    panel_dossiers_subtitle: 'Análisis de fondo organizados por grandes ejes de la ciencia política contemporánea.',
    panel_acervo_title: 'El Archivo — Mapa Vivo de la Ciencia Política',
    panel_acervo_desc: 'Más de 70 fuentes curadas continuamente: revistas académicas, repositorios y centros.',
    panel_podcast_title: 'Diálogos & Podcast Maquiavel',
    panel_podcast_desc: 'Debates en audio y video con cientistas políticos de Brasil y del mundo.',
    dossier_1_tag: 'Teoría y Poder',
    dossier_1_title: 'La Realidad del Poder sin Ilusiones',
    dossier_1_desc: 'De la tradición realista de Maquiavelo al análisis institucional moderno.',
    dossier_2_tag: 'Sur Global y Geopolítica',
    dossier_2_title: 'La Nueva Arquitectura Internacional',
    dossier_2_desc: 'Soberanía, alianzas emergentes y la voz del Sur Global en el debate contemporáneo.',
    dossier_3_tag: 'Tecnología e Instituciones',
    dossier_3_title: 'La Ciencia Política en la Era de los Algoritmos',
    dossier_3_desc: 'Inteligencia artificial, regímenes digitales y el futuro de la democracia.',
  },
};
