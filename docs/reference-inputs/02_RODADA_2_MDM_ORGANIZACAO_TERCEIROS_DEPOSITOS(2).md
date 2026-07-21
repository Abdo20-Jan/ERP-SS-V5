---
id: QA-ROUND-002
title: Rodada 2 — MDM, organização, terceiros, depósitos e SKUs
status: ACTIVE
version: 1.4.0
purpose: Especificar os dados mestres operacionais que sustentam todos os módulos.
---

# Regra de escopo

Não serão perguntados nem modelados controladora, participação societária, beneficiário final, parte relacionada ou consolidação. Organizações estrangeiras entram somente pelo papel operacional necessário.

# Bloco A — entidade e estrutura interna

**Q2-001.** Quais campos identificam a SUNSET TIRES CORPORATION S.A.S. além de razão social e CUIT? apenas
**Q2-002.** Quais unidades organizacionais existirão abaixo da entidade argentina? nenhuma
**Q2-003.** Haverá estabelecimentos fiscais adicionais ou apenas escritório e depósitos terceirizados? A principio o escritório que é alugado e os depósitos de terceiros, mas futuramente depósitos próprios
**Q2-004.** Quais centros de custo iniciais? TODOS
**Q2-005.** Quais centros de resultado/profit centers? TODOS
**Q2-006.** Quais áreas/departamentos? - RH, FINANCEIRO, CONTÁBIL, LOGÍSTICO, WEARHOUSING, GERENTES, CHEFES, VENDEDORES, TI, COMEX, LEGAL
**Q2-007.** Haverá projetos, campanhas, importações ou vendas como dimensões analíticas? SIM, IMPORTAÇÕES, MARKETING, VENDAS
**Q2-008.** Como datas de vigência e encerramento serão tratadas? ANO-CALENDÁRIO FISCAL
**Q2-009.** Quem pode criar/alterar estruturas organizacionais? - APENAS OS USUÁRIOS MASTERS

# Bloco B — cadastro-base de terceiros

**Q2-010.** Uma mesma organização/pessoa pode ser cliente, fornecedor, transportador, financeira e representante ao mesmo tempo? Sim
**Q2-011.** Pessoa física e jurídica usam o mesmo cadastro-base? sim
**Q2-012.** Quais identificadores: CUIT, DNI, passaporte, tax ID estrangeiro, GLN ou outros? CUIT, apenas atendemos o mercado local
**Q2-013.** Como evitar duplicidade? use o ralph-loop, teste, descubra
**Q2-014.** Quais nomes: razão social, fantasia, nome legal local, transliteração? os 3 primeiros
**Q2-015.** Quais endereços: legal, fiscal, cobrança, entrega, depósito e correspondência? fiscal, real.
**Q2-016.** Endereços terão geocódigo e validação? não
**Q2-017.** Quais contatos e canais? Email, telefone, whatsapp
**Q2-018.** Como registrar representante/comissionista? CUIL/T, Nome, Conta Bancária
**Q2-019.** Como registrar financeira parceira e limites concedidos? Pesquise
**Q2-020.** Como registrar despachante, agente de carga, porto, linha marítima e transportador? Em seu respectivo setor, ou seja, portos, despachante, etc em comex. Transportadoras em logística e assim por diante.
**Q2-021.** Quais status: prospect, ativo, suspenso, bloqueado, encerrado? Sim

# Bloco C — clientes

**Q2-022.** Quais segmentos de cliente? Cliente Final, Revenda, transportadora, Marketplace
**Q2-023.** Quais regiões/territórios comerciais? Todas, OBS: DEVEMOS PARAMETRIZAR A PERCEPÇÃO DE IIBB PARA TODAS AS PROVINCIAS E, VINCULAR DIRETAMENTE COM O CLIENTE A PARTIR DA PROVINCIA EM SEU CADASTRO.
**Q2-024.** Cliente terá múltiplos locais de entrega? Sim
**Q2-025.** Quais condições fiscais ficam no cadastro? Apenas se for IVA exento
**Q2-026.** Quais listas de preço podem ser associadas? Nenhum
**Q2-027.** Quais vendedores/representantes podem ser associados? Nenhum
**Q2-028.** Como registrar comissão e vigência? A partir da venda, devemos considerar que haverá a conta a pagar ao comissionista e, após o recebimento devemos considerar que devemos pagar o comissionista
**Q2-029.** Quais documentos cadastrais podem expirar? Nenhum, mas solicitar atualização cadastral a cada 18 meses.
**Q2-030.** Qual workflow de ativação? Estude
**Q2-031.** CUIT sozinho permite orçamento, pedido, faturamento ou cada etapa exige dados adicionais? Sim, permite

# Bloco D — fornecedores e prestadores

**Q2-032.** Quais categorias de fornecedor/prestador? Provedor Nacional / Exterior; Provedor de serviço / bens; Serviços logísticos / armazenagem / despacho / portuário / etc; Bens de cambio / consumo / etc
**Q2-033.** Fornecedor estrangeiro terá dados bancários por moeda? Sim
**Q2-034.** Quais Incoterms e condições de pagamento padrão? FOB e CFR, condição de pagamento padrão 120 dias após a chegada
**Q2-035.** Como registrar fabricante, exportador e emissor da invoice quando forem diferentes? Nunca serão diferentes.
**Q2-036.** Como registrar fornecedor que recebe/paga valores por conta de terceiros? Indiferente, apenas na hora do pagamento eu devo poder selecionar quais gastos/faturas estou pagando, mesmo que sejam de distintos fornecedores e, selecionar quais dos provedores estou utilizando para pagar, realizar o pagamento, se faltar ou sobrar valor ao total, marcar saldo/dívida com o fornecedor utilizado para realizar o pgto.
**Q2-037.** Quais documentos obrigatórios para homologação? E4
**Q2-038.** Haverá avaliação de fornecedor? Não 
**Q2-039.** Como tratar alteração de dados bancários? Alterar e manter histórico
**Q2-040.** Quem aprova cadastro e alteração crítica? Usuários com tal permissão

# Bloco E — depósitos e localizações

**Q2-041.** Confirme os códigos internos dos quatro depósitos informados na Rodada 1A. Pode ser | TP_NAC | TP_ZPA | MOR_NAC | MOR_ZPA
**Q2-042.** Depósitos nacionais terão endereçamento por rua/posição? Todos
**Q2-043.** Depósitos fiscais terão zonas/estados próprios? Todos
**Q2-044.** Quais locais virtuais: trânsito, porto, quarentena, avaria, reservado, em entrega? Transito, porto.
**Q2-045.** O ERP controla posição detalhada ou apenas saldo informado pelo operador? Posição detalhada
**Q2-046.** Qual frequência de atualização de cada depósito? Semanal
**Q2-047.** API e Excel podem coexistir por depósito? Sim
**Q2-048.** Qual layout mínimo do arquivo de estoque? Defina
**Q2-049.** Como conciliar divergência ERP × operador? Recontagem, logo lançar como perda e criar uma conta a cobrar com o operador logístico
**Q2-050.** Quem pode ajustar estoque? Usuários com tal permissão
**Q2-051.** Haverá inventário cíclico e geral? Não
**Q2-052.** Como registrar comprovante de entrada e saída do operador? Comprovante de saída será o REMITO ASSINADO ENVIADO PELO OL, De entrada o Email de confirmação de descarga.

# Bloco F — produto e SKU

**Q2-053.** Quais atributos formam um SKU de pneu? Categoria (TBR/OTR/LTR/PCR) | TIPO (LISO/TACO/UHP/HP/TA/HT/MT) | MEDIDA | MODELO |INDICE DE CARGA | INDICE DE VELOCIDADE
**Q2-054.** Qual padrão de código interno? Na hora de crair vou inserir. Ou importe do excel no fim de tudo.
**Q2-055.** Fabricante, marca, linha, modelo, medida, índice de carga e velocidade são obrigatórios? Sim
**Q2-056.** Unidade de medida será unidade, par, pallet ou combinação? Unidade
**Q2-057.** Como tratar equivalências e substitutos? Não utilizar
**Q2-058.** Quais atributos de embalagem e logística? Deve haver um QR em cada pneu contendo: (Dados da empresa fabricante ou importadora e seu C.U.I.T.
Identificação do produto, marca e modelo.
Código interno de fábrica ou part number.
País de origem.
Número da certificação e a denominação do Organismo Certificador que a emitiu.)
**Q2-059.** Como registrar NCM/posição tarifária e vigência? Manualmente, na hora de gerar um embarque e, após isso insere automaticamente na base de dados do pneu, deve haver a possibilidade de inserir em bulk
**Q2-060.** Como associar despacho e contêiner ao saldo por SKU? FIFO
**Q2-061.** Como tratar SKU inativo sem apagar histórico? Manter apenas
**Q2-062.** Quem pode criar ou alterar SKU? usuarios que tem o accesso

# Bloco G — governança e qualidade

**Q2-063.** Quais campos exigem dupla aprovação? FUTURO
**Q2-064.** Quais alterações exigem vigência futura em vez de sobrescrever? FUTURO
**Q2-065.** Quais dados podem ser importados em massa? Listado de skus
**Q2-066.** Como será feita deduplicação? FUTURO
**Q2-067.** Quais regras de completude e qualidade? Futuro
**Q2-068.** Quem é data owner e data steward de cada domínio? FUTURO

# Critério de saída

A Rodada 2 estará concluída quando cada domínio tiver identidade, papéis, atributos, status, vigência, ownership, validação e deduplicação definidos.
