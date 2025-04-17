import type { Meta, StoryObj } from '@storybook/vue3'
import { emitsObserver } from '@src/stories/utils/decorators.ts'
import UiCheckbox from '@src/components/checkbox/UiCheckbox.vue'

const meta = {
  title: 'UI Kit/Checkbox',
  component: UiCheckbox,
  decorators: [emitsObserver],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'text' }
  },
  args: {
    label: 'checkbox',
    modelValue: false,
    required: false
  },
  render: (args) => ({
    name: 'Story',
    components: { UiCheckbox },
    setup: () => ({ args }),
    template: `<UiCheckbox v-bind="args" v-on="$attrs.listeners" />`
  })
} satisfies Meta<typeof UiCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Common: Story = {}
