import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from "./router";

const pinia = createPinia()
const app: ReturnType<typeof createApp> = createApp(App)

app.use(ElementPlus).use(pinia).use(router).mount('#app')
