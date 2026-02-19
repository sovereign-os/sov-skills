'use client';

import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Terminal } from 'lucide-react';
import Link from 'next/link';

// Extracted Components
import { AuditCommand } from '@/components/dashboard/audit-command';
import { ReportHeader } from '@/components/dashboard/report-header';
import { MetricCards } from '@/components/dashboard/metric-cards';
import { FindingsTable } from '@/components/dashboard/findings-table';

/**
 * WCAG Master Dashboard
 * Follows SOLID principles by decomposing UI into specialized, reusable components.
 */
export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'all' | 'error' | 'warning'>('all');

  const runAudit = async () => {
    if (!url) return;
    setLoading(true);
    setError('');
    setReport(null);
    setFilter('all');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setReport(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const exportJSON = () => {
    if (!report) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `wcag-report-${new Date().getTime()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const exportMarkdown = () => {
    if (!report) return;
    let md = `# WCAG Audit Report: ${report.documentTitle}\n`;
    md += `**URL:** ${report.pageUrl}\n`;
    md += `**Date:** ${new Date().toLocaleString()}\n\n`;
    md += `## Summary\n`;
    md += `- Errors: ${report.issues.filter((i: any) => i.type === 'error').length}\n`;
    md += `- Warnings: ${report.issues.filter((i: any) => i.type === 'warning').length}\n\n`;
    md += `## Detailed Findings\n\n`;
    md += `| Severity | Code | Message | Selector |\n`;
    md += `| --- | --- | --- | --- |\n`;
    report.issues.forEach((i: any) => {
      md += `| ${i.type.toUpperCase()} | ${i.code} | ${i.message.replace(/\|/g, '\\|')} | \`${i.selector.replace(/\|/g, '\\|')}\` |\n`;
    });

    const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `wcag-report-${new Date().getTime()}.md`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const filteredIssues = useMemo(() => {
    if (!report) return [];
    if (filter === 'all') return report.issues;
    return report.issues.filter((i: any) => i.type === filter);
  }, [report, filter]);

  const stats = useMemo(() => {
    if (!report) return { errors: 0, warnings: 0 };
    return {
      errors: report.issues.filter((i: any) => i.type === 'error').length,
      warnings: report.issues.filter((i: any) => i.type === 'warning').length,
    };
  }, [report]);

  const isPassed = report && stats.errors === 0;

  return (
    <div className='min-h-screen bg-slate-50/50 dark:bg-slate-950 p-6 md:p-12 font-sans selection:bg-primary/10 transition-colors duration-500'>
      <div className='max-w-6xl mx-auto space-y-10'>

        {/* Sovereign Header v2.3 (UI-UX Mastery) */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
          <div className='flex items-center gap-4 group'>
            <div className='p-4 bg-primary text-primary-foreground rounded-2xl shadow-xl shadow-primary/20 rotate-0 group-hover:rotate-6 transition-all duration-300'>
              <ShieldCheck className='h-8 w-8' />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-bold px-2 py-0 text-[10px] uppercase tracking-tighter">
                  v2.3 Platinum
                </Badge>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  System Online
                </div>
              </div>
              <h1 className='text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white'>
                WCAG Master
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/readme" className='group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-black shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all active:scale-95'>
              <Terminal className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
              Skill Documentation
            </Link>
          </div>
        </div>

        {/* Interaction Component (SOLID: SRP) */}
        <AuditCommand
          url={url}
          setUrl={setUrl}
          loading={loading}
          runAudit={runAudit}
          error={error}
        />

        {/* Report Section (SOLID: SRP) */}
        {report && (
          <div className='space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000'>
            <ReportHeader
              report={report}
              stats={stats}
              isPassed={isPassed}
              exportMarkdown={exportMarkdown}
              exportJSON={exportJSON}
            />

            <MetricCards
              stats={stats}
              filter={filter}
              setFilter={setFilter}
              documentTitle={report.documentTitle}
            />

            <FindingsTable
              filteredIssues={filteredIssues}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        )}

        {/* Status Toast */}
        <div className="fixed bottom-10 right-10 z-50 print:hidden">
          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right-10">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="space-y-0.5">
              <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Active Intelligence</p>
              <p className="text-xs font-black">WCAG-MASTERY-V2.3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden pointer-events-none opacity-50 dark:opacity-20 print:hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[15%] right-[5%] w-[350px] h-[350px] bg-indigo-600/20 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
