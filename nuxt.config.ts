import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'poarts',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'preload', type: "font/woff2",  href: '~/assets/fonts/Manrope-Bold.woff2', as: "font" },
      { rel: 'preload', type: "font/woff2",  href: '~/assets/fonts/Manrope-Regular.woff2', as: "font" },
      { rel: 'preload', type: "font/woff2",  href: '~/assets/fonts/Manrope-SemiBold.woff2', as: "font" },
      { rel: 'preload', type: "font/woff2",  href: '~/assets/fonts/MonumentExtended-Regular.woff2', as: "font" }
    ],
  },

  css: ['~/assets/sass/app.scss'],
})
