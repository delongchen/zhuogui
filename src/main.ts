import { createApp } from 'vue'
import App from './App.vue'

import { lazy_use } from "@/core/lazy_use";

const app = createApp(App)

lazy_use(app)

app.mount('#app')
