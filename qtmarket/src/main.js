import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router/index'

import './css/main.css'
import "bootstrap/dist/css/bootstrap.min.css"


const app = createApp(App)
app.use(router)
app.mount('#app')
