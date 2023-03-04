<template>
  <div class="min-h-full relative flex flex-col items-stretch">
    <AppHeader class="sticky top-0 h-16 shadow box-border" />
    <main id="main" class="flex-1 m-8 box-border">
      <slot></slot>
    </main>
    <AppFooter class="h-[10rem] box-border" />
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
#main {
  min-height: calc(100vh - 18rem);
}
</style>
