# SM-QA-04 — Carga, segurança, offline e DR

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Testes, migração e implantação
**PR lógico:** `PR-QA-04`

## Resultado esperado

Entregar carga, segurança, offline e dr de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Executar testes de carga, volume, concorrência e endurance.
2. Medir latência, throughput, filas e uso de recursos.
3. Testar autenticação, autorização, segredos e vulnerabilidades.
4. Testar desktop offline, sincronização e conflitos.
5. Testar indisponibilidade de integrações externas.
6. Executar backup, restore e disaster recovery.
7. Validar RTO, RPO e operação de contingência.
8. Gerar relatório de capacidade e riscos.

## Layout principal aprovado

**Padrão:** Object Page com timeline.

**Composição:** cabeçalho de status, ações contextuais, abas, checklist e histórico cronológico.

### Elementos obrigatórios

- cabeçalho com identificação, status, responsável, prazo e ações contextuais;
- área principal densa, com informações essenciais sem rolagem excessiva;
- painel de exceções e próxima ação;
- documentos e evidências no mesmo contexto;
- timeline e auditoria;
- estados loading, vazio, erro, offline, conflito e sucesso;
- atalhos de teclado e ações em lote quando houver repetição.

## Workflow e estados

- Estados e transições serão implementados como máquina de estados explícita.
- Transições críticas exigem permissão, idempotência, motivo/evidência quando aplicável e evento de auditoria.
- Cancelamentos e reaberturas não apagam histórico.
- Exceções admitidas pela baseline usam override auditado; invariantes técnicas não podem ser ultrapassadas.

## Dados e contratos

- IDs imutáveis; códigos humanos separados do identificador técnico.
- Vigência e versão para regras e cadastros críticos.
- Valores monetários em decimal, preservando moeda original e taxa usada.
- APIs e eventos versionados; comandos críticos com idempotency key.
- Integrações assíncronas usam outbox/inbox, retry e dead-letter.

## Segurança e auditoria

- RBAC por ação e escopo.
- Dupla aprovação quando classificado como crítico.
- Auditoria append-only com antes/depois, usuário, dispositivo, data e correlação.
- Dados sensíveis mascarados conforme perfil.

## Testes mínimos

- happy path e principais exceções;
- permissões, aprovação e override;
- concorrência e idempotência;
- precisão de cálculo quando aplicável;
- offline/sincronização quando aplicável;
- acessibilidade e navegação por teclado;
- reconciliação com módulos integrados.

## Fonte detalhada aceita

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/QA/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/QA/`
- Controller e 10 slices: `docs/requirements/pr-programs/QA/PR-QA-04/`
