<template>
  <div class="flex justify-center gap-4 items-start">
    <div class="shadow p-4 flex flex-col gap-2 min-w-48">
      <div class="text-2xl border-b">Helps</div>
      <NuxtLink v-for="item of articles" :key="item._id" :to="item._path" class="p-2 btn">
        {{ item.navTitle || item.title }}
      </NuxtLink>
    </div>
    <div class="shadow flex-1 max-w-256 w-0 flex flex-col p-4">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = await queryContent('help').only(['_id', '_path', 'navTitle', 'title']).find()
</script>
