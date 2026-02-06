---
name: onboarding-concierge
description: Management of developer personal profile and onboarding.
version: 1.2.0
author: Sovereign OS Agent
tags: [onboarding, profile, context, developer-experience]
---

# 🛎️ Onboarding Concierge

## 1. Core Philosophy (The "Why")

A developer shouldn't spend Day 1 fighting configuration. This skill automates the "Hello World" phase. It manages the Developer's Profile (`profile.md`) and ensures their environment keys (`stack.yaml`) are personalized and ready.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Profile Record

- **File**: `[AGENT_ROOT]/profile.md` (Symlinked to `workspace/pkahfi/profile.md`).
- **Content**:
  - **Identity**: Name, Role, Timezone.
  - **Preferences**: IDE, Shell, Theme.
  - **Knowledge**: Strengths (PHP, JS) and Weaknesses (Go, Rust).
  - **Goals**: "Learn Clean Architecture".

### Rule 2: Stack Personalization

- **Mapping**: Map generic service names (`db`) to local ports (`5432` or `5433`).
- **Git Config**: Ensure `user.name` and `user.email` are correct for this workspace.

### Rule 3: The Welcome Wagon

- **Trigger**: First run of the Agent.
- **Action**: Interview the user. "Welcome. What is your name? What project are we focusing on/today?" -> Populate `profile.md`.

## 3. Usage Instructions (The "How")

### New User Setup

1.  **Check**: Does `profile.md` exist?
2.  **Ask**: "I see you are new. May I ask a few details?"
3.  **Write**:
    ```markdown
    # User Profile

    - **Name**: Putera Kahfi
    - **Role**: Architect
    - **Focus**: Sovereign OS
    ```
4.  **Confirm**: "Profile saved. I will tailor my responses to 'Architect' level."
### Rule 4: Workspace Sovereignty

- **Enforcement**: Any switch between workspaces (e.g., from `arbiter` to `pkahfi`) requires explicit user consent.
- **Verification**: Check `data/active-workspace.txt` before claiming a workspace is active.
- **Reporting**: Clearly distinguish which workspace is currently holding the "Lock".

## 4. Maintenance (The Law)

- **Update**: If user demonstrates new skills (e.g., writes perfect Python), ask "Shall I add Python to your strengths?".
- **Privacy**: Never commit `profile.md` to public repos.
