<script setup lang="ts">
import { computed } from 'vue'

type IconSizes = {
  height: string
  width: string
}

type IconProps = {
  icon?: string
  src?: string
  size?: string
}

const SIZE_CLASSES_LIST: Record<string, string> = {
  '16': 'w-4 h-4',
  '20': 'w-5 h-5',
  '24': 'w-6 h-6',
  '32': 'w-8 h-8',
  '40': 'w-10 h-10',
  '48': 'w-12 h-12'
}

const props = withDefaults(defineProps<IconProps>(), {
  size: '24'
})

const iconSize = computed((): IconSizes => {
  if (Array.isArray(props.size)) {
    const [width, height] = props.size

    return { height, width }
  }

  return { height: props.size, width: props.size }
})
const className = computed(() => SIZE_CLASSES_LIST[props.size])
</script>

<template>
  <div v-if="icon && !src" :class="className" v-html="icon" />
  <img v-else v-bind="iconSize" :class="className" :src="src || undefined" alt="icon" />
</template>
