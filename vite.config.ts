/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { dependencies } from './package.json'

const vendorDeps = ['react', 'react-router-dom', 'react-dom', 'react-is', 'react-split', '@remix-run/router']

const chunksFromDeps = (deps: typeof dependencies, vendorDeps: string[]) => {
  const chunks: { [key: string]: string[] } = {}
  Object.keys(deps).forEach((key: string) => {
    if (vendorDeps.includes(key)) {
      return
    }
    chunks[key] = [key]
  })
  return chunks
}

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    open: '/'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: vendorDeps,
          ...chunksFromDeps(dependencies, vendorDeps)
        },
        entryFileNames: 'js/main.min.js',
        chunkFileNames: 'js/[name].min.js',
        assetFileNames: '[ext]/[name].[ext]'
      }
    }
  }
})
