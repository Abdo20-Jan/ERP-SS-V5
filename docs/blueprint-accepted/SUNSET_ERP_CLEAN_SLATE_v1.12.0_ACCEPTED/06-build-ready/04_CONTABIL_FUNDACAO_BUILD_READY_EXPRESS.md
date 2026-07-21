---
id: BR-04-ACCOUNTING
title: Contábil — fundação — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Contábil — fundação

## Objetivo

Fornecer General Ledger, plano de contas, dimensões, diários, moedas, períodos e demonstrações básicas.

## Escopo do primeiro release

- plano de contas hierárquico e versionado;
- lançamentos automáticos e manuais;
- dimensões analíticas combináveis;
- livro em ARS e apresentação em USD;
- balanço, DRE, razão e balancete;

## Entidades nucleares

- `ChartOfAccount`
- `Account`
- `AccountingDimension`
- `Journal`
- `JournalEntry`
- `JournalLine`
- `PostingRule`
- `AccountingPeriod`
- `ExchangeRevaluation`
- `FinancialStatementMap`

## Estados mínimos

`DRAFT → PENDING_APPROVAL → POSTED → REVERSED → CANCELLED`

## Workflows essenciais

1. Configurar contas e dimensões.
2. Receber evento operacional.
3. Gerar proposta contábil.
4. Validar débito=crédito.
5. Aprovar/postar/reverter.
6. Fechar e reabrir período.

## Páginas mínimas

- Plano de contas;
- Diários e lançamentos;
- Regras de contabilização;
- Períodos;
- Razão e balancete;
- Balanço e DRE;
- Drill-down contábil;

## Motores e regras técnicas

- double-entry invariant;
- posting rules por evento e vigência;
- conversão e reavaliação cambial;
- mapeamento de demonstrações;
- reversões não destrutivas;

## Integrações

- todos os módulos via eventos contábeis;
- câmbio master;
- tesouraria;
- fiscal;
- landed cost;
- estoque;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- nenhum lançamento desbalanceado é postado;
- todo lançamento automático referencia evento de origem;
- reversão cria novo lançamento;
- demonstração reconcilia com o razão;
- USD é apresentação sem substituir livro funcional em ARS;

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
