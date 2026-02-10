---
name: security-mastery
description: Enterprise-grade security expertise based on OWASP standards, focusing on vulnerability prevention, secure coding, and threat mitigation.
version: 1.0.0
memory:
  context_tags: ["security", "owasp", "vulnerability", "php"]
  surprise_threshold: 0.7
---

# Security Mastery 🛡️

This skill provides comprehensive guidance on building and maintaining secure applications, aligning with the OWASP Top 10 and industry best practices.


## 2. When to use this skill
This skill is activated when the task requires Enterprise-grade security expertise based on OWASP standards, focusing on vulnerability prevention, secure coding, and threat mitigation..
- Detected when the user's intent matches the semantic domain of Security Mastery 🛡️.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### 🛡️ OWASP Top 10 Focus
1. **Broken Access Control**: Enforce strict RBAC/ABAC at the application layer. Never rely solely on UI-level hiding.
2. **Cryptographic Failures**: Protect data at rest and in transit using modern algorithms and TLS/SSL.
3. **Injection (SQL, NoSQL, XSS)**: Always use parameterized queries (PDO) and context-aware output escaping.
4. **Insecure Design**: Shift security left; perform threat modeling during the planning phase.
5. **Security Misconfiguration**: Ensure secure defaults, minimize attack surface, and regularly patch dependencies.

### 🛠️ Key Security Mechanisms
1. **CSRF Protection**: Implement Synchronizer Token Pattern (STP) for all state-changing requests. Use `RedisAntiCSRF` for distributed environments.
2. **XSS Prevention**: 
   - **Input**: Sanitize input using tools like `Zend_Sanitizer`.
   - **Output**: Use context-aware escaping (e.g., Smarty's `|escape:"html"`).
3. **Session Management**: 
   - Use `HttpOnly` and `Secure` flags for cookies.
   - Implement session timeout and rotation.
4. **Rate Limiting**: Prevent brute-force attacks by limiting requests from the same IP/account.

### 🔍 Security in FS
- **Sanitization**: FS uses `CommonPlugin` to automatically sanitize all request parameters using `Zend_Sanitizer`.
- **CSRF**: FS implements a robust CSRF system using `RedisAntiCSRF` and a Smarty prefilter for auto-injection.
- **SQLi Prevention**: FS models and controllers use parameterized queries or `BaseDBRow` for safe DB operations.

### 🚀 Best Practices
- **Least Privilege**: Grant users (and database accounts) only the permissions they truly need.
- **Audit Logging**: Track sensitive operations (logins, permission changes, data deletions).
- **Dependency Scanning**: Regularly check `composer.json` and `package.json` for known vulnerabilities.
- **Security Headers**: Implement `Content-Security-Policy` (CSP), `X-Frame-Options`, and `HSTS`.

