# PR-PLATFORM-UX-01 — Traceability

**Slice:** PR-PLATFORM-UX-01  
**Module:** PLATFORM (+ workspaces COMEX, ACCOUNTING, TREASURY, SALES, CRM, COMP/RH)  
**Branch:** `cursor/netsuite-heavy-data-modules-b63b`  
**Base:** main  

## Objective (testable)

Operador autenticado usa shell NetSuite (header laranja + sidebar cinza densa) e acessa List Reports operacionais de COMEX, Finanças, Tesouraria (incl. conciliação), Contabilidade, RH, Integrações, Faturamento e CRM, com listagens via API autenticada e RBAC.

## Out of scope

- Motor fiscal/SI Factura e cálculo aduaneiro (não inventar regra)
- Migrations Prisma dos novos domínios (fase expand: store em memória versionável)
- Postagem contábil completa a partir de tesouraria/faturamento
- Offline/sync dos novos módulos
- Object pages completas com workflow de aprovação

## Mapping (catálogo)

| Pedido | Catálogo |
|--------|----------|
| COMEX | Module 1 / SM-COMEX-01..05 |
| Finanças | Contábil + Tesouraria + AP/AR worklist |
| Tesouraria / Conciliação | SM-TREASURY-01 + SM-TREASURY-05 |
| Contabilidade | Module 4 / ACCOUNTING (API existente) |
| Faturamento | SM-SALES-04 |
| CRM | Module 9 |
| RH | SM-COMP-04 |
| Integrações | SM-PLATFORM-05 + Integration Map |

## Data flow

1. UI List Report → `GET /v1/{module}/...` com Bearer + correlation id  
2. Guard JWT + PermissionsGuard (`{module}:read`)  
3. Application service lê store (accounting: Prisma; demais: seed in-memory)  
4. Resposta `{ data, total, page, limit }`  
5. UI estados: loading, vazio, erro, sem permissão, offline, sucesso  

## Entities / states

- COMEX: `InternationalOrder` statuses DRAFT→APPROVED→IN_PRODUCTION→SHIPPED→IN_CUSTOMS→RECEIVED→CLOSED  
- Treasury: `BankAccount`, `BankStatementLine`, `ReconciliationMatch` (SUGGESTED|MATCHED|UNMATCHED|EXCEPTION)  
- Sales billing: `SalesInvoice` DRAFT→PENDING_AUTH→AUTHORIZED→AWAITING_PAYMENT→PAID→RELEASED  
- CRM: Lead NEW→QUALIFIED→ASSIGNED→CONVERTED|LOST; Opportunity stages  
- HR: Employee ACTIVE|LEAVE|TERMINATED  
- Integration: Connector ACTIVE|DEGRADED|ERROR|DISABLED  

## HTTP contracts

| Method | Path | Permission |
|--------|------|------------|
| GET | `/v1/comex/orders` | `comex:read` |
| GET | `/v1/treasury/bank-accounts` | `treasury:read` |
| GET | `/v1/treasury/reconciliation-lines` | `treasury:read` |
| GET | `/v1/finance/payables` | `finance:read` |
| GET | `/v1/finance/receivables` | `finance:read` |
| GET | `/v1/sales/invoices` | `sales:read` |
| GET | `/v1/crm/leads` | `crm:read` |
| GET | `/v1/crm/opportunities` | `crm:read` |
| GET | `/v1/hr/employees` | `hr:read` |
| GET | `/v1/integrations/connectors` | `integrations:read` |
| GET | `/v1/chart-of-accounts` (existente) | `accounting:read` |

## Migrations

Nenhuma neste slice. Stores in-memory documentados; persistência em slices dedicados por módulo.

## Permissions

`comex:read`, `treasury:read`, `finance:read`, `sales:read`, `crm:read`, `hr:read`, `integrations:read` (+ existentes `accounting:read`, `inventory:read`).

## Audit

Somente leitura neste slice; sem comandos de mutação novos.

## Offline

Somente online. UI exibe OfflineState se desconectado.

## UI states

List Report: loading, empty, error, no-permission, offline, success (tabela densa).

## Tests

- Domain: state machines / enums  
- UI: AppShell/SideNav + ListReport  
- API: auth deny + list happy path por módulo  
- Web: module registry + home worklist  

## Risks

- Concurrency/idempotency: N/A (read-only)  
- Financial: valores exibidos como string decimal; sem cálculo inventado  
- In-memory perde dados no restart — esperado até migration  

## Observability

Correlation id existente; logs de request via interceptor atual.

## Rollout / rollback

Feature sempre on. Rollback: revert do branch/PR; sem migration.

## Evidence criteria

1. Shell NetSuite visível (header laranja, sidebar, content cinza)  
2. Navegação para todos os módulos pedidos  
3. Testes unitários/domínio/API verdes no escopo  
4. Sem dashboard de cards decorativos como home  

## Evidence (executed)

| Gate | Result |
|------|--------|
| `python3 scripts/validate-guards.py` | ✅ 137 endpoints / 26 controllers |
| `@sunset/domain` test | ✅ 253 passed (incl. COMEX + Sales state machines) |
| `@sunset/ui` test | ✅ 11 passed (AppShell + ListReport) |
| `@sunset/api` test | ✅ 350 passed (incl. comex/treasury/finance/sales) |
| `@sunset/web` test | ✅ 7 passed (module nav + warehouse) |
| typecheck web/ui/domain | ✅ |

## Sources consulted

- `docs/blueprint-master/02_UX_LAYOUT_SYSTEM.md`  
- `docs/catalog/SUNSET_ERP_CATALOGO_COMPLETO_MODULOS_SUBMODULOS_FUNCOES_v1.0.md`  
- `docs/blueprint-master/modules/{01_COMEX,04_ACCOUNTING,06_TREASURY,07_SALES,09_CRM,11_PLATFORM,12_COMP}.md`  
- `docs/blueprint-master/03_INTEGRATION_MAP.md`  
- `AGENTS.md`, `docs/execution/00_BUILD_ORDER.md`  

## Lacunas

- Persistência Prisma por módulo  
- Mutações e workflows de aprovação  
- Object pages e matching de conciliação com confirmação  
