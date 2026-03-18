---
name: Agent Cognitive Mastery
description: Sovereign OS Semantic Brain & Vector Memory Core (OpenViking + Qdrant)
---

# 🧠 Agent Cognitive Mastery

This skill defines the operational protocols, semantic routing, and vector memory management for the Sovereign Agent using OpenViking and Qdrant. It ensures the Agent has full sovereignty and understanding over its "Long-Term Memory."

## 1. The Cognitive Infrastructure (The Brain)

- **Vector Storage (Qdrant):** Runs locally on port `6333`. Responsible for storing multi-dimensional embeddings of documents.
- **Semantic Engine (OpenViking):** Runs locally on port `1933`. The semantic search API that translates natural language into vector search.

## 2. Mandatory Recall Protocol (Cortex Sync)

Before executing complex designs, architecture changes, or debugging systems, the Agent MUST query the Semantic Brain to retrieve historical context and related solutions (Wisdom).

- **API Endpoint:** `http://localhost:1933/api/v1/search/search`
- **Method:** `POST`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer sovereign-secret`
- **Payload Structure:**
  ```json
  {
    "query": "<search_term>",
    "target_uri": "<semantic_routing_target>",
    "limit": 5
  }
  ```

## 3. Semantic Routing (Target URIs)

The Agent MUST use the correct `target_uri` to prevent context pollution:
- `viking://projects/...` : When fetching history, implementations, or bugs related to specific application features.
- `viking://skills` : When querying engineering standards, architecture blueprints, or operational workflows.
- `viking://resources` : Global search across all indexed data points.
- `viking://memory/kaizen` : When asking "What mistakes have I made before?" or querying past anti-patterns.

## 4. Continuous Ingestion & Memory Streaming

To avoid stale memory, the Agent MUST ensure new knowledge is continuously injected into the Vector Brain.
- After successfully resolving a complex issue, creating a new architecture pattern, or completing a workflow that resulted in "Kaizen" (improvement), the Agent should instruct ingestion of the new artifact.
- The `memory-vortex` skill handles the mass ingestion, but the cognitive mastery ensures the Agent triggers it or uses OpenViking's API to push data.

## 5. Self-Healing & Brain Diagnostics

If the Agent suspects the Semantic Brain is malfunctioning (e.g., searches return empty despite known context):
1. **Check Viking Readiness:** `curl -s http://localhost:1933/health`
2. **Check Qdrant Collections:** `curl -s http://localhost:6333/collections/sovereign_wisdom`
3. If points count = 0, the Agent MUST trigger `npm run ingest` from the `memory-vortex` skill to re-sync the brain from the local `.agents/` and workspace files.

---
*Maintained by Sovereign OS Cognitive Core.*

## 6. Agent-Agnostic Execution Layer

To ensure this skill works across Antigravity, Codex, and other agents, use a layered model:

- Core protocol: `SKILL.md`
- Machine contract: `skill.contract.json`
- Agent adapters: `adapters/*.md`
- Canonical entrypoint: `scripts/run.sh`

### Canonical Entrypoint

```bash
scripts/run.sh --query "<query>" --target-uri "<uri>" --limit <n>
```

### Portability Constraints

- Keep agent-specific runtime logic only in `adapters/`.
- Keep health and recall output structure stable.
- Avoid embedding platform-only tool syntax in core protocol sections.
