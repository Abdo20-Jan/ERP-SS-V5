# PR-INVENTORY-01-S05 — Traceability

**Slice:** PR-INVENTORY-01-S05 — Warehouse/location detail BFF + progressive validation  
**Module:** INVENTORY  
**Branch:** codex/pr-inventory-01-s05-detail  
**Base:** S01–S04 @ bc4e394  

## Objetivo testável

API retorna composição Object-Page para warehouse e location (header, tabs estáveis, summary, previews, history, availableActions/primaryAction) e endpoints de validação progressiva create/edit sem persistir.

## COVERED

| Range | Entrega |
|---|---|
| Q0201–Q0210 | Detail page via BFF API (`GET .../detail`) |
| Q0211–Q0220 | Create/edit existentes (S01/S02) + `POST .../validate` progressivo |

## DEFERRED

| Range | Motivo |
|---|---|
| Q0221–Q0230 | Batch actions |
| Q0231–Q0240 | Keyboard shortcuts |
| Q0241–Q0250 | Notifications |
| — | UI LAY-02/04 frontend |
| — | Real inventory balance/ATP (`balanceAvailable` always false — D-003.14 stub) |
| — | OpenAPI YAML |
| — | Migrations (nenhuma) |

## API (prefixo global `/v1`)

| Method | Path | Permission |
|---|---|---|
| GET | `/inventory/warehouses/:id/detail` | `inventory:read` |
| GET | `/inventory/warehouses/:warehouseId/locations/:locationId/detail` | `inventory:read` |
| POST | `/inventory/warehouses/validate` | `inventory:write` |
| POST | `/inventory/locations/validate` | `inventory:write` |

## Contratos

- `packages/contracts/src/types/inventory-detail.types.ts`
  - `WarehouseDetailDto`, `LocationDetailDto`
  - `ValidateWarehouseDto`, `ValidateLocationDto`, `ProgressiveValidationResultDto`

## Implementação

| Arquivo | Papel |
|---|---|
| `apps/api/src/inventory/inventory-detail.service.ts` | Composição BFF + dry-run domain |
| `apps/api/src/inventory/inventory-detail.controller.ts` | HTTP + guards |
| `apps/api/src/inventory/warehouse.module.ts` | Wire controller/service |
| `scripts/validate-guards.py` / `scripts/verify-guards.mjs` | SCOPE + detail controller |

## availableActions

- Warehouse active: `read`, `upload_document`, `update`, `create_location`, `configure_levels`, `deactivate` (activePhysical==0) **ou** `request_override_deactivate` (activePhysical>0)
- Warehouse inactive: `read`, `upload_document`, `activate`
- Location active: `read`, `upload_document`, `update`, `deactivate`, `request_override_deactivate`
- Location inactive: `read`, `upload_document`, `activate`
- `primaryAction`: `update` se active, senão `activate`, senão primeira ação

## Invariantes

- BOLA: location detail 404 se `location.warehouseId !== warehouseId`
- History via `prisma.auditLog` (entityType warehouse / warehouse_location) — **não** exige `audit:read`
- Validate: DomainError → field errors (HTTP 200 body), sem 500
- `summary.balanceAvailable` sempre `false` até slice de saldo

## Testes

| Arquivo | Cobertura |
|---|---|
| `inventory-detail.service.spec.ts` | compose, 404, BOLA, validate ok/invalid, actions |
| `inventory-detail.auth.spec.ts` | 4 endpoints permission matrix |
| `inventory-detail.contract.spec.ts` | DTO shapes |

## Evidence 2026-07-21

| Gate | Result |
|---|---|
| contracts build | tsc OK |
| domain build | tsc OK |
| api inventory-detail | **16 passed** (3 files) |
| guards | **89 endpoints / 13 controllers** |

## Risks

| Risk | Severity | Mitigation |
|---|---|---|
| balanceAvailable stub | medium | documentado; slice futuro de saldo |
| History sem paginação além de take 20 | low | preview only |
| OpenAPI YAML ausente | low | deferred no slice |
| Feature fora de main | medium | branch dedicada |

## Rollback

1. `git revert <commit>` — sem migration
2. Remover controller do module se hotfix parcial

## Fontes consultadas

- Prompt PR-INVENTORY-01-S05
- `docs/governance/DECISION_PRECEDENCE.md`
- `docs/traceability/PR-INVENTORY-01-S04.md` (padrão)
- `apps/api/src/inventory/*` S01–S04 patterns
- `packages/domain` Warehouse / WarehouseLocation aggregates
- SOURCE_BASIS [OPENAPI][OWASP-API][PROJECT-INTEGRATIONS]

## Status

**READY_WITH_RISKS** — balance stub + OpenAPI deferred + branch not on main
