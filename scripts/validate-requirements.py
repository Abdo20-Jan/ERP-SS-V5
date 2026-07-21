#!/usr/bin/env python3
from pathlib import Path
import csv, gzip, json, re, sys, tomllib
root = Path(__file__).resolve().parents[1]
manifest = json.loads((root/'docs/governance/ACCEPTANCE_MANIFEST.json').read_text())
assert manifest['accepted_questions'] == 71500
with gzip.open(root/'docs/governance/ACCEPTANCE_LEDGER_71500.csv.gz','rt',encoding='utf-8') as f:
    rows=list(csv.DictReader(f))
assert len(rows)==71500
assert len({r['question_id'] for r in rows})==71500
controllers=list((root/'docs/requirements/pr-programs').rglob('00_CONTROLLER.md'))
slices=[p for p in (root/'docs/requirements/pr-programs').rglob('*.md') if p.name!='00_CONTROLLER.md']
assert len(controllers)==65, len(controllers)
assert len(slices)==650, len(slices)
for p in slices:
    txt=p.read_text(encoding='utf-8')
    assert txt.count('### ') == 50, (p, txt.count('### '))
with (root/'.codex/config.toml').open('rb') as f:
    tomllib.load(f)
json.loads((root/'.codex/hooks.json').read_text())
print('OK: 71,500 accepted requirements; 65 controllers; 650 slices; config/hook syntax valid.')
