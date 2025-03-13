<script setup lang="ts">
interface ImageProps {
  src: string
  alt: string
}

defineOptions({
  name: 'UiImage'
})
defineProps<ImageProps>()
</script>

<template>
  <img class="img" :src="src" :alt="alt" />
</template>

<style lang="postcss" src="./image.css" />
