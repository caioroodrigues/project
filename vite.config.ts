import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project/', // 👈 ESSENCIAL para GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Certifica que a build vai para a pasta dist
    sourcemap: true, // Opcional: ajuda no debug
  },
  server: {
    port: 3000, // Porta padrão para desenvolvimento
    open: true, // Abre o navegador automaticamente
  }
});