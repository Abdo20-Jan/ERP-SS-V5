# PR-INVENTORY-01-S01 — Traceability

**Slice:** PR-INVENTORY-01-S01  
**Module:** INVENTORY  
**Branch:** `codex/pr-inventory-01-s01-warehouses`  
**Commit:** `dc6352e` (+ hotfix seed `update: {}`)  
**PR:** https://github.com/Abdo20-Jan/ERP-SS-V5/pull/1  
**Base:** main@8678085  

## Objective

Cadastro mestre Warehouse: domínio + migration reversível + repositório + API CRUD `/v1/inventory/warehouses` com filtros, RBAC (`inventory:read`/`inventory:write`) e auditoria append-only atômica.

## Out of scope

- WarehouseLocation / hierarquia (S02)
- Locais virtuais (S02)
- Níveis de endereçamento (S03)
- InventorySummary / saldo / ATP (S04)
- UI frontend + E2E (**DEFERRED** — D-E)
- Idempotency-Key store replay→200 (**DEFERRED** — D-A)

## Decisions locked

| ID | Choice |
|----|--------|
| D-A | Natural unique(org,code) → 409; no idempotency store |
| D-B | `version` column + optional `expectedVersion` → 409 |
| D-C | `inventory:read` / `inventory:write` |
| D-D | Offset pagination `{data,total,page,limit}` |
| D-E | UI/E2E DEFERRED |
| D-F | Seeds type=`TERCEIRIZADO`; NAC/ZPA only in code/name |

## Inferences (E5)

1. Model fields from SM-INVENTORY-01 functions 1–2.
2. WarehouseType enum NACIONAL|FISCAL|TERCEIRIZADO|PROPRIO from SM function 1.
3. `zones` as simple string labels (not hierarchy).

## Evidence (E1)

| Gate | Result |
|------|--------|
| Migration apply `20260722000000_create_warehouses` | Applied successfully |
| `@sunset/domain` test | **209 passed** (incl. 11 warehouse) |
| `@sunset/db` test | **48 passed** (incl. 6 warehouse) |
| `@sunset/api` test | **173 passed** (incl. warehouse auth/service/contract) |
| `python3 scripts/validate-guards.py` | **✅ 59 endpoints / 9 controllers** (inventory covered) |
| lint (`packages/db`) | Failures preexistentes em ensure-*.cjs (node: protocol); não bloqueiam testes |
| psql down/up com `?schema=` | URI inválida no psql nativo — usar URL sem query ou `prisma migrate` |

## Hotfix pós-commit

- `packages/db/prisma/seed.ts` linha warehouse upsert: `update: {}` (estava corrompido com path absoluto). **Deve ser commitado e pushado no PR.**

## Permissions

- `inventory:read` — list/get
- `inventory:write` — create/update/activate/deactivate

## Audit (mesma tx)

- `warehouse.created` / `updated` / `activated` / `deactivated`
- before/after + correlationId; deactivate + metadata.reason

## Seeds (D-F)

| code | name | type |
|------|------|------|
| TP_NAC | Depósito TP Nacional | TERCEIRIZADO |
| TP_ZPA | Depósito TP Zona Primária | TERCEIRIZADO |
| MOR_NAC | Depósito Moreiro Nacional | TERCEIRIZADO |
| MOR_ZPA | Depósito Moreiro Zona Primária | TERCEIRIZADO |

## Rollback

1. git revert merge commit  
2. `down.sql` → DROP warehouses  
3. prisma migrate status clean  

## Requirements Q0001–Q0050

| Group | Status |
|-------|--------|
| Backend scope/arch/data/API/security | COVERED |
| Limits Q0011–20 | COVERED |
| RBAC Q0021–30 | COVERED |
| Master data Q0031–40 | COVERED |
| UI Q0005/15/25/35/45 | DEFERRED |
| E2E | DEFERRED |
| Offline | online-only declared |

## Sources

- SM-INVENTORY-01 functions 1–2  
- PR-INVENTORY-01-S01.md  
- party module pattern (MS-01)  
- [PROJECT-SCOPE]
