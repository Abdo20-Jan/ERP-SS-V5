# SM-LANDED-02 — Pools provisórios e documentos

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Landed cost
**PR lógico:** `PR-LANDED-02`

## Resultado esperado

Entregar pools provisórios e documentos de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Criar pool de custo por importação, despacho, contêiner ou agrupamento configurado.
2. Incorporar estimativas, provisões, faturas e documentos aduaneiros.
3. Controlar valores estimados, confirmados, cancelados e pendentes.
4. Converter moedas pela taxa do evento e preservar moeda original e taxa utilizada.
5. Evitar duplicidade de fatura ou componente dentro do pool.
6. Exibir documentos faltantes e diferenças entre estimativa e valor real.
7. Submeter o pool para revisão e aprovação.
8. Versionar o pool sem apagar o cálculo anterior.

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
- Controller e 10 slices: `docs/requirements/pr-programs/LANDED/PR-LANDED-02/`
