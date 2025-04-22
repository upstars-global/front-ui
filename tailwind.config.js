import plugin from 'tailwindcss/plugin'
import { checkboxPlugin } from './src/components/checkbox/Checkbox.plugin'

const uiPlugin = plugin((helpers) => {
  checkboxPlugin.handler(helpers)
})

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts,tsx,css}'],
  theme: {
    extend: {}
  },
  plugins: [uiPlugin]
}
