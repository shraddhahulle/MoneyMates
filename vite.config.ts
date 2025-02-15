import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});