<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col">
      <AsyncData :data="respRef">
        <div class="flex justify-between items-center p-4 border-b">
          <div class="text-2xl">File List</div>
          <div>
            <input
              v-model="search"
              type="text"
              class="border border-rd px-2"
              placeholder="Search"
            />
          </div>
        </div>
        <div class="px-2 flex items-center gap-1">
          <NuxtLink to="/" class="text-blue">~</NuxtLink>
          <template v-for="(link, i) of slugLinks" :key="i">
            <span>/</span>
            <NuxtLink :to="link[1]" class="text-blue">{{ link[0] }}</NuxtLink>
          </template>
        </div>
        <table class="mirrorlist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th class="w-24">Size</th>
              <th class="w-72">Update At</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item of respRef.data.value!.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )"
              :key="item.name"
            >
              <td class="flex gap-1 items-center">
                <div :class="[getClass(item.type, item.name)]" class="text-blue"></div>
                <NuxtLink v-if="item.type === 'directory'" :to="`/${path}/${item.name}`">
                  {{ item.name }}
                </NuxtLink>
                <a v-else :href="`${fileBase}/${path}/${item.name}`">{{ item.name }}</a>
              </td>
              <td>{{ prettySize(item.size) ?? '/' }}</td>
              <td>{{ item.mtime }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center p-2">
          <button
            class="px-4 border border-rd hover:(bg-pku-red bg-op-[0.039]) transition"
            @click="respRef.refresh"
          >
            Refresh
          </button>
        </div>
      </AsyncData>
    </div>
  </div>
</template>

<script setup lang="ts">
import { prettySize } from '@/lib/pretty'

const route = useRoute()

const slugs = computed(() => (route.params.slug as string[]).filter((_) => _))
const slugLinks = computed(() =>
  slugs.value.map((slug, i) => [slug, '/' + slugs.value.slice(0, i + 1).join('/')])
)
const path = computed(() => slugs.value.join('/'))

const config = useRuntimeConfig()
const { fileBase } = config.public

const respRef = useFileList(path.value)
const search = ref('')

function getClass(type: string, name: string) {
  if (type === 'directory') return 'i-mdi-folder'
  if (name.endsWith('.iso')) return 'i-mdi-folder-zip'
  return 'i-mdi-file'
}
</script>
