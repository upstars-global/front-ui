import { fileURLToPath } from 'node:url'
import { dirname, resolve, relative, extname } from 'node:path'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

const dirName = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(dirName, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {})
      ),
      input: Object.fromEntries(
        globSync('src/**/*.{ts,vue}', { ignore: 'src/stories/**/*' }).map((file) => {
          return [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url))
          ]
        })
      ),
      output: {
        assetFileNames: 'lib/assets/[name][extname]',
        chunkFileNames: (file) => {
          const name = file.name.split('.')[0].toLowerCase()
          return `lib/${name}.chunk.js`
        },
        entryFileNames: (file) => {
          if (file.name.includes('components')) {
            return `${file.name.toLowerCase()}.js`
          }

          return `${file.name}.js`
        },
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    libInjectCss(),
    dts({ tsconfigPath: './tsconfig.build.json', outDir: 'dist/types', staticImport: true })
  ]
})
