import { NextResponse } from 'next/server';
import pa11y from 'pa11y';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { url } = body;

        console.log(`Received audit request for: ${url}`);

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const results = await pa11y(url, {
            standard: 'WCAG2AA',
            includeNotices: false,
            includeWarnings: true,
            wait: 2000,
            chromeLaunchConfig: {
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
                headless: true
            }
        });

        return NextResponse.json(results);
    } catch (error: any) {
        console.error('Audit failed:', error);
        return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
    }
}
