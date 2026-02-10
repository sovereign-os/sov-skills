---
name: turborepo-smart-caching
description: Optimization of builds using Turborepo filters and remote caching.
version: 1.2.0
author: Sovereign OS Agent
tags: [devops, build, caching, monorepo, performance]
---

# 🚀 Turborepo Smart Caching


## 1. Core Philosophy (The "Why")
"Never compute the same thing twice." In a Monorepo, rebuilding everything is a waste of time and carbon. We trust the Hash. If source + config hasn't changed, the artifact is valid.

## 2. When to use this skill
This skill is activated when the task requires Optimization of builds using Turborepo filters and remote caching..
- Detected when the user's intent matches the semantic domain of 🚀 Turborepo Smart Caching.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: The Pipeline Definition (turbo.json)

- **Inputs**: Define strict inputs for tasks. Exclude `README.md` from triggering a build.
- **Outputs**: Tell Turbo where artifacts live (`dist/**`, `.next/**`).
- **Dependencies**: `^build` ensures libraries build before apps.

### Rule 2: Filter Logic

- **Scope**: Run commands only on affected packages.
- **Command**: `turbo run build --filter=...[HEAD^1]`.
- **Ignore**: Don't run `lint` on packages that haven't changed.

### Rule 3: Remote Caching

- **Shared State**: CI/CD shares cache with Local Devs.
- **Security**: Don't cache secrets. Use env vars responsibly.

### Usage Instructions
### Configuring turbo.json

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"],
      "inputs": ["src/**", "package.json"]
    },
    "lint": {
      "outputs": []
    }
  }
}
```

### Running Optimized Builds

```bash
# Only build apps that changed since main
turbo run build --filter="...[origin/main]"
```

## 4. Maintenance
- **Hash Debugging**: If cache HIT fails unexpectedly, run `turbo run build --dry=json` to inspect inputs.
- **Prune**: Use `turbo prune --scope=<target>` to generate a Docker-ready slice of the monorepo.
