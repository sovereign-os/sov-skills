'use client';

import { CheckCircle2, FilterX } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface FindingsTableProps {
    filteredIssues: any[];
    filter: 'all' | 'error' | 'warning';
    setFilter: (f: 'all' | 'error' | 'warning') => void;
}

export function FindingsTable({ filteredIssues, filter, setFilter }: FindingsTableProps) {
    return (
        <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 overflow-hidden rounded-3xl print:shadow-none print:border">
            <CardHeader className="px-10 py-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-800/20 print:bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <CardTitle className="text-2xl font-black tracking-tight">Violation Intelligence</CardTitle>
                        <CardDescription className="text-sm font-bold flex items-center gap-2 mt-1">
                            Showing intelligence for
                            <Badge variant="outline" className="text-primary border-primary font-black uppercase text-[10px]">
                                {filter === 'all' ? 'Full Stack' : filter}
                            </Badge>
                        </CardDescription>
                    </div>
                    {filter !== 'all' && (
                        <Button variant="outline" size="lg" onClick={() => setFilter('all')} className="font-black text-xs uppercase tracking-widest border-2 hover:bg-slate-100 transition-all rounded-xl print:hidden">
                            <FilterX className="h-4 w-4 mr-2" /> Clear All Filters
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className='overflow-x-auto'>
                    <Table>
                        <TableHeader className="bg-slate-100/50 dark:bg-slate-800/40 print:bg-slate-50">
                            <TableRow className="hover:bg-transparent border-none">
                                <TableHead className="w-[140px] font-black uppercase text-[10px] tracking-[0.2em] pl-10 py-5 text-slate-500">Severity</TableHead>
                                <TableHead className="w-[200px] font-black uppercase text-[10px] tracking-[0.2em] text-slate-500">Code ID</TableHead>
                                <TableHead className="font-black uppercase text-[10px] tracking-[0.2em] text-slate-500">Intelligence Brief</TableHead>
                                <TableHead className="w-[300px] font-black uppercase text-[10px] tracking-[0.2em] hidden md:table-cell pr-10 text-slate-500">DOM Context</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredIssues.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-80 text-center">
                                        <div className="flex flex-col items-center justify-center space-y-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-green-500/20 animate-ping rounded-full" />
                                                <div className="relative p-8 bg-green-500 text-white rounded-full shadow-2xl shadow-green-500/40">
                                                    <CheckCircle2 className="h-16 w-16" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-3xl font-black tracking-tighter text-green-600 dark:text-green-500 uppercase">Integrity Verified</h3>
                                                <p className="text-muted-foreground font-bold max-w-sm mx-auto">No violations detected for the current scan configuration. Accessibility standards are maintained.</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredIssues.map((issue: any, index: number) => (
                                    <TableRow key={index} className="group hover:bg-primary/[0.02] dark:hover:bg-primary/[0.04] transition-all border-b border-slate-50 dark:border-slate-800/50">
                                        <TableCell className="pl-10">
                                            <div className={cn(
                                                "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border-2",
                                                issue.type === 'error'
                                                    ? "bg-red-50 text-red-600 border-red-500/20 dark:bg-red-500/10"
                                                    : "bg-amber-50 text-amber-600 border-amber-500/20 dark:bg-amber-500/10"
                                            )}>
                                                <span className={cn("w-2 h-2 rounded-full", issue.type === 'error' ? "bg-red-600 animate-pulse" : "bg-amber-500")} />
                                                {issue.type === 'error' ? 'Critical' : 'Warning'}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-mono text-[11px] font-black text-slate-900 dark:text-slate-100">{issue.code.split('.').pop()}</span>
                                                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Full Stack Trace: {issue.code}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-6 pr-6">
                                            <p className="font-bold text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                                                {issue.message}
                                            </p>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell pr-10 py-6">
                                            <div className="max-w-[280px]">
                                                <code className="block bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-[10px] font-mono text-primary font-bold break-all border border-slate-200 dark:border-slate-700 select-all group-hover:shadow-lg transition-all">
                                                    {issue.selector}
                                                </code>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
