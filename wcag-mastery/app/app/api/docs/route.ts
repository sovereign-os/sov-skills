import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const skillPath = '/home/puterakahfi/.sov-agent/skills/wcag-mastery/SKILL.md';
        const templatesPath = '/home/puterakahfi/.sov-agent/skills/wcag-mastery/resources/templates';

        const skillContent = await fs.readFile(skillPath, 'utf-8');

        // Read templates
        const templateFiles = await fs.readdir(templatesPath);
        const templates = await Promise.all(
            templateFiles.map(async (file) => ({
                name: file,
                content: await fs.readFile(path.join(templatesPath, file), 'utf-8'),
            }))
        );

        return NextResponse.json({
            skillContent,
            templates
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
