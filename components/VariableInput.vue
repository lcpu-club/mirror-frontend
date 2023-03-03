<template>
  <div>
    <span>{{ props.config.name }}</span>
    <!-- <select
      v-if="props.config.type === 'select'"
      :value="modelValue"
      @change="emit('update:modelValue', ($event.target as any).value)"
    >
      <option v-for="option in config.options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select> -->
    <div v-if="props.config.type === 'select'" class="select-container">
      <div ref="selectBox" class="select-box" @click="showPop = !showPop">
        {{ config.options.find((o) => o.value === modelValue)?.name || '' }}
        <svg
          class="arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
        </svg>
      </div>
      <ul v-show="showPop" ref="selectPop" class="select-pop">
        <li
          v-for="option in config.options"
          :key="option.value"
          :class="['select-option', option.value === modelValue ? 'selected' : '']"
          @click="emit('update:modelValue', option.value), (showPop = !showPop)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { IVariableConfig } from '@/lib/variables'

const props = defineProps<{
  modelValue: string
  config: IVariableConfig
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const showPop = ref(false)

const selectBox = ref<HTMLElement | null>(null)
const selectPop = ref<HTMLElement | null>(null)

watch([showPop], () => {
  if (selectPop.value && selectBox.value) {
    const width = selectBox.value.getBoundingClientRect().width
    selectPop.value.style.width = width + 'px'
  }
})
</script>

<style scoped>
.select-container {
  position: relative;
  display: inline-block;
}

.select-box {
  border: 1px solid rgb(212, 212, 212);
  border-radius: 5px;
  padding: 2px 4px;
  margin: 0 4px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
}

.arrow-down {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.select-box:hover {
  border: 1px solid rgb(138, 138, 138);
}

.select-pop {
  position: absolute;
  background-color: white;
  margin: 0 4px;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 5px;
}

.select-option {
  padding: 2px 4px;
  cursor: pointer;
}

.selected,
.select-option:hover {
  color: white;
  background-color: #861210;
}
</style>
