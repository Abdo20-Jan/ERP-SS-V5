# 3. Fiscal — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Determinar tributos e emitir, controlar, apurar e reconciliar documentos fiscais argentinos por vigência, jurisdição, cliente, produto e operação.

## Submódulos e PRs
- **SM-FISCAL-01 — Motor tributário e vigências** → `PR-FISCAL-01`
- **SM-FISCAL-02 — Emissão SI Factura/ARCA** → `PR-FISCAL-02`
- **SM-FISCAL-03 — Notas, remitos e contingência** → `PR-FISCAL-03`
- **SM-FISCAL-04 — Percepções, retenções e obrigações** → `PR-FISCAL-04`
- **SM-FISCAL-05 — Reconciliação e auditoria fiscal** → `PR-FISCAL-05`

## Atores principais

- Analista fiscal
- Contabilidade
- Faturamento
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/FISCAL/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/FISCAL/`
- Controllers: `docs/requirements/pr-programs/FISCAL/`
