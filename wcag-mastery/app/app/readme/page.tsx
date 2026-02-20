'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  Info,
  Settings,
  PlayCircle,
  Terminal,
  BookOpen,
  FileCode,
  BadgeCheck,
  ExternalLink,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ReadmePage() {
  const [docs, setDocs] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/docs')
      .then(res => res.json())
      .then(data => {
        setDocs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 font-sans'>
      <div className='max-w-5xl mx-auto space-y-8'>

        <Link href="/">
          <Button variant="ghost" className="mb-4 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-primary text-primary-foreground rounded-xl shadow-lg">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight">Sovereign Knowledge Hub</h1>
            <p className="text-muted-foreground font-medium">Web Content Accessibility Guidelines (WCAG) Mastery Documentation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-2xl border-none bg-white dark:bg-slate-900 overflow-hidden rounded-2xl">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-xl font-bold">Standard Operating Protocol</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
                    <Loader2 className="h-10 w-10 animate-spin mb-4" />
                    <p className="font-black text-xs uppercase tracking-widest">Accessing Skill Vault...</p>
                  </div>
                ) : (
                  <article className="prose prose-slate dark:prose-invert max-w-none
                    prose-headings:font-black prose-headings:tracking-tight
                    prose-h1:text-2xl prose-h1:border-b prose-h1:border-slate-200 prose-h1:dark:border-slate-700 prose-h1:pb-3
                    prose-h2:text-xl prose-h2:mt-8
                    prose-h3:text-lg
                    prose-p:text-sm prose-p:leading-relaxed prose-p:text-slate-600 prose-p:dark:text-slate-400
                    prose-li:text-sm prose-li:text-slate-600 prose-li:dark:text-slate-400
                    prose-strong:text-slate-900 prose-strong:dark:text-slate-100
                    prose-code:text-xs prose-code:bg-slate-100 prose-code:dark:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-bold
                    prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-table:text-sm
                    prose-th:bg-slate-50 prose-th:dark:bg-slate-800 prose-th:font-bold prose-th:text-left prose-th:px-4 prose-th:py-2
                    prose-td:px-4 prose-td:py-2 prose-td:border-b prose-td:border-slate-100 prose-td:dark:border-slate-800
                    prose-hr:border-slate-200 prose-hr:dark:border-slate-700
                  ">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {docs?.skillContent || 'Documentation not found in Skill Vault.'}
                    </ReactMarkdown>
                  </article>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-none bg-white dark:bg-slate-900 overflow-hidden rounded-2xl">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex items-center gap-3">
                  <FileCode className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-xl font-bold">Verified Templates</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {docs?.templates?.map((tpl: any, i: number) => (
                    <div key={i} className="group p-5 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/20 hover:border-blue-500/50 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="font-black text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-600 border-none">
                          Markdown Template
                        </Badge>
                        <FileCode className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <h4 className="font-black text-slate-900 dark:text-slate-100 mb-1">{tpl.name}</h4>
                      <p className="text-xs text-muted-foreground font-medium mb-4">Standardized report structure for WCAG audits.</p>
                      <Button variant="outline" size="sm" className="w-full font-bold text-xs gap-2 border-slate-200 dark:border-slate-700">
                        View Schema <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-2xl border-none bg-primary text-primary-foreground overflow-hidden rounded-2xl">
              <CardHeader className="pb-0">
                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] opacity-60">System Workflows</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  {[
                    { cmd: '/wcag-audit', desc: 'Perform headless scan and generate report.' },
                    { cmd: '/wcag-heal', desc: 'Analyze report and apply code fixes.' },
                    { cmd: '/wcag-start-app', desc: 'Bootstrap this dashboard (Port 8811).' },
                    { cmd: '/wcag-install', desc: 'Refresh environment dependencies.' }
                  ].map((wf, i) => (
                    <div key={i} className="group p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/5">
                      <code className="text-sm font-black text-white block mb-1">{wf.cmd}</code>
                      <p className="text-xs font-medium text-white/70">{wf.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-none bg-white dark:bg-slate-900 overflow-hidden rounded-2xl">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Engineering Specs</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-4">
                  {[
                    { label: 'Framework', val: 'Next.js 15 (App Router)' },
                    { label: 'Engine', val: 'pa11y / axe-core' },
                    { label: 'Architecture', val: 'SOLID / Modular' },
                    { label: 'Branding', val: 'Sovereign Platinum' }
                  ].map((info, i) => (
                    <li key={i} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                      <span className="text-xs font-bold text-muted-foreground">{info.label}</span>
                      <span className="text-xs font-black">{info.val}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
