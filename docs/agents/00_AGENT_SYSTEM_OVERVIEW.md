# Sistema de agentes — visão geral

## Objetivo

Criar uma organização de agentes estreitos, opinativos e verificáveis para planejar, implementar e revisar o Sunset ERP.

## Estrutura

- `AGENTS.md` define a constituição global e a precedência.
- `AGENTS.md` aninhados aplicam regras locais ao diretório.
- `.codex/agents/*.toml` define agentes customizados do projeto.
- `.codex/rules/default.rules` controla comandos fora do sandbox.
- `.codex/hooks/` aplica validações determinísticas no ciclo de execução.
- `docs/agents/` define roteamento, handoff, fontes e testes do sistema de agentes.

## Princípios

1. Agentes são estreitos e não substituem decisões do usuário.
2. Exploração, implementação e revisão são papéis separados.
3. Todo handoff contém evidência e pergunta explícita.
4. Nenhum agente pode ultrapassar sandbox, escopo ou precedência documental.
5. O orchestrator limita paralelismo e impede edições concorrentes em arquivos críticos.
6. Regras financeiras, fiscais, contábeis, aduaneiras e de segurança exigem agente especialista.
7. Review é independente da implementação.
8. Toda conclusão importante deve ser reproduzível.

## Fluxo padrão

1. Orchestrator lê o slice e define escopo.
2. Code explorer mapeia caminhos reais.
3. Requirements traceability confirma decisões aplicáveis.
4. Architecture e especialistas avaliam desenho.
5. Contradiction researcher tenta refutar premissas relevantes.
6. Agente implementador executa mudança pequena.
7. Testing quality cria e executa evidências.
8. Security revisa riscos aplicáveis.
9. PR reviewer revisa o diff contra a base.
10. Orchestrator consolida e recomenda merge ou bloqueio.

## Limites de paralelismo

- Máximo padrão de quatro threads.
- Profundidade máxima de um nível de subagente.
- Apenas um agente write-capable por arquivo crítico.
- Migrations, contratos compartilhados e máquinas de estado têm lock lógico exclusivo.

## Estados de saída

- `READY`: evidência completa, sem bloqueio conhecido.
- `READY_WITH_RISKS`: riscos aceitos e documentados.
- `BLOCKED`: decisão ou pré-condição ausente.
- `REVIEW_ONLY`: análise sem alteração autorizada.
