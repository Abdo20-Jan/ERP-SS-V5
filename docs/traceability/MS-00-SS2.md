# MS-00-SS2 — DB + API + Health

## Slice
- **ID:** MS-00-SS2
- **Macro-slice:** MS-00 — Fundação Executável
- **Objetivo:** Prisma schema (User, Role, Permission, AuditLog, Parameter), NestJS app, /health e /ready
- **Branch:** codex/ms-00-fundacao-executavel

## Requisitos atendidos
- [x] Prisma schema (User, Role, Permission, AuditLog, Parameter)
- [x] UUID v7 (extensão pgcrypto + função uuid_generate_v7())
- [x] Migration zero (init.sql)
- [x] Seed com SEED_ADMIN_PASSWORD (bcrypt hash)
- [x] NestJS + Fastify app
- [x] Health endpoints: /health, /ready, /v1/health
- [x] CORS configurado (web → api)
- [x] Correlation ID interceptor
- [x] Exception filter global
- [x] Prisma module e service
- [x] Auth module (JWT + Local strategies)
- [x] Audit module (controller + service)
- [x] Parameters module (controller + service)
- [x] RBAC: PermissionsGuard + RequirePermission decorator
- [x] Auditoria append-only (audit_logs table)

## Decisões aplicadas
- **D-003.9:** pnpm monorepo
- **D-003.10:** PostgreSQL via Docker Compose, NestJS + Fastify
- **D-003.11:** REST/JSON OpenAPI /v1, UUIDv7, decimal exato, auditoria append-only
- **D-003.15:** RBAC "negar por padrão"
- **D-003.16:** Auditoria append-only
- **Decisão aprovada:** UUID v7 (implementado via pgcrypto + função customizada)
- **Decisão aprovada:** SEED_ADMIN_PASSWORD via variável de ambiente (bcrypt hash)
- **Correção incorporada:** CORS configurado no SS2

## Arquivos criados/alterados
| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `packages/db/package.json` | criado | Package @sunset/db |
| `packages/db/tsconfig.json` | criado | TS config |
| `packages/db/prisma/schema.prisma` | criado | Schema: User, Role, Permission, AuditLog, Parameter |
| `packages/db/prisma/migrations/000000000000_init.sql` | criado | Migration zero (UUID v7 + tables) |
| `packages/db/prisma/migrations/migration_lock.toml` | criado | Lock de migration |
| `packages/db/prisma/seed.ts` | criado | Seed com bcrypt hash |
| `packages/db/src/client.ts` | criado | PrismaClient singleton |
| `packages/db/src/index.ts` | criado | Barrel export |
| `packages/contracts/package.json` | criado | Package @sunset/contracts |
| `packages/contracts/tsconfig.json` | criado | TS config |
| `packages/contracts/src/types/correlation-id.ts` | criado | Tipo CorrelationId |
| `packages/contracts/src/types/index.ts` | criado | Barrel export types |
| `packages/contracts/src/errors/app-error.ts` | criado | AppError base |
| `packages/contracts/src/errors/validation-error.ts` | criado | ValidationError |
| `packages/contracts/src/errors/auth-error.ts` | criado | AuthError, ForbiddenError |
| `packages/contracts/src/errors/conflict-error.ts` | criado | ConflictError |
| `packages/contracts/src/errors/index.ts` | criado | Barrel export errors |
| `packages/contracts/src/index.ts` | criado | Barrel export |
| `apps/api/package.json` | criado | Package @sunset/api |
| `apps/api/tsconfig.json` | criado | TS config |
| `apps/api/nest-cli.json` | criado | Nest CLI config |
| `apps/api/src/main.ts` | criado | Bootstrap NestJS + Fastify + CORS |
| `apps/api/src/app.module.ts` | criado | App module |
| `apps/api/src/common/correlation-id.interceptor.ts` | criado | Correlation ID interceptor |
| `apps/api/src/common/all-exceptions.filter.ts` | criado | Exception filter global |
| `apps/api/src/prisma/prisma.module.ts` | criado | Prisma module |
| `apps/api/src/prisma/prisma.service.ts` | criado | Prisma service |
| `apps/api/src/health/health.module.ts` | criado | Health module |
| `apps/api/src/health/health.controller.ts` | criado | Health controller (/health, /ready, /v1/health) |
| `apps/api/src/health/prisma.health.ts` | criado | Prisma health indicator |
| `apps/api/src/auth/auth.module.ts` | criado | Auth module |
| `apps/api/src/auth/auth.controller.ts` | criado | Auth controller (login, logout, me) |
| `apps/api/src/auth/auth.service.ts` | criado | Auth service (validate, login, logout, me) |
| `apps/api/src/auth/jwt.strategy.ts` | criado | JWT strategy |
| `apps/api/src/auth/local.strategy.ts` | criado | Local strategy |
| `apps/api/src/auth/jwt-auth.guard.ts` | criado | JWT guard |
| `apps/api/src/auth/local-auth.guard.ts` | criado | Local guard |
| `apps/api/src/auth/permissions.guard.ts` | criado | Permissions guard (RBAC) |
| `apps/api/src/auth/require-permission.decorator.ts` | criado | RequirePermission decorator |
| `apps/api/src/audit/audit.controller.ts` | criado | Audit controller |
| `apps/api/src/audit/audit.service.ts` | criado | Audit service |
| `apps/api/src/audit/audit.module.ts` | criado | Audit module |
| `apps/api/src/parameters/parameters.controller.ts` | criado | Parameters controller |
| `apps/api/src/parameters/parameters.service.ts` | criado | Parameters service |
| `apps/api/src/parameters/parameters.module.ts` | criado | Parameters module |

## Endpoints criados
| Método | Path | Descrição | Auth |
|--------|------|-----------|------|
| GET | /health | Liveness (sem DB) | Nenhuma |
| GET | /ready | Readiness (com DB) | Nenhuma |
| GET | /v1/health | Health detalhado | Nenhuma |
| POST | /v1/auth/login | Login (email+password) → JWT | Nenhuma |
| POST | /v1/auth/logout | Logout | JWT |
| GET | /v1/auth/me | Current user + permissions | JWT |
| GET | /v1/audit | Audit logs (paginated) | audit:read |
| GET | /v1/parameters | Parâmetros vigentes | parameter:read |
| POST | /v1/parameters | Criar parâmetro | parameter:write |

## Validações
- [ ] `pnpm install` — pendente
- [ ] `pnpm lint` — pendente
- [ ] `pnpm typecheck` — pendente
- [ ] `docker-compose up -d` — pendente
- [ ] `prisma migrate deploy` — pendente
- [ ] `prisma db seed` — pendente
- [ ] `curl /health` — pendente
- [ ] `curl /ready` — pendente

## Próximo slice
- **SS3:** Auth + RBAC + Audit + Parameters (rate limiting, testes de integração)

## Rastreabilidade
- **Plano aprovado:** 2026-07-20
- **Implementado por:** Slice_implement
- **Data:** 2026-07-20
