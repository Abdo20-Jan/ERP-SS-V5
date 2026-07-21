---
id: QA-500-PLATFORM
title: Plataforma — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 45
---

# Plataforma — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: ARCH-01, ARCH-02, UX-08, UX-09.

## PR-PLATFORM-01 — Identidade, RBAC e escopos

**Objetivo do PR:** entregar o fluxo de usuário e permissão com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-001 — Quais estados de **usuário e permissão** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Usar a máquina de estados **INVITED → ACTIVE → LOCKED → INACTIVE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Ao abrir o registro, o usuário vê o estado atual e o botão **provisionar e conceder acesso** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-002 — Quais dados de **usuário e permissão** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **papel, permissão, escopo, MFA e sessão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **provisionar e conceder acesso**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **usuário e permissão**?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **acessos excessivos**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-004 — Como deve ser organizada a página de detalhe de **usuário e permissão** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **papel, permissão, escopo, MFA e sessão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **usuário e permissão**?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário abre a view de pendências e vê imediatamente itens que afetam **acessos excessivos**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-006 — Quais ações rápidas e em lote devem existir para **usuário e permissão**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Deixar **provisionar e conceder acesso** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **provisionar e conceder acesso** em **usuário e permissão**?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-008 — O que deve ser automatizado em **usuário e permissão** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O sistema processa em segundo plano e atualiza o indicador de **acessos excessivos** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **usuário e permissão** neste PR?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-02 — Aprovações, override, auditoria e parâmetros

**Objetivo do PR:** entregar o fluxo de regra de plataforma com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-010 — Quais estados de **regra de plataforma** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → SUPERSEDED → DISABLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar política ou parâmetro** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-011 — Quais dados de **regra de plataforma** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **alçada, aprovadores, override, vigência e log**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar política ou parâmetro**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **regra de plataforma**?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **overrides por período**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-013 — Como deve ser organizada a página de detalhe de **regra de plataforma** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **alçada, aprovadores, override, vigência e log** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **regra de plataforma**?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário abre a view de pendências e vê imediatamente itens que afetam **overrides por período**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-015 — Quais ações rápidas e em lote devem existir para **regra de plataforma**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Deixar **publicar política ou parâmetro** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar política ou parâmetro** em **regra de plataforma**?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-017 — O que deve ser automatizado em **regra de plataforma** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O sistema processa em segundo plano e atualiza o indicador de **overrides por período** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **regra de plataforma** neste PR?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-03 — Documentos, OCR, busca e notificações

**Objetivo do PR:** entregar o fluxo de documento e job com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-019 — Quais estados de **documento e job** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Usar a máquina de estados **UPLOADED → PROCESSING → REVIEW_REQUIRED → VALIDATED → ARCHIVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Ao abrir o registro, o usuário vê o estado atual e o botão **processar documento** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-020 — Quais dados de **documento e job** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **arquivo, hash, versão, OCR, tags e origem**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **processar documento**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **documento e job**?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de processamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-022 — Como deve ser organizada a página de detalhe de **documento e job** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **arquivo, hash, versão, OCR, tags e origem** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **documento e job**?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de processamento**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-024 — Quais ações rápidas e em lote devem existir para **documento e job**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Deixar **processar documento** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **processar documento** em **documento e job**?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-026 — O que deve ser automatizado em **documento e job** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O sistema processa em segundo plano e atualiza o indicador de **tempo de processamento** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **documento e job** neste PR?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-04 — Desktop offline e sincronização

**Objetivo do PR:** entregar o fluxo de operação offline com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-028 — Quais estados de **operação offline** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Usar a máquina de estados **LOCAL_DRAFT → QUEUED → SYNCING → CONFLICT → SYNCED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Ao abrir o registro, o usuário vê o estado atual e o botão **sincronizar e resolver conflito** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-029 — Quais dados de **operação offline** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **dispositivo, cursor, versão, dependência externa e retry**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **sincronizar e resolver conflito**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **operação offline**?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **conflitos e fila pendente**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-031 — Como deve ser organizada a página de detalhe de **operação offline** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **dispositivo, cursor, versão, dependência externa e retry** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **operação offline**?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário abre a view de pendências e vê imediatamente itens que afetam **conflitos e fila pendente**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-033 — Quais ações rápidas e em lote devem existir para **operação offline**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Deixar **sincronizar e resolver conflito** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **sincronizar e resolver conflito** em **operação offline**?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-035 — O que deve ser automatizado em **operação offline** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O sistema processa em segundo plano e atualiza o indicador de **conflitos e fila pendente** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **operação offline** neste PR?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-05 — APIs, jobs, observabilidade e continuidade

**Objetivo do PR:** entregar o fluxo de serviço de plataforma com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-037 — Quais estados de **serviço de plataforma** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Usar a máquina de estados **HEALTHY → DEGRADED → FAILED → RECOVERING**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Ao abrir o registro, o usuário vê o estado atual e o botão **operar e restaurar serviço** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-038 — Quais dados de **serviço de plataforma** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **API, fila, retry, log, métrica, backup e restore**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **operar e restaurar serviço**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **serviço de plataforma**?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **SLO e tempo de recuperação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-040 — Como deve ser organizada a página de detalhe de **serviço de plataforma** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **API, fila, retry, log, métrica, backup e restore** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **serviço de plataforma**?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário abre a view de pendências e vê imediatamente itens que afetam **SLO e tempo de recuperação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-042 — Quais ações rápidas e em lote devem existir para **serviço de plataforma**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Deixar **operar e restaurar serviço** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **operar e restaurar serviço** em **serviço de plataforma**?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-044 — O que deve ser automatizado em **serviço de plataforma** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O sistema processa em segundo plano e atualiza o indicador de **SLO e tempo de recuperação** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **serviço de plataforma** neste PR?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________
