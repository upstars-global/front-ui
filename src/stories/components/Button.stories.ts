import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '@src/components/button/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'UI Kit/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn()
  },
  render: (args) => ({
    name: 'Story',
    components: { Button },
    setup: () => ({ args, label: 'Button' }),
    template: `<Button v-bind="args">{{ label }}</Button>`
  })
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
// @ts-expect-error FIXME
export const Primary: Story = {}
