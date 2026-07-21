# 8. Compras — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Controlar requisições, cotações, pedidos nacionais, serviços, despesas, recebimentos, faturas de fornecedor, contratos e obrigações a pagar.

## Submódulos e PRs
- **SM-PURCHASING-01 — Requisições e compras emergenciais** → `PR-PURCHASING-01`
- **SM-PURCHASING-02 — Cotação e pedido de compra** → `PR-PURCHASING-02`
- **SM-PURCHASING-03 — Recebimento de bens e serviços** → `PR-PURCHASING-03`
- **SM-PURCHASING-04 — Fatura e contas a pagar** → `PR-PURCHASING-04`
- **SM-PURCHASING-05 — Contratos, reposição e análise** → `PR-PURCHASING-05`

## Atores principais

- Solicitante
- Comprador
- Aprovador
- Contas a pagar
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/PURCHASING/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/PURCHASING/`
- Controllers: `docs/requirements/pr-programs/PURCHASING/`
