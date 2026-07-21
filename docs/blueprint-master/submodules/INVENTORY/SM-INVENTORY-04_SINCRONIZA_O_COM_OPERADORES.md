# SM-INVENTORY-04 — Sincronização com operadores

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Estoque
**PR lógico:** `PR-INVENTORY-04`

## Resultado esperado

Entregar sincronização com operadores de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Receber posição e movimentos por API ou Excel por depósito.
2. Importar snapshot semanal às sextas-feiras às 15:30.
3. Validar layout, duplicidade, SKU, quantidades e data do movimento.
4. Manter resumo semanal e detalhe por posição, despacho e contêiner.
5. Comparar ERP versus arquivo do operador.
6. Conservar a sugestão automática e permitir revisão manual.
7. Enfileirar arquivos inválidos e devolver erros por linha.
8. Controlar último arquivo válido, origem e histórico de reprocessamento.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/INVENTORY/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/INVENTORY/`
- Controller e 10 slices: `docs/requirements/pr-programs/INVENTORY/PR-INVENTORY-04/`
