# 6. Tesouraria — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Controlar contas bancárias em ARS e USD na Argentina e no exterior, pagamentos, recebimentos, câmbio, instrumentos, conciliação e previsão de caixa.

## Submódulos e PRs
- **SM-TREASURY-01 — Contas bancárias e posição de caixa** → `PR-TREASURY-01`
- **SM-TREASURY-02 — Pagamentos e terceiros pagadores** → `PR-TREASURY-02`
- **SM-TREASURY-03 — Recebimentos e meios de pagamento** → `PR-TREASURY-03`
- **SM-TREASURY-04 — Câmbio, empréstimos e aportes** → `PR-TREASURY-04`
- **SM-TREASURY-05 — Conciliação e previsão de caixa** → `PR-TREASURY-05`

## Atores principais

- Tesouraria
- Financeiro
- Aprovadores
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/TREASURY/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/TREASURY/`
- Controllers: `docs/requirements/pr-programs/TREASURY/`
