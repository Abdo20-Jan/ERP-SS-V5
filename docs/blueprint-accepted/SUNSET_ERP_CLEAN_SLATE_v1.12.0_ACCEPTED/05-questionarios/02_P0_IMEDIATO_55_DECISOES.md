---
id: QA-P0-START-055
title: P0 imediato — 55 decisões para iniciar o desenvolvimento
status: ACCEPTED
version: 1.10.0
priority: P0
purpose: Fechar apenas as decisões técnicas, de qualidade e de implementação do primeiro módulo que o Codex não deve inventar.
---

# P0 imediato — 55 decisões antes do primeiro código

As decisões empresariais gerais já foram aprovadas. Este questionário não repete o levantamento funcional anterior. Ele define somente:

1. a fundação técnica do ERP;
2. o padrão mínimo de qualidade e entrega;
3. a implementação inicial de COMEX.

## Como responder rapidamente

Você pode confirmar um bloco inteiro e alterar apenas as exceções:

```text
CONFIRMO O BLOCO A — ARQUITETURA
P0-START-18: ALTERAR PARA...

CONFIRMO O BLOCO B — QUALIDADE
CONFIRMO O BLOCO C — COMEX
```

Todas as expressões técnicas são explicadas e acompanhadas de exemplo.

# BLOCO A — ARQUITETURA TÉCNICA (30 decisões)

## P0-START-01 — Linguagem principal do sistema

**O que significa:** Escolher a linguagem usada no frontend, backend, regras de negócio e integrações. Uma linguagem principal reduz duplicação e facilita o trabalho do Codex.

**Exemplo aplicado à Sunset:** A mesma regra de cálculo de margem pode ser compartilhada entre a tela web, a API e o aplicativo desktop.

**Decisão sugerida:** Usar TypeScript como linguagem principal. Rust será utilizado somente na camada nativa do aplicativo desktop Tauri quando necessário. SQL será usado nas migrations, consultas e relatórios.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-02 — Estrutura do repositório

**O que significa:** Definir se todo o ERP ficará em um único repositório ou em vários. Um monorepo permite compartilhar tipos, componentes e regras.

**Exemplo aplicado à Sunset:** O cadastro de SKU será usado pelo web, API, desktop e testes sem copiar código entre projetos.

**Decisão sugerida:** Usar um monorepo com workspaces, organizado em `apps/web`, `apps/api`, `apps/desktop`, `apps/worker` e pacotes compartilhados de domínio, UI, contratos, banco e configuração.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-03 — Frontend web

**O que significa:** Escolher a tecnologia da interface acessada pelo navegador e publicada no Vercel.

**Exemplo aplicado à Sunset:** Um vendedor acessa pedidos pelo Safari no MacBook; o financeiro acessa pelo Chrome em outro computador.

**Decisão sugerida:** Usar Next.js com TypeScript, interface responsiva e publicação no Vercel.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-04 — Backend/API

**O que significa:** Escolher onde ficam regras, validações, integrações, sincronização e acesso ao banco.

**Exemplo aplicado à Sunset:** A tela envia um pedido; a API valida estoque, permissões, aprovação e grava tudo em uma transação.

**Decisão sugerida:** Usar uma API Node.js estruturada por módulos, com NestJS e adaptador Fastify, executada como serviço permanente no Railway.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-05 — Arquitetura inicial: monólito modular ou microserviços

**O que significa:** Monólito modular significa um backend único dividido em módulos internos. Microserviços significam vários sistemas separados desde o início.

**Exemplo aplicado à Sunset:** COMEX, estoque e tesouraria precisam conversar dentro da mesma operação e transação.

**Decisão sugerida:** Começar com monólito modular. Separar serviços somente quando houver necessidade comprovada de escala, isolamento ou equipe independente.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-06 — Distribuição entre Vercel e Railway

**O que significa:** Definir exatamente o que roda em cada plataforma.

**Exemplo aplicado à Sunset:** A interface abre pelo Vercel, mas OCR, sincronização offline e processamento de documentos não devem depender de uma requisição curta do navegador.

**Decisão sugerida:** Vercel hospeda o frontend. Railway hospeda API, worker, banco PostgreSQL e serviços auxiliares. API e banco devem ficar na mesma região ou na região disponível mais próxima entre si.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-07 — Banco de dados principal

**O que significa:** Escolher o banco que guarda operações, contabilidade, documentos relacionados, permissões e auditoria.

**Exemplo aplicado à Sunset:** Uma venda precisa atualizar pedido, reserva, recebimento e lançamentos sem deixar registros pela metade.

**Decisão sugerida:** Usar PostgreSQL no Railway como banco transacional principal.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-08 — Organização lógica do banco

**O que significa:** Definir como tabelas e regras serão separadas sem criar bancos independentes para cada módulo.

**Exemplo aplicado à Sunset:** Tabelas de COMEX, estoque e contabilidade pertencem a domínios diferentes, mas precisam manter integridade entre si.

**Decisão sugerida:** Usar um único banco com schemas ou namespaces lógicos por domínio e migrations centralizadas. Não duplicar cliente, SKU ou documento entre módulos.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-09 — Identificadores técnicos e números visíveis

**O que significa:** Separar o identificador interno do número que o usuário vê.

**Exemplo aplicado à Sunset:** Uma importação pode ter ID técnico global e também número visível `IMP-2026-000123`.

**Decisão sugerida:** Usar UUIDv7 como ID interno e sequências legíveis, parametrizáveis e auditadas para documentos exibidos ao usuário.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-10 — Precisão de dinheiro, câmbio e quantidade

**O que significa:** Definir quantas casas decimais são guardadas. Valores financeiros não podem usar ponto flutuante comum porque isso gera erros de arredondamento.

**Exemplo aplicado à Sunset:** USD 25.000 convertido por taxa 1.490,123456 não pode perder centavos ou alterar a diferença cambial.

**Decisão sugerida:** Usar tipos decimais exatos: valores monetários com até 6 casas internas, taxas de câmbio com até 10 casas e quantidades com até 6 casas. Nunca usar `float` para dinheiro.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-11 — Datas, horários e timezone

**O que significa:** Separar data comercial, timestamp técnico e horário local.

**Exemplo aplicado à Sunset:** Uma fatura é de 14/07/2026 em Buenos Aires, enquanto o servidor pode registrar o evento em UTC.

**Decisão sugerida:** Guardar timestamps em UTC, exibir em `America/Argentina/Buenos_Aires` e manter campos próprios para data contábil, fiscal, documental e de vencimento.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-12 — Padrão das APIs

**O que significa:** Definir como web, desktop e integrações conversam com o backend.

**Exemplo aplicado à Sunset:** O desktop envia uma venda offline quando a internet volta, e a SI Factura recebe um comprovante por integração.

**Decisão sugerida:** Usar REST/JSON documentado por OpenAPI no núcleo inicial, com versionamento `/v1`. Eventos e webhooks terão contratos versionados separadamente.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-13 — Idempotência

**O que significa:** Idempotência impede que a mesma solicitação seja executada duas vezes por erro de rede ou reenvio.

**Exemplo aplicado à Sunset:** O desktop envia um recebimento; perde a resposta; envia novamente. O ERP deve reconhecer que é o mesmo recebimento e não duplicá-lo.

**Decisão sugerida:** Exigir chave de idempotência em gravações críticas, integrações, sincronização offline, pagamentos, movimentos de estoque e emissão fiscal.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-14 — Processamentos demorados e filas

**O que significa:** Definir como OCR, importações de arquivos, relatórios e retentativas serão executados sem travar a tela.

**Exemplo aplicado à Sunset:** O usuário envia 200 invoices; a tela confirma o upload e um worker processa os arquivos em segundo plano.

**Decisão sugerida:** Criar worker separado no Railway e fila persistente. Toda tarefa terá status, retentativa, erro, cancelamento e reprocessamento pela interface.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-15 — Armazenamento de documentos

**O que significa:** Definir onde ficam PDFs, imagens, planilhas, remitos e comprovantes.

**Exemplo aplicado à Sunset:** O banco guarda o vínculo e os metadados da commercial invoice, enquanto o PDF original fica em armazenamento de objetos.

**Decisão sugerida:** Guardar arquivos em storage compatível com S3, separado do PostgreSQL. O banco guarda metadados, hash, versão, vínculos, permissões e localização do objeto.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-16 — Integridade e segurança dos arquivos

**O que significa:** Definir como provar que um arquivo não foi alterado e impedir arquivos maliciosos.

**Exemplo aplicado à Sunset:** O remito assinado recebido hoje deve continuar exatamente igual quando for auditado dois anos depois.

**Decisão sugerida:** Calcular hash SHA-256, registrar tamanho e tipo real, executar verificação antimalware, impedir sobrescrita destrutiva e manter versões.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-17 — OCR e extração automática

**O que significa:** Definir como documentos serão lidos sem transformar uma leitura automática em lançamento definitivo.

**Exemplo aplicado à Sunset:** O sistema lê invoice do porto, identifica itens, IVA e número da fatura, mas o usuário revisa antes de contabilizar.

**Decisão sugerida:** OCR e extração criam proposta estruturada com confiança por campo. Nenhum lançamento financeiro, fiscal ou contábil é confirmado sem revisão ou regra expressamente aprovada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-18 — Aplicativo desktop

**O que significa:** Escolher a tecnologia do aplicativo instalado no MacBook e, futuramente, Windows.

**Exemplo aplicado à Sunset:** O usuário abre o ERP por um aplicativo nativo, trabalha offline e sincroniza quando retorna a conexão.

**Decisão sugerida:** Usar Tauri 2 com o mesmo frontend TypeScript, gerando aplicativo para macOS e Windows.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-19 — Banco local do modo offline

**O que significa:** Definir como o desktop guarda dados quando não há internet.

**Exemplo aplicado à Sunset:** O vendedor consulta SKUs e cria um pedido enquanto está sem conexão.

**Decisão sugerida:** Usar SQLite local. Dados sensíveis serão protegidos com criptografia de campos, chave no cofre seguro do sistema operacional e bloqueio por usuário/dispositivo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-20 — Limite funcional do offline

**O que significa:** Definir o que significa dizer que todas as operações funcionam offline.

**Exemplo aplicado à Sunset:** O usuário pode preparar uma factura offline, mas não pode obter CAE da ARCA sem comunicação externa.

**Decisão sugerida:** Toda operação poderá ser capturada offline. Ações que dependem de terceiros ficam em `PENDENTE DE SINCRONIZAÇÃO` ou `PENDENTE DE AUTORIZAÇÃO` e somente se tornam definitivas após resposta online.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-21 — Protocolo de sincronização

**O que significa:** Definir como alterações locais chegam à nuvem e como novidades da nuvem retornam ao desktop.

**Exemplo aplicado à Sunset:** O desktop cria pedido, pagamento e anexo; depois envia apenas as mudanças pendentes, sem baixar o banco inteiro.

**Decisão sugerida:** Usar outbox local, inbox no servidor, sincronização incremental por cursor, lotes, idempotência, confirmação por evento e retomada após interrupção.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-22 — Conflitos de sincronização

**O que significa:** Definir o que acontece quando duas pessoas alteram o mesmo registro antes da sincronização.

**Exemplo aplicado à Sunset:** Um usuário muda a data de entrega offline e outro muda o mesmo pedido online.

**Decisão sugerida:** Eventos append-only podem ser combinados automaticamente. Alterações concorrentes no mesmo campo crítico abrem conflito para revisão manual; nenhuma versão é apagada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-23 — Autenticação online

**O que significa:** Definir como o usuário prova sua identidade.

**Exemplo aplicado à Sunset:** Vendedor entra com sua conta; financeiro e master precisam de proteção adicional.

**Decisão sugerida:** Usar login individual com e-mail ou usuário, senha forte com hash seguro, sessões revogáveis e MFA obrigatório para master, financeiro, tesouraria, fiscal, contabilidade e administradores.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-24 — Login offline e dispositivo confiável

**O que significa:** Definir por quanto tempo o usuário pode entrar no desktop sem consultar o servidor.

**Exemplo aplicado à Sunset:** O MacBook ficou sem internet por dois dias, mas já havia sido autenticado anteriormente.

**Decisão sugerida:** Permitir login offline apenas em dispositivo previamente autorizado, por até 7 dias desde a última validação online. Revogação e bloqueio entram em vigor na próxima conexão; dados locais continuam criptografados.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-25 — Modelo de permissões

**O que significa:** Definir como cargo, setor, carteira, depósito e ação limitam o acesso.

**Exemplo aplicado à Sunset:** Vendedor vê seus clientes; chefe vê a equipe; operador de depósito confirma movimento; master vê tudo.

**Decisão sugerida:** Usar RBAC por papel mais escopos por setor, carteira, depósito e tipo de registro. Separar permissões de visualizar, criar, editar, aprovar, cancelar, reabrir, exportar e fazer override.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-26 — Configurações e segredos

**O que significa:** Separar parâmetros funcionais de informações secretas.

**Exemplo aplicado à Sunset:** Alíquota e etapa podem ser editadas na interface; senha da API da SI Factura não pode aparecer em texto aberto.

**Decisão sugerida:** Parâmetros funcionais terão telas, vigência e auditoria. Segredos serão criptografados, nunca reapresentados integralmente e poderão ser rotacionados por fluxo administrativo seguro.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-27 — Ambientes

**O que significa:** Definir onde o sistema é desenvolvido, testado e usado de verdade.

**Exemplo aplicado à Sunset:** Uma migration deve ser validada em homologação antes de tocar o banco real.

**Decisão sugerida:** Manter ambientes separados de desenvolvimento, homologação e produção, com bancos, chaves, storages e integrações independentes. Dados reais não serão copiados livremente para desenvolvimento.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-28 — Logs, métricas e alertas

**O que significa:** Definir como descobrir falhas antes que o usuário precise avisar.

**Exemplo aplicado à Sunset:** A integração da SI Factura começa a falhar ou a fila de OCR fica parada.

**Decisão sugerida:** Usar logs estruturados, correlation ID, métricas, tracing e alertas para erros, latência, filas, integrações, banco, sync, backup e segurança. Nunca registrar senha, token ou documento sensível em log.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-29 — Backup, restauração e perda de dados

**O que significa:** Transformar RPO próximo de zero e RTO de 40 minutos em uma solução verificável.

**Exemplo aplicado à Sunset:** O banco é corrompido às 11:20; a operação precisa retornar rapidamente e com perda mínima.

**Decisão sugerida:** Habilitar recuperação point-in-time, snapshots automáticos, cópia externa em camadas e teste periódico de restauração. Meta: RPO técnico próximo de zero e serviço crítico restaurado em até 40 minutos.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-30 — Metas de desempenho e escala

**O que significa:** Converter a meta de rapidez em números testáveis por tipo de ação.

**Exemplo aplicado à Sunset:** Abrir cadastro local deve parecer instantâneo, enquanto um balanço completo pode exigir processamento maior.

**Decisão sugerida:** Meta inicial: interação local e cache em até 100 ms; leitura simples de API p95 até 300 ms; gravação transacional p95 até 800 ms; processos longos assíncronos com progresso. Testar pelo menos 70 usuários simultâneos e os volumes já definidos.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO B — QUALIDADE, ENTREGA E GO-LIVE (10 decisões)

## P0-START-31 — Definition of Done

**O que significa:** Definir quando uma tarefa pode ser chamada de pronta.

**Exemplo aplicado à Sunset:** Uma tela bonita não está pronta se não tiver permissão, auditoria, teste e tratamento de erro.

**Decisão sugerida:** Uma feature só é concluída com código revisado, migration, testes, documentação, permissões, auditoria, observabilidade, tratamento de erro, acessibilidade básica e aceite funcional.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-32 — Estratégia de testes automatizados

**O que significa:** Definir quais tipos de testes devem existir desde o começo.

**Exemplo aplicado à Sunset:** A fórmula de landed cost precisa de teste unitário; o fluxo importação→estoque precisa de teste integrado.

**Decisão sugerida:** Exigir testes unitários de domínio, integração com banco, contratos de API e testes ponta a ponta dos fluxos críticos. Priorizar risco, não apenas percentual de cobertura.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-33 — Cobertura dos motores financeiros

**O que significa:** Definir o nível de prova para cálculos que afetam dinheiro, estoque e contabilidade.

**Exemplo aplicado à Sunset:** Câmbio, rateio, margem, IVA, saldo, débito e crédito não podem mudar silenciosamente após uma refatoração.

**Decisão sugerida:** Manter 100% dos cenários críticos catalogados em golden tests com entradas e resultados esperados. Toda alteração exige atualização justificada e aprovada dos resultados.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-34 — Testes de integrações externas

**O que significa:** Definir como testar SI Factura, depósitos, bancos, e-mail e arquivos sem depender sempre do ambiente real.

**Exemplo aplicado à Sunset:** A SI Factura pode responder sucesso, rejeição, timeout ou duplicidade.

**Decisão sugerida:** Criar adapters com mocks e contract tests; manter testes de homologação separados; testar timeout, retentativa, idempotência, rejeição, resposta incompleta e indisponibilidade.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-35 — Testes de segurança

**O que significa:** Definir verificações mínimas antes de cada release.

**Exemplo aplicado à Sunset:** Um vendedor não pode acessar tesouraria mudando a URL ou enviando requisição manual.

**Decisão sugerida:** Executar análise estática, dependências vulneráveis, segredos, autorização, isolamento de dados, upload malicioso e principais riscos web. Falhas críticas bloqueiam produção.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-36 — Testes do modo offline e sincronização

**O que significa:** Definir situações reais de queda de conexão e conflito.

**Exemplo aplicado à Sunset:** Dois notebooks trabalham offline no mesmo pedido, um sincroniza primeiro e outro depois.

**Decisão sugerida:** Testar queda durante gravação, reenvio, duplicidade, ordem fora de sequência, conflito, anexos grandes, sessão expirada, relógio incorreto e reconexão após vários dias.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-37 — Teste de carga e desempenho

**O que significa:** Definir quando a meta de velocidade será comprovada.

**Exemplo aplicado à Sunset:** 70 usuários consultam estoque e criam pedidos enquanto um relatório é processado.

**Decisão sugerida:** Criar teste reproduzível com 70 usuários simultâneos, picos de pedidos, importações de documentos e relatórios. Medir p50, p95, p99, erros, CPU, memória, banco e filas.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-38 — Homologação funcional

**O que significa:** Definir quem executa e quem aprova o UAT, isto é, o teste real de negócio.

**Exemplo aplicado à Sunset:** Um roteiro de importação é executado com documentos e valores semelhantes aos reais.

**Decisão sugerida:** Cada módulo terá um usuário operacional responsável por executar o roteiro; o proprietário do projeto dá o aceite final. Evidências, erros e ressalvas ficam anexados.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-39 — Release, rollback e correção emergencial

**O que significa:** Definir como publicar e voltar à versão anterior.

**Exemplo aplicado à Sunset:** Uma nova versão quebra a reserva de estoque após o deploy.

**Decisão sugerida:** Deploy automático somente após testes; produção com aprovação; migrations compatíveis com rollback ou plano de correção; botão/processo de rollback; hotfix com trilha e revisão posterior.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-40 — Migração e reconciliação inicial

**O que significa:** Definir como provar que cadastros, estoque, bancos e saldos foram carregados corretamente.

**Exemplo aplicado à Sunset:** O Excel informa 1.008 pneus e o ERP carrega 1.006.

**Decisão sugerida:** Toda carga gera totais de origem, destino, rejeições e diferenças. Go-live exige reconciliação assinada de estoque, bancos, contas abertas, clientes, fornecedores, SKUs e saldos contábeis.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO C — P0 DE IMPLEMENTAÇÃO DO PRIMEIRO MÓDULO: COMEX (15 decisões)

Estas perguntas não rediscutem o escopo empresarial já aprovado. Elas transformam COMEX em uma especificação implementável.

## P0-START-41 — Hierarquia dos registros de COMEX

**O que significa:** Definir qual registro é pai de qual registro.

**Exemplo aplicado à Sunset:** Um pedido internacional pode gerar dois embarques, quatro contêineres e dois despachos.

**Decisão sugerida:** Usar a hierarquia: pedido internacional → embarque → contêiner → despacho/destinação → linhas por SKU. Permitir relações muitos-para-muitos quando um despacho reunir mais de um contêiner.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-42 — Tipos de operação separados

**O que significa:** Definir os workflows que não podem ser tratados como sinônimos.

**Exemplo aplicado à Sunset:** Importação definitiva nacionaliza; trânsito move mercadoria sob controle aduaneiro; Zona Primária e Zona Franca têm estados próprios.

**Decisão sugerida:** Criar tipos distintos: importação definitiva, trânsito aduaneiro, operação em Zona Primária Aduaneira e operação em Zona Franca. Compartilhar cadastros e documentos, mas manter estados, validações e encerramentos próprios.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-43 — Estados exatos da importação definitiva

**O que significa:** Definir a máquina de estados principal.

**Exemplo aplicado à Sunset:** A operação passa por pedido, produção, embarque, chegada, despacho, descarga e fechamento.

**Decisão sugerida:** Usar: RASCUNHO → AGUARDANDO APROVAÇÃO → PEDIDO CONFIRMADO → EM PRODUÇÃO → PRONTA PARA EMBARQUE → BOOKING CONFIRMADO → EMBARCADA → EM TRÂNSITO → CHEGADA AO PORTO → EM DESPACHO → LIBERADA → EM TRANSFERÊNCIA → DESCARREGADA → CONFERIDA → ESTOQUE DISPONÍVEL → FECHADA, com estados de CANCELADA e SUSPENSA.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-44 — Transições e responsáveis

**O que significa:** Definir quem pode mover a operação de uma etapa para outra.

**Exemplo aplicado à Sunset:** COMEX confirma embarque; despachante informa oficialização; depósito confirma descarga.

**Decisão sugerida:** Cada transição terá papel responsável, data/hora, evidência e comentário. Integração pode sugerir; usuário autorizado confirma. Master pode override com auditoria, exceto invariantes legais e técnicas.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-45 — Campos mínimos para criar uma operação

**O que significa:** Definir o mínimo para salvar um rascunho e o mínimo para aprovar.

**Exemplo aplicado à Sunset:** No começo pode existir apenas fornecedor e moeda; antes de aprovar é necessário ter SKUs, quantidades e condições.

**Decisão sugerida:** Rascunho exige fornecedor/exportador e tipo de operação. Aprovação exige moeda, Incoterm, condição de pagamento, origem, itens, quantidades, preços, previsão e responsável.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-46 — Documentos obrigatórios por etapa

**O que significa:** Definir em qual momento cada documento passa a ser exigido.

**Exemplo aplicado à Sunset:** Não faz sentido exigir BL antes do embarque, mas não se pode registrar embarque sem documento de transporte ou justificativa.

**Decisão sugerida:** Proforma antes da confirmação; commercial invoice e packing list antes do embarque; booking antes de embarcar; BL após emissão; despacho e comprovantes na fase aduaneira; faturas de gastos antes do fechamento, admitindo pendência controlada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-47 — Leitura automática e revisão dos documentos

**O que significa:** Definir como uma proposta extraída vira dado oficial.

**Exemplo aplicado à Sunset:** OCR identifica invoice `INV-100`, mas lê 295 como 285.

**Decisão sugerida:** Mostrar documento ao lado dos campos extraídos, confiança por campo, divergência contra pedido e botão de aprovar/corrigir. Guardar valor original, valor corrigido, usuário e motivo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-48 — Embarques parciais, saldos e divisão de contêineres

**O que significa:** Definir como controlar o que foi pedido, produzido, embarcado e ainda falta.

**Exemplo aplicado à Sunset:** Pedido de 1.008 unidades: 504 embarcam agora e 504 no mês seguinte.

**Decisão sugerida:** Controlar quantidades pedida, confirmada, produzida, embarcada, chegada, despachada, recebida, cancelada e pendente por SKU. Permitir vários embarques e contêineres sem duplicar o pedido.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-49 — Divergências e exceções

**O que significa:** Definir o tratamento quando documentos ou quantidades não coincidem.

**Exemplo aplicado à Sunset:** Packing list registra 252 unidades e descarga confirma 250.

**Decisão sugerida:** Abrir ocorrência tipificada, calcular diferença, anexar evidências e exigir aprovação para continuar quando o ponto for crítico. Nunca corrigir silenciosamente o documento original.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-50 — Dados do despacho e destinação aduaneira

**O que significa:** Definir os campos mínimos do processo aduaneiro.

**Exemplo aplicado à Sunset:** O despachante informa número IC04, aduana, oficialização, canal, tributos e liberação.

**Decisão sugerida:** Guardar identificador da destinação, aduana, regime, despachante, datas, canal, exigências, documentos, tributos por conceito, pagamentos, garantias, retificações e liberação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-51 — Eventos que alimentam landed cost

**O que significa:** Definir quando um custo fica disponível para rateio.

**Exemplo aplicado à Sunset:** Invoice do porto tem terminal, balança e precinto; IVA e percepções aparecem separados.

**Decisão sugerida:** Cada linha líquida de gasto recebe categoria, fornecedor, documento, moeda, taxa, importação, despacho e contêiner. Tributos recuperáveis ficam separados; componentes elegíveis entram no pool provisório ou definitivo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-52 — Momento em que o estoque fica vendável

**O que significa:** Definir a transição exata entre COMEX e estoque disponível.

**Exemplo aplicado à Sunset:** A mercadoria foi liberada pela aduana, mas ainda não chegou ao depósito nacional.

**Decisão sugerida:** Somente criar saldo vendável após liberação aplicável, transferência, descarga, conferência e confirmação do depósito nacional. Antes disso, mostrar estoque em trânsito ou sob controle aduaneiro.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-53 — COMEX no modo offline

**O que significa:** Definir o que o usuário pode fazer sem internet e o que aguarda sincronização.

**Exemplo aplicado à Sunset:** Usuário anexa packing list e atualiza previsão durante uma viagem sem conexão.

**Decisão sugerida:** Permitir consulta, rascunho, atualização operacional, anexos e ocorrências offline. Oficialização, validação externa, confirmação de integração e fechamento definitivo ficam pendentes até sincronização.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-54 — Painel, alertas e tarefas

**O que significa:** Definir o que o responsável vê ao abrir COMEX.

**Exemplo aplicado à Sunset:** Há contêiner chegando em três dias, documento faltante e prazo de devolução próximo.

**Decisão sugerida:** Exibir operações por estado, ETA, atraso, documentos faltantes, divergências, custos pendentes, contêineres e prazos. Gerar tarefas e alertas configuráveis, sem depender apenas de e-mail.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-55 — Fechamento, reabertura e custos tardios

**O que significa:** Definir quando a importação fecha e como tratar fatos posteriores.

**Exemplo aplicado à Sunset:** A importação foi encerrada e depois chega uma fatura de armazenagem.

**Decisão sugerida:** Fechar quando mercadoria, documentos, contêiner, despacho e conciliações mínimas estiverem completos. Reabertura exige permissão e auditoria. Custo tardio permanece vinculado e segue a regra aprovada de ajuste de estoque e despesa.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# Critério de saída

Após a confirmação destas 55 decisões, o Codex poderá iniciar sem inventar:

- estrutura do repositório;
- frontend, API, desktop, worker e banco;
- autenticação, permissões e auditoria;
- modo offline e sincronização;
- pipelines de qualidade e deploy;
- primeiro fluxo vertical de COMEX.

Decisões P1 e P2 continuarão no backlog e serão tratadas durante a evolução do produto.
