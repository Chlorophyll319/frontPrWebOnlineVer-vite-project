import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

// 全域註冊 ConfirmDialog
import ConfirmDialog from 'primevue/confirmdialog'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Select from 'primevue/select'
import ToggleSwitch from 'primevue/toggleswitch'

import Nora from '@primevue/themes/nora'
import 'primeicons/primeicons.css'

// 引入 Tailwind CSS 主樣式
import './style.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Nora,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})
app.use(ConfirmationService)
app.use(ToastService)

app.component('ConfirmDialog', ConfirmDialog)
app.component('Toast', Toast)
app.component('Select', Select)
app.component('ToggleSwitch', ToggleSwitch)

app.mount('#app')
