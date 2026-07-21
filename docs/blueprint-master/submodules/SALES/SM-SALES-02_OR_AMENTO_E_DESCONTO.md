# SM-SALES-02 — Orçamento e desconto

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Comercial
**PR lógico:** `PR-SALES-02`

## Resultado esperado

Entregar orçamento e desconto de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Criar orçamento a partir de cliente, lead, oportunidade ou contato direto.
2. Adicionar itens, quantidades, serviços, frete e condições.
3. Enviar orçamento por e-mail, portal ou PDF.
4. Controlar versões, validade, aceite e motivo de perda.
5. Aplicar desconto por item ou total.
6. Acionar aprovação conforme regra, valor ou margem.
7. Exibir impacto do desconto na margem antes de confirmar.
8. Garantir que orçamento não reserve estoque.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/SALES/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/SALES/`
- Controller e 10 slices: `docs/requirements/pr-programs/SALES/PR-SALES-02/`
