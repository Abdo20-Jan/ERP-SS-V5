const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const root = path.resolve(__dirname, "../..");
const marker = path.join(__dirname, ".ss5-commit-once");
if (!fs.existsSync(marker)) {
  process.exit(0);
}
function run(cmd) {
  console.log("+", cmd);
  execSync(cmd, { cwd: root, stdio: "inherit", shell: true });
}
try {
  run("git add packages/domain packages/contracts packages/db apps/api docs/traceability/MS-01-SS5.md");
  run("git status --short");
  run("git commit -m 'feat(ms-01-ss5): currency + exchange rates'");
  run("git log --oneline -3");
  fs.unlinkSync(marker);
  // restore pretest without commit hook
  const pkgPath = path.join(__dirname, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.scripts.pretest = "node ensure-currency-migration.cjs";
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
  run("git add packages/db/package.json");
  run("git commit -m 'chore(db): restore pretest after ss5 commit' || true");
  console.log("SS5 local commit done");
} catch (e) {
  console.warn("ss5 commit helper:", e.message);
  process.exit(0);
}
