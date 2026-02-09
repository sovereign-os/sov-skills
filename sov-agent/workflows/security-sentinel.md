---
description: Zero-Leakage & Security Audit Sentinel
---

# 🛡️ Workflow: /security-sentinel

This workflow scans the environment for sensitive data leakage and enforces enterprise-grade security standards.

## 🛠️ Engaged Skills

- `security-mastery`: For enterprise-grade security expertise and vulnerability prevention.
- `security-sentinel`: To prevent credentials, PII, and keys from leaking into code/logs.
- `compliance-mastery`: For data residency and GDPR/SOC2 alignment.

## 🔄 Sequence

1.  **Scanning**:
    - Run automated checks for hardcoded secrets, API keys, and private tokens.
    - Audit logs for PII (Personally Identifiable Information).

2.  **Dependency Audit**:
    - Check for known vulnerabilities in `package.json` or `vendor/` directories.

3.  **Configuration Check**:
    - Verify CORS settings, CSP headers, and RBAC logic where applicable.

4.  **Sanitization**:
    - Immediately redact or move sensitive data to `.env` or secure vault systems.
    - Notify the user of any critical vulnerabilities detected.

## 🚀 Usage

Trigger: `/security-sentinel`
