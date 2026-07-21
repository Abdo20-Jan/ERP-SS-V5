# MS-01-SS7 — Ledger Engine (Skeleton)

## Slice
- **ID:** MS-01-SS7
- **Branch:** `codex/ms-01-kernel`
- **Decisões:** D-006 ledger skeleton; D-007 dual-currency fields on lines; D-003.12–13 double-entry ARS
- **Objetivo:** Journal + JournalEntry DRAFT/POSTED/REVERSED com double-entry, correlationId, reversal

## Entregas
- Domain (flat): `Journal`, `JournalEntry`, `LineItem`, status/type enums, state machine, validators
- Errors: `UNBALANCED_ENTRY`, `INVALID_LINE`, `INVALID_STATE`, `REVERSAL_REQUIRES_REASON`, `DUPLICATE_CORRELATION`
- Prisma: `Journal`, `JournalEntry`, `JournalEntryLine` + CHECK XOR debit/credit
- Migration: `20260721000005_create_ledger`
- Seed: journals 01–04
- `PrismaJournalEntryRepository` + atomic `allocateEntryNumber`
- API: `/v1/ledger/*` via `LedgerService` / `LedgerController`
- RBAC: `accounting:read` / `accounting:write`
- Account `countJournalLines` real

## API
| Método | Rota |
|--------|------|
| GET/POST | /v1/ledger/journals |
| POST/GET | /v1/ledger/journal-entries |
| GET | /v1/ledger/journal-entries/:id |
| POST | /v1/ledger/journal-entries/:id/post |
| POST | /v1/ledger/journal-entries/:id/reverse |

## Invariantes
- Σ débitos = Σ créditos no `post()`
- Linha: débito XOR crédito; amounts Decimal string
- Dual-currency: originAmount ⇒ currency + rate
- correlationId UNIQUE
- REVERSED terminal; reverse cria novo entry POSTED com linhas invertidas

## Fora de escopo
PostingRule (SS8); períodos (MS-04); balancete; UI
