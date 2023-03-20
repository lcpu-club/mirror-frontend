<template>
  <div class="pos-relative inline-block">
    <div
      ref="selectBox"
      class="px-2 py-1 mx-1 border border-solid border-rounded border-color-[#d4d4d4] hover-border-color-[#8a8a8a] cursor-pointer transition-200 transition-ease-in-out"
      @click="showPop = !showPop"
    >
      {{ options.find((o) => o.value === modelValue)?.name || '' }}
      <div class="inline-block w-5 h-5 align-middle i-mdi-expand-more"></div>
    </div>
    <ul
      v-show="showPop"
      ref="selectPop"
      class="pos-absolute z-10 bg-white mx-1 border border-solid border-rounded border-color-[#d4d4d4]"
    >
      <li
        v-for="option in options"
        :key="option.value"
        :class="[
          'px-2 py-1 cursor-pointer hover-color-white hover-bg-[#861210]',
          option.value === modelValue ? 'color-white bg-[#861210]' : ''
        ]"
        @click="emit('update:modelValue', option.value), (showPop = !showPop)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps<{
  modelValue: string
  options: {
    value: string
    name: string
  }[]
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const showPop = ref(false)

const selectBox = ref<HTMLElement | null>(null)
const selectPop = ref<HTMLElement | null>(null)

onMounted(() => {
  onClickOutside(selectPop, () => showPop.value = false)
})

watch([showPop], () => {
  if (selectPop.value && selectBox.value) {
    const width = selectBox.value.getBoundingClientRect().width
    selectPop.value.style.width = width + 'px'
  }
})
</script>
