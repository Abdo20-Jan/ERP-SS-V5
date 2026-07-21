# 1. COMEX — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Controlar a importação desde a necessidade de compra e pedido internacional até a nacionalização, recebimento, devolução do contêiner e fechamento, contemplando importação definitiva, trânsito aduaneiro, Zona Primária Aduaneira e Zona Franca.

## Submódulos e PRs
- **SM-COMEX-01 — Pedido internacional e produção** → `PR-COMEX-01`
- **SM-COMEX-02 — Embarque, booking, BL e contêiner** → `PR-COMEX-02`
- **SM-COMEX-03 — Despacho e regimes aduaneiros** → `PR-COMEX-03`
- **SM-COMEX-04 — Documentos, OCR, ocorrências e prazos** → `PR-COMEX-04`
- **SM-COMEX-05 — Recebimento, devolução e fechamento** → `PR-COMEX-05`

## Atores principais

- Analista de COMEX
- Gestor de COMEX
- Despachante/operador externo
- Financeiro
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/COMEX/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/COMEX/`
- Controllers: `docs/requirements/pr-programs/COMEX/`
