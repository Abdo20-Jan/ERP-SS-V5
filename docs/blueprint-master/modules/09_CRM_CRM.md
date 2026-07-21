# 9. CRM — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Capturar, deduplicar e distribuir leads; controlar contas, contatos, carteira, oportunidades, atividades, comunicação, forecast, metas e atendimento pré-venda.

## Submódulos e PRs
- **SM-CRM-01 — Entrada, deduplicação e distribuição de leads** → `PR-CRM-01`
- **SM-CRM-02 — Contas, contatos e carteira** → `PR-CRM-02`
- **SM-CRM-03 — Oportunidades, pipeline e forecast** → `PR-CRM-03`
- **SM-CRM-04 — Atividades, WhatsApp, e-mail e tickets** → `PR-CRM-04`
- **SM-CRM-05 — Metas, desempenho e offline** → `PR-CRM-05`

## Atores principais

- Vendedor
- Gestor comercial
- Atendimento
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/CRM/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/CRM/`
- Controllers: `docs/requirements/pr-programs/CRM/`
