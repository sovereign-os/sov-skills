---
description: Analyze a WCAG report and propose/apply fixes for common accessibility issues.
---

1. Ask user for the path to the WCAG Markdown report (e.g., reports/audit.md).
2. Execute `node /home/puterakahfi/.sov-agent/skills/wcag-mastery/scripts/heal-wcag.js <REPORT_PATH>`.
3. Analyze the output and identify the source files for the affected components.
4. Propose code modifications to fix contrast, missing alt text, or incorrect semantics.
5. Apply fixes upon user approval ("Lanjut").
