# PR-INVENTORY-01-S10: Importacao e exportacao de dados

## Objetivo
Suporte backend/contratual para exportar (CSV/JSON, filtros, auditoria, redaction) e importar (upload -> validacao por linha -> pre-via com erros -> confirmacao -> aplicacao idempotente) dados de Inventory.

## Escopo
Import/export: Warehouses, Locations, Tasks, Documents. Formatos: CSV + JSON export, CSV import. UI LAY-25 DEFERRED. Saldo real/stub excluido.

## Decisoes
- Fluxo sincrono com job persistido + aplicacao por lote; worker real DEFERRED
- CSV parser proprio (sem dep), ; separador, UTF-8, anti-injection
- Whistelist de kinds importaveis; max 2MB/5000 linhas

## Arquivos
Criados: domain aggregates (import/export job), commands/events/enums/validator/repo, contracts types/events, DB repo/migration/ensure, API service/2 controllers, 4 specs, trace.
Modificados: domain/index, dimension-type.enum, contracts indexes, DB schema/seed/pkg/index, warehouse.module, validate-guards

## Testes
Domain: create/validate/apply/export/CSV-parser/sanitize. Service: create import/export. Contract: event types. Auth: 10 endpoints.

## Status
READY_WITH_RISKS
