---
name: twig-mastery
description: Advanced expertise in Symfony Twig templating, focusing on layout integrity, modal orchestration, and CSS z-index management.
version: 1.0.0
author: Sovereign OS Agent
tags: [twig, symfony, frontend, ui-ux, css]
---

# 🎨 Twig Mastery (Symfony Edition)


## 1. Core Philosophy (The "Why")
Templates should be semantic, modular, and decoupled from business logic. High-fidelity UI depends on mastering the interaction between PHP data, Twig syntax, and the final DOM structure.

## 2. When to use this skill
This skill is activated when the task requires Advanced expertise in Symfony Twig templating, focusing on layout integrity, modal orchestration, and CSS z-index management..
- Detected when the user's intent matches the semantic domain of 🎨 Twig Mastery (Symfony Edition).
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Structural Standards
### 2.1 Block Inheritance
- **NEVER** overwrite global blocks without calling `{{ parent() }}` unless intentional.
- Use `{% block stylesheets %}` and `{% block javascripts %}` for page-specific assets.
- Keep `{% block body %}` clean and focused on content.

### 2.2 Reusability
- Use `{% include %}` for small, stateless UI components (buttons, alerts).
- Use `{% embed %}` for components that need complex internal block overrides.
- Use `{% macro %}` for repetitive UI elements that require parameters.

### Modal & Backdrop Governance
As seen in AS-API migration logs, modals in AdminLTE/Bootstrap environments often suffer from "Dimmed Backdrop" or "Z-Index Conflict" issues.

### 3.1 The "Body Escape" Protocol
Modals defined inside deeply nested containers (like `.content-wrapper` or `.card`) may be visually blocked by parent `overflow: hidden` or `z-index`.
- **Enforcement**: Always use jQuery to move modals to the root `body` during `$(document).ready()`.
```javascript
$(document).ready(function() {
    $('#myModal').appendTo("body");
});
```

### 3.2 Z-Index Hierarchy
If a modal appears behind a dark backdrop (dimmed), the modal's `z-index` must be explicitly higher than the backdrop (default 1050).
- **Rule**: Explicitly set `style="z-index: 1060;"` for critical "Danger Zone" or nested modals.

### Performance & Security
- **Escape by Default**: Trust Twig's auto-escaping. Only use `|raw` if you are 100% sure the content is sanitized (e.g., trusted HTML from a database).
- **Lazy Loading**: Use AJAX to fetch heavy statistics or table data to keep the initial page load fast.
- **Path Generation**: Always use `{{ path('route_name') }}` instead of hardcoded URLs.

### Debugging
- Use `{{ dump(variable) }}` for quick inspection.
- Check the Symfony Web Profiler "Twig" tab to see render times and block hierarchy.

