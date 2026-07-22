# PR-COMEX-01-S03 — Override, validações, alertas e documentos obrigatórios

| Campo | Valor |
|---|---|
| Slice | PR-COMEX-01-S03 (Q0101–Q0150) |
| Session | MS-02 W1 #1 — PR-COMEX-01 T1 |
| Status | IMPLEMENTADO — evidências abaixo |
| Data | 2026-07-22 |

## Objetivo testável
Executar override de master auditado sem quebrar invariantes (reuso do OverrideRequest kernel), validar campos bloqueantes por transição, gerar alertas não bloqueantes com ciclo OPEN→ACKNOWLEDGED→RESOLVED e exigir proforma registrada antes da confirmação (P0-START-46).

## Requisitos cobertos (temas S03)
- Override do master (Q0101–Q0110, P0-START-47)
- Validações bloqueantes (Q0111–Q0120, P0-START-45)
- Alertas não bloqueantes (Q0121–Q0130)
- Erros e recuperação (Q0131–Q0140)
- Documentos obrigatórios (Q0141–Q0150, P0-START-46)

## Implementação
- comex-override.{controller,service}.ts: reuso do agregado/tabela override_requests do kernel (resourceType=international_order) com fluxo PENDING→APPROVED/REJECTED→EXECUTED, auditoria e correlação — sem duplicar regra (D3)
- international-order.validator.ts: validateApprovalReady (moeda, incoterm, pagamento, origem, itens, qtd, preço, previsão, responsável) — bloqueia submit/approve
- order-alert.{aggregate,repository} + order-alert.{controller,service}.ts: alertas não bloqueantes com ack/resolve e permissões comex:alert:*
- proforma_versions: UNIQUE(org, supplier, proforma_number) anti-duplicidade no banco (D4); confirm-proforma exige versão registrada
- comex_event_outbox: eventos .v1 persistidos na mesma tx (dispatch/consumidores → T3)

## Decisões aplicadas
- D3: reuso OverrideRequest inventory + dívida registrada (promover a shared/platform)
- D4: unicidade de proforma com colunas denormalizadas (invariante no banco, não só no service)
- Alertas ≠ ImportOccurrence (COMEX-04): entidade leve própria
- Erros estáveis: 400 validação, 403 SoD/permissão, 404 não encontrado, 409 transição/versão/duplicidade, sem stack ao cliente [OWASP-ASVS]

## Testes e evidências (E1)
- Domain 15/15 PASS: validações bloqueantes por campo, SoD, cancelamento de linha
- API 9/9 service PASS: idempotência replay, auditoria na mesma tx (mock $transaction)
- API 18/18 auth PASS: override/alerts/proforma com permissões comex:override:*, comex:alert:*, comex:proforma:*
- validate-guards: 127 endpoints/19 controllers OK
- pnpm typecheck: 10/10

## Rollback
down.sql + git revert; override_requests é tabela kernel compartilhada (sem drop).

## Riscos residuais
- R2: outbox sem consumidor (dispatch → T3)
- R5: matriz completa de documentos (invoice/packing/BL) → COMEX-02/04; aqui só proforma (P0-START-46 escopo pedido)
