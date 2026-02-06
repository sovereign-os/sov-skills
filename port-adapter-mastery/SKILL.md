---
name: port-adapter-mastery
description: Hexagonal Architecture implementation through defined interfaces.
version: 1.0.0
category: Engineering
tags: [ports, adapters, hexagonal, decoupling]
---

# 🔌 Ports & Adapters Mastery

## 1. Definition
A system creates a "Boundary" between the application code and external services.

## 2. Ports (Interfaces)
Owned by the Core. Defines **what** the system needs.

## 3. Adapters (Implementations)
Owned by the Infrastructure. Defines **how** to talk to a specific technology.

## 4. Benefit
Total decoupling. We can swap a Database or a Third-party API without changing a line of Business Logic.
