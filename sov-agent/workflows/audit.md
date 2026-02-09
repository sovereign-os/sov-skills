---
description: Unified Audit & System Visualization Protocol
---

# 🛡️ Workflow: /audit

Generates a high-fidelity visual map of all projects and teams within the Sovereign OS Registry.

## 1. Sequence

1. **🔍 Registry Scan**: Scan `/registry/projects/*.md` for active manifests.
2. **📊 Dependency Mapping**: Parse `tags` and `dependencies` to build a relationship graph.
3. **🏚️ Health Check**: Run `sovereign-doctor` diagnostics on critical infrastructure.
4. **🎨 Visualization**:
   - Generate a Markdown-based map of the workspace.
   - List project status, stack, and last known activity.

## ⚡ Commands

```bash
# Full System Audit
/home/puterakahfi/.agent/scripts/run-ops.sh audit-full
```
