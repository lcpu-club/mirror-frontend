<template>
  <div>
    <span>{{ props.config.name }}</span>
    <AppSelect
      v-if="props.config.type === 'select'"
      :options="config.options"
      :model-value="modelValue"
      @update:model-value="(val) => emit('update:modelValue', val)"
    />
  </div>
</template>

<script setup lang="ts">
import AppSelect from '@/components/AppSelect.vue'
import { IVariableConfig } from '@/lib/variables'

const props = defineProps<{
  modelValue: string
  config: IVariableConfig
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>
