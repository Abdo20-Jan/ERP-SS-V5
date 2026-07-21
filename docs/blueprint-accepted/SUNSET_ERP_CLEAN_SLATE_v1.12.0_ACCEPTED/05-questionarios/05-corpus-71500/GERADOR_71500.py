from __future__ import annotations

import csv
import gzip
import hashlib
import json
import os
import re
import shutil
import textwrap
import zipfile
from collections import Counter, defaultdict
from pathlib import Path

SRC_ZIP = Path('/mnt/data/SUNSET_ERP_CLEAN_SLATE_v1.11.0.zip')
WORK = Path('/mnt/data/_erp112_build')
ROOT = WORK / 'SUNSET_ERP_CLEAN_SLATE_v1.12.0'
OUT_ZIP = Path('/mnt/data/SUNSET_ERP_CLEAN_SLATE_v1.12.0.zip')

if WORK.exists():
    shutil.rmtree(WORK)
WORK.mkdir(parents=True)

# Expand source package and rename root.
with zipfile.ZipFile(SRC_ZIP) as zf:
    zf.extractall(WORK / '_src')
src_root = next((WORK / '_src').iterdir())
shutil.copytree(src_root, ROOT)
shutil.rmtree(WORK / '_src')

# -----------------------------------------------------------------------------
# Canonical modules and PR/submodule map (5 submodules and 5 PRs per module).
# The submodule is the stable functional slice; the PR is its implementation slice.
# Their question sets are intentionally different.
# -----------------------------------------------------------------------------
MODULES = [
    {
        'code': 'COMEX', 'name': 'COMEX', 'primary': 'processo de importação',
        'actors': 'analista de COMEX, despachante, agente de cargas, fornecedor e financeiro',
        'action': 'avançar a importação para a próxima etapa',
        'metric': 'dias de ciclo, atrasos, divergências documentais e custo por processo',
        'example': 'um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira',
        'states': 'rascunho, aprovado, em produção, embarcado, em trânsito, arribado, em despacho, nacionalizado e encerrado',
        'docs': 'proforma, commercial invoice, packing list, BL, booking, despacho e comprovantes de gastos',
        'sources': ['DOM-01', 'DOM-04', 'UX-01', 'UX-02', 'UX-03'],
    },
    {
        'code': 'LANDED', 'name': 'Landed cost', 'primary': 'versão de custo de importação',
        'actors': 'COMEX, contabilidade, controladoria e financeiro',
        'action': 'calcular, revisar e aplicar o custo',
        'metric': 'diferença entre custo provisório e definitivo, tempo de fechamento e impacto de custos tardios',
        'example': 'FOB, frete, seguros, porto, despachante, operador e direitos aduaneiros são rateados aos SKUs sem incluir IVA e percepções recuperáveis',
        'states': 'rascunho, provisório, em revisão, aprovado, aplicado, ajustado e reconciliado',
        'docs': 'invoice, faturas locais, despacho, notas de débito/crédito e memória de rateio',
        'sources': ['DOM-05', 'DOM-01', 'DOM-09', 'UX-06', 'UX-07'],
    },
    {
        'code': 'FISCAL', 'name': 'Fiscal', 'primary': 'evento e documento fiscal',
        'actors': 'fiscal, contabilidade, comercial, compras e SI Factura',
        'action': 'validar, autorizar, emitir ou reconciliar o documento fiscal',
        'metric': 'taxa de autorização, rejeições, pendências, divergências e tempo de correção',
        'example': 'uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente',
        'states': 'rascunho, validado, enviado, autorizado, rejeitado, pendente, cancelado e vinculado',
        'docs': 'facturas A/B/C, notas de crédito/débito, remitos, CAE/CAEA e declarações',
        'sources': ['DOM-03', 'ARCH-02', 'UX-06', 'UX-07', 'UX-08'],
    },
    {
        'code': 'ACCOUNTING', 'name': 'Contábil — fundação', 'primary': 'lançamento contábil e saldo por conta',
        'actors': 'contador, controladoria, financeiro e responsáveis dos subledgers',
        'action': 'postar, revisar, estornar ou reconciliar o lançamento',
        'metric': 'lançamentos não balanceados, reconciliações abertas, tempo de fechamento e ajustes manuais',
        'example': 'uma importação em USD mantém a dívida original em USD, registra ARS funcional e apresenta demonstrações em USD pelo câmbio master',
        'states': 'rascunho, validado, aprovado, postado, estornado, reaberto e reconciliado',
        'docs': 'journal, razão, balancete, balanço, DRE, memória cambial e anexos',
        'sources': ['DOM-06', 'DOM-09', 'DOM-05', 'UX-02', 'UX-06'],
    },
    {
        'code': 'INVENTORY', 'name': 'Estoque', 'primary': 'saldo e movimento de estoque',
        'actors': 'logística, operadores de depósito, comercial, COMEX e contabilidade',
        'action': 'receber, reservar, movimentar, liberar ou ajustar estoque',
        'metric': 'acurácia, divergências, disponibilidade, giro, cobertura e tempo de atualização',
        'example': 'o saldo é rastreado por SKU, contêiner e despacho nos depósitos TP_NAC, TP_ZPA, MOR_NAC e MOR_ZPA',
        'states': 'em trânsito, no porto, em depósito fiscal, disponível, reservado, em entrega, avariado e ajustado',
        'docs': 'remito assinado, e-mail de descarga, snapshot do operador, ocorrência e comprovante de ajuste',
        'sources': ['DOM-02', 'DOM-08', 'UX-01', 'UX-03', 'UX-09'],
    },
    {
        'code': 'TREASURY', 'name': 'Tesouraria', 'primary': 'movimento financeiro e posição de caixa',
        'actors': 'tesouraria, financeiro, bancos, fornecedores, clientes e financeiras parceiras',
        'action': 'programar, aprovar, liquidar ou conciliar um movimento',
        'metric': 'posição diária, pagamentos vencidos, recebimentos pendentes, diferenças e previsão de caixa',
        'example': 'a Sunset mantém contas em ARS e USD na Argentina, paga USD ao exterior com câmbio negociado e separa SWIFT e tarifas',
        'states': 'planejado, pendente, aprovado, enviado, liquidado, rejeitado, conciliado e estornado',
        'docs': 'extrato, ordem de pagamento, boleto de câmbio, comprovante, cheque e contrato de empréstimo',
        'sources': ['DOM-04', 'DOM-06', 'DOM-09', 'UX-03', 'UX-06'],
    },
    {
        'code': 'SALES', 'name': 'Comercial', 'primary': 'orçamento, pedido e venda',
        'actors': 'vendedor, gerente comercial, cliente, financeiro, depósito e transportadora',
        'action': 'cotar, aprovar, converter, faturar, liberar ou entregar',
        'metric': 'margem, conversão, desconto, prazo, ticket, entrega e comissão',
        'example': 'o cliente solicita pneus por WhatsApp, recebe orçamento, paga integralmente ou via financeira e só então a mercadoria é liberada',
        'states': 'rascunho, enviado, negociando, aprovado, pedido aberto, faturado, pago, liberado, entregue e cancelado',
        'docs': 'orçamento, pedido, factura, comprovante de pagamento, remito e nota de crédito',
        'sources': ['DOM-07', 'DOM-03', 'UX-01', 'UX-02', 'UX-07'],
    },
    {
        'code': 'PURCHASING', 'name': 'Compras', 'primary': 'requisição e pedido de compra',
        'actors': 'solicitante, chefe do setor, compras, financeiro e fornecedor',
        'action': 'solicitar, cotar, aprovar, pedir, receber ou liquidar',
        'metric': 'tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria',
        'example': 'um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar',
        'states': 'rascunho, solicitado, em cotação, aprovado, pedido, recebido, faturado, pago e encerrado',
        'docs': 'requisição, cotação, pedido, fatura, comprovante de recebimento e contrato',
        'sources': ['DOM-08', 'DOM-09', 'UX-04', 'UX-07', 'UX-10'],
    },
    {
        'code': 'CRM', 'name': 'CRM', 'primary': 'lead, conta e oportunidade',
        'actors': 'vendedor, gerente, representante/comissionista e atendimento',
        'action': 'qualificar, distribuir, contatar, avançar ou converter',
        'metric': 'tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda',
        'example': 'um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento',
        'states': 'novo, atribuído, em contato, qualificado, oportunidade, proposta, ganho, perdido e inativo',
        'docs': 'cadastro, atividades, e-mails, mensagens, proposta, motivo de perda e histórico',
        'sources': ['DOM-09', 'DOM-07', 'UX-03', 'UX-10', 'UX-08'],
    },
    {
        'code': 'CLOSE', 'name': 'Fechamento contábil transversal', 'primary': 'tarefa e pacote de fechamento',
        'actors': 'contabilidade, fiscal, tesouraria, estoque, controladoria e responsáveis dos módulos',
        'action': 'executar, reconciliar, ajustar, aprovar ou fechar o período',
        'metric': 'dias para fechar, tarefas vencidas, diferenças, ajustes e reaberturas',
        'example': 'o fechamento diário, semanal, mensal, semestral, anual e fiscal consolida subledgers e demonstrações com drill-down',
        'states': 'não iniciado, em andamento, bloqueado, em revisão, aprovado, fechado e reaberto',
        'docs': 'checklist, reconciliação, journal, balanço, DRE, fluxo de caixa e pacote gerencial',
        'sources': ['DOM-09', 'DOM-06', 'UX-03', 'UX-06', 'UX-07'],
    },
    {
        'code': 'PLATFORM', 'name': 'Plataforma', 'primary': 'serviço transversal da plataforma',
        'actors': 'usuário final, master, administrador, suporte, API e worker',
        'action': 'autenticar, autorizar, sincronizar, parametrizar ou auditar',
        'metric': 'latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação',
        'example': 'a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline',
        'states': 'ativo, pendente, processando, sincronizado, com conflito, falhou, reprocessado e desativado',
        'docs': 'log, evento de auditoria, parâmetro, contrato de API, job, backup e relatório de incidente',
        'sources': ['ARCH-01', 'ARCH-02', 'UX-08', 'UX-09', 'UX-10'],
    },
    {
        'code': 'COMP', 'name': 'Módulos complementares', 'primary': 'registro complementar de operação e suporte',
        'actors': 'qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria',
        'action': 'registrar, investigar, aprovar, resolver ou acompanhar',
        'metric': 'SLA, reincidência, custo, produtividade, risco e satisfação',
        'example': 'uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito',
        'states': 'novo, em triagem, em análise, aguardando, aprovado, rejeitado, resolvido e encerrado',
        'docs': 'certificado, inspeção, claim, foto, parecer, contrato, ativo e evidência',
        'sources': ['DOM-09', 'ARCH-01', 'UX-02', 'UX-03', 'UX-08'],
    },
    {
        'code': 'QA', 'name': 'Testes, migração e implantação', 'primary': 'caso de teste, lote de migração e release',
        'actors': 'QA, desenvolvedor, owner, usuário homologador, suporte e operações',
        'action': 'testar, reconciliar, aprovar, implantar, reverter ou estabilizar',
        'metric': 'taxa de aprovação, defeitos, cobertura, tempo de cutover, incidentes e recuperação',
        'example': 'um release migra cadastros e saldos, executa testes E2E, valida reconciliação e possui rollback testado antes do go-live',
        'states': 'planejado, preparado, executando, aprovado, reprovado, implantado, revertido e estabilizado',
        'docs': 'plano de teste, evidência, relatório de migração, checklist de cutover, release notes e post-mortem',
        'sources': ['ARCH-01', 'ARCH-02', 'UX-08', 'UX-09', 'DOM-09'],
    },
]
MODULE_BY_CODE = {m['code']: m for m in MODULES}

PRS = [
('PR-COMEX-01','COMEX','Pedido internacional e produção','pedido internacional'),
('PR-COMEX-02','COMEX','Embarque, booking, BL e contêiner','embarque'),
('PR-COMEX-03','COMEX','Despacho e regimes aduaneiros','despacho aduaneiro'),
('PR-COMEX-04','COMEX','Documentos, OCR, ocorrências e prazos','dossiê documental'),
('PR-COMEX-05','COMEX','Recebimento, devolução e fechamento','processo de importação'),
('PR-LANDED-01','LANDED','Catálogo de componentes e elegibilidade','componente de custo'),
('PR-LANDED-02','LANDED','Pools provisórios e documentos','pool de custo'),
('PR-LANDED-03','LANDED','Rateio e simulador','simulação de rateio'),
('PR-LANDED-04','LANDED','Aplicação a estoque e margem','versão de custo'),
('PR-LANDED-05','LANDED','Custos tardios e reconciliação','reconciliação de custo'),
('PR-FISCAL-01','FISCAL','Motor tributário e vigências','regra tributária'),
('PR-FISCAL-02','FISCAL','Emissão SI Factura/ARCA','comprovante fiscal'),
('PR-FISCAL-03','FISCAL','Notas, remitos e contingência','documento fiscal relacionado'),
('PR-FISCAL-04','FISCAL','Percepções, retenções e obrigações','apuração fiscal'),
('PR-FISCAL-05','FISCAL','Reconciliação e auditoria fiscal','reconciliação fiscal'),
('PR-ACCOUNTING-01','ACCOUNTING','Plano de contas e dimensões','conta contábil'),
('PR-ACCOUNTING-02','ACCOUNTING','Motor de lançamentos e journals','lançamento contábil'),
('PR-ACCOUNTING-03','ACCOUNTING','Moedas e diferenças cambiais','posição monetária'),
('PR-ACCOUNTING-04','ACCOUNTING','Livros, períodos e controles','período contábil'),
('PR-ACCOUNTING-05','ACCOUNTING','Razão, balanço, DRE e drill-down','relatório contábil'),
('PR-INVENTORY-01','INVENTORY','Depósitos, posições e disponibilidade','posição de estoque'),
('PR-INVENTORY-02','INVENTORY','Recebimentos e movimentos','movimento de estoque'),
('PR-INVENTORY-03','INVENTORY','Reserva, alocação e FIFO','reserva de estoque'),
('PR-INVENTORY-04','INVENTORY','Sincronização com operadores','snapshot do operador'),
('PR-INVENTORY-05','INVENTORY','Ajustes, perdas e relatórios','ajuste de estoque'),
('PR-TREASURY-01','TREASURY','Contas bancárias e posição de caixa','conta bancária'),
('PR-TREASURY-02','TREASURY','Pagamentos e terceiros pagadores','ordem de pagamento'),
('PR-TREASURY-03','TREASURY','Recebimentos e meios de pagamento','recebimento'),
('PR-TREASURY-04','TREASURY','Câmbio, empréstimos e aportes','operação financeira'),
('PR-TREASURY-05','TREASURY','Conciliação e previsão de caixa','conciliação bancária'),
('PR-SALES-01','SALES','Preço, catálogo e margem','condição comercial'),
('PR-SALES-02','SALES','Orçamento e desconto','orçamento'),
('PR-SALES-03','SALES','Pedido, reserva e disponibilidade','pedido de venda'),
('PR-SALES-04','SALES','Faturamento, pagamento e liberação','liberação comercial'),
('PR-SALES-05','SALES','Entrega, devolução e comissão','entrega comercial'),
('PR-PURCHASING-01','PURCHASING','Requisições e compras emergenciais','requisição de compra'),
('PR-PURCHASING-02','PURCHASING','Cotação e pedido de compra','pedido de compra'),
('PR-PURCHASING-03','PURCHASING','Recebimento de bens e serviços','recebimento de compra'),
('PR-PURCHASING-04','PURCHASING','Fatura e contas a pagar','fatura de fornecedor'),
('PR-PURCHASING-05','PURCHASING','Contratos, reposição e análise','contrato de compra'),
('PR-CRM-01','CRM','Entrada, deduplicação e distribuição de leads','lead'),
('PR-CRM-02','CRM','Contas, contatos e carteira','conta comercial'),
('PR-CRM-03','CRM','Oportunidades, pipeline e forecast','oportunidade'),
('PR-CRM-04','CRM','Atividades, WhatsApp, e-mail e tickets','atividade comercial'),
('PR-CRM-05','CRM','Metas, desempenho e offline','meta comercial'),
('PR-CLOSE-01','CLOSE','Calendário e tarefas de fechamento','tarefa de fechamento'),
('PR-CLOSE-02','CLOSE','Reconciliação de subledgers','reconciliação contábil'),
('PR-CLOSE-03','CLOSE','Provisões, accruals e câmbio','ajuste de fechamento'),
('PR-CLOSE-04','CLOSE','Demonstrações e pacote gerencial','pacote de fechamento'),
('PR-CLOSE-05','CLOSE','Reabertura, auditoria e cockpit','período fechado'),
('PR-PLATFORM-01','PLATFORM','Identidade, RBAC e escopos','usuário e permissão'),
('PR-PLATFORM-02','PLATFORM','Aprovações, override, auditoria e parâmetros','regra de plataforma'),
('PR-PLATFORM-03','PLATFORM','Documentos, OCR, busca e notificações','documento e job'),
('PR-PLATFORM-04','PLATFORM','Desktop offline e sincronização','operação offline'),
('PR-PLATFORM-05','PLATFORM','APIs, jobs, observabilidade e continuidade','serviço de plataforma'),
('PR-COMP-01','COMP','Qualidade e certificações','certificação e inspeção'),
('PR-COMP-02','COMP','Garantia, reclamação e devolução','claim de garantia'),
('PR-COMP-03','COMP','Atendimento e SLA','ticket'),
('PR-COMP-04','COMP','Ativos, manutenção, RH e jurídico','registro administrativo'),
('PR-COMP-05','COMP','BI, KPIs e compliance','definição de KPI'),
('PR-QA-01','QA','Arquitetura de testes e quality gates','execução de teste'),
('PR-QA-02','QA','Migração e reconciliação','lote de migração'),
('PR-QA-03','QA','Release, cutover e rollback','release'),
('PR-QA-04','QA','Carga, segurança, offline e DR','teste não funcional'),
('PR-QA-05','QA','Hypercare, treinamento e incidentes','incidente de go-live'),
]

# 50 capabilities × 10 lenses = 500 questions per unit.
CAPABILITIES = [
('OBJ','objetivo e resultado esperado','definir o resultado observável e o valor entregue'),
('SCOPE','limites de escopo e exclusões','explicitar entradas, saídas e itens fora do escopo'),
('ACTOR','atores e responsabilidades','atribuir owner, executor, aprovador e informado'),
('MDM','dados mestres utilizados','reutilizar cadastros únicos e evitar duplicação'),
('HDR','dados de cabeçalho','mostrar apenas dados de contexto usados em toda a transação'),
('LINE','linhas e detalhamento','usar grid denso com validação por linha e totais fixos'),
('STATE','estados do ciclo de vida','usar máquina de estados explícita e append-only'),
('TRANS','transições e próxima ação','mostrar uma ação primária coerente com o estado'),
('TRIG','gatilhos e eventos','registrar evento de domínio idempotente ao mudar estado'),
('APPR','aprovações e alçadas','separar aprovação, execução e override com histórico'),
('OVR','override do master','permitir exceção de negócio sem quebrar invariantes técnicas'),
('VAL','validações bloqueantes','bloquear apenas inconsistências que tornam o fato inválido'),
('WARN','alertas não bloqueantes','alertar com impacto e permitir continuidade consciente'),
('ERR','erros e recuperação','preservar dados e levar foco ao ponto exato de correção'),
('DOC','documentos obrigatórios','vincular documento original imutável ao evento correto'),
('ATT','anexos e versões','manter versão, hash, origem, tipo e relação com o objeto'),
('OCR','OCR e extração','usar sugestão revisável, nunca postagem cega'),
('SEARCH','busca global e local','buscar por identificadores, contraparte, documento e texto'),
('FILTER','filtros e views salvas','oferecer filtros únicos no topo e variantes pessoais'),
('TABLE','tabela, colunas e ordenação','priorizar informação acionável, densidade e congelamento'),
('DETAIL','página de detalhe','usar cabeçalho resumido, tabs estáveis e painel contextual'),
('CREATE','criação e edição','usar preenchimento progressivo, defaults e salvamento automático'),
('BULK','ações em lote','permitir lote somente quando a regra é homogênea e reportar por item'),
('KEY','atalhos e teclado','permitir navegação e ações frequentes sem mouse'),
('NOTIF','notificações','notificar somente mudança relevante, responsável e próxima ação'),
('TASK','tarefas, SLA e filas','ordenar por urgência, vencimento, impacto e bloqueio'),
('COLLAB','comentários e colaboração','manter comentários contextuais sem substituir dados estruturados'),
('TIME','timeline e histórico','mostrar eventos em ordem, ator, origem e efeito'),
('AUDIT','auditoria','registrar antes/depois, ator, dispositivo, origem e motivo'),
('PERM','permissões','separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar'),
('SOD','segregação de funções','detectar combinações de risco e exigir aprovação independente'),
('OFF','operação offline','permitir rascunho e trabalho local sem inventar fatos externos'),
('SYNC','sincronização','usar fila local, idempotência, status e reprocessamento'),
('CONFLICT','conflitos de sincronização','comparar versões e exigir resolução consciente'),
('API','API e contratos','usar OpenAPI versionado, erros previsíveis e idempotency key'),
('EVENT','eventos e integrações assíncronas','publicar eventos versionados e consumíveis novamente'),
('IDEMP','idempotência e duplicidade','impedir repetição sem ocultar tentativas e resultados'),
('EXT','integrações externas','isolar adapter, timeout, retry, circuit breaker e contingência'),
('CALC','cálculos e fórmulas','versionar fórmula, parâmetros, precisão e memória de cálculo'),
('FX','moeda, câmbio e arredondamento','guardar moeda original, taxa do evento, ARS e USD'),
('ACC','impacto contábil','gerar contrato de postagem balanceado e rastreável'),
('TAX','impacto fiscal','separar base, alíquota, percepção, retenção, crédito e documento'),
('RECON','reconciliação','comparar fontes lado a lado e registrar resolução da diferença'),
('REPORT','relatórios e drill-down','permitir ir do total ao documento e ao evento de origem'),
('KPI','KPIs e alertas','usar indicadores acionáveis com definição, owner e limiar'),
('IO','importação e exportação de dados','validar layout, pré-visualizar e produzir relatório de erros'),
('PERF','desempenho e volume','definir percentil, carga, paginação, índices e limite de lote'),
('SEC','segurança e privacidade','aplicar mínimo privilégio, criptografia e proteção de segredos'),
('TEST','testes e evidências','cobrir happy path, exceções, reversões, permissões e cálculo'),
('MIG','migração, rollout e suporte','usar dry-run, reconciliação, feature flag, rollback e hypercare'),
]
assert len(CAPABILITIES) == 50

LENSES = {
    'MODULE': [
        ('ESC','escopo estratégico','Como este tema deve ser definido no nível do módulo para evitar sobreposição com outros módulos?'),
        ('OWN','ownership e governança','Quem deve ser responsável, quem executa e quem aprova este tema no módulo?'),
        ('FLOW','fluxo ponta a ponta','Como este tema participa do fluxo ponta a ponta e quais módulos vêm antes e depois?'),
        ('DATA','dados e fonte da verdade','Qual é a fonte da verdade, quais dados mínimos existem e quem pode alterá-los?'),
        ('RULE','regra e parametrização','Qual regra padrão deve ser sugerida e quais parâmetros podem ser alterados pela interface?'),
        ('UX','layout e experiência','Qual layout reduz cliques e torna o estado e a próxima ação óbvios?'),
        ('AUTO','automação e tempo','O que deve ser automatizado, pré-preenchido ou executado em lote para economizar tempo?'),
        ('CTRL','controle, risco e auditoria','Quais riscos, permissões, aprovações e evidências devem existir?'),
        ('MET','métrica e observabilidade','Como medir qualidade, velocidade, exceções e adoção deste tema?'),
        ('ACC','aceite e evolução','Qual critério torna este tema aceito e como evoluí-lo sem quebrar histórico?'),
    ],
    'SUBMODULE': [
        ('TRG','gatilho e entrada','Qual evento inicia este tema e quais pré-condições mínimas devem existir?'),
        ('FLD','campos e defaults','Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?'),
        ('STA','estado e ação','Quais estados existem e qual ação primária aparece em cada um?'),
        ('EXC','exceções e reversões','Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?'),
        ('BUL','lote e produtividade','Quais operações em lote, importações ou atalhos são seguras e úteis?'),
        ('ROL','papéis e aprovação','Quem visualiza, cria, altera, aprova, executa, cancela e reabre?'),
        ('UI','tela e navegação','Como lista, detalhe, formulário, anexos e histórico devem ser organizados?'),
        ('AUT','automação e sugestão','O que o sistema deve sugerir, calcular ou validar automaticamente?'),
        ('INT','integração e offline','Como APIs, eventos, sincronização e contingência devem funcionar?'),
        ('TST','teste e aceite','Quais cenários e evidências provam que este tema funciona?'),
    ],
    'PR': [
        ('SCP','escopo do PR','Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?'),
        ('ARC','arquitetura e componentes','Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?'),
        ('DB','modelo de dados e migration','Quais tabelas, colunas, índices, constraints e migrations são necessárias?'),
        ('API','API, eventos e erros','Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?'),
        ('UI','layout, estados visuais e teclado','Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?'),
        ('VAL','validação, segurança e auditoria','Quais validações, permissões, logs e proteções devem ser comprovadas?'),
        ('NFR','desempenho, offline e resiliência','Quais SLAs, limites, retries, filas e cenários offline devem ser testados?'),
        ('TST','testes e evidências','Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?'),
        ('ROL','rollout, compatibilidade e rollback','Como liberar, migrar, ativar por feature flag e reverter sem perda?'),
        ('REV','revisão e definição de pronto','Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?'),
    ],
}

LAYOUTS = {
    'OBJ': ('LAY-02','Object Page densa'), 'SCOPE': ('LAY-12','Admin Console'),
    'ACTOR': ('LAY-13','Matriz de responsabilidades'), 'MDM': ('LAY-01','List Report denso'),
    'HDR': ('LAY-02','Object Page densa'), 'LINE': ('LAY-07','Editable Data Grid'),
    'STATE': ('LAY-09','Timeline e status'), 'TRANS': ('LAY-02','Object Page densa'),
    'TRIG': ('LAY-09','Timeline e status'), 'APPR': ('LAY-03','Worklist de aprovações'),
    'OVR': ('LAY-08','Review & Confirm'), 'VAL': ('LAY-08','Review & Confirm'),
    'WARN': ('LAY-14','Painel contextual de exceções'), 'ERR': ('LAY-15','Resumo de erros + campos'),
    'DOC': ('LAY-16','Visualizador documental lado a lado'), 'ATT': ('LAY-16','Visualizador documental lado a lado'),
    'OCR': ('LAY-17','Documento + extração revisável'), 'SEARCH': ('LAY-18','Busca global com command palette'),
    'FILTER': ('LAY-01','List Report denso'), 'TABLE': ('LAY-01','List Report denso'),
    'DETAIL': ('LAY-02','Object Page densa'), 'CREATE': ('LAY-04','Wizard curto'),
    'BULK': ('LAY-07','Editable Data Grid'), 'KEY': ('LAY-18','Command palette e atalhos'),
    'NOTIF': ('LAY-14','Painel contextual de exceções'), 'TASK': ('LAY-03','Worklist de tarefas'),
    'COLLAB': ('LAY-14','Painel contextual'), 'TIME': ('LAY-09','Timeline e status'),
    'AUDIT': ('LAY-09','Timeline e auditoria'), 'PERM': ('LAY-12','Admin Console'),
    'SOD': ('LAY-13','Matriz de responsabilidades'), 'OFF': ('LAY-19','Central offline'),
    'SYNC': ('LAY-19','Central offline'), 'CONFLICT': ('LAY-06','Workspace de reconciliação'),
    'API': ('LAY-12','Admin Console técnico'), 'EVENT': ('LAY-12','Admin Console técnico'),
    'IDEMP': ('LAY-06','Workspace de reconciliação'), 'EXT': ('LAY-20','Cockpit de integrações'),
    'CALC': ('LAY-21','Simulador e memória de cálculo'), 'FX': ('LAY-21','Simulador e memória de cálculo'),
    'ACC': ('LAY-22','Razão e drill-down'), 'TAX': ('LAY-23','Tax workspace'),
    'RECON': ('LAY-06','Workspace de reconciliação'), 'REPORT': ('LAY-24','Relatório com drill-down'),
    'KPI': ('LAY-11','Dashboard operacional'), 'IO': ('LAY-25','Importação assistida'),
    'PERF': ('LAY-26','Painel de performance'), 'SEC': ('LAY-12','Admin Console'),
    'TEST': ('LAY-27','Test cockpit'), 'MIG': ('LAY-28','Cutover cockpit'),
}

SOURCE_REGISTRY = {
'UX-01': ('SAP Fiori — List Report', 'https://experience.sap.com/fiori-design-web/list-report-header-sap-fiori-elements/', 'listas extensas, filtros únicos, variantes e tabelas personalizáveis'),
'UX-02': ('SAP Fiori — Object Page', 'https://www.sap.com/design-system/fiori-design-web/page-types/floorplans/object-page/', 'objetos complexos com cabeçalho, ações, tabs e conteúdo responsivo'),
'UX-03': ('SAP Fiori — Worklist', 'https://experience.sap.com/fiori-design-web/work-list/', 'filas acionáveis ordenadas por prioridade e próxima ação'),
'UX-04': ('SAP Fiori — Wizard', 'https://experience.sap.com/fiori-design-web/wizard/', 'tarefas longas ou pouco familiares divididas em passos e revisão'),
'UX-05': ('SAP Fiori — Dynamic Side Content', 'https://experience.sap.com/fiori-design-web/dynamic-side-content-web-component/', 'painel auxiliar sem tirar o usuário do contexto'),
'UX-06': ('GOV.UK — Error Summary', 'https://design-system.service.gov.uk/components/error-summary/', 'erros no topo e junto ao campo com link para correção'),
'UX-07': ('GOV.UK — Check Answers', 'https://design-system.service.gov.uk/patterns/check-answers/', 'revisão antes de operações críticas'),
'UX-08': ('W3C — WCAG 2.2', 'https://www.w3.org/WAI/WCAG22/Understanding/', 'teclado, foco, contraste, status e semântica'),
'UX-09': ('WAI-ARIA APG', 'https://www.w3.org/WAI/ARIA/apg/patterns/', 'grids, comboboxes, diálogos e navegação por teclado'),
'UX-10': ('Microsoft Business Process Catalog', 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/about', 'processos hierárquicos, fluxos, dados e testes estruturados'),
'DOM-01': ('WCO Data Model', 'https://www.wcoomd.org/DataModel', 'dados harmonizados e reutilizáveis de importação, exportação e trânsito'),
'DOM-02': ('GS1 Traceability', 'https://www.gs1.org/standards/traceability', 'eventos de rastreabilidade por objeto, tempo, local e motivo'),
'DOM-03': ('ARCA — Webservices de factura electrónica', 'https://www.arca.gob.ar/ws/documentacion/ws-factura-electronica.asp', 'contratos oficiais de autorização e tipos de comprovante'),
'DOM-04': ('BCRA — Normativa de Exterior y Cambios', 'https://www.bcra.gob.ar/normativa-de-exterior-y-cambios/', 'documentação, conceito, banco interveniente e câmbio pactuado'),
'DOM-05': ('IFRS — IAS 2 Inventories', 'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/', 'custo do estoque e fórmulas de atribuição'),
'DOM-06': ('IFRS — IAS 21', 'https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/', 'moeda funcional, estrangeira e de apresentação'),
'DOM-07': ('Microsoft — Order to cash', 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/order-to-cash-introduction', 'pedido até recebimento e liquidação'),
'DOM-08': ('Microsoft — Source to pay / Inventory to deliver', 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/source-to-pay-introduction', 'requisição, compra, fatura, pagamento, recebimento e estoque'),
'DOM-09': ('Microsoft — Record to report', 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/record-to-report-introduction', 'registro, análise, reconciliação, fechamento e demonstrações'),
'ARCH-01': ('NIST SSDF SP 800-218', 'https://csrc.nist.gov/pubs/sp/800/218/final', 'práticas de desenvolvimento seguro integradas ao ciclo'),
'ARCH-02': ('OpenAPI Specification', 'https://spec.openapis.org/oas/latest.html', 'contratos HTTP versionados, legíveis e testáveis'),
}

# Add common UX/security sources by capability.
def sources_for(module, cap_code, level):
    base = list(module['sources'])
    if cap_code in {'TABLE','FILTER','SEARCH','BULK','IO','REPORT'}: base += ['UX-01','UX-09']
    if cap_code in {'DETAIL','HDR','LINE','TIME'}: base += ['UX-02']
    if cap_code in {'TASK','APPR','NOTIF'}: base += ['UX-03']
    if cap_code in {'CREATE','VAL'}: base += ['UX-04','UX-06','UX-07']
    if cap_code in {'ERR','WARN'}: base += ['UX-06','UX-08']
    if cap_code in {'KEY','SEC','PERM','SOD'}: base += ['UX-08','UX-09','ARCH-01']
    if cap_code in {'API','EVENT','IDEMP','EXT'}: base += ['ARCH-02','ARCH-01']
    if cap_code in {'TEST','MIG','PERF'}: base += ['ARCH-01']
    # stable order and max 7
    out=[]
    for x in base:
        if x not in out: out.append(x)
    return out[:7]

ANGLE_RECOMMENDATIONS = {
'MODULE': {
'ESC':'Manter uma fronteira única e documentada; dependências entram por contratos e eventos, não por duplicação de lógica.',
'OWN':'Usar RACI simples, owner único e substituto; nenhuma responsabilidade crítica pode ficar implícita.',
'FLOW':'Desenhar o fluxo ponta a ponta com entrada, estado, próxima ação, saída, exceções e efeitos nos subledgers.',
'DATA':'Definir fonte da verdade, vigência, histórico e regra de deduplicação; dados transacionais não são apagados.',
'RULE':'Parametrizar pela interface com versão, vigência, comparação antes/depois e publicação controlada.',
'UX':'Adotar layout desktop-first, denso e tabular, com uma ação primária, tabs horizontais e painel lateral contextual.',
'AUTO':'Pré-preencher dados confiáveis, sugerir decisões revisáveis, permitir lote e evitar recaptura do mesmo dado.',
'CTRL':'Aplicar mínimo privilégio, dupla aprovação quando definida, override auditado e invariantes técnicas inegociáveis.',
'MET':'Exibir métricas acionáveis, owner, meta, limiar, tendência e drill-down até o evento de origem.',
'ACC':'Exigir critério mensurável, teste, evidência, rollback e compatibilidade com histórico antes de aceitar.',
},
'SUBMODULE': {
'TRG':'Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato.',
'FLD':'Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete.',
'STA':'Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio.',
'EXC':'Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original.',
'BUL':'Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos.',
'ROL':'Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar.',
'UI':'Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas.',
'AUT':'Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo.',
'INT':'Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois.',
'TST':'Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade.',
},
'PR': {
'SCP':'Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags.',
'ARC':'Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais.',
'DB':'Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva.',
'API':'Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato.',
'UI':'Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita.',
'VAL':'Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada.',
'NFR':'Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura.',
'TST':'Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR.',
'ROL':'Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge.',
'REV':'Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação.',
}}

CAP_SPECIFIC = {
'OBJ':'resultado observável, usuário beneficiado e impacto', 'SCOPE':'fronteiras, entradas, saídas e exclusões',
'ACTOR':'responsabilidades, substituição e escalonamento', 'MDM':'identidade, vigência, deduplicação e ownership',
'HDR':'identificação, contexto, estado, contraparte, valor e datas', 'LINE':'colunas, quantidades, valores, impostos, validações e totais',
'STATE':'máquina de estados, invariantes e transições permitidas', 'TRANS':'ação primária, pré-condição, efeito e reversibilidade',
'TRIG':'evento, origem, timestamp, correlação e idempotência', 'APPR':'alçada, sequência, aprovadores, timeout e delegação',
'OVR':'motivo, escopo, autoridade, histórico e revisão posterior', 'VAL':'campos, documentos, saldos, limites e consistência',
'WARN':'impacto, severidade, responsável e prazo de regularização', 'ERR':'mensagem acionável, preservação dos dados e reprocessamento',
'DOC':'tipo, número, emissor, data, vigência, status e vínculo', 'ATT':'arquivo original, hash, versão, classificação e retenção',
'OCR':'campos extraídos, confiança, comparação e revisão humana', 'SEARCH':'identificadores, texto, documento, contraparte e atalhos',
'FILTER':'estado, período, responsável, exceção, moeda e depósito', 'TABLE':'colunas congeladas, densidade, ordenação, totais e personalização',
'DETAIL':'cabeçalho, tabs, resumo, histórico, anexos e ações', 'CREATE':'passos, defaults, salvamento, validação progressiva e revisão',
'BULK':'seleção, pré-validação, execução, resultado por item e desfazer', 'KEY':'tab order, enter, escape, busca, salvar e ações frequentes',
'NOTIF':'evento, destinatário, canal, prioridade, deduplicação e leitura', 'TASK':'fila, prioridade, SLA, owner, dependência e escalonamento',
'COLLAB':'comentário, menção, anexo, decisão e vínculo ao evento', 'TIME':'sequência, ator, origem, estado, documento e efeito',
'AUDIT':'antes/depois, regra, ator, dispositivo, origem, motivo e correlação', 'PERM':'papel, escopo, ação, condição, vigência e delegação',
'SOD':'combinações incompatíveis, exceção, aprovação e relatório', 'OFF':'cache, rascunho, fila, limitação, expiração e indicação visual',
'SYNC':'ordem, retry, idempotência, status, conflito e reprocessamento', 'CONFLICT':'versões, diferenças, escolha, merge, responsável e evidência',
'API':'recursos, operações, schemas, erros, paginação e versionamento', 'EVENT':'nome, payload, versão, producer, consumer e replay',
'IDEMP':'chave, janela, resultado anterior, concorrência e auditoria', 'EXT':'adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência',
'CALC':'fórmula, parâmetros, base, precisão, arredondamento e versão', 'FX':'moeda original, taxa, fonte, data, ARS, USD e diferença',
'ACC':'contas, dimensões, débito, crédito, data, reversão e origem', 'TAX':'jurisdição, base, alíquota, percepção, retenção, crédito e vigência',
'RECON':'fontes, chave de match, tolerância, diferença, resolução e aprovação', 'REPORT':'filtros, hierarquia, total, drill-down, exportação e agendamento',
'KPI':'definição, fórmula, owner, meta, limiar, tendência e ação', 'IO':'template, encoding, versão, prévia, validação, erro e rollback',
'PERF':'p95/p99, volume, paginação, índice, cache, fila e teste de carga', 'SEC':'autenticação, autorização, segredo, criptografia, retenção e incidente',
'TEST':'dados, cenário, precondição, ação, resultado, evidência e regressão', 'MIG':'origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare',
}

LAYOUT_GUIDANCE = {
'LAY-01':'Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.',
'LAY-02':'Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.',
'LAY-03':'Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.',
'LAY-04':'Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.',
'LAY-06':'Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.',
'LAY-07':'Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.',
'LAY-08':'Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.',
'LAY-09':'Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.',
'LAY-11':'KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.',
'LAY-12':'Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.',
'LAY-13':'Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.',
'LAY-14':'Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.',
'LAY-15':'Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.',
'LAY-16':'Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.',
'LAY-17':'Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.',
'LAY-18':'Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.',
'LAY-19':'Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.',
'LAY-20':'Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.',
'LAY-21':'Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.',
'LAY-22':'Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.',
'LAY-23':'Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.',
'LAY-24':'Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.',
'LAY-25':'Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.',
'LAY-26':'p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.',
'LAY-27':'Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.',
'LAY-28':'Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.',
}

# Ensure all files use current version marker.
for p in ROOT.rglob('*.md'):
    txt = p.read_text(encoding='utf-8')
    txt = txt.replace('version: 1.11.0', 'version: 1.12.0').replace('v1.11.0', 'v1.12.0')
    p.write_text(txt, encoding='utf-8')

CORPUS = ROOT / '05-questionarios' / '05-corpus-71500'
MODULE_DIR = CORPUS / '01-modulos'
SUB_DIR = CORPUS / '02-submodulos'
PR_DIR = CORPUS / '03-prs'
for d in [MODULE_DIR, SUB_DIR, PR_DIR]: d.mkdir(parents=True, exist_ok=True)

# Source and method docs.
source_lines = ['# Fontes e princípios do corpus de 71.500 perguntas','',
'As sugestões são orientações de discovery e desenho. Regras legais, fiscais e contábeis precisam ser validadas na vigência de implantação. As perguntas usam os IDs abaixo para registrar a base de cada recomendação.','']
for sid,(name,url,use) in SOURCE_REGISTRY.items():
    source_lines += [f'## {sid} — {name}', f'- **Fonte:** {url}', f'- **Uso no corpus:** {use}.','']
(CORPUS/'00_FONTES_E_PRINCIPIOS.md').write_text('\n'.join(source_lines),encoding='utf-8')

layout_lines = ['# Catálogo de layouts — Sunset ERP','',
'## Direção visual obrigatória','',
'- Desktop-first, denso e operacional, com navegação horizontal e tabs.',
'- Tabelas fortes, colunas congeladas e comportamento semelhante a Excel/ERP.',
'- Cores corporativas discretas, sombras mínimas, botões pequenos com texto e badges de status.',
'- Sidebar apenas como painel contextual, nunca como navegação principal permanente.',
'- Uma ação primária por contexto; atalhos de teclado para tarefas recorrentes.',
'- Mobile oferece tarefas críticas simplificadas, sem tentar reproduzir grids complexos.','']
for lid in sorted(LAYOUT_GUIDANCE, key=lambda x:int(x.split('-')[1])):
    layout_lines += [f'## {lid}', LAYOUT_GUIDANCE[lid],'']
(CORPUS/'01_CATALOGO_LAYOUTS_ERP_DENSO.md').write_text('\n'.join(layout_lines),encoding='utf-8')

method = f'''# Método e contagem — 500 por módulo, 500 por submódulo e 500 por PR

## Escopo literal aplicado

- 13 módulos × 500 = 6.500 perguntas;
- 65 submódulos × 500 = 32.500 perguntas;
- 65 PRs × 500 = 32.500 perguntas;
- **total = 71.500 perguntas**.

Cada módulo possui cinco submódulos funcionais. Cada submódulo possui um PR inicial correspondente, mas os questionários são diferentes:

- **módulo:** decisões transversais, fronteiras, governança, integração e experiência global;
- **submódulo:** workflow funcional, estados, dados, exceções, tela, automação e aceite;
- **PR:** arquitetura, código, migrations, API, UI, testes, rollout, observabilidade e checklist de merge.

## Estrutura de cada pergunta

1. pergunta decisória;
2. sugestão recomendada;
3. exemplo aplicado à Sunset;
4. layout sugerido;
5. ganho de UX e otimização de tempo;
6. critério de aceite;
7. referências-base;
8. campo para confirmar ou alterar.

## Regra de uso

A confirmação pode ocorrer por arquivo, bloco, capacidade ou pergunta. Uma sugestão aceita vira requisito; uma sugestão alterada substitui a recomendação original. O corpus não deve ser enviado inteiro a um único agente de código: o índice deve selecionar apenas o módulo, submódulo ou PR em execução.
'''
(CORPUS/'02_METODO_E_CONTAGEM.md').write_text(method,encoding='utf-8')

# Helpers.
def safe_slug(s):
    s = s.upper().replace('Ç','C').replace('Ã','A').replace('Á','A').replace('À','A').replace('Â','A').replace('É','E').replace('Ê','E').replace('Í','I').replace('Ó','O').replace('Ô','O').replace('Õ','O').replace('Ú','U')
    s = re.sub(r'[^A-Z0-9]+','_',s).strip('_')
    return s

def make_question(level, unit_id, unit_name, module, subject, pr_id, cap, lens, seq):
    cap_code, cap_name, cap_rec = cap
    lens_code, lens_name, lens_question = lens
    layout_id, layout_name = LAYOUTS[cap_code]
    details = CAP_SPECIFIC[cap_code]
    level_label = {'MODULE':'módulo','SUBMODULE':'submódulo','PR':'PR'}[level]
    qid = f'{unit_id}-Q{seq:04d}'
    question = f'Como **{cap_name}** deve ser definido no {level_label} **{unit_name}** sob a perspectiva de **{lens_name}**? {lens_question}'
    recommendation = f"{ANGLE_RECOMMENDATIONS[level][lens_code]} Para **{subject}**, cobrir {details}. {cap_rec.capitalize()}."
    example = f"No cenário Sunset, {module['example']}. A decisão sobre **{cap_name}** deve permitir que {module['actors']} executem **{module['action']}** sem recapturar dados e com rastreabilidade."
    ux = f"Aplicar {layout_id} reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro."
    acceptance = f"Homologação comprova {details}; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando {module['metric']}."
    sources = sources_for(module, cap_code, level)
    return {
        'id': qid, 'level': level, 'unit_id': unit_id, 'unit_name': unit_name,
        'module_code': module['code'], 'module': module['name'], 'submodule': unit_name if level!='MODULE' else None,
        'pr': pr_id, 'capability_code': cap_code, 'capability': cap_name,
        'lens_code': lens_code, 'lens': lens_name, 'question': question,
        'recommendation': recommendation, 'example': example,
        'layout_id': layout_id, 'layout': layout_name, 'layout_guidance': LAYOUT_GUIDANCE[layout_id],
        'ux_time_rationale': ux, 'acceptance': acceptance, 'sources': sources,
    }

def write_unit(path, level, unit_id, unit_name, module, subject, pr_id=None):
    title_level = {'MODULE':'Módulo','SUBMODULE':'Submódulo','PR':'PR'}[level]
    questions=[]
    n=0
    for cap in CAPABILITIES:
        for lens in LENSES[level]:
            n += 1
            questions.append(make_question(level, unit_id, unit_name, module, subject, pr_id, cap, lens, n))
    assert len(questions)==500
    lines = ['---',f'id: {unit_id}',f'level: {level}',f'title: {title_level} — {unit_name}',
             'status: ACTIVE','version: 1.12.0','questions: 500','---','',
             f'# {title_level} — {unit_name} — 500 perguntas','',
             f'**Módulo:** {module["name"]}',f'**Objeto central:** {subject}',
             f'**Atores principais:** {module["actors"]}',f'**Estados de referência:** {module["states"]}',
             f'**Documentos de referência:** {module["docs"]}','',
             '> Cada pergunta contém uma sugestão. Responda `CONFIRMO` quando a recomendação estiver correta ou substitua somente a exceção.','']
    current_cap=None
    for q in questions:
        if q['capability_code'] != current_cap:
            current_cap=q['capability_code']
            lines += [f'## {current_cap} — {q["capability"].capitalize()}','']
        lines += [
            f'### {q["id"]} — {q["lens"].capitalize()}',
            '',
            f'**Pergunta:** {q["question"]}',
            '',
            f'- **Sugestão recomendada:** {q["recommendation"]}',
            f'- **Exemplo Sunset:** {q["example"]}',
            f'- **Layout sugerido:** `{q["layout_id"]} — {q["layout"]}`. {q["layout_guidance"]}',
            f'- **Otimização de tempo e UX:** {q["ux_time_rationale"]}',
            f'- **Critério de aceite:** {q["acceptance"]}',
            f'- **Base de referência:** {", ".join(q["sources"])}',
            f'- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________',
            ''
        ]
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text('\n'.join(lines),encoding='utf-8')
    return questions

all_questions=[]
index_rows=[]
unit_rows=[]
# Modules.
for m in MODULES:
    uid=f'M-{m["code"]}'
    path=MODULE_DIR/m['code']/f'{uid}_500_PERGUNTAS.md'
    qs=write_unit(path,'MODULE',uid,m['name'],m,m['primary'])
    all_questions += qs
    unit_rows.append({'level':'MODULE','unit_id':uid,'module':m['name'],'name':m['name'],'questions':500,'path':str(path.relative_to(ROOT))})
# Submodules and PRs.
sub_count=defaultdict(int)
for pr_id,code,title,obj in PRS:
    m=MODULE_BY_CODE[code]
    sub_count[code]+=1
    sm_id=f'SM-{code}-{sub_count[code]:02d}'
    sm_path=SUB_DIR/code/f'{sm_id}_{safe_slug(title)}_500_PERGUNTAS.md'
    qs=write_unit(sm_path,'SUBMODULE',sm_id,title,m,obj,pr_id)
    all_questions += qs
    unit_rows.append({'level':'SUBMODULE','unit_id':sm_id,'module':m['name'],'name':title,'questions':500,'path':str(sm_path.relative_to(ROOT)),'linked_pr':pr_id})
    pr_path=PR_DIR/code/f'{pr_id}_{safe_slug(title)}_500_PERGUNTAS.md'
    qs=write_unit(pr_path,'PR',pr_id,title,m,obj,pr_id)
    all_questions += qs
    unit_rows.append({'level':'PR','unit_id':pr_id,'module':m['name'],'name':title,'questions':500,'path':str(pr_path.relative_to(ROOT)),'linked_submodule':sm_id})

# Machine-readable corpus and indexes.
jsonl_path=CORPUS/'QUESTOES_71500.jsonl.gz'
with gzip.open(jsonl_path,'wt',encoding='utf-8') as f:
    for q in all_questions:
        f.write(json.dumps(q,ensure_ascii=False,separators=(',',':'))+'\n')

with open(CORPUS/'UNIDADES_143.csv','w',newline='',encoding='utf-8-sig') as f:
    fields=['level','unit_id','module','name','questions','path','linked_pr','linked_submodule']
    w=csv.DictWriter(f,fieldnames=fields)
    w.writeheader()
    for r in unit_rows:
        w.writerow({k:r.get(k,'') for k in fields})

with open(CORPUS/'INDICE_QUESTOES_71500.csv','w',newline='',encoding='utf-8-sig') as f:
    fields=['id','level','unit_id','module','submodule','pr','capability_code','capability','lens_code','lens','layout_id']
    w=csv.DictWriter(f,fieldnames=fields)
    w.writeheader()
    for q in all_questions:
        w.writerow({k:q.get(k,'') or '' for k in fields})

# Master navigation docs by module.
by_module=defaultdict(list)
for r in unit_rows: by_module[r['module']].append(r)
master=['# Índice mestre — 71.500 perguntas','',
'Este índice aponta para 13 arquivos de módulo, 65 arquivos de submódulo e 65 arquivos de PR. Não carregue o corpus inteiro no contexto do Codex; selecione a unidade em execução.','',
'| Nível | Unidades | Perguntas por unidade | Total |','|---|---:|---:|---:|',
'| Módulos | 13 | 500 | 6.500 |','| Submódulos | 65 | 500 | 32.500 |','| PRs | 65 | 500 | 32.500 |','| **Total** | **143** |  | **71.500** |','']
for m in MODULES:
    master += [f'## {m["name"]}','', '| Nível | ID | Unidade | Arquivo |','|---|---|---|---|']
    for r in by_module[m['name']]:
        rel = Path(r['path']).relative_to('05-questionarios/05-corpus-71500')
        master.append(f'| {r["level"]} | `{r["unit_id"]}` | {r["name"]} | [{Path(r["path"]).name}]({rel.as_posix()}) |')
    master.append('')
(CORPUS/'03_INDICE_MESTRE_71500.md').write_text('\n'.join(master),encoding='utf-8')

# Validation.
ids=[q['id'] for q in all_questions]
question_texts=[q['question'] for q in all_questions]
level_counts=Counter(q['level'] for q in all_questions)
assert len(all_questions)==71500, len(all_questions)
assert len(set(ids))==71500
assert len(unit_rows)==143
assert Counter(r['level'] for r in unit_rows)==Counter({'PR':65,'SUBMODULE':65,'MODULE':13})
assert all(r['questions']==500 for r in unit_rows)
# Because unit names are embedded, all question strings should be unique as well.
assert len(set(question_texts))==71500, f'duplicate question texts: {71500-len(set(question_texts))}'

manifest={
    'version':'1.12.0','modules':13,'submodules':65,'prs':65,'questions_per_unit':500,
    'module_questions':6500,'submodule_questions':32500,'pr_questions':32500,'total_questions':71500,
    'unit_files':143,'jsonl_gzip':str(jsonl_path.relative_to(ROOT)),
    'sha256_jsonl_gzip':hashlib.sha256(jsonl_path.read_bytes()).hexdigest(),
    'level_counts':dict(level_counts),
}
(CORPUS/'MANIFEST_71500.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')

validation=f'''# Validação do corpus de 71.500 perguntas

- módulos: **13**;
- submódulos: **65**;
- PRs: **65**;
- arquivos de questionário: **143**;
- perguntas em cada arquivo: **500**;
- perguntas de módulo: **6.500**;
- perguntas de submódulo: **32.500**;
- perguntas de PR: **32.500**;
- total: **71.500**;
- IDs únicos: **71.500**;
- textos de pergunta únicos: **71.500**;
- SHA-256 do JSONL compactado: `{manifest['sha256_jsonl_gzip']}`.

A validação não afirma que todas as sugestões já são requisitos aprovados. Cada sugestão precisa ser confirmada ou alterada no Q&A.
'''
(CORPUS/'04_VALIDACAO_71500.md').write_text(validation,encoding='utf-8')

# Generator source for reproducibility.
shutil.copy2(Path(__file__), CORPUS/'GERADOR_71500.py')

# Update README with clear correction.
readme = ROOT/'README.md'
old=readme.read_text(encoding='utf-8') if readme.exists() else ''
intro=f'''# SUNSET ERP Clean-Slate v1.12.0

## Corpus literal de discovery

Esta versão corrige a interpretação anterior. O pacote contém:

- **500 perguntas para cada um dos 13 módulos**;
- **500 perguntas para cada um dos 65 submódulos**;
- **500 perguntas para cada um dos 65 PRs**;
- **71.500 perguntas no total**.

Início: `05-questionarios/05-corpus-71500/03_INDICE_MESTRE_71500.md`.

Cada pergunta inclui sugestão, exemplo Sunset, layout, ganho de UX/tempo, critério de aceite, referências e campo de resposta. O estilo visual sugerido é desktop-first, denso, tabular e operacional.

---

'''
readme.write_text(intro+old,encoding='utf-8')

# Compact zip.
if OUT_ZIP.exists(): OUT_ZIP.unlink()
with zipfile.ZipFile(OUT_ZIP,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=9) as z:
    for p in sorted(ROOT.rglob('*')):
        if p.is_file():
            z.write(p, p.relative_to(WORK))

# Test zip and output summary.
with zipfile.ZipFile(OUT_ZIP) as z:
    bad=z.testzip()
    assert bad is None, bad

print(json.dumps({
    'root':str(ROOT),'zip':str(OUT_ZIP),'zip_size':OUT_ZIP.stat().st_size,
    'files':sum(1 for p in ROOT.rglob('*') if p.is_file()),
    **manifest
},ensure_ascii=False,indent=2))
