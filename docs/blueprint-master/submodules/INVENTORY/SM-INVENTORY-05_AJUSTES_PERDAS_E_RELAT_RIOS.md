# SM-INVENTORY-05 — Ajustes, perdas e relatórios

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Estoque
**PR lógico:** `PR-INVENTORY-05`

## Resultado esperado

Entregar ajustes, perdas e relatórios de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Abrir ocorrência para qualquer divergência, com tolerância zero.
2. Executar recontagem e investigação antes do ajuste.
3. Registrar perda, sobra, avaria ou erro de posição.
4. Exigir aprovação conforme campo e criticidade.
5. Criar conta a cobrar do operador quando a perda for confirmada.
6. Preservar saldo anterior e movimento compensatório.
7. Gerar relatórios de saldo, giro, aging, divergência e perdas.
8. Permitir drill-down até remito, arquivo, usuário e evidência.

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
- Controller e 10 slices: `docs/requirements/pr-programs/INVENTORY/PR-INVENTORY-05/`
