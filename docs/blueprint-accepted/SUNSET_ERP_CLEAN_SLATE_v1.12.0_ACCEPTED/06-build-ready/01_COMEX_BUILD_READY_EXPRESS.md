---
id: BR-01-COMEX
title: COMEX — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# COMEX

## Objetivo

Controlar importação definitiva, trânsito aduaneiro, Zona Primária Aduaneira e Zona Franca, do pedido internacional ao fechamento.

## Escopo do primeiro release

- pedido internacional, proforma, produção e saldos;
- embarques, bookings, BLs, contêineres e lacres;
- despachos, canais, exigências, tributos e liberações;
- trânsito, Zona Primária Aduaneira e Zona Franca como tipos separados;
- documentos, OCR assistido, ocorrências e custos tardios;

## Entidades nucleares

- `InternationalOrder`
- `InternationalOrderLine`
- `Shipment`
- `Container`
- `BillOfLading`
- `CustomsDeclaration`
- `CustomsRegime`
- `CustomsEvent`
- `ImportDocument`
- `ImportOccurrence`

## Estados mínimos

`DRAFT → PENDING_APPROVAL → ORDER_SENT → PROFORMA_CONFIRMED → IN_PRODUCTION → READY_TO_SHIP → BOOKED → SHIPPED → IN_TRANSIT → ARRIVED → IN_CUSTOMS → RELEASED → DECONSOLIDATED → WAREHOUSE_CONFIRMED → CONTAINER_RETURNED → CLOSED → CANCELLED`

## Workflows essenciais

1. Criar e aprovar pedido internacional.
2. Registrar produção e embarques parciais.
3. Conferir invoice, packing list e BL.
4. Acompanhar ETA, chegada e despacho.
5. Liberar, desconsolidar e receber.
6. Fechar/reabrir e registrar custos tardios.

## Páginas mínimas

- Painel COMEX;
- Pedidos internacionais;
- Embarques e contêineres;
- Despachos e regimes;
- Documentos e divergências;
- Agenda de ETA e devolução;
- Fechamento da importação;

## Motores e regras técnicas

- state machine por tipo de regime;
- conferência documental e tolerâncias;
- cálculo de saldos embarcados/pendentes;
- deadline de free time e devolução;
- geração de eventos para landed cost, estoque, fiscal e contabilidade;

## Integrações

- object storage/OCR;
- e-mail/importação de documentos;
- depósitos e operadores;
- despachante e arquivos aduaneiros;
- tesouraria e pagamentos internacionais;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- um pedido pode gerar múltiplos embarques, contêineres e despachos;
- divergência documental abre ocorrência auditada;
- mercadoria só fica vendável após liberação e confirmação do depósito nacional;
- reabertura exige permissão e mantém histórico;
- custos tardios permanecem ligados à importação;

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
