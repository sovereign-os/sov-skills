import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { v5 as uuidv5 } from 'uuid';
import { qdrant, ensureCollection, COLLECTION_NAME } from './qdrant';
import { getEmbeddings } from './embedder';

const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'; // Constant UUID

// Helper to parse arguments
const args = process.argv.slice(2);
const dirArg = args.find(a => a.startsWith('--dir='))?.split('=')[1];
const workspaceArg = args.find(a => a.startsWith('--workspace='))?.split('=')[1] || 'global';

async function main() {
    const workspaceRoot = process.env.AGENT_ROOT || '/home/puterakahfi/sov-agent';
    const targetDir = dirArg || workspaceRoot;

    console.log(`🌀 Vortex Ingestion Started...`);
    console.log(`📍 Target Directory: ${targetDir}`);
    console.log(`🏷️  Workspace Tag: ${workspaceArg}`);

    await ensureCollection();

    // Define globs based on the target directory structure
    const globs = [
        `${targetDir}/operations/history/**/*.md`,
        `${targetDir}/operations/tasks/**/*.md`,
        `${targetDir}/brain/memory/**/*.md`,
        `${targetDir}/.agent/rules/**/*.md`,
        `${targetDir}/.agent/workflows/**/*.md`,
        `${targetDir}/kaizen-log.md`
    ];

    // If it's the core AGENT_ROOT, add specific core globs
    if (!dirArg) {
        globs.push(`${workspaceRoot}/skills/**/SKILL.md`);
    }

    const files = await glob(globs, { dot: true });

    console.log(`Found ${files.length} documents to ingest.`);

    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        const content = fs.readFileSync(file, 'utf-8');
        const { data, content: body } = matter(content);

        if (!body.trim()) continue;

        const relativePath = path.relative(workspaceRoot, file);

        // Determine type
        let type = 'general';
        if (relativePath.includes('history')) type = 'history';
        else if (relativePath.includes('tasks')) type = 'task';
        else if (relativePath.includes('rules')) type = 'rule';
        else if (relativePath.includes('workflows')) type = 'workflow';
        else if (relativePath.includes('memory')) type = 'wisdom';
        else if (relativePath.includes('kaizen')) type = 'kaizen';

        console.log(`Processing [${type}]: ${relativePath}`);

        const vector = await getEmbeddings(body);
        const id = uuidv5(relativePath, NAMESPACE);

        await qdrant.upsert(COLLECTION_NAME, {
            wait: true,
            points: [
                {
                    id: id,
                    vector: vector,
                    payload: {
                        path: relativePath,
                        type: type,
                        workspace: workspaceArg,
                        content: body.substring(0, 5000),
                        metadata: data
                    }
                }
            ]
        });
    }

    console.log(`✅ Vortex Ingestion Complete for '${workspaceArg}'.`);
}

main().catch(console.error);
