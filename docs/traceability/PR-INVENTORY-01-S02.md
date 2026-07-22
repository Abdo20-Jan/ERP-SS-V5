# PR-INVENTORY-01-S02 — Traceability

**Slice:** PR-INVENTORY-01-S02  
**Module:** INVENTORY  
**Scope delivered:** domain + contracts + API + DB migration/seed/tests (WarehouseLocation + WarehouseLocationConfig)

## Objective

Modelo de domínio e API testáveis para hierarquia de posições de depósito (1–5 níveis), config 1:1 por warehouse, locais virtuais TRANSIT/PORT, desativação com bloqueio de filhos ativos, e concorrência por `expectedVersion`.

## Out of scope (this delivery)

- UI
- COMEX
- S03 cascade
- OpenAPI YAML (contratos TS publicados)

## Domain model

### Aggregates

| Aggregate | Ownership | Key invariants |
|-----------|-----------|----------------|
| `WarehouseLocationConfig` | inventory | 1:1 warehouse; maxLevels 1–5; `allowsLevel`; cannot reduce max below highest physical |
| `WarehouseLocation` | inventory | physical level 1–5; virtual level 0; path `A>B>C`; parent level = level-1; virtual cannot parent; deactivate blocked if active children |

### Commands

- `ConfigureWarehouseLevelsCommand`
- `CreateLocationCommand`
- `UpdateLocationCommand` (name/capacity only)
- `DeactivateLocationCommand`
- `ActivateLocationCommand`

### Events (past tense)

- `LocationCreated`
- `LocationUpdated`
- `LocationDeactivated`
- `LocationActivated`
- `WarehouseLevelsConfigured`

### Errors

| Class | code | API mapping |
|-------|------|-------------|
| `LocationValidationError` | `VALIDATION_ERROR` | ValidationError |
| `LocationInactiveError` | `LOCATION_INACTIVE` | ValidationError |
| `LocationConcurrencyError` | `VERSION_CONFLICT` | ConflictError |
| `LocationHasChildrenError` | `LOCATION_HAS_ACTIVE_CHILDREN` | ConflictError |

### State machine (location)

```
ACTIVE --deactivate(reason, hasActiveChildren=false)--> INACTIVE
INACTIVE --activate()--> ACTIVE
ACTIVE --update(name|capacity)--> ACTIVE
INACTIVE --update--> LocationInactiveError
ACTIVE --deactivate(hasActiveChildren=true)--> LocationHasChildrenError
```

## Contracts

### DTOs (`packages/contracts/src/types/warehouse-location.types.ts`)

- `ConfigureWarehouseLevelsDto`
- `WarehouseLocationConfigDto`
- `CreateLocationDto`
- `UpdateLocationDto`
- `DeactivateLocationDto`
- `WarehouseLocationDto`
- `LocationTreeNodeDto` (children[])
- `WarehouseLocationListDto`
- `LocationPathDto`

### Events (`packages/contracts/src/events/inventory-location.events.ts`)

- `LOCATION_EVENT_TYPES`

## API

### Routes (`LocationController`)

| Method | Path | Permission |
|--------|------|------------|
| PUT | inventory/warehouses/:wid/locations/config | inventory:write |
| GET | inventory/warehouses/:wid/locations/config | inventory:read |
| POST | inventory/warehouses/:wid/locations | inventory:write |
| GET | inventory/warehouses/:wid/locations | inventory:read |
| GET | inventory/warehouses/:wid/locations/:id | inventory:read |
| PATCH | inventory/warehouses/:wid/locations/:id | inventory:write |
| POST | inventory/warehouses/:wid/locations/:id/activate | inventory:write |
| POST | inventory/warehouses/:wid/locations/:id/deactivate | inventory:write |
| GET | inventory/locations/:id/path | inventory:read |

### Audit actions (same tx as persist)

- `location.config.updated`
- `location.created`
- `location.updated`
- `location.activated`
- `location.deactivated`

### Logger

- `api.inventory.location`

## Files

### Domain

- `packages/domain/src/inventory/virtual-location-type.enum.ts`
- `packages/domain/src/inventory/warehouse-location.commands.ts`
- `packages/domain/src/inventory/warehouse-location.events.ts`
- `packages/domain/src/inventory/warehouse-location.validator.ts`
- `packages/domain/src/inventory/warehouse-location-config.aggregate.ts`
- `packages/domain/src/inventory/warehouse-location.aggregate.ts`
- `packages/domain/src/inventory/warehouse-location.repository.ts`
- `packages/domain/tests/inventory/warehouse-location.spec.ts`

### Contracts

- `packages/contracts/src/types/warehouse-location.types.ts`
- `packages/contracts/src/events/inventory-location.events.ts`
- `packages/contracts/src/types/index.ts` (export)
- `packages/contracts/src/events/index.ts` (export)

### DB

- `packages/db/prisma/schema.prisma` (WarehouseLocation + WarehouseLocationConfig)
- `packages/db/prisma/migrations/20260723000000_create_warehouse_locations/migration.sql`
- `packages/db/prisma/migrations/20260723000000_create_warehouse_locations/down.sql`
- `packages/db/ensure-warehouse-location-migration.cjs`
- `packages/db/src/repositories/warehouse-location.repository.prisma.ts`
- `packages/db/src/index.ts` (export)
- `packages/db/prisma/seed.ts` (config + virtuals TRANSIT/PORT)
- `packages/db/tests/warehouse-location.repository.spec.ts`

### API

- `apps/api/src/inventory/location.service.ts`
- `apps/api/src/inventory/location.controller.ts`
- `apps/api/src/inventory/warehouse.module.ts` (register Location*)
- `apps/api/src/inventory/tests/location.auth.spec.ts`
- `apps/api/src/inventory/tests/location.contract.spec.ts`
- `apps/api/src/inventory/tests/location.service.spec.ts`

### Guards scope

- `scripts/validate-guards.py` (+ location.controller)
- `scripts/verify-guards.mjs` (+ location.controller)

## Evidence (E1)

| Gate | Result |
|------|--------|
| `@sunset/domain` test | **219 passed** (35 files; incl. 10 warehouse-location) |
| `@sunset/api` location tests | **24 passed** (auth 10 + contract 8 + service 6) |
| `@sunset/api` full suite | **197 passed** (30 files) |
| `@sunset/db` test | **52 passed** (10 files; incl. 4 warehouse-location) |
| migration `20260723000000_create_warehouse_locations` | **applied** on local PG |
| `python3 scripts/validate-guards.py` | **68 endpoints / 10 controllers** ✅ |

Commands:

```bash
pnpm test   # packages/domain
pnpm test   # apps/api
python3 scripts/validate-guards.py
# or: python3 scripts/validate-inventory-s02-api.py
```

### Test coverage map (API)

1. Auth matrix all location endpoints (inventory:read/write)
2. Contract DTO shapes + LocationTree example + LOCATION_EVENT_TYPES
3. Service create physical happy path
4. Service reject level not allowed → ValidationError
5. Service deactivate with children → ConflictError
6. Service warehouse mismatch → NotFound
7. Service config version conflict → ConflictError
8. Service getConfig creates default via `WarehouseLocationConfig.createDefault`

## Sources consulted

- Warehouse S01 pattern: `apps/api/src/inventory/warehouse.*`
- Domain S02: `packages/domain/src/inventory/warehouse-location.*`
- `docs/requirements/pr-programs/INVENTORY/PR-INVENTORY-01/PR-INVENTORY-01-S02.md`
- `docs/traceability/PR-INVENTORY-01-S01.md`
- [PROJECT-ARCH] monólito modular / domain ports
- [NIST-SSDF] evidência de teste antes de declarar pronto

## Blockers / risks

- **P3:** OpenAPI YAML not updated in this delivery (TS contracts only).
- Repo uses bracket delegates so tsc works even if generate lags; runtime requires `prisma generate` after schema.

## Status

**READY** — domain + contracts + API + DB migration/seed/repository tests delivered.

## Next

- OpenAPI YAML sync
- UI
