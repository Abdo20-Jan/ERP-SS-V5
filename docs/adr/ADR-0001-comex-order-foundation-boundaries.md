# ADR-0001 — Fronteiras e publicação confiável da fundação COMEX

- **Status:** ACCEPTED
- **Data:** 2026-07-22
- **Autores:** architecture
- **Aprovação:** autorização explícita do proprietário para executar o necessário e liberar continuidade em 2026-07-22
- **Requisitos afetados:** PR-COMEX-01-Q0001–Q0150; P0 de arquitetura, auditoria, idempotência e D-007
- **PR/slice:** PR-COMEX-01-S01, S02 e S03 — remediation gate

## Contexto

A primeira implementação de PR-COMEX-01 T1 criou domínio, API e schema, mas deixou adapters sem binding, eventos descartados, escopo organizacional implícito, persistência decimal por Number e concorrência sem compare-and-swap. COMEX-02 depende de um pedido internacional confiável e não pode depender diretamente das tabelas internas de COMEX-01.

## Decisão

1. Preservar o monólito modular aprovado em [PROJECT-ARCH].
2. COMEX é owner de international_orders, international_order_lines, proforma_versions, international_order_alerts, international_order_state_transitions e comex_event_outbox.
3. Controllers dependem de application services; application services dependem de ports do domínio; somente adapters Prisma acessam persistência COMEX.
4. Cada mutação crítica persiste agregado, timeline, auditoria e outbox na mesma transação.
5. Identidade técnica e código humano permanecem separados. Código PI-NNNNNN é alocado dentro da transação e gaps são tolerados.
6. Valores monetários e quantidades cruzam contratos como strings decimais e chegam ao Prisma como Decimal, nunca como float binário.
7. Organização é obtida de contexto autenticado server-side. A baseline atual é single-organization org_001; parâmetros de organização enviados pelo cliente não concedem escopo.
8. COMEX-02 consome contratos versionados ou query ports de COMEX-01 e não suas tabelas.
9. OverrideRequest permanece temporariamente no namespace Inventory por compatibilidade, mas seu dado é tratado como kernel compartilhado. A movimentação física para Platform será expand-contract em slice próprio; não haverá segunda implementação.
10. Escritas COMEX são somente online até existir SQLite, outbox local, deduplicação e revisão de conflito aprovados.
11. A outbox é persistida agora. Publicação externa só poderá marcar PUBLISHED após adapter real e teste de contrato; nenhum adapter noop será apresentado como integração concluída.

## Alternativas consideradas

- Aceitar o desenho atual: rejeitado por falha operacional, perda de eventos e ausência de ownership explícito.
- Extrair microserviço COMEX: rejeitado por contrariar o monólito modular e aumentar operação sem caso aprovado.
- Criar outbox genérica e migrar Inventory no mesmo diff: rejeitado por big bang e lock concorrente entre domínios.
- Manter outbox COMEX domain-owned com port compartilhável: selecionado por coesão e reversibilidade.

## Diagrama de contexto

```text
Web/Desktop -> REST/OpenAPI v1 -> API modular
                                  |
                                  +-> COMEX application/domain
                                  +-> IAM/Audit/Override kernel
                                  +-> PostgreSQL
                                         |
                                         +-> COMEX outbox -> Worker -> adapters futuros
```

## Diagrama de componentes

```text
Controller + guards
        |
Application Service
        |
InternationalOrder aggregate
        | ports
        +-- InternationalOrderRepository
        +-- ProformaVersionRepository
        +-- OrderAlertRepository
        +-- ComexOutboxRepository
                 |
          Prisma transaction
```

## Dependency map

```text
COMEX-02 -> COMEX-01 public contracts/query ports
API COMEX -> Domain COMEX
Prisma adapters -> Domain ports + PostgreSQL
Worker -> Outbox port + external publisher port
COMEX -> shared OverrideRequest contract
COMEX -X-> Inventory application services/tables directly
```

## Expand-contract e rollback

1. Expandir schema somente com colunas/índices compatíveis.
2. Fazer código novo aceitar registros antigos sem hash/código corrigido.
3. Corrigir/backfill em job separado caso dados representativos existam.
4. Validar constraints antes de torná-las obrigatórias.
5. Ativar writer transacional e monitorar PENDING/FAILED.
6. Contrair campos ou índices antigos apenas em PR posterior.

Rollback funcional desativa endpoints/writer novos e preserva dados. Não executar down.sql destrutivo após dados reais.

## Workflows arquiteturais

| Workflow | Happy path | Exceção/compensação | Teste, auditoria e métrica |
|---|---|---|---|
| avaliar mudança | requisito -> fontes -> impacto -> decisão | conflito vira ADR e bloqueio local | teste de precedência; ADR auditável; tempo de decisão |
| mapear dependências | owner -> consumers -> contratos | ciclo bloqueia entrega | teste de grafo; registro do ciclo; quantidade de ciclos zero |
| propor alternativas | mínimo de duas opções comparadas | falta de regra impede seleção | revisão do ADR; alternativas registradas; reversibilidade |
| selecionar decisão | opção compatível é aceita | P0/P1 aberto mantém BLOCKED | review independente; autor/data; risco residual |
| planejar transição | expand -> compatibilidade -> contract | falha retorna para versão anterior sem drop | teste de migration/rollback; logs; duração e locks |
| validar acoplamento | imports seguem dependency map | acesso direto a tabela alheia falha CI | teste arquitetural; achado auditado; ciclos zero |
| registrar ADR | contexto, decisão e rollback versionados | decisão pendente permanece PROPOSED | validator documental; commit; ADRs ausentes zero |

## Evidências e testes exigidos

- boot do ComexModule com todos os ports resolvidos;
- teste estático de monólito modular, ausência de ciclos, ownership, adapters e ADR para mudança transversal;
- integração PostgreSQL de transação, CAS, idempotência, decimal e outbox;
- contratos HTTP/evento compatíveis com OpenAPI 3.1.1 [OPENAPI];
- BOLA positivo e negativo;
- revisão independente sem P0/P1.

## Fontes consultadas

- docs/governance/DECISION_PRECEDENCE.md
- docs/blueprint-master/01_BLUEPRINT_MASTER_ARCHITECTURE.md [PROJECT-ARCH]
- docs/blueprint-master/submodules/COMEX/SM-COMEX-01_PEDIDO_INTERNACIONAL_E_PRODU_O.md
- docs/catalog/SUNSET_ERP_CATALOGO_COMPLETO_MODULOS_SUBMODULOS_FUNCOES_v1.0.md
- docs/requirements/pr-programs/COMEX/PR-COMEX-01/00_CONTROLLER.md e S01–S03
- docs/agents/SOURCE_BASIS.md [OAI-SUBAGENTS] [NIST-SSDF] [OPENAPI]
