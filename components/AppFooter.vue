<template>
  <footer class="bg-pku-red flex flex-col items-stretch text-white">
    <div class="flex p-8 items-center">
      <div>
        <div class="grid grid-cols-[auto_1fr] gap-x-2 place-items-start">
          <template v-for="(link, i) of links" :key="i">
            <div class="text-gray">{{ link.label }}</div>
            <a v-bind="link.attr" class="border-b border-b-dashed hover:border-b-solid">
              {{ link.name }}
            </a>
          </template>
        </div>
      </div>
      <div class="flex-1"></div>
      <div>
        <img :src="pku" class="h-16" draggable="false" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import pku from '@/assets/images/pku-withtext.svg'

const links = [
  {
    label: 'Backend',
    name: 'GitHub',
    attr: {
      href: 'https://github.com/PKUOSC',
      target: '_blank'
    }
  },
  {
    label: 'Frontend',
    name: 'lcpu-club/mirror-frontend',
    attr: {
      href: 'https://github.com/lcpu-club/mirror-frontend',
      target: '_blank'
    }
  },
  {
    label: 'Issues',
    name: 'GitHub Issues',
    attr: {
      href: 'https://github.com/lcpu-club/mirror-frontend/issues/new/choose',
      target: '_blank'
    }
  },
  {
    label: 'Contact us',
    name: 'mirror@pku.edu.cn',
    attr: {
      href: 'mailto:mirror.pku.edu.cn'
    }
  }
]
</script>
