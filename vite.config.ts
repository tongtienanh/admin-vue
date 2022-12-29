import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import postcss from './postcss.config.js'
import vuetify from "vite-plugin-vuetify";
import {VuetifyResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enabled by default
    AutoImport({
    }),
    Components({
      resolvers: [VuetifyResolver()]
    }),
  ]
})
