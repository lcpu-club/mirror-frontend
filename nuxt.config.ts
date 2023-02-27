export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@unocss/nuxt'],
  unocss: {
    uno: true,
    icons: true
  }
})
