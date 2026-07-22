# PR-INVENTORY-01-S06 — Traceability

**Slice:** PR-INVENTORY-01-S06 — InventoryTask worklist backend (SLA/queues)
**Module:** INVENTORY
**Branch:** codex/pr-inventory-01-s06-tasks-sla-queues
**Base:** S01–S05 (incl. UI 2618720)

## Objetivo testavel
API-only InventoryTask aggregate com estados, SLA isOverdue, worklist sort, summary counters, RBAC e audit; sem UI LAY-03 completa.

## COVERED (Q0251–Q0260 core)
- InventoryTask domain aggregate + transitions
- Prisma model + migration inventory_tasks
- API worklist CRUD-lite + transitions
- Summary counters
- RBAC inventory:task:*
- Audit inventory.task.*
- Domain/contract events (no outbox)

## DEFERRED
- Q0261+ comments/collaboration
- Notifications
- Full LAY-03 UI
- Offline write
- Generic corporate workflow engine
- Auto-create from warehouse events (manual create only)
- SLA checker cron/worker (isOverdue computed on read)
- OpenAPI YAML
- Real balance/SKU/container FKs

## Design locked
| Item | Valor |
|---|---|
| Aggregate | local InventoryTask (not generic workflow) |
| States | OPEN IN_PROGRESS BLOCKED WAITING_DEPENDENCY ESCALATED DONE CANCELLED |
| Priority | LOW MEDIUM HIGH URGENT (rank 3..0) |
| sourceType | warehouse\|location\|document\|override\|manual |
| isOverdue | non-terminal && dueAt < now |
| Sort | blocked/escalated, overdue, dueAt ASC NULLS LAST, priority, createdAt |
| Concurrency | expectedVersion optional |
| Clock | optional now on domain methods |

## API /v1
- POST/GET inventory/tasks
- GET inventory/tasks/summary (before :id)
- GET inventory/tasks/:id
- POST :id/assign|start|block|unblock|wait-dependency|resume-dependency|escalate|complete|cancel

## Perms seed
inventory:task:create|read|assign|update|escalate|complete|cancel

## Migration
20260726000000_create_inventory_tasks (+ down.sql)
ensure-inventory-task-migration.cjs hooked in packages/db pretest/generate/deploy

## Audit actions
inventory.task.created|assigned|started|blocked|unblocked|waiting_dependency|escalated|completed|cancelled
entityType: inventory_task

## Evidence (2026-07-22)
| Gate | Result |
|---|---|
| domain | 248 passed (14 inventory-task) |
| api | 273 passed (7 service + 4 contract + 14 auth inventory-task) |
| guards | 102 endpoints / 14 controllers |
| migration | 20260726000000_create_inventory_tasks applied on local DB |

## Risks
- Worklist sort in-app after bounded fetch (not SQL CASE) — OK for modest queues; scale risk documented
- No outbox for domain events
- No SLA worker
- Feature branch not main
- No OpenAPI YAML

## Status
**READY_WITH_RISKS**

## Rollback
1. git revert commit
2. run down.sql (removes inventory_tasks)
3. remove seed perms on next seed (upsert-safe)

## Fontes
PR-INVENTORY-01-S06 plan; DECISION_PRECEDENCE; override/document patterns S03/S04; SOURCE_BASIS [PROJECT-ARCH][NIST-SSDF][PROJECT-SCOPE]
