<script setup lang="ts">
import type { IconSize, IconSizes, IconProps } from './UiIcon.types.ts'
import { computed } from 'vue'

const SIZE_CLASSES_LIST: Record<IconSize, string> = {
  '16': 'w-4 h-4',
  '20': 'w-5 h-5',
  '24': 'w-6 h-6',
  '32': 'w-8 h-8',
  '40': 'w-10 h-10',
  '48': 'w-12 h-12',
  full: 'w-full h-full'
}

const props = withDefaults(defineProps<IconProps>(), {
  size: '24'
})

const iconSize = computed((): IconSizes => {
  return { height: props.size, width: props.size }
})
const className = computed(() => SIZE_CLASSES_LIST[props.size])
</script>

<template>
  <div v-if="icon && !src" :class="className" v-html="icon" />
  <img v-else v-bind="iconSize" :class="className" :src="src || undefined" alt="icon" />
</template>
