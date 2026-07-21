# 4. Contábil — fundação — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Fornecer General Ledger, plano de contas, dimensões, diários, moedas, períodos, contabilização automática e demonstrações financeiras básicas.

## Submódulos e PRs
- **SM-ACCOUNTING-01 — Plano de contas e dimensões** → `PR-ACCOUNTING-01`
- **SM-ACCOUNTING-02 — Motor de lançamentos e journals** → `PR-ACCOUNTING-02`
- **SM-ACCOUNTING-03 — Moedas e diferenças cambiais** → `PR-ACCOUNTING-03`
- **SM-ACCOUNTING-04 — Livros, períodos e controles** → `PR-ACCOUNTING-04`
- **SM-ACCOUNTING-05 — Razão, balanço, DRE e drill-down** → `PR-ACCOUNTING-05`

## Atores principais

- Contador
- Controladoria
- Aprovador contábil
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/ACCOUNTING/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/ACCOUNTING/`
- Controllers: `docs/requirements/pr-programs/ACCOUNTING/`
