import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular({ tsconfig: 'projects/cornerstone/tsconfig.spec.json' })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['projects/**/*.spec.ts'],
    setupFiles: ['./test-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['projects/cornerstone/src/lib/**/*.ts'],
      exclude: ['projects/cornerstone/src/lib/**/*.spec.ts'],
      thresholds: { statements: 5, branches: 5, functions: 5, lines: 5 },
    },
  },
});
