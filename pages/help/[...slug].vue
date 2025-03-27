<template>
  <div class="flex justify-between items-center p-4">
    <div class="text-2xl">{{ article?.title }}</div>
  </div>
  <div class="flex justify-center lg:justify-start border-b">
    <template v-if="tabs.length > 1">
      <button
        v-for="(tab, i) of tabs"
        :key="i"
        class="btn square px-4 py-2"
        :class="i === tabIndex ? 'border-b-2 border-red bg-pku-red bg-op-2' : []"
        @click="tabIndex = i"
      >
        {{ tab.label }}
      </button>
    </template>
  </div>
  <KeepAlive>
    <component :is="tabs[tabIndex].component" :article="article" />
  </KeepAlive>
  <div class="mt-2 b-t flex">
    <a
      :href="`https://github.com/lcpu-club/mirror-frontend/edit/main/content/${article._file}`"
      target="_blank"
      class="btn p-2 flex items-center gap-2"
    >
      <div class="i-mdi-edit"></div>
      Suggest Changes
    </a>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/markdown.css'
import HelpContent from '@/components/HelpContent.vue'
import HelpDownload from '@/components/HelpDownload.vue'

const route = useRoute()
const slug = route.params.slug

const { data: article } = await useAsyncData(
  `help-${Array.isArray(slug) ? slug.join('/') : slug}`,
  () => {
    const path = `/help/${Array.isArray(slug) ? slug.join('/') : slug}`
    return queryCollection('help').path(path).first()
  }
)

const tabIndex = ref(0)
const tabs = computed(() =>
  [
    {
      label: 'Content',
      component: HelpContent
    },
    {
      label: 'Download',
      component: HelpDownload,
      hide: !article.value.downloads
    }
  ].filter((tab) => !tab.hide)
)

onMounted(() => {
  if (route.hash === '#download' && article.value?.downloads) tabIndex.value = 1
})
</script>
