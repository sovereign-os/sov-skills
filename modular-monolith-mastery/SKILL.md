---
name: modular-monolith-mastery
description: Architecture guide for building Modular Monoliths within the Sovereign OS ecosystem.
version: 1.0.0
author: Sovereign OS Agent
tags: [architecture, saas, scalability, modules]
---

# 📦 Modular Monolith Mastery


## 1. Core Philosophy (The "Why")
In high-end SaaS, we avoid the "Spaghetti Monolith" and the "Premature Microservices" trap. We build **Modular Monoliths**: a single codebase with strictly decoupled modules that communicate through clean interfaces.

## 2. When to use this skill
This skill is activated when the task requires Architecture guide for building Modular Monoliths within the Sovereign OS ecosystem..
- Detected when the user's intent matches the semantic domain of 📦 Modular Monolith Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Structural Rules
1. **Module Isolation**: A module (e.g., `payments`) should not import directly from the internals of another module (e.g., `user-profile`).
2. **Public Interface (API)**: Each module MUST expose a single point of entry (index.ts or a service interface).
3. **Shared Kernel**: Common utilities, shared types, and design tokens live in `@repo/shared` or `@repo/core`.

### Communication Patterns
- **Sync**: Use internal service calls (via DI - Dependency Injection).
- **Async**: Use an internal Event Bus for decoupled reactions (e.g., `UserCreated` -> `EmailService`).

### Scaling Path
- If a module's CPU/Memory usage spikes consistently, it is "ready" to be extracted into a separate service without rewrite.

