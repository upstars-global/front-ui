<script setup lang="ts">
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
defineSlots<ButtonSlots>()
defineEmits<ButtonEmits>()
</script>

<template>
  <button class="ui-button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<style lang="postcss" src="./button.css" />
