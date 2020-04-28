/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-28 08:49:37
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { debounce } from './libs/tools.js'


Vue.config.productionTip = false

Vue.prototype.$debounce = debounce



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
