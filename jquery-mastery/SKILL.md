---
name: jquery-mastery
description: Advanced expertise in jQuery (v1.x/v3.x), focusing on legacy DOM manipulation, AJAX orchestration, and secure event handling.
version: 1.1.0
author: Sovereign OS Agent
tags: [frontend, jquery, legacy, ajax, dom]
---

# 🛸 jQuery Mastery


## 1. Core Philosophy (The "Why")
In legacy systems like FS, jQuery is the backbone. We treat it with respect, optimizing for performance (DOM caching) and security (XSS prevention) while maintaining compatibility with ancient plugins.

## 2. When to use this skill
This skill is activated when the task requires Advanced expertise in jQuery (v1.x/v3.x), focusing on legacy DOM manipulation, AJAX orchestration, and secure event handling..
- Detected when the user's intent matches the semantic domain of 🛸 jQuery Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: DOM Efficiency
- **Cache Selectors**: `const $btn = $('#save');` (Don't query repeatedly).
- **ID Over Class**: IDs are faster. Use them for specific elements.

### Rule 2: Event Delegation
- **Dynamic Elements**: Use `$(document).on('click', '.dynamic-btn', handler)`.
- **Why**: Handles elements added via AJAX and reduces memory listeners.
- **Namespace**: Use `.on('click.myEvent')` to allow specific unbinding.

### Rule 3: Safety First
- **Sanitization**: Prefer `.text()` over `.html()`.
- **Injection**: Verify content before `.append()`.

### Usage Instructions
### AJAX Pattern
```javascript
$.ajax({
    url: '/api',
    method: 'POST',
    data: { _token: csrfToken }, // CSRF Mandatory
})
.done(function(data) { ... })
.fail(function(err) { ... });
```

### Modernizing
- Replace `.click(fn)` with `.on('click', fn)`.
- Replace `.live()` (Deprecated) with Delegation.

## 4. Maintenance
- **Conflict**: Watch out for `noConflict()` mode in multi-lib environments (YUI).
