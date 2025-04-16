import type { Meta, StoryObj } from '@storybook/vue3'

import Image from '@src/components/image/Image.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'UI Kit/Image',
  component: Image,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
// @ts-expect-error FIXME
export const Primary: Story = {}
