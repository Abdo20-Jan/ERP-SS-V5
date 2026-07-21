# MS-01-SS4 — Chart of Accounts

## Slice
- **ID:** MS-01-SS4
- **Branch:** `codex/ms-01-kernel`
- **Objetivo:** Plano de contas + contas hierárquicas com type/nature, API e seed baseline

## Entregas
- Domain: Account, ChartOfAccounts, AccountType/Nature, validators
- Contracts: accounting DTOs
- Prisma: ChartOfAccounts, Account + migration `20260721000002_create_chart_of_accounts`
- Seed: accounting:read/write + contas sistema 1–6
- API: chart-of-accounts + accounts CRUD/activate/deactivate/delete
- PrismaAccountRepository

## Validações
| Comando | Resultado |
|---------|-----------|
| domain test | **110/110** |
| api test | **62/62** |
| db test | **15/15** |
| typecheck/lint | OK |
| migrate deploy | applied |

## Invariantes
- TYPE↔NATURE map
- Hierarquia level/parent/code prefix
- isSystem bloqueia DELETE
- Journal count placeholder 0 até SS7

## Fora de escopo
Currency, Dimensions, Ledger, PostingRule
