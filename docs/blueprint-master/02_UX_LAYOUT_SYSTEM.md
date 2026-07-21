# Sistema de experiência e layouts aprovados

## Objetivo

Reduzir tempo de operação, cliques, trocas de tela e erros. O ERP será desktop-first, denso e orientado a teclado, sem sacrificar acessibilidade e responsividade.

## Shell global

- Navegação lateral recolhível por módulo.
- Busca global com atalho.
- Command palette para ações frequentes.
- Centro de tarefas, aprovações, alertas e sincronização.
- Favoritos, recentes e visões salvas por usuário.
- Indicador permanente de ambiente, conexão e estado offline.

## Padrões de página

1. **Cockpit:** KPIs acionáveis, exceções e prazos.
2. **List Report:** filtros, tabela densa, colunas configuráveis e ações em lote.
3. **Worklist:** fila pessoal priorizada, próxima ação e SLA.
4. **Object Page:** cabeçalho de estado, resumo, ações, abas e timeline.
5. **Wizard:** tarefas longas com rascunho, validação inline e revisão final.
6. **Workbench de cálculo:** parâmetros, memória, comparação e impacto.
7. **Document Workbench:** original, extração, divergências e revisão lado a lado.
8. **Relatório hierárquico:** agrupamento, expansão, comparativos e drill-down.

## Regras UX obrigatórias

- Uma ação primária clara por contexto.
- Ações perigosas separadas e com revisão.
- Autosave para rascunhos, não para postagens irreversíveis.
- Validação próxima ao campo e resumo de erros no topo.
- Estados vazio, loading, erro, offline, conflito e sucesso em todas as telas.
- Operações repetitivas aceitam teclado, paste de tabela, importação e bulk actions.
- Filtros e preferências persistem por usuário.
- Nenhuma exceção deve exigir navegar por várias páginas para descobrir a causa.
- Timeline e auditoria acessíveis no mesmo objeto.
- WCAG 2.2 AA como baseline.
