/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-29 09:51:46
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { debounce } from './libs/tools.js'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { appConfig } from '../appConfig'

console.log()
Sentry.init({
  dsn: 'http://4ded702fd7924437882ee4518a245eca@120.26.91.104:9000/2',
  integrations: [new VueIntegration({Vue,
    attachProps: true})],
  release: appConfig.release
})

console.log(appConfig.release)

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$debounce = debounce



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
