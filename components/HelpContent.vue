<template>
  <div>
    <div class="flex justify-center pt-4 gap-2">
      <VariableInput
        v-for="key of Object.keys(variables)"
        :key="key"
        v-model="actualVariables[key]"
        :config="variables[key]"
      />
    </div>
    <ContentRenderer :value="computedArticle" tag="article" class="markdown-body p-4 pt-0" />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { IVariableConfig } from '@/lib/variables'

const props = defineProps<{
  article: ParsedContent
}>()

const variables: Record<string, IVariableConfig> = props.article.variables ?? {}
const actualVariables = reactive<Record<string, string>>(
  Object.fromEntries(Object.entries(variables).map(([k, v]) => [k, v.default]))
)
const computedArticle = computed(() => {
  function deepInterpolate<T>(obj: T): T {
    if (typeof obj === 'string') {
      return obj.replace(/\{\{(.+?)\}\}/g, (_, key) => {
        return actualVariables[key] || ''
      }) as T
    } else if (Array.isArray(obj)) {
      return obj.map(deepInterpolate) as T
    } else if (typeof obj === 'object') {
      if (!obj) return obj
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, deepInterpolate(value)])
      ) as T
    } else {
      return obj
    }
  }
  return deepInterpolate(props.article)
})
</script>
