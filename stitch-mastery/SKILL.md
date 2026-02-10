---
name: stitch-mastery
description: Orchestrator for Google Stitch MCP server and official stitch-skills library integration.
version: 1.0.0
author: Sovereign OS Agent
tags: [ui-design, stitch, mcp, design-system, prototyping]
---

# 🎨 Stitch Mastery

This skill serves as the **coordination layer** between Sovereign OS and Google's Stitch platform. It does NOT re-implement Stitch capabilities, but rather **orchestrates** and **extends** the official `stitch-skills` library.


## 1. Core Philosophy (The "Why")
Stitch is Google's AI-powered UI design platform. Instead of duplicating their excellent work, we:

- **Reference** official skills from `google-labs-code/stitch-skills`
- **Coordinate** Stitch workflows within Sovereign OS context
- **Extend** with Sovereign-specific integrations (e.g., design system sync)

## 2. When to use this skill
This skill is activated when the task requires Orchestrator for Google Stitch MCP server and official stitch-skills library integration..
- Detected when the user's intent matches the semantic domain of 🎨 Stitch Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Upstream First

- **ALWAYS** use official `stitch-skills` when available
- **NEVER** re-implement what Google already provides
- **ONLY** add Sovereign-specific orchestration logic

### Rule 2: MCP Integration

- Stitch operates via MCP (Model Context Protocol)
- Use `mcp_stitch_*` tools for all Stitch operations
- Maintain project/screen state in Sovereign context

### Rule 3: Design System Sync

- When generating Stitch screens, reference active design system
- Sync Stitch `DESIGN.md` with Sovereign design tokens
- Ensure consistency between Stitch prototypes and production code

### Official Stitch Skills Reference
The following skills are maintained by Google and should be installed via `npx skills`:

### 🎨 **design-md**

Generates comprehensive DESIGN.md files from Stitch projects.

```bash
npx skills add google-labs-code/stitch-skills --skill design-md --global
```

### ⚛️ **react-components**

Converts Stitch screens to React components with validation.

```bash
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

### 🔄 **stitch-loop**

Generates multi-page websites from a single prompt.

```bash
npx skills add google-labs-code/stitch-skills --skill stitch-loop --global
```

### ✨ **enhance-prompt**

Transforms vague UI ideas into Stitch-optimized prompts.

```bash
npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global
```

### 🎬 **remotion**

Generates walkthrough videos from Stitch projects.

```bash
npx add-skill google-labs-code/stitch-skills --skill remotion --global
```

### 🧩 **shadcn-ui**

Expert guidance for shadcn/ui component integration.

```bash
npx skills add google-labs-code/stitch-skills --skill shadcn-ui --global
```

### Sovereign OS Integration Workflows
### Workflow 1: Create Stitch Project

```markdown
1. Create project via MCP: `mcp_stitch_create_project`
2. Store project_id in context
3. Link to active Sovereign project manifest
```

### Workflow 2: Generate Screen from Design System

```markdown
1. Read active design system tokens (colors, typography, spacing)
2. Enhance prompt with design system context
3. Generate screen via `mcp_stitch_generate_screen_from_text`
4. Validate against design system rules
```

### Workflow 3: Export to React

```markdown
1. Use official `react-components` skill
2. Validate output against `react-clean-craft` standards
3. Integrate into monorepo structure
```

### Usage Instructions
### Creating a New Design

```typescript
// 1. Create Stitch project
const project = await mcp_stitch_create_project({ title: "Tripos Dashboard" });

// 2. Generate screen with design system context
const screen = await mcp_stitch_generate_screen_from_text({
  project_id: project.id,
  prompt:
    "Dashboard with trip statistics, using Zen theme (calm blues, generous spacing)",
  device_type: "DESKTOP",
});

// 3. Review and iterate
const screenDetails = await mcp_stitch_get_screen({
  project_id: project.id,
  screen_id: screen.id,
});
```

### Syncing with Production

```markdown
1. Export Stitch screen to React (via `react-components` skill)
2. Apply `tailwind-mastery` and `ui-ux-mastery` rules
3. Integrate into `@pkahfi/ui` package
4. Verify design token consistency
```

### Resources
### Official Documentation

- **Stitch Skills Repo**: https://github.com/google-labs-code/stitch-skills
- **Skills CLI**: https://skills.sh
- **MCP Protocol**: https://modelcontextprotocol.io

### Sovereign Extensions

- `resources/design-system-sync.md` - How to sync Stitch with Sovereign design tokens
- `resources/stitch-to-react-pipeline.md` - Production integration workflow

## 4. Maintenance
### When to Update

- When Google releases new official skills
- When Stitch MCP API changes
- When Sovereign design system evolves

### Audit Checklist

- [ ] Are we using latest official skills?
- [ ] Is MCP integration working?
- [ ] Are design tokens synced?
- [ ] Is React export pipeline functional?
