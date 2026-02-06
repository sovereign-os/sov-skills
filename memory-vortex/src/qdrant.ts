import { QdrantClient } from '@qdrant/js-client-rest';
import dotenv from 'dotenv';

dotenv.config();

const QDRANT_URL = process.env.QDRANT_URL || 'http://localhost:6333';

export const qdrant = new QdrantClient({ url: QDRANT_URL });

export const COLLECTION_NAME = 'sovereign_wisdom';
export const VECTOR_SIZE = 384; // all-MiniLM-L6-v2 dimension

export async function ensureCollection() {
    const collections = await qdrant.getCollections();
    const exists = collections.collections.some((c) => c.name === COLLECTION_NAME);

    if (!exists) {
        console.log(`Creating collection '${COLLECTION_NAME}'...`);
        await qdrant.createCollection(COLLECTION_NAME, {
            vectors: {
                size: VECTOR_SIZE,
                distance: 'Cosine',
            },
        });
        console.log(`Collection '${COLLECTION_NAME}' created.`);
    }
}
