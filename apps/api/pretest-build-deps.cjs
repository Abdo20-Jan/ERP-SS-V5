const { execSync } = require("child_process");
const path = require("path");
const root = path.resolve(__dirname, "../..");
const run = (cwd, cmd) => {
  console.log("+", cwd, cmd);
  execSync(cmd, { cwd: path.join(root, cwd), stdio: "inherit" });
};
run("packages/domain", "npx tsc");
run("packages/contracts", "npx tsc");
run("packages/db", "node ensure-currency-migration.cjs");
run("packages/db", "node ensure-dimension-migration.cjs");
run("packages/db", "node ensure-ledger-migration.cjs");
run("packages/db", "node ensure-posting-rule-migration.cjs");
run("packages/db", "npx prisma generate");
run("packages/db", "npx tsc");
