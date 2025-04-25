<script setup lang="ts">
import { UiIcon } from '@src/components'
import { computed } from 'vue'
import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
  ButtonTypes,
  type ButtonEmits,
  type ButtonProps,
  type ButtonSlots,
  type ButtonType
} from './Button.types'
import loader from '../../assets/icons/loader.svg'

defineOptions({
  name: 'UiButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  color: ButtonColors.primary,
  variant: ButtonVariants.filled,
  type: ButtonTypes.standard,
  size: ButtonSizes.md,
  buttonType: 'button'
})
defineSlots<ButtonSlots>()
defineEmits<ButtonEmits>()

const buttonClasses = computed(() => {
  const canFullWidth = props.type !== ButtonTypes.action && props.type !== ButtonTypes.icon
  const fullWidthClass = canFullWidth && props.fullWidth && 'w-full'
  const fullWidthMobileClass = canFullWidth && props.fullWidthMobile && 'w-full md:w-auto'
  const textCase = props.initialCase ? 'normal-case' : props.uppercase ? 'uppercase' : ''
  const textOverflow = props.type === ButtonTypes.action ? 'whitespace-normal' : 'whitespace-nowrap'
  const display = props.type === ButtonTypes.action && 'flex'

  let fontClass = ''
  if (props.type === ButtonTypes.standard) {
    const sizeMap: Record<string, string> = {
      [ButtonSizes.lg]: 'text-button-lg',
      [ButtonSizes.md]: 'text-button-md',
      [ButtonSizes.sm]: 'text-button-sm'
    }
    fontClass = sizeMap[props.size] ?? 'text-button-sm'
  } else if (props.type === ButtonTypes.caption) {
    const sizeMap: Record<string, string> = {
      [ButtonSizes.lg]: 'text-button-xl',
      [ButtonSizes.md]: 'text-button-md',
      [ButtonSizes.sm]: 'text-button-sm'
    }
    fontClass = sizeMap[props.size] ?? 'text-button-sm'
  } else {
    fontClass = 'text-button-xs'
  }
  const disabled = props.disabled || props.loading ? 'disabled pointer-events-none' : ''
  const loading = props.loading && 'loading'

  return [
    fullWidthClass,
    fullWidthMobileClass,
    textCase,
    fontClass,
    disabled,
    loading,
    props.type,
    textOverflow,
    display
  ].filter(Boolean)
})

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
    class="ui-button outline-0 box-border relative text-ellipsis select-none"
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
        <UiIcon :name="icon" size="24" class="shrink-0" />
      </div>
      <template v-if="canShowLabel">
        <UiIcon v-if="leadingIcon && type === ButtonTypes.standard" :name="leadingIcon" size="24" class="shrink-0" />
        <p class="label-text w-full overflow-hidden text-ellipsis">
          <slot>
            {{ label }}
          </slot>
        </p>
        <UiIcon v-if="trailingIcon && type === ButtonTypes.standard" :name="trailingIcon" size="24" class="shrink-0" />
      </template>
      <span
        v-if="caption && type === ButtonTypes.caption"
        class="text-button-caption w-full overflow-hidden text-ellipsis"
      >
        <slot name="caption">{{ caption }}</slot>
      </span>
    </div>
    <div
      v-if="loading"
      class="loading-spin absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      :class="{
        'top-1/2': type !== ButtonTypes.action
      }"
    >
      <UiIcon :src="loader" size="24" class="animate-spin-reverse origin-center" />
    </div>
  </button>
</template>
