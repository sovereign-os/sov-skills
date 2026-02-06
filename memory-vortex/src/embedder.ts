import { pipeline } from '@xenova/transformers';

let embedder: any = null;

export async function getEmbeddings(text: string): Promise<number[]> {
    if (!embedder) {
        console.log('Loading embedding model (Xenova/all-MiniLM-L6-v2)...');
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }

    const output = await embedder(text, { pooling: 'mean', normalize: true });
    return Array.from(output.data);
}
