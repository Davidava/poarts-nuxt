import { defineNuxtConfig } from 'nuxt3'

import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    head: {
        title: 'poarts',
        htmlAttrs: {
          lang: 'en',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: ['~/assets/sass/app.scss'],
    
    target: 'static',

    vite: {
    plugins: [
        svgLoader({
        /* ... */
        })
    ]
    }
})
