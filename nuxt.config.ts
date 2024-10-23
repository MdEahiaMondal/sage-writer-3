// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app:{
  
  },

  css: ["@/assets/scss/app.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/config/_variables.scss" as *;',
          api: 'modern-compiler'
          
        }
      }
    }
  },

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL
    }
  },

  compatibilityDate: "2024-10-23"
});