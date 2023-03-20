<template>
  <div class="flex flex-wrap-reverse justify-center gap-4 items-end">
    <div class="shadow lt-sm:flex-1 flex flex-col gap-2 min-w-64">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">Helps</div>
      </div>
      <NuxtLink
        v-for="item of articles"
        :key="item._id"
        :to="item._path"
        class="px-4 py-2 btn flex items-center gap-2"
      >
        {{ item.navTitle || item.title }}
        <div v-if="item.hasDownloads" class="i-mdi-download-circle text-blue"></div>
      </NuxtLink>
    </div>
    <div class="shadow flex-1 max-w-256 min-w-64 w-0 flex flex-col">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Help'
})

const articles = await queryContent('help')
  .only(['_id', '_path', 'navTitle', 'title', 'hasDownloads'])
  .find()
</script>
