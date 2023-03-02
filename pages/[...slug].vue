<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col p-4">
      <ContentDoc tag="article" class="markdown-body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'github-markdown-css/github-markdown-light.css'
</script>
