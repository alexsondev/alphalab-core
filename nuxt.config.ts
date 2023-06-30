// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "nuxt-vuefire",
    "@invictus.codes/nuxt-vuetify",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: ["en", "pt", "es"],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
      alwaysRedirect: true,
    },
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
})
