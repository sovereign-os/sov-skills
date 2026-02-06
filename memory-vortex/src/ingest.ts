import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { v5 as uuidv5 } from 'uuid';
import { qdrant, ensureCollection, COLLECTION_NAME } from './qdrant';
import { getEmbeddings } from './embedder';

const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'; // Random constant UUID for namespace

async function main() {
    const workspaceRoot = process.env.AGENT_ROOT || '/home/puterakahfi/.agent';

    // Paths to scan
    const historyPath = path.join(workspaceRoot, 'workspace', 'arbiter', 'operations', 'history');
    const memoryPath = path.join(workspaceRoot, 'memory');
    const patternsPath = path.join(workspaceRoot, 'knowledge', 'patterns');
    const decisionsPath = path.join(workspaceRoot, 'knowledge', 'decisions');

    console.log(`🌀 Vortex Ingestion Started...`);
    await ensureCollection();

    const files = await glob([
        `${workspaceRoot}/workspace/**/operations/history/**/*.md`,
        `${workspaceRoot}/workspace/**/operations/tasks/**/*.md`,
        `${workspaceRoot}/memory/**/*.md`,
        `${workspaceRoot}/workspace/*/.agent/memory/**/*.md`,
        `${workspaceRoot}/skills/**/SKILL.md`,
        `${workspaceRoot}/workflows/*.md`,
        `${workspaceRoot}/kaizen-log.md`,
        `${patternsPath}/**/*.md`,
        `${decisionsPath}/**/*.md`
    ], { dot: true });

    console.log(`Found ${files.length} documents to ingest.`);

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const { data, content: body } = matter(content);

        // Skip purely empty files
        if (!body.trim()) continue;

        // Determine metadata
        const relativePath = path.relative(workspaceRoot, file);
        const type = relativePath.includes('history') ? 'history' :
            relativePath.includes('tasks') ? 'task' :
            relativePath.includes('kaizen-log') ? 'kaizen' :
            relativePath.includes('patterns') ? 'pattern' : 'decision';

        console.log(`Processing: ${relativePath}`);

        // Vectorize
        const vector = await getEmbeddings(body);

        // Deterministic ID based on file path to allow updates
        const id = uuidv5(relativePath, NAMESPACE);

        // Upload to Qdrant
        await qdrant.upsert(COLLECTION_NAME, {
            wait: true,
            points: [
                {
                    id: id,
                    vector: vector,
                    payload: {
                        path: relativePath,
                        type: type,
                        content: body.substring(0, 5000), // Increased snippet size
                        metadata: data
                    }
                }
            ]
        });
    }

    console.log(`✅ Vortex Ingestion Complete.`);
}

main().catch(console.error);
