const SECRET_RE = /(^|\/)(\.env($|\.)|.*\.(pem|key|p12|pfx)|auth\.json|credentials.*|secrets?.*)/i
const BLOCKED_SHELL = [
  /\brm\s+-rf\b/i, /\bsudo\b/i, /\bgit\s+push\b/i, /\bgh\s+pr\s+merge\b/i,
  /\brailway\s+up\b/i, /\bvercel\b.*--prod\b/i, /\bkubectl\b.*\b(delete|apply)\b/i,
  /\b(drop\s+(database|schema|table)|truncate\s+table)\b/i
]
export const SunsetGuardrails = async () => ({
  "tool.execute.before": async (input, output) => {
    const args = output.args || {}
    const filePath = String(args.filePath || args.path || "")
    if ((input.tool === "read" || input.tool === "edit" || input.tool === "write" || input.tool === "apply_patch") && SECRET_RE.test(filePath)) {
      throw new Error(`SUNSET policy: secret file access blocked: ${filePath}`)
    }
    if (input.tool === "bash") {
      const command = String(args.command || "")
      if (BLOCKED_SHELL.some((re) => re.test(command))) {
        throw new Error(`SUNSET policy: dangerous or production command blocked: ${command}`)
      }
    }
  },
})
