---
id: BR-03-FISCAL
title: Fiscal — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Fiscal

## Objetivo

Emitir e registrar documentos fiscais argentinos e calcular tributos, percepções, retenções e obrigações por vigência e jurisdição.

## Escopo do primeiro release

- Factura A/B/C conforme aplicabilidade, notas de crédito/débito e remitos;
- integração substituível com SI Factura;
- IVA, percepções, IIBB e tributos aduaneiros;
- padrões por província e condição do cliente;
- contingência não fiscal e importação de comprovante ARCA;

## Entidades nucleares

- `TaxRule`
- `TaxJurisdiction`
- `TaxCondition`
- `TaxRateVersion`
- `FiscalDocument`
- `FiscalDocumentLine`
- `FiscalAuthorization`
- `TaxPerception`
- `TaxRetention`
- `TaxObligation`
- `TaxReconciliation`

## Estados mínimos

`DRAFT → VALIDATED → QUEUED → PENDING_AUTHORIZATION → AUTHORIZED → REJECTED → CANCELLED → IMPORTED_EXTERNAL`

## Workflows essenciais

1. Determinar tipo de comprovante.
2. Calcular tributos por linha e cabeçalho.
3. Enviar à SI Factura.
4. Tratar pendência/rejeição/contingência.
5. Emitir nota vinculada.
6. Apurar e reconciliar obrigação.

## Páginas mínimas

- Painel fiscal;
- Regras e vigências;
- Emissão de comprovantes;
- Fila SI Factura;
- Contingência;
- IIBB por jurisdição;
- Apurações e reconciliações;

## Motores e regras técnicas

- tax determination por data, jurisdição, cliente e item;
- validação CUIT e condição IVA;
- descrição com despacho quando aplicável;
- numeração e idempotência fiscal;
- calendário de obrigações;

## Integrações

- SI Factura;
- ARCA por adapter/registro externo;
- COMARB/AGIP por importação configurável;
- comercial;
- compras;
- contabilidade;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- nenhum CAE é inventado offline;
- reenvio não duplica comprovante;
- regra fiscal conserva vigência e fonte;
- nota de crédito referencia documento original;
- apuração permite drill-down até documento e linha;

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
