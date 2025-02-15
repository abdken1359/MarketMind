import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router.js'
import vuetify from './plugins/vuetify.js'
import '@mdi/font/css/materialdesignicons.min.css'

import {themeStore} from './stores/theme.js'
import {routeview} from './stores/routeview.js'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import {supabase} from './plugins/supabase.js'


import Language from './components/utilities/language.vue'



const app= createApp(App)
const head=createHead()
const pinia= createPinia()
app.use(vuetify)
app.use(pinia)
app.use(router)
app.use(head)

//Components
app.component('language',Language)

app.mount('#app')
