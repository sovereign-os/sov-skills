'use client';

import { Play, Loader2, AlertTriangle, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface AuditCommandProps {
    url: string;
    setUrl: (url: string) => void;
    loading: boolean;
    runAudit: () => void;
    error: string;
}

export function AuditCommand({ url, setUrl, loading, runAudit, error }: AuditCommandProps) {
    return (
        <Card className="overflow-hidden border-none shadow-2xl shadow-slate-200 dark:shadow-none bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-primary to-indigo-600 animate-gradient-x" />
            <CardHeader className="pb-6 px-8 pt-8">
                <CardTitle className="text-2xl font-black tracking-tight">Intelligence Command</CardTitle>
                <CardDescription className="text-base font-medium">Inject a target URL to initiate a deep accessibility compliance scan.</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='relative flex-1 group'>
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <Search className='h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors' />
                        </div>
                        <Input
                            type='url'
                            placeholder='https://staging.facility-scheduler.devel/login'
                            className='pl-14 h-16 w-full bg-slate-100/50 dark:bg-slate-950/50 border-transparent focus-visible:ring-primary focus-visible:bg-white dark:focus-visible:bg-slate-900 text-lg font-bold transition-all rounded-2xl'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && runAudit()}
                        />
                    </div>
                    <Button
                        onClick={runAudit}
                        disabled={loading || !url}
                        className='h-16 px-10 text-lg font-black shadow-2xl shadow-primary/30 hover:shadow-primary/50 active:scale-95 transition-all rounded-2xl'
                    >
                        {loading ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Play className="mr-3 h-6 w-6 fill-current" />}
                        {loading ? 'Analyzing' : 'Execute Audit'}
                    </Button>
                </div>
                {error && (
                    <Alert variant="destructive" className="mt-8 border-none bg-red-500/10 text-red-600 dark:text-red-400 p-6 rounded-2xl">
                        <AlertTriangle className="h-6 w-6" />
                        <div className="ml-2">
                            <AlertTitle className="font-black text-lg">Execution Failure</AlertTitle>
                            <AlertDescription className="font-bold opacity-80">{error}</AlertDescription>
                        </div>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}
