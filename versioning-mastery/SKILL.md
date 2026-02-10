---
name: versioning-mastery
description: Strategic governance for Semantic Versioning, Changelog management, and Tagging hygiene.
version: 1.1.0
author: Sovereign OS Agent
tags: [versioning, semver, release, git, changelog]
---

# 🏷️ Versioning Mastery


## 1. Core Philosophy (The "Why")
Semantic Versioning is a contract with users. Breaking it destroys trust. We enforce strict SemVer 2.0.0 to ensure predictable releases.

## 2. When to use this skill
This skill is activated when the task requires Strategic governance for Semantic Versioning, Changelog management, and Tagging hygiene..
- Detected when the user's intent matches the semantic domain of 🏷️ Versioning Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Semantic Versioning (The Law)
- **Format**: `MAJOR.MINOR.PATCH` (e.g., `2.1.4`).
- **MAJOR**: Breaking changes.
- **MINOR**: New features (backward-compatible).
- **PATCH**: Bug fixes.

### Rule 2: Branch Strategy
- **Release**: `release/v2.1.0` for MAJOR/MINOR.
- **Hotfix**: `hotfix/v2.1.1` for PATCH.
- **Main**: Production-ready. MUST have SemVer tags.

### Rule 3: Changelog
- **Format**: Keep a Changelog (keepachangelog.com).
- **Sections**: Added, Changed, Deprecated, Removed, Fixed, Security.

### Usage Instructions
### Tagging a Release
```bash
git tag -a v2.1.0 -m "Release 2.1.0: New Payment Gateway"
git push origin v2.1.0
```

## 4. Maintenance
- **Audit**: Ensure every tag has a corresponding CHANGELOG entry.
