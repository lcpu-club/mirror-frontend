<template>
  <header class="flex items-center px-8">
    <div>
      <img :src="pku" class="h-12" />
    </div>
    <div class="flex-1"></div>
    <NuxtLink to="/help" class="self-stretch flex items-center px-4 hover:bg-#700e0d0a transition">
      Help
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import pku from '@/assets/images/pku.svg'
</script>
