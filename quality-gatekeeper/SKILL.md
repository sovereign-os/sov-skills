---
name: quality-gatekeeper
description: Enforce local quality standards (Linting & Testing) BEFORE any push attempt. Agnostic to language stack.
version: 1.1.0
author: Sovereign OS Agent
tags: [quality, linting, testing, ci, pre-push]
---

# 🛡️ Quality Gatekeeper


## 1. Core Philosophy (The "Why")
Green Build Local = Green Build Remote. The Agent MUST NOT push code that fails local checks. This prevents CI/CD spam and broken builds.

## 2. When to use this skill
This skill is activated when the task requires Enforce local quality standards (Linting & Testing) BEFORE any push attempt. Agnostic to language stack..
- Detected when the user's intent matches the semantic domain of 🛡️ Quality Gatekeeper.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Stack Detection
- **PHP**: `composer.json` exists.
- **Node**: `package.json` exists.
- **Python**: `requirements.txt` exists.

### Rule 2: The Pre-Push Gauntlet
- **PHP**: `vendor/bin/phpcs`, `vendor/bin/phpunit`.
- **Node**: `npm run lint`, `npm test`.
- **Constraint**: If ANY fail (exit code != 0), ABORT PUSH.

### Rule 3: Auto-Fix
- **Attempt**: Run auto-fixers first (`phpcbf`, `eslint --fix`).
- **Report**: If still failing, show errors and ask user to fix.

### Usage Instructions
### Pre-Push Hook
```bash
#!/bin/bash
vendor/bin/phpcs || exit 1
vendor/bin/phpunit || exit 1
```

## 4. Maintenance
- **Update**: Keep linter configs synced across team (`.editorconfig`, `.eslintrc`).
