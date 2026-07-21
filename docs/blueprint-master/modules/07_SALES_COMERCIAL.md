# 7. Comercial — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Executar preço, orçamento, pedido, reserva, faturamento, recebimento, liberação, remito, retirada/entrega, devolução e comissão nos canais B2B, B2C, marketplace, portal, WhatsApp e e-mail.

## Submódulos e PRs
- **SM-SALES-01 — Preço, catálogo e margem** → `PR-SALES-01`
- **SM-SALES-02 — Orçamento e desconto** → `PR-SALES-02`
- **SM-SALES-03 — Pedido, reserva e disponibilidade** → `PR-SALES-03`
- **SM-SALES-04 — Faturamento, pagamento e liberação** → `PR-SALES-04`
- **SM-SALES-05 — Entrega, devolução e comissão** → `PR-SALES-05`

## Atores principais

- Vendedor
- Gestor comercial
- Faturamento
- Logística
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/SALES/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/SALES/`
- Controllers: `docs/requirements/pr-programs/SALES/`
