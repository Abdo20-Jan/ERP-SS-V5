# SM-ACCOUNTING-03 — Moedas e diferenças cambiais

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`
**Módulo:** Contábil — fundação
**PR lógico:** `PR-ACCOUNTING-03`

## Resultado esperado

Entregar moedas e diferenças cambiais de forma integrada, auditável, idempotente e otimizada para operação diária.

## Funções aprovadas

1. Manter ARS como moeda funcional e USD como moeda de apresentação.
2. Registrar moeda original, taxa, fonte, data e valor funcional em cada evento.
3. Usar câmbio master para demonstrações em USD.
4. Calcular diferença cambial realizada na liquidação.
5. Calcular diferença cambial não realizada em reavaliações.
6. Tratar contas bancárias, fornecedores e clientes em USD.
7. Preservar dívida original em USD mesmo quando paga em ARS.
8. Gerar memória de cálculo e lançamentos de ajuste/reversão.

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

- 500 decisões do submódulo: `docs/blueprint-accepted/.../05-corpus-71500/02-submodulos/ACCOUNTING/`
- 500 decisões do PR: `docs/blueprint-accepted/.../05-corpus-71500/03-prs/ACCOUNTING/`
- Controller e 10 slices: `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-03/`
