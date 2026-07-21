# SM-SALES-01 — Preço, catálogo e margem

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Comercial
**PR lógico:** `PR-SALES-01`

## Resultado esperado

Entregar preço, catálogo e margem de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter catálogo comercial de produtos e serviços.
2. Consultar estoque, custo e disponibilidade em tempo real.
3. Calcular preço em ARS ou USD a partir de custo, câmbio e margem.
4. Exibir margem em valor, percentual sobre preço líquido e percentual sobre custo.
5. Simular cenários de câmbio, desconto, frete, financiamento e comissão.
6. Preservar a base de custo usada em cada cálculo.
7. Controlar vigência e histórico de parâmetros de preço.
8. Permitir cálculo rápido por item e em lote.

## Layout principal aprovado

**Padrão:** Workbench de cálculo.

**Composição:** parâmetros à esquerda, memória de cálculo no centro e impacto/simulações à direita.

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
- Controller e 10 slices: `docs/requirements/pr-programs/SALES/PR-SALES-01/`
