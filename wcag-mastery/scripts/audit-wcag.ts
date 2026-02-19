import pa11y from 'pa11y';
import fs from 'fs';

const url = process.argv[2];
const output = process.argv[3];

if (!url) {
    console.error('Usage: ts-node audit-wcag.ts <URL> [OUTPUT_FILE]');
    process.exit(1);
}

const reportPath = output || 'poster-report.md';

async function runAudit() {
    console.log(`Starting WCAG audit for: ${url}`);
    try {
        const results = await pa11y(url, {
            standard: 'WCAG2AA',
            includeNotices: false,
            includeWarnings: true,
            wait: 2000,
            chromeLaunchConfig: {
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
            }
        });

        const markdown = generateMarkdown(results);
        fs.writeFileSync(reportPath, markdown);
        console.log(`Audit complete. Report saved to: ${reportPath}`);
    } catch (error) {
        console.error('Audit failed:', error);
        process.exit(1);
    }
}

function generateMarkdown(results: any): string {
    const timestamp = new Date().toISOString();
    const errorCount = results.issues.filter((i: any) => i.type === 'error').length;
    const warningCount = results.issues.filter((i: any) => i.type === 'warning').length;

    let md = `# WCAG 2.1 AA Accessibility Audit Report
**Target URL**: [${results.documentTitle}](${url})
**Date**: ${timestamp}
**Engine**: pa11y
**Status**: ${errorCount === 0 ? '✅ **PASS**' : '❌ **FAIL**'}

## Summary
| Metric | Count |
| :--- | :---: |
| **Critical Errors** | ${errorCount} |
| **Warnings** | ${warningCount} |

## Detailed Findings
`;

    if (results.issues.length === 0) {
        md += `
✅ **No violations found!** The page is compliant with WCAG 2.1 AA standards.
`;
    } else {
        md += `
| Severity | Code | Message | Selector |
| :--- | :--- | :--- | :--- |
`;
        results.issues.forEach((issue: any) => {
            const severityIcon = issue.type === 'error' ? '🔴' : '⚠️';
            const code = ``${issue.code}``;
            const message = issue.message.replace(/\|/g, '\\|').replace(/\n/g, ' ');
            const selector = issue.selector ? ``${issue.selector}`` : 'N/A';
            md += `| ${severityIcon} **${issue.type.toUpperCase()}** | ${code} | ${message} | ${selector} |\n`;
        });
    }
    
    return md;
}

runAudit();
