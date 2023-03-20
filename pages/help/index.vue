<template>
  <div class="flex justify-between items-center p-4 border-b">
    <div class="text-2xl">Mirror Help</div>
  </div>
  <article class="p-4 markdown-body">
    Select a help entry from left panel.
    <br />
    Mirrors with direct download links are marked with a download icon
    <div class="inline-block i-mdi-download-circle text-blue align-base relative bottom--0.5"></div>
    .
    <br />
    Or choose one from the list below:
    <ul>
      <li v-for="item of articles" :key="item._id">
        <NuxtLink :to="item._path" class="px-4 py-2 btn flex items-center gap-2">
          {{ item.navTitle || item.title }}
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import '@/assets/styles/markdown.css'

const articles = await queryContent('help')
  .where({ hasDownloads: true })
  .only(['_id', '_path', 'navTitle', 'title', 'hasDownloads'])
  .find()
</script>
