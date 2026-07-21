# SM-LANDED-01 — Catálogo de componentes e elegibilidade

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Landed cost
**PR lógico:** `PR-LANDED-01`

## Resultado esperado

Entregar catálogo de componentes e elegibilidade de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter catálogo versionado de componentes de custo e sua natureza.
2. Classificar cada componente como elegível ou não para custo contábil, gerencial e cash-out.
3. Separar valores líquidos, IVA, percepções, retenções e créditos recuperáveis.
4. Definir vigência, moeda, fornecedor, centro de custo e regra padrão de rateio.
5. Distinguir frete, seguro, porto, despachante, linha marítima, operador, transporte e direitos aduaneiros.
6. Permitir ativação, desativação e nova versão sem apagar o histórico.
7. Validar combinação de componente, documento, regime e base de custo.
8. Expor o catálogo para compras, COMEX, fiscal, contabilidade e relatórios.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/LANDED/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/LANDED/`
- Controller e 10 slices: `docs/requirements/pr-programs/LANDED/PR-LANDED-01/`
