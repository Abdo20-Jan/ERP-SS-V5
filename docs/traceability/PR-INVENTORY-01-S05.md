# PR-INVENTORY-01-S05 — Traceability

**Slice:** PR-INVENTORY-01-S05 — Warehouse/location detail BFF + progressive validation  
**Module:** INVENTORY  
**Branch:** codex/pr-inventory-01-s05-detail  
**Base:** S01–S04 @ bc4e394  

## Objetivo testável

API retorna composição Object-Page para warehouse e location (header, tabs estáveis, summary, previews, history, availableActions/primaryAction) e endpoints de validação progressiva create/edit sem persistir.

## COVERED

| Range | Entrega |
|---|---|
| Q0201–Q0210 | Detail page via BFF API (`GET .../detail`) |
| Q0211–Q0220 | Create/edit existentes (S01/S02) + `POST .../validate` progressivo |

## DEFERRED

| Range | Motivo |
|---|---|
| Q0221–Q0230 | Batch actions |
| Q0231–Q0240 | Keyboard shortcuts |
| Q0241–Q0250 | Notifications |
| — | UI LAY-02/04 frontend |
| — | Real inventory balance/ATP (`balanceAvailable` always false — D-003.14 stub) |
| — | OpenAPI YAML |
| — | Migrations (nenhuma) |

## API (prefixo global `/v1`)

| Method | Path | Permission |
|---|---|---|
| GET | `/inventory/warehouses/:id/detail` | `inventory:read` |
| GET | `/inventory/warehouses/:warehouseId/locations/:locationId/detail` | `inventory:read` |
| POST | `/inventory/warehouses/validate` | `inventory:write` |
| POST | `/inventory/locations/validate` | `inventory:write` |

## Contratos

- `packages/contracts/src/types/inventory-detail.types.ts`
  - `WarehouseDetailDto`, `LocationDetailDto`
  - `ValidateWarehouseDto`, `ValidateLocationDto`, `ProgressiveValidationResultDto`

## Implementação

| Arquivo | Papel |
|---|---|
| `apps/api/src/inventory/inventory-detail.service.ts` | Composição BFF + dry-run domain |
| `apps/api/src/inventory/inventory-detail.controller.ts` | HTTP + guards |
| `apps/api/src/inventory/warehouse.module.ts` | Wire controller/service |
| `scripts/validate-guards.py` / `scripts/verify-guards.mjs` | SCOPE + detail controller |

## availableActions

- Warehouse active: `read`, `upload_document`, `update`, `create_location`, `configure_levels`, `deactivate` (activePhysical==0) **ou** `request_override_deactivate` (activePhysical>0)
- Warehouse inactive: `read`, `upload_document`, `activate`
- Location active: `read`, `upload_document`, `update`, `deactivate`, `request_override_deactivate`
- Location inactive: `read`, `upload_document`, `activate`
- `primaryAction`: `update` se active, senão `activate`, senão primeira ação

## Invariantes

- BOLA: location detail 404 se `location.warehouseId !== warehouseId`
- History via `prisma.auditLog` (entityType warehouse / warehouse_location) — **não** exige `audit:read`
- Validate: DomainError → field errors (HTTP 200 body), sem 500
- `summary.balanceAvailable` sempre `false` até slice de saldo

## Testes

| Arquivo | Cobertura |
|---|---|
| `inventory-detail.service.spec.ts` | compose, 404, BOLA, validate ok/invalid, actions |
| `inventory-detail.auth.spec.ts` | 4 endpoints permission matrix |
| `inventory-detail.contract.spec.ts` | DTO shapes |

## Evidence 2026-07-21

| Gate | Result |
|---|---|
| contracts build | tsc OK |
| domain build | tsc OK |
| api inventory-detail | **16 passed** (3 files) |
| guards | **89 endpoints / 13 controllers** |

## Risks

| Risk | Severity | Mitigation |
|---|---|---|
| balanceAvailable stub | medium | documentado; slice futuro de saldo |
| History sem paginação além de take 20 | low | preview only |
| OpenAPI YAML ausente | low | deferred no slice |
| Feature fora de main | medium | branch dedicada |

## Rollback

1. `git revert <commit>` — sem migration
2. Remover controller do module se hotfix parcial

## Fontes consultadas

- Prompt PR-INVENTORY-01-S05
- `docs/governance/DECISION_PRECEDENCE.md`
- `docs/traceability/PR-INVENTORY-01-S04.md` (padrão)
- `apps/api/src/inventory/*` S01–S04 patterns
- `packages/domain` Warehouse / WarehouseLocation aggregates
- SOURCE_BASIS [OPENAPI][OWASP-API][PROJECT-INTEGRATIONS]

## Status

**READY_WITH_RISKS** — balance stub + OpenAPI deferred + branch not on main


---

## S05-UI — Warehouse Object Page (LAY-02)

**Slice:** PR-INVENTORY-01-S05-UI  
**Branch:** `codex/pr-inventory-01-s05-warehouse-detail-ui`  
**Base:** S05 API BFF @ 883963d  
**Agent:** ux_operations  
**Sources:** [PROJECT-UX] `docs/blueprint-master/02_UX_LAYOUT_SYSTEM.md`, [WCAG22], [NIST-SSDF], prompt S05-UI

### Objetivo testável

Operador abre `/inventory/warehouses`, clica em um depósito e vê Object Page LAY-02 com header compacto, 5 abas horizontais (Posições, Saldo, Documentos, Timeline, Auditoria), ação primária fixa, painel contextual e estados loading/empty/error/no-permission/offline/conflict — identifica estado e próxima ação em ≤5s.

### Escopo OUT

- Formulários create/edit warehouse (view + primary action desabilitada)
- Location detail page
- Saldo físico real (`balanceAvailable=false`, mensagem D-003.14)
- Dark mode / mobile polish avançado
- Playwright E2E (deferred — monorepo sem playwright neste slice)
- Escrita de activate/deactivate/upload via UI

### Rotas

| Path | Página |
|---|---|
| `/inventory/warehouses` | List Report simples (código, nome, tipo, ativo, updatedAt) + busca/filtros client-side |
| `/inventory/warehouses/[id]` | Object Page LAY-02 |
| `?tab=locations\|balance\|documents\|timeline\|audit` | Deep-link de aba |

### Componentes `@sunset/ui` (novos)

| Arquivo | Papel |
|---|---|
| `packages/ui/src/components/tabs.tsx` | Tabs horizontais role=tablist/tab/tabpanel, badge count, setas |
| `packages/ui/src/components/status-badge.tsx` | ACTIVE/INACTIVE (isActive ou status) |
| `packages/ui/src/components/skeleton-rows.tsx` | Skeleton de tabela |
| `packages/ui/src/components/object-page-header.tsx` | Header compacto + primaryAction |
| `packages/ui/src/hooks/use-online-status.ts` | navigator.onLine |
| `packages/ui/src/layout/top-nav.tsx` | `navItems` + `renderNavLink` opcionais (compatível) |

Estados reutilizados (sem duplicar): EmptyState, ErrorState, LoadingState, NoPermissionState, ConflictState, OfflineState, SuccessState.

### Implementação web

| Arquivo | Papel |
|---|---|
| `apps/web/src/lib/api.ts` | `apiRequest` exportado + re-export inventory |
| `apps/web/src/lib/api/inventory.ts` | listWarehouses, getWarehouseDetail, listLocations, listWarehouseDocuments, listAudit |
| `apps/web/src/app/(authenticated)/inventory/warehouses/page.tsx` | Lista |
| `apps/web/src/app/(authenticated)/inventory/warehouses/[id]/page.tsx` | Rota detalhe |
| `.../[id]/components/warehouse-detail-page.tsx` | Object page orquestrador |
| `.../location-tab.tsx` | Posições (preview + lazy list) |
| `.../saldo-tab.tsx` | Deferred D-003.14 |
| `.../document-tab.tsx` | Documentos |
| `.../timeline-tab.tsx` | recentHistory |
| `.../audit-tab.tsx` | /v1/audit ou fallback history; 403 → NoPermission/fallback |
| `.../context-panel.tsx` | Métricas summary |
| `.../hooks/use-warehouse-detail.ts` | Fetch detail BFF |
| `apps/web/src/app/(authenticated)/layout.tsx` | Nav Depósitos |

### Wireflow (resumo)

1. Login → shell autenticado → TopNav "Depósitos"
2. Lista GET `/v1/inventory/warehouses` → filtro client-side → click row
3. Detail GET `/v1/inventory/warehouses/:id/detail` → header + tabs + panel
4. Tab focus → lazy fetch locations/documents/audit quando necessário
5. Offline → OfflineState banner; 403 → NoPermissionState; 409 → ConflictState; erro → ErrorState+retry

### Matriz de estados

| Estado | Trigger | UI | Próxima ação |
|---|---|---|---|
| loading | mount fetch | LoadingState + SkeletonRows | aguardar |
| success | 200 detail | header+tabs+panel | operar abas |
| empty (tab) | lista vazia | EmptyState s/ botão se sem ação | mudar filtro/aba |
| error | 5xx/network | ErrorState + retry | Tentar novamente |
| no-permission | 403 | NoPermissionState | Voltar lista |
| conflict | 409 | ConflictState | Recarregar |
| offline | navigator.onLine=false | OfflineState banner | reconectar |
| saldo deferred | balanceAvailable=false | EmptyState D-003.14 | aguardar slice saldo |

### Atalhos

| Atalho | Ação |
|---|---|
| Alt+1..5 | Abas Posições/Saldo/Documentos/Timeline/Auditoria |
| Escape | Fecha painel contextual (mobile/drawer) |
| Ctrl/Cmd+N | Toast "em breve" (create fora de escopo) |
| Ctrl/Cmd+U | Foca aba Documentos |
| Setas ←/→ no tablist | Navega abas (a11y) |

### Checklist WCAG 2.2 AA (baseline)

- [x] role=tablist / tab / tabpanel + aria-selected
- [x] Status não só por cor (texto Ativo/Inativo + dot)
- [x] Focus ring em tabs e botões
- [x] Offline/erro com role=alert / aria-live
- [x] Labels em filtros da lista (aria-label)
- [x] Primary action com title quando disabled
- [ ] Contraste automatizado axe/playwright — deferred E2E
- [ ] Screen reader full pass manual — deferred

### Métricas de tarefa (alvo)

| Métrica | Alvo | Como medir |
|---|---|---|
| Tempo até identificar estado | ≤5s | stopwatch / future analytics |
| Cliques lista → detalhe | 1 | row click |
| Cliques para trocar aba | 1 ou atalho Alt+n | UI |
| Retrabalho por erro recuperável | retry 1-click | ErrorState onAction |

### Testes

| Suite | Arquivo | Cobertura |
|---|---|---|
| @sunset/ui | `packages/ui/src/components/tabs.test.tsx` | StatusBadge, Tabs a11y/switch, EmptyState, ObjectPageHeader, Offline |
| @sunset/web | `apps/web/.../__tests__/warehouse-detail-page.test.tsx` | 5 tabs, offline banner, saldo deferred, location empty |

### DEFERRED (UI)

| Item | Motivo |
|---|---|
| Playwright E2E | não há playwright no monorepo neste slice |
| Write actions UI | fora de escopo; botão primary disabled |
| Saldo real | D-003.14 / balanceAvailable stub API |
| Location object page | slice futuro |
| Salvar visualização lista | v1 filtros locais apenas |

### Evidence 2026-07-21 (S05-UI)

| Gate | Result |
|---|---|
| packages/ui vitest | **9 passed** (`tabs.test.tsx`) |
| apps/web vitest | **5 passed** (`warehouse-detail-page.test.tsx`) |
| packages/ui typecheck | tsc OK |
| apps/web typecheck | tsc OK |
| Playwright E2E | deferred |

### Risks

| Risk | Severity | Mitigation |
|---|---|---|
| E2E ausente | medium | testes unitários + manual checklist |
| Primary action disabled pode confundir | low | title tooltip + doc |
| Document list exige inventory:document:read | low | fallback preview do BFF |
| Audit exige audit:read | low | fallback recentHistory do BFF |
| Tailwind success-* classes | low | tokens já definem success |

### Rollback

1. `git revert <commit>` — sem migration
2. Remover rotas inventory e nav item se hotfix parcial

### Status S05-UI

**READY_WITH_RISKS** — E2E playwright deferred; write UI deferred; saldo stub
