# SM-ACCOUNTING-04 — Livros, períodos e controles

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Contábil — fundação
**PR lógico:** `PR-ACCOUNTING-04`

## Resultado esperado

Entregar livros, períodos e controles de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter livros, diários e sequências de lançamento.
2. Criar períodos diário, semanal, mensal, semestral, anual e fiscal.
3. Abrir, fechar, bloquear e reabrir períodos com permissão.
4. Controlar cutoff por data operacional, fiscal e contábil.
5. Bloquear postagem comum em período fechado.
6. Permitir ajuste autorizado em período especial.
7. Manter numeração, integridade, logs e evidências.
8. Gerar painel de lançamentos pendentes, rejeitados e não contabilizados.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/ACCOUNTING/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/ACCOUNTING/`
- Controller e 10 slices: `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-04/`
