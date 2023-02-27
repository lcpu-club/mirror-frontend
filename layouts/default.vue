<template>
  <div class="relative">
    <AppHeader class="fixed top-0 left-0 right-0 h-16 shadow" />
    <main class="pt-16 m-8">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
