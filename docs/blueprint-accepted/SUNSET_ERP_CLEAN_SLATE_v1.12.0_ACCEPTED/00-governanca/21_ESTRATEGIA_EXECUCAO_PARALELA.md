---
id: EXEC-ALL-WORKSTREAMS
status: ACTIVE
version: 1.10.0
priority: P0
---

# Estratégia de execução acelerada — todos os módulos

## Regra central

Todos os módulos entram em execução imediatamente, mas não serão implementados como treze sistemas isolados. O desenvolvimento será paralelo, orientado por contratos compartilhados de dados, eventos, permissões, documentos e contabilização.

## Trilhas simultâneas

### Trilha 0 — plataforma e contratos compartilhados

Começa primeiro e não para:

- monorepo, CI/CD e ambientes;
- autenticação, RBAC, auditoria e parâmetros;
- Party Master, SKU, depósitos, moedas, câmbio e documentos;
- outbox/inbox, filas, notificações e sincronização offline;
- ledger de eventos e contrato de lançamentos contábeis;
- observabilidade, backups e feature flags.

### Trilha 1 — importação e formação de custo

- COMEX;
- landed cost;
- fiscal de importação;
- contabilidade de importação e estoque.

### Trilha 2 — estoque e dinheiro

- estoque/WMS;
- tesouraria;
- conciliação bancária;
- contas a pagar e receber.

### Trilha 3 — receita e relacionamento

- comercial;
- compras nacionais;
- CRM;
- comissões, crédito e entrega.

### Trilha 4 — fechamento e extensões

- fechamento contábil transversal;
- módulos complementares;
- BI operacional e executivo;
- migração, UAT, cutover e go-live.

## Regra de dependência

Uma equipe pode desenvolver telas e serviços de um módulo antes de outro estar concluído, desde que use contratos versionados e mocks. A integração definitiva ocorre quando o provedor do contrato estiver homologado.

## Definição de liberação por módulo

Um módulo pode entrar em homologação quando tiver:

1. entidades e migrations;
2. estados e transições;
3. comandos, consultas e permissões;
4. telas essenciais;
5. eventos e integrações;
6. contabilização ou contrato contábil aplicável;
7. auditoria;
8. testes unitários, integração e E2E críticos;
9. documentação OpenAPI e runbook;
10. feature flag e rollback.

## O que não será feito

- microserviços prematuros;
- duplicação de clientes, SKUs, documentos ou saldos;
- regras fiscais ou contábeis codificadas sem vigência;
- lançamento direto no banco fora dos serviços de domínio;
- emissão fiscal definitiva offline;
- exclusão destrutiva de histórico;
- aprovação implícita sem trilha de auditoria.
