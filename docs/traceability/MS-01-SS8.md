# MS-01-SS8 — PostingRule Framework

## Slice
- **ID:** MS-01-SS8
- **Branch:** `codex/ms-01-kernel`
- **Decisão:** typed contract de placeholders (providedBy + valueType); sem execução real (MS-03+)
- **Objetivo:** CRUD de regras de contabilização com validação de contrato tipado

## Entregas
- Domain (flat): `PostingRule`, `PostingRuleLine`, `PlaceholderRef`, validator, repo port
- Errors: `MISSING_DEBIT_CREDIT`, `INVALID_PLACEHOLDER`, `INVALID_SEQUENCE`, `DUPLICATE_RULE`
- Prisma: `PostingRule`, `PostingRuleLine` + migration `20260721000006_create_posting_rules`
- Seed: MANUAL/ACCOUNTING + VENTA/SALES (esqueleto)
- `PrismaPostingRuleRepository`
- API: `/v1/posting-rules*` via `PostingRuleService` / `PostingRuleController`
- RBAC: `accounting:read` / `accounting:write`

## API
| Método | Rota |
|--------|------|
| POST | /v1/posting-rules |
| GET | /v1/posting-rules |
| GET | /v1/posting-rules/:id |
| PATCH | /v1/posting-rules/:id |
| POST | /v1/posting-rules/:id/activate |
| POST | /v1/posting-rules/:id/deactivate |

## Fora de escopo
Execução/resolução de regras; placeholders em runtime; UI; regras COMEX/Vendas reais
