# MS-01-SS2 — Party Master

## Slice
- **ID:** MS-01-SS2
- **Macro-slice:** MS-01 — Kernel: MDM + Motor Contábil
- **Posição:** SS2 de 10
- **Branch:** `codex/ms-01-kernel`
- **Objetivo:** Party MDM (domain + Prisma + repository + API JWT/RBAC/audit)

## Requisitos atendidos
- [x] Domain `packages/domain/src/party/` (aggregate, VOs, commands, events, port, CUIT mod-11)
- [x] Contracts DTOs + party events
- [x] Prisma models Party/Document/Address/Contact/FiscalClassification
- [x] Migration `20260721000000_create_parties`
- [x] Seed permissions `party:read`, `party:write`
- [x] `PrismaPartyRepository`
- [x] API `/v1/parties` CRUD + activate/deactivate
- [x] Testes domain (19 novos) + API service/controller

## Rotas
| Método | Rota | Permissão |
|--------|------|-----------|
| POST | /v1/parties | party:write |
| GET | /v1/parties | party:read |
| GET | /v1/parties/:id | party:read |
| PATCH | /v1/parties/:id | party:write |
| POST | /v1/parties/:id/activate | party:write |
| POST | /v1/parties/:id/deactivate | party:write |

## Invariantes
- CUIT/CUIL módulo 11
- ≥1 documento primário e ≥1 CUIT/CUIL
- ≥1 endereço PRIMARY
- legalName obrigatório
- email válido em contatos
- documento unique (type+value)
- party inativo não atualiza (exceto activate)

## Validações
| Comando | Resultado |
|---------|-----------|
| `pnpm --filter @sunset/domain test` | **61/61** |
| `pnpm --filter @sunset/domain typecheck` | OK |
| `pnpm --filter @sunset/domain lint` | OK |
| `pnpm --filter @sunset/api test` | **39/39** |
| `pnpm --filter @sunset/api typecheck` | OK |
| `pnpm --filter @sunset/db db:generate` | OK |
| `pnpm --filter @sunset/contracts build` | OK |
| `pnpm --filter @sunset/db build` | OK |

## Decisões
- D-005 Party root + perfis separados (sem CreditLine/comercial)
- organizationId default `org_001` (TEXT, não UUID inválido)
- roles como `String[]` no Party

## Rollback
- `prisma migrate resolve` / drop tables parties*
- `git revert` do commit SS2

## Fora de escopo
Perfis cliente/fornecedor, UI, import bulk, validação ARCA online, Product/COA
