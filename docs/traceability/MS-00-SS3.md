# MS-00-SS3 — Auth + RBAC + Audit + Parameters

## Slice
- **ID:** MS-00-SS3
- **Macro-slice:** MS-00 — Fundação Executável
- **Objetivo:** Rate limiting, testes unitários, factories de teste
- **Branch:** codex/ms-00-fundacao-executavel

## Requisitos atendidos
- [x] Rate limiting (5 tentativas/minuto no login, 100 req/min global)
- [x] Testes unitários AuthService (validateUser, login, logout, me)
- [x] Testes unitários PermissionsGuard (allow, deny, not authenticated)
- [x] Testes unitários AuditService (findAll com filtros)
- [x] Testes unitários ParametersService (findAll, create)
- [x] Testes unitários HealthController (check, ready, detailed)
- [x] Vitest config com coverage
- [x] Testing factories (User, Role, Permission)
- [x] Correlation ID propagado em auth service

## Decisões aplicadas
- **D-003.15:** RBAC "negar por padrão"
- **D-003.16:** Auditoria append-only
- **Correção incorporada:** Rate limiting no SS3 (5 tentativas/minuto no login)

## Arquivos criados/alterados
| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `apps/api/package.json` | alterado | Adicionado @fastify/rate-limit, @nestjs/throttler, @nestjs/terminus, @vitest/coverage-v8 |
| `apps/api/src/main.ts` | alterado | Adicionado rate limiting (100 req/min) |
| `apps/api/src/app.module.ts` | alterado | Adicionado ThrottlerModule |
| `apps/api/src/auth/auth.controller.ts` | alterado | Adicionado @Throttle(5 req/min) no login |
| `apps/api/src/auth/auth.service.ts` | alterado | Adicionado correlationId em login/logout |
| `apps/api/vitest.config.ts` | criado | Configuração Vitest com coverage |
| `apps/api/src/auth/tests/auth.service.spec.ts` | criado | Testes AuthService |
| `apps/api/src/auth/tests/permissions.guard.spec.ts` | criado | Testes PermissionsGuard |
| `apps/api/src/audit/tests/audit.service.spec.ts` | criado | Testes AuditService |
| `apps/api/src/parameters/tests/parameters.service.spec.ts` | criado | Testes ParametersService |
| `apps/api/src/health/tests/health.controller.spec.ts` | criado | Testes HealthController |
| `packages/testing/package.json` | criado | Package @sunset/testing |
| `packages/testing/tsconfig.json` | criado | TS config |
| `packages/testing/src/factories/user.factory.ts` | criado | Factory User |
| `packages/testing/src/factories/role.factory.ts` | criado | Factory Role, Permission |
| `packages/testing/src/factories/index.ts` | criado | Barrel export factories |
| `packages/testing/src/index.ts` | criado | Barrel export |

## Testes criados
| Arquivo | Testes | Cobertura |
|---------|--------|-----------|
| `auth.service.spec.ts` | 8 | validateUser, login, logout, me |
| `permissions.guard.spec.ts` | 4 | allow, deny, not authenticated |
| `audit.service.spec.ts` | 4 | findAll com filtros |
| `parameters.service.spec.ts` | 5 | findAll, create |
| `health.controller.spec.ts` | 4 | check, ready, detailed |
| **Total** | **25** | **Auth, RBAC, Audit, Parameters, Health** |

## Rate limiting
| Endpoint | Limite | Janela |
|----------|--------|--------|
| POST /v1/auth/login | 5 req | 1 minuto |
| Global (todos endpoints) | 100 req | 1 minuto |

## Validações
- [ ] `pnpm install` — pendente
- [ ] `pnpm lint` — pendente
- [ ] `pnpm typecheck` — pendente
- [ ] `pnpm test` — pendente
- [ ] `docker-compose up -d` — pendente

## Próximo slice
- **SS4:** Design System + Web Shell (Next.js, 7 estados, shadcn/ui)

## Rastreabilidade
- **Plano aprovado:** 2026-07-20
- **Implementado por:** Slice_implement
- **Data:** 2026-07-20
