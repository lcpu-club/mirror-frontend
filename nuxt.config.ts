import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@unocss/nuxt'],
  unocss: {
    wind: true,
    icons: true
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/global.css'],
  build: {
    transpile: [/echarts/]
  }
})
