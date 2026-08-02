# DECISÕES VISUAIS v2.0 — REDESIGN GRÁFICO AUDACIOSO DA REVISTA MAQUIAVEL

**Autor:** Antigravity (Direção de Arte)  
**Data:** 02/08/2026  
**Projeto:** Revista Maquiavel (`revistamaquiavel.vercel.app`)  
**Repositório:** `github.com/migueldorosario1/maquiavel`

---

## 1. Conceito Central: Renascimento Grafista & Impacto Editorial

O novo projeto visual eleva a **Maquiavel** a um patamar de audácia gráfica e autoridade editorial de alto nível, combinando:
- **Logo Gráfica de Presença Monumental:** Substituição de um simples wordmark por um emblemático brasão geométrico renascentista vetorial (Perfil de Nicolau Maquiavel, Estrela de Florença e Louro) integrado a um wordmark em linhas duplas de alto contraste.
- **Painel Editorial Multifacetado:** A página principal deixa de ser um simples feed linear e transforma-se em um **painel visual de matérias**, agrupando o Ensaio Fundador em Hero imponente, Dossiês temáticos (*Teoria do Poder*, *Sul Global & Geopolítica*, *Tecnologia & Instituições*), o Mapa Vivo do Acervo em bloco obsidian dark e módulos interativos de debates.

---

## 2. Nova Identidade de Marca (`public/brand/`)

- **Logo Gráfica Light (`public/brand/maquiavel-logo-graphic-light.svg`):**
  - Brasão circular com perfil estilizado de Niccolò Machiavelli em tinta de carvalho, detalhes em oxblood (`#721C1C`) e estrela florentina em ouro envelhecido (`#B88E36`).
  - Wordmark em caixa-alta `Cinzel` 800 com linhas de enquadramento duplas e sub-headline em sans-serif tracking amplo.
- **Logo Gráfica Dark (`public/brand/maquiavel-logo-graphic-dark.svg`):**
  - Otimizada para telas escuras com contornos em marfim claro e acentos em vermelho rubi vibrante (`#E05252`).
- **Símbolo & Favicon (`public/brand/maquiavel-symbol.svg` & `public/favicon.svg`):**
  - Ícone de brasão vetorial responsivo para browsers e atalhos de app.

---

## 3. Estrutura do Painel Editorial da Home

1. **Hero Feature Grid:** Card imponente combinando chamada do artigo principal, tipografia de grande escala e a gravura editorial de Maquiavel (JPG 254KB).
2. **Dossiês & Linhas de Pesquisa:** Três cards com faixas em oxblood e visual em elevação hover, categorizando os eixos centrais de ensaios da revista.
3. **Módulo Visual do Acervo:** Painel escuro em tom obsidiana com chips interativos para as principais revistas de CP (*RBCP*, *World Politics*, *Foreign Affairs*, *Dados*).

---

## 4. Validação & Build

- **100% Estático (Astro):** Todas as 18 páginas (EN, PT e ES) buildadas com `npm run build` sem erros nem dependências de tempo de execução.
- **Performance & SEO:** Layout limpo, contrastes de cor testados para acessibilidade e preservação total de tags `hreflang`.
