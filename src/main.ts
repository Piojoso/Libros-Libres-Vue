import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

import './style.css'
import LibrosLibresApp from './LibrosLibresApp.vue'

const pinia = createPinia()
const app = createApp(LibrosLibresApp)

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
