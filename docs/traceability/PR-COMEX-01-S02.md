# PR-COMEX-01-S02 — Linhas e ciclo de vida do pedido

| Campo | Valor |
|---|---|
| Slice | PR-COMEX-01-S02 (Q0051–Q0100) |
| Session | MS-02 W1 #1 — PR-COMEX-01 T1 |
| Status | IMPLEMENTADO — evidências abaixo |
| Data | 2026-07-22 |

## Objetivo testável
Adicionar/editar/cancelar linhas por SKU (quantidade, preço, total decimal sem float), transitar o pedido pela máquina de estados completa (DRAFT→PENDING_APPROVAL→APPROVED→ORDER_SENT→PROFORMA_CONFIRMED→IN_PRODUCTION→READY_TO_SHIP + SUSPENDED/CANCELLED), com aprovação SoD (criador ≠ aprovador) e produção parcial por linha com saldo.

## Requisitos cobertos (temas S02)
- Linhas e detalhamento (Q0051–Q0060)
- Estados do ciclo de vida (Q0061–Q0070, P0-START-43)
- Transições e próxima ação (Q0071–Q0080, P0-START-44)
- Gatilhos e eventos (Q0081–Q0090)
- Aprovações e alçadas (Q0091–Q0100, SoD masterplan §10)

## Implementação
- international-order.state-machine.ts: tabela pura de transições + assertTransition (InvalidOrderStateError → 409)
- international-order.aggregate.ts: OrderLine com saldos (ordered/confirmed/produced/cancelled), pendingProduction, openBalance; guards com expectedVersion (409 VERSION_CONFLICT)
- international_order_state_transitions (append-only): from→to, actor, reason, correlation — alimenta timeline
- Endpoints: POST /:id/lines, PATCH /:id/lines/:n, POST /:id/lines/:n/cancel, POST /:id/{submit,approve,reject,send,start-production,production-progress,ready-to-ship,suspend,resume,cancel}

## Decisões aplicadas
- D1: cadeia com APPROVED explícito (SM-COMEX-01 função 3 separa aprovar/enviar/confirmar)
- D2: workflow até READY_TO_SHIP com production-progress por linha
- SoD: approve rejeita actor==createdBy (SOD_VIOLATION → 409), teste dedicado
- Saldos: pendingProduction = confirmed − produced; readyToShip exige produção completa (parcial via override → COMEX-02)

## Testes e evidências (E1)
- Domain 15/15 PASS: full flow, transição inválida, version mismatch, produção > confirmado bloqueada, readyToShip incompleto bloqueado, suspend/resume, cancel terminal
- API 9/9 service PASS: submit sem campos → ValidationError, approve SoD → ConflictError, approve por outro → APPROVED + save
- validate-guards: 127 endpoints OK

## Rollback
Mesma estratégia de S01 (down.sql + git).

## Riscos residuais
- R4: embarque parcial a partir de IN_PRODUCTION é responsabilidade de COMEX-02 (documentado, não implementado aqui)

## Gate corretivo 2026-07-22 (commit d4b8461)
- expectedVersion/expectedLineVersion aplicados no agregado e CAS no repository (updateMany version).
- Transições com idempotencyKey + requestHash na timeline (replay seguro).
- Outbox comex_event_outbox escrita na mesma transação do agregado.
- Evidência: domain 21/21, api 26/26, typecheck limpo.

## Review independente posterior a d4b8461
- P1 identificado e parcialmente corrigido: CAS de override agora usa status + version no `updateMany` transacional.
- P1 ainda aberto: idempotência persistente requer migration aditiva de `override_requests`.
- Testes concorrentes PostgreSQL e replay de override ainda faltam.
