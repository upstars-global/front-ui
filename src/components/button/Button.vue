<script setup lang="ts">
interface ButtonProps {
  color: 'primary' | 'secondary'
}
interface ButtonEmits {
  (event: 'click', value: MouseEvent): void
}
interface ButtonSlots {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default(): any
}

defineOptions({
  name: 'UiButton'
})
defineProps<ButtonProps>()
defineSlots<ButtonSlots>()
defineEmits<ButtonEmits>()
</script>

<template>
  <button class="ui-button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>
