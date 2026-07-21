#!/usr/bin/env python3
from pathlib import Path
import tomllib, json, hashlib, sys
root=Path(__file__).resolve().parents[1]
files=sorted((root/'.codex'/'agents').glob('*.toml'))
errors=[]
rows=[]
names=set()
for p in files:
    try:
        data=tomllib.loads(p.read_text(encoding='utf-8'))
    except Exception as e:
        errors.append(f'{p}: TOML inválido: {e}')
        continue
    for k in ('name','description','developer_instructions'):
        if not data.get(k): errors.append(f'{p}: campo ausente {k}')
    name=data.get('name')
    if name in names: errors.append(f'{p}: nome duplicado {name}')
    names.add(name)
    lines=data.get('developer_instructions','').splitlines()
    if len(lines)<200: errors.append(f'{p}: apenas {len(lines)} linhas de instrução')
    rows.append({'name':name,'file':str(p.relative_to(root)),'instruction_lines':len(lines),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
for p in [root/'AGENTS.md', *root.glob('apps/*/AGENTS.md'), *root.glob('packages/*/AGENTS.md'), root/'docs/AGENTS.md', root/'scripts/AGENTS.md']:
    if p.exists() and len(p.read_text(encoding='utf-8').splitlines())<200:
        errors.append(f'{p}: AGENTS local com menos de 200 linhas')
report={'agent_count':len(rows),'agents':rows,'errors':errors,'status':'PASS' if not errors else 'FAIL'}
(root/'AGENT_PACK_VALIDATION.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
sys.exit(1 if errors else 0)
