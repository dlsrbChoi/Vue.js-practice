import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.mixin(mixins)
