---
name: memory-vortex
description: The Sovereign Semantic Memory interface. Uses Qdrant to store and retrieve vector embeddings of project history and wisdom.
---

# 🌪️ Vortex Memory Skill

This skill provides the interface to the **Vortex Engine** (Qdrant). It allows the Agent to recall "Wisdom" (historical patterns) rather than just "Knowledge" (files).

## 🛠️ Configuration

- **Engine**: Qdrant (Docker)
- **URL**: `http://localhost:6333`
- **Collection Name**: `sovereign_wisdom`
- **Embedding Model**: `text-embedding-3-small` (via OpenAI API) or `Xenova/all-MiniLM-L6-v2` (Local).

## ⚡ Capability: `retrieve_wisdom`

The agent uses this capability to query the vector database.

### Usage
```typescript
const wisdom = await vortex.query({
  text: "How do we handle S3 migrations?",
  limit: 3,
  threshold: 0.75
});
```

### Ingestion Strategy
1.  **Passive**: Watcher script detects new `.md` files in `operations/history/`.
2.  **Active**: Run `npm run vortex:ingest` to full-scan.

## 📦 Dependencies
- `@qdrant/js-client-rest`
- `openai` (or local embedding lib)
