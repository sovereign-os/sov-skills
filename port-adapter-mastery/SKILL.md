---
name: port-adapter-mastery
description: Hexagonal Architecture implementation through defined interfaces.
version: 1.0.0
category: Engineering
tags: [ports, adapters, hexagonal, decoupling]
---

# 🔌 Ports & Adapters Mastery


## 2. When to use this skill
This skill is activated when the task requires Hexagonal Architecture implementation through defined interfaces..
- Detected when the user's intent matches the semantic domain of 🔌 Ports & Adapters Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Definition
A system creates a "Boundary" between the application code and external services.

### Ports
Owned by the Core. Defines **what** the system needs.

### Adapters
Owned by the Infrastructure. Defines **how** to talk to a specific technology.

### Benefit
Total decoupling. We can swap a Database or a Third-party API without changing a line of Business Logic.

