---
id: BR-02-LANDED
title: Landed cost — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Landed cost

## Objetivo

Calcular e reconciliar custo provisório, contábil, gerencial e cash-out por importação, despacho, contêiner, SKU e camada de estoque.

## Escopo do primeiro release

- catálogo versionado de componentes de custo;
- estimativas e provisões;
- rateio por FOB, quantidade, peso, volume ou regra configurada;
- reprocessamento por custos tardios;
- margem e reconciliação;

## Entidades nucleares

- `CostComponent`
- `CostEligibilityRule`
- `CostPool`
- `CostPoolItem`
- `AllocationRule`
- `CostAllocation`
- `ProvisionalCost`
- `FinalCostVersion`
- `CostReconciliation`

## Estados mínimos

`DRAFT → CALCULATED → PENDING_REVIEW → APPROVED → APPLIED → REOPENED → SUPERSEDED`

## Workflows essenciais

1. Criar pool a partir de documentos e estimativas.
2. Classificar elegibilidade por base de custo.
3. Ratear e revisar.
4. Aplicar ao estoque.
5. Recalcular custo tardio.
6. Reconciliar pool versus documentos e estoque.

## Páginas mínimas

- Painel de custo;
- Pool da importação;
- Catálogo de componentes;
- Simulador de rateio;
- Comparativo provisório × definitivo;
- Reconciliação e margem;

## Motores e regras técnicas

- motor decimal de rateio;
- versionamento de regras e vigência;
- conversão cambial por evento;
- ajuste estoque remanescente versus custo do período;
- cálculo de margem sobre preço líquido e sobre custo;

## Integrações

- COMEX;
- fiscal;
- estoque;
- contabilidade;
- tesouraria;
- documentos/OCR;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- a soma dos rateios fecha exatamente com o pool;
- IVA e percepções recuperáveis não entram no custo contábil;
- cada relatório identifica a base de custo;
- reprocessamento nunca apaga versão anterior;
- parcela vendida de custo tardio vai para ajuste do período;

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
