---
name: tailwind-mastery
description: High-velocity styling with Tailwind CSS, strictly enforcing consistency, utility-first principles, and JIT optimization.
version: 1.1.0
author: Sovereign OS Agent
tags: [css, tailwind, frontend, styling, responsive]
---

# 💨 Tailwind Mastery


## 1. Core Philosophy (The "Why")
Utility-first prevents "class soup" when done right. Configuration is the source of truth. We optimize for speed and consistency, not cleverness.

## 2. When to use this skill
This skill is activated when the task requires High-velocity styling with Tailwind CSS, strictly enforcing consistency, utility-first principles, and JIT optimization..
- Detected when the user's intent matches the semantic domain of 💨 Tailwind Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Class Order (Hygiene)
- **Tool**: Use `prettier-plugin-tailwindcss` for auto-sorting.
- **Order**: Layout -> Box Model -> Typography -> Decor -> Interaction.

### Rule 2: Configuration Over Hardcoding
- **Colors**: Define in `tailwind.config.js` (`colors: { brand: '#1da1f2' }`).
- **Forbidden**: `text-[#1da1f2]` (arbitrary values without config).

### Rule 3: Component Abstraction
- **Primitives**: Extract repetitive patterns into components (`<Button>`).
- **Don't Over-Abstract**: Keep utilities visible in HTML for rapid iteration.

### Rule 4: Mobile First
- **Default**: Base styles for mobile.
- **Breakpoints**: `md:`, `lg:` for larger screens only.

### Rule 5: The @apply Arbitration Law (Syntax-Safe Parser)
- **Constraint**: NEVER use complex arbitrary values inside `@apply` (e.g., `shadow-[0_2px_10px_rgba(...)]`).
- **Reason**: Parsers (Turbopack/PostCSS) often choke on spaces/underscores in `@apply`.
- **Solution**:
  1.  **Best**: Define it in `tailwind.config.js` (`extend: { boxShadow: { ... } }`).
  2.  **Fallback**: Use native CSS property below `@apply`.
  ```css
  /* ❌ BAD (Parsing Risk) */
  @apply shadow-[0_2px_10px_rgba(0,0,0,0.1)];

  /* ✅ GOOD (Native) */
  @apply bg-white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  ```

### Usage Instructions
### Defining Custom Color
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: { brand: '#1da1f2' }
    }
  }
}
```

## 4. Maintenance
- **Audit**: `grep -r "\\[" src/ | grep "\\]"` (Find arbitrary values).
