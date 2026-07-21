# 12. Módulos complementares — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Cobrir qualidade, certificações, garantia, reclamações, atendimento, ativos, manutenção, RH básico, jurídico, compliance, BI e KPIs.

## Submódulos e PRs
- **SM-COMP-01 — Qualidade e certificações** → `PR-COMP-01`
- **SM-COMP-02 — Garantia, reclamação e devolução** → `PR-COMP-02`
- **SM-COMP-03 — Atendimento e SLA** → `PR-COMP-03`
- **SM-COMP-04 — Ativos, manutenção, RH e jurídico** → `PR-COMP-04`
- **SM-COMP-05 — BI, KPIs e compliance** → `PR-COMP-05`

## Atores principais

- Qualidade
- Atendimento
- RH
- Jurídico
- Compliance
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/COMP/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/COMP/`
- Controllers: `docs/requirements/pr-programs/COMP/`
