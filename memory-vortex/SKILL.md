---
name: memory-vortex
description: The Sovereign Semantic Memory interface using Qdrant.
version: 1.1.0
author: Sovereign OS Agent
tags: [memory, qdrant, semantic-search, wisdom]
---

# 🌪️ Vortex Memory Skill

## 1. Core Philosophy (The "Why")
Knowledge is static (files), but Wisdom is dynamic (patterns). This skill connects the Agent to the **Memory Vortex** (Qdrant) to allow for semantic recall of past experiences, architectural decisions, and resolved anti-patterns.

## 2. Capabilities & Rules (The "What")

- **Semantic Search**: Ability to query project history based on meaning rather than keywords.
- **Contextual Ingestion**: Automatically tags memories with their originating workspace.
- **Deduplication**: Uses deterministic UUIDs based on file paths to prevent duplicate entries.

### 2.1 Structured Intelligence
- **Configuration**: [intelligence.json](file:///home/puterakahfi/.sov-agent/skills/memory-vortex/resources/intelligence.json)
- **Collection**: `sovereign_wisdom`

## 3. Usage Instructions (The "How")

### 3.1 Ingesting Memories
Run the ingestion script during context switches or manual updates.
```bash
# Ingest local workspace memory
./scripts/vortex-ingest.sh --dir="/path/to/workspace" --workspace="name"
```

### 3.2 Querying Wisdom
Search the vortex for historical patterns.
```bash
./scripts/vortex-query.sh "How did we refactor the CSRF module?"
```

## 4. Maintenance & Audit
Audit the collection health via Qdrant Dashboard.
- **URL**: http://localhost:6333/dashboard
