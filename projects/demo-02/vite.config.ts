/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        // opcionalmente
        setupFiles: ['./src/testConfig.ts'],
        include: ['**/*.test.ts', '**/*.test.tsx'],
        exclude: ['node/**/*.ts'],
        // opcionalmente, para configurar la cobertura
        coverage: {
            include: ['src/**/*.ts'],
            exclude: ['src/index.ts', 'src/**/types/*.ts'],
        },
    },
});
