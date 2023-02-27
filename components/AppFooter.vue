<template>
  <footer class="bg-#700e0d p-8 flex text-white">
    <div>
      <h1 class="text-lg font-sans">Links</h1>
    </div>
    <div class="flex-1"></div>
    <div>
      <img :src="pku" class="h-16" draggable="false" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import pku from '@/assets/images/pku-withtext.svg'
</script>
