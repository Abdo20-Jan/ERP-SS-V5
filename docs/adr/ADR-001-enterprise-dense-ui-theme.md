# ADR-001: Tema visual enterprise denso (inspirado em ERP operacional)

## Status

Aceito — 2026-08-03

## Contexto

O blueprint aprovado (`docs/blueprint-master/02_UX_LAYOUT_SYSTEM.md`) define ERP desktop-first, denso e orientado a dados tabulares. O solicitante pediu layout profissional estilo NetSuite: navy no chrome lateral, tabelas densas, filtros persistentes e prioridade operacional sobre dashboards gráficos.

O design system anterior usava azul Tailwind genérico (`#3b82f6`), top-nav horizontal e tabelas básicas sem padrão List Report.

## Decisão

1. Adotar paleta **navy enterprise** (`primary-700: #1C3F6E`) para sidebar e chrome, com cinzas neutros quentes para superfícies de dados.
2. Implementar **ErpShell** com navegação lateral recolhível + top bar compacta (40px).
3. Padronizar telas de listagem com **ListReportLayout** + **DataGrid** denso (linhas ~28px).
4. Substituir home de demonstração de estados por **Central de Tarefas** (worklist operacional).
5. Não copiar assets, logos ou tokens proprietários do NetSuite; apenas aplicar princípios UX compatíveis com o blueprint (List Report, Object Page, densidade).

## Consequências

- Tokens em `packages/ui/src/tokens/` alterados; componentes existentes herdam nova paleta via Tailwind.
- Novas rotas web para módulos COMEX, Tesouraria, CRM, RH, Faturamento, Integrações e Contabilidade.
- Requer ADR aceito antes de divergir do corpus Fiori-only nas referências visuais.

## Rollback

Reverter tokens para commit anterior e restaurar `TopNav`-only layout em `apps/web/src/app/(authenticated)/layout.tsx`.

## Como verificar

1. `pnpm --filter @sunset/web dev` — sidebar navy, tabelas densas, filtros visíveis.
2. Navegar `/treasury/bank-accounts`, `/comex/shipments`, `/crm/leads` — List Report renderizado.
