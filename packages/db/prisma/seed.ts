import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  if (!adminPassword) {
    throw new Error("SEED_ADMIN_PASSWORD environment variable is required");
  }

  const passwordHash = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@sunset.local" },
    update: {},
    create: {
      email: "admin@sunset.local",
      name: "Administrador",
      passwordHash,
      isActive: true,
    },
  });

  console.log("✅ Admin user created:", admin.email);

  // Create admin role
  const adminRole = await prisma.role.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
      description: "Administrador do sistema",
      isSystem: true,
    },
  });

  console.log("✅ Admin role created:", adminRole.name);

  // Create permissions
  const permissions = [
    { action: "user:read", description: "Listar/ver usuários" },
    { action: "user:write", description: "Criar/editar/desativar usuários" },
    { action: "role:read", description: "Listar/ver papéis" },
    { action: "role:write", description: "Criar/editar papéis" },
    { action: "audit:read", description: "Consultar logs de auditoria" },
    { action: "parameter:read", description: "Consultar parâmetros" },
    { action: "parameter:write", description: "Criar/alterar parâmetros" },
    { action: "health:read", description: "Ver health checks detalhados" },
    { action: "party:read", description: "Listar/ver partes (clientes, fornecedores)" },
    { action: "party:write", description: "Criar/editar/ativar/desativar partes" },
    { action: "product:read", description: "Listar/ver produtos" },
    { action: "product:write", description: "Criar/editar/ativar/desativar produtos" },
    { action: "accounting:read", description: "Consultar plano de contas, moedas, dimensões e lançamentos" },
    { action: "accounting:write", description: "Criar/alterar contas, moedas, dimensões e lançamentos" },
    { action: "inventory:read", description: "Listar/ver depósitos e locais" },
    { action: "inventory:write", description: "Criar/editar/ativar/desativar depósitos e locais" },
    { action: "inventory:override:request", description: "Solicitar override de master de estoque" },
    { action: "inventory:override:approve", description: "Aprovar/rejeitar override de master de estoque" },
    { action: "inventory:override:execute", description: "Executar override aprovado de master de estoque" },
    { action: "inventory:override:view", description: "Consultar overrides de master de estoque" },
    { action: "inventory:document:upload", description: "Upload documentos deposito/posicao" },
    { action: "inventory:document:read", description: "Leitura documentos deposito/posicao" },
    { action: "inventory:document:archive", description: "Arquivar documentos deposito/posicao" },
    { action: "inventory:task:create", description: "Criar tarefas operacionais de estoque" },
    { action: "inventory:task:read", description: "Consultar worklist e tarefas de estoque" },
    { action: "inventory:task:assign", description: "Atribuir dono de tarefa de estoque" },
    { action: "inventory:task:update", description: "Iniciar/bloquear/desbloquear tarefa de estoque" },
    { action: "inventory:task:escalate", description: "Escalar tarefa de estoque" },
    { action: "inventory:task:complete", description: "Concluir tarefa de estoque" },
    { action: "inventory:task:cancel", description: "Cancelar tarefa de estoque" },
    { action: "inventory:event:read", description: "Consultar eventos de estoque" },
    { action: "inventory:event:payload:read", description: "Visualizar payload completo de eventos de estoque" },
    { action: "inventory:event:replay", description: "Solicitar reprocessamento de evento de estoque" },
    { action: "inventory:event:dead-letter", description: "Mover evento de estoque para dead-letter" },
    { action: "inventory:event:cancel", description: "Cancelar evento de estoque" },
    { action: "inventory:posting:create", description: "Criar proposta de lancamento de estoque" },
    { action: "inventory:posting:read", description: "Consultar propostas de lancamento de estoque" },
    { action: "inventory:posting:validate", description: "Validar proposta de lancamento de estoque" },
    { action: "inventory:posting:reverse", description: "Reverter proposta de lancamento de estoque" },
    { action: "inventory:posting:cancel", description: "Cancelar proposta de lancamento de estoque" },
    { action: "inventory:import:create", description: "Criar job de importacao de estoque" },
    { action: "inventory:import:read", description: "Consultar jobs de importacao de estoque" },
    { action: "inventory:import:validate", description: "Validar job de importacao de estoque" },
    { action: "inventory:import:apply", description: "Aplicar job de importacao de estoque" },
    { action: "inventory:import:cancel", description: "Cancelar job de importacao de estoque" },
    { action: "inventory:import:error:read", description: "Consultar erros de importacao de estoque" },
    { action: "inventory:export:create", description: "Criar job de exportacao de estoque" },
    { action: "inventory:export:read", description: "Consultar jobs de exportacao de estoque" },
    { action: "inventory:export:download", description: "Download de arquivo exportado de estoque" },
    { action: "inventory:export:cancel", description: "Cancelar job de exportacao de estoque" },
    { action: "comex:order:read", description: "Listar/ver pedidos internacionais" },
    { action: "comex:order:create", description: "Criar pedido internacional" },
    { action: "comex:order:update", description: "Editar pedido internacional (DRAFT/suspend/resume)" },
    { action: "comex:order:submit", description: "Submeter pedido internacional para aprovacao" },
    { action: "comex:order:approve", description: "Aprovar/rejeitar pedido internacional" },
    { action: "comex:order:send", description: "Enviar pedido ao fornecedor" },
    { action: "comex:order:cancel", description: "Cancelar pedido internacional" },
    { action: "comex:order:production:update", description: "Atualizar progresso de producao do pedido" },
    { action: "comex:proforma:register", description: "Registrar versao de proforma" },
    { action: "comex:proforma:confirm", description: "Confirmar proforma" },
    { action: "comex:override:request", description: "Solicitar override COMEX" },
    { action: "comex:override:approve", description: "Aprovar/rejeitar override COMEX" },
    { action: "comex:override:execute", description: "Executar override COMEX aprovado" },
    { action: "comex:override:view", description: "Consultar overrides COMEX" },
    { action: "comex:alert:read", description: "Consultar alertas do pedido" },
    { action: "comex:alert:resolve", description: "Reconhecer/resolver alertas do pedido" },




  ];

  for (const perm of permissions) {
    await prisma.permission.upsert({
      where: { action: perm.action },
      update: {},
      create: perm,
    });
  }

  console.log("✅ Permissions created:", permissions.length);

  // Assign permissions to admin role
  const allPermissions = await prisma.permission.findMany();
  for (const perm of allPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: perm.id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: perm.id,
      },
    });
  }

  console.log("✅ Permissions assigned to admin role");

  // Assign admin role to admin user
  await prisma.userRole.upsert({
    where: {
      userId_roleId: {
        userId: admin.id,
        roleId: adminRole.id,
      },
    },
    update: {},
    create: {
      userId: admin.id,
      roleId: adminRole.id,
    },
  });

  console.log("✅ Admin role assigned to admin user");

  // Create default parameters
  const defaultParameters = [
    {
      key: "company.name",
      value: "Sunset Tires Corporation S.A.S.",
      description: "Nome da empresa",
    },
    {
      key: "default.locale",
      value: "pt-BR",
      description: "Idioma padrão do sistema",
    },
    {
      key: "default.timezone",
      value: "America/Argentina/Buenos_Aires",
      description: "Timezone de negócio",
    },
    {
      key: "default.currency",
      value: "ARS",
      description: "Moeda funcional",
    },
  ];

  for (const param of defaultParameters) {
    await prisma.parameter.upsert({
      where: {
        key_validFrom: {
          key: param.key,
          validFrom: new Date(),
        },
      },
      update: {},
      create: {
        key: param.key,
        value: param.value,
        description: param.description,
        validFrom: new Date(),
      },
    });
  }

  console.log("✅ Default parameters created:", defaultParameters.length);

  // Product categories sample
  const catPneus = await prisma.productCategory.upsert({
    where: { code: "01" },
    update: {},
    create: { code: "01", name: "Pneus", level: 1, path: "01" },
  });
  for (const child of [
    { code: "01.01", name: "PCR" },
    { code: "01.02", name: "TBR" },
    { code: "01.03", name: "OTR" },
    { code: "01.04", name: "LTR" },
  ]) {
    await prisma.productCategory.upsert({
      where: { code: child.code },
      update: {},
      create: {
        code: child.code,
        name: child.name,
        parentId: catPneus.id,
        level: 2,
        path: child.code,
      },
    });
  }
  console.log("✅ Product categories seeded");

  // Chart of accounts baseline
  let coa = await prisma.chartOfAccounts.findFirst({
    where: { name: "Plano de Contas Sunset", isActive: true },
  });
  if (!coa) {
    coa = await prisma.chartOfAccounts.create({
      data: {
        name: "Plano de Contas Sunset",
        description: "Plano de contas padrão - estrutura argentina simplificada",
        version: 1,
        validFrom: new Date(),
        isActive: true,
      },
    });
  }
  const systemAccounts = [
    { code: "1", name: "ATIVO", type: "ASSET", nature: "DEBITOR" },
    { code: "2", name: "PASSIVO", type: "LIABILITY", nature: "CREDITOR" },
    { code: "3", name: "PATRIMÔNIO LÍQUIDO", type: "EQUITY", nature: "CREDITOR" },
    { code: "4", name: "RECEITAS", type: "REVENUE", nature: "CREDITOR" },
    { code: "5", name: "CUSTOS E DESPESAS", type: "EXPENSE", nature: "DEBITOR" },
    { code: "6", name: "CONTAS DE CONTROLE", type: "CONTROL", nature: "DEBITOR" },
  ];
  for (const acc of systemAccounts) {
    await prisma.account.upsert({
      where: { coaId_code: { coaId: coa.id, code: acc.code } },
      update: {},
      create: {
        ...acc,
        coaId: coa.id,
        level: 1,
        isSystem: true,
        allowManualPosting: false,
      },
    });
  }
  console.log("✅ Chart of accounts baseline seeded");

  // === Currency & Exchange Rates (MS-01-SS5) ===
  const ars = await prisma.currency.upsert({
    where: { code: "ARS" },
    update: {},
    create: {
      code: "ARS",
      name: "Peso Argentino",
      symbol: "$",
      decimalPlaces: 2,
      isFunctional: true,
      isPresentation: false,
      isActive: true,
    },
  });
  const usd = await prisma.currency.upsert({
    where: { code: "USD" },
    update: {},
    create: {
      code: "USD",
      name: "Dólar Estadounidense",
      symbol: "US$",
      decimalPlaces: 2,
      isFunctional: false,
      isPresentation: true,
      isActive: true,
    },
  });
  await prisma.currency.upsert({
    where: { code: "BRL" },
    update: {},
    create: {
      code: "BRL",
      name: "Real Brasileño",
      symbol: "R$",
      decimalPlaces: 2,
      isFunctional: false,
      isPresentation: false,
      isActive: true,
    },
  });
  console.log("✅ Currencies created: ARS (functional), USD (presentation), BRL");
  const existingRate = await prisma.exchangeRate.findFirst({
    where: {
      fromCurrencyId: usd.id,
      toCurrencyId: ars.id,
      validUntil: null,
    },
  });
  if (!existingRate) {
    await prisma.exchangeRate.create({
      data: {
        fromCurrencyId: usd.id,
        toCurrencyId: ars.id,
        rate: 350.5,
        validFrom: new Date(),
        source: "MANUAL",
      },
    });
    console.log("✅ Exchange rate seeded: 1 USD = 350.50 ARS");
  } else {
    console.log("✅ Exchange rate USD→ARS already present");
  }

  // === Journals (MS-01-SS7) ===
  const journals = [
    { code: "01", name: "Diário Geral", type: "GENERAL" },
    { code: "02", name: "Diário de Vendas", type: "SALES" },
    { code: "03", name: "Diário de Compras", type: "PURCHASES" },
    { code: "04", name: "Diário de Caixa", type: "CASH" },
  ];
  for (const j of journals) {
    await prisma.journal.upsert({
      where: { code: j.code },
      update: {},
      create: j,
    });
  }
  console.log("✅ Journals seeded");

  // === Posting Rules (MS-01-SS8 examples) ===
  const existingManual = await prisma.postingRule.findFirst({
    where: { eventType: "MANUAL", originModule: "ACCOUNTING", isActive: true },
  });
  if (!existingManual) {
    await prisma.postingRule.create({
      data: {
        name: "Lançamento Manual",
        description: "Template para lançamentos manuais no Diário Geral",
        eventType: "MANUAL",
        originModule: "ACCOUNTING",
        validFrom: new Date(),
        isActive: true,
        lines: {
          create: [
            {
              sequence: 1,
              debitAccountCode: "1",
              creditAccountCode: "4",
              placeholders: [],
            },
          ],
        },
      },
    });
    console.log("✅ Posting rule seeded: Manual Journal");
  } else {
    console.log("✅ Posting rule Manual already present");
  }

  const existingSale = await prisma.postingRule.findFirst({
    where: { eventType: "VENTA", originModule: "SALES", isActive: true },
  });
  if (!existingSale) {
    await prisma.postingRule.create({
      data: {
        name: "Venda à Vista (esqueleto)",
        description:
          "Template para venda à vista — integração com SALES no MS-03",
        eventType: "VENTA",
        originModule: "SALES",
        validFrom: new Date(),
        isActive: true,
        lines: {
          create: [
            {
              sequence: 1,
              debitAccountCode: "1",
              creditAccountCode: "4",
              placeholders: [
                {
                  placeholder: "cuenta_ventas",
                  providedBy: "SALES",
                  valueType: "account_code",
                },
              ],
            },
          ],
        },
      },
    });
    console.log("✅ Posting rule seeded: Sales Skeleton");
  } else {
    console.log("✅ Posting rule Sales already present");
  }

  // Warehouses (PR-INVENTORY-01-S01) — D-F: TERCEIRIZADO; NAC/ZPA only in code/name
  const warehouses = [
    { code: "TP_NAC", name: "Depósito TP Nacional" },
    { code: "TP_ZPA", name: "Depósito TP Zona Primária" },
    { code: "MOR_NAC", name: "Depósito Moreiro Nacional" },
    { code: "MOR_ZPA", name: "Depósito Moreiro Zona Primária" },
  ];
  for (const wh of warehouses) {
    await prisma.warehouse.upsert({
      where: {
        organizationId_code: {
          organizationId: "org_001",
          code: wh.code,
        },
      },
      update: {},
      create: {
        organizationId: "org_001",
        code: wh.code,
        name: wh.name,
        type: "TERCEIRIZADO",
        addressCountry: "AR",
        zones: [],
        isActive: true,
        version: 0,
      },
    });
  }
  console.log("✅ Warehouses seeded:", warehouses.map((w) => w.code).join(", "));



  for (const wh of warehouses) {
  // Location config + virtuals (PR-INVENTORY-01-S02)

    const row = await prisma.warehouse.findUnique({
      where: { organizationId_code: { organizationId: "org_001", code: wh.code } },
    });
    if (!row) continue;
    await prisma.warehouseLocationConfig.upsert({
      where: { warehouseId: row.id },
      update: {},
      create: {
        warehouseId: row.id,
        maxLevels: 1,
        level1Name: "Zona",
        level2Name: "Rua",
        level3Name: "Rack",
        level4Name: "Nível",
        level5Name: "Posição",
        useLevel2: false,
        useLevel3: false,
        useLevel4: false,
        useLevel5: false,
        version: 0,
      },
    });
    for (const v of [
      { code: "V-TRANSIT", name: "Em trânsito", virtualType: "TRANSIT" },
      { code: "V-PORT", name: "Porto", virtualType: "PORT" },
    ]) {
      const existing = await prisma.warehouseLocation.findFirst({
        where: { warehouseId: row.id, parentKey: "ROOT", code: v.code },
      });
      if (!existing) {
        await prisma.warehouseLocation.create({
          data: {
            warehouseId: row.id,
            parentId: null,
            parentKey: "ROOT",
            level: 0,
            code: v.code,
            name: v.name,
            path: v.code,
            isVirtual: true,
            virtualType: v.virtualType,
            isActive: true,
            version: 0,
          },
        });
      }
    }
  }
  console.log("✅ Warehouse location configs + virtuals seeded");

  console.log("🎉 Seed completed successfully!");

}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
