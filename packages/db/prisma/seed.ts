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
