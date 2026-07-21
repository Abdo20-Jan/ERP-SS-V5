# MS-01-SS6 — Dimensions (Registry)

## Slice
- **ID:** MS-01-SS6
- **Branch:** `codex/ms-01-kernel`
- **Decisão:** D-008 Dimension Registry (sem FUTURE_1/FUTURE_2)
- **Objetivo:** Registry extensível de dimensões contábeis + restrições conta-dimensão

## Entregas
- Domain (flat, padrão SS5): `AccountingDimension`, `DimensionType`, `AccountDimensionRestriction`, commands/events/validator/repository port
- Contracts: DTOs dimension + restriction
- Prisma: `DimensionDefinition`, `AccountDimensionRestriction` + migration `20260721000004_create_dimensions`
- `PrismaDimensionRepository`
- API: `/v1/dimensions*`, `/v1/accounts/:accountId/restrictions*`
- RBAC: `accounting:read` / `accounting:write`
- Seed: nenhum (dimensões criadas pelo usuário)

## API
| Método | Rota |
|--------|------|
| POST | /v1/dimensions |
| GET | /v1/dimensions |
| GET | /v1/dimensions/:id |
| PATCH | /v1/dimensions/:id |
| POST | /v1/dimensions/:id/activate |
| POST | /v1/dimensions/:id/deactivate |
| POST | /v1/accounts/:accountId/restrictions |
| GET | /v1/accounts/:accountId/restrictions |
| DELETE | /v1/accounts/:accountId/restrictions/:dimId |

## Erros
| Status | Código |
|--------|--------|
| 400 | INVALID_DIMENSION_TYPE |
| 400 | INVALID_DIMENSION_HIERARCHY |
| 400 | INVALID_RESTRICTION |
| 409 | Conflict (duplicate type+code) |
| 404 | NOT_FOUND |

## Notas
- Layout domain: arquivos flat `accounting/dimension.*` (export via `dimension.ts`) — alinhado a SS5 currency, não pasta `dimension/`
- Hierarquia: `parentId` simples, mesmo `type`
- Journal-line guard na desativação: placeholder `countJournalLines` → 0 até SS7
- Helper: `packages/db/ensure-dimension-migration.cjs` no pretest/generate

## Fora de escopo
- UI; PostingRule (SS8); centros de custo reais Sunset (MS-04); ledger line dimensions (SS7)
