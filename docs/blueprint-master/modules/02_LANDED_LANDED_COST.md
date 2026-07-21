# 2. Landed cost — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Calcular, versionar, aplicar e reconciliar custo provisório, contábil, gerencial e cash-out por importação, despacho, contêiner, SKU e camada de estoque.

## Submódulos e PRs
- **SM-LANDED-01 — Catálogo de componentes e elegibilidade** → `PR-LANDED-01`
- **SM-LANDED-02 — Pools provisórios e documentos** → `PR-LANDED-02`
- **SM-LANDED-03 — Rateio e simulador** → `PR-LANDED-03`
- **SM-LANDED-04 — Aplicação a estoque e margem** → `PR-LANDED-04`
- **SM-LANDED-05 — Custos tardios e reconciliação** → `PR-LANDED-05`

## Atores principais

- Analista de custos
- Controladoria
- COMEX
- Contabilidade
- Master

## Experiência do módulo

- Cockpit inicial por papel, mostrando exceções, prazos, tarefas e KPIs acionáveis.
- List reports com filtros persistentes, busca, colunas configuráveis, exportação e ações em lote.
- Object pages com estado, ações, resumo, documentos, financeiro/contábil, timeline e auditoria.
- Atalhos de teclado, command palette, bulk paste/import e redução de troca de contexto.

## Requisitos transversais

- RBAC, escopos, dupla aprovação e master override auditado.
- Anexos, OCR, versionamento e busca conforme aplicável.
- Eventos idempotentes, outbox e reconciliação com módulos consumidores.
- Operação offline para funções aprovadas, com fila e revisão de conflito.
- Relatórios com drill-down até documento e evento de origem.
- Parâmetros e vigências administráveis pela interface.

## Critérios para encerrar o módulo

- Todos os PRs lógicos e slices obrigatórios concluídos.
- Workflows, regras, cálculos, páginas, integrações e relatórios testados.
- Reconciliação financeira/contábil sem diferença não explicada.
- UAT aprovado e runbooks operacionais entregues.

## Fontes aceitas

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/LANDED/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/LANDED/`
- Controllers: `docs/requirements/pr-programs/LANDED/`
