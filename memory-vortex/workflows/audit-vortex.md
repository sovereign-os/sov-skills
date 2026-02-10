---
description: Search or Audit the Sovereign Memory Vortex (Qdrant)
---

# 🌪️ Workflow: /audit-vortex

This workflow provides a standardized interface for maintaining and querying the Sovereign Memory Vortex.

## 1. Search Wisdom
1. Use `scripts/vortex-query.sh` with a natural language query.
2. The Agent MUST summarize the findings and cite relevant files.

## 2. Manual Ingest
1. Use `scripts/vortex-ingest.sh` to refresh a specific folder or workspace.
2. Provide summary of newly ingested documents.

## 🚀 Usage

```bash
# To search:
/audit-vortex search "topic"

# To re-ingest:
/audit-vortex ingest [dir] [workspace-name]
```
