---
name: premium-presentation
description: Elevating the quality of reports, documentation, and communication for a "Wow" experience.
version: 1.1.0
author: Sovereign OS Agent
tags: [documentation, reporting, communication, presentation]
---

# 🎨 Premium Presentation


## 1. Core Philosophy (The "Why")
First impressions matter. Reports and docs are products. They must WOW the reader with clarity, structure, and visual excellence.

## 2. When to use this skill
This skill is activated when the task requires Elevating the quality of reports, documentation, and communication for a "Wow" experience..
- Detected when the user's intent matches the semantic domain of 🎨 Premium Presentation.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Report Elevation
- **Emoji Logic**: Use professional emojis (✅, ⚙️, 🔥) for status.
- **Structure**: Headers, Tables, Bullet Points.
- **Readability**: No raw Markdown blocks for humans.

### Rule 2: Documentation Standards
- **Template**: Context -> Tech Stack -> Commands -> Troubleshooting.
- **Update**: Every major change updates `LEARNINGS.md`.

### Rule 3: Visual Consistency
- **Fonts**: Use monospace for code, sans-serif for prose.
- **Alignment**: Left-align text. Center-align headers.
### Rule 4: PDF Export Protocol
- **Standard**: ALWAYS use the Sovereign Neural CLI for PDF exports.
- **Command**: `npm run sov -- document:export /path/to/report.md` (from `~/.agent/app`).
- **Rationale**: Do not use `pandoc` or other third-party tools. The Sovereign script ensures premium branding and does not require external dependencies like pandoc/wkhtmltopdf to be installed on the user's system.

### Usage Instructions
### Creating a README
```markdown
# Project Name

### Context
Brief description.

### Tech Stack
- PHP 8.4
- Symfony 7

### Commands
`composer install`
```

## 4. Maintenance
- **Review**: Does the doc answer "What, Why, How"?
