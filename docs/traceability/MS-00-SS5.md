# MS-00-SS5 — Worker + Observabilidade + QA

## Slice
- **ID:** MS-00-SS5
- **Macro-slice:** MS-00 — Fundação Executável
- **Objetivo:** Criar `packages/observability` (logger pino, correlation context ALS, métricas stub), criar `apps/worker` (NestJS standalone com health/ready e heartbeat a cada 60s), integrar logger/correlation na API e no web shell, e deixar CI passando lint → typecheck → test → build → migrate deploy.
- **Branch:** `codex/ms-00-fundacao-executavel`

## Requisitos atendidos
- [x] `packages/observability`: logger estruturado com pino (JSON, níveis, child logger)
- [x] `packages/observability`: correlation context via `AsyncLocalStorage` (`runWithCorrelationId`, `getCorrelationId`, `generateCorrelationId`)
- [x] `packages/observability`: métricas stub (`recordCounter`, `recordGauge`, `recordHistogram`) preparada para adaptador futuro
- [x] `packages/observability`: testes unitários para logger, correlation context e métricas
- [x] `apps/api`: integra `@sunset/observability` via `PinoLoggerService` e `CorrelationIdInterceptor`
- [x] `apps/api`: `AllExceptionsFilter` loga com correlation id e não expõe stack trace ao cliente
- [x] `apps/worker`: aplicação NestJS standalone na porta `3002`
- [x] `apps/worker`: endpoints `/health` e `/ready` com check de banco (PrismaHealthIndicator)
- [x] `apps/worker`: `HeartbeatService` emite log estruturado a cada 60s
- [x] `apps/worker`: testes unitários de health controller e heartbeat service
- [x] `apps/web`: `CorrelationProvider` injeta `x-correlation-id` em todas as chamadas à API
- [x] CI-quality: `pnpm lint`, `pnpm typecheck`, `pnpm test -- --run` e `pnpm build` passam em 9 packages
- [x] Runtime local: API e worker iniciam; `/health`, `/ready` respondem; login de admin retorna JWT

## Decisões aplicadas
- **PROJECT-ARCH:** monólito modular; worker é processo separado dentro do mesmo repo
- **PROJECT-INTEGRATIONS:** correlation id ponta a ponta (web → api → worker)
- **WCAG 2.2 AA:** estados de erro e carregamento mantidos no web shell
- Segurança: `JWT_SECRET` passou a ser obrigatório em runtime (fallback hardcoded removido)

## Arquivos criados
| Arquivo | Descrição |
|---------|-----------|
| `packages/observability/package.json` | Package `@sunset/observability` |
| `packages/observability/tsconfig.json` | TS config do package |
| `packages/observability/src/logger.ts` | Logger pino estruturado |
| `packages/observability/src/correlation-context.ts` | ALS + geração de correlation id |
| `packages/observability/src/metrics.ts` | Stub de métricas |
| `packages/observability/src/types.ts` | Tipos de logger/métricas |
| `packages/observability/src/index.ts` | Barrel export |
| `packages/observability/tests/*.spec.ts` | Testes unitários |
| `apps/worker/package.json` | Package `@sunset/worker` |
| `apps/worker/tsconfig.json` | TS config do worker |
| `apps/worker/nest-cli.json` | Config do Nest CLI |
| `apps/worker/src/main.ts` | Bootstrap Fastify do worker |
| `apps/worker/src/worker.module.ts` | Módulo raiz |
| `apps/worker/src/health/health.controller.ts` | `/health`, `/ready` |
| `apps/worker/src/health/health.module.ts` | Módulo de health |
| `apps/worker/src/heartbeat/heartbeat.service.ts` | Emissão de heartbeat a cada 60s |
| `apps/worker/src/heartbeat/heartbeat.module.ts` | Módulo de heartbeat |
| `apps/worker/tests/*.spec.ts` | Testes unitários |
| `apps/api/src/common/pino-logger.service.ts` | Adapter NestJS → pino |
| `apps/web/src/providers/correlation-provider.tsx` | Provider de correlation id para fetch |

## Arquivos alterados (integração e QA)
| Arquivo | Motivo |
|---------|--------|
| `apps/api/src/main.ts` | Usa `@sunset/observability`, configura correlation id no hook Fastify, ajusta exclusão de prefixo global para `/health/detailed` |
| `apps/api/src/common/all-exceptions.filter.ts` | Loga com correlation id; mensagens seguras ao cliente |
| `apps/api/src/common/correlation-id.interceptor.ts` | Injeta correlation id nas respostas |
| `apps/api/src/auth/auth.module.ts` | Remove fallback hardcoded de `JWT_SECRET` |
| `apps/api/src/auth/jwt.strategy.ts` | Remove fallback hardcoded de `JWT_SECRET` |
| `apps/api/src/auth/*.ts` | `@Inject(...)` com imports de valor para DI; ajustes de lint |
| `apps/api/src/health/health.controller.ts` | Corrige rota `/health/detailed`; `@Inject` |
| `apps/api/src/health/prisma.health.ts` | `@Inject(PrismaService)` |
| `apps/api/src/audit/*.ts`, `src/parameters/*.ts`, `src/prisma/*.ts` | Tipos de retorno explícitos para TS2742; `@Inject` |
| `apps/api/src/auth/tests/*.spec.ts`, `src/health/tests/*.spec.ts` | Ajustes para Vitest + Biome |
| `apps/web/src/providers/index.tsx` | Inclui `CorrelationProvider` |
| `apps/web/src/lib/api.ts` | Lê correlation id do contexto e anexa header |
| `package.json`, `biome.json`, `tsconfig.base.json` | Configuração de lint/typecheck/workspace |
| `packages/*/package.json`, `packages/*/tsconfig.json` | Scripts `build` e entrypoints `dist/` |
| `packages/db/prisma/migrations/000000000000_init.sql` | Correção da função `uuid_generate_v7()` |
| `pnpm-lock.yaml` | Dependências atualizadas (`bcryptjs`, `@sunset/observability`, etc.) |

## Validações
| Comando | Resultado |
|---------|-----------|
| `pnpm lint` | 9/9 packages passaram (20 warnings `noExplicitAny` apenas em `apps/api`, sem erros) |
| `pnpm typecheck` | 9/9 packages passaram |
| `pnpm test -- --run` | 37/37 testes passaram (observability 10, worker 3, api 24) |
| `pnpm build` | 6/6 packages com build passaram (incluindo web e worker) |
| `docker compose up -d postgres` | Container `sunset-erp-postgres` healthy |
| Seed | `SEED_ADMIN_PASSWORD=Sunset@2026!` aplicado com sucesso |
| API runtime | `GET /health` → ok; `GET /ready` → database up; `POST /v1/auth/login` → JWT válido |
| Worker runtime | `GET /health` → ok; `GET /ready` → database up; heartbeat logado a cada 60s |

## Riscos e pendências
- **R1 — `any` em `apps/api`:** 20 warnings de `noExplicitAny` persistem em auth/audit/parameters. Não bloqueiam o CI, mas devem ser endereçados no slice de hardening de autenticação/audit.
- **R2 — Métricas stub:** `packages/observability/src/metrics.ts` é apenas um stub; a escolha de backend (Prometheus, StatsD, etc.) requer ADR e integração real.
- **R3 — TODO em `packages/ui/src/hooks/use-auth.ts`:** hook de stub ainda contém TODOs; a autenticação real vive em `apps/web/src/providers/auth-provider.tsx`. Recomenda-se remover o stub ou integrá-lo em slice futuro.
- **R4 — CI `prisma migrate deploy`:** o job `integration` já executa a migration; não foi alterado neste slice.
- **R5 — Vault de memória:** não foi possível escrever automaticamente em `@erp-memory` por restrição de diretório externo; os fatos foram registrados para atualização manual.

## Rastreabilidade
- **Plano aprovado:** 2026-07-20 (com emendas SS5.1, SS5.2, SS5.3)
- **Implementado por:** Slice_implement
- **Data:** 2026-07-21
