---
name: agent-skill-mastery
description: The Meta-Skill for auditing, refining, and standardizing all other skills according to AgentSkills.io best practices.
---

# 🥋 Agent Skill Mastery

This skill defines the **Gold Standard** for creating and maintaining Agent Skills. It acts as the "Quality Gate" for the `.agent/skills/` directory.

## 0. Sovereign OS Protocol (The "Sacred Rule")

**MANDATORY**: The Agent MUST NEVER manipulate system state (Skills, Context, Memory) via direct file hacks or "ngide" scripts.

- **The Bridge (Neural Bridge)** is the ONLY trusted neural link between the Agent and the Platform.
- **The Apps (Web, Bridge, Console)** are the official interfaces.
- **Protocol**: Always communicate via API (Neural Bridge) or Kernel Commands. Direct file manipulation is considered a "Neural Divergence" and is strictly prohibited.

## 1. The Anatomy of a Perfect Skill

Every skill MUST adhere to this directory structure and file format.

### 1.1 Directory Structure

```
[AGENT_ROOT]/skills/
  └── my-new-skill/           # Kebab-case name
      ├── SKILL.md            # The Manifesto (REQUIRED)
      ├── resources/          # Knowledge Base (Recommended)
      │   ├── intelligence.json # Structured Brain (Colors, Rules, Palettes)
      │   └── templates.json
      ├── scripts/            # Executable helpers (Optional)
      │   ├── audit.sh
      │   └── fix.py
      ├── templates/          # Boilerplate code (Optional)
      └── examples/           # Usage demonstrations (Optional)
```

### 1.2 SKILL.md Format (Strict YAML Frontmatter)

The `SKILL.md` file is the brain of the skill. It MUST start with valid YAML frontmatter.

```markdown
---
name: my-new-skill
description: A short, punchy (1-sentence) description of what this skill does.
version: 1.0.0
author: Sovereign OS Agent
tags: [tag1, tag2]
---

# 🛡️ Skill Name (Title Case & Emoji)

## 1. Core Philosophy (The "Why")

Briefly explain the purpose of this skill. Why does it exist? What problems does it solve?

## 2. Capabilities & Rules (The "What")

List the specific rules, protocols, or capabilities this skill enforces.

- **Rule 1**: Description.
- **Rule 2**: Description.

### 2.1 Structured Intelligence (The "Brain")

For skills involving large datasets (UI themes, coding patterns, checklists), DO NOT hardcode them in `SKILL.md`.

- **Create**: `resources/<domain>-intelligence.json`.
- **Reference**: Point to this JSON in the Usage section.
- **Format**: Use clean `{ key: value }` JSON objects for instant Agent lookup.

## 3. Usage Instructions (The "How")

How should the Agent or User utilize this skill?

1. Step one.
2. Step two.

## 4. Maintenance & Audit

How do we know if this skill is broken?
```

## 2. The Audit Protocol

When running an audit on a skill (`agent-skill-mastery audit <skill-name>`), check for:

1.  **Existence**: Does folder and `SKILL.md` exist?
2.  **Frontmatter**: Is YAML valid? Does it have `name` and `description`?
3.  **Content**: Does it have clear sections (Philosophy, Rules, Usage)?
4.  **Formatting**: Is Markdown valid? No broken code blocks?

## 3. Refinement Workflow

1.  **Read**: `view_file` the target skill.
2.  **Analyze**: Compare against the standard above.
3.  **Refactor**: Use `replace_file_content` to fix structure, frontmatter, or clarity.
4.  **Verify**: Ensure the skill is readable and actionable.

## 5. The Active Execution Protocol (Auto-Audit)

To prevent "Passive Knowledge" syndrome (where skills exist but aren't used), the Agent MUST follow this protocol for EVERY task:

### 5.1 Mandatory Skill Identification
1. **Analyze**: Before writing any code, identify [Primary] and [Secondary] skills required (e.g., `design-system-mastery` for UI, `security-mastery` for APIs).
2. **Read**: Call `view_file` on the `SKILL.md` of the primary skills if they haven't been read in the current session.

### 5.2 The "Definition of Done" Audit
Before reporting a task as "Selesai" or "Pushing", the Agent MUST run a mental audit:
- "Does this follow `ui-ux-mastery` for both Light and Dark mode?"
- "Is the git history clean according to `git-sentinel`?"
- "Is the API contract standard according to `api-mastery`?"

### 5.3 The "Skill Signature" (Mandatory)
Every final report to the User MUST include a **Verified Skills** block:
```markdown
### ✅ Verification Audit
- [x] **Skill Name**: specific rule verified (e.g., [x] **UI-UX Mastery**: Checked Dark Mode contrast).
- [x] **Skill Name**: ...
```

Failure to provide this signature means the audit was skipped, and the task is NOT considered complete.
