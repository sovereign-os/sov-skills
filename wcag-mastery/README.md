# ♿ WCAG Mastery Skill

## Overview
The **WCAG Mastery Skill** is a specialized toolkit designed to automate accessibility testing and ensure compliance with **WCAG 2.1 AA** standards. It features a modern **Next.js Dashboard** with **Shadcn UI** for visual audits and a set of **CLI tools** for headless operations.

## 🚀 Key Features
- **Visual Dashboard**: A user-friendly interface to scan URLs and view detailed violation reports.
- **Automated Audits**: Powered by `pa11y` core for accurate accessibility analysis.
- **CLI Integration**: Run audits directly from the terminal.
- **Global Workflows**: Integrated into Sovereign Agent's global workflow system for easy access.

## 📂 Directory Structure
```
wcag-mastery/
├── app/                  # Next.js Dashboard Application (Shadcn UI)
│   ├── app/              # App Router & API Handling
│   ├── components/       # UI Components (Shadcn)
│   └── public/           # Static assets
├── scripts/              # Automation Scripts
│   ├── start-dashboard.sh # Launches the dashboard on port 8811
│   └── audit-wcag.sh     # Headless CLI audit script
└── .agent/workflows/     # Agent Workflow Definitions
```

## 🛠️ Global Workflows
This skill registers the following global workflows for instant access:

| Workflow | Description |
| :--- | :--- |
| `/wcag-start-app` | **Starts the Dashboard**. Automatically installs dependencies if missing and launches the app on port `8811`. |
| `/wcag-stop-app` | **Stops the Dashboard**. Kills the process running on port `8811`. |
| `/wcag-audit` | **CLI Audit**. perform a quick scan on a URL and save the JSON report. |
| `/wcag-install` | **Clean Install**. Nukes `node_modules` and reinstalls dependencies. Use if the app behaves erratically. |
| `/wcag-report-list` | **List Reports**. Shows all generated accessibility audit reports. |

## 💻 Usage

### 1. Using the Dashboard
1. Run the workflow:
   ```bash
   /wcag-start-app
   ```
2. Open your browser to **[http://localhost:8811](http://localhost:8811)**.
3. Enter the URL of the page you want to audit (e.g., your local dev server).
4. Click **"Scan"**.
5. Review the **Critical Errors** and **Warnings** in the generated report.

### 2. Using the CLI
1. Run the workflow:
   ```bash
   /wcag-audit
   ```
2. Follow the prompts to enter the Target URL and Output Filename.
3. The report will be saved as a JSON file in the dashboard directory.

## 🔧 Prerequisites
- **Node.js**: v18+
- **npm**: v9+
- **Port 8811**: Must be free for the dashboard (configurable in `scripts/start-dashboard.sh`).

## 📝 Notes
- The dashboard uses a custom **Webpack** configuration to handle `pa11y` and `puppeteer` binaries correctly.
- **Tailwind CSS v4** is used for styling with a custom Shadcn theme.

| `/wcag-heal` | **Auto-Heal Analysis**. Analyzes a report and proposes specific code fixes for common issues. |
