---
description: Automated Documentation & Technical Archiving
---

# 📖 Workflow: /auto-doc

This workflow automatically updates technical documentation after major changes, ensuring the "Digital Twin" of the codebase is always accurate.

## 🛠️ Engaged Skills

- `premium-presentation`: For high-quality documentation and communication.
- `technical-report-mastery`: For professional-grade technical assessment and summaries.
- `architecture-blueprint-mastery`: To sync documentation with the original design intent.

## 🔄 Sequence

1.  **Change Detection**:
    - Analyze the `diff` since the last commit.
    - Identify new modules, updated APIs, or changed dependencies.

2.  **Markdown Evolution**:
    - Update `README.md`, `ARCHITECTURE.md`, or relevant documentation files.
    - Ensure type definitions/contracts are correctly reflected in the docs.

3.  **Visual Asset Sync**:
    - Check if the `/brand-logo` needs to be reflected in new documents.
    - Generate any necessary diagrams or mockups if requested.

4.  **Verification**:
    - Ensure no broken links or outdated references exist in the modified docs.

## 🚀 Usage

Trigger: `/auto-doc`
