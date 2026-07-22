# PR-INVENTORY-01-S08: Eventos e integrações assíncronas

## Objetivo e Escopo
Entregar a fundação backend e contratual para eventos e integrações assíncronas de Inventory, permitindo registrar, versionar, consultar e reprocessar eventos relacionados a depósitos, posições, documentos, overrides, tarefas/SLA e disponibilidade.

**Fora de escopo:**
- Integração real com WMS TP/Moreiro.
- Webhooks externos definitivos.
- Worker robusto de produção (DEFERRED).
- UI frontend completa (LAY-12).

## Evidências Observadas
- Eventos de domínio existentes em `packages/contracts/src/events/` e `packages/domain/src/inventory/` não são versionados.
- Não existe tabela de outbox global ou log de eventos em `packages/db/prisma/schema.prisma`.
- `AuditLog` possui `correlationId`.
- S07 foi implementado e introduziu eventos SoD.

## Fatos, Inferências e Decisões Necessárias
- **Fato:** Não há outbox global.
- **Decisão:** Criar tabela `inventory_event_outbox` específica para o módulo de inventário.
- **Fato:** Eventos atuais não são versionados.
- **Decisão:** Versionar eventos existentes (ex: `inventory.warehouse.created.v1`).
- **Decisão:** O replay de um evento atualizará seu status para `REPLAY_REQUESTED` e incrementará o `retryCount`, mantendo o mesmo `id` e `correlationId`.

## Riscos
- **Severidade Média / Probabilidade Alta:** Risco de payload conter dados sensíveis. Mitigação: Redigir payload por padrão na API, exigindo permissão `inventory:event:payload:read` para visualização completa.
- **Severidade Baixa / Probabilidade Alta:** Worker real fora de escopo. Mitigação: A API permitirá transições manuais de estado para simular o worker e testar o fluxo.

## Lista de Arquivos a Criar/Modificar
**Criar:**
- `packages/domain/src/inventory/inventory-event.aggregate.ts`
- `packages/domain/src/inventory/inventory-event.commands.ts`
- `packages/domain/src/inventory/inventory-event.events.ts`
- `packages/domain/src/inventory/inventory-event.repository.ts`
- `packages/domain/src/inventory/inventory-event.enums.ts`
- `packages/contracts/src/types/inventory-event.types.ts`
- `packages/contracts/src/events/inventory-event.events.ts`
- `packages/db/src/repositories/inventory-event.repository.prisma.ts`
- `packages/db/prisma/migrations/20260728000000_create_inventory_event_outbox/migration.sql`
- `packages/db/prisma/migrations/20260728000000_create_inventory_event_outbox/down.sql`
- `packages/db/ensure-inventory-event-migration.cjs`
- `apps/api/src/inventory/inventory-event.controller.ts`
- `apps/api/src/inventory/inventory-event.service.ts`
- `apps/api/src/inventory/dto/inventory-event.dto.ts`
- `apps/api/src/inventory/tests/inventory-event.domain.spec.ts`
- `apps/api/src/inventory/tests/inventory-event.service.spec.ts`
- `apps/api/src/inventory/tests/inventory-event.contract.spec.ts`
- `apps/api/src/inventory/tests/inventory-event.auth.spec.ts`

**Modificar:**
- `packages/domain/src/inventory/index.ts`
- `packages/contracts/src/types/index.ts`
- `packages/contracts/src/events/index.ts`
- `packages/db/prisma/schema.prisma`
- `packages/db/prisma/seed.ts`
- `packages/db/src/index.ts`
- `packages/db/package.json`
- `apps/api/src/inventory/warehouse.module.ts`
- `scripts/validate-guards.py`

## Plano de Testes
- **Unitários:** Criar evento válido, transições de estado, replay permitido/negado, redaction de payload.
- **Integração DB:** Migration up/down, registrar evento, listar por filtros, idempotency constraint.
- **API/Contrato:** GET `/inventory/events`, POST `/inventory/events/:id/replay`, 403 sem permissão, 404 inexistente.
- **Segurança:** BFLA com `@RequirePermission`, payload redigido por padrão.

## Rollback
- `git revert` do commit.
- Executar `down.sql` para remover `inventory_event_outbox`.
- Remover permissões do seed.

## Impactos
- **Segurança:** Novas permissões RBAC, auditoria de visualização de payload.
- **Dados:** Nova tabela `inventory_event_outbox`.
- **UX:** Preparação para LAY-12.
- **Offline:** N/A.
- **Observabilidade:** Logs estruturados para gravação/replay/falha.

## Matriz de Dependências
- Depende de S01-S07 para os eventos a serem versionados.

## Handoffs
- N/A (execução no mesmo agente).

## Checklist de Merge
- [ ] Requisitos Q0351-Q0400 mapeados.
- [ ] Eventos versionados.
- [ ] Replay protegido.
- [ ] API protegida por RBAC.
- [ ] Payload sensível não exposto por padrão.
- [ ] Auditoria implementada.
- [ ] Migration reversível.
- [ ] Guard scanner atualizado.
- [ ] Testes passando.
- [ ] Traceability atualizado.

## Status
READY
