# SM-ACCOUNTING-01 — Plano de contas e dimensões

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Contábil — fundação
**PR lógico:** `PR-ACCOUNTING-01`

## Resultado esperado

Entregar plano de contas e dimensões de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter plano de contas hierárquico, códigos, natureza e grupos.
2. Criar contas sintéticas e analíticas com vigência e status.
3. Manter centros de custo, centros de resultado e dimensões combináveis.
4. Validar combinações obrigatórias ou proibidas por conta e evento.
5. Mapear contas para balanço, DRE e demais demonstrações.
6. Importar, revisar e versionar estrutura contábil.
7. Desativar conta sem apagar lançamentos históricos.
8. Controlar responsáveis, aprovações e trilha de alteração.

## Layout principal aprovado

**Padrão:** Relatório hierárquico com drill-down.

**Composição:** árvore contábil, colunas comparativas e abertura até lançamento/documento de origem.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/ACCOUNTING/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/ACCOUNTING/`
- Controller e 10 slices: `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-01/`
