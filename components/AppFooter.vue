<template>
  <footer class="bg-#700e0d flex flex-col items-stretch text-white">
    <div class="flex p-8">
      <div>
        <h1 class="text-lg font-sans">Links</h1>
      </div>
      <div class="flex-1"></div>
      <div>
        <img :src="pku" class="h-16" draggable="false" />
      </div>
    </div>
    <div class="bg-#230403 px-8 flex justify-between font-mono">
      <div>{{ config.public.version }}</div>
      <a
        :href="'https://github.com/lcpu-club/mirror-frontend/commit/' + hash"
        class="flex items-center"
      >
        <div class="i-mdi-github"></div>
        {{ hash }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import pku from '@/assets/images/pku-withtext.svg'

const config = useRuntimeConfig()
const hash = config.public.hash
</script>
