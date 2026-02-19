---
description: Perform an accessibility audit on a specific URL and generate a Markdown report.
---

1. Ask user for the Target URL to audit.
2. Ask user for the Output Filename (e.g., my-report.md).
// turbo
3. Execute `cd /home/puterakahfi/.sov-agent/skills/wcag-mastery/app && NODE_PATH=./node_modules node ../scripts/audit-wcag.js <URL> <OUTPUT_FILENAME>`.
4. Inform user that the report has been generated and provide the path.
