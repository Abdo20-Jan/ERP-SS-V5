---
id: PR-COMEX-02-S05
parent_pr: PR-COMEX-02
module: COMEX
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/COMEX/PR-COMEX-02_EMBARQUE_BOOKING_BL_E_CONTEINER_500_PERGUNTAS.md
---

# PR-COMEX-02-S05 — Embarque, booking, BL e contêiner

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-COMEX-02-Q0201 a PR-COMEX-02-Q0250)

### PR-COMEX-02-Q0201 — Escopo do pr

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0202 — Arquitetura e componentes

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0203 — Modelo de dados e migration

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0204 — Api, eventos e erros

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0205 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0206 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0207 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0208 — Testes e evidências

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0209 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0210 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **página de detalhe** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **embarque**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **página de detalhe** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0211 — Escopo do pr

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0212 — Arquitetura e componentes

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0213 — Modelo de dados e migration

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0214 — Api, eventos e erros

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0215 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0216 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0217 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0218 — Testes e evidências

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0219 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0220 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **criação e edição** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **embarque**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **criação e edição** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **UX/tempo:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0221 — Escopo do pr

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0222 — Arquitetura e componentes

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0223 — Modelo de dados e migration

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0224 — Api, eventos e erros

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0225 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0226 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0227 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0228 — Testes e evidências

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0229 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0230 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **ações em lote** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **embarque**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **ações em lote** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0231 — Escopo do pr

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0232 — Arquitetura e componentes

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0233 — Modelo de dados e migration

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0234 — Api, eventos e erros

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0235 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0236 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0237 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0238 — Testes e evidências

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0239 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0240 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **atalhos e teclado** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **embarque**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **atalhos e teclado** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0241 — Escopo do pr

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0242 — Arquitetura e componentes

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0243 — Modelo de dados e migration

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0244 — Api, eventos e erros

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0245 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0246 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0247 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0248 — Testes e evidências

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0249 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-02-Q0250 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **notificações** deve ser definido no PR **Embarque, booking, BL e contêiner** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **embarque**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **notificações** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-COMEX-02-S05.md`;
- nenhum segredo, credencial ou dado real no repositório.
