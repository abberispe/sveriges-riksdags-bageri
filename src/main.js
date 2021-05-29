import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import router from './router.js'
import store from './store/index.js'

createApp(App).use(store).use(router).mount('#app')