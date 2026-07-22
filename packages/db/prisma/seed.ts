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
    { action: "inventory:read", description: "Listar/ver depósitos" },
    { action: "inventory:write", description: "Criar/editar/ativar/desativar depósitos" },
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
