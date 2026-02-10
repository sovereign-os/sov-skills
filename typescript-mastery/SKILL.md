---
name: typescript-mastery
description: Enforce strict, safe, and optimal TypeScript practices.
version: 1.1.0
author: Sovereign OS Agent
tags: [typescript, frontend, type-safety, strict]
---

# 📘 TypeScript Mastery


## 1. Core Philosophy (The "Why")
If it's not typed, it doesn't exist. TypeScript is not JavaScript with annotations; it's a contract enforcement system. We prevent "AnyScript" at all costs.

## 2. When to use this skill
This skill is activated when the task requires Enforce strict, safe, and optimal TypeScript practices..
- Detected when the user's intent matches the semantic domain of 📘 TypeScript Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Strict Mode
- **Mandate**: `tsconfig.json` MUST have `strict: true`.
- **No Implicit Any**: Every variable has a type.
- **Null Safety**: Handle `null` and `undefined` explicitly.

### Rule 2: Type vs Interface
- **Interface**: For public APIs (extensible).
- **Type**: For Unions, Intersections (`type ID = string | number`).
- **NO ENUMS**: Use Union Types (`type Status = 'OPEN' | 'CLOSED'`).

### Rule 3: Utility Types
- **Leverage**: `Pick`, `Omit`, `Partial`, `Readonly`.
- **Example**: `type UpdateUser = Partial<User>;`

### Usage Instructions
### Type Guards
```typescript
function isString(val: unknown): val is string {
  return typeof val === 'string';
}
```

## 4. Maintenance
- **Audit**: Search for `as any`. Replace with `unknown` + Type Guard.
