<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col gap-4 p-4">
      <div class="flex justify-between items-center border-b">
        <div class="text-2xl">About</div>
      </div>
      <ContentDoc tag="article" class="markdown-body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'github-markdown-css/github-markdown-light.css'
</script>
