# ADR-0002 — Receipts de comando e CAS para alertas e proformas COMEX

- **Status:** ACCEPTED
- **Data:** 2026-07-23
- **Autores:** architecture
- **Aprovação:** decisão explícita do proprietário registrada em P1-D02, P1-D03, P1-D04 e P1-D05
- **Requisitos afetados:** PR-COMEX-01-S01–S03; idempotência e concorrência dos nove writes aprovados
- **PR/slice:** PR-COMEX-01-S03 — remediation WP-4
- **Estende:** ADR-0001 — Fronteiras e publicação confiável da fundação COMEX

## Contexto

Alertas e versões de proforma possuem cinco mutações não-override: criar, reconhecer e resolver alerta; registrar e confirmar proforma. O desenho anterior usava persistência por `upsert`, não possuía versão CAS própria e não mantinha um comprovante append-only por comando. Isso permitia lost update, não distinguia replay de reutilização divergente da chave e não fornecia uma referência durável para retornar a representação atual do recurso.

O fluxo de override já possui receipt próprio e permanece no kernel compartilhado definido no ADR-0001. Reutilizá-lo para alertas ou proformas criaria ownership incorreto e uma dependência de COMEX em persistência específica de override.

Esta decisão preserva o monólito modular e mantém COMEX como owner de seus agregados, ports, adapters e dados, conforme [PROJECT-ARCH].

## Conflito ou decisão

Era necessário decidir:

1. onde persistir a idempotência dos cinco writes não-override;
2. como identificar comandos sem confundi-los com eventos;
3. como reproduzir uma chamada sem armazenar resposta obsoleta;
4. como proteger alertas e proformas contra atualização concorrente;
5. como evoluir schema e writers sem big bang.

## Decisão

### Ownership e port

COMEX terá um `ComexCommandReceiptRepository` próprio, com apenas operações de consulta e append. Seu adapter Prisma e sua tabela são COMEX-owned. O port não importa nem estende `OverrideCommandReceiptRepository`.

### Identificadores de comando

Os identificadores persistidos são exatamente:

```text
comex.alert.create.v1
comex.alert.acknowledge.v1
comex.alert.resolve.v1
comex.proforma.register.v1
comex.proforma.confirm.v1
```

Esses nomes são contratos técnicos internos e versionados. Usam ação imperativa e não são eventos; eventos continuam representando fatos ocorridos, com payload e versão próprios. Se a semântica canônica de um comando mudar de forma incompatível, será criado um nome `.v2`; receipts `.v1` não serão renomeados nem reescritos.

### Chave, hash e replay

Cada receipt deve conter organização, command name, hash da chave, hash canônico da requisição, ator autenticado, correlation id, alvo tipado e instante UTC. A chave em claro não é persistida.

A unicidade obrigatória é:

```text
UNIQUE (organization_id, command_name, key_hash)
```

A representação canônica usada no `requestHash` inclui, no mínimo, command name, organização obtida server-side, ator autenticado, rota/identificadores, payload normalizado e todas as versões esperadas pelo comando. Key, ator, organização e versões são obrigatórios nos nove writes aprovados.

Quando existir receipt:

- mesma `requestHash`: carregar o alvo por organização e retornar sua representação atual, sem repetir mutação, auditoria ou outbox;
- `requestHash` divergente: retornar conflito estável `409 IDEMPOTENCY_KEY_REUSED`;
- alvo ausente apesar do receipt: tratar como falha de integridade, não como novo comando.

### Política success-only

Os cinco receipts COMEX são gravados somente para mutações commitadas. Erros de autenticação, autorização, validação, recurso inexistente, estado inválido, CAS ou integração não consomem a chave e não geram receipt.

O receipt é inserido por último na mesma transação do agregado, auditoria e outbox. Se qualquer parte falhar, tudo sofre rollback. Um comportamento futuro em que um erro também confirme uma mudança durável exige decisão e versionamento próprios; ele não faz parte deste ADR.

### Schema lógico

```text
ComexCommandReceipt
  id                  UUID PK
  organizationId      TEXT NOT NULL
  orderId              UUID NOT NULL
  commandName          TEXT NOT NULL
  keyHash              VARCHAR(64) NOT NULL
  requestHash          VARCHAR(64) NOT NULL
  actorId              UUID NOT NULL
  correlationId        TEXT NOT NULL
  alertId              UUID NULL
  proformaVersionId    UUID NULL
  recordedAt           TIMESTAMPTZ(6) NOT NULL

  UNIQUE (organizationId, commandName, keyHash)

  CHECK comando de alerta:
        alertId IS NOT NULL AND proformaVersionId IS NULL
  CHECK comando de proforma:
        alertId IS NULL AND proformaVersionId IS NOT NULL

  FK (organizationId, orderId)
        -> InternationalOrder(organizationId, id) RESTRICT
  FK (organizationId, alertId)
        -> InternationalOrderAlert(organizationId, id) RESTRICT
  FK (organizationId, proformaVersionId)
        -> ProformaVersion(organizationId, id) RESTRICT
```

Não será usado par livre `resourceType/resourceId`, nem snapshot JSON de resposta. As referências tipadas e as FKs compostas impedem alvo inválido e vínculo cross-tenant.

`InternationalOrderAlert` e `ProformaVersion` recebem uma versão CAS independente, iniciada em zero. Em proforma, `version` representa concorrência da linha persistida; `versionNumber` continua sendo a revisão documental e não pode ser reutilizado como CAS.

Os repositories recebem `saveWithVersion(entity, expectedPersistedVersion, tx)`. Valor nulo significa create-only; valor numérico exige update condicionado por organização, id e versão. O método legado `save` pode permanecer somente durante a fase expand e não pode ser usado pelos writers migrados.

## Fluxo transacional

```text
HTTP command
  -> ator + organização server-side + key + versões
  -> calcular keyHash e requestHash
  -> abrir transação
       -> procurar receipt
          -> mesma hash: ler alvo atual e retornar
          -> hash diferente: 409
          -> ausente:
               carregar agregado tenant-scoped
               validar estado, permissão e versão
               persistir por create/CAS
               persistir auditoria e outbox
               append receipt
  -> commit
```

Em corrida concorrente, um comando pode perder no CAS ou em outra constraint antes de inserir seu receipt. Após rollback, o application service consulta novamente o receipt: mesma hash produz replay; hash diferente produz 409; receipt ausente preserva o conflito CAS ou documental original. Não haverá retry cego de mutação.

## Diagrama de contexto

```text
Web/Desktop -> REST/OpenAPI -> API modular
                                  |
                                  v
                         COMEX application/domain
                           |       |        |
                         Audit   Outbox   PostgreSQL
                                           |
                         alerts / proformas / receipts
```

## Diagrama de componentes

```text
OrderAlertService / ProformaService
          |
          +-- OrderAlert / ProformaVersion
          +-- OrderAlertRepository
          +-- ProformaVersionRepository
          +-- ComexCommandReceiptRepository
          +-- ComexOutboxRepository
                         |
                    Prisma adapters
                         |
                 PostgreSQL transaction
```

## Dependency map

```text
API COMEX -> contratos + ports COMEX
Prisma adapters -> ports COMEX + PostgreSQL
Domain COMEX -X-> packages/db
Domain COMEX -X-> receipt de override/Inventory
Receipts COMEX -X-> integração externa
Eventos COMEX -> outbox -> publisher port
```

## Alternativas consideradas

1. **Estender `OverrideCommandReceiptRepository`:** rejeitada por FK, semântica e ownership específicos de override.
2. **Criar receipt genérico em Platform:** rejeitada por mover fronteira e introduzir abstração transversal sem slice próprio.
3. **Usar `resourceType/resourceId`:** rejeitada por ausência de FK tipada e risco cross-tenant.
4. **Persistir key/hash no alerta ou na proforma:** rejeitada porque um recurso recebe mais de um comando e o histórico seria sobrescrito.
5. **Persistir snapshot da resposta:** rejeitada porque o replay aprovado exige representação atual.
6. **Selecionada:** receipt COMEX append-only, success-only, com alvo tipado e CAS nos agregados.

## Consequências

### Positivas

- idempotência durável sem duplicar efeitos;
- proteção explícita contra lost update;
- ownership COMEX preservado e sem dependência circular;
- replay sem resposta congelada ou payload sensível duplicado;
- isolamento organizacional protegido também pelo banco;
- evolução incompatível explícita por novo command name versionado.

### Custos e limitações

- uma consulta adicional ao receipt por write;
- novas constraints, FKs e trigger append-only;
- os clients precisam receber a versão atual e enviar precondições obrigatórias;
- nomes `.v1` e receipts persistidos não podem ser removidos por rollback simples;
- manter `save` durante expand cria uma janela de compatibilidade que deve ser encerrada por teste de zero consumidores.

Não há nova regra fiscal, aduaneira, contábil ou financeira. Os cinco writes permanecem somente online. Este ADR não altera permissões, payloads HTTP ou eventos; esses contratos são implementados nos packets próprios.

## Compatibilidade e rollout expand-contract

1. **Expand documental:** registrar este ADR antes da mudança transversal.
2. **Expand de dados:** criar migration aditiva para versões, uniques tenant-aware, tabela, checks, FKs e proteção append-only.
3. **Dados existentes:** verificar divergências de organização; não corrigir ownership silenciosamente. Backfill de versão deve ser separado ou em lotes quando o volume exigir.
4. **Ports/adapters:** adicionar receipt port e `saveWithVersion`, mantendo readers e `save` legados compatíveis.
5. **Writers:** migrar os cinco comandos em packets revisáveis; todos passam key, ator, organização e versões e gravam receipt na mesma transação.
6. **Ativação:** observar replay, conflitos de hash, CAS, rollback e latência antes da contração.
7. **Contract:** remover `save` somente após busca estática e testes comprovarem zero writers legados. Preservar command names e receipts `.v1`.

O WP-4 é aditivo e não exige feature flag. Se um packet posterior introduzir kill switch operacional, ele deve ter owner, default seguro e condição de remoção documentados.

## Migração e rollback

- Aplicar somente migration nova; não editar migration já aplicada.
- Usar lock timeout e separar criação concorrente de índice ou validação de constraints quando o volume exigir.
- Antes da ativação dos writers, rollback pode remover estruturas comprovadamente vazias.
- Depois do primeiro receipt, rollback não apaga tabela, hashes, versões ou command names.
- Rollback funcional desabilita os cinco writers ou retorna para versão que entenda o schema expandido; não reativa writer sem CAS/idempotência.
- Falha após CAS, auditoria, outbox ou receipt causa rollback transacional integral; não há compensação parcial.

## Riscos

| Risco | Severidade | Controle |
|---|---|---|
| lost update por writer legado | P1 | CAS obrigatório e teste concorrente |
| referência cross-tenant | P1 | FKs compostas e testes negativos |
| corrida falhar antes do insert do receipt | P1 | consulta do receipt após rollback de conflito |
| reutilização divergente da key | P1 | unique + requestHash + 409 estável |
| `save` permanecer indefinidamente | P2 | teste estático de zero consumers e fase contract |
| renomear comando `.v1` | P2 | adicionar `.v2` e preservar `.v1` |
| lock de migration exceder janela | P2 | medir volume, timeout e expand/validate separado |

## Evidências e testes exigidos

- unitários de versão inicial, incremento único, stale version e separação `version`/`versionNumber`;
- unitários da canonicalização comprovando participação de comando, organização, ator, payload e versões;
- integração PostgreSQL de create/CAS, unique, FKs cross-tenant e proteção contra update/delete/truncate do receipt;
- concorrência: mesma key/hash gera um efeito; hash diferente gera 409; keys diferentes disputando a mesma versão geram um vencedor;
- erro antes do commit não cria receipt, auditoria nem outbox;
- replay lê o alvo atual e não duplica efeitos;
- migration em banco vazio e em banco com dados representativos, com rollback pré-ativação;
- contrato OpenAPI dos packets de aplicação com key e versões obrigatórias [OPENAPI];
- testes arquiteturais de monólito modular, ausência de ciclos, ownership explícito, adapter de persistência e presença deste ADR;
- review independente sem P0/P1 aberto conforme [OAI-REVIEW].

## Como verificar

1. Confirmar que todos os cinco nomes aparecem exatamente uma vez no contrato de command names e no check da migration.
2. Confirmar que não existe import de receipt de override/Inventory pelo domínio COMEX.
3. Confirmar que nenhum dos cinco writers usa `upsert` ou `save` legado.
4. Executar os testes unitários, PostgreSQL, concorrência, arquitetura, Prisma validate e typecheck registrados pelo packet.
5. Confirmar que `docs/traceability/PR-COMEX-01-S03.md` liga P1-D02–D05 a código, testes e evidências antes do merge.

## Fontes

- `docs/governance/DECISION_PRECEDENCE.md` [PROJECT-PRECEDENCE]
- `docs/blueprint-master/01_BLUEPRINT_MASTER_ARCHITECTURE.md` [PROJECT-ARCH]
- `docs/adr/ADR-0001-comex-order-foundation-boundaries.md`
- `docs/requirements/pr-programs/COMEX/PR-COMEX-01/00_CONTROLLER.md`
- `docs/requirements/pr-programs/COMEX/PR-COMEX-01/PR-COMEX-01-S03.md`
- `docs/agents/SOURCE_BASIS.md` [OAI-AGENTS] [OAI-SUBAGENTS] [OAI-REVIEW] [NIST-SSDF]
- plano aprovado P1-D02, P1-D03, P1-D04 e P1-D05 e memo HO-PR-COMEX-01-S03-014
