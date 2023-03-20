<template>
  <div class="flex justify-between items-center p-4">
    <div class="text-2xl">{{ article.title }}</div>
  </div>
  <div v-if="tabs.length > 1" class="flex justify-center gap-4 border-b">
    <button
      v-for="(tab, i) of tabs"
      :key="i"
      class="btn square p-2"
      :class="i === tabIndex ? 'border-b-2 border-red bg-pku-red bg-op-2' : []"
      @click="tabIndex = i"
    >
      {{ tab }}
    </button>
  </div>
  <HelpContent v-if="tabIndex === 0" :article="article" />
  <HelpDownload v-else-if="tabIndex === 1" :article="article" />
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

const route = useRoute()

const article = await queryContent('help', ...route.params.slug).findOne()

const tabIndex = ref(0)
const tabs = ['Help']
if (article.downloads) {
  tabs.push('Download')
}
</script>
