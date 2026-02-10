---
name: environment-binder
description: Maps global project requirements to local environment configurations (Paths, Docker Names, Ports).
version: 1.1.0
author: Sovereign OS Agent
tags: [env, docker, configuration, mapping]
---

# 🔌 Environment Binder


## 1. Core Philosophy (The "Why")
Projects are Abstract; Environments are Concrete. This skill bridges the gap. It ensures `stack.md` remains platform-agnostic while the Agent executes commands precisely on the specific local machine. Agnostic First, Local Bindings Second.

## 2. When to use this skill
This skill is activated when the task requires Maps global project requirements to local environment configurations (Paths, Docker Names, Ports)..
- Detected when the user's intent matches the semantic domain of 🔌 Environment Binder.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Abstract vs. Concrete
- **Global**: `Stack: PHP 8.4` (Requirements).
- **Local**: `Container: as-api-php-1` (Realities).

### Rule 2: The Binding Check
- **Trigger**: Startup or Project Switch.
- **Action**: Check if Global Requirements have Local Bindings (`env.map.json`).
- **Interaction**: If missing, ASK the user. "What is the Docker container name for 'PHP Core'?"

### Rule 3: Privacy Shield
- **Location**: Bindings live in `[AGENT_ROOT]/local/...`.
- **Security**: Hardcoded paths (`/home/puterakahfi`) NEVER leak to shared git repos.

### Usage Instructions
### Interpolation
When executing commands, swap tokens:
- **Input**: `docker exec {php_container} php artisan`
- **Lookup**: `{php_container}` -> `as-api-staging-php`
- **Output**: `docker exec as-api-staging-php php artisan`

## 4. Maintenance
- **Update**: If docker-compose changes names, update the map.
- **Sync**: Verify bindings match valid running containers.
