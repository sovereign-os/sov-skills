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

## 2. Capabilities & Rules (The "What")

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

## 3. Usage Instructions (The "How")

### Pre-Push Hook
```bash
#!/bin/bash
vendor/bin/phpcs || exit 1
vendor/bin/phpunit || exit 1
```

## 4. Maintenance
- **Update**: Keep linter configs synced across team (`.editorconfig`, `.eslintrc`).
