<script lang="ts" setup>
interface ImageProps {
  src: string
  alt: string
  loading: 'lazy' | 'eager'
}

defineOptions({
  name: 'UiImage'
})
defineProps<ImageProps>()
</script>

<template>
  <img class="img" :src="src" :alt="alt" :loading="loading" />
</template>
