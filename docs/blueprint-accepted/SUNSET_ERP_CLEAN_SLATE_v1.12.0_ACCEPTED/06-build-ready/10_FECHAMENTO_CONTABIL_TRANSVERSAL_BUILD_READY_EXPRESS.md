---
id: BR-10-CLOSE
title: Fechamento contábil transversal — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Fechamento contábil transversal

## Objetivo

Fechar períodos e reconciliar eventos operacionais, fiscais, financeiros, estoque, câmbio e demonstrações.

## Escopo do primeiro release

- checklists diário, semanal, mensal, semestral, anual e fiscal;
- subledgers versus General Ledger;
- reavaliação cambial;
- provisões, accruals e reversões;
- balanço, DRE e fluxo de caixa;

## Entidades nucleares

- `CloseCalendar`
- `CloseTask`
- `CloseChecklist`
- `Reconciliation`
- `ReconciliationItem`
- `Accrual`
- `Provision`
- `FXRevaluationRun`
- `StatementRun`
- `CloseEvidence`

## Estados mínimos

`OPEN → IN_PROGRESS → BLOCKED → PENDING_REVIEW → COMPLETED → REOPENED`

## Workflows essenciais

1. Gerar checklist.
2. Executar reconciliações.
3. Registrar ajustes.
4. Reavaliar moeda.
5. Emitir demonstrações.
6. Aprovar fechamento.
7. Reabrir com auditoria.

## Páginas mínimas

- Cockpit de fechamento;
- Reconciliações;
- Provisões e accruals;
- Reavaliação cambial;
- Balanço/DRE/fluxo;
- Evidências e assinatura;

## Motores e regras técnicas

- reconciliation rules;
- cutoff por data contábil;
- FX closing rate;
- statement mapping;
- variance thresholds e exceções;

## Integrações

- todos os subledgers;
- câmbio master;
- documentos;
- BI/exportação Excel;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- todo saldo material tem reconciliação ou exceção;
- fechamento bloqueia postagem comum no período;
- reabertura deixa motivo e aprovador;
- demonstrações fecham com razão;
- drill-down alcança documento e evento operacional;

## Entrega técnica mínima

- migrations e constraints;
- serviços de domínio e APIs OpenAPI;
- eventos/outbox e consumidores necessários;
- telas web e desktop essenciais;
- operação offline onde aplicável;
- testes unitários, integração e E2E críticos;
- feature flag, observabilidade, runbook e rollback.

## Lacunas permitidas durante o início

Detalhes P1/P2 podem permanecer parametrizados ou atrás de feature flag. Qualquer lacuna que afete integridade financeira, fiscal, contábil, estoque, segurança ou auditoria deve ser escalada antes da ativação em produção, mas não impede a criação da fundação e do fluxo feliz.
