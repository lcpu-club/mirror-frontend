<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#cf0000" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title = '') => title + (title && ' - ') + 'PKU Mirrors'
})
</script>
