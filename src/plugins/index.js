/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Styles

// Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export function registerPlugins(app) {
  app.use(router).use(pinia)
}
