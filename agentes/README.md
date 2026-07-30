# Agentes da Maquiavel

Automação editorial da revista, no padrão V4 do ecossistema Cafezinho.

| Arquivo | Papel |
|---|---|
| `fontes_curadoria.json` | Cadastro das fontes de curadoria com **status legal** (licença, copia_integral, traducao_livre, acao) + regras operacionais. É a fonte da verdade do que pode ser copiado/traduzido. |
| `maquiavel_agente_curador.py` | Pipeline de curadoria (coleta RSS → gate de escopo → licença → dedup → redação/tradução → fact-check → markdown → push). **Esqueleto documentado — sem cron sem AUTH do Miguel.** |

## Princípios

1. **Licença primeiro.** Só copia/traduz o que a licença permite. ND = nunca traduzir. Dúvida = resenha+link (fail-closed).
2. **Gate de escopo.** Ciência política apenas — lição do incidente GSN de 29/07.
3. **Fact-check com websearch real** antes de publicar.
4. **Draft por padrão** até a leitura editorial humana estar estável; publicação direta só com AUTH explícita.
5. **Custo registrado** no nodo de custos do Cérebro quando ativo.
