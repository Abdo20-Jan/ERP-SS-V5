# PR-INVENTORY-01-S09: Impacto contabil

## Objetivo
Entregar contrato de impacto contabil de Inventory: propostas de lancamento balanceadas (debito=credito, ARS, contas/dimensoes do MS-01 read-only), sem lancar no ledger.

## Decisoes do proprietario (registradas 2026-07-22)
- Contas aprovadas: 1.01.05 Mercadorias em Estoque, 1.01.06 Mercadorias em Transito, 5.01.07 Ajustes e Perdas de Estoque, 6.01.01 Contrapartida de Controle de Estoque (transitoria ate MS-03+)
- DimensionType estendido: WAREHOUSE, SKU, DESPACHO, CONTAINER
- Q0411-Q0420 (fiscal) DEFERRED; Q0421-Q0430 (reconciliacao) DEFERRED; Q0441-Q0450 (KPIs) DEFERRED
- Entidade nova InventoryPostingProposal no dominio Inventory, FK logica (sem FK fisica)

## Arquivos
- Criados: domain aggregate/commands/events/enums/repository/validator, contracts types/events, DB repo/migration/ensure, API service/controller/DTO, 4 specs
- Modificados: domain/index, dimension-type.enum, contracts/types+events indexes, DB schema/seed/pkg/index, warehouse.module, validate-guards

## Testes
- Domain: balanced ok, unbalanced rejected, reverse mirrored, version conflict
- Service: create, list, validate via mock
- Contract: event types exported
- Auth: 6 endpoints covered

## Riscos
- Conta 6.01.01 transitoria (MS-03+)
- Template via seed/admin, sem geracao automatica → sem posting rule disfarcada
- DimensionType afeta Accounting; handoff accounting obrigatorio

## Status
READY_WITH_RISKS
