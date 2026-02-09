# Standard: Project Artifacts Hierarchy

This standard defines the mandatory directory structure for all artifacts (finalized reports, documents, and evidence) within a Sovereign Workspace.

## 🏛️ Artifacts Structure (`/artifacts/`)

All finalized output must be stored within `/home/puterakahfi/.agent/workspaces/[WS_NAME]/artifacts/` using the following sub-directories:

| Directory | Purpose | Examples |
|-----------|---------|----------|
| `docs/` | Functional & Technical Specifications | `UCS-SEC-CSRF-001.md`, `BRD-001.md` |
| `blueprints/` | Architectural Designs & Blueprints | `AS-API-Architecture.md`, `Migration-Strategy.md` |
| `verification/` | Final Verification & Testing Reports | `FSDB-3836_Verification.md`, `E2E-Test-Report.pdf` |
| `security/` | Security Audits & Remediation Reports | `Penetration-Test-Q1.md`, `CVE-Security-Audit.md` |
| `evidence/` | Raw testing evidence (Screenshots/Logs) | `test-execution-log.txt`, `api-response.json` |
| `reports/` | General purpose business/ops reports | `Monthly-Performance-Audit.md` |

## 🚫 Prohibited Practices
- **NO** artifacts in project source directories (`/data/www/...`).
- **NO** plural/singular confusion (Use `verification/` NOT `verifications/`).
- **NO** ad-hoc folders like `qa/` or `uml/` at the root of artifacts unless defined here.

## 🔄 Consolidation Rules
1. If a folder is not listed above (e.g., `qa/`, `verifications/`, `as/`), its content must be merged into the standard directories.
2. Legacy files must be relocated immediately upon discovery.
