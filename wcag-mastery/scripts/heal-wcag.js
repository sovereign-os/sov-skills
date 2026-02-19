const fs = require('fs');
const path = require('path');

const reportPath = process.argv[2];

if (!reportPath) {
    console.error('Usage: node heal-wcag.js <REPORT_MD_FILE>');
    process.exit(1);
}

if (!fs.existsSync(reportPath)) {
    console.error('Report file not found:', reportPath);
    process.exit(1);
}

const content = fs.readFileSync(reportPath, 'utf8');

// Simple regex to parse the table in the markdown report
const lines = content.split('\n');
const issues = [];
let tableStarted = false;

for (const line of lines) {
    if (line.includes('| Severity | Code | Message | Selector |')) {
        tableStarted = true;
        continue;
    }
    if (tableStarted && line.startsWith('|') && !line.includes('---')) {
        const parts = line.split('|').map(p => p.trim());
        if (parts.length >= 5) {
            issues.push({
                severity: parts[1],
                code: parts[2],
                message: parts[3],
                selector: parts[4].replace(/`/g, '')
            });
        }
    }
}

console.log(`Found ${issues.length} issues in the report.`);

// Filter for fixable issues
const fixable = issues.filter(i => {
    return i.code.includes('G18') || // Contrast
           i.code.includes('H67') || // Alt text
           i.code.includes('H42') || // Heading
           i.message.toLowerCase().includes('alt attribute');
});

console.log(`Healable issues identified: ${fixable.length}`);

if (fixable.length === 0) {
    console.log('No automatically healable issues found.');
    process.exit(0);
}

// Just output the findings for the Agent to act on
console.log('\n--- HEAL PROPOSAL ---');
fixable.forEach(i => {
    console.log(`Issue: ${i.code}`);
    console.log(`Selector: ${i.selector}`);
    console.log(`Recommendation: ${i.message}`);
    console.log('---');
});
