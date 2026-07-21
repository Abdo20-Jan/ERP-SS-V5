# SM-QA-03 — Release, cutover e rollback

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Testes, migração e implantação
**PR lógico:** `PR-QA-03`

## Resultado esperado

Entregar release, cutover e rollback de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter catálogo de releases, escopo, dependências e feature flags.
2. Planejar cutover com tarefas, responsáveis, horário e evidências.
3. Executar ensaios de implantação e rollback.
4. Controlar migrations, compatibilidade e ordem de deploy.
5. Congelar dados e operações quando necessário.
6. Validar smoke tests após deploy.
7. Aplicar matriz de decisão para rollback.
8. Registrar aprovação, resultado e lições aprendidas.

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
- Controller e 10 slices: `docs/requirements/pr-programs/QA/PR-QA-03/`
