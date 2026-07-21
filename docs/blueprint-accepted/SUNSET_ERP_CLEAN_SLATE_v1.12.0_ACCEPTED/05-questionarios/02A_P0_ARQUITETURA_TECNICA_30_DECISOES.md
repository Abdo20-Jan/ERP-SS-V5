---
version: 1.10.0
status: ACCEPTED
priority: P0
---

# P0 — Arquitetura técnica



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

