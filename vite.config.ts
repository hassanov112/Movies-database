//@ts-ignore
import path from 'path';

import { defineConfig, AliasOptions } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      //@ts-ignore
      '@': path.resolve(__dirname, 'src'),
      //@ts-ignore
      '#components': path.resolve(__dirname, 'src/components'),
      //@ts-ignore
      '#routes': path.resolve(__dirname, 'src/routes'),
      //@ts-ignore
      '#types': path.resolve(__dirname, 'src/types'),
    } as AliasOptions,
  },
});
