import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],

  // Auto launch browser: https://vitejs.dev/config/#server-open
  server: { open: '/' },
  // decided against VSCode Extension: Vite, by Anthony Fu

  root: 'src',
  publicDir: 'assets/public',
  build: {
    outDir: '../wwwroot',
    emptyOutDir: true,
    // https://vitejs.dev/guide/build.html#multi-page-app
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        coc: resolve(__dirname, 'src/coc.html'),
      },
    },
  },
});
