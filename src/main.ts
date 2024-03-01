import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

const pinia = createPinia()

app.use(router).use(pinia).use(ElementPlus).mount('#app')
