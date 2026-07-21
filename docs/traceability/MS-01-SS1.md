# MS-01-SS1 — Common Primitives

## Slice
- **ID:** MS-01-SS1
- **Macro-slice:** MS-01 — Kernel: MDM + Motor Contábil
- **Posição:** SS1 de 10 (bloqueia SS2–SS10)
- **Objetivo testável:** `packages/domain` exporta value objects base; typecheck/test/lint verdes; sem migration, API ou regra de negócio de agregado.
- **Branch:** `codex/ms-01-kernel`
- **Base:** `main` @ `eb9adb6`

## Requisitos atendidos
- [x] Pacote `@sunset/domain` funcional
- [x] `Money` com add/subtract/multiply/divide/equals/isZero/convertTo/toJSON/toString
- [x] `Decimal` wrapper (decimal.js) — sem float binário (D-003.11 / D-007)
- [x] `CurrencyCode` branded (ARS, USD, BRL)
- [x] `DateRange` com contains/overlaps/isInfinite
- [x] `EntityId` UUIDv7 (create/generate/is)
- [x] `EventType` catálogo inicial (`UNKNOWN`)
- [x] `DomainError` + subclasses tipadas
- [x] 42 testes unitários verdes
- [x] Sem migration, rota API, aggregate ou CUIT/NCM

## Decisões aplicadas
- **D-003.11:** dinheiro em decimal exato (nunca float)
- **D-007:** dual-currency day-one — primitives Money/CurrencyCode/Decimal prontos
- **D-003.9:** UUIDv7 para identificadores
- **PROJECT-ARCH:** monólito modular; domain package compartilhado

## Arquivos criados
| Arquivo | Descrição |
|---------|-----------|
| `packages/domain/package.json` | `@sunset/domain` |
| `packages/domain/tsconfig.json` | TS config |
| `packages/domain/vitest.config.ts` | Vitest node |
| `packages/domain/src/index.ts` | Barrel root |
| `packages/domain/src/common/index.ts` | Barrel common |
| `packages/domain/src/common/money.vo.ts` | Money VO |
| `packages/domain/src/common/decimal.vo.ts` | Decimal VO |
| `packages/domain/src/common/currency-code.vo.ts` | CurrencyCode |
| `packages/domain/src/common/date-range.vo.ts` | DateRange |
| `packages/domain/src/common/entity-id.ts` | EntityId UUIDv7 |
| `packages/domain/src/common/event-type.ts` | EventType enum |
| `packages/domain/src/common/errors/domain-error.ts` | Domain errors |
| `packages/domain/src/common/errors/index.ts` | Errors barrel |
| `packages/domain/tests/common/*.spec.ts` | 6 suites / 42 tests |
| `packages/domain/README.md` | Package docs |

## Arquivos alterados
| Arquivo | Motivo |
|---------|--------|
| `pnpm-lock.yaml` | deps `decimal.js`, `uuidv7` |

## Fora de escopo (confirmado)
- Aggregates Party/Product/COA/Ledger
- Migrations Prisma
- Rotas API / RBAC
- CUIT mod-11, NCM

## Validações
| Comando | Resultado |
|---------|-----------|
| `pnpm --filter @sunset/domain typecheck` | OK (tsc --noEmit) |
| `pnpm --filter @sunset/domain test` | **42/42** passed (6 files) |
| `pnpm --filter @sunset/domain lint` | OK (biome, 19 files) |

## Rollback
- `git revert` do commit SS1
- Sem migration; sem dado em produção

## Riscos / notas
- `vitest.config` usa config local (igual observability); import de `@sunset/config` vitestPreset falha por resolução ESM de extensão — não bloqueia SS1.
- `EventType` só tem `UNKNOWN`; cresce nos SS seguintes.
- Catálogo de moedas fixo ARS/USD/BRL; expansão futura via decisão explícita.

## Fontes consultadas
- Prompt MS-01-SS1 (owner)
- D-003, D-007 (vault DECISION-LOG)
- `packages/observability` (padrão package/vitest)
- `tsconfig.base.json` paths `@sunset/domain`

## Rastreabilidade
- **Implementado:** 2026-07-21
- **Próximo slice:** MS-01-SS2 Party Master
