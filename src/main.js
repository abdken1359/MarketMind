import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router.js'
import vuetify from './plugins/vuetify.js'
import {themeStore} from './stores/theme.js'
import {routeview} from './stores/routeview.js'
import { createPinia } from 'pinia'

const pinia= createPinia()
const app= createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')
