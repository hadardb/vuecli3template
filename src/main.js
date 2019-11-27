import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { debounce, errorFunc } from './libs/tools.js'


Vue.config.productionTip = false

Vue.prototype.$debounce = debounce
Vue.prototype.$errorFunc = errorFunc



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
