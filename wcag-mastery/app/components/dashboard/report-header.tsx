'use client';

import { Activity, History, CheckCircle2, AlertOctagon, FileText, FileJson, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ReportHeaderProps {
    report: any;
    stats: { errors: number; warnings: number };
    isPassed: boolean;
    exportMarkdown: () => void;
    exportJSON: () => void;
}

export function ReportHeader({ report, stats, isPassed, exportMarkdown, exportJSON }: ReportHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="space-y-1">
                <h2 className="text-3xl font-black tracking-tighter flex items-center gap-3">
                    <Activity className="h-8 w-8 text-primary" />
                    Compliance Report
                </h2>
                <p className="text-muted-foreground font-bold flex items-center gap-2 text-sm">
                    <History className="h-4 w-4" /> Analyzed at {new Date().toLocaleTimeString()}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={exportMarkdown} className="font-black text-[10px] uppercase tracking-widest gap-2 h-9">
                        <FileText className="h-3.5 w-3.5" /> MD
                    </Button>
                    <Button variant="outline" size="sm" onClick={exportJSON} className="font-black text-[10px] uppercase tracking-widest gap-2 h-9">
                        <FileJson className="h-3.5 w-3.5" /> JSON
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => window.print()} className="font-black text-[10px] uppercase tracking-widest gap-2 h-9">
                        <Printer className="h-3.5 w-3.5" /> Print
                    </Button>
                </div>

                <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden md:block" />

                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Standard: 2.1 AA
                </div>
                {isPassed ? (
                    <div className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-2xl shadow-xl shadow-green-500/20 font-black text-sm animate-bounce-subtile">
                        <CheckCircle2 className="h-5 w-5" />
                        PASSED
                    </div>
                ) : (
                    <div className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-2xl shadow-xl shadow-red-500/20 font-black text-sm">
                        <AlertOctagon className="h-5 w-5" />
                        FAIL
                    </div>
                )}
            </div>
        </div>
    );
}
