// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    experimental: {
      database: true
    },
    database: {
      default: {
        connector: 'sqlite',
        options: { name: 'db' }
      }
    }
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],

  css: [
    '~~/assets/css/main.css',
  ],
})