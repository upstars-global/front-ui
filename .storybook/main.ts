import type { StorybookConfig } from '@storybook/vue3-vite'

export default {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
} satisfies StorybookConfig
