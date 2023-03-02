<template>
  <slot v-if="props.data.pending.value" name="loading">
    <PlaceholderLoading v-if="props.data.pending.value" />
  </slot>
  <slot v-else-if="props.data.data.value"></slot>
  <slot v-else name="error">
    <div class="flex flex-col items-center p-8">
      <div class="i-mdi-error-outline text-red text-6rem"></div>
      <div class="text-2xl">Failed to Load</div>
      <details class="text-xs font-mono py-4">
        <summary class="text-center">Details</summary>
        {{ props.data.error }}
      </details>
      <div class="flex gap-2">
        <button class="px-4 py-2 border btn" @click="props.data.refresh">Retry</button>
        <button class="px-4 py-2 border btn" @click="router.back()">Back</button>
        <button class="px-4 py-2 border btn" @click="router.replace('/')">Home</button>
      </div>
    </div>
  </slot>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: ReturnType<typeof useFetch>
}>()

const router = useRouter()
</script>
