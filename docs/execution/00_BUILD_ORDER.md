# Ordem de construção recomendada

## Fase 0 — bootstrap técnico

1. `BOOT-01` monorepo, dependências, lint, testes e CI.
2. `PR-PLATFORM-05-S01` contratos básicos, health, logging e observabilidade.
3. `PR-PLATFORM-01-S01` identidade e modelo inicial de autorização.
4. `PR-PLATFORM-02-S01` auditoria append-only e parâmetros.
5. `PR-QA-01-S01` quality gates e arquitetura de testes.

## Fase 1 — fundação transversal

- concluir slices iniciais de PLATFORM-01, PLATFORM-02 e PLATFORM-05;
- design system e shell web;
- DB/migrations/outbox/jobs;
- armazenamento de documentos;
- desktop shell e sincronização mínima somente depois dos contratos centrais.

## Fase 2 — cadeia econômica

1. COMEX
2. LANDED
3. FISCAL
4. ACCOUNTING
5. INVENTORY
6. TREASURY
7. SALES
8. PURCHASING
9. CRM
10. CLOSE
11. COMP
12. QA/migração/go-live

## Paralelismo controlado

Após a fundação, rode no máximo quatro lanes:

- Lane A: COMEX → LANDED → INVENTORY
- Lane B: FISCAL → ACCOUNTING → CLOSE
- Lane C: TREASURY → SALES → PURCHASING → CRM
- Lane D: PLATFORM/QA contínuos

Contratos, migrations e eventos compartilhados passam por uma única lane proprietária por vez.
