<template>
  <div>
    <div class="text-lg px-4 pt-4">Download Links:</div>
    <ul class="px-4">
      <AsyncData v-if="article?.downloads" :data="downloadLinks">
        <li v-for="(download, i) of downloadLinks.data.value" :key="i">
          <a :href="download.link" target="_blank" class="btn p-2 flex items-center gap-2">
            <div class="i-mdi-download"></div>
            {{ download.name }}
          </a>
        </li>
      </AsyncData>
      <li v-else class="p-4 text-gray-500">No download links available</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  article: ParsedContent | null
}>()

const downloadLinks = computed(() => {
  return props.article?.downloads ? useDownloadLinks(props.article.downloads) : { data: ref([]) }
})
</script>
