import { fileURLToPath } from 'node:url'
import { dirname, resolve, relative, extname } from 'node:path'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import pkg from './package.json'

const dirName = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(dirName, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'node'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {})
      ),
      input: Object.fromEntries(
        globSync('src/**/*.{ts,vue}', { ignore: ['src/stories/**/*', 'src/**/*.d.ts'] }).map((file) => {
          return [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url))
          ]
        })
      ),
      output: {
        chunkFileNames: (file) => {
          const name = file.name.split('.')[0]
          return `lib/${name}.chunk.js`
        },
        entryFileNames: (file) => {
          if (file.name.includes('components')) {
            return `${file.name}.js`
          }

          return `${file.name}.js`
        },
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), viteStaticCopy({ targets: [{ src: 'src/assets', dest: '' }] })]
})
