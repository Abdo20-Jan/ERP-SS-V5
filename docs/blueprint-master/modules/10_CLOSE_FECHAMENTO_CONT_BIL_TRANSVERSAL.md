# 10. Fechamento contábil transversal — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Fechar períodos e reconciliar os subledgers operacionais, fiscais, financeiros, de estoque, câmbio e demonstrações com o General Ledger.

## Submódulos e PRs
- **SM-CLOSE-01 — Calendário e tarefas de fechamento** → `PR-CLOSE-01`
- **SM-CLOSE-02 — Reconciliação de subledgers** → `PR-CLOSE-02`
- **SM-CLOSE-03 — Provisões, accruals e câmbio** → `PR-CLOSE-03`
- **SM-CLOSE-04 — Demonstrações e pacote gerencial** → `PR-CLOSE-04`
- **SM-CLOSE-05 — Reabertura, auditoria e cockpit** → `PR-CLOSE-05`

## Atores principais

- Contabilidade
- Controladoria
- Responsáveis por subledger
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/CLOSE/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/CLOSE/`
- Controllers: `docs/requirements/pr-programs/CLOSE/`
