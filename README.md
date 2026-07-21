# SUNSET ERP

ERP operacional, financeiro, fiscal e contábil para a SUNSET TIRES CORPORATION S.A.S.

## Stack

- **Monorepo:** pnpm + Turborepo
- **Web:** Next.js 15 (App Router)
- **API:** NestJS + Fastify
- **Worker:** Node.js background jobs
- **Database:** PostgreSQL 16 + Prisma ORM
- **Lint/Format:** Biome
- **Test:** Vitest
- **Language:** TypeScript 5.7

## Pré-requisitos

- Node.js >= 22
- pnpm >= 10
- Docker e Docker Compose

## Instalação

```bash
# Instalar dependências
pnpm install

# Copiar variáveis de ambiente
cp .env.example .env

# Editar .env com valores apropriados para desenvolvimento
```

## Execução

### Subir banco de dados

```bash
# Subir PostgreSQL (porta 5432)
pnpm db:up

# Ver logs
pnpm db:logs

# Parar
pnpm db:down
```

### Desenvolvimento

```bash
# Rodar todos os apps em modo dev
pnpm dev

# Rodar apenas um app específico
pnpm --filter api dev
pnpm --filter web dev
pnpm --filter worker dev
```

### Qualidade

```bash
# Lint
pnpm lint

# Typecheck
pnpm typecheck

# Testes
pnpm test

# Testes em modo CI (sem watch)
pnpm test:ci

# Formatar código
pnpm format

# Verificar formatação
pnpm format:check
```

### Build

```bash
# Build de todos os apps e packages
pnpm build
```

## Estrutura do Monorepo

```
apps/
  api/          # NestJS + Fastify API
  web/          # Next.js frontend
  worker/       # Background jobs
  desktop/      # Tauri desktop (futuro)

packages/
  config/       # Shared configs (Biome, Vitest, TS)
  contracts/    # Shared types, errors, DTOs
  db/           # Prisma schema, client, migrations
  domain/       # Domain models (MS-01+)
  observability/# Logging, metrics, tracing
  testing/      # Test helpers, factories, mocks
  ui/           # Design system, components
```

## CI/CD

O workflow `.github/workflows/ci.yml` executa:

1. Lint (Biome)
2. Typecheck (tsc)
3. Testes unitários (Vitest)
4. Build (Turbo)
5. Testes de integração (com PostgreSQL service container)

## Convenções

- **Dinheiro:** decimal exato, nunca float
- **Timestamps:** UTC, timezone de negócio America/Argentina/Buenos_Aires
- **IDs:** UUIDv7
- **Auditoria:** append-only
- **RBAC:** negar por padrão
- **Idempotência:** correlation ID em toda request

## Documentação

- `docs/blueprint-master/` - Blueprint aprovado
- `docs/requirements/` - Requisitos e slices
- `docs/traceability/` - Rastreabilidade requisito-código-teste
- `docs/adr/` - Architecture Decision Records

## Licença

Proprietário - SUNSET TIRES CORPORATION S.A.S.
