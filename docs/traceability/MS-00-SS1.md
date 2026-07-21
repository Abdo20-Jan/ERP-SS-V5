# MS-00-SS1 — Scaffold + CI

## Slice
- **ID:** MS-00-SS1
- **Macro-slice:** MS-00 — Fundação Executável
- **Objetivo:** Monorepo executável com CI verde, sem regra de negócio
- **Branch:** codex/ms-00-fundacao-executavel

## Requisitos atendidos
- [x] pnpm workspace + Turborepo
- [x] Biome (substitui ESLint + Prettier)
- [x] Docker Compose (PostgreSQL 16)
- [x] CI workflow com gates (lint → typecheck → test → build)
- [x] .env.example (só nomes, incluindo SEED_ADMIN_PASSWORD)
- [x] README de execução
- [x] packages/config com vitest-preset.ts
- [x] scripts/dev-up.sh e dev-down.sh

## Decisões aplicadas
- **D-003.9:** pnpm monorepo (apps/web, apps/api, apps/worker + packages)
- **D-003.10:** PostgreSQL via Docker Compose
- **Decisão aprovada:** Biome puro (não ESLint + Prettier)
- **Decisão aprovada:** UUID v7 (implementação no SS2)
- **Decisão aprovada:** SEED_ADMIN_PASSWORD via variável de ambiente

## Arquivos alterados/criados
| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `.gitignore` | alterado | Ignora node_modules, dist, .turbo, coverage, .env |
| `package.json` | alterado | Scripts: dev, build, lint, typecheck, test, db:up, db:down |
| `pnpm-workspace.yaml` | mantido | packages: apps/*, packages/* |
| `turbo.json` | alterado | Tasks: build, lint, typecheck, test, dev |
| `tsconfig.base.json` | alterado | Strict, paths para @sunset/* packages |
| `.biome.json` | criado | Configuração Biome (lint + format) |
| `.npmrc` | criado | pnpm: save-exact, strict-peer-dependencies |
| `docker-compose.yml` | criado | PostgreSQL 16 dev + test |
| `.env.example` | criado | Nomes de variáveis (sem valores reais) |
| `README.md` | alterado | Instruções de execução |
| `scripts/dev-up.sh` | criado | Sobe ambiente dev |
| `scripts/dev-down.sh` | criado | Para ambiente dev |
| `packages/config/package.json` | criado | Package @sunset/config |
| `packages/config/tsconfig.json` | criado | TS config |
| `packages/config/src/index.ts` | criado | Barrel export |
| `packages/config/src/vitest-preset.ts` | criado | Preset Vitest compartilhado |
| `.github/workflows/ci.yml` | alterado | CI: lint, typecheck, test, build, integration |

## Validações
- [ ] `pnpm install` — pendente
- [ ] `pnpm lint` — pendente
- [ ] `pnpm typecheck` — pendente
- [ ] `docker-compose up -d` — pendente

## Próximo slice
- **SS2:** DB + API + Health (Prisma schema, NestJS, /health, /ready)

## Rastreabilidade
- **Plano aprovado:** 2026-07-20
- **Implementado por:** Slice_implement
- **Data:** 2026-07-20
