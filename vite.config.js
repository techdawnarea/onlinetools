import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      examples: path.resolve(__dirname, './src/examples'),
      pages: path.resolve(__dirname, './src/pages'),
      App: path.resolve(__dirname, './src/App.jsx'),
      routes: path.resolve(__dirname, './src/routes.jsx'),
      'footer.routes': path.resolve(__dirname, './src/footer.routes.jsx'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
