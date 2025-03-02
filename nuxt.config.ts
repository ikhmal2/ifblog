// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/icon", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  tailwindcss: {
    cssPath: ["./app/assets/css/tailwind.css", { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  },
  css: ["./app/assets/css/main.css"],
  compatibilityDate: "2024-04-03",
});
