import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/**/*', // Copy all files from assets
          dest: 'assets', // Copy them to the dist/assets folder
        }
      ]
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
