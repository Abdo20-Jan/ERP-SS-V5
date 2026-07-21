#!/usr/bin/env python3
import json, sys
try:
    data=json.load(sys.stdin)
except Exception:
    data={}
agent=data.get("agent_type","unknown")
msg=(f"You are subagent {agent}. Stay inside your TOML scope. "
     "Use docs/agents/02_HANDOFF_PROTOCOL.md. Do not expand scope or edit files if sandbox is read-only.")
print(json.dumps({"systemMessage": msg, "hookSpecificOutput": {"hookEventName":"SubagentStart","additionalContext":msg}}))
