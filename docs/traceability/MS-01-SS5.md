# MS-01-SS5 — Currency + Exchange Rate

## Slice
- **ID:** MS-01-SS5
- **Branch:** `codex/ms-01-kernel`
- **Objetivo:** Master de moedas e taxas com vigência; dual-currency fields no SS7

## Entregas
- Domain: Currency, ExchangeRate, ExchangeRateSource
- Contracts DTOs currency/rate
- Prisma Currency + ExchangeRate + migration `20260721000003_create_currencies`
- Seed ARS/USD/BRL + taxa USD→ARS 350.50
- API currencies + exchange-rates/current
- PrismaCurrencyRepository

## API
| Método | Rota |
|--------|------|
| GET | /v1/currencies |
| GET | /v1/currencies/:id |
| POST | /v1/currencies |
| GET | /v1/currencies/:id/rates |
| POST | /v1/currencies/:id/rates |
| GET | /v1/exchange-rates/current |

## Notas
- Layout domain: arquivos flat em `accounting/currency.*` (export via `currency.ts`)
- Migration gerada por `ensure-currency-migration.cjs` no pretest/generate
