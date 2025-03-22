import { execSync } from 'child_process'
import { defineNuxtConfig } from 'nuxt/config'
import { version } from './package.json'

const hash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false
  },
  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxtjs/color-mode'],
  unocss: {
    wind: true,
    icons: true,
    theme: {
      colors: {
        pkuRed: 'rgb(112, 14, 13)',
        darkFront: '#c9d1d9',
        darkBack: '#0d1117'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/global.css'],
  build: {
    transpile: [/echarts/]
  },
  content: {
    highlight: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
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
      version,
      fileBase: '',
      mirrorStatusURL: ''
    }
  },
  routeRules: {
    '/help/**': { prerender: true }
  }
})
