---
id: M-PURCHASING
level: MODULE
title: Módulo — Compras
status: ACCEPTED
version: 2.0.0
questions: 500
accepted_at: 2026-07-17
acceptance: ALL_SUGGESTIONS_ACCEPTED
---

# Módulo — Compras — 500 perguntas

**Módulo:** Compras
**Objeto central:** requisição e pedido de compra
**Atores principais:** solicitante, chefe do setor, compras, financeiro e fornecedor
**Estados de referência:** rascunho, solicitado, em cotação, aprovado, pedido, recebido, faturado, pago e encerrado
**Documentos de referência:** requisição, cotação, pedido, fatura, comprovante de recebimento e contrato

> Todas as sugestões deste arquivo foram aceitas em 2026-07-17. Em caso de conflito, aplique `docs/governance/DECISION_PRECEDENCE.md`; nenhuma implementação pode escolher silenciosamente entre requisitos incompatíveis.

## OBJ — Objetivo e resultado esperado

### M-PURCHASING-Q0001 — Escopo estratégico

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0002 — Ownership e governança

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0003 — Fluxo ponta a ponta

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0004 — Dados e fonte da verdade

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0005 — Regra e parametrização

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0006 — Layout e experiência

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0007 — Automação e tempo

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0008 — Controle, risco e auditoria

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0009 — Métrica e observabilidade

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0010 — Aceite e evolução

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SCOPE — Limites de escopo e exclusões

### M-PURCHASING-Q0011 — Escopo estratégico

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0012 — Ownership e governança

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0013 — Fluxo ponta a ponta

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0014 — Dados e fonte da verdade

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0015 — Regra e parametrização

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0016 — Layout e experiência

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0017 — Automação e tempo

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0018 — Controle, risco e auditoria

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0019 — Métrica e observabilidade

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0020 — Aceite e evolução

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ACTOR — Atores e responsabilidades

### M-PURCHASING-Q0021 — Escopo estratégico

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0022 — Ownership e governança

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0023 — Fluxo ponta a ponta

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0024 — Dados e fonte da verdade

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0025 — Regra e parametrização

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0026 — Layout e experiência

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0027 — Automação e tempo

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0028 — Controle, risco e auditoria

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0029 — Métrica e observabilidade

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0030 — Aceite e evolução

**Pergunta:** Como **atores e responsabilidades** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## MDM — Dados mestres utilizados

### M-PURCHASING-Q0031 — Escopo estratégico

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0032 — Ownership e governança

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0033 — Fluxo ponta a ponta

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0034 — Dados e fonte da verdade

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0035 — Regra e parametrização

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0036 — Layout e experiência

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0037 — Automação e tempo

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0038 — Controle, risco e auditoria

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0039 — Métrica e observabilidade

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0040 — Aceite e evolução

**Pergunta:** Como **dados mestres utilizados** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## HDR — Dados de cabeçalho

### M-PURCHASING-Q0041 — Escopo estratégico

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0042 — Ownership e governança

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0043 — Fluxo ponta a ponta

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0044 — Dados e fonte da verdade

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0045 — Regra e parametrização

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0046 — Layout e experiência

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0047 — Automação e tempo

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0048 — Controle, risco e auditoria

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0049 — Métrica e observabilidade

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0050 — Aceite e evolução

**Pergunta:** Como **dados de cabeçalho** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## LINE — Linhas e detalhamento

### M-PURCHASING-Q0051 — Escopo estratégico

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0052 — Ownership e governança

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0053 — Fluxo ponta a ponta

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0054 — Dados e fonte da verdade

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0055 — Regra e parametrização

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0056 — Layout e experiência

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0057 — Automação e tempo

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0058 — Controle, risco e auditoria

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0059 — Métrica e observabilidade

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0060 — Aceite e evolução

**Pergunta:** Como **linhas e detalhamento** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## STATE — Estados do ciclo de vida

### M-PURCHASING-Q0061 — Escopo estratégico

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0062 — Ownership e governança

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0063 — Fluxo ponta a ponta

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0064 — Dados e fonte da verdade

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0065 — Regra e parametrização

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0066 — Layout e experiência

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0067 — Automação e tempo

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0068 — Controle, risco e auditoria

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0069 — Métrica e observabilidade

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0070 — Aceite e evolução

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TRANS — Transições e próxima ação

### M-PURCHASING-Q0071 — Escopo estratégico

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0072 — Ownership e governança

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0073 — Fluxo ponta a ponta

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0074 — Dados e fonte da verdade

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0075 — Regra e parametrização

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0076 — Layout e experiência

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0077 — Automação e tempo

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0078 — Controle, risco e auditoria

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0079 — Métrica e observabilidade

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0080 — Aceite e evolução

**Pergunta:** Como **transições e próxima ação** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TRIG — Gatilhos e eventos

### M-PURCHASING-Q0081 — Escopo estratégico

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0082 — Ownership e governança

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0083 — Fluxo ponta a ponta

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0084 — Dados e fonte da verdade

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0085 — Regra e parametrização

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0086 — Layout e experiência

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0087 — Automação e tempo

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0088 — Controle, risco e auditoria

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0089 — Métrica e observabilidade

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0090 — Aceite e evolução

**Pergunta:** Como **gatilhos e eventos** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## APPR — Aprovações e alçadas

### M-PURCHASING-Q0091 — Escopo estratégico

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0092 — Ownership e governança

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0093 — Fluxo ponta a ponta

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0094 — Dados e fonte da verdade

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0095 — Regra e parametrização

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0096 — Layout e experiência

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0097 — Automação e tempo

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0098 — Controle, risco e auditoria

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0099 — Métrica e observabilidade

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0100 — Aceite e evolução

**Pergunta:** Como **aprovações e alçadas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OVR — Override do master

### M-PURCHASING-Q0101 — Escopo estratégico

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0102 — Ownership e governança

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0103 — Fluxo ponta a ponta

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0104 — Dados e fonte da verdade

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0105 — Regra e parametrização

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0106 — Layout e experiência

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0107 — Automação e tempo

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0108 — Controle, risco e auditoria

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0109 — Métrica e observabilidade

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0110 — Aceite e evolução

**Pergunta:** Como **override do master** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## VAL — Validações bloqueantes

### M-PURCHASING-Q0111 — Escopo estratégico

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0112 — Ownership e governança

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0113 — Fluxo ponta a ponta

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0114 — Dados e fonte da verdade

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0115 — Regra e parametrização

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0116 — Layout e experiência

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0117 — Automação e tempo

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0118 — Controle, risco e auditoria

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0119 — Métrica e observabilidade

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0120 — Aceite e evolução

**Pergunta:** Como **validações bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## WARN — Alertas não bloqueantes

### M-PURCHASING-Q0121 — Escopo estratégico

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0122 — Ownership e governança

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0123 — Fluxo ponta a ponta

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0124 — Dados e fonte da verdade

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0125 — Regra e parametrização

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0126 — Layout e experiência

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0127 — Automação e tempo

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0128 — Controle, risco e auditoria

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0129 — Métrica e observabilidade

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0130 — Aceite e evolução

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ERR — Erros e recuperação

### M-PURCHASING-Q0131 — Escopo estratégico

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0132 — Ownership e governança

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0133 — Fluxo ponta a ponta

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0134 — Dados e fonte da verdade

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0135 — Regra e parametrização

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0136 — Layout e experiência

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0137 — Automação e tempo

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0138 — Controle, risco e auditoria

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0139 — Métrica e observabilidade

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0140 — Aceite e evolução

**Pergunta:** Como **erros e recuperação** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## DOC — Documentos obrigatórios

### M-PURCHASING-Q0141 — Escopo estratégico

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0142 — Ownership e governança

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0143 — Fluxo ponta a ponta

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0144 — Dados e fonte da verdade

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0145 — Regra e parametrização

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0146 — Layout e experiência

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0147 — Automação e tempo

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0148 — Controle, risco e auditoria

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0149 — Métrica e observabilidade

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0150 — Aceite e evolução

**Pergunta:** Como **documentos obrigatórios** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ATT — Anexos e versões

### M-PURCHASING-Q0151 — Escopo estratégico

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0152 — Ownership e governança

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0153 — Fluxo ponta a ponta

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0154 — Dados e fonte da verdade

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0155 — Regra e parametrização

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0156 — Layout e experiência

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0157 — Automação e tempo

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0158 — Controle, risco e auditoria

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0159 — Métrica e observabilidade

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0160 — Aceite e evolução

**Pergunta:** Como **anexos e versões** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OCR — Ocr e extração

### M-PURCHASING-Q0161 — Escopo estratégico

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0162 — Ownership e governança

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0163 — Fluxo ponta a ponta

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0164 — Dados e fonte da verdade

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0165 — Regra e parametrização

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0166 — Layout e experiência

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0167 — Automação e tempo

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0168 — Controle, risco e auditoria

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0169 — Métrica e observabilidade

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0170 — Aceite e evolução

**Pergunta:** Como **OCR e extração** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SEARCH — Busca global e local

### M-PURCHASING-Q0171 — Escopo estratégico

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0172 — Ownership e governança

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0173 — Fluxo ponta a ponta

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0174 — Dados e fonte da verdade

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0175 — Regra e parametrização

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0176 — Layout e experiência

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0177 — Automação e tempo

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0178 — Controle, risco e auditoria

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0179 — Métrica e observabilidade

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0180 — Aceite e evolução

**Pergunta:** Como **busca global e local** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## FILTER — Filtros e views salvas

### M-PURCHASING-Q0181 — Escopo estratégico

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0182 — Ownership e governança

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0183 — Fluxo ponta a ponta

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0184 — Dados e fonte da verdade

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0185 — Regra e parametrização

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0186 — Layout e experiência

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0187 — Automação e tempo

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0188 — Controle, risco e auditoria

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0189 — Métrica e observabilidade

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0190 — Aceite e evolução

**Pergunta:** Como **filtros e views salvas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TABLE — Tabela, colunas e ordenação

### M-PURCHASING-Q0191 — Escopo estratégico

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0192 — Ownership e governança

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0193 — Fluxo ponta a ponta

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0194 — Dados e fonte da verdade

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0195 — Regra e parametrização

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0196 — Layout e experiência

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0197 — Automação e tempo

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0198 — Controle, risco e auditoria

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0199 — Métrica e observabilidade

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0200 — Aceite e evolução

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## DETAIL — Página de detalhe

### M-PURCHASING-Q0201 — Escopo estratégico

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0202 — Ownership e governança

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0203 — Fluxo ponta a ponta

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0204 — Dados e fonte da verdade

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0205 — Regra e parametrização

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0206 — Layout e experiência

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0207 — Automação e tempo

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0208 — Controle, risco e auditoria

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0209 — Métrica e observabilidade

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0210 — Aceite e evolução

**Pergunta:** Como **página de detalhe** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CREATE — Criação e edição

### M-PURCHASING-Q0211 — Escopo estratégico

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0212 — Ownership e governança

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0213 — Fluxo ponta a ponta

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0214 — Dados e fonte da verdade

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0215 — Regra e parametrização

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0216 — Layout e experiência

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0217 — Automação e tempo

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0218 — Controle, risco e auditoria

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0219 — Métrica e observabilidade

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0220 — Aceite e evolução

**Pergunta:** Como **criação e edição** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## BULK — Ações em lote

### M-PURCHASING-Q0221 — Escopo estratégico

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0222 — Ownership e governança

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0223 — Fluxo ponta a ponta

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0224 — Dados e fonte da verdade

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0225 — Regra e parametrização

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0226 — Layout e experiência

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0227 — Automação e tempo

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0228 — Controle, risco e auditoria

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0229 — Métrica e observabilidade

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0230 — Aceite e evolução

**Pergunta:** Como **ações em lote** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## KEY — Atalhos e teclado

### M-PURCHASING-Q0231 — Escopo estratégico

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0232 — Ownership e governança

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0233 — Fluxo ponta a ponta

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0234 — Dados e fonte da verdade

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0235 — Regra e parametrização

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0236 — Layout e experiência

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0237 — Automação e tempo

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0238 — Controle, risco e auditoria

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0239 — Métrica e observabilidade

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0240 — Aceite e evolução

**Pergunta:** Como **atalhos e teclado** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## NOTIF — Notificações

### M-PURCHASING-Q0241 — Escopo estratégico

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0242 — Ownership e governança

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0243 — Fluxo ponta a ponta

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0244 — Dados e fonte da verdade

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0245 — Regra e parametrização

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0246 — Layout e experiência

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0247 — Automação e tempo

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0248 — Controle, risco e auditoria

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0249 — Métrica e observabilidade

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0250 — Aceite e evolução

**Pergunta:** Como **notificações** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TASK — Tarefas, sla e filas

### M-PURCHASING-Q0251 — Escopo estratégico

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0252 — Ownership e governança

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0253 — Fluxo ponta a ponta

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0254 — Dados e fonte da verdade

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0255 — Regra e parametrização

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0256 — Layout e experiência

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0257 — Automação e tempo

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0258 — Controle, risco e auditoria

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0259 — Métrica e observabilidade

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0260 — Aceite e evolução

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## COLLAB — Comentários e colaboração

### M-PURCHASING-Q0261 — Escopo estratégico

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0262 — Ownership e governança

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0263 — Fluxo ponta a ponta

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0264 — Dados e fonte da verdade

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0265 — Regra e parametrização

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0266 — Layout e experiência

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0267 — Automação e tempo

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0268 — Controle, risco e auditoria

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0269 — Métrica e observabilidade

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0270 — Aceite e evolução

**Pergunta:** Como **comentários e colaboração** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TIME — Timeline e histórico

### M-PURCHASING-Q0271 — Escopo estratégico

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0272 — Ownership e governança

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0273 — Fluxo ponta a ponta

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0274 — Dados e fonte da verdade

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0275 — Regra e parametrização

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0276 — Layout e experiência

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0277 — Automação e tempo

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0278 — Controle, risco e auditoria

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0279 — Métrica e observabilidade

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0280 — Aceite e evolução

**Pergunta:** Como **timeline e histórico** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## AUDIT — Auditoria

### M-PURCHASING-Q0281 — Escopo estratégico

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0282 — Ownership e governança

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0283 — Fluxo ponta a ponta

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0284 — Dados e fonte da verdade

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0285 — Regra e parametrização

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0286 — Layout e experiência

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0287 — Automação e tempo

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0288 — Controle, risco e auditoria

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0289 — Métrica e observabilidade

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0290 — Aceite e evolução

**Pergunta:** Como **auditoria** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## PERM — Permissões

### M-PURCHASING-Q0291 — Escopo estratégico

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0292 — Ownership e governança

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0293 — Fluxo ponta a ponta

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0294 — Dados e fonte da verdade

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0295 — Regra e parametrização

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0296 — Layout e experiência

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0297 — Automação e tempo

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0298 — Controle, risco e auditoria

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0299 — Métrica e observabilidade

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0300 — Aceite e evolução

**Pergunta:** Como **permissões** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SOD — Segregação de funções

### M-PURCHASING-Q0301 — Escopo estratégico

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0302 — Ownership e governança

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0303 — Fluxo ponta a ponta

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0304 — Dados e fonte da verdade

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0305 — Regra e parametrização

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0306 — Layout e experiência

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0307 — Automação e tempo

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0308 — Controle, risco e auditoria

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0309 — Métrica e observabilidade

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0310 — Aceite e evolução

**Pergunta:** Como **segregação de funções** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OFF — Operação offline

### M-PURCHASING-Q0311 — Escopo estratégico

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0312 — Ownership e governança

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0313 — Fluxo ponta a ponta

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0314 — Dados e fonte da verdade

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0315 — Regra e parametrização

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0316 — Layout e experiência

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0317 — Automação e tempo

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0318 — Controle, risco e auditoria

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0319 — Métrica e observabilidade

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0320 — Aceite e evolução

**Pergunta:** Como **operação offline** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SYNC — Sincronização

### M-PURCHASING-Q0321 — Escopo estratégico

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0322 — Ownership e governança

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0323 — Fluxo ponta a ponta

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0324 — Dados e fonte da verdade

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0325 — Regra e parametrização

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0326 — Layout e experiência

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0327 — Automação e tempo

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0328 — Controle, risco e auditoria

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0329 — Métrica e observabilidade

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0330 — Aceite e evolução

**Pergunta:** Como **sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CONFLICT — Conflitos de sincronização

### M-PURCHASING-Q0331 — Escopo estratégico

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0332 — Ownership e governança

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0333 — Fluxo ponta a ponta

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0334 — Dados e fonte da verdade

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0335 — Regra e parametrização

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0336 — Layout e experiência

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0337 — Automação e tempo

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0338 — Controle, risco e auditoria

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0339 — Métrica e observabilidade

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0340 — Aceite e evolução

**Pergunta:** Como **conflitos de sincronização** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## API — Api e contratos

### M-PURCHASING-Q0341 — Escopo estratégico

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0342 — Ownership e governança

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0343 — Fluxo ponta a ponta

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0344 — Dados e fonte da verdade

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0345 — Regra e parametrização

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0346 — Layout e experiência

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0347 — Automação e tempo

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0348 — Controle, risco e auditoria

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0349 — Métrica e observabilidade

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0350 — Aceite e evolução

**Pergunta:** Como **API e contratos** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## EVENT — Eventos e integrações assíncronas

### M-PURCHASING-Q0351 — Escopo estratégico

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0352 — Ownership e governança

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0353 — Fluxo ponta a ponta

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0354 — Dados e fonte da verdade

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0355 — Regra e parametrização

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0356 — Layout e experiência

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0357 — Automação e tempo

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0358 — Controle, risco e auditoria

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0359 — Métrica e observabilidade

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0360 — Aceite e evolução

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## IDEMP — Idempotência e duplicidade

### M-PURCHASING-Q0361 — Escopo estratégico

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0362 — Ownership e governança

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0363 — Fluxo ponta a ponta

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0364 — Dados e fonte da verdade

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0365 — Regra e parametrização

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0366 — Layout e experiência

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0367 — Automação e tempo

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0368 — Controle, risco e auditoria

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0369 — Métrica e observabilidade

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0370 — Aceite e evolução

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## EXT — Integrações externas

### M-PURCHASING-Q0371 — Escopo estratégico

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0372 — Ownership e governança

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0373 — Fluxo ponta a ponta

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0374 — Dados e fonte da verdade

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0375 — Regra e parametrização

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0376 — Layout e experiência

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0377 — Automação e tempo

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0378 — Controle, risco e auditoria

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0379 — Métrica e observabilidade

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0380 — Aceite e evolução

**Pergunta:** Como **integrações externas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CALC — Cálculos e fórmulas

### M-PURCHASING-Q0381 — Escopo estratégico

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0382 — Ownership e governança

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0383 — Fluxo ponta a ponta

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0384 — Dados e fonte da verdade

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0385 — Regra e parametrização

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0386 — Layout e experiência

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0387 — Automação e tempo

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0388 — Controle, risco e auditoria

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0389 — Métrica e observabilidade

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0390 — Aceite e evolução

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## FX — Moeda, câmbio e arredondamento

### M-PURCHASING-Q0391 — Escopo estratégico

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0392 — Ownership e governança

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0393 — Fluxo ponta a ponta

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0394 — Dados e fonte da verdade

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0395 — Regra e parametrização

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0396 — Layout e experiência

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0397 — Automação e tempo

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0398 — Controle, risco e auditoria

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0399 — Métrica e observabilidade

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0400 — Aceite e evolução

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ACC — Impacto contábil

### M-PURCHASING-Q0401 — Escopo estratégico

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0402 — Ownership e governança

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0403 — Fluxo ponta a ponta

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0404 — Dados e fonte da verdade

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0405 — Regra e parametrização

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0406 — Layout e experiência

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0407 — Automação e tempo

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0408 — Controle, risco e auditoria

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0409 — Métrica e observabilidade

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0410 — Aceite e evolução

**Pergunta:** Como **impacto contábil** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TAX — Impacto fiscal

### M-PURCHASING-Q0411 — Escopo estratégico

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0412 — Ownership e governança

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0413 — Fluxo ponta a ponta

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0414 — Dados e fonte da verdade

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0415 — Regra e parametrização

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0416 — Layout e experiência

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0417 — Automação e tempo

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0418 — Controle, risco e auditoria

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0419 — Métrica e observabilidade

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0420 — Aceite e evolução

**Pergunta:** Como **impacto fiscal** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## RECON — Reconciliação

### M-PURCHASING-Q0421 — Escopo estratégico

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0422 — Ownership e governança

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0423 — Fluxo ponta a ponta

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0424 — Dados e fonte da verdade

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0425 — Regra e parametrização

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0426 — Layout e experiência

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0427 — Automação e tempo

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0428 — Controle, risco e auditoria

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0429 — Métrica e observabilidade

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0430 — Aceite e evolução

**Pergunta:** Como **reconciliação** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## REPORT — Relatórios e drill-down

### M-PURCHASING-Q0431 — Escopo estratégico

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0432 — Ownership e governança

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0433 — Fluxo ponta a ponta

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0434 — Dados e fonte da verdade

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0435 — Regra e parametrização

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0436 — Layout e experiência

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0437 — Automação e tempo

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0438 — Controle, risco e auditoria

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0439 — Métrica e observabilidade

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0440 — Aceite e evolução

**Pergunta:** Como **relatórios e drill-down** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## KPI — Kpis e alertas

### M-PURCHASING-Q0441 — Escopo estratégico

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0442 — Ownership e governança

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0443 — Fluxo ponta a ponta

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0444 — Dados e fonte da verdade

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0445 — Regra e parametrização

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0446 — Layout e experiência

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0447 — Automação e tempo

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0448 — Controle, risco e auditoria

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0449 — Métrica e observabilidade

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0450 — Aceite e evolução

**Pergunta:** Como **KPIs e alertas** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## IO — Importação e exportação de dados

### M-PURCHASING-Q0451 — Escopo estratégico

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0452 — Ownership e governança

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0453 — Fluxo ponta a ponta

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0454 — Dados e fonte da verdade

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0455 — Regra e parametrização

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0456 — Layout e experiência

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0457 — Automação e tempo

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0458 — Controle, risco e auditoria

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0459 — Métrica e observabilidade

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0460 — Aceite e evolução

**Pergunta:** Como **importação e exportação de dados** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## PERF — Desempenho e volume

### M-PURCHASING-Q0461 — Escopo estratégico

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0462 — Ownership e governança

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0463 — Fluxo ponta a ponta

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0464 — Dados e fonte da verdade

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0465 — Regra e parametrização

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0466 — Layout e experiência

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0467 — Automação e tempo

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0468 — Controle, risco e auditoria

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0469 — Métrica e observabilidade

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0470 — Aceite e evolução

**Pergunta:** Como **desempenho e volume** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SEC — Segurança e privacidade

### M-PURCHASING-Q0471 — Escopo estratégico

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0472 — Ownership e governança

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0473 — Fluxo ponta a ponta

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0474 — Dados e fonte da verdade

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0475 — Regra e parametrização

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0476 — Layout e experiência

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0477 — Automação e tempo

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0478 — Controle, risco e auditoria

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0479 — Métrica e observabilidade

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0480 — Aceite e evolução

**Pergunta:** Como **segurança e privacidade** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TEST — Testes e evidências

### M-PURCHASING-Q0481 — Escopo estratégico

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0482 — Ownership e governança

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0483 — Fluxo ponta a ponta

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0484 — Dados e fonte da verdade

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0485 — Regra e parametrização

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0486 — Layout e experiência

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0487 — Automação e tempo

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0488 — Controle, risco e auditoria

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0489 — Métrica e observabilidade

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0490 — Aceite e evolução

**Pergunta:** Como **testes e evidências** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## MIG — Migração, rollout e suporte

### M-PURCHASING-Q0491 — Escopo estratégico

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **escopo estratégico**? Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?

- **Sugestão recomendada:** Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0492 — Ownership e governança

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **ownership e governança**? Quem deve ser responsável, quem executa e quem aprova este tema no módulo?

- **Sugestão recomendada:** Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0493 — Fluxo ponta a ponta

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **fluxo ponta a ponta**? Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?

- **Sugestão recomendada:** Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0494 — Dados e fonte da verdade

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **dados e fonte da verdade**? Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?

- **Sugestão recomendada:** Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0495 — Regra e parametrização

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **regra e parametrização**? Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?

- **Sugestão recomendada:** Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0496 — Layout e experiência

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **layout e experiência**? Qual layout reduz cliques e torna o estado e a próxima ação óbvios?

- **Sugestão recomendada:** Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0497 — Automação e tempo

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **automação e tempo**? O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?

- **Sugestão recomendada:** Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0498 — Controle, risco e auditoria

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **controle, risco e auditoria**? Quais riscos, permissões, aprovações e evidências devem existir?

- **Sugestão recomendada:** Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0499 — Métrica e observabilidade

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **métrica e observabilidade**? Como medir qualidade, velocidade, exceções e adoção deste tema?

- **Sugestão recomendada:** Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### M-PURCHASING-Q0500 — Aceite e evolução

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no módulo **Compras** sob a perspectiva de **aceite e evolução**? Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?

- **Sugestão recomendada:** Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar. Para **requisição e pedido de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.
