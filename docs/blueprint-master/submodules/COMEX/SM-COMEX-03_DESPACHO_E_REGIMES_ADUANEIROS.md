# SM-COMEX-03 — Despacho e regimes aduaneiros

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** COMEX
**PR lógico:** `PR-COMEX-03`

## Resultado esperado

Entregar despacho e regimes aduaneiros de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Abrir e controlar despacho aduaneiro por embarque, contêiner e mercadoria.
2. Selecionar e manter separados os regimes de importação definitiva, trânsito, ZPA e Zona Franca.
3. Registrar NCM/posição tarifária, origem, valor aduaneiro e dados do despacho.
4. Controlar canal aduaneiro, exigências, verificações, bloqueios, garantias e liberações.
5. Registrar direitos de importação, taxa estatística, arancel SIM e demais conceitos aduaneiros.
6. Vincular despachante, aduana, terminal, depósito fiscal e documentos apresentados.
7. Manter histórico de retificações e eventos sem sobrescrever o despacho original.
8. Gerar eventos fiscais, contábeis, de landed cost e de entrada em estoque.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/COMEX/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/COMEX/`
- Controller e 10 slices: `docs/requirements/pr-programs/COMEX/PR-COMEX-03/`
