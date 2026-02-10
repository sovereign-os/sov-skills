---
name: smarty-mastery
description: Expertise in Smarty templating engine (v2.x/v3.x) for legacy PHP applications, focusing on logic decoupling and XSS safety.
version: 1.2.0
author: Sovereign OS Agent
tags: [php, legacy, smarty, templating, xss]
---

# 🎩 Smarty Mastery


## 1. Core Philosophy (The "Why")
Smarty is the layer between PHP logic and HTML presentation in legacy systems. We treat it as a "Protected View" layer. We aim to keep logic in PHP and presentation in Smarty, ensuring the codebase remains maintainable even if it's 15+ years old.

## 2. When to use this skill
This skill is activated when the task requires Expertise in Smarty templating engine (v2.x/v3.x) for legacy PHP applications, focusing on logic decoupling and XSS safety..
- Detected when the user's intent matches the semantic domain of 🎩 Smarty Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Separation of Concerns

- **Logic**: NEVER perform complex calculations or database queries inside `{php}` tags (Deprecated) or complex Smarty logic.
- **Data**: PHP should provide "Render-Ready" data. Smarty only handles loops and conditionals.

### Rule 2: XSS Prevention

- **Escaping**: Use `|escape:'html'` or `|escape:'javascript'` for all user-generated content.
- **Example**: `{$username|escape:'html'}`.

### Rule 3: Delimiter Hygiene

- **Spaces**: Use spaces around delimiters if working with CSS/JS to avoid collisions.
- **Literal**: Use `{literal} ... {/literal}` blocks for large JS/CSS blocks.

### Rule 4: Modifier Mastery

- **Leverage**: Use built-in modifiers like `|default`, `|date_format`, `|truncate`.
- **Custom**: If a modifier is needed multiple times, create a custom Smarty plugin instead of inline logic.

### Usage Instructions
### Basic Pattern

```smarty
<div class="user-card">
    <h2>{$user.name|escape}</h2>
    <p>Joined: {$user.created_at|date_format:"%D"}</p>
    {if $user.is_active}
        <span class="badge green">Active</span>
    {else}
        <span class="badge red">Inactive</span>
    {/if}
</div>
```

### JS Integration

```smarty
<script>
{literal}
    function init() {
        console.log("Initialized");
    }
{/literal}
    var userId = "{$userId|escape:'javascript'}";
</script>
```

## 4. Maintenance
- **No {php} Tags**: Any usage of `{php}` is a CRITICAL violation. Refactor to a class or helper.
- **Cache Control**: Be aware of `$smarty->caching`. Clear cache after template modifications in production.
- **Legacy Compatibility**: Test changes in both PHP 5.6 and PHP 8.x environments if applicable.
