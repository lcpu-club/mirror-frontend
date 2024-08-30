<template>
  <div>
    <div class="text-lg px-4 pt-4">Download Links:</div>
    <ul class="px-4">
      <AsyncData :data="downloadLinks">
        <li v-for="(download, i) of downloadLinks.data.value" :key="i">
          <a :href="download.link" target="_blank" class="btn p-2 flex items-center gap-2">
            <div class="i-mdi-download"></div>
            {{ download.name }}
          </a>
        </li>
      </AsyncData>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  article: ParsedContent
}>()

const downloadLinks = useDownloadLinks(props.article.downloads)
</script>
