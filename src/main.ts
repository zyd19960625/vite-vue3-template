import { createApp } from 'vue'
import { ElButton, ElCard, ElLoading } from 'element-plus'
import App from './App.vue'

import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(router)
  .use(store)
  .use(ElButton)
  .use(ElCard)
  .use(ElLoading)
  .mount('#app')
