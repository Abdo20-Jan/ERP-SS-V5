# Instruções locais — Design system

Estas regras se aplicam a `packages/ui/` e descendentes.

# AGENTES RESPONSÁVEIS
Acione `ux_operations` para mudanças relevantes neste diretório.
Acione `testing_quality` para mudanças relevantes neste diretório.

# OBJETOS LOCAIS
Mapeie ownership e contrato de tokens antes de alterar.
Não duplique tokens se existir implementação compartilhada.
Inclua teste e documentação para mudança em tokens.
Verifique impacto de segurança, dados e operação em tokens.
Mapeie ownership e contrato de componentes antes de alterar.
Não duplique componentes se existir implementação compartilhada.
Inclua teste e documentação para mudança em componentes.
Verifique impacto de segurança, dados e operação em componentes.
Mapeie ownership e contrato de tabelas antes de alterar.
Não duplique tabelas se existir implementação compartilhada.
Inclua teste e documentação para mudança em tabelas.
Verifique impacto de segurança, dados e operação em tabelas.
Mapeie ownership e contrato de formulários antes de alterar.
Não duplique formulários se existir implementação compartilhada.
Inclua teste e documentação para mudança em formulários.
Verifique impacto de segurança, dados e operação em formulários.
Mapeie ownership e contrato de foco antes de alterar.
Não duplique foco se existir implementação compartilhada.
Inclua teste e documentação para mudança em foco.
Verifique impacto de segurança, dados e operação em foco.
Mapeie ownership e contrato de densidade antes de alterar.
Não duplique densidade se existir implementação compartilhada.
Inclua teste e documentação para mudança em densidade.
Verifique impacto de segurança, dados e operação em densidade.
# IDENTIDADE E POSTURA
Atue como proprietário técnico do escopo recebido, não como gerador genérico de código.
Priorize correção operacional, rastreabilidade e reversibilidade acima de velocidade aparente.
Não confunda uma sugestão plausível com uma decisão aprovada.
Não invente regra fiscal, aduaneira, contábil, bancária ou societária.
Não assuma que um comportamento comum de outro ERP é válido para este projeto.
Trate o blueprint aprovado como contrato de produto e o código como implementação desse contrato.
Use linguagem objetiva, com nomes de arquivos, símbolos, estados, eventos e critérios verificáveis.
Evite comentários cosméticos; concentre-se em comportamento, risco, evidência e manutenção.
Reconheça incerteza explicitamente e escale quando a hierarquia documental não resolver.
Nunca esconda falha de teste, limitação técnica ou requisito não atendido.

# HIERARQUIA DE FONTES
Leia primeiro o AGENTS.md mais próximo do diretório que será alterado.
Leia o AGENTS.md raiz antes de qualquer mudança transversal.
Leia docs/governance/DECISION_PRECEDENCE.md antes de resolver conflitos.
Leia o controller lógico do PR e o slice físico indicado no prompt.
Leia apenas os requisitos vinculados ao slice; não carregue o corpus inteiro sem necessidade.
Use docs/blueprint-master como especificação transversal aprovada.
Use docs/catalog para confirmar fronteiras de módulo, submódulo e função.
Use docs/traceability para entender decisões anteriores do mesmo fluxo.
Use ADRs aceitos quando houver decisão arquitetural já registrada.
Use documentação oficial atual para APIs, frameworks e normas externas.
Prefira fontes primárias e documentos normativos a blogs ou exemplos de terceiros.
Quando duas fontes oficiais divergirem, registre a divergência e aplique a fonte juridicamente ou tecnicamente prevalente.
Quando o blueprint conflitar com uma norma obrigatória atual, não implemente silenciosamente; abra ADR e risco.
Quando a sugestão aceita for genérica e uma decisão específica posterior existir, aplique a decisão específica posterior.
Mantenha uma lista das fontes efetivamente consultadas no artefato de rastreabilidade.

# CONTROLE DE ESCOPO
Defina o objetivo do slice em uma frase testável antes de editar.
Defina o que está fora do escopo antes de editar.
Liste os arquivos candidatos antes de alterá-los.
Não altere arquivo não relacionado apenas para “limpar” ou “modernizar”.
Não refatore código adjacente sem necessidade demonstrável para o requisito.
Se o slice exigir mudança transversal, proponha divisão em slice preparatório e slice funcional.
Não misture migration destrutiva com mudança funcional ampla no mesmo PR.
Não misture atualização de dependências com regra de negócio sem justificativa.
Não renomeie contratos públicos sem plano de compatibilidade.
Não altere semântica de evento existente sem versionamento ou estratégia de transição.
Não mova responsabilidade entre módulos sem registrar ownership e impacto.
Não duplique regra de negócio em frontend, API e worker.
Não introduza feature flag sem owner, propósito, valor padrão e plano de remoção.
Não introduza parâmetro configurável sem validação, vigência, auditoria e rollback.
Pare e peça decomposição quando o diff previsto não puder ser revisado de forma confiável.

# PLAN MODE OBRIGATÓRIO
Comece tarefas de implementação em Plan Mode.
No planejamento, não edite arquivos e não execute comandos destrutivos.
O plano deve descrever o fluxo de dados ponta a ponta.
O plano deve listar entidades, comandos, queries, eventos e estados afetados.
O plano deve listar contratos HTTP, eventos e integrações afetados.
O plano deve listar migrations e estratégia de rollback.
O plano deve listar permissões e escopos de acesso afetados.
O plano deve listar eventos de auditoria a registrar.
O plano deve listar impactos offline e de sincronização.
O plano deve listar estados de UI: loading, vazio, erro, sem permissão, conflito e sucesso.
O plano deve listar testes unitários, integração, contrato, E2E e regressão necessários.
O plano deve listar dados de teste e fixtures mínimas.
O plano deve listar riscos de concorrência e idempotência.
O plano deve listar riscos financeiros, fiscais e contábeis quando aplicável.
O plano deve listar dependências de outros módulos e contratos compartilhados.
O plano deve listar observabilidade: logs, métricas, traces e alertas.
O plano deve definir rollout, feature flag se necessária e rollback.
O plano deve indicar evidências que provarão conclusão.
O plano deve apontar lacunas e decisões ainda não resolvidas.
Não implemente enquanto o plano não estiver coerente com o slice e com a precedência documental.

# ARQUITETURA E DOMÍNIO
Preserve o monólito modular enquanto não houver ADR aprovado para extração de serviço.
Mantenha limites de domínio explícitos em módulos, contratos e ownership de dados.
Impeça dependências circulares entre domínios.
Use ports/adapters em integrações externas substituíveis.
Não exponha entidades de persistência diretamente na API.
Não use objetos de transporte como modelo de domínio.
Modele estados e transições explicitamente para workflows críticos.
Cada transição crítica deve validar estado de origem, permissão, pré-condições e idempotência.
Cada comando crítico deve ter identificador de correlação.
Cada efeito externo deve ter chave de idempotência ou deduplicação equivalente.
Use outbox transacional para eventos que dependem da mesma transação do banco.
Use inbox ou deduplicação persistente para consumo de eventos.
Evite lógica de negócio em controllers, componentes React, migrations ou serializers.
Use serviços de domínio ou application services com contratos claros.
Não modele estados importantes apenas com booleanos desconectados.
Mantenha invariantes dentro da fronteira transacional que consegue protegê-las.
Quando uma operação exigir consistência eventual, documente janela, compensação e estado intermediário.
Use clock e gerador de IDs injetáveis nos testes.
Use valores imutáveis para dinheiro, moeda, taxa, período, documento e identificadores regulatórios.
Evite abstrações prematuras; abstraia após identificar comportamento realmente compartilhado.

# DADOS E BANCO
Nunca use float binário para valores monetários, taxas ou quantidades que exijam precisão decimal.
Defina precisão e escala por tipo de valor, não globalmente por conveniência.
Persista moeda original, valor original, taxa, data da taxa, fonte e valor funcional quando aplicável.
Persista timestamps em UTC e aplique timezone de negócio explicitamente.
Não sobrescreva dados históricos que exigem vigência ou auditoria.
Prefira registros append-only para auditoria, movimentos e eventos contábeis.
Use soft delete apenas quando a semântica exigir desativação; não use como padrão universal.
Crie constraints de banco para invariantes que o banco consegue garantir.
Crie índices a partir de consultas reais e planos de execução, não por intuição isolada.
Evite índice duplicado ou redundante.
Não crie migration irreversível sem backup, fase expand/contract e plano de retorno.
Migrations devem ser determinísticas e testáveis em banco vazio e banco com dados representativos.
Não execute backfill pesado dentro da transação de deploy se houver risco de indisponibilidade.
Separe alteração de esquema, backfill e aplicação de constraint quando necessário.
Use locks e níveis de isolamento conscientemente; não dependa de comportamento implícito.
Teste concorrência em reserva de estoque, numeração, pagamento, emissão fiscal e postagem contábil.
Não armazene documento binário grande no PostgreSQL sem decisão arquitetural específica.
Não registre PII, segredo, token ou documento completo em logs.
Defina retenção, expurgo e legal hold quando o dado exigir.
Inclua data lineage para cálculos financeiros e relatórios críticos.

# API E INTEGRAÇÕES
Defina contratos HTTP com OpenAPI e mantenha exemplos válidos.
Use códigos de erro estáveis e mensagens seguras para clientes.
Diferencie erro de validação, conflito, autorização, integração, indisponibilidade e erro interno.
Não retorne stack trace, SQL, token ou detalhe sensível ao cliente.
Valide autorização no objeto e na função, não apenas na rota.
Implemente paginação e limites em listagens potencialmente grandes.
Implemente limites de consumo e proteção contra operações excessivas.
Use timeouts explícitos para chamadas externas.
Use retry apenas para falhas transitórias e com backoff/jitter.
Não repita automaticamente operação não idempotente sem proteção.
Implemente circuit breaker ou degradação quando a dependência externa for crítica.
Versione payloads de eventos e preserve compatibilidade de consumidores.
Não reutilize evento como comando oculto.
Documente ownership, SLA, autenticação, rate limit e contingência de cada integração.
Valide assinatura, origem e replay de webhooks.
Sanitize e valide dados recebidos de terceiros antes de persistir ou executar lógica.
Não confie em campos calculados pelo cliente para preço, imposto, permissão ou saldo.
Use correlation id ponta a ponta.
Inclua teste de contrato para cada integração relevante.
Registre fila de erro e processo de reprocessamento auditável.

# SEGURANÇA
Aplique menor privilégio para usuário, serviço, job e integração.
Negue por padrão quando a política de autorização não resolver.
Implemente autorização por ação, recurso e escopo organizacional.
Não trate usuário master como bypass de integridade técnica, fiscal ou contábil.
Qualquer override permitido deve gerar auditoria imutável com ator, motivo quando exigido, contexto e antes/depois.
Proteja segredos em secret manager; nunca em repositório, prompt, fixture ou log.
Valide dependências e lockfile no CI.
Evite execução de shell construída com entrada não confiável.
Use queries parametrizadas e validação contextual.
Proteja upload contra tipo, tamanho, conteúdo malicioso e path traversal.
Faça threat modeling para fluxos de dinheiro, estoque, fiscal, autenticação e offline.
Teste broken object level authorization em recursos com IDs.
Teste broken function level authorization em ações administrativas.
Teste consumo excessivo em exportações, OCR, relatórios e endpoints de busca.
Não exponha propriedades sensíveis apenas porque existem no modelo interno.
Use criptografia em trânsito e, quando aplicável, em repouso.
Defina rotação e revogação de credenciais.
Mantenha logging de segurança com correlação e proteção contra adulteração.
Não implemente “segurança por ocultação” como controle principal.
Classifique achados por impacto e evidência, não por quantidade.

# UI E EXPERIÊNCIA OPERACIONAL
Priorize tela operacional densa sobre dashboard decorativo.
Use dashboard para exceções, priorização e drill-down, não como substituto do trabalho.
Use tabelas com filtros, colunas, agrupamento, ações em lote e exportação quando o trabalho for tabular.
Permita salvar visualizações e preferências por usuário quando aplicável.
Mantenha ações frequentes acessíveis por teclado.
Não esconda ação crítica apenas em menu de três pontos.
Exiba estado, responsável, próxima ação, pendência e prazo no contexto operacional.
Evite navegação desnecessária; use edição inline, drawer ou modal quando não prejudicar contexto.

# REGRAS LOCAIS ADICIONAIS
Local-1. Preserve compatibilidade de tokens.
Local-1. Não altere tokens fora do slice.
Local-1. Registre evidência de tokens.
Local-1. Revise performance e falha de tokens.
Local-1. Documente rollback de tokens.
Local-2. Preserve compatibilidade de componentes.
Local-2. Não altere componentes fora do slice.
Local-2. Registre evidência de componentes.
Local-2. Revise performance e falha de componentes.
Local-2. Documente rollback de componentes.
Local-3. Preserve compatibilidade de tabelas.
Local-3. Não altere tabelas fora do slice.
Local-3. Registre evidência de tabelas.
Local-3. Revise performance e falha de tabelas.
Local-3. Documente rollback de tabelas.
Local-4. Preserve compatibilidade de formulários.
Local-4. Não altere formulários fora do slice.
Local-4. Registre evidência de formulários.
Local-4. Revise performance e falha de formulários.
Local-4. Documente rollback de formulários.
Local-5. Preserve compatibilidade de foco.
Local-5. Não altere foco fora do slice.
Local-5. Registre evidência de foco.
Local-5. Revise performance e falha de foco.
Local-5. Documente rollback de foco.
Local-6. Preserve compatibilidade de densidade.
Local-6. Não altere densidade fora do slice.
Local-6. Registre evidência de densidade.
Local-6. Revise performance e falha de densidade.
Local-6. Documente rollback de densidade.
