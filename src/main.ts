import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import LibrosLibresApp from './LibrosLibresApp.vue'

const pinia = createPinia()
const app = createApp(LibrosLibresApp)

app.use(pinia)
app.mount('#app')
