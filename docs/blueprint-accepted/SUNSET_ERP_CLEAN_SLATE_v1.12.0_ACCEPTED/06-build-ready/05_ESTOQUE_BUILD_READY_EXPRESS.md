---
id: BR-05-INVENTORY
title: Estoque — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Estoque

## Objetivo

Controlar saldo físico, disponível, reservado e em trânsito por SKU, despacho, contêiner, depósito, posição e camada FIFO.

## Escopo do primeiro release

- quatro depósitos terceirizados e futuros depósitos próprios;
- endereçamento detalhado por depósito;
- entrada, saída, reserva, transferência, ajuste, perda e devolução;
- integração API/Excel e reconciliação semanal;
- QR por SKU + despacho;

## Entidades nucleares

- `Warehouse`
- `WarehouseLocation`
- `InventoryLayer`
- `InventoryBalance`
- `StockMovement`
- `Reservation`
- `StockTransfer`
- `WarehouseSnapshot`
- `InventoryDivergence`
- `InventoryOccurrence`

## Estados mínimos

`IN_TRANSIT → AT_PORT → CUSTOMS → QUARANTINE → AVAILABLE → RESERVED → PICKING → IN_DELIVERY → DAMAGED → BLOCKED → SOLD → LOST`

## Workflows essenciais

1. Receber importação.
2. Confirmar posição.
3. Reservar/liberar.
4. Separar e expedir.
5. Transferir.
6. Conciliar snapshot.
7. Tratar divergência e perda.

## Páginas mínimas

- Painel de estoque;
- Saldo por SKU/despacho;
- Mapa de depósitos;
- Movimentos;
- Reservas;
- Transferências;
- Reconciliação e ocorrências;
- QR e PDF do produto;

## Motores e regras técnicas

- FIFO por disponibilidade de venda;
- available-to-promise;
- reserva parcial;
- reconciliação tolerância zero;
- conta a cobrar do operador após perda aprovada;

## Integrações

- COMEX;
- landed cost;
- comercial;
- depósitos API/Excel;
- contabilidade;
- logística de entrega;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- saldo nunca fica negativo sem override auditado;
- movimento conserva origem, destino e documento;
- remito assinado confirma saída;
- divergência zero abre ocorrência urgente;
- histórico de camada FIFO permanece após venda;

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
