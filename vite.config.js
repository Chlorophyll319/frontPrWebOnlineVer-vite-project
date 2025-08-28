import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts-next'

import tailwindcss from '@tailwindcss/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss(),
    // 根據 'src/pages' 目錄結構自動產生 Vue 路由
    VueRouter({
      dts: './types/typed-router.d.ts', // 可選：產生路由的 TypeScript 定義檔
    }),
    vue(),
    // 自動將 'src/layouts' 中的檔案作為頁面的佈局使用
    Layouts({
      defaultLayout: 'default', // 預設佈局檔案名稱
    }),
    // 自動引入常用的 API，如 'vue'、'pinia' 等
    AutoImport({
      imports: [
        'vue',
        // 'vue-router', // 已由 VueRouterAutoImports 取代
        // {
        //   'vee-validate': ['useField', 'useForm', 'defineRule', 'configure'],
        //   yup: ['object', 'string', 'number', 'required'],
        // },
        VueRouterAutoImports,
        {
          pinia: ['defineStore', 'storeToRefs'],
        },
      ],
      dts: 'src/auto-imports.d.ts', // 產生自動引入的 TypeScript 定義檔
      dirs: ['src/stores'], // 同時自動引入 src/stores 目錄下的 store
      vueTemplate: true, // 在 Vue 模板中也啟用自動引入
    }),
    // 自動按需引入元件
    Components({
      // 指定哪些副檔名的檔案是元件
      extensions: ['.vue'],
      // 指定要去掃描哪些檔案來尋找元件的使用
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        PrimeVueResolver({
          importStyle: false,
          ssr: false,
        }),
      ],
      dts: 'src/components.d.ts',
    }),
  ],
  optimizeDeps: {
    exclude: [
      'vuetify',
      'vue-router',
      'unplugin-vue-router/runtime',
      'unplugin-vue-router/data-loaders',
      'unplugin-vue-router/data-loaders/basic',
    ],
  },
  define: { 'process.env': {} },
  resolve: {
    // 路徑別名設定
    alias: {
      // 將 '@' 指向 'src' 目錄的絕對路徑
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    // 在匯入時可以省略的副檔名
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
})
