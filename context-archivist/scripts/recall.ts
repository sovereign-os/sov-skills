import 'reflect-metadata';
import { container } from '../../../app/packages/infrastructure/src/di/container';
import { CONSTANTS } from '../../../app/packages/infrastructure/src/di/Constants';
import { RecallKnowledgeUseCase } from '../../../app/packages/core/src/index';

async function main() {
    const query = process.argv[2];
    if (!query) {
        console.error("Usage: npm run recall <keyword>");
        process.exit(1);
    }
    
    console.log(`🧠 Recalling knowledge: "${query}"...`);
    
    try {
        const useCase = container.get<RecallKnowledgeUseCase>(CONSTANTS.RecallKnowledgeUseCase);
        const results = await useCase.execute(query);
        
        console.log(`\nFound ${results.length} memory fragments:\n`);
        
        results.slice(0, 10).forEach(match => {
            console.log(`[${match.score}%] ${match.sourceProject} :: ${match.filePath}:${match.lineNumber}`);
            console.log(`> ${match.content}\n`);
        });

    } catch (error) {
        console.error("❌ Recall Failed:", error);
        process.exit(1);
    }
}

main();
