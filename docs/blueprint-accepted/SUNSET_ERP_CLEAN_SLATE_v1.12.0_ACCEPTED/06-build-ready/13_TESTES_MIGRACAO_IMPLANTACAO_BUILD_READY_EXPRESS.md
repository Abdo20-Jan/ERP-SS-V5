---
id: BR-13-QA-GOLIVE
title: Testes, migração e implantação — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Testes, migração e implantação

## Objetivo

Homologar o ERP, carregar dados, reconciliar saldos, executar cutover, rollback e suporte ao go-live.

## Escopo do primeiro release

- testes unitários, integração, E2E, contrato, carga e segurança;
- UAT por processo ponta a ponta;
- migração de mestres e saldos;
- leitura assistida de extratos e documentos históricos;
- cutover, rollback, contingência e hypercare;

## Entidades nucleares

- `TestCase`
- `TestRun`
- `Defect`
- `MigrationBatch`
- `MigrationRecord`
- `ReconciliationResult`
- `CutoverTask`
- `Release`
- `RollbackPlan`
- `GoLiveIncident`

## Estados mínimos

`PLANNED → READY → RUNNING → PASSED → FAILED → BLOCKED → APPROVED → ROLLED_BACK → CLOSED`

## Workflows essenciais

1. Preparar dados de teste.
2. Executar suites.
3. Triar defeitos.
4. Migrar e validar.
5. Reconciliar.
6. Ensaiar cutover.
7. Liberar.
8. Reverter se necessário.
9. Operar hypercare.

## Páginas mínimas

- Painel de qualidade;
- Casos e execuções;
- Defeitos;
- Migração;
- Reconciliação;
- Plano de cutover;
- Releases;
- Incidentes de go-live;

## Motores e regras técnicas

- quality gates CI/CD;
- data validation rules;
- reconciliation tolerances;
- load profiles;
- rollback decision matrix;

## Integrações

- GitHub/CI;
- ambientes Railway/Vercel;
- observabilidade;
- backups;
- todos os módulos;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- motores financeiros têm casos de precisão e arredondamento;
- restore e modo offline são testados;
- migração reconcilia totais e amostras;
- rollback tem tempo e responsável definidos;
- go-live não ocorre com defeito crítico aberto;

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
