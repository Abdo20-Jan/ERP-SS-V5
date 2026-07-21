# MS-01-SS9 — API + RBAC + Auditoria (Consolidação)

## Slice
- **ID:** MS-01-SS9
- **Branch:** `codex/ms-01-kernel`
- **Decisões:** D-003.15–16 (state guards + RBAC deny-by-default + audit append-only); D-009 commit/push
- **Objetivo:** Garantir que todos os endpoints Party/Product/Accounting têm JwtAuthGuard + PermissionsGuard + @RequirePermission, mutações auditadas, seed com 14 permissions, testes de autorização e script CI `verify:guards`.

## Escopo
### Dentro
- Revisão controllers Party, Product, Accounting (COA, Currency, Dimension, Ledger, PostingRule)
- Seed permissions (14) + descrições accounting incluindo regras
- Confirmação de audit log em mutações (padrão `prisma.auditLog.create`)
- Testes de autorização por endpoint (metadata + 401/403/allow)
- Script `scripts/verify-guards.mjs` + `pnpm run verify:guards` + step CI lint

### Fora
- Nova regra de negócio; domain; schema/migrations; contracts; UI
- Health público (`/health`, `/ready`) — intencional sem JWT
- Execução real de PostingRule (MS-03+)

## Evidência de revisão (pré-existente + gaps fechados)

### Guards (já presentes SS2–SS8; verificados)
| Controller | @UseGuards | @RequirePermission |
|---|---|---|
| PartyController | Jwt + Permissions | party:read/write |
| ProductController | Jwt + Permissions | product:read/write |
| ProductCategoryController | Jwt + Permissions | product:read/write |
| ChartOfAccountsController | Jwt + Permissions | accounting:read/write |
| CurrencyController | Jwt + Permissions | accounting:read/write |
| DimensionController | Jwt + Permissions | accounting:read/write |
| LedgerController | Jwt + Permissions | accounting:read/write |
| PostingRuleController | Jwt + Permissions | accounting:read/write |

### Auditoria (mutações via `prisma.auditLog.create`)
- Party: create/update/activate/deactivate
- Product: create/update/activate/deactivate + category create
- AccountingService: COA/account CRUD + activate/deactivate
- CurrencyService: create + setRate
- DimensionService: create/update/activate/deactivate + restriction set/remove
- LedgerService: createJournal/createEntry/post/reverse
- PostingRuleService: create/update/activate/deactivate
- Campos: userId, action (`entity.action`), entityType, entityId, before/after, correlationId

### Seed permissions (14)
user:r/w, role:r/w, audit:read, parameter:r/w, health:read, party:r/w, product:r/w, accounting:r/w — admin recebe todas.

## Entregas SS9
| Artefato | Path |
|---|---|
| Guard scanner | `scripts/verify-guards.mjs` |
| npm script | `package.json` → `verify:guards` |
| CI | `.github/workflows/ci.yml` lint job |
| Auth helper | `apps/api/src/auth/endpoint-auth.helpers.ts` |
| Auth tests | `*.auth.spec.ts` (party, product, coa, currency, dimension, ledger, posting-rule) |
| Script test | `apps/api/src/auth/tests/verify-guards.spec.ts` |
| Seed copy | accounting descriptions + regras |

## Contagem de endpoints no scanner
Todos os handlers HTTP dos 8 controllers in-scope (Party 6 + Product 6 + Category 3 + COA 10 + Currency 6 + Dimension 9 + Ledger 7 + PostingRule 6 = **53**).

## Como verificar
```bash
pnpm run verify:guards
# ✅ All 53 endpoints have guards and permissions (8 controllers)

pnpm --filter @sunset/api test
# inclui *.auth.spec.ts + verify-guards.spec.ts
```

## Design decisions
1. Audit action format: `{entity}.{action}` (ex.: `party.create`, `ledger` via service actions)
2. GET não gera audit; mutações sim
3. 403 vs 404: sem permissão → 403; recurso inexistente → 404
4. `accounting:read/write` cobre todo o módulo contábil
5. Testes unitários de auth usam Reflect metadata + PermissionsGuard; 401 modela contrato JwtAuthGuard (sem e2e HTTP)

## Rollback
- `git revert` do commit SS9
- Seed upsert não remove permissions; rollback de texto de description é cosmético
- Sem migration

## Fontes consultadas
- Prompt MS-01-SS9; D-003.15–16; controllers/services existentes SS2–SS8
- [OWASP-API] BOLA/broken function level — guards no backend
- AGENTS.md raiz + apps/api
