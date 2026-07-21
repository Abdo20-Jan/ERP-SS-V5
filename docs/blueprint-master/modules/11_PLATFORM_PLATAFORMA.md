# 11. Plataforma — Blueprint do módulo

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`

**Objetivo:** Entregar a fundação técnica e operacional compartilhada: identidade, permissões, aprovações, auditoria, parâmetros, documentos, OCR, desktop offline, integrações, jobs, observabilidade e continuidade.

## Submódulos e PRs
- **SM-PLATFORM-01 — Identidade, RBAC e escopos** → `PR-PLATFORM-01`
- **SM-PLATFORM-02 — Aprovações, override, auditoria e parâmetros** → `PR-PLATFORM-02`
- **SM-PLATFORM-03 — Documentos, OCR, busca e notificações** → `PR-PLATFORM-03`
- **SM-PLATFORM-04 — Desktop, offline e sincronização** → `PR-A-DEFINIR`
- **SM-PLATFORM-05 — APIs, jobs, observabilidade e continuidade** → `PR-PLATFORM-05`

## Atores principais

- Administrador
- Segurança/TI
- Usuário final
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

- Corpus de módulo: `docs/blueprint-accepted/.../05-corpus-71500/01-modulos/PLATFORM/`
- Blueprints dos submódulos: `docs/blueprint-master/submodules/PLATFORM/`
- Controllers: `docs/requirements/pr-programs/PLATFORM/`
