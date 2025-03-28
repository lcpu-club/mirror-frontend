<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 xl:max-w-320 flex flex-col">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">Mirror List</div>
        <div>
          <input
            v-model="search"
            type="text"
            class="border border-rd px-2 dark:bg-dark-back"
            placeholder="Search"
          />
        </div>
      </div>
      <AsyncData :data="respRef">
        <template #loading>
          <div v-if="respRef.pending.value" class="flex flex-col items-center gap-4 p-8">
            <div class="i-mdi-loading w-16 h-16 animate-spin"></div>
            <div>Loading Mirror List...</div>
          </div>
        </template>
        <table class="mirrorlist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th class="w-48 lt-md:hidden">Last Update</th>
              <th class="w-48 lt-md:hidden">Next Update</th>
              <th class="w-6">Status</th>
              <th class="lt-xl:hidden">Size</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="mirror of respRef.data.value!.filter((mirror) =>
                mirror.name.toLowerCase().includes(search.toLowerCase())
              )"
              :key="mirror.id"
              :class="[`mirrorstatus-${mirror.state}`]"
            >
              <td class="flex gap-1 items-center">
                <NuxtLink :to="mirror.url" :title="mirror.desc">{{ mirror.name }}</NuxtLink>
                <NuxtLink
                  v-if="mirror.id in helps"
                  :to="helps[mirror.id].path"
                  :title="mirror.id"
                  class="flex"
                >
                  <div class="i-mdi-help-circle text-blue">Help</div>
                </NuxtLink>
                <NuxtLink
                  v-if="helps[mirror.id]?.downloads"
                  :to="helps[mirror.id].path + '#download'"
                  :title="mirror.id + '_download'"
                  class="flex"
                >
                  <div class="i-mdi-download-circle text-green">Download</div>
                </NuxtLink>
                <span class="text-xs text-gray truncate lt-lg:hidden">{{ mirror.desc }}</span>
              </td>
              <td class="lt-md:hidden">
                {{ new Date(mirror.lastSyncTime).toLocaleString('zh-CN') }}
              </td>
              <td class="lt-md:hidden">
                {{ new Date(mirror.nextSyncTime).toLocaleString('zh-CN') }}
              </td>
              <td>{{ mirror.state }}</td>
              <td class="lt-xl:hidden">{{ mirror.diskUsage }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center p-2">
          <button
            class="px-4 border border-rd hover:(bg-pku-red bg-op-3.9) transition"
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
useHead({
  title: 'Mirror List'
})

const respRef = useAsyncData('mirrorList', () => useMirrorList())
const search = ref('')

const { data: helpArticles } = await useAsyncData('help-list', () =>
  queryCollection('help').select('path', 'mirrorId', 'downloads').all()
)

const helps = computed(() => {
  if (!helpArticles.value) return {}
  return Object.fromEntries(helpArticles.value.map((help) => [help.mirrorId, help]) || [])
})
</script>

<style>
.mirrorlist-table {
  @apply text-center align-middle table-fixed font-mono;
}

.mirrorlist-table thead tr {
  @apply border-b-2;
}

.mirrorlist-table tbody tr:hover {
  @apply bg-pku-red bg-op-3.9;
}

.mirrorlist-table tr {
  @apply border-b;
}

.mirrorlist-table tr > :first-child {
  @apply text-left;
}

.mirrorlist-table td,
.mirrorlist-table th {
  @apply py-2 px-2;
}

.mirrorstatus-error {
  @apply bg-red-100 dark:bg-red-900;
}

.mirrorstatus-sync {
  @apply bg-blue-100 dark:bg-blue-900;
}

.mirrorstatus-paused {
  @apply bg-yellow-100 dark:bg-yellow-900;
}
</style>
