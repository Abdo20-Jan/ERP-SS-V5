---
id: QA-500-CLOSE
title: Fechamento contábil transversal — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 30
---

# Fechamento contábil transversal — 30 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-03, UX-06, UX-07.

## PR-CLOSE-01 — Calendário e tarefas de fechamento

**Objetivo do PR:** entregar o fluxo de tarefa de fechamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-001 — Quais estados de **tarefa de fechamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Usar a máquina de estados **PLANNED → READY → IN_PROGRESS → BLOCKED → DONE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Ao abrir o registro, o usuário vê o estado atual e o botão **concluir ou escalar tarefa** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-002 — Quais dados de **tarefa de fechamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **período, responsável, dependência, evidência e SLA**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **concluir ou escalar tarefa**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **tarefa de fechamento**?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tarefas atrasadas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-004 — Como deve ser organizada a página de detalhe de **tarefa de fechamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **período, responsável, dependência, evidência e SLA** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-005 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **concluir ou escalar tarefa** em **tarefa de fechamento**?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-006 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **tarefa de fechamento** neste PR?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-02 — Reconciliação de subledgers

**Objetivo do PR:** entregar o fluxo de reconciliação contábil com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-007 — Quais estados de **reconciliação contábil** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → MATCHED → DIFFERENCE → EXPLAINED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Ao abrir o registro, o usuário vê o estado atual e o botão **resolver diferença** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-008 — Quais dados de **reconciliação contábil** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **estoque, fiscal, clientes, fornecedores e bancos**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Saldo de estoque difere do razão. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **resolver diferença**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-009 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reconciliação contábil**?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferenças materiais**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-010 — Como deve ser organizada a página de detalhe de **reconciliação contábil** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **estoque, fiscal, clientes, fornecedores e bancos** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Saldo de estoque difere do razão. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-011 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **resolver diferença** em **reconciliação contábil**?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-012 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reconciliação contábil** neste PR?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-03 — Provisões, accruals e câmbio

**Objetivo do PR:** entregar o fluxo de ajuste de fechamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-013 — Quais estados de **ajuste de fechamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → REVIEWED → POSTED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Ao abrir o registro, o usuário vê o estado atual e o botão **postar provisão ou reavaliação** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-014 — Quais dados de **ajuste de fechamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **custos pendentes, despesas, câmbio e reversão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **postar provisão ou reavaliação**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-015 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ajuste de fechamento**?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **ajustes manuais**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-016 — Como deve ser organizada a página de detalhe de **ajuste de fechamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **custos pendentes, despesas, câmbio e reversão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-017 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **postar provisão ou reavaliação** em **ajuste de fechamento**?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ajuste de fechamento** neste PR?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-04 — Demonstrações e pacote gerencial

**Objetivo do PR:** entregar o fluxo de pacote de fechamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-019 — Quais estados de **pacote de fechamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Usar a máquina de estados **GENERATED → REVIEWED → APPROVED → PUBLISHED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar pacote** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-020 — Quais dados de **pacote de fechamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **balanço, DRE, caixa, margem e comentários**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar pacote**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pacote de fechamento**?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de fechamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-022 — Como deve ser organizada a página de detalhe de **pacote de fechamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **balanço, DRE, caixa, margem e comentários** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-023 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar pacote** em **pacote de fechamento**?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-024 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pacote de fechamento** neste PR?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-05 — Reabertura, auditoria e cockpit

**Objetivo do PR:** entregar o fluxo de período fechado com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-025 — Quais estados de **período fechado** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Usar a máquina de estados **CLOSED → REOPEN_REQUESTED → REOPENED → RECLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar reabertura** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-026 — Quais dados de **período fechado** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **motivo, impacto, aprovador, journals e nova versão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aprovar reabertura**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-027 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **período fechado**?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **quantidade de reaberturas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-028 — Como deve ser organizada a página de detalhe de **período fechado** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **motivo, impacto, aprovador, journals e nova versão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-029 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar reabertura** em **período fechado**?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-030 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **período fechado** neste PR?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________
