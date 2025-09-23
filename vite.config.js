import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Option 1: disable CSS minification to avoid warnings
    // minify: false,

    // Option 2: use terser instead of esbuild for CSS minification (optional)
    // cssMinify: 'terser',

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // keep public folder assets path unchanged
          if (assetInfo.name && assetInfo.name.includes('assets/')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
