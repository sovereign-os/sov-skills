---
name: security-sentinel
description: Automated and manual verification systems to prevent sensitive data leakage (credentials, PII, keys) into the codebase or logs.
version: 1.1.0
author: Sovereign OS Agent
tags: [security, secrets, pii, data-protection, audit]
---

# 🛡️ Security Sentinel

## 1. Core Philosophy (The "Why")
Zero-tolerance for sensitive data leakage. Credentials, API keys, and PII must NEVER reach the repository or public logs. One leak can destroy trust.

## 2. Capabilities & Rules (The "What")

### Rule 1: Secret Prevention
- **Forbidden**: Hardcoded passwords, API keys, tokens.
- **Mandate**: Use `.env` files (gitignored) or encrypted vaults.

### Rule 2: PII Masking
- **Logs**: Mask emails, phone numbers, addresses.
- **DB**: Encrypt sensitive fields (SSN, Credit Card).

### Rule 3: Credential Scrubbing
- **Audit**: Verify `.env`, `config.ini`, private keys are in `.gitignore`.
- **Pre-Commit**: Run `git-secrets` or `trufflehog` to scan commits.

## 3. Usage Instructions (The "How")

### Grep Audit
```bash
grep -r "api_key\|password\|SECRET_" src/
# Should return ZERO hardcoded secrets
```

### Installing git-secrets
```bash
git secrets --install
git secrets --register-aws
```

## 4. Maintenance
- **Review**: Rotate secrets quarterly.
- **Monitor**: Alert on `.env` file commits (should never happen).
