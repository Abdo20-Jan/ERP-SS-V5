---
id: PR-COMEX-01-S06
parent_pr: PR-COMEX-01
module: COMEX
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/COMEX/PR-COMEX-01_PEDIDO_INTERNACIONAL_E_PRODUCAO_500_PERGUNTAS.md
---

# PR-COMEX-01-S06 — Pedido internacional e produção

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-COMEX-01-Q0251 a PR-COMEX-01-Q0300)

### PR-COMEX-01-Q0251 — Escopo do pr

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0252 — Arquitetura e componentes

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0253 — Modelo de dados e migration

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0254 — Api, eventos e erros

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0255 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0256 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0257 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0258 — Testes e evidências

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0259 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0260 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **pedido internacional**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **tarefas, SLA e filas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0261 — Escopo do pr

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0262 — Arquitetura e componentes

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0263 — Modelo de dados e migration

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0264 — Api, eventos e erros

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0265 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0266 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0267 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0268 — Testes e evidências

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0269 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0270 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **pedido internacional**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **comentários e colaboração** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0271 — Escopo do pr

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0272 — Arquitetura e componentes

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0273 — Modelo de dados e migration

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0274 — Api, eventos e erros

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0275 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0276 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0277 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0278 — Testes e evidências

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0279 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0280 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **pedido internacional**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **timeline e histórico** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0281 — Escopo do pr

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0282 — Arquitetura e componentes

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0283 — Modelo de dados e migration

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0284 — Api, eventos e erros

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0285 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0286 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0287 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0288 — Testes e evidências

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0289 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0290 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **pedido internacional**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **auditoria** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0291 — Escopo do pr

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0292 — Arquitetura e componentes

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0293 — Modelo de dados e migration

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0294 — Api, eventos e erros

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0295 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0296 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0297 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0298 — Testes e evidências

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0299 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-01-Q0300 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Pedido internacional e produção** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **pedido internacional**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **permissões** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-COMEX-01-S06.md`;
- nenhum segredo, credencial ou dado real no repositório.
