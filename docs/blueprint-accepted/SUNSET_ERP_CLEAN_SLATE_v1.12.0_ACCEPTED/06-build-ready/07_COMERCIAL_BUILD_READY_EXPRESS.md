---
id: BR-07-SALES
title: Comercial — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Comercial

## Objetivo

Executar consulta, preço, orçamento, pedido, reserva, faturamento, recebimento, remito, retirada/entrega, devolução e comissão.

## Escopo do primeiro release

- B2B, B2C, marketplace, portal, WhatsApp e e-mail;
- preço por custo, margem e câmbio;
- descontos e aprovações;
- pagamento antes da liberação ou financeira;
- entregas parciais e comissão após quitação;

## Entidades nucleares

- `Quote`
- `QuoteLine`
- `SalesOrder`
- `SalesOrderLine`
- `PriceCalculation`
- `DiscountRequest`
- `DeliveryOrder`
- `ReturnOrder`
- `CommissionAccrual`
- `CustomerCommunication`

## Estados mínimos

`DRAFT → QUOTED → PENDING_APPROVAL → CONFIRMED → AWAITING_PAYMENT → PAID → RESERVED → PARTIALLY_DELIVERED → DELIVERED → CANCELLED → RETURNED`

## Workflows essenciais

1. Consultar e cotar.
2. Simular margem e desconto.
3. Confirmar pedido e reservar.
4. Faturar.
5. Confirmar recebimento/financeira.
6. Emitir remito e entregar.
7. Devolver e emitir nota.
8. Gerar comissão.

## Páginas mínimas

- Painel comercial;
- Orçamentos;
- Pedidos;
- Simulador de preço/margem;
- Aprovações de desconto;
- Entregas;
- Devoluções;
- Comissões;

## Motores e regras técnicas

- pricing por base de custo e câmbio;
- discount approval;
- available-to-promise;
- release gate por recebimento;
- commission payable após quitação integral;

## Integrações

- CRM;
- estoque;
- fiscal/SI Factura;
- tesouraria;
- logística;
- contabilidade;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- orçamento não reserva estoque;
- pedido confirmado reserva por camada;
- liberação depende de crédito efetivamente recebido;
- entrega parcial mantém saldo;
- margem mostra valor e percentuais nas duas bases aprovadas;

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
