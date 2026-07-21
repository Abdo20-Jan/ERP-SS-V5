# SM-SALES-05 — Entrega, devolução e comissão

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Comercial
**PR lógico:** `PR-SALES-05`

## Resultado esperado

Entregar entrega, devolução e comissão de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Planejar retirada pelo cliente ou entrega por transportadora.
2. Emitir remito e coordenar depósito, transporte, data e endereço.
3. Confirmar saída e entrega com remito assinado.
4. Controlar entrega parcial, falha, reentrega, seguro e custo de frete.
5. Registrar devolução por item, quantidade, motivo e condição.
6. Gerar nota de crédito/débito e retorno ao estoque quando aprovado.
7. Gerar comissão somente após quitação integral, salvo autorização financeira.
8. Manter comissão paga mesmo após evento posterior, conforme política aprovada.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/SALES/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/SALES/`
- Controller e 10 slices: `docs/requirements/pr-programs/SALES/PR-SALES-05/`
