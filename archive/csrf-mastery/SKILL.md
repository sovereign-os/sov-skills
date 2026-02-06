---
name: csrf-mastery
description: Advanced CSRF protection strategies for legacy and modern web applications.
version: 1.1.0
author: Sovereign OS Agent
tags: [security, csrf, web, tokens, protection]
---

# 🛡️ CSRF Mastery

## 1. Core Philosophy (The "Why")
Cross-Site Request Forgery (CSRF) exploits trust. A malicious site tricks the user's browser into executing unwanted actions on a trusted site. We prevent this with token-based verification.

## 2. Capabilities & Rules (The "What")

### Rule 1: Token Generation
- **Uniqueness**: Every session gets a unique CSRF token.
- **Rotation**: Regenerate token on sensitive actions (login, payment).
- **Storage**: Store in session (server-side), send to client via hidden form field or header.

### Rule 2: Token Validation
- **Check**: Verify token on every state-changing request (POST, PUT, DELETE).
- **Comparison**: Server token MUST match client token.
- **Rejection**: Return 403 Forbidden if mismatch.

### Rule 3: SameSite Cookies
- **Modern Defense**: Set `SameSite=Strict` or `Lax` on session cookies.
- **Fallback**: Use CSRF tokens for browsers that don't support SameSite.

## 3. Usage Instructions (The "How")

### Implementing CSRF Protection (Symfony)
```php
// Form
{{ form_start(form) }}
  {# CSRF token auto-included #}
{{ form_end(form) }}

// Manual AJAX
fetch('/api', {
  headers: { 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content }
})
```

## 4. Maintenance
- **Audit**: Verify all state-changing endpoints validate CSRF.
- **Test**: Attempt CSRF attack in staging to verify protection.
