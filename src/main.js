// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

// createApp(App).mount('#app')


import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

export const createApp = ViteSSG(App)