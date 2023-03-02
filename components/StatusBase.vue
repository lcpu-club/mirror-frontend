<template>
  <figure class="h-400px flex flex-col justify-start items-center">
    <caption class="text-xl">
      <slot name="heading"></slot>
    </caption>
    <ClientOnly>
      <template #default>
        <slot name="chart"></slot>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </ClientOnly>
  </figure>
</template>
