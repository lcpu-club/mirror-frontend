<template>
  <div class="min-h-full relative flex flex-col items-stretch">
    <AppHeader class="sticky top-0 h-16 shadow" />
    <main class="flex-1 m-8">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
