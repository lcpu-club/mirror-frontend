import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  unocss: {
    wind: true,
    icons: true
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/global.css'],
  content: {
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      anchorLinks: {
        depth: 0,
        exclude: [1, 2, 3, 4, 5, 6]
      }
    }
  }
})
