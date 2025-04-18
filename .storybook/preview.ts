import type { Preview } from '@storybook/vue3'
import './css/tailwind.css'
import '@src/assets/css/variables/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
