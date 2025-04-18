import { ICONS } from '@src/stories/config/icons.ts'
import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from '@src/components/button/UiButton.vue'
import { computed } from 'vue'
import { ButtonColors, ButtonVariants, ButtonSizes, ButtonTypes } from '../../components/button/Button.types'

const IconsNames = Object.keys(ICONS)

const colorOptions = Object.keys(ButtonColors) as Array<keyof typeof ButtonColors>
const variantOptions = Object.keys(ButtonVariants) as Array<keyof typeof ButtonVariants>
const sizeOptions = Object.keys(ButtonSizes) as Array<keyof typeof ButtonSizes>
const typeOptions = Object.keys(ButtonTypes) as Array<keyof typeof ButtonTypes>

const meta: Meta<typeof UiButton> = {
  title: 'UI Kit/Button',
  component: UiButton,
  parameters: {
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: 'Dark'
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Button color theme'
    },
    variant: {
      control: 'select',
      options: variantOptions,
      description: 'Button style variant'
    },
    size: {
      control: 'select',
      options: sizeOptions,
      description: 'Button size'
    },
    type: {
      control: 'select',
      options: typeOptions,
      description: 'Button internal type'
    },
    leadingIcon: { control: 'select', options: IconsNames, description: 'Name of leading icon' },
    trailingIcon: { control: 'select', options: IconsNames, description: 'Name of trailing icon' },
    icon: { control: 'select', options: IconsNames, description: 'Single icon mode' },
    label: { control: 'text', description: 'Button label text' },
    caption: { control: 'text', description: 'Auxiliary caption below the label' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    fullWidthMobile: { control: 'boolean' },
    uppercase: { control: 'boolean' },
    submit: { control: 'boolean', description: 'Use native submit behavior' },
    initialCase: { control: 'boolean', description: 'Prevent automatic uppercase transform' }
  },
  args: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
    type: 'standard',
    leadingIcon: '',
    trailingIcon: '',
    icon: '',
    label: 'Button',
    caption: '',
    disabled: false,
    loading: false,
    fullWidth: false,
    fullWidthMobile: false,
    uppercase: false,
    submit: false,
    initialCase: false
  },
  render: (args) => ({
    name: 'Story',
    components: { UiButton },
    setup: () => {
      return {
        args: computed(() => {
          return {
            ...args,
            icon: ICONS[args.icon],
            leadingIcon: ICONS[args.leadingIcon],
            trailingIcon: ICONS[args.trailingIcon]
          }
        })
      }
    },
    template: `<UiButton v-bind="args" />`
  })
}

export default meta
type Story = StoryObj<typeof meta>

// Primary button
export const Primary: Story = {}

// Variants showcase
export const Variants: Story = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args, options: variantOptions }),
    template: `
      <div style="display: flex; gap: 1rem;">
        <UiButton v-for="v in options" :key="v" v-bind="{ ...args, variant: v }">
          {{ v }} Variant
        </UiButton>
      </div>
    `
  })
}

// Sizes showcase
export const Sizes: Story = {
  render: (args) => ({
    components: { UiButton },
    setup: () => {
      return { args, options: sizeOptions }
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiButton v-for="option in options" :key="option" v-bind="{ ...args, size: option }">
          {{ option }}
        </UiButton>
      </div>
    `
  })
}

// Colors showcase
export const Colors: Story = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args, options: colorOptions }),
    template: `
      <div style="display: flex; gap: 1rem;">
        <UiButton v-for="c in options" :key="c" v-bind="{ ...args, color: c }">
          {{ c }}
        </UiButton>
      </div>
    `
  })
}

// Types showcase
export const Types: Story = {
  render: (args) => ({
    components: { UiButton },
    setup: () => {
      const customProps = {
        [ButtonTypes.slab]: {
          size: ButtonSizes.sm
        },
        [ButtonTypes.action]: {
          size: ButtonSizes.sm
        }
      }

      return { args, options: typeOptions, ICONS, customProps }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <UiButton
          v-for="t in options"
          :key="t"
          v-bind="{ ...args, type: t, ...customProps[t] }"
          caption="caption"
          :icon="ICONS.fullscreen"
        >
          {{ t }} Type
        </UiButton>
      </div>
    `
  })
}

// With leading and trailing icons
export const WithIcons: Story = {
  args: {
    leadingIcon: IconsNames[0],
    trailingIcon: IconsNames[0],
    label: 'With Icons'
  }
}

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled'
  }
}

// Loading state
export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading...'
  }
}
