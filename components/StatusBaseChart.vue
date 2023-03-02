<template>
  <figure class="h-400px flex flex-col justify-start items-center">
    <caption class="text-xl">
      <slot name="heading"></slot>
    </caption>
    <slot name="chart">
      <PlaceholderLoading />
    </slot>
  </figure>
</template>
