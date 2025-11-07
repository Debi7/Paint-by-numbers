import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/Paint-by-numbers/',

  plugins: [react(), svgr()],
  server: {
    port: 5500,
  },
  build: {
    outDir: 'dist',
  },
});
