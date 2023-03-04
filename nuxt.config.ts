import { execSync } from 'child_process'
import { defineNuxtConfig } from 'nuxt/config'
import { version } from './package.json'

const hash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  unocss: {
    wind: true,
    icons: true,
    theme: {
      colors: {
        pkuRed: 'rgb(112, 14, 13)'
      }
    }
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/global.css'],
  build: {
    transpile: [/echarts/]
  },
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
  },
  runtimeConfig: {
    public: {
      hash,
      version
    }
  },
  routeRules: {
    '/**': { prerender: false },
    '/': { prerender: true },
    '/help/**': { prerender: true },
    '/status/**': { prerender: true }
  }
})
