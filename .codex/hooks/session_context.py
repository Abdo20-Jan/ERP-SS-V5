#!/usr/bin/env python3
import json, os, subprocess
root=subprocess.check_output(["git","rev-parse","--show-toplevel"], text=True).strip()
branch=subprocess.check_output(["git","branch","--show-current"], text=True).strip()
msg=(f"Sunset ERP workspace: {root}. Branch: {branch or 'detached'}. "
     "Read AGENTS.md, docs/agents/00_AGENT_SYSTEM_OVERVIEW.md, "
     "docs/governance/DECISION_PRECEDENCE.md and the active slice before editing.")
print(json.dumps({"continue": True, "hookSpecificOutput": {"hookEventName":"SessionStart","additionalContext":msg}}))
