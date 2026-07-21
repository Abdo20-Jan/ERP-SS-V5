\
#!/usr/bin/env python3
import json, re, sys
payload = json.load(sys.stdin)
command = str(payload.get("tool_input", {}).get("command", ""))
blocked = [
    r"(^|\s)rm\s+-rf\s+/(\s|$)",
    r"git\s+push\s+.*--force(?:-with-lease)?\s+(?:origin\s+)?(?:main|master)",
    r"git\s+reset\s+--hard\s+(?:origin/)?(?:main|master)",
    r"DROP\s+DATABASE",
    r"TRUNCATE\s+TABLE\s+.*(?:audit|journal|ledger)",
    r"kubectl\s+delete\s+namespace",
]
if any(re.search(p, command, re.I) for p in blocked):
    print(json.dumps({"decision":"block","reason":"Comando bloqueado pela política do repositório. Use um procedimento reversível e peça aprovação explícita."}))
else:
    print("{}")
