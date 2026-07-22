# PR-INVENTORY-01-S07: Segregation of Duties (SoD)

## Objetivo
Implementar o motor de Segregação de Funções (SoD) para o módulo de inventário, permitindo definir regras de incompatibilidade, detectar violações e gerenciar exceções com aprovação independente.

## Arquivos Alterados
- `packages/domain/src/inventory/segregation-of-duties*`
- `packages/contracts/src/types/inventory-sod.types.ts`
- `packages/contracts/src/events/inventory-sod.events.ts`
- `packages/db/prisma/schema.prisma`
- `packages/db/prisma/migrations/20260727000000_create_inventory_sod/*`
- `packages/db/src/repositories/inventory-sod.repository.prisma.ts`
- `apps/api/src/inventory/inventory-sod.service.ts`
- `apps/api/src/inventory/inventory-sod.controller.ts`
- `apps/api/src/inventory/dto/inventory-sod.dto.ts`
- `apps/api/src/inventory/warehouse.module.ts`
- `apps/api/src/inventory/tests/inventory-sod.*.spec.ts`

## Testes e Evidências
- Testes de domínio para avaliação de regras e bloqueio de autoaprovação.
- Testes de serviço para criação de regras e avaliação.
- Testes de contrato para eventos.
- Validação de guards via `scripts/validate-guards.py`.

## Riscos e Decisões
- **D-003.17**: O motor de SoD avalia permissões e papéis do ator contra as regras ativas. Se houver violação, a ação é bloqueada ou requer aprovação independente (exceção).
- **D-003.18**: Exceções aprovadas têm validade (expiresAt) e são reavaliadas a cada tentativa de ação.
