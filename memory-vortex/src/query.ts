import { qdrant, COLLECTION_NAME } from './qdrant';
import { getEmbeddings } from './embedder';

async function main() {
    const query = process.argv[2];
    if (!query) {
        console.error("Usage: npm run query <question>");
        process.exit(1);
    }

    console.log(`🔍 Asking Vortex: "${query}"...`);

    const vector = await getEmbeddings(query);
    const results = await qdrant.search(COLLECTION_NAME, {
        vector: vector,
        limit: 3,
        with_payload: true
    });

    if (results.length === 0) {
        console.log("No relevant wisdom found.");
        return;
    }

    console.log("\n🧠 Vortex Wisdom Recall:\n");
    results.forEach((res: any, i) => {
        const payload = res.payload;
        console.log(`${i + 1}. [${payload.type.toUpperCase()}] ${payload.path} (Score: ${res.score.toFixed(4)})`);
        console.log(`   Snippet: ${payload.content.substring(0, 150).replace(/\n/g, ' ')}...\n`);
    });
}

main().catch(console.error);
