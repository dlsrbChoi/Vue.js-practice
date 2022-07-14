import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins.js'
import i18nPlugin from './plugins/i18n'
import store from './store'

const i18nString = {
  en: {
    hi: 'Hello!',
    save: 'Save'
  },
  ko: {
    hi: '안녕하세요!',
    save: '저장'
  }
}

const app = createApp(App)
app.use(router)
app.mount('#app')
app.mixin(mixins)
app.use(i18nPlugin, i18nString)
app.use(store)
app.directive('focus', {
  mounted(el) {
    el.focus() ;
  }
})

window.Kakao.init("9fec04fa20baed0ee099cd83c9111472"); // 발급 받은 앱키
