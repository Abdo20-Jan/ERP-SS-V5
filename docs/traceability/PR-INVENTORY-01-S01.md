# PR-INVENTORY-01-S01 — Traceability

**Slice:** PR-INVENTORY-01-S01  
**Module:** INVENTORY  
**Status:** IMPLEMENTED (pending CI evidence)  
**Base:** main@8678085  
**Decisions locked:** D-A…D-F (execution plan)

## Objective

Cadastro mestre Warehouse: domínio + migration reversível + repositório + API CRUD `/v1/inventory/warehouses` com filtros, RBAC (`inventory:read`/`inventory:write`) e auditoria append-only atômica.

## Out of scope

- WarehouseLocation / hierarquia (S02)
- Locais virtuais (S02)
- Níveis de endereçamento (S03)
- InventorySummary / saldo / ATP (S04)
- UI frontend + E2E (**DEFERRED** — D-E)
- Idempotency-Key store replay→200 (**DEFERRED** — D-A)

## Decisions

| ID | Choice |
|----|--------|
| D-A | Natural unique(org,code) → 409; no idempotency store |
| D-B | `version` column + optional `expectedVersion` → 409 |
| D-C | `inventory:read` / `inventory:write` (repo pattern) |
| D-D | Offset pagination `{data,total,page,limit}` |
| D-E | UI/E2E DEFERRED |
| D-F | Seeds type=`TERCEIRIZADO`; NAC/ZPA only in code/name |

## Inferences (E5)

1. Model fields (code/type/address/zones/capacity) from SM-INVENTORY-01 functions 1–2.
2. WarehouseType enum NACIONAL|FISCAL|TERCEIRIZADO|PROPRIO from SM function 1.
3. `zones` as simple string labels (not hierarchy).

## Files

### Created
- `packages/domain/src/inventory/*`
- `packages/domain/tests/inventory/warehouse.spec.ts`
- `packages/contracts/src/types/warehouse.types.ts`
- `packages/contracts/src/events/inventory-warehouse.events.ts`
- `packages/db/prisma/migrations/20260722000000_create_warehouses/{migration.sql,down.sql}`
- `packages/db/ensure-warehouse-migration.cjs`
- `packages/db/src/repositories/warehouse.repository.prisma.ts`
- `packages/db/tests/warehouse.repository.spec.ts`
- `apps/api/src/inventory/*`
- `apps/api/src/inventory/tests/*`

### Modified
- `packages/domain/src/index.ts`, `common/errors/*`
- `packages/contracts/src/types/index.ts`, `events/index.ts`
- `packages/db/prisma/schema.prisma` (append Warehouse)
- `packages/db/prisma/seed.ts`
- `packages/db/package.json`, `packages/db/src/index.ts`
- `apps/api/src/app.module.ts`
- `scripts/validate-guards.py`, `scripts/verify-guards.mjs`

## Requirements coverage Q0001–Q0050

| Group | Status |
|-------|--------|
| Scope/arch/data/API/security/rollout backend | COVERED |
| Limits Q0011–20 | COVERED (no position/balance routes) |
| Actors/RBAC Q0021–30 | COVERED |
| Master data Q0031–40 | COVERED |
| Layout/UI Q0005/15/25/35/45 | DEFERRED |
| E2E part of Q0008/18/28/38/48 | DEFERRED |
| Offline | COVERED as online-only |

## Permissions

- `inventory:read` — list/get
- `inventory:write` — create/update/activate/deactivate

## Audit actions

- `warehouse.created` / `warehouse.updated` / `warehouse.activated` / `warehouse.deactivated`
- Same transaction as mutation; before/after + correlationId; deactivate includes metadata.reason

## Seeds

| code | name | type |
|------|------|------|
| TP_NAC | Depósito TP Nacional | TERCEIRIZADO |
| TP_ZPA | Depósito TP Zona Primária | TERCEIRIZADO |
| MOR_NAC | Depósito Moreiro Nacional | TERCEIRIZADO |
| MOR_ZPA | Depósito Moreiro Zona Primária | TERCEIRIZADO |

## Tests

- Domain: `packages/domain/tests/inventory/warehouse.spec.ts` (≥10 cases)
- DB: `packages/db/tests/warehouse.repository.spec.ts` (gated DATABASE_URL)
- API auth/service/contract specs under `apps/api/src/inventory/tests/`

## Gates (executor evidence)

```bash
export DATABASE_URL="postgresql://erp:erp_dev_password@localhost:5432/sunset_erp?schema=public"
pnpm --filter @sunset/db db:generate
pnpm --filter @sunset/domain test
pnpm --filter @sunset/db test
pnpm --filter @sunset/api test
pnpm run verify:guards
pnpm validate:invariants
```

## Rollback

1. git revert merge commit
2. Apply `down.sql` (DROP warehouses table)
3. prisma migrate status clean

## Sources

- [PROJECT-SCOPE] docs/blueprint-master/00_ACCEPTED_SCOPE_AND_PRECEDENCE.md
- SM-INVENTORY-01 functions 1–2
- PR-INVENTORY-01-S01.md
- party module pattern (MS-01)
