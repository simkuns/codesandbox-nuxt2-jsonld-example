import { NuxtConfig } from "@nuxt/types";

export default <NuxtConfig> {
  target: "static",

  rootDir: __dirname,

  components: [],

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
    "codesandbox-nuxt2-ui-example",
  ],
};
