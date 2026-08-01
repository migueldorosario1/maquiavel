# DECISÕES VISUAIS — DIREÇÃO DE ARTE DA REVISTA MAQUIAVEL

**Autor:** Antigravity (Direção de Arte)  
**Data:** 01/08/2026  
**Projeto:** Revista Maquiavel (`revistamaquiavel.vercel.app`)  
**Repositório:** `github.com/migueldorosario1/maquiavel`

---

## 1. Conceito Central & Filosofia Visual

> *"A gravidade de uma biblioteca florentina com a velocidade de uma revista digital."*

A **Maquiavel** é uma revista internacional de ciência política, ensaística e trilíngue (EN/PT/ES). A direção de arte foi desenhada para romper tanto com o cinzento frio do academicismo burocrático quanto com o efêmero estridente das redes sociais.

Inspirações fundamentais:
1. **The New York Review of Books:** Autoridade da imprensa de ideias, serifas clássicas de imprensa e respeito pela leitura contínua.
2. **Le Monde Diplomatique:** Sobriedade europeia, espaços em branco que permitem ao texto respirar e sobriedade cromática.
3. **Piauí:** Elegância contemporânea em língua portuguesa, provando que profundidade analítica caminha lado a lado com beleza gráfica.
4. **Renascimento Florentino:** Referências ao século XVI — vermelho oxblood (*sang-de-bœuf*), papel marfim pergaminho, ouro velho envelhecido, gravuras em *woodcut*, capitulares e fleurons — aplicadas com minimalismo moderno.

---

## 2. Marca & Logotipo (`public/brand/`)

- **Wordmark ("MAQUIAVEL"):**
  - Desenhado com a tipografia `Cinzel` em caixa-alta, kerning expansivo (0.24em–0.26em) e linhas de enquadramento duplas (regras editoriais superior e inferior com detalhe central em losango).
  - Disponível nas versões `maquiavel-wordmark-light.svg` (tinta quente `#1A1613` e acento oxblood `#721C1C`) e `maquiavel-wordmark-dark.svg` (marfim `#F0EAE1` e acento `#D64545`).
- **Símbolo / Monograma "M" (`maquiavel-symbol.svg` & `favicon.svg`):**
  - Monograma clássico "M" sobre escudo oxblood com borda dupla em ouro velho (`#B88E36`).
  - No ramo direito do "M", integra-se a curva suave de uma pena de escrever renascentista e um floreio de inspiração florentina.
  - Utilizado como ícone de aplicativo, favicon responsivo e marca gráfica reduzida.

---

## 3. Sistema Tipográfico & Paleta de Cores (`src/styles/global.css`)

### Tipografia
- **Títulos de Display / Masthead:** `Cinzel` (Google Fonts) — inspirada na epigrafia romana e gravuras renascentistas.
- **Títulos de Ensaio / Cabeçalhos:** `Playfair Display` — serifa de alto contraste com grande elegância e peso editorial.
- **Corpo do Texto:** `Source Serif 4` — serifa otimizada para telas digitais com excelente legibilidade em ensaios de 2.000 a 5.000 palavras.
- **Elementos de Apoio / UI / Metadados:** `Inter` — sans-serif limpa e precisa em caixa-alta com letter-spacing amplo para etiquetas, badges e navegação.

### Paleta de Cores & Tokens CSS
```css
:root {
  --paper: #F9F6F0;        /* Papel marfim / pergaminho suave */
  --paper-card: #FFFFFF;   /* Fundo limpo de cards */
  --paper-soft: #F2EBE0;   /* Bloco de nota / citação */
  --ink: #1A1613;          /* Tinta de carvalho quente */
  --ink-soft: #4F473E;     /* Texto secundário / grafite antigo */
  --ink-muted: #7A7063;    /* Metadados */
  --rule: #DCD3C5;         /* Filetes duplos e divisórias */
  --accent: #721C1C;       /* Oxblood renascentista */
  --accent-hover: #9E2A2A;
  --gold: #B88E36;         /* Ouro velho envelhecido */
}
```

- **Suporte ao Modo Escuro (`prefers-color-scheme: dark`):**
  - `--paper`: `#12100E` (Escuridão noturna de biblioteca florentina).
  - `--ink`: `#F0EAE1` (Texto em tom marfim claro).
  - `--accent`: `#E05252` (Vermelho rubi de alto contraste).

---

## 4. Detalhes Editoriais & Capa Hero

1. **Ilustração Hero (`public/hero/hero-machiavelli.jpg`):**
   - Releitura em gravura editorial (*woodcut crosshatch*) do retrato clássico de Nicolau Maquiavel por Santi di Tito (1513).
   - Gravura em tinta sobre pergaminho com acentos oxblood e ouro envelhecido. Arquivo otimizado em JPG (254 KB, respeitando a meta de ≤300 KB).
2. **Capitulares (Drop Caps):**
   - O primeiro parágrafo de cada ensaio exibe capitular em `Cinzel` serifada, altura de 3.8em, em tom oxblood renascentista.
3. **Fleurons e Regras Duplas:**
   - Divisores com fleuron `❦` e `❧` em ouro velho e oxblood para delimitar seções e rodapés de artigos.
4. **Cards do Acervo:**
   - Visual em grid responsivo com efeito hover elevação sutil, bordas em tom pergaminho e badges coloridas por tipo de acesso (*Open Access* verde, *Mixed* âmbar, *Paywall* oxblood).

---

## 5. Garantia Técnica & Desempenho

- **Acessibilidade:** Contraste de cores em conformidade com WCAG AA, tags semânticas HTML5, `alt` text em imagens e foco navegável.
- **Performance:** 100% estático (Astro), carregamento otimizado de Google Fonts com `display=swap` e `preconnect`.
- **Trilíngue:** 100% dos textos mantidos em `src/i18n/ui.ts` e suporte total a tags `hreflang`.
