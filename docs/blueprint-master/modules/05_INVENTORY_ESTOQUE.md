# 5. Estoque — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Controlar estoque físico, disponível, reservado e em trânsito por SKU, despacho, contêiner, depósito, posição e camada FIFO.

## Submódulos e PRs
- **SM-INVENTORY-01 — Depósitos, posições e disponibilidade** → `PR-INVENTORY-01`
- **SM-INVENTORY-02 — Recebimentos e movimentos** → `PR-INVENTORY-02`
- **SM-INVENTORY-03 — Reserva, alocação e FIFO** → `PR-INVENTORY-03`
- **SM-INVENTORY-04 — Sincronização com operadores** → `PR-INVENTORY-04`
- **SM-INVENTORY-05 — Ajustes, perdas e relatórios** → `PR-INVENTORY-05`

## Atores principais

- Logística
- Operador de depósito
- Gestor de estoque
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/INVENTORY/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/INVENTORY/`
- Controllers: `docs/requirements/pr-programs/INVENTORY/`
