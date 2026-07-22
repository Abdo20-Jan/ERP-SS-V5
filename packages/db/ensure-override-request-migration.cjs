const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const root = __dirname;
const dir = path.join(root, "prisma/migrations/20260724000000_create_override_requests");
const file = path.join(dir, "migration.sql");
if (!fs.existsSync(file)) {
  console.error("missing override migration sql");
  process.exit(1);
}
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.log("ensure-override: no DATABASE_URL, skip apply");
  process.exit(0);
}
try {
  execSync("npx prisma migrate deploy", { cwd: root, stdio: "inherit", env: process.env });
} catch (e) {
  console.warn("ensure-override migrate deploy warning", e.message);
}
