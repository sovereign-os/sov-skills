import 'reflect-metadata';
import { container } from '../../../app/packages/infrastructure/src/di/container';
import { CONSTANTS } from '../../../app/packages/infrastructure/src/di/Constants';
import { SyncTasksUseCase } from '../../../app/packages/core/src/index';
import dotenv from 'dotenv';
import path from 'path';

// Load Environment Variables from Project Root
dotenv.config({ path: path.resolve(__dirname, '../../../app/.env') });

async function main() {
    const projectKey = process.argv[2] || 'AG';
    
    console.log(`🚀 Starting Sync for Project: ${projectKey}`);
    
    try {
        const useCase = container.get<SyncTasksUseCase>(CONSTANTS.SyncTasksUseCase);
        await useCase.execute(projectKey);
        console.log("✅ Sync Completed Successfully.");
    } catch (error) {
        console.error("❌ Sync Failed:", error);
        process.exit(1);
    }
}

main();
