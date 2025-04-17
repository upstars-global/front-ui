<script setup lang="ts">
const model = defineModel<boolean>('modelValue', {
  required: true
})

type CheckboxProps = {
  label: string
  disabled?: boolean
  error?: string
  required?: boolean
}

type CheckboxEmits = {
  (event: 'update:modelValue', value: boolean): void
}

defineProps<CheckboxProps>()
defineEmits<CheckboxEmits>()
</script>

<template>
  <div>
    <label>
      <input v-model="model" type="checkbox" :disabled="disabled" :required="required" />
      <slot name="label">
        <span>{{ label }}</span>
      </slot>
      <slot name="error-message">
        <span>{{ error }}</span>
      </slot>
    </label>
  </div>
</template>
