# MS-00-SS4 — Design System + Web Shell

## Slice
- **ID:** MS-00-SS4
- **Macro-slice:** MS-00 — Fundação Executável
- **Objetivo:** Design system PT-BR (top-nav, denso, 7 estados) + shell Next.js
- **Branch:** codex/ms-00-fundacao-executavel

## Requisitos atendidos
- [x] packages/ui: tokens (colors, spacing, typography) — denso, PT-BR
- [x] packages/ui: componentes (Button, Input, Card, Dialog, Table) — Radix + CVA
- [x] packages/ui: 7 estados (Loading, Empty, Error, NoPermission, Conflict, Offline, Success) — textos PT-BR, acessíveis (role, aria-live)
- [x] packages/ui: layout (Shell, TopNav com ambiente indicator, user, logout)
- [x] packages/ui: hooks (useCorrelationId, useAuth stub)
- [x] packages/ui: utilitário cn (clsx + tailwind-merge)
- [x] apps/web: Next.js 15 App Router, Tailwind
- [x] apps/web: root layout com lang="pt-BR" e Inter
- [x] apps/web: /login — formulário de login (email + senha + Entrar, erro preserva valores)
- [x] apps/web: (authenticated)/layout.tsx — auth guard com LoadingState, TopNav, redirect /login
- [x] apps/web: (authenticated)/app/page.tsx — shell + demo dos 7 estados
- [x] apps/web: AuthProvider (login, logout, me, hasPermission) integrado à API real
- [x] apps/web: api client com correlation id + Bearer token

## Decisões aplicadas
- **D-003.2:** PT-BR como idioma do produto
- **PROJECT-UX:** top-nav, denso, 7 estados, acessibilidade
- **WCAG 2.2 AA:** roles, aria-live, contraste, foco visível

## Arquivos criados
| Arquivo | Descrição |
|---------|-----------|
| `packages/ui/package.json` | Package @sunset/ui |
| `packages/ui/tsconfig.json` | TS config |
| `packages/ui/src/tokens/*` | colors, spacing, typography |
| `packages/ui/src/lib/utils.ts` | cn helper |
| `packages/ui/src/components/*` | button, input, card, dialog, table |
| `packages/ui/src/states/*` | 7 estados PT-BR |
| `packages/ui/src/layout/*` | shell, top-nav |
| `packages/ui/src/hooks/*` | use-correlation-id, use-auth |
| `packages/ui/src/index.ts` | Barrel export |
| `apps/web/package.json` | Package @sunset/web |
| `apps/web/tsconfig.json` | TS config |
| `apps/web/next.config.js` | Next config (transpilePackages @sunset/ui) |
| `apps/web/tailwind.config.ts` | Tailwind config (cores Sunset) |
| `apps/web/postcss.config.js` | PostCSS config |
| `apps/web/next-env.d.ts` | Next types |
| `apps/web/src/app/globals.css` | Tailwind base |
| `apps/web/src/app/layout.tsx` | Root layout (pt-BR, Inter, Providers) |
| `apps/web/src/app/page.tsx` | Redirect → /app |
| `apps/web/src/app/login/page.tsx` | Login page |
| `apps/web/src/app/(authenticated)/layout.tsx` | Auth guard + TopNav |
| `apps/web/src/app/(authenticated)/app/page.tsx` | App shell + demo 7 estados |
| `apps/web/src/providers/auth-provider.tsx` | AuthProvider real |
| `apps/web/src/providers/index.tsx` | Providers |
| `apps/web/src/lib/api.ts` | API client (correlation id, Bearer) |

## Páginas e estados de UI
| Página | Loading | Vazio | Erro | Sem permissão | Conflito | Offline | Sucesso |
|--------|---------|-------|------|---------------|----------|---------|---------|
| /login | submit desabilitado | — | ErrorState inline | — | — | — | redirect /app |
| /app | LoadingState auth guard | EmptyState demo | ErrorState demo | NoPermissionState demo | ConflictState demo | OfflineState demo | SuccessState demo |

## Validações
- [ ] `pnpm install` — pendente
- [ ] `pnpm lint` — pendente
- [ ] `pnpm typecheck` — pendente
- [ ] `pnpm --filter @sunset/web build` — pendente

## Próximo slice
- **SS5:** Worker + Observabilidade + QA (fechamento do MS-00)

## Rastreabilidade
- **Plano aprovado:** 2026-07-20
- **Implementado por:** Slice_implement
- **Data:** 2026-07-20
