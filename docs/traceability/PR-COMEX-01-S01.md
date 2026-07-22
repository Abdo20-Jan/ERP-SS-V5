# PR-COMEX-01-S01 — Fundação do pedido internacional (cabeçalho + mestres)

| Campo | Valor |
|---|---|
| Slice | PR-COMEX-01-S01 (Q0001–Q0050) |
| Session | MS-02 W1 #1 — PR-COMEX-01 T1 |
| Branch alvo | codex/pr-comex-01-t1-order-core → codex/ms-02-comex-landed-stock |
| Status | IMPLEMENTADO — evidências abaixo |
| Data | 2026-07-22 |

## Objetivo testável
Criar pedido internacional em DRAFT com fornecedor (Party MS-01), tipo de operação (P0-START-42) e dados de cabeçalho, com ID uuidv7, código humano `PI-NNNNNN` via sequence, version otimista e auditoria na mesma transação.

## Requisitos cobertos (temas S01)
- Objetivo e resultado esperado (Q0001–Q0010)
- Limites de escopo e exclusões (Q0011–Q0020)
- Atores e responsabilidades (Q0021–Q0030)
- Dados mestres utilizados — Party/Product sem recriar (Q0031–Q0040, D-005)
- Dados de cabeçalho (Q0041–Q0050, P0-START-45)

## Arquivos
- packages/db/prisma/migrations/20260731000000_create_comex_international_orders/{migration,down}.sql (novo)
- packages/db/prisma/schema.prisma (6 modelos + relações reversas Party/User/Product)
- packages/db/prisma/seed.ts (+16 permissões comex:*)
- packages/domain/src/comex/international-order.{aggregate,enums,commands,events,state-machine,validator,repository}.ts (novo)
- packages/domain/src/common/errors/domain-error.ts (+OrderValidationError, InvalidOrderStateError)
- packages/db/src/repositories/international-order.repository.prisma.ts (novo)
- packages/contracts/src/types/comex-order.types.ts (novo)
- apps/api/src/comex/{comex.module,international-order.controller,international-order.service}.ts (novo)
- apps/api/src/app.module.ts (+ComexModule)

## Decisões aplicadas
- D1: estados com APPROVED explícito + SUSPENDED (união BR-01 × P0-START-43, DECISION_PRECEDENCE)
- D5: Party root MS-01 (FK RESTRICT, sem recriar mestre)
- D6: código humano via sequence, gaps tolerados
- D7: colunas fx_* criadas (expand), política de snapshot adiada a W2 (masterplan §11)
- D8: idempotência forte — idempotency_key persistida, replay retorna existente sem save
- P0-START-41/42/45: hierarquia pedido→linhas, 4 tipos de operação, campos mínimos de aprovação
- Fontes: [PROJECT-SCOPE], [PROJECT-INTEGRATIONS], [PROJECT-PRECEDENCE], [NIST-SSDF]

## Testes e evidências (E1)
- Domain: tests/comex/international-order.spec.ts — 15/15 PASS (create, decimal sem float, validações)
- API service: tests/international-order.service.spec.ts — 9/9 PASS (create+audit, idempotência replay/nova chave)
- API auth: tests/international-order.auth.spec.ts — 18/18 PASS (17 endpoints, matriz 401/403/allow)
- pnpm typecheck: 10/10 packages
- python3 scripts/validate-guards.py: 127 endpoints/19 controllers com guards
- Migration aplicada: 20260731000000_create_comex_international_orders

## Rollback
down.sql dropa as 6 tabelas + sequence em ordem reversa; tabelas novas sem dados → rollback seguro. Reversão de código via git.

## Riscos residuais
- R1: política de snapshot FX pendente (bloqueia W2, não T1) — dono: produto
- R2: outbox comex sem consumidor (dispatch → T3) — aceito no masterplan
- R3: override reuso de inventory (dívida: promover a shared/platform)
