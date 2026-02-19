'use client';

import { MousePointer2, AlertOctagon, AlertTriangle } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface MetricCardsProps {
    stats: { errors: number; warnings: number };
    filter: 'all' | 'error' | 'warning';
    setFilter: (f: 'all' | 'error' | 'warning') => void;
    documentTitle: string;
}

export function MetricCards({ stats, filter, setFilter, documentTitle }: MetricCardsProps) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 print:hidden'>
            {/* Title Card */}
            <Card
                onClick={() => setFilter('all')}
                className={cn(
                    "relative overflow-hidden cursor-pointer transition-all duration-500 border-none group hover:translate-y-[-8px]",
                    filter === 'all'
                        ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30"
                        : "bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl"
                )}
            >
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                        <CardTitle className={cn("text-xs font-black uppercase tracking-[0.2em]", filter === 'all' ? "text-primary-foreground/70" : "text-muted-foreground")}>Document Title</CardTitle>
                        <MousePointer2 className={cn("h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity", filter === 'all' ? "text-white" : "text-primary")} />
                    </div>
                </CardHeader>
                <CardContent>
                    <p className='text-xl font-black leading-tight break-words' title={documentTitle}>
                        {documentTitle}
                    </p>
                    <div className={cn("mt-4 flex items-center gap-2 text-[10px] font-black uppercase", filter === 'all' ? "text-primary-foreground/60" : "text-primary")}>
                        Status: Active View
                    </div>
                </CardContent>
            </Card>

            {/* Critical Card */}
            <Card
                onClick={() => setFilter('error')}
                className={cn(
                    "relative overflow-hidden cursor-pointer transition-all duration-500 border-none group hover:translate-y-[-8px]",
                    filter === 'error'
                        ? "bg-red-600 text-white shadow-2xl shadow-red-600/30"
                        : cn("bg-white dark:bg-slate-900 shadow-xl border hover:shadow-2xl", stats.errors > 0 ? "border-red-100 dark:border-red-900/30" : "border-slate-100 dark:border-slate-800")
                )}
            >
                <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                    <CardTitle className={cn("text-xs font-black uppercase tracking-[0.2em]", filter === 'error' ? "text-white/70" : "text-red-500")}>Critical Issues</CardTitle>
                    <AlertOctagon className={cn("h-5 w-5", filter === 'error' ? "text-white" : "text-red-500")} />
                </CardHeader>
                <CardContent>
                    <div className="flex items-baseline gap-2">
                        <div className="text-5xl font-black tracking-tighter">
                            {stats.errors}
                        </div>
                        {stats.errors === 0 && <span className="text-lg font-bold opacity-60">Clean</span>}
                    </div>
                    <p className={cn("text-[10px] font-black uppercase mt-2", filter === 'error' ? "text-white/60" : "text-red-500/80")}>
                        {stats.errors > 0 ? "Blocker Level Actions Required" : "Security & Access Integrity Verified"}
                    </p>
                </CardContent>
            </Card>

            {/* Warnings Card */}
            <Card
                onClick={() => setFilter('warning')}
                className={cn(
                    "relative overflow-hidden cursor-pointer transition-all duration-500 border-none group hover:translate-y-[-8px]",
                    filter === 'warning'
                        ? "bg-amber-500 text-white shadow-2xl shadow-amber-500/30"
                        : "bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl"
                )}
            >
                <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 text-amber-500">
                    <CardTitle className={cn("text-xs font-black uppercase tracking-[0.2em]", filter === 'warning' ? "text-white/70" : "text-amber-500")}>Optimization Alerts</CardTitle>
                    <AlertTriangle className={cn("h-5 w-5", filter === 'warning' ? "text-white" : "text-amber-500")} />
                </CardHeader>
                <CardContent>
                    <div className="text-5xl font-black tracking-tighter">{stats.warnings}</div>
                    <p className={cn("text-[10px] font-black uppercase mt-2", filter === 'warning' ? "text-white/60" : "text-amber-500/80")}>
                        Quality & Experience Enhancements
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
