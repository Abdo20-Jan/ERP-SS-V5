# SM-QA-01 — Arquitetura de testes e quality gates

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Testes, migração e implantação
**PR lógico:** `PR-QA-01`

## Resultado esperado

Entregar arquitetura de testes e quality gates de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Definir pirâmide de testes: unitário, integração, contrato, E2E e UAT.
2. Manter casos, dados, suites, execuções e evidências.
3. Criar quality gates de lint, typecheck, testes e segurança no CI.
4. Testar precisão decimal, arredondamento, idempotência e concorrência.
5. Testar permissões, auditoria, estados, reversões e acessibilidade.
6. Triar defeitos por severidade, prioridade e módulo.
7. Bloquear merge/release com falha crítica.
8. Gerar relatório de cobertura e risco residual.

## Layout principal aprovado

**Padrão:** Document Workbench.

**Composição:** visualização lado a lado do documento original, dados extraídos, divergências e ações de revisão.

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
- Controller e 10 slices: `docs/requirements/pr-programs/QA/PR-QA-01/`
