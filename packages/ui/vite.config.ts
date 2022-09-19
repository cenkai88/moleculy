import { defineConfig } from 'vite'
import { resolve } from 'path'
import plugin from '@vitejs/plugin-react'
import libCss from 'vite-plugin-libcss';

import packageConf from './package.json';

const { peerDependencies, dependencies = {} } = packageConf;

export default defineConfig({
  plugins: [
    libCss(),
    plugin({
      'jsxRuntime': 'classic'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)]
    },
    target: 'esnext',
    sourcemap: true
  }
});
