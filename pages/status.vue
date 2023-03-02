<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col gap-4">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">Mirror Status</div>
      </div>
      <ClientOnly>
        <StatusCharts />
      </ClientOnly>
    </div>
  </div>
</template>
