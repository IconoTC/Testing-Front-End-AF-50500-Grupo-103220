import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        globals: true,
        // opcionalmente
        include: ['**/*.test.ts', '**/*.test.tsx'],
        exclude: ['node/**/*.ts'],
        // opcionalmente, para configurar la cobertura
        coverage: {
            include: ['src/**/*.ts'],
            exclude: ['src/index.ts', 'src/**/types/*.ts'],
        },
    },
});
