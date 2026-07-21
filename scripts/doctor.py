#!/usr/bin/env python3
from pathlib import Path
import shutil, sys
required = ['git','python3']
optional = ['node','corepack','pnpm','code','gh','codex']
print('Required tools:')
missing=[]
for tool in required:
    p=shutil.which(tool); print(f'  {tool}: {p or "MISSING"}')
    if not p: missing.append(tool)
print('Optional/bootstrap tools:')
for tool in optional:
    print(f'  {tool}: {shutil.which(tool) or "not installed / not on PATH"}')
if missing:
    sys.exit(1)
print('Doctor completed. Dependency versions will be pinned in BOOT-01.')
