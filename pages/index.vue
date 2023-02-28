<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">Mirror List</div>
        <div>
          <input
            v-model.lazy="search"
            type="text"
            class="border border-rd px-2"
            placeholder="Search"
          />
        </div>
      </div>
      <div v-if="respRef.pending.value" class="flex flex-col items-center gap-4 p-8">
        <div class="i-mdi-loading w-16 h-16 animate-spin"></div>
        <div>Loading Mirror List...</div>
      </div>
      <template v-else>
        <table class="mirrorlist-table">
          <thead>
            <tr>
              <th>Name</th>
              <th class="w-48">Last Update</th>
              <th class="w-48">Next Update</th>
              <th class="w-6">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="mirror of respRef.data.value!.filter(mirror => mirror.name.toLowerCase().includes(search.toLowerCase()))"
              :key="mirror.id"
              :class="[`mirrorstatus-${mirror.state}`]"
            >
              <td class="flex gap-1 items-center">
                <NuxtLink :to="mirror.url">{{ mirror.name }}</NuxtLink>
                <NuxtLink :to="'/help/' + mirror.id">
                  <div class="i-mdi-help-circle text-blue"></div>
                </NuxtLink>
              </td>
              <td>{{ new Date(mirror.lastSyncTime).toLocaleString('zh-CN') }}</td>
              <td>{{ new Date(mirror.nextSyncTime).toLocaleString('zh-CN') }}</td>
              <td>{{ mirror.state }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center p-2">
          <button
            class="px-4 border border-rd hover:bg-#700e0d0a transition"
            @click="respRef.refresh"
          >
            Refresh
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mirror List'
})

const respRef = useFetch('/api/mirrorlist')
const search = ref('')
</script>

<style>
.mirrorlist-table {
  @apply text-center align-middle table-fixed font-mono;
}

.mirrorlist-table thead tr {
  @apply border-b-2;
}

.mirrorlist-table tbody tr:hover {
  @apply bg-#700e0d0a;
}

.mirrorlist-table tr {
  @apply border-b;
}

.mirrorlist-table tr > :first-child {
  @apply pl-4 text-left;
}

.mirrorlist-table tr > :last-child {
  @apply pr-4;
}

.mirrorlist-table td,
.mirrorlist-table th {
  @apply py-2;
}

.mirrorstatus-error {
  @apply bg-red-100;
}

.mirrorstatus-sync {
  @apply bg-blue-100;
}
</style>
