<template>
  <header class="flex items-center px-8 backdrop-filter backdrop-blur z-10">
    <NuxtLink to="/" class="self-stretch flex items-center flex gap-2">
      <img :src="pku" class="h-12" />
      <img :src="mirror" class="h-8 mt-2 lt-md:hidden" />
    </NuxtLink>

    <div class="flex-1"></div>
    <NuxtLink
      v-for="(link, i) of links"
      :key="i"
      :to="link.to"
      class="self-stretch flex items-center px-4 btn square"
      active-class="border-b-2 border-red bg-#700e0d05"
    >
      {{ link.text }}
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import pku from '@/assets/images/pku.svg'
import mirror from '@/assets/images/mirror-text.svg'

const links = [
  { to: '/', text: 'Mirrors' },
  { to: '/help', text: 'Help' },
  { to: '/status', text: 'Status' },
  { to: '/about', text: 'About' }
]
</script>
