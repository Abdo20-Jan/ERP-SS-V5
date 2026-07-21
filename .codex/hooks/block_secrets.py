\
#!/usr/bin/env python3
import json, re, sys
payload = json.load(sys.stdin)
prompt = payload.get("prompt", "")
patterns = [
    r"sk-[A-Za-z0-9_-]{16,}",
    r"sk-proj-[A-Za-z0-9_-]{16,}",
    r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----",
    r"(?i)(?:DATABASE_URL|RAILWAY_TOKEN|VERCEL_TOKEN|API_SECRET|PRIVATE_KEY)\s*=\s*[^\s]+",
]
if any(re.search(p, prompt) for p in patterns):
    print(json.dumps({"decision":"block","reason":"Prompt bloqueado: parece conter segredo ou chave. Use um nome de variável/placeholder, nunca o valor real."}))
else:
    print("{}")
