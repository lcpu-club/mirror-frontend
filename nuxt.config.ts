import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@unocss/nuxt'],
  unocss: {},
  css: ['@unocss/reset/tailwind.css']
})
