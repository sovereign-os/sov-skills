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

## 2. When to use this skill

This skill is activated when the task requires semantic search, project history historical recall, or architectural wisdom retrieval.

- Detected when the user's intent matches the semantic domain of 🌪️ Vortex Memory Skill.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Core Capabilities

- **Semantic Search**: Ability to query project history based on meaning rather than keywords.
- **Contextual Ingestion**: Automatically tags memories with their originating workspace.
- **Deduplication**: Uses deterministic UUIDs based on file paths to prevent duplicate entries.

### Configuration

- **Engine**: Qdrant (Docker)
- **URL**: `http://localhost:6333`
- **Collection**: `sovereign_wisdom`
- **Intelligence Spec**: [intelligence.json](file:///home/puterakahfi/.sov-agent/skills/memory-vortex/resources/intelligence.json)

### Operations

#### Ingesting Memories

Run the ingestion script during context switches or manual updates.

```bash
# Ingest local workspace memory
./scripts/vortex-ingest.sh --dir="/path/to/workspace" --workspace="name"
```

#### Querying Wisdom

Search the vortex for historical patterns.

```bash
./scripts/vortex-query.sh "How did we refactor the CSRF module?"
```

### Dependencies

- `@qdrant/js-client-rest`
- `openai` (or local embedding lib)

## 4. Maintenance & Audit

Audit the collection health via Qdrant Dashboard.

- **URL**: http://localhost:6333/dashboard
