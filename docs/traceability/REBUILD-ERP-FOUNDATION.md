# Rastreabilidade — REBUILD-ERP-FOUNDATION

## Objetivo

Rebuild fundacional: UI enterprise densa + módulos COMEX, Tesouraria, Contabilidade, CRM, RH, Faturamento e Integrações com schema, API e telas List Report.

## Fontes consultadas

- `docs/blueprint-master/02_UX_LAYOUT_SYSTEM.md`
- `docs/catalog/SUNSET_ERP_CATALOGO_COMPLETO_MODULOS_SUBMODULOS_FUNCOES_v1.0.md`
- `docs/adr/ADR-001-enterprise-dense-ui-theme.md`

## Arquivos alterados

### Design system
- `packages/ui/src/tokens/colors.ts`, `density.ts`, `surfaces.ts`
- `packages/ui/src/layout/side-nav.tsx`, `erp-shell.tsx`, `list-report-layout.tsx`
- `packages/ui/src/components/data-grid.tsx`, `filter-bar.tsx`

### Web
- `apps/web/src/app/(authenticated)/layout.tsx`
- `apps/web/src/config/navigation.ts`
- `apps/web/src/components/erp-list-page.tsx`
- Páginas: treasury, comex, crm, billing, hr, integrations, accounting

### API
- `apps/api/src/treasury/`, `comex/`, `crm/`, `hr/`, `billing/`, `integrations/`

### DB
- `packages/db/prisma/schema.prisma` — novos modelos
- `packages/db/prisma/seed.ts` — permissões e dados de exemplo

## Testes

- `pnpm --filter @sunset/ui test`
- `pnpm --filter @sunset/api typecheck`
- `pnpm --filter @sunset/web typecheck`

## Evidências pendentes (próximos slices)

- Testes de integração API para cada módulo novo
- Object Pages para detalhe de registro
- Regras de negócio fiscal/contábil por slice do catálogo
- Command palette e busca global

## Rollback

1. Reverter migration `business_modules`
2. Remover imports dos novos módulos em `app.module.ts`
3. Restaurar layout anterior
