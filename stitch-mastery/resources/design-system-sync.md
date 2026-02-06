# Design System Sync: Stitch ↔ Sovereign

## Overview

This document defines how to maintain consistency between Stitch-generated designs and Sovereign OS production design systems.

## Workflow

### 1. Export Design Tokens to Stitch Context

Before generating screens in Stitch, inject design system context:

```markdown
**Design System Context:**

- **Primary Color**: `hsl(210, 100%, 50%)` (Vibrant Blue)
- **Background**: `hsl(0, 0%, 98%)` (Light Gray)
- **Typography**: Inter (headings), Roboto (body)
- **Spacing Scale**: 4px base (0.25rem increments)
- **Border Radius**: 8px (cards), 4px (buttons)
- **Shadow**: `0 2px 8px rgba(0,0,0,0.1)`
```

### 2. Enhance Prompts with Design Language

Use `enhance-prompt` skill to inject design system vocabulary:

```bash
# Before
"Create a dashboard"

# After (enhanced)
"Create a dashboard using Zen theme: calm blue primary (hsl(210,100%,50%)),
generous spacing (24px gaps), soft shadows, Inter typography, 8px border radius"
```

### 3. Validate Generated Screens

After Stitch generates a screen:

1. Review color palette against design tokens
2. Check spacing consistency
3. Verify typography hierarchy
4. Ensure component patterns match production

### 4. Sync DESIGN.md

Use `design-md` skill to generate documentation, then:

1. Compare with Sovereign `design-system.md`
2. Identify discrepancies
3. Update either Stitch or Sovereign to maintain consistency

## Automation Script

```bash
# Future: Auto-sync design tokens
~/.sov-agent/skills/stitch-mastery/scripts/sync-design-tokens.sh [project-id]
```
