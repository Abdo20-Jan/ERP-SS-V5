# SM-COMP-01 — Qualidade e certificações

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Módulos complementares
**PR lógico:** `PR-COMP-01`

## Resultado esperado

Entregar qualidade e certificações de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter certificados por produto, número, organismo, país e vigência.
2. Associar certificação ao SKU e despacho.
3. Registrar inspeções, resultados, evidências e não conformidades.
4. Bloquear ou alertar produto sem condição de qualidade conforme regra.
5. Gerar QR por SKU + despacho e PDF com dados do produto.
6. Controlar vencimentos e renovação de certificados.
7. Manter histórico sem apagar certificado anterior.
8. Emitir relatórios de conformidade por SKU, lote e fornecedor.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/COMP/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/COMP/`
- Controller e 10 slices: `docs/requirements/pr-programs/COMP/PR-COMP-01/`
