#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
maquiavel_agente_curador.py — Agente de curadoria da Revista Maquiavel (padrão V4)

STATUS: ESQUELETO DOCUMENTADO — não agendar em cron sem AUTH formal do Miguel.

Pipeline (espelha os padrões maduros do ecossistema V4):

    1. COLETA      lê agentes/fontes_curadoria.json; baixa RSS/Atom das fontes
                   com acao != "monitorar"; descobre feeds quando rss=null
                   (tentar /feed, /rss, sitemap.xml, link[rel=alternate]).
    2. FILTRO      mantém só itens de CIÊNCIA POLÍTICA (gate de escopo — lição do
                   BUG-20260729-GSN-PT-PAUTA-MOLE): classificador LLM barato
                   (qwen/glm) com prompt de escopo + keywords de fallback.
    3. LICENÇA     cruza com o cadastro da fonte:
                     - copia_integral=false      -> vira "resenha_link"
                     - traducao_livre=false      -> publica só na língua original
                     - CC desconhecida           -> resenha_link (fail-closed)
    4. DEDUP       registry agent_data/curadoria_ja_usada.json (URL canônica +
                   título normalizado) — nunca republicar o mesmo item.
    5. REDAÇÃO     dois modos:
                     a) curadoria_integral: tradução/adaptação para as línguas
                        permitidas (EN/PT/ES), mantendo autoria original e
                        frontmatter fonte_curadoria/licenca_fonte.
                     b) resenha_link: ensaio curto original da Maquiavel
                        comentando a peça (citações curtas, fair use) + link.
    6. FACT-CHECK  websearch real (Gemini grounding / cascata do ecossistema)
                   sobre as afirmações factuais centrais — regra consolidada.
    7. PUBLICAÇÃO  gera src/content/artigos/{lang}/{slug}.md (schema do
                   content.config.ts), commit + push -> webhook Vercel publica.
                   padrão: draft=true até leitura editorial humana (fase 1);
                   draft=false direto só após AUTH explícita (fase 2).

Frontmatter gerado (ver src/content.config.ts):
    title, description, pubDate, lang, par_trilingue, secao: "Curation",
    autor (original), tags, fonte_curadoria, licenca_fonte, draft

Cadência sugerida (quando autorizado): 2x/dia (manhã/noite BRT),
máx. 3 curadorias/ciclo — revista ensaística não é firehose.

Custos: classificação+tradução em modelos baratos (qwen-plus/glm-4-flash);
fact-check Gemini. Estimativa: < US$ 0,05/ciclo — registrar em
Cerebro/CEREBRO_NODE_CUSTOS_REAIS_MENSAL.md quando ativo.

Executor: NYC (padrão do ecossistema) ou local — decisão pendente (fórum §5).
Chaves: Cofre — Cerebro/CEREBRO_NODE_COFRE_CHAVES.md (nunca inline).
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FONTES = ROOT / "agentes" / "fontes_curadoria.json"
REGISTRY = ROOT / "agentes" / "agent_data" / "curadoria_ja_usada.json"


def carregar_fontes() -> dict:
    return json.loads(FONTES.read_text(encoding="utf-8"))


def main() -> int:
    cfg = carregar_fontes()
    ativas = [f for f in cfg["fontes"] if f["acao"] != "monitorar"]
    print(f"[maquiavel-curador] ESQUELETO — {len(ativas)} fontes ativas cadastradas:")
    for f in ativas:
        print(f"  - {f['nome']} | acao={f['acao']} | copia={f['copia_integral']} | trad={f['traducao_livre']}")
    print("[maquiavel-curador] pipeline completo aguardando AUTH do Miguel (ver docstring).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
