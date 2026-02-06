import 'reflect-metadata';
import { container } from '../../../app/packages/infrastructure/src/di/container';
import { CONSTANTS } from '../../../app/packages/infrastructure/src/di/Constants';
import { DiagnoseHealthUseCase } from '../../../app/packages/core/src/index';

async function main() {
    const project = process.argv[2];
    if (!project) {
        console.error("Usage: npm run doctor <project-name>");
        process.exit(1);
    }
    
    try {
        const useCase = container.get<DiagnoseHealthUseCase>(CONSTANTS.DiagnoseHealthUseCase);
        await useCase.execute(project);
    } catch (error) {
        console.error("❌ Diagnosis Failed:", error);
        process.exit(1);
    }
}

main();
