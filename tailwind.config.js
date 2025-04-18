import plugin from 'tailwindcss/plugin.js'
import { btnPlugin } from './src/components/button/ButtonPlugin.js'
import { TypographyPlugin } from './src/helpers/TypographyPlugin.js'

const uiPlugin = plugin((helpers) => {
  btnPlugin.handler(helpers)
  TypographyPlugin.handler(helpers)
})

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts,tsx,css}'],
  theme: {
    extend: {}
  },
  plugins: [uiPlugin]
}
