---
id: BR-08-PURCHASING
title: Compras — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Compras

## Objetivo

Controlar requisições, cotações, pedidos nacionais, serviços, despesas, recebimento, faturas e obrigações a pagar.

## Escopo do primeiro release

- compras planejadas e emergenciais;
- bens, serviços, consumo, ativo e despesa;
- fornecedores nacionais e estrangeiros;
- captura detalhada de faturas;
- pagamentos a credor diferente por conta de terceiros;

## Entidades nucleares

- `PurchaseRequest`
- `RequestLine`
- `SupplierQuotation`
- `PurchaseOrder`
- `PurchaseOrderLine`
- `GoodsReceipt`
- `ServiceReceipt`
- `SupplierInvoice`
- `SupplierInvoiceLine`
- `PurchaseApproval`

## Estados mínimos

`DRAFT → PENDING_APPROVAL → APPROVED → SENT → PARTIALLY_RECEIVED → RECEIVED → INVOICED → CLOSED → CANCELLED`

## Workflows essenciais

1. Solicitar compra.
2. Comparar propostas.
3. Aprovar e emitir pedido.
4. Receber bem/serviço.
5. Capturar e conferir fatura.
6. Gerar obrigação.
7. Fechar ou cancelar.

## Páginas mínimas

- Requisições;
- Cotações;
- Pedidos de compra;
- Recebimentos;
- Faturas de fornecedor;
- Compras emergenciais;
- Painel de pendências;

## Motores e regras técnicas

- classificação contábil/fiscal sugerida;
- three-way match quando aplicável;
- workflow por valor/categoria;
- OCR com confiança por campo;
- saldo de pedido e tolerância;

## Integrações

- Party Master;
- estoque;
- fiscal;
- tesouraria;
- contabilidade;
- documentos/OCR;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- fatura conserva itens líquidos e tributos separados;
- compra emergencial deixa trilha e regularização;
- alteração bancária mantém histórico;
- recebimento parcial mantém saldo;
- obrigação referencia pedido/recebimento/fatura quando existirem;

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
