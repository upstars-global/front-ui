<script setup lang="ts">
import { UiIcon } from '@src/components'
import { computed } from 'vue'
import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
  ButtonTypes,
  type IEmits,
  type IProps,
  type ISlots,
  type ButtonType
} from './Button.types'
import loader from '../../assets/icons/loader.svg'

defineOptions({
  name: 'UiButton'
})
const props = withDefaults(defineProps<IProps>(), {
  color: ButtonColors.primary,
  variant: ButtonVariants.filled,
  type: ButtonTypes.standard,
  size: ButtonSizes.md
})
defineSlots<ISlots>()
defineEmits<IEmits>()

const buttonClasses = computed(() => {
  const canFullWidth = props.type !== ButtonTypes.action && props.type !== ButtonTypes.icon
  const fullWidthClass = canFullWidth && props.fullWidth && 'w-full'
  const fullWidthMobileClass = canFullWidth && props.fullWidthMobile && 'w-full md:w-auto'
  const textCase = props.initialCase ? 'normal-case' : props.uppercase ? 'uppercase' : ''

  let fontClass = ''
  if (props.type === ButtonTypes.standard) {
    const sizeMap: Record<string, string> = {
      [ButtonSizes.lg]: 'text-button-lg',
      [ButtonSizes.md]: 'text-button-md',
      [ButtonSizes.sm]: 'text-button-sm'
    }
    fontClass = sizeMap[props.size] ?? 'text-button-xs'
  } else if (props.type === ButtonTypes.caption) {
    const sizeMap: Record<string, string> = {
      [ButtonSizes.lg]: 'text-button-xl',
      [ButtonSizes.md]: 'text-button-md',
      [ButtonSizes.sm]: 'text-button-xs'
    }
    fontClass = sizeMap[props.size] ?? 'text-button-xs'
  } else {
    fontClass = 'text-button-xs'
  }
  const disabled = props.disabled || props.loading ? 'disabled pointer-events-none' : ''

  return [fullWidthClass, fullWidthMobileClass, textCase, fontClass, disabled, props.type].filter(Boolean)
})

const buttonType = computed(() => (props.submit ? 'submit' : 'button'))

const contentClasses = computed(() => {
  const types: Partial<Record<ButtonType, string[]>> = {
    slab: ['flex-col'],
    caption: ['flex-col'],
    action: ['flex-col']
  }

  return [
    'ui-button__content',
    'outline-0',
    props.color,
    props.type,
    props.variant,
    props.size,
    ...(types[props.type] || [])
  ]
})

const canShowLabel = computed(() => {
  return props.type !== ButtonTypes.icon
})

const canShowIcon = computed(() => {
  return props.type === ButtonTypes.icon || props.type === ButtonTypes.action || props.type === ButtonTypes.slab
})
</script>

<template>
  <button
    class="ui-button outline-0 box-border relative"
    :class="buttonClasses"
    :type="buttonType"
    @click="$emit('click', $event)"
  >
    <div
      class="flex justify-center items-center"
      :class="[...(type !== ButtonTypes.action ? contentClasses : ['flex-col'])]"
    >
      <div
        v-if="canShowIcon"
        class="flex justify-center items-center"
        :class="type === ButtonTypes.action && contentClasses"
      >
        <UiIcon :icon="icon" size="24" />
      </div>
      <template v-if="canShowLabel">
        <UiIcon v-if="leadingIcon && type === ButtonTypes.standard" :icon="leadingIcon" size="24" />
        <p class="label-text">
          <slot>
            {{ label }}
          </slot>
        </p>
        <UiIcon v-if="trailingIcon && type === ButtonTypes.standard" :icon="trailingIcon" size="24" />
      </template>
      <span v-if="caption && type === ButtonTypes.caption" class="text-button-caption">
        <slot name="caption">{{ caption }}</slot>
      </span>
    </div>
    <div
      v-if="loading"
      class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      :class="{ 'self-start mt-1': type === ButtonTypes.action }"
    >
      <UiIcon :src="loader" size="24" class="animate-spin origin-center" />
    </div>
  </button>
</template>
