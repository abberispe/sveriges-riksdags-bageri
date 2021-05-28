import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import router from './router.js'
import store from './store/index.js'

createApp(App).use(router).use(store).mount('#app')