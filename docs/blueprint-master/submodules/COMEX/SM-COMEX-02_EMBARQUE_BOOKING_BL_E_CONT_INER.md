# SM-COMEX-02 — Embarque, booking, BL e contêiner

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** COMEX
**PR lógico:** `PR-COMEX-02`

## Resultado esperado

Entregar embarque, booking, bl e contêiner de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Comparar opções de frete e registrar a escolha do booking.
2. Criar um ou vários embarques a partir do mesmo pedido internacional.
3. Controlar contêineres, tipos, lacres, volumes, peso, cubagem e linhas transportadas.
4. Registrar ETD, ETA, porto de origem, transbordos, porto de destino e transportador.
5. Gerenciar BL master/house e suas versões.
6. Conferir commercial invoice, packing list, BL e saldos embarcados.
7. Tratar embarques parciais, alteração de navio, rollover, atraso e cancelamento.
8. Emitir alertas de chegada, free time, documentos faltantes e divergências.

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
- Controller e 10 slices: `docs/requirements/pr-programs/COMEX/PR-COMEX-02/`
