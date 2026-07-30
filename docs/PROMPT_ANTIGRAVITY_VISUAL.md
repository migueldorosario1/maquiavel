# PROMPT PARA O ANTIGRAVITY — Direção Visual da Revista Maquiavel

> **Como usar:** copie o conteúdo abaixo (da linha seguinte até o fim) e cole no Antigravity, anexando acesso ao repo `github.com/migueldorosario1/maquiavel` (clone local: `Antigravity Google/Revista Maquiavel/maquiavel/`). O site já está no ar em https://revistamaquiavel.vercel.app — seu trabalho é a **camada visual**, sem quebrar a estrutura.

---

## A missão

Você é o diretor de arte da **Maquiavel**, uma revista **internacional de ciência política** — ensaística (nunca hard news), trilíngue (EN/PT/ES), online contínua, nascida no Brasil com ambição global. O esqueleto técnico está pronto e deployado (Astro + Vercel). Falta o que decide tudo: **a cara**.

Sua missão: criar a identidade visual completa e aplicá-la ao site — **logo, masthead, paleta, tipografia, layout e detalhes de acabamento** — com um padrão estético à altura de *The New York Review of Books*, *Le Monde Diplomatique* e *Foreign Affairs*, mas com assinatura própria: **renascentista florentina encontrando o modernismo editorial** — Maquiavel, afinal, escrevia à luz de velas sobre ruínas romanas.

## A marca

- **Nome:** MAQUIAVEL (uma palavra, maiúscula no masthead)
- **Alma:** o fundador da ciência política — a política como ela é, sem ilusões. Rigor com clareza. Coragem intelectual.
- **Não é:** jornal de última hora, blog partidário, revista acadêmica engessada.
- **É:** revista de ensaios, ideias e debates — densa mas convidativa, séria mas viva, internacional mas com sotaque do Sul Global.

## Referências estéticas (norte, não cópia)

1. **The New York Review of Books** — autoridade tipográfica, serifas que comandam respeito.
2. **Le Monde Diplomatique** — sobriedade europeia, diagramação que respira.
3. **Piauí** — elegância brasileira contemporânea, prova de que dá para ser denso e belo em português.
4. **Renascimento florentino** — gravuras, capitais ornadas, vermelho-oxblood, ouro envelhecido, papel — usados com parcimônia moderna (um traço, não uma fantasia).

## Entregáveis

### 1. Logo + marca
- **Logo principal** (masthead horizontal): wordmark "MAQUIAVEL" — vetorial (SVG), versões clara/escura.
- **Símbolo/favicon** (quadrado): um monograma "M" com personalidade — sugestão de caminho: pena de escrever, flâmula florentina, perfil renascentista estilizado ou giglio de Florença abstrato. Escolha UM conceito e execute bem.
- Arquivos em `public/brand/` (SVG master + PNGs exportados + `favicon.svg`/`favicon.ico`).

### 2. Sistema visual no código
- **`src/styles/global.css`** — reescreva à vontade (é o único CSS do site; o atual é um placeholder elegante mínimo). Mantenha os nomes de classes usados pelos componentes (ver inventário abaixo) ou ajuste os componentes junto — o site precisa continuar buildando (`npm run build` → 18 páginas).
- **Tipografia web:** Google Fonts ou self-hosted em `public/fonts/`. Caminho sugerido: serifa display de caráter (Playfair Display, Cormorant, EB Garamond…) + serifa de texto (Source Serif, Lora…) + sans de apoio para metadados (Inter, Archivo…). Justifique suas escolhas num comentário no topo do CSS.
- **Paleta:** defina tokens CSS (`--paper`, `--ink`, `--accent`…) — caminho sugerido: papel marfim, tinta quase-preta quente, oxblood/vinho renascentista, ouro velho para detalhes. Modo escuro é bem-vindo se vier com cuidado (prefers-color-scheme).
- **Detalhes editoriais:** capitular no primeiro parágrafo dos ensaios, fileiras/finolhas decorativas, chips de seção, tratamento dos cards do Acervo, hierarquia clara entre título/descrição/metadados.

### 3. Imagens de abertura
- **Hero da home**: uma imagem/ilustração de capa para o ensaio fundador ("Por que uma revista chamada Maquiavel?") — sugestão: releitura gravura-moderna do retrato de Maquiavel (Santi di Tito, domínio público — pode partir dele). Em `public/hero/`, otimizada (≤ 300 KB), com crédito/fonte em comentário.
- (Opcional, se fluir) textura de papel/pergaminho sutil para o fundo, tile em `public/brand/`.

## Restrições técnicas (invioláveis)

1. **Não quebre o build:** `npm install && npm run build` precisa terminar com 18 páginas (`/`, `/pt/`, `/es/`, ensaios nas 3 línguas, acervo, podcast, sobre, colabore).
2. **Trilíngue real:** todo texto visível vem de `src/i18n/ui.ts` (EN/PT/ES) — não espalhe strings hardcoded; se criar novos elementos com texto, adicione as 3 versões no `ui.ts`.
3. **Componentes existentes:** `src/layouts/Base.astro` (masthead/nav/footer) e `src/components/*.astro` (Home, ArticlePage, ArchivePage, AboutPage, PodcastPage, SubmitPage). Você pode redesenhá-los, mantendo as props e os dados (collections `artigos`, JSONs de `src/data/acervo/`).
4. **Estático e rápido:** sem frameworks JS pesados; CSS puro ou mínimo JS vanilla; imagens otimizadas; Lighthouse ≥ 90.
5. **Acessibilidade:** contraste AA, foco visível, alt texts, HTML semântico (já está razoável — melhore).
6. **hreflang e SEO:** preserve as tags `<link rel="alternate" hreflang>` em `Base.astro`.
7. **Deploy:** git push na branch `main` publica automaticamente (webhook Vercel). Faça commits atômicos e descritivos.

## Inventário do que existe (mapa do repo)

```
maquiavel/
├── astro.config.mjs          # site: revistamaquiavel.vercel.app
├── src/
│   ├── content.config.ts     # schema dos artigos (frontmatter)
│   ├── i18n/ui.ts            # TODAS as strings de UI nas 3 línguas
│   ├── styles/global.css     # ← sua tela principal
│   ├── layouts/Base.astro    # masthead, nav, footer, hreflang
│   ├── components/           # Home, ArticlePage, ArchivePage, About, Podcast, Submit
│   ├── pages/                # rotas EN (raiz) + pt/ + es/
│   ├── content/artigos/      # ensaio fundador nas 3 línguas (markdown)
│   └── data/acervo/          # 6 JSONs: revistas, repositórios, universidades…
├── agentes/                  # automação de curadoria (não tocar)
└── docs/                     # manifesto editorial + este prompt
```

## Ritual de trabalho sugerido

1. Rode local (`npm install && npm run dev`) e veja o estado atual.
2. Entregue primeiro **logo + paleta + tipografia** (fundação).
3. Depois masthead/home, página de ensaio, acervo, demais páginas.
4. Ao final: `npm run build` limpo + push; confira o deploy em https://revistamaquiavel.vercel.app.
5. Deixe um `docs/DECISOES_VISUAIS.md` com as escolhas e a razão delas (para o Cérebro do ecossistema).

**Tom da revista, em uma frase:** *a gravidade de uma biblioteca florentina com a velocidade de uma revista digital.*

Pode começar. Surpreenda-nos — mas com método.
