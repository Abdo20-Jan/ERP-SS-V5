# SM-INVENTORY-03 — Reserva, alocação e FIFO

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Estoque
**PR lógico:** `PR-INVENTORY-03`

## Resultado esperado

Entregar reserva, alocação e fifo de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Reservar estoque somente após confirmação do pedido, não no orçamento.
2. Alocar por camada FIFO a partir da disponibilidade para venda.
3. Permitir reserva e entrega parciais.
4. Liberar, substituir ou cancelar reserva com histórico.
5. Priorizar depósito, despacho ou camada por regra configurável.
6. Tratar concorrência de dois pedidos disputando o mesmo saldo.
7. Exibir disponibilidade antes e depois da reserva.
8. Gerar eventos para comercial, logística, custo e contabilidade.

## Layout principal aprovado

**Padrão:** Wizard com revisão final.

**Composição:** passos curtos, validação inline, salvamento de rascunho e resumo antes da confirmação.

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
- Controller e 10 slices: `docs/requirements/pr-programs/INVENTORY/PR-INVENTORY-03/`
