<template>
  <div class="border-b">
    <h1 class="text-2xl">{{ article.navTitle }}</h1>
  </div>
  <div class="flex justify-center p-4 gap-2">
    <VariableInput
      v-for="key of Object.keys(variables)"
      :key="key"
      v-model="actualVariables[key]"
      :config="variables[key]"
    />
  </div>
  <ContentRenderer :value="computedArticle" tag="article" class="markdown-body" />
  <div class="mt-2 pt-2 b-t flex">
    <a
      :href="`https://github.com/lcpu-club/mirror-frontend/edit/main/content/${article._file}`"
      target="_blank"
      class="btn p-2 flex items-center gap-2"
    >
      <div class="i-mdi-edit"></div>
      Suggest Changes
    </a>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/markdown.css'
import { IVariableConfig } from '@/lib/variables'

const route = useRoute()

const article = await queryContent('help', ...route.params.slug).findOne()
const variables: Record<string, IVariableConfig> = article.variables ?? {}
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
  return deepInterpolate(article)
})
</script>
