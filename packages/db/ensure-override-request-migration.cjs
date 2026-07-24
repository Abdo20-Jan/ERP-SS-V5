const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = __dirname;
const REQUIRED_MIGRATIONS = [
  "20260724000000_create_override_requests",
  "20260731010000_create_override_command_receipts",
];

function defaultDeploy(env) {
  const npx = process.platform === "win32" ? "npx.cmd" : "npx";
  execFileSync(npx, ["prisma", "migrate", "deploy"], {
    cwd: root,
    stdio: "inherit",
    env,
  });
}

function run(options = {}) {
  const existsSync = options.existsSync ?? fs.existsSync;
  const deploy = options.deploy ?? defaultDeploy;
  const databaseUrl = options.databaseUrl ?? process.env.DATABASE_URL;
  const logger = options.logger ?? console;

  const missing = REQUIRED_MIGRATIONS.flatMap((migration) =>
    ["migration.sql", "down.sql"]
      .map((file) => path.join(root, "prisma", "migrations", migration, file))
      .filter((file) => !existsSync(file)),
  );

  if (missing.length > 0) {
    logger.error(
      `ensure-override: missing required migration artifact(s): ${missing
        .map((file) => path.relative(root, file))
        .join(", ")}`,
    );
    return 1;
  }

  if (!databaseUrl) {
    logger.log("ensure-override: no DATABASE_URL, skip apply");
    return 0;
  }

  try {
    deploy(process.env);
    return 0;
  } catch (error) {
    const status =
      error && typeof error === "object" && "status" in error
        ? String(error.status)
        : "unknown";
    logger.error(`ensure-override: prisma migrate deploy failed (status ${status})`);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = run();
}

module.exports = { REQUIRED_MIGRATIONS, run };
